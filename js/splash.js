// ==================== SPLASH SCREEN ====================

(function () {
    const splashScreen = document.getElementById('splashScreen');
    if (!splashScreen) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MIN_DISPLAY_TIME = 900; // durée minimale d'affichage du splash, en ms

    document.body.classList.add('splash-active');

    const start = performance.now();

    function removeSplash() {
        document.body.classList.remove('splash-active');
        splashScreen.remove();
    }

    function hideSplash() {
        const elapsed = performance.now() - start;
        const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);

        setTimeout(() => {
            // Si l'utilisateur préfère un affichage sans animation,
            // on retire directement le splash sans transition.
            if (prefersReducedMotion) {
                removeSplash();
                return;
            }

            document.body.classList.remove('splash-active');
            splashScreen.classList.add('splash-hide');

            splashScreen.addEventListener(
                'transitionend',
                () => {
                    splashScreen.remove();
                },
                { once: true }
            );
        }, remaining);
    }

    // On attend le chargement complet de la page (images, polices, etc.)
    // avant de lever le splash screen.
    if (document.readyState === 'complete') {
        hideSplash();
    } else {
        window.addEventListener('load', hideSplash);
    }
})();
