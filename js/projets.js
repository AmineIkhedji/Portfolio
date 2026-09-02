// ==================== PROJETS ====================
// Les données sont séparées dans projets_data.js.
// Règle unique : chaque carte redirige vers une page de projet propre.

const ICON_EYE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
const ICON_EXTERNAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`;
const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 1.5 5 1.5 5 1.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 8.5c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
const ICON_ARROW = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

function projetUrl(id) {
  return `projet.html?id=${encodeURIComponent(id)}`;
}

function renderProjetCard(projet) {
  return `
    <article class="projet-card" data-reveal="up" data-projet-id="${projet.id}">
      <a class="projet-image-link" href="${projetUrl(projet.id)}" aria-label="Voir le projet ${projet.title}">
        <div class="projet-image-wrap">
          <img
            src="${projet.image}"
            alt="${projet.title}"
            loading="lazy"
            style="view-transition-name: projet-img-${projet.id};"
          />
          <span class="projet-type-badge">${projet.tag}</span>
        </div>
      </a>

      <div class="projet-body">
        <h3 class="projet-title">${projet.title}</h3>
        <p class="projet-description">${projet.description}</p>

        <a class="projet-readmore" href="${projetUrl(projet.id)}">
          Lire la suite ${ICON_ARROW}
        </a>

        <div class="projet-tags">
          ${projet.tags.map((tag) => `<span class="projet-tag-chip">${tag}</span>`).join("")}
        </div>

        <div class="projet-actions">
          <a class="projet-btn projet-btn-primary" href="${projetUrl(projet.id)}">
            ${ICON_EYE} Voir le projet
          </a>
          ${
            projet.demoUrl
              ? `<a class="projet-btn" href="${projet.demoUrl}" target="_blank" rel="noopener">${ICON_EXTERNAL} Demo</a>`
              : ""
          }
          ${
            projet.githubUrl
              ? `<a class="projet-btn" href="${projet.githubUrl}" target="_blank" rel="noopener">${ICON_GITHUB} GitHub</a>`
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function renderProjets() {
  const container = document.getElementById("projetsGrid");
  if (!container) return;
  container.innerHTML = projetsData.map(renderProjetCard).join("");
}

function updateReadMoreVisibility() {
  document.querySelectorAll(".projet-card").forEach((card) => {
    const desc = card.querySelector(".projet-description");
    const btn = card.querySelector(".projet-readmore");
    if (!desc || !btn) return;

    const isOverflowing = desc.scrollHeight > desc.clientHeight + 1;
    btn.style.display = isOverflowing ? "inline-flex" : "none";
  });
}

document.addEventListener("click", (event) => {
  const tagChip = event.target.closest(".projet-tag-chip");
  if (tagChip) return;

  if (event.target.closest('a[target="_blank"]')) return;

  const card = event.target.closest(".projet-card");
  if (!card) return;

  const id = card.getAttribute("data-projet-id");

  const link = event.target.closest("a");
  if (!link) {
    window.location.href = projetUrl(id);
  }
});

renderProjets();
updateReadMoreVisibility();

window.addEventListener("load", updateReadMoreVisibility);

let projetsResizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(projetsResizeTimer);
  projetsResizeTimer = setTimeout(updateReadMoreVisibility, 150);
});