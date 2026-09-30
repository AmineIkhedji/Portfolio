(function () {
  const splashScreen = document.getElementById("splashScreen");
  if (!splashScreen) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const MIN_DISPLAY_TIME = 900;

  document.body.classList.add("splash-active");

  const start = performance.now();

  function scrollToHashInstant() {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
    }
  }

  function removeSplash() {
    document.body.classList.remove("splash-active");
    splashScreen.remove();
  }

  function hideSplash() {
    const elapsed = performance.now() - start;
    const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);

    setTimeout(() => {
      document.body.classList.remove("splash-active");
      scrollToHashInstant();

      if (prefersReducedMotion) {
        removeSplash();
        return;
      }

      splashScreen.classList.add("splash-hide");

      splashScreen.addEventListener(
        "transitionend",
        () => {
          splashScreen.remove();
        },
        { once: true },
      );
    }, remaining);
  }

  if (document.readyState === "complete") {
    hideSplash();
  } else {
    window.addEventListener("load", hideSplash);
  }
})();