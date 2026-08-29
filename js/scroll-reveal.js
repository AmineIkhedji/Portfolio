// ==================== SCROLL REVEAL ====================
// Anime l'apparition des éléments [data-reveal] au scroll, dans les deux
// sens : la classe .is-visible est ajoutée quand l'élément entre dans le
// viewport, et retirée quand il en ressort, pour que l'animation se
// rejoue à chaque passage (montée ou descente), et pour que chaque
// élément disparaisse précisément quand IL atteint la navbar (pas
// seulement quand toute sa section a quitté l'écran).
//
// IMPORTANT : on n'observe jamais l'élément qu'on anime lui-même (son
// transform d'animation ferait bouger sa propre boîte observée, avec un
// risque de clignotement). On observe une sentinelle invisible, sibling
// stable placée juste avant chaque élément, positionnée explicitement en
// `top`/`left` sur les coordonnées réelles de l'élément (via offsetTop/
// offsetLeft) :
//   - `position: absolute` la retire du flux normal, donc dans un
//     conteneur `grid`/`flex` avec `gap`, elle ne compte plus comme un
//     élément à part entière et ne décale plus les vrais enfants ;
//   - mais sans coordonnées explicites, un enfant absolu non placé dans
//     une grille retombe par défaut sur la cellule (1,1) — toutes les
//     sentinelles d'un même conteneur grid se retrouveraient au même
//     endroit. On calcule donc top/left nous-mêmes pour que chaque
//     sentinelle reste bien à la position réelle de SON élément.

(function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // le CSS affiche déjà tout directement

    const allItems = document.querySelectorAll('[data-reveal]');
    if (!allItems.length) return;

    // ---------- Stagger automatique ----------
    // Les éléments regroupés sous un même [data-reveal-group] reçoivent
    // un délai croissant, pour un effet "en cascade" à l'apparition.
    document.querySelectorAll('[data-reveal-group]').forEach((group) => {
        const children = group.querySelectorAll('[data-reveal]');
        children.forEach((el, index) => {
            el.style.setProperty('--reveal-delay', `${index * 90}ms`);
        });
    });

    const observerOptions = {
        threshold: 0,
        // La marge du haut (-100px) correspond à la hauteur de la navbar :
        // un élément est considéré "sorti" dès qu'il atteint ce niveau.
        rootMargin: '-100px 0px -10% 0px',
    };

    // [data-reveal-once] (optionnel) : l'élément s'anime une seule fois à
    // sa première apparition, puis reste visible même s'il ressort de la
    // zone observée.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const target = entry.target.__revealTarget;
            if (!target) return;

            const playOnce = target.hasAttribute('data-reveal-once');

            if (entry.isIntersecting) {
                target.classList.add('is-visible');
                if (playOnce) observer.unobserve(entry.target);
            } else if (!playOnce) {
                target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    const tracked = [];

    allItems.forEach((el) => {
        const parent = el.parentNode;

        // La sentinelle se positionne en top/left par rapport à ce
        // parent : on s'assure qu'il fait office de repère (offsetParent),
        // sinon le positionnement remonterait à un ancêtre plus lointain.
        if (window.getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative';
        }

        const sentinel = document.createElement('span');
        sentinel.setAttribute('aria-hidden', 'true');
        sentinel.style.cssText =
            'position:absolute; width:0; height:0; margin:0; padding:0; border:0; pointer-events:none;';
        sentinel.__revealTarget = el;

        parent.insertBefore(sentinel, el);
        observer.observe(sentinel);
        tracked.push({ sentinel, el });
    });

    // Place chaque sentinelle sur les coordonnées réelles (layout, donc
    // hors animation) de son élément.
    function positionSentinels() {
        tracked.forEach(({ sentinel, el }) => {
            sentinel.style.top = el.offsetTop + 'px';
            sentinel.style.left = el.offsetLeft + 'px';
        });
    }

    positionSentinels();
    // Recalcul après chargement complet (polices, images) et au resize,
    // car ces éléments peuvent changer la mise en page des grilles/flex.
    window.addEventListener('load', positionSentinels);
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(positionSentinels, 150);
    });
})();