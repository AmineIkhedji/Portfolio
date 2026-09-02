// ==================== SPLASH SCREEN ====================

(function () {
    const splashScreen = document.getElementById('splashScreen');
    if (!splashScreen) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MIN_DISPLAY_TIME = 900; // durée minimale d'affichage du splash, en ms

    // Présent quand on revient depuis la page d'un projet (voir
    // projet-page.js) : on saute le splash et on va directement à la
    // section #projets, au lieu de rejouer l'intro et de recharger tout
    // le monde à l'accueil.
    const skipSplash = new URLSearchParams(window.location.search).has('back');

    document.body.classList.add('splash-active');

    const start = performance.now();

    function scrollToHashInstant() {
        if (!window.location.hash) return;
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
    }

    function removeSplash() {
        document.body.classList.remove('splash-active');
        splashScreen.remove();
    }

    function notifyReady() {
        // Signale à projets.js que le scroll est en place et la mise en page
        // stable : c'est le bon moment pour mesurer la position des cartes
        // et lancer l'éventuelle animation de retour d'un projet (voir
        // playBackwardTransition dans projets.js).
        window.dispatchEvent(new CustomEvent('app:splash-ready'));
    }

    function hideSplash() {
        if (skipSplash) {
            // On retire d'abord "splash-active" (qui bloque le scroll via
            // overflow:hidden) AVANT de scroller, tout en gardant le splash
            // (position fixed, opaque) au-dessus pour que rien ne soit
            // visible pendant l'opération.
            document.body.classList.remove('splash-active');
            scrollToHashInstant();
            notifyReady();
            removeSplash();
            return;
        }

        const elapsed = performance.now() - start;
        const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);

        setTimeout(() => {
            document.body.classList.remove('splash-active');
            scrollToHashInstant();
            notifyReady();

            // Si l'utilisateur préfère un affichage sans animation, on
            // retire directement le splash sans transition.
            if (prefersReducedMotion) {
                removeSplash();
                return;
            }

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