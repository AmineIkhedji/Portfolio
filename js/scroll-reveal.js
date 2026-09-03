// ==================== SCROLL REVEAL ====================

(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const revealItems = document.querySelectorAll('[data-reveal]');
    if (!revealItems.length) return;

    document.querySelectorAll('[data-reveal-group]').forEach((group) => {
        group.querySelectorAll('[data-reveal]').forEach((element, index) => {
            element.style.setProperty('--reveal-delay', `${Math.min(index * 80, 400)}ms`);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
    }, {
        threshold: 0.12,
        rootMargin: '-8% 0px -8% 0px',
    });

    revealItems.forEach((element) => observer.observe(element));
})();