// ==================== PAGE DÉTAIL PROJET ====================
// Lit l'id du projet dans l'URL (?id=...) et affiche le contenu complet.
// La transition d'image (venant de la grille des projets, ou vers elle au
// retour) est gérée conjointement avec projets.js via sessionStorage — voir
// le commentaire en tête de js/projets.js pour le principe général.

const ICON_EXTERNAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`;
const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 1.5 5 1.5 5 1.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 8.5c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;

const TRANSITION_STORAGE_KEY = "projetTransition";

function getProjetIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function getProjetImages(projet) {
  const additionalImages = Array.isArray(projet.gallery)
    ? projet.gallery.filter((image) => typeof image === "string" && image.trim())
    : [];

  return [
    projet.image,
    ...additionalImages.filter((image) => image !== projet.image),
  ];
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

// ---------- Raccord d'arrivée (transition ALLER depuis la grille) ----------

function readIncomingTransition(id) {
  try {
    const raw = sessionStorage.getItem(TRANSITION_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    sessionStorage.removeItem(TRANSITION_STORAGE_KEY);
    if (data.direction !== "forward") return null;
    if (data.id !== id) return null;
    if (Date.now() - data.time > 4000) return null;
    return data;
  } catch (e) {
    return null;
  }
}

function playArrivalTransition(incoming, heroImg) {
  const startRect = incoming.startRect || incoming.rect;
  const targetRect = incoming.targetRect || incoming.rect;
  if (!startRect || !targetRect) {
    revealPageContent();
    return;
  }

  // Le clone reprend exactement le mouvement de la carte vers le hero,
  // pendant que la page et son contenu finissent de se rendre.
  const clone = document.createElement("img");
  clone.src = incoming.src;
  clone.className = "projet-transition-clone";
  clone.style.top = `${startRect.top}px`;
  clone.style.left = `${startRect.left}px`;
  clone.style.width = `${startRect.width}px`;
  clone.style.height = `${startRect.height}px`;
  clone.style.borderRadius = "14px";
  document.body.appendChild(clone);

  revealPageContent();

  clone.style.transition = [
    "top 550ms cubic-bezier(0.4, 0, 0.2, 1)",
    "left 550ms cubic-bezier(0.4, 0, 0.2, 1)",
    "width 550ms cubic-bezier(0.4, 0, 0.2, 1)",
    "height 550ms cubic-bezier(0.4, 0, 0.2, 1)",
    "border-radius 550ms cubic-bezier(0.4, 0, 0.2, 1)",
  ].join(", ");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      clone.style.top = `${targetRect.top}px`;
      clone.style.left = `${targetRect.left}px`;
      clone.style.width = `${targetRect.width}px`;
      clone.style.height = `${targetRect.height}px`;
      clone.style.borderRadius = "0px";
    });
  });

  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    heroImg.style.transition = "opacity 0.25s ease";
    heroImg.style.opacity = "1";
    clone.style.transition = "opacity 0.25s ease";
    clone.style.opacity = "0";
    setTimeout(() => clone.remove(), 300);
  };

  // La fin du mouvement pilote le raccord. Le chargement réseau ne doit
  // jamais laisser l'image réelle invisible après la disparition du clone.
  setTimeout(reveal, 550);
}

// ---------- Apparition du contenu texte (badge, titre, description...) ----------
// En dehors d'une transition entrante (visite directe, rafraîchissement),
// on révèle le contenu quasi immédiatement, juste avec un petit fondu pour
// éviter un "pop" brutal.

function revealPageContent() {
  const container = document.getElementById("projetPageContent");
  const backBtn = document.getElementById("projetBackBtn");

  if (container) container.classList.add("is-visible");
  if (backBtn) backBtn.classList.add("is-visible");
}

function setupProjetGallery(images) {
  const gallery = document.querySelector(".projet-gallery");
  if (!gallery || images.length < 2) return;

  const slides = Array.from(gallery.querySelectorAll(".projet-gallery-slide"));
  const dots = Array.from(gallery.querySelectorAll(".projet-gallery-dot"));
  const previousButton = gallery.querySelector("[data-gallery-previous]");
  const nextButton = gallery.querySelector("[data-gallery-next]");
  let currentIndex = 0;
  let timer;

  const showSlide = (nextIndex) => {
    currentIndex = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => slide.classList.toggle("is-active", index === currentIndex));
    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
  };

  const restartTimer = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => showSlide(currentIndex + 1), 7000);
  };

  previousButton?.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    restartTimer();
  });

  nextButton?.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    restartTimer();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      restartTimer();
    });
  });

  gallery.addEventListener("mouseenter", () => window.clearInterval(timer));
  gallery.addEventListener("mouseleave", restartTimer);
  gallery.addEventListener("focusin", () => window.clearInterval(timer));
  gallery.addEventListener("focusout", (event) => {
    if (!gallery.contains(event.relatedTarget)) restartTimer();
  });

  restartTimer();
}

// ---------- Départ (transition RETOUR vers la grille) ----------

function setupBackTransition(projet, heroImg) {
  const backBtn = document.getElementById("projetBackBtn");
  if (!backBtn) return;

  backBtn.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();

    const rect = heroImg ? heroImg.getBoundingClientRect() : null;

    try {
      sessionStorage.setItem(
        TRANSITION_STORAGE_KEY,
        JSON.stringify({
          id: projet.id,
          src: heroImg ? heroImg.currentSrc || heroImg.src : projet.image,
          direction: "backward",
          rect: rect
            ? { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
            : null,
          time: Date.now(),
        })
      );
    } catch (e) {
      /* sessionStorage indisponible : navigation simple, sans animation retour */
    }

    // Le paramètre "back" indique à splash.js de sauter l'intro et de
    // scroller directement vers #projets au lieu de rouvrir l'accueil.
    window.location.href = "index.html?back=1#projets";
  });
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

  const incoming = readIncomingTransition(id);
  const images = getProjetImages(projet);

  const paragraphs =
    projet.fullDescription && projet.fullDescription.length
      ? projet.fullDescription
      : [projet.description];

  heroContainer.innerHTML = `
    <div class="projet-page-hero-image">
      <div class="projet-gallery" aria-label="Galerie d'images du projet">
        <div class="projet-gallery-track">
          ${images
            .map(
              (image, index) => `
                <img
                  class="projet-gallery-slide${index === 0 ? " is-active" : ""}"
                  ${index === 0 ? 'id="projetHeroImage"' : ""}
                  src="${image}"
                  alt="${projet.title} - image ${index + 1}"
                  ${index === 0 && incoming ? 'style="opacity:0;"' : ""}
                />
              `
            )
            .join("")}
        </div>
        ${
          images.length > 1
            ? `
              <button class="projet-gallery-arrow projet-gallery-arrow-previous" type="button" data-gallery-previous aria-label="Image précédente"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button>
              <button class="projet-gallery-arrow projet-gallery-arrow-next" type="button" data-gallery-next aria-label="Image suivante"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button>
              <div class="projet-gallery-dots" role="tablist" aria-label="Choisir une image">
                ${images
                  .map(
                    (_, index) => `<button class="projet-gallery-dot${index === 0 ? " is-active" : ""}" type="button" role="tab" aria-label="Afficher l'image ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"></button>`
                  )
                  .join("")}
              </div>
            `
            : ""
        }
      </div>
    </div>
    <a href="index.html#projets" class="projet-back-btn projet-page-content-reveal" id="projetBackBtn">&larr; Retour aux projets</a>
  `;

  container.classList.add("projet-page-content-reveal");
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

  const heroImg = document.getElementById("projetHeroImage");

  if (incoming && heroImg) {
    playArrivalTransition(incoming, heroImg);
  } else {
    revealPageContent();
  }

  setupProjetGallery(images);

  setupBackTransition(projet, heroImg);
}

// Sécurité : restauration depuis le cache du navigateur (bouton précédent).
window.addEventListener("pageshow", (event) => {
  if (!event.persisted) return;
  const heroImg = document.getElementById("projetHeroImage");
  if (heroImg) {
    heroImg.style.opacity = "";
  }
  document.querySelectorAll(".projet-transition-clone").forEach((clone) => clone.remove());
  document.querySelectorAll(".projet-page-content-reveal").forEach((el) => el.classList.add("is-visible"));
});

renderProjetPage();