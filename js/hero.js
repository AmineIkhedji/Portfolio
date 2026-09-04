(function () {
  const roleText = document.getElementById("heroRoleText");
  if (!roleText) return;

  // Les rôles sont maintenant définis dans translations.js
  // On les récupère depuis la langue courante
  function getRoles() {
    const lang = window.currentLanguage || "fr";
    const t = window.translations[lang];
    if (!t) return defaultHeroRoles[lang] || defaultHeroRoles.fr;
    return [
      t.hero.role_1,
      t.hero.role_2,
      t.hero.role_3,
      t.hero.role_4,
      t.hero.role_5,
    ];
  }

  // Variable globale pour que language.js puisse la modifier
  window.heroRoles = getRoles();

  // Fonction pour redémarrer l'animation
  window.restartHeroAnimation = function () {
    window.heroRoles = getRoles();
    // Réinitialiser l'animation
    if (window.heroInterval) {
      clearInterval(window.heroInterval);
    }
    // Redémarrer avec les nouveaux rôles
    startTypingAnimation();
  };

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    roleText.textContent = window.heroRoles[0];
    return;
  }

  const TYPE_SPEED = 70;
  const DELETE_SPEED = 40;
  const PAUSE_AFTER_TYPE = 1600;
  const PAUSE_AFTER_DELETE = 300;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId = null;

  function tick() {
    const roles = window.heroRoles;
    if (!roles || roles.length === 0) {
      roleText.textContent = "";
      return;
    }

    const currentRole = roles[roleIndex % roles.length];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    roleText.textContent = currentRole.slice(0, charIndex);

    let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      delay = PAUSE_AFTER_TYPE;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = PAUSE_AFTER_DELETE;
    }

    timeoutId = setTimeout(tick, delay);
  }

  function startTypingAnimation() {
    if (timeoutId) clearTimeout(timeoutId);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    tick();
  }

  startTypingAnimation();
})();
