// ==================== PAGE DÉTAIL PROJET ====================
// Lit l'id du projet dans l'URL (?id=...) et affiche le contenu complet.
// La transition d'image (venant de la grille des projets, ou vers elle au
// retour) est gérée conjointement avec projets.js via sessionStorage — voir
// le commentaire en tête de js/projets.js pour le principe général.

const ICON_EXTERNAL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`;
const ICON_GITHUB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 1.5 5 1.5 5 1.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 8.5c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;

const TRANSITION_STORAGE_KEY = "projetTransition";

// Filet de sécurité : si le rendu échoue ou prend trop de temps pour une
// raison quelconque, on lève quand même le voile anti-flash pour ne jamais
// laisser la page invisible indéfiniment.
setTimeout(() => {
  document.documentElement.classList.remove("project-transition-active");
}, 1500);

function getProjetIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function getProjetImages(projet) {
  const additionalImages = Array.isArray(projet.gallery)
    ? projet.gallery.filter(
        (image) => typeof image === "string" && image.trim(),
      )
    : [];

  return [
    projet.image,
    ...additionalImages.filter((image) => image !== projet.image),
  ];
}

// ---------- Choix du cadre selon le type de projet et le ratio réel ----------
// platform : "mobile" | "web" | "game" (ou absent).
//   phone   -> cadre de téléphone
//   browser -> fenêtre de navigateur
//   plain   -> image simple, coins arrondis et ombre (jeux, visuels déjà travaillés)
// Le choix final se fait image par image : un projet mobile qui contient une
// capture paysage (tablette) ou un projet web qui contient une capture
// portrait (version mobile du site) reçoivent automatiquement le bon cadre.

function guessInitialFrame(platform) {
  if (platform === "mobile") return "phone";
  if (platform === "web") return "browser";
  return "plain";
}

function pickFrame(platform, ratio) {
  if (platform === "game") return "plain";
  if (platform === "mobile") return ratio < 1 ? "phone" : "plain";
  if (ratio < 0.75) return "phone";
  return platform === "web" ? "browser" : "plain";
}

function renderGallerySlide(image, index, projet, incoming) {
  const imageAttributes = `
    ${index === 0 ? 'id="projetHeroImage"' : ""}
    src="${image}"
    alt="${projet.title} - image ${index + 1}"
    ${index === 0 && incoming ? 'style="opacity:0;"' : ""}
  `;

  return `
    <div class="projet-gallery-slide" data-frame="${guessInitialFrame(projet.platform)}">
      <div class="projet-media">
        <div class="projet-media-bar" aria-hidden="true"></div>
        <span class="projet-media-camera" aria-hidden="true"></span>
        <div class="projet-media-screen">
          <img ${imageAttributes} />
        </div>
        <span class="projet-media-home" aria-hidden="true"></span>
      </div>
    </div>
  `;
}

// Mesure le ratio réel de chaque image et applique le bon cadre.
// Si l'image est déjà en cache, c'est fait immédiatement (pas de saut visuel).
function setupSlideMedia(gallery, projet) {
  gallery.querySelectorAll(".projet-gallery-slide").forEach((slide) => {
    const img = slide.querySelector("img");
    if (!img) return;

    const apply = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;
      const ratio = img.naturalWidth / img.naturalHeight;
      slide.style.setProperty("--ratio", ratio.toFixed(4));
      slide.dataset.frame = pickFrame(projet.platform, ratio);
    };

    if (img.complete) {
      apply();
    } else {
      img.addEventListener("load", apply, { once: true });
    }
  });
}

function renderProjetNotFound(heroContainer, container) {
  revealArrivalPage();
  heroContainer.innerHTML = "";
  container.innerHTML = `
    <div class="projet-page-notfound">
      <h1 data-i18n="projects.not_found.title">Projet introuvable</h1>
      <p data-i18n="projects.not_found.description">Ce projet n'existe pas ou a été retiré.</p>
      <a class="projet-btn projet-btn-primary" data-i18n="projects.back" href="index.html#projets">Retour aux projets</a>
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

