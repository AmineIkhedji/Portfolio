// ==================== GESTIONNAIRE DE LANGUE ====================

const DEFAULT_LANGUAGE = "fr";
let currentLanguage = DEFAULT_LANGUAGE;

// ============ FONCTIONS PRINCIPALES ============

function getLanguage() {
  try {
    const stored = localStorage.getItem("language");
    if (stored && (stored === "fr" || stored === "en")) {
      return stored;
    }
  } catch (e) {}
  return DEFAULT_LANGUAGE;
}

function setLanguage(lang) {
  if (lang !== "fr" && lang !== "en") return;
  currentLanguage = lang;
  window.currentLanguage = lang;
  try {
    localStorage.setItem("language", lang);
  } catch (e) {}

  // Mettre à jour l'interface
  updateLanguageUI(lang);

  // Mettre à jour tous les textes
  updateAllTexts(lang);

  // Re-rendre les sections dynamiques
  reRenderDynamicContent(lang);
}

// ============ MISE À JOUR DE L'UI ============

function updateLanguageUI(lang) {
  document.documentElement.lang = lang;

  // Mettre à jour les boutons de langue
  document.querySelectorAll(".language-option").forEach((btn) => {
    const isActive = btn.dataset.language === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

// ============ MISE À JOUR DES TEXTES STATIQUES ============

function updateAllTexts(lang) {
  const t = translations[lang];
  if (!t) return;

  // === NAVBAR ===
  updateElementText('[data-i18n="nav.home"]', t.nav.home);
  updateElementText('[data-i18n="nav.about"]', t.nav.about);
  updateElementText('[data-i18n="nav.skills"]', t.nav.skills);
  updateElementText('[data-i18n="nav.projects"]', t.nav.projects);
  updateElementText('[data-i18n="nav.education"]', t.nav.education);
  updateElementText('[data-i18n="nav.contact"]', t.nav.contact);

  // === HERO ===
  updateElementText('[data-i18n="hero.eyebrow"]', t.hero.eyebrow);
  updateElementHTML('[data-i18n="hero.title"]', t.hero.title);
  updateElementText('[data-i18n="hero.cta_primary"]', t.hero.cta_primary);
  updateElementText('[data-i18n="hero.cta_secondary"]', t.hero.cta_secondary);

  // Les rôles sont gérés dynamiquement dans hero.js
  // On met à jour la variable globale pour que hero.js l'utilise
  if (window.heroRoles) {
    window.heroRoles = [
      t.hero.role_1,
      t.hero.role_2,
      t.hero.role_3,
      t.hero.role_4,
      t.hero.role_5,
    ];
    // Redémarrer l'animation du héros
    if (window.restartHeroAnimation) {
      window.restartHeroAnimation();
    }
  }

  // === À PROPOS ===
  updateElementHTML('[data-i18n="about.title"]', t.about.title);
  updateElementText('[data-i18n="about.lead"]', t.about.lead);
  updateElementText('[data-i18n="about.p1"]', t.about.p1);
  updateElementText('[data-i18n="about.p2"]', t.about.p2);

  updateElementText(
    '[data-i18n="about.stats.card1.number"]',
    t.about.stats.card1.number,
  );
  updateElementText(
    '[data-i18n="about.stats.card1.label"]',
    t.about.stats.card1.label,
  );
  updateElementText(
    '[data-i18n="about.stats.card2.number"]',
    t.about.stats.card2.number,
  );
  updateElementText(
    '[data-i18n="about.stats.card2.label"]',
    t.about.stats.card2.label,
  );
  updateElementText(
    '[data-i18n="about.stats.card3.number"]',
    t.about.stats.card3.number,
  );
  updateElementText(
    '[data-i18n="about.stats.card3.label"]',
    t.about.stats.card3.label,
  );
  updateElementText(
    '[data-i18n="about.stats.card4.number"]',
    t.about.stats.card4.number,
  );
  updateElementText(
    '[data-i18n="about.stats.card4.label"]',
    t.about.stats.card4.label,
  );

  updateElementText('[data-i18n="about.meta.location"]', t.about.meta.location);
  updateElementText(
    '[data-i18n="about.meta.location_value"]',
    t.about.meta.location_value,
  );
  updateElementText(
    '[data-i18n="about.meta.education"]',
    t.about.meta.education,
  );
  updateElementText(
    '[data-i18n="about.meta.education_value"]',
    t.about.meta.education_value,
  );
  updateElementText(
    '[data-i18n="about.meta.experience"]',
    t.about.meta.experience,
  );
  updateElementText(
    '[data-i18n="about.meta.experience_value"]',
    t.about.meta.experience_value,
  );

  // === COMPÉTENCES ===
  updateElementHTML('[data-i18n="skills.title"]', t.skills.title);

  // === PROJETS ===
  updateElementHTML('[data-i18n="projects.title"]', t.projects.title);
  updateElementText('[data-i18n="projects.read_more"]', t.projects.read_more);
  updateElementText(
    '[data-i18n="projects.view_project"]',
    t.projects.view_project,
  );
  updateElementText('[data-i18n="projects.demo"]', t.projects.demo);
  updateElementText('[data-i18n="projects.github"]', t.projects.github);
  updateElementText('[data-i18n="projects.back"]', t.projects.back);

  // === FORMATION ===
  updateElementHTML('[data-i18n="education.title"]', t.education.title);
  updateElementText(
    '[data-i18n="education.career_title"]',
    t.education.career_title,
  );
  updateElementText(
    '[data-i18n="education.certifications_title"]',
    t.education.certifications_title,
  );

  // === CONTACT ===
  updateElementHTML('[data-i18n="contact.title"]', t.contact.title);
  updateElementText('[data-i18n="contact.subtitle"]', t.contact.subtitle);
  if (window.updateContactTexts) window.updateContactTexts(t.contact);

  // === FOOTER ===
  const year = new Date().getFullYear();
  const copyrightText = t.footer.copyright.replace("{year}", year);
  const footerEl = document.querySelector('[data-i18n="footer.copyright"]');
  if (footerEl) footerEl.innerHTML = copyrightText;

  // === PROJECT NOT FOUND (page projet) ===
  if (t.projects.not_found) {
    updateElementText(
      '[data-i18n="projects.not_found.title"]',
      t.projects.not_found.title,
    );
    updateElementText(
      '[data-i18n="projects.not_found.description"]',
      t.projects.not_found.description,
    );
  }
}

// ============ UTILITAIRES ============

function updateElementText(selector, text) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = text;
  });
}

