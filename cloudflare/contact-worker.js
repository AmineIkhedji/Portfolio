const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

function jsonResponse(body, status, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...headers },
  });
}

function getAllowedOrigin(env) {
  if (!env.ALLOWED_ORIGIN) return null;

  try {
    const url = new URL(env.ALLOWED_ORIGIN);
    if (url.origin !== env.ALLOWED_ORIGIN) return null;
    return url.origin;
  } catch {
    return null;
  }
}

export default {
  async fetch(request, env) {
    const allowedOrigin = getAllowedOrigin(env);
    if (!allowedOrigin) {
      return jsonResponse({ error: "Contact service is not configured" }, 503);
    }

    const origin = request.headers.get("Origin");
    if (origin !== allowedOrigin) {
      return jsonResponse({ error: "Origin is not allowed" }, 403);
    }

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }
    if (request.method !== "POST") {
      return jsonResponse(
        { error: "Method not allowed" },
        405,
        { ...corsHeaders, Allow: "POST, OPTIONS" },
      );
    }
    const contentType = request.headers.get("Content-Type") || "";
    if (contentType.split(";")[0].trim().toLowerCase() !== "application/json") {
      return jsonResponse({ error: "Expected JSON request" }, 415, corsHeaders);
    }
    if (
      !env.TURNSTILE_SECRET_KEY ||
      typeof env.CONTACT_EMAIL !== "string" ||
      !env.CONTACT_EMAIL.trim()
    ) {
      return jsonResponse(
        { error: "Contact service is not configured" },
        503,
        corsHeaders,
      );
    }

    let body;
    try {
      const requestBody = await request.text();
      if (requestBody.length > 4096) {
        return jsonResponse({ error: "Request is too large" }, 413, corsHeaders);
      }
      body = JSON.parse(requestBody);
    } catch {
      return jsonResponse({ error: "Invalid JSON request" }, 400, corsHeaders);
    }
    if (
      body === null ||
      typeof body !== "object" ||
      typeof body.token !== "string" ||
      !body.token ||
      body.token.length > 2048
    ) {
      return jsonResponse({ error: "Invalid verification token" }, 400, corsHeaders);
    }

    const verificationBody = new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: body.token,
    });
    const remoteIp = request.headers.get("CF-Connecting-IP");
    if (remoteIp) verificationBody.set("remoteip", remoteIp);

    let verification;
    try {
      const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: verificationBody,
        },
      );
      if (!response.ok) {
        return jsonResponse(
          { error: "Verification service is unavailable" },
          502,
          corsHeaders,
        );
      }
      verification = await response.json();
    } catch {
      return jsonResponse(
        { error: "Verification service is unavailable" },
        502,
        corsHeaders,
      );
    }

    if (!verification || typeof verification !== "object") {
      return jsonResponse(
        { error: "Verification service returned an invalid response" },
        502,
        corsHeaders,
      );
    }

    const expectedHostname = new URL(allowedOrigin).hostname;
    if (
      verification.success !== true ||
      verification.hostname !== expectedHostname ||
      verification.action !== "contact_email"
    ) {
      return jsonResponse({ error: "Verification failed" }, 403, corsHeaders);
    }

    return jsonResponse({ email: env.CONTACT_EMAIL }, 200, corsHeaders);
  },
};