const TRANSITION_DURATION = 550; // ms - doit rester cohérent avec projets.js
const TRANSITION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Technique FLIP (voir le commentaire détaillé dans projets.js) : le clone
// est posé UNE SEULE FOIS à sa position/taille finale (layout figé, aucun
// reflow ensuite), puis un transform (translate + scale) le fait
// apparaître à la position de départ. On n'anime ensuite QUE "transform" et
// "border-radius" -> tout est composé sur le GPU, jamais de recalcul de
// mise en page pendant l'animation, donc plus de saccades.
function computeFlipTransform(startRect, endRect) {
  const scaleX = startRect.width / endRect.width;
  const scaleY = startRect.height / endRect.height;
  const translateX = startRect.left - endRect.left;
  const translateY = startRect.top - endRect.top;
  return `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
}

function playArrivalTransition(incoming, heroImg) {
  const startRect = incoming.startRect || incoming.rect;

  // La cible est mesurée sur l'écran réel (cadre inclus) : la taille de
  // l'image dépend maintenant de son ratio, elle ne peut plus être
  // pré-calculée par projets.js. On garde la valeur stockée en repli.
  const measured = heroImg.getBoundingClientRect();
  const targetRect =
    measured.width > 0 && measured.height > 0
      ? measured
      : incoming.targetRect || incoming.rect;

  if (!startRect || !targetRect) {
    revealPageContent();
    return;
  }

  // Le clone finit avec les mêmes coins arrondis que l'écran réel.
  const targetRadius =
    (heroImg.parentElement &&
      getComputedStyle(heroImg.parentElement).borderTopLeftRadius) ||
    "0px";

  // Le clone reprend exactement le mouvement de la carte vers le hero,
  // pendant que la page et son contenu finissent de se rendre.
  const clone = document.createElement("img");
  clone.src = incoming.src;
  clone.className = "projet-transition-clone";
  clone.style.top = `${targetRect.top}px`;
  clone.style.left = `${targetRect.left}px`;
  clone.style.width = `${targetRect.width}px`;
  clone.style.height = `${targetRect.height}px`;
  clone.style.borderRadius = "14px";
  clone.style.transform = computeFlipTransform(startRect, targetRect);
  document.body.appendChild(clone);

  // Le clone est maintenant peint exactement à la position de départ : on
  // peut révéler le reste de la page (elle était masquée par la classe
  // "project-transition-active", voir revealArrivalPage ci-dessous) sans
  // aucun flash, tout est déjà en place au premier paint.
  revealArrivalPage();
  revealPageContent();

  if (prefersReducedMotion()) {
    clone.style.transform = "translate(0px, 0px) scale(1, 1)";
    clone.style.borderRadius = targetRadius;
    finishArrival(clone, heroImg, 0);
    return;
  }

  clone.style.transition = [
    `transform ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
    `border-radius ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
  ].join(", ");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      clone.style.transform = "translate(0px, 0px) scale(1, 1)";
      clone.style.borderRadius = targetRadius;
    });
  });

  finishArrival(clone, heroImg, TRANSITION_DURATION);
}

function finishArrival(clone, heroImg, delay) {
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
  setTimeout(reveal, delay);
}

// ---------- Apparition du contenu texte (badge, titre, description...) ----------
// En dehors d'une transition entrante (visite directe, rafraîchissement),
// on révèle le contenu quasi immédiatement, juste avec un petit fondu pour
// éviter un "pop" brutal.

// Retire le voile anti-flash posé par le script inline de <head> (voir
// projet.html). Idempotent : peut être appelée plusieurs fois sans risque.
function revealArrivalPage() {
  document.documentElement.classList.remove("project-transition-active");
}

function revealPageContent() {
  const container = document.getElementById("projetPageContent");
  const backBtn = document.getElementById("projetBackBtn");

  if (container) container.classList.add("is-visible");
  if (backBtn) backBtn.classList.add("is-visible");
}

function setupProjetGallery() {
  const gallery = document.querySelector(".projet-gallery");
  if (!gallery) return;

  const track = gallery.querySelector(".projet-gallery-track");
  const strip = gallery.querySelector(".projet-gallery-strip");
  if (!track || !strip) return;

  const slides = Array.from(strip.querySelectorAll(".projet-gallery-slide"));
  const dots = Array.from(gallery.querySelectorAll(".projet-gallery-dot"));
  const dotsWrap = gallery.querySelector(".projet-gallery-dots");
  const previousButton = gallery.querySelector("[data-gallery-previous]");
  const nextButton = gallery.querySelector("[data-gallery-next]");
  const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches
    ? "auto"
    : "smooth";
  let currentIndex = 0;
  let lastBackgroundIndex = -1;

  const setBackground = (index) => {
    if (index === lastBackgroundIndex) return;
    const image = slides[index]?.querySelector("img");
    if (!image) return;
    lastBackgroundIndex = index;
    track.style.setProperty(
      "--gallery-background-image",
      `url("${image.currentSrc || image.src}")`,
    );
  };

  // Image "courante" : la plus proche du centre visible. Aux deux
  // extrémités de la bande, on prend directement la première / dernière.
  const findCurrentIndex = (maxScroll) => {
    if (strip.scrollLeft <= 1) return 0;
    if (strip.scrollLeft >= maxScroll - 1) return slides.length - 1;
    const center = strip.scrollLeft + strip.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (distance < bestDistance) {
        best = index;
        bestDistance = distance;
      }
    });
    return best;
  };

  const updateState = () => {
    const maxScroll = strip.scrollWidth - strip.clientWidth;
    const canScroll = maxScroll > 2;

    // Si tout tient à l'écran, flèches et points ne servent à rien.
    if (previousButton) previousButton.hidden = !canScroll;
    if (nextButton) nextButton.hidden = !canScroll;
    if (dotsWrap) dotsWrap.hidden = !canScroll;
    if (previousButton) previousButton.disabled = strip.scrollLeft <= 1;
    if (nextButton) nextButton.disabled = strip.scrollLeft >= maxScroll - 1;

    currentIndex = canScroll ? findCurrentIndex(maxScroll) : 0;
    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });
    setBackground(currentIndex);
  };

  const scrollByPage = (direction) => {
    strip.scrollBy({
      left: direction * strip.clientWidth * 0.65,
      behavior: scrollBehavior,
    });
  };

  const goToSlide = (index) => {
    const slide = slides[index];
    if (!slide) return;
    const left = slide.offsetLeft - (strip.clientWidth - slide.offsetWidth) / 2;
    strip.scrollTo({ left: Math.max(0, left), behavior: scrollBehavior });
  };

  setBackground(0);
  if (slides.length < 2) return;

  previousButton?.addEventListener("click", () => scrollByPage(-1));
  nextButton?.addEventListener("click", () => scrollByPage(1));
  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => goToSlide(index)),
  );

  let ticking = false;
  strip.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        updateState();
      });
    },
    { passive: true },
  );

  // Les tailles changent quand une image se charge (ratio réel) ou quand
  // la fenêtre est redimensionnée : on remet flèches et points à jour.
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(updateState);
    observer.observe(strip);
    slides.forEach((slide) => observer.observe(slide));
  } else {
    window.addEventListener("resize", updateState);
  }

  // Clavier : flèches gauche / droite.
  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey)
      return;
    if (strip.scrollWidth - strip.clientWidth <= 2) return;
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))
    )
      return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByPage(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByPage(1);
    }
  });

  updateState();
}

// ---------- Départ (transition RETOUR vers la grille) ----------

// Rectangle de l'image seulement si elle est réellement visible (elle peut
// être hors champ si la bande a été défilée) ; sinon pas d'animation retour.
function getVisibleRect(element) {
  if (!element) return null;
  const rect = element.getBoundingClientRect();
  const isVisible =
    rect.width > 0 &&
    rect.height > 0 &&
    rect.right > 0 &&
    rect.left < window.innerWidth &&
    rect.bottom > 0 &&
    rect.top < window.innerHeight;
  return isVisible ? rect : null;
}

function setupBackTransition(projet, heroImg) {
  const backBtn = document.getElementById("projetBackBtn");
  if (!backBtn) return;

  backBtn.addEventListener("click", (event) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    const rect = getVisibleRect(heroImg);

    try {
      sessionStorage.setItem(
        TRANSITION_STORAGE_KEY,
        JSON.stringify({
          id: projet.id,
          src: heroImg ? heroImg.currentSrc || heroImg.src : projet.image,
          direction: "backward",
          rect: rect
            ? {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
              }
            : null,
          time: Date.now(),
        }),
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
  const sourceProjet = projetsData.find((p) => p.id === id);

  if (!sourceProjet) {
    renderProjetNotFound(heroContainer, container);
    return;
  }

  const lang = getLanguage();
  const projet = getLocalizedProjet(sourceProjet, lang);
  const projectLabels = translations[lang].projects;

  document.title = `${projet.title} - Ikhedji Amine`;

  const incoming = readIncomingTransition(id);
  const images = getProjetImages(projet);

  const paragraphs =
    projet.fullDescription && projet.fullDescription.length
      ? projet.fullDescription
      : [projet.description];

  heroContainer.innerHTML = `
    <div class="projet-page-hero-image">
      <div class="projet-gallery" data-platform="${projet.platform || "auto"}" aria-label="Galerie d'images du projet">
        <div class="projet-gallery-track">
          <div class="projet-gallery-strip" tabindex="0" role="group" aria-label="Captures du projet">
            ${images
              .map((image, index) =>
                renderGallerySlide(image, index, projet, incoming),
              )
              .join("")}
          </div>
        </div>
        ${
          images.length > 1
            ? `
              <button class="projet-gallery-arrow projet-gallery-arrow-previous" type="button" data-gallery-previous aria-label="${lang === "en" ? "Previous image" : "Image précédente"}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button>
              <button class="projet-gallery-arrow projet-gallery-arrow-next" type="button" data-gallery-next aria-label="${lang === "en" ? "Next image" : "Image suivante"}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button>
              <div class="projet-gallery-dots" aria-label="${lang === "en" ? "Go to an image" : "Aller à une image"}">
                ${images
                  .map(
                    (_, index) =>
                      `<button class="projet-gallery-dot${index === 0 ? " is-active" : ""}" type="button" aria-label="${lang === "en" ? "Show image" : "Afficher l'image"} ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"></button>`,
                  )
                  .join("")}
              </div>
            `
            : ""
        }
      </div>
    </div>
    <a href="index.html#projets" class="projet-back-btn projet-page-content-reveal" id="projetBackBtn"><span aria-hidden="true">&larr;</span> <span data-i18n="projects.back">Retour aux projets</span></a>
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
          ? `<a class="projet-btn projet-btn-primary" href="${projet.demoUrl}" target="_blank" rel="noopener">${ICON_EXTERNAL} <span data-i18n="projects.demo">${projectLabels.demo}</span></a>`
          : ""
      }
      ${
        projet.githubUrl
          ? `<a class="projet-btn" href="${projet.githubUrl}" target="_blank" rel="noopener">${ICON_GITHUB} <span data-i18n="projects.github">${projectLabels.github}</span></a>`
          : ""
      }
    </div>
  `;

  // Ratio réel + cadre adapté, AVANT de mesurer l'image pour la transition.
  const gallery = heroContainer.querySelector(".projet-gallery");
  if (gallery) setupSlideMedia(gallery, projet);

  const heroImg = document.getElementById("projetHeroImage");

  if (incoming && heroImg) {
    playArrivalTransition(incoming, heroImg);
  } else {
    revealArrivalPage();
    revealPageContent();
  }

  setupProjetGallery();

  setupBackTransition(projet, heroImg);
}

// Sécurité : restauration depuis le cache du navigateur (bouton précédent).
window.addEventListener("pageshow", (event) => {
  if (!event.persisted) return;
  document.documentElement.classList.remove("project-transition-active");
  const heroImg = document.getElementById("projetHeroImage");
  if (heroImg) {
    heroImg.style.opacity = "";
  }
  document
    .querySelectorAll(".projet-transition-clone")
    .forEach((clone) => clone.remove());
  document
    .querySelectorAll(".projet-page-content-reveal")
    .forEach((el) => el.classList.add("is-visible"));
});

renderProjetPage();