function updateElementHTML(selector, html) {
  document.querySelectorAll(selector).forEach((el) => {
    el.innerHTML = html;
  });
}

// ============ RECONSTRUCTION DES SECTIONS DYNAMIQUES ============

function reRenderDynamicContent(lang) {
  const t = translations[lang];
  if (!t) return;

  // === COMPÉTENCES ===
  if (document.getElementById("competencesGrid")) {
    renderCompetencesWithTranslation(t.skills.categories);
  }

  // === FORMATION ===
  if (
    document.getElementById("formationTimeline") &&
    document.getElementById("certificationsGrid")
  ) {
    renderFormationWithTranslation(t.education);
  }

  // === PROJETS ===
  if (document.getElementById("projetsGrid")) {
    renderProjetsWithTranslation(t.projects);
  }

  if (window.refreshScrollReveal) {
    window.refreshScrollReveal();
  }
}

// ============ FONCTIONS DE RENDU AVEC TRADUCTION ============

function renderCompetencesWithTranslation(categories) {
  const container = document.getElementById("competencesGrid");
  if (!container) return;

  const categoriesKeys = [
    "web",
    "mobile",
    "games",
    "backend",
    "databases",
    "tools",
    "cloud",
    "design",
    "languages",
  ];

  container.innerHTML = categoriesKeys
    .map((key) => {
      const cat = categories[key];
      if (!cat) return "";
      return `
            <div class="competence-card" data-reveal="up">
                <div class="competence-header">
                    <div class="competence-icon">${getIconForCategory(key)}</div>
                    <div>
                        <h3 class="competence-title">${cat.title}</h3>
                        <p class="competence-subtitle">${cat.subtitle}</p>
                    </div>
                </div>
                <div class="competence-tags">
                    ${cat.tags.map((tag) => `<span class="competence-tag">${tag}</span>`).join("")}
                </div>
            </div>
        `;
    })
    .join("");
}

