const ICON_EYE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
const ICON_EXTERNAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`;
const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 1.5 5 1.5 5 1.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 8.5c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
const ICON_ARROW = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

function projetUrl(id) {
  return `projet.html?id=${encodeURIComponent(id)}`;
}

function renderProjetCard(projet, labels) {
  const imageUrl = new URL(projet.image, document.baseURI).href;
  return `
    <article class="projet-card" data-reveal="scale" data-projet-id="${projet.id}" data-platform="${projet.platform || ""}">
      <a class="projet-image-link" href="${projetUrl(projet.id)}" aria-label="${labels.view_project} ${projet.title}">
        <div class="projet-image-wrap" style="--projet-card-bg: url('${imageUrl}');">
          <img src="${projet.image}" alt="${projet.title}" loading="lazy" />
          <span class="projet-type-badge">${projet.tag}</span>
        </div>
      </a>

      <div class="projet-body">
        <h3 class="projet-title">${projet.title}</h3>
        <p class="projet-description">${projet.description}</p>

        <a class="projet-readmore" href="${projetUrl(projet.id)}">
          ${labels.read_more} ${ICON_ARROW}
        </a>

        <div class="projet-tags">
          ${projet.tags.map((tag) => `<span class="projet-tag-chip">${tag}</span>`).join("")}
        </div>

        <div class="projet-actions">
          <a class="projet-btn projet-btn-primary" href="${projetUrl(projet.id)}">
            ${ICON_EYE} ${labels.view_project}
          </a>
          ${
            projet.demoUrl
              ? `<a class="projet-btn" href="${projet.demoUrl}" target="_blank" rel="noopener">${ICON_EXTERNAL} ${labels.demo}</a>`
              : ""
          }
          ${
            projet.githubUrl
              ? `<a class="projet-btn" href="${projet.githubUrl}" target="_blank" rel="noopener">${ICON_GITHUB} ${labels.github}</a>`
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

function renderProjets(lang = getLanguage()) {
  const container = document.getElementById("projetsGrid");
  if (!container) return;
  const labels = translations[lang].projects;
  container.innerHTML = projetsData
    .map((projet) => renderProjetCard(getLocalizedProjet(projet, lang), labels))
    .join("");
  setupProjetCardImages(container);
}

function setupProjetCardImages(container) {
  container.querySelectorAll(".projet-image-wrap img").forEach((img) => {
    const applyOrientation = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;
      const wrap = img.closest(".projet-image-wrap");
      if (!wrap) return;
      wrap.dataset.orientation =
        img.naturalWidth / img.naturalHeight < 0.78 ? "portrait" : "standard";
    };

    if (img.complete) {
      applyOrientation();
    } else {
      img.addEventListener("load", applyOrientation, { once: true });
    }
  });
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

renderProjets();
updateReadMoreVisibility();

window.addEventListener("load", updateReadMoreVisibility);

let projetsResizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(projetsResizeTimer);
  projetsResizeTimer = setTimeout(updateReadMoreVisibility, 150);
});