/* ==========================================================================
   Page projet — mise en page « étude de cas »
   - colonne d'infos fixe à gauche (titre, texte, technos, liens)
   - à droite : une vitrine (1re image cadrée selon la plateforme)
     puis un mur de captures en colonnes
   - lightbox plein écran (clavier + swipe)
   ========================================================================== */

const svg = (paths, extra = "") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${paths}</svg>`;

const ICON_EXTERNAL = svg(
  '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
);
const ICON_GITHUB = svg(
  '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 1.5 5 1.5 5 1.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 8.5c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
);
const ICON_CLOSE = svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>');
const ICON_PREV = svg('<path d="m15 18-6-6 6-6"/>');
const ICON_NEXT = svg('<path d="m9 18 6-6-6-6"/>');
const ICON_BACK = svg('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>');
const ICON_ARROW = svg('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>');

let lightboxImages = [];
let lightboxIndex = 0;
let lightboxOpener = null;

/* ---------- helpers ---------- */

function getProjetIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}

function getProjetImages(projet) {
  const extra = Array.isArray(projet.gallery)
    ? projet.gallery.filter((s) => typeof s === "string" && s.trim())
    : [];
  return [projet.image, ...extra.filter((s) => s !== projet.image)];
}

function absoluteUrl(path) {
  try {
    return new URL(path, document.baseURI).href;
  } catch (e) {
    return path;
  }
}

function projetHref(id) {
  return `projet.html?id=${encodeURIComponent(id)}`;
}

/* ---------- rendu ---------- */

function renderNotFound(root, labels) {
  root.innerHTML = `
    <div class="pp-notfound">
      <h1 data-i18n="projects.not_found.title">${labels.not_found.title}</h1>
      <p data-i18n="projects.not_found.description">${labels.not_found.description}</p>
      <a class="projet-btn projet-btn-primary" href="index.html#projets">${ICON_BACK}<span data-i18n="projects.back">${labels.back}</span></a>
    </div>
  `;
  document.title = `${labels.not_found.title} - Ikhedji Amine`;
}

function renderStage(projet, image, lang) {
  const label = lang === "en" ? "Enlarge image 1" : "Agrandir l'image 1";
  return `
    <button class="pp-cover" type="button" data-lightbox-index="0" aria-label="${label}">
      <img src="${image}" alt="${projet.title} — 1" />
    </button>
  `;
}

function renderWall(projet, images, lang, labels) {
  const rest = images.slice(1);
  if (!rest.length) return "";
  const enlarge = lang === "en" ? "Enlarge image" : "Agrandir l'image";
  return `
    <div class="pp-wall-head">
      <h2 data-i18n="projects.screens">${labels.screens}</h2>
      <span class="pp-wall-count">${images.length}</span>
    </div>
    <div class="pp-wall" data-platform="${projet.platform || "auto"}">
      ${rest
        .map(
          (src, i) => `
        <button class="pp-shot" type="button" data-lightbox-index="${i + 1}" aria-label="${enlarge} ${i + 2}">
          <img src="${src}" alt="${projet.title} — ${i + 2}" loading="lazy" />
        </button>`,
        )
        .join("")}
    </div>
  `;
}

function renderNext(sourceProjet, lang, labels) {
  if (projetsData.length < 2) return "";
  const idx = projetsData.findIndex((p) => p.id === sourceProjet.id);
  const next = getLocalizedProjet(projetsData[(idx + 1) % projetsData.length], lang);
  return `
    <a class="pp-next" href="${projetHref(next.id)}">
      <span class="pp-next-text">
        <span class="pp-next-label" data-i18n="projects.next">${labels.next}</span>
        <strong class="pp-next-title">${next.title}</strong>
      </span>
      <span class="pp-next-thumb">
        <img src="${next.image}" alt="" loading="lazy" />
        <span class="pp-next-arrow">${ICON_ARROW}</span>
      </span>
    </a>
  `;
}

function renderProjetPage() {
  const root = document.getElementById("projetPage");
  if (!root || typeof projetsData === "undefined") return;

  const lang = getLanguage();
  const labels = translations[lang].projects;
  const sourceProjet = projetsData.find((p) => p.id === getProjetIdFromUrl());

  if (!sourceProjet) {
    renderNotFound(root, labels);
    return;
  }

  const projet = getLocalizedProjet(sourceProjet, lang);
  const images = getProjetImages(projet);
  lightboxImages = images;
  document.title = `${projet.title} - Ikhedji Amine`;

  const paragraphs =
    projet.fullDescription && projet.fullDescription.length
      ? projet.fullDescription
      : [projet.description];
  const [lead, ...others] = paragraphs;

  const hasLinks = projet.demoUrl || projet.githubUrl;

  root.innerHTML = `
    <div class="pp-top">
      <a class="pp-back" href="index.html#projets">${ICON_BACK}<span data-i18n="projects.back">${labels.back}</span></a>
    </div>

    <div class="pp-layout">
      <aside class="pp-info">
        <span class="pp-kind">${projet.tag}</span>
        <h1 class="pp-title">${projet.title}</h1>
        <p class="pp-lead">${lead}</p>
        ${others.map((p) => `<p class="pp-text">${p}</p>`).join("")}

        <ul class="pp-stack">
          ${projet.tags.map((tag) => `<li class="projet-tag-chip">${tag}</li>`).join("")}
        </ul>

        ${
          hasLinks
            ? `<div class="projet-actions pp-actions">
                ${projet.demoUrl ? `<a class="projet-btn projet-btn-primary" href="${projet.demoUrl}" target="_blank" rel="noopener">${ICON_EXTERNAL}<span data-i18n="projects.demo">${labels.demo}</span></a>` : ""}
                ${projet.githubUrl ? `<a class="projet-btn" href="${projet.githubUrl}" target="_blank" rel="noopener">${ICON_GITHUB}<span data-i18n="projects.github">${labels.github}</span></a>` : ""}
              </div>`
            : ""
        }
      </aside>

      <div class="pp-showcase">
        ${renderStage(projet, images[0], lang)}
        ${renderWall(projet, images, lang, labels)}
      </div>
    </div>

    ${renderNext(sourceProjet, lang, labels)}
  `;

  setupLightbox(root, lang);
}

/* ---------- lightbox ---------- */

function createLightbox(lang) {
  const existing = document.getElementById("projetLightbox");
  if (existing) return existing;

  const T =
    lang === "en"
      ? { close: "Close", prev: "Previous image", next: "Next image" }
      : { close: "Fermer", prev: "Image précédente", next: "Image suivante" };

  const box = document.createElement("div");
  box.className = "pp-lightbox";
  box.id = "projetLightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-hidden", "true");
  box.innerHTML = `
    <button class="pp-lb-btn pp-lb-close" type="button" aria-label="${T.close}">${ICON_CLOSE}</button>
    <button class="pp-lb-btn pp-lb-prev" type="button" aria-label="${T.prev}">${ICON_PREV}</button>
    <button class="pp-lb-btn pp-lb-next" type="button" aria-label="${T.next}">${ICON_NEXT}</button>
    <div class="pp-lb-stage"><img class="pp-lb-img" src="" alt="" /></div>
    <div class="pp-lb-counter" aria-hidden="true"></div>
  `;
  document.body.appendChild(box);

  box.querySelector(".pp-lb-close").addEventListener("click", closeLightbox);
  box.querySelector(".pp-lb-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    stepLightbox(-1);
  });
  box.querySelector(".pp-lb-next").addEventListener("click", (e) => {
    e.stopPropagation();
    stepLightbox(1);
  });
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.classList.contains("pp-lb-stage")) closeLightbox();
  });

  // swipe tactile
  let startX = null;
  box.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );
  box.addEventListener(
    "touchend",
    (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      startX = null;
      if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
    },
    { passive: true },
  );

  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") stepLightbox(-1);
    else if (e.key === "ArrowRight") stepLightbox(1);
    else return;
    e.preventDefault();
  });

  return box;
}

function updateLightbox() {
  const box = document.getElementById("projetLightbox");
  const src = lightboxImages[lightboxIndex];
  if (!box || !src) return;

  const img = box.querySelector(".pp-lb-img");
  img.src = src;
  img.alt = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  box.querySelector(".pp-lb-counter").textContent =
    `${lightboxIndex + 1} / ${lightboxImages.length}`;

  const multiple = lightboxImages.length > 1;
  box.querySelector(".pp-lb-prev").hidden = !multiple;
  box.querySelector(".pp-lb-next").hidden = !multiple;
  box.querySelector(".pp-lb-counter").hidden = !multiple;
}

function openLightbox(index, opener, lang) {
  const box = createLightbox(lang);
  lightboxIndex = index;
  lightboxOpener = opener || null;
  updateLightbox();
  box.classList.add("is-open");
  box.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  box.querySelector(".pp-lb-close").focus();
}

function closeLightbox() {
  const box = document.getElementById("projetLightbox");
  if (!box) return;
  box.classList.remove("is-open");
  box.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxOpener?.focus?.();
}

function stepLightbox(dir) {
  if (lightboxImages.length < 2) return;
  lightboxIndex =
    (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}

function setupLightbox(root, lang) {
  root.querySelectorAll("[data-lightbox-index]").forEach((el) => {
    el.addEventListener("click", () => {
      const index = parseInt(el.dataset.lightboxIndex, 10);
      if (Number.isFinite(index)) openLightbox(index, el, lang);
    });
  });
}

renderProjetPage();