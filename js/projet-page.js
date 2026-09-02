// ==================== PAGE DÉTAIL PROJET ====================
// Lit l'id du projet dans l'URL (?id=...) et affiche le contenu complet.

const ICON_EXTERNAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`;
const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 1.5 5 1.5 5 1.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 8.5c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
function getProjetIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProjetNotFound(heroContainer, container) {
  heroContainer.innerHTML = "";
  container.innerHTML = `
    <div class="projet-page-notfound">
      <h1>Projet introuvable</h1>
      <p>Ce projet n'existe pas ou a été retiré.</p>
      <a class="projet-btn projet-btn-primary" href="index.html#projets">Retour aux projets</a>
    </div>
  `;
  document.title = "Projet introuvable - Ikhedji Amine";
}

function renderProjetPage() {
  const heroContainer = document.getElementById("projetPageHero");
  const container = document.getElementById("projetPageContent");
  if (!heroContainer || !container) return;
  if (typeof projetsData === "undefined") return;

  const id = getProjetIdFromUrl();
  const projet = projetsData.find((p) => p.id === id);

  if (!projet) {
    renderProjetNotFound(heroContainer, container);
    return;
  }

  document.title = `${projet.title} - Ikhedji Amine`;

  const paragraphs =
    projet.fullDescription && projet.fullDescription.length
      ? projet.fullDescription
      : [projet.description];

  heroContainer.innerHTML = `
    <div class="projet-page-hero-image">
      <img
        id="projetHeroImage"
        src="${projet.image}"
        alt="${projet.title}"
        style="view-transition-name: projet-img-${projet.id};"
      />
    </div>
    <a href="index.html#projets" class="projet-back-btn">&larr; Retour aux projets</a>
  `;

  container.innerHTML = `
    <span class="projet-page-badge">${projet.tag}</span>
    <h1 class="projet-page-title">${projet.title}</h1>
    <div class="projet-page-description">
      ${paragraphs.map((p) => `<p>${p}</p>`).join("")}
    </div>
    <div class="projet-tags projet-page-tags">
      ${projet.tags.map((tag) => `<span class="projet-tag-chip">${tag}</span>`).join("")}
    </div>
    <div class="projet-actions projet-page-actions">
      ${
        projet.demoUrl
          ? `<a class="projet-btn projet-btn-primary" href="${projet.demoUrl}" target="_blank" rel="noopener">${ICON_EXTERNAL} Demo</a>`
          : ""
      }
      ${
        projet.githubUrl
          ? `<a class="projet-btn" href="${projet.githubUrl}" target="_blank" rel="noopener">${ICON_GITHUB} GitHub</a>`
          : ""
      }
    </div>
  `;
}

renderProjetPage();