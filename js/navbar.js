// ==================== NAVBAR JAVASCRIPT ====================

// Sélection des éléments
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');
const logo = document.getElementById('logo');
const logoText = document.getElementById('logoText');
const themeToggle = document.getElementById('themeToggle');
const languageOptions = document.querySelectorAll('.language-option');
const navLinkElements = document.querySelectorAll('.nav-link');

languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        languageOptions.forEach(languageOption => {
            const isSelected = languageOption === option;
            languageOption.classList.toggle('active', isSelected);
            languageOption.setAttribute('aria-pressed', String(isSelected));
        });
    });
});

// ==================== THEME ====================

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.dataset.theme = 'light';
}

function updateThemeIcon() {
    const isLightTheme = document.documentElement.dataset.theme === 'light';

    themeToggle.setAttribute(
        'aria-label',
        isLightTheme ? 'Activer le thème sombre' : 'Activer le thème clair'
    );
}

updateThemeIcon();

themeToggle.addEventListener('click', () => {
    const isLightTheme = document.documentElement.dataset.theme === 'light';

    if (isLightTheme) {
        delete document.documentElement.dataset.theme;
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
    }

    updateThemeIcon();
});

// ==================== MENU BURGER ====================
burgerMenu.addEventListener('click', () => {
    // Toggle la classe active sur le menu burger et les liens
    const isMenuOpen = burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active', isMenuOpen);
    burgerMenu.setAttribute('aria-expanded', String(isMenuOpen));
    
    // Animation du burger en croix
    const lines = burgerMenu.querySelectorAll('.burger-line');
    if (burgerMenu.classList.contains('active')) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }
});

// Fermer le menu quand on clique sur un lien
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burgerMenu.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
        
        // Reset burger animation
        const lines = burgerMenu.querySelectorAll('.burger-line');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    });
});

// ==================== NAVIGATION ACTIVE ====================
// Gestion du clic sur les liens
navLinkElements.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Retirer la classe active de tous les liens
        navLinkElements.forEach(l => l.classList.remove('active'));
        
        // Ajouter la classe active au lien cliqué
        this.classList.add('active');
        
        // Scroll vers la section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Détecter la section active au scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinkElements.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});


// ==================== ANIMATION LOGO ====================

const fullName = "Ikhedji Amine";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let isAnimating = false;
let animationTimers = [];

function animateLogo() {

    if (isAnimating) return;

    isAnimating = true;

    // Nettoyer les anciennes animations
    animationTimers.forEach(timer => {
        clearTimeout(timer);
        clearInterval(timer);
    });

    animationTimers = [];

    logoText.innerHTML = "";

    const letters = fullName.split("");

    letters.forEach((finalLetter, index) => {

        // Gestion de l'espace
        if (finalLetter === " ") {
            const space = document.createElement("span");
            space.textContent = "\u00A0";
            logoText.appendChild(space);
            return;
        }

        const span = document.createElement("span");

        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(5px)";
        span.style.transition =
            "opacity 0.15s ease, transform 0.15s ease";

        // Lettre aléatoire de départ
        span.textContent =
            characters[Math.floor(Math.random() * characters.length)];

        logoText.appendChild(span);

        // Délai entre chaque lettre
        const startDelay = index * 45;

        const startTimer = setTimeout(() => {

            span.style.opacity = "1";
            span.style.transform = "translateY(0)";

            let count = 0;

            // Chaque lettre ne défile que quelques fois
            const maxIterations = 5 + Math.floor(Math.random() * 4);

            const interval = setInterval(() => {

                // Dernière itération = vraie lettre
                if (count >= maxIterations) {

                    clearInterval(interval);

                    span.textContent = finalLetter;

                    // Petite stabilisation
                    span.style.transform = "translateY(-2px)";

                    requestAnimationFrame(() => {
                        span.style.transform = "translateY(0)";
                    });

                    return;
                }

                // Lettre aléatoire
                span.textContent =
                    characters[Math.floor(Math.random() * characters.length)];

                count++;

            }, 22);

            animationTimers.push(interval);

        }, startDelay);

        animationTimers.push(startTimer);
    });

    // Fin de l'animation
    const endTimer = setTimeout(() => {
        isAnimating = false;
    }, letters.length * 45 + 500);

    animationTimers.push(endTimer);
}


function resetLogo() {

    // Arrêter les animations en cours
    animationTimers.forEach(timer => {
        clearTimeout(timer);
        clearInterval(timer);
    });

    animationTimers = [];
    isAnimating = false;

    const spans = logoText.querySelectorAll("span");

    spans.forEach((span, index) => {

        setTimeout(() => {

            span.style.opacity = "0";
            span.style.transform = "translateY(-5px)";

        }, index * 25);

    });

    // Retour à IA
    setTimeout(() => {

        logoText.textContent = "IA";

    }, spans.length * 25 + 100);
}


// ==================== ÉVÉNEMENTS LOGO ====================

logo.addEventListener("mouseenter", animateLogo);
logo.addEventListener("mouseleave", resetLogo);

