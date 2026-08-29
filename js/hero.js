// ==================== HERO — MACHINE À ÉCRIRE ====================

(function () {
    const roleText = document.getElementById('heroRoleText');
    if (!roleText) return;

    // Modifie librement cette liste : chaque texte sera tapé puis effacé, en boucle.
    const roles = [
        'Développeur polyvalent',
        'Étudiant en informatique',
        'Concepteur de solutions numériques',
        'En constante progression',
        'Passionné par la création',
    ];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Si l'utilisateur préfère un affichage sans animation, on affiche
    // simplement le premier rôle, sans effet de frappe.
    if (prefersReducedMotion) {
        roleText.textContent = roles[0];
        return;
    }

    const TYPE_SPEED = 70;       // vitesse de frappe (ms/caractère)
    const DELETE_SPEED = 40;     // vitesse d'effacement (ms/caractère)
    const PAUSE_AFTER_TYPE = 1600; // pause une fois le mot complet affiché
    const PAUSE_AFTER_DELETE = 300; // pause une fois le mot effacé

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        roleText.textContent = currentRole.slice(0, charIndex);

        let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

        if (!isDeleting && charIndex === currentRole.length) {
            // Mot complet : on attend avant de commencer à l'effacer.
            isDeleting = true;
            delay = PAUSE_AFTER_TYPE;
        } else if (isDeleting && charIndex === 0) {
            // Mot effacé : on passe au suivant.
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = PAUSE_AFTER_DELETE;
        }

        setTimeout(tick, delay);
    }

    tick();
})();