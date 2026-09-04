// ==================== FOND ANIMÉ (étoiles / constellation) ====================
// Canvas fixed, créé dynamiquement et injecté en premier enfant du <body>.
// Les particules dérivent lentement puis sont repoussées quand la souris
// s'approche, avec un retour en douceur (easing) vers leur trajectoire
// normale une fois la souris éloignée.
//
// Rendu différent selon le thème actif (lu en direct sur data-theme à
// chaque frame, donc suit le theme-toggle sans recharger la page) :
//  - dark mode  -> étoiles scintillantes (drawStars)
//  - light mode -> constellation, points reliés par des lignes (drawConstellation)

(function () {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Comme pour le reste du site (scroll-reveal.js), on ne fait rien du
  // tout si l'utilisateur préfère un affichage sans animation.
  if (prefersReducedMotion) return;

  const canvas = document.createElement("canvas");
  canvas.id = "starfield";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");

  const STAR_DENSITY = 0.00009; // étoiles par px²
  const MAX_STARS = 220;
  const REPEL_RADIUS = 140; // px, rayon d'effet autour de la souris
  const REPEL_STRENGTH = 34; // px, déplacement max d'une étoile
  const EASE = 0.06; // vitesse de retour/de suivi de la répulsion

  // Light mode : rendu "constellation" (points + lignes entre points
  // proches) au lieu des étoiles scintillantes du dark mode.
  const LINK_DISTANCE = 110; // px, distance max pour tracer une ligne
  const LINK_COLOR = "100, 116, 139"; // rgb du slate, lignes/points en light
  const DARK_COLOR = "245, 247, 250"; // rgb quasi blanc, points en dark

  let width = 0;
  let height = 0;
  let dpr = 1;
  let stars = [];
  let rafId = null;
  const mouse = { x: -9999, y: -9999 };

  function createStar() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.4,
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.0018 + 0.0006,
      twinklePhase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      dx: 0,
      dy: 0,
    };
  }

  function initStars() {
    const count = Math.min(
      MAX_STARS,
      Math.round(width * height * STAR_DENSITY),
    );
    stars = Array.from({ length: count }, createStar);
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initStars();
  }

  function isLightTheme() {
    return document.documentElement.dataset.theme === "light";
  }

  function step(t) {
    ctx.clearRect(0, 0, width, height);
    const light = isLightTheme();

    for (const s of stars) {
      // Dérive lente, avec repassage de l'autre côté de l'écran.
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < -10) s.x = width + 10;
      if (s.x > width + 10) s.x = -10;
      if (s.y < -10) s.y = height + 10;
      if (s.y > height + 10) s.y = -10;

      // Cible de déplacement : s'éloigne de la souris si elle est proche.
      let targetDx = 0;
      let targetDy = 0;
      const mdx = s.x + s.dx - mouse.x;
      const mdy = s.y + s.dy - mouse.y;
      const dist = Math.hypot(mdx, mdy);

      if (dist < REPEL_RADIUS && dist > 0.01) {
        const force = 1 - dist / REPEL_RADIUS;
        targetDx = (mdx / dist) * force * REPEL_STRENGTH;
        targetDy = (mdy / dist) * force * REPEL_STRENGTH;
      }

      // Easing vers la cible : effet de répulsion douce, et retour tout
      // aussi doux quand la souris s'éloigne.
      s.dx += (targetDx - s.dx) * EASE;
      s.dy += (targetDy - s.dy) * EASE;
    }

    if (light) {
      drawConstellation(t);
    } else {
      drawStars(t);
    }

    rafId = requestAnimationFrame(step);
  }

  // Dark mode : points scintillants, sans lignes.
  function drawStars(t) {
    for (const s of stars) {
      const twinkle = Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.3 + 0.7;
      const alpha = s.baseAlpha * twinkle;

      ctx.beginPath();
      ctx.arc(s.x + s.dx, s.y + s.dy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${DARK_COLOR}, ${alpha})`;
      ctx.fill();
    }
  }

  // Light mode : petits points fixes reliés par des lignes fines quand ils
  // sont assez proches, opacité de la ligne dégressive avec la distance.
  function drawConstellation() {
    for (let i = 0; i < stars.length; i++) {
      const a = stars[i];
      const ax = a.x + a.dx;
      const ay = a.y + a.dy;

      for (let j = i + 1; j < stars.length; j++) {
        const b = stars[j];
        const bx = b.x + b.dx;
        const by = b.y + b.dy;
        const dist = Math.hypot(ax - bx, ay - by);

        if (dist < LINK_DISTANCE) {
          const alpha = (1 - dist / LINK_DISTANCE) * 0.35;
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = `rgba(${LINK_COLOR}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(ax, ay, a.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${LINK_COLOR}, ${a.baseAlpha * 0.5})`;
      ctx.fill();
    }
  }

  function start() {
    if (rafId) return;
    rafId = requestAnimationFrame(step);
  }

  function stop() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (width && height) ctx.clearRect(0, 0, width, height);
  }

  // L'effet tourne désormais dans les deux thèmes (étoiles en dark,
  // constellation en light, voir drawStars/drawConstellation) : on se
  // contente de lancer la boucle une fois pour toutes.
  function start_once() {
    canvas.classList.add("is-visible");
    start();
  }

  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Souris qui quitte la fenêtre : on l'envoie hors champ pour relâcher
  // toutes les étoiles.
  window.addEventListener("mouseleave", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  document.addEventListener(
    "touchmove",
    (e) => {
      const touch = e.touches[0];
      if (touch) {
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
      }
    },
    { passive: true },
  );

  resize();
  start_once();
})();
