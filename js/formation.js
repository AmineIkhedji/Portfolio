// ==================== FORMATION ====================
// Version avec traduction

function getEducationData() {
  const lang = window.currentLanguage || "fr";
  const t = window.translations[lang];
  if (!t) return getDefaultEducation("fr");
  return t.education;
}

function getDefaultEducation(lang) {
  return {
    timeline: carriereData,
    certifications: certificationsData,
  };
}

function renderCarriere() {
  const container = document.getElementById("formationTimeline");
  if (!container) return;

  const data = getEducationData();
  const ICON_MEDAL =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /><circle cx="12" cy="8" r="6" /></svg>';

  container.innerHTML = data.timeline
    .map(
      (item, index) => `
        <div class="formation-timeline-item" data-reveal="up">
            <div class="formation-timeline-marker">
                <span class="formation-timeline-dot"></span>
                ${index < data.timeline.length - 1 ? '<span class="formation-timeline-line"></span>' : ""}
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

function renderCertifications() {
  const container = document.getElementById("certificationsGrid");
  if (!container) return;

  const data = getEducationData();
  const ICON_MEDAL =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /><circle cx="12" cy="8" r="6" /></svg>';

  container.innerHTML = data.certifications
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

// Rendre les fonctions accessibles globalement pour le re-rendu
window.renderFormationWithTranslation = function (educationData) {
  const timelineContainer = document.getElementById("formationTimeline");
  if (timelineContainer) {
    const ICON_MEDAL =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /><circle cx="12" cy="8" r="6" /></svg>';
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
};

renderCarriere();
renderCertifications();
