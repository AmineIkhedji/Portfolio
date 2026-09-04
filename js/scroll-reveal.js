// ==================== SCROLL REVEAL ====================

(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "-8% 0px -8% 0px",
    },
  );

  window.refreshScrollReveal = function () {
    document.querySelectorAll("[data-reveal-group]").forEach((group) => {
      group.querySelectorAll("[data-reveal]").forEach((element, index) => {
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min(index * 80, 400)}ms`,
        );
      });
    });

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      observer.observe(element);

      const rect = element.getBoundingClientRect();
      const isInViewport = rect.bottom > 0 && rect.top < window.innerHeight;
      if (isInViewport) {
        element.classList.add("is-visible");
      }
    });
  };

  window.refreshScrollReveal();
})();