function getIconForCategory(key) {
  const icons = {
    web: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>',
    mobile:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>',
    games:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11" /><line x1="8" x2="8" y1="9" y2="13" /><line x1="15" x2="15.01" y1="12" y2="12" /><line x1="18" x2="18.01" y1="10" y2="10" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" /></svg>',
    backend:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>',
    databases:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>',
    tools:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><line x1="7" x2="17" y1="12" y2="12" /></svg>',
    cloud:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>',
    design:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>',
    languages:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>',
  };
  return icons[key] || icons.web;
}

function renderFormationWithTranslation(educationData) {
  // === TIMELINE ===
  const timelineContainer = document.getElementById("formationTimeline");
  if (timelineContainer) {
    timelineContainer.innerHTML = educationData.timeline
      .map(
        (item, index) => `
            <div class="formation-timeline-item" data-reveal="up">
                <div class="formation-timeline-marker">
                    <span class="formation-timeline-dot"></span>
                    ${index < educationData.timeline.length - 1 ? '<span class="formation-timeline-line"></span>' : ""}
                </div>
                <div class="formation-timeline-content">
                    <span class="formation-timeline-date">${item.date}</span>
                    <h4 class="formation-timeline-title">${item.title}</h4>
                    <p class="formation-timeline-description">${item.description}</p>
                </div>
            </div>
        `,
      )
      .join("");
  }

  // === CERTIFICATIONS ===
  const certsContainer = document.getElementById("certificationsGrid");
  if (certsContainer) {
    const ICON_MEDAL =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /><circle cx="12" cy="8" r="6" /></svg>';
    certsContainer.innerHTML = educationData.certifications
      .map(
        (cert) => `
            <div class="certification-card" data-reveal="up">
                <div class="certification-icon">${ICON_MEDAL}</div>
                <div class="certification-body">
                    <span class="certification-org">${cert.org}</span>
                    <h4 class="certification-title">${cert.title}</h4>
                </div>
            </div>
        `,
      )
      .join("");
  }
}

function renderProjetsWithTranslation(projectsData) {
  const container = document.getElementById("projetsGrid");
  if (!container) return;

  renderProjets(getLanguage());
  updateReadMoreVisibility();
}

// ============ EXPORT DES FONCTIONS ============

// Rendre disponibles globalement
window.translations = translations;
window.currentLanguage = currentLanguage;
window.getLanguage = getLanguage;
window.setLanguage = setLanguage;
window.updateAllTexts = updateAllTexts;
window.reRenderDynamicContent = reRenderDynamicContent;

// ============ INITIALISATION ============

document.addEventListener("DOMContentLoaded", function () {
  // Récupérer la langue sauvegardée
  const lang = getLanguage();
  currentLanguage = lang;
  window.currentLanguage = lang;

  // Mettre à jour l'interface
  updateLanguageUI(lang);
  updateAllTexts(lang);

  // Re-rendre les sections dynamiques (les données statiques sont déjà
  // chargées, mais on les remplace par les versions traduites)
  reRenderDynamicContent(lang);

  // Gérer les clics sur les boutons de langue
  document.querySelectorAll(".language-option").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.dataset.language;
      if (lang && lang !== currentLanguage) {
        setLanguage(lang);
      }
    });
  });
});

// Si les scripts dynamiques sont chargés avant language.js,
// on expose une fonction pour qu'ils puissent utiliser la langue courante
window.getCurrentLanguage = function () {
  return currentLanguage;
};
