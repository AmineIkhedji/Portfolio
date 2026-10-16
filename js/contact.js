(() => {
  const button = document.getElementById("contact-reveal-button");
  const widgetContainer = document.getElementById("contact-turnstile");
  const status = document.getElementById("contact-status");
  const emailLink = document.getElementById("contact-email");
  const config = window.CONTACT_CONFIG || {};

  if (!button || !widgetContainer || !status || !emailLink) return;

  let turnstileLoader;
  let widgetId;
  let statusKey = "";

  function updateStatus() {
    const language = window.currentLanguage || "fr";
    const contactText = translations[language].contact;
    status.textContent = statusKey ? contactText[statusKey] : "";
  }

  window.updateContactTexts = (contactText) => {
    button.textContent = contactText.revealButton;
    updateStatus();
  };

  function setStatus(key) {
    statusKey = key;
    updateStatus();
  }

  function loadTurnstile() {
    if (window.turnstile) return Promise.resolve();
    if (turnstileLoader) return turnstileLoader;

    turnstileLoader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.turnstile) resolve();
        else {
          turnstileLoader = undefined;
          reject(new Error("Turnstile did not initialize"));
        }
      };
      script.onerror = () => {
        turnstileLoader = undefined;
        reject(new Error("Turnstile failed to load"));
      };
      document.head.appendChild(script);
    });

    return turnstileLoader;
  }

  async function revealEmail(token) {
    setStatus("verifying");

    try {
      const response = await fetch(config.workerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Contact verification failed");

      const result = await response.json();
      if (typeof result.email !== "string" || !result.email) {
        throw new Error("The contact service returned no email address");
      }

      emailLink.textContent = result.email;
      emailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(result.email)}`;
      emailLink.hidden = false;
      widgetContainer.hidden = true;
      button.hidden = true;
      setStatus("emailRevealed");
    } catch {
      setStatus("emailError");
      button.hidden = false;
      button.disabled = false;
      if (widgetId !== undefined && window.turnstile) {
        window.turnstile.reset(widgetId);
      }
    }
  }

  button.addEventListener("click", async () => {
    if (!config.turnstileSiteKey || !config.workerUrl) {
      setStatus("notConfigured");
      return;
    }

    button.disabled = true;
    setStatus("loadingWidget");
    widgetContainer.hidden = false;

    try {
      await loadTurnstile();
      if (widgetId === undefined) {
        widgetId = window.turnstile.render(widgetContainer, {
          sitekey: config.turnstileSiteKey,
          action: "contact_email",
          callback: revealEmail,
          "expired-callback": () => {
            setStatus("widgetExpired");
            button.hidden = false;
            button.disabled = false;
          },
          "error-callback": () => {
            setStatus("widgetError");
            button.hidden = false;
            button.disabled = false;
          },
        });
      } else {
        window.turnstile.reset(widgetId);
      }
      button.hidden = true;
      button.disabled = false;
      widgetContainer.hidden = false;
    } catch {
      setStatus("widgetError");
      button.disabled = false;
      widgetContainer.hidden = true;
    }
  });
})();
