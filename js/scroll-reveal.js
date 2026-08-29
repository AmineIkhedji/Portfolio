// ==================== SCROLL REVEAL ====================
// Anime l'apparition des éléments [data-reveal] au scroll, dans les deux
// sens : la classe .is-visible est ajoutée quand l'élément entre dans le
// viewport, et retirée quand il en ressort, pour que l'animation se
// rejoue à chaque passage (montée ou descente).
//
// IMPORTANT : on n'observe jamais l'élément qu'on anime lui-même.
// Comme l'animation déplace sa boîte via transform, l'observer pourrait
// détecter une sortie/entrée provoquée par l'animation elle-même et
// retoggle la classe en boucle (effet de tremblement infini), surtout
// près d'un bord fixe comme la navbar. On observe donc toujours un
// élément stable à la place : le conteneur du groupe, ou une sentinelle
// invisible placée juste avant l'élément isolé.

(function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // le CSS affiche déjà tout directement

    const allItems = document.querySelectorAll('[data-reveal]');
    if (!allItems.length) return;

    // ---------- Stagger automatique ----------
    // Les éléments regroupés sous un même [data-reveal-group] reçoivent
    // un délai croissant, pour un effet "en cascade".
    document.querySelectorAll('[data-reveal-group]').forEach((group) => {
        const children = group.querySelectorAll('[data-reveal]');
        children.forEach((el, index) => {
            el.style.setProperty('--reveal-delay', `${index * 90}ms`);
        });
    });

    const observerOptions = {
        threshold: 0,
        // On garde une marge par rapport aux bords du viewport, pour ne
        // pas déclencher l'animation pile sous la navbar fixe.
        rootMargin: '-100px 0px -10% 0px',
    };

    // ---------- Éléments groupés ----------
    // On observe le CONTENEUR du groupe (jamais animé), et on répercute
    // l'état sur ses enfants [data-reveal].
    const groupObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const children = entry.target.querySelectorAll('[data-reveal]');
            children.forEach((child) => {
                child.classList.toggle('is-visible', entry.isIntersecting);
            });
        });
    }, observerOptions);

    document.querySelectorAll('[data-reveal-group]').forEach((group) => {
        groupObserver.observe(group);
    });

    // ---------- Éléments isolés ----------
    // On observe une sentinelle statique (0×0, invisible) insérée juste
    // avant l'élément dans le flux normal, plutôt que l'élément animé
    // lui-même.
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const target = entry.target.__revealTarget;
            if (target) {
                target.classList.toggle('is-visible', entry.isIntersecting);
            }
        });
    }, observerOptions);

    allItems.forEach((el) => {
        // Si l'élément est déjà pris en charge par un data-reveal-group
        // parent, inutile de créer une sentinelle en plus.
        if (el.closest('[data-reveal-group]')) return;

        const sentinel = document.createElement('span');
        sentinel.setAttribute('aria-hidden', 'true');
        sentinel.style.cssText = 'display:block; width:0; height:0; margin:0; padding:0; border:0;';
        sentinel.__revealTarget = el;

        el.parentNode.insertBefore(sentinel, el);
        itemObserver.observe(sentinel);
    });
})();