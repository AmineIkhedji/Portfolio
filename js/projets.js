// ==================== PROJETS ====================
// Les données sont séparées dans projets_data.js.
// Règle unique : chaque carte redirige vers une page de projet propre.
//
// ==================== TRANSITION D'IMAGE ====================
// Navigation classique multi-pages (pas de SPA) : il n'y a pas de vraie
// continuité DOM possible entre index.html et projet.html. On simule un
// mouvement fluide et CONTINU (position + taille qui changent en boucle
// jusqu'à la destination, sans coupure) avec un clone <img> en position
// fixed, animé en JS, et relayé entre les deux pages via sessionStorage :
//
//   ALLER (clic sur une carte, index -> projet) :
//     1. Clone de l'image de la carte, à sa position/taille exactes.
//     2. Animation du clone jusqu'à la position/taille de la bannière hero.
//     3. Sauvegarde de la position finale dans sessionStorage, puis
//        navigation vers projet.html.
//     4. Sur projet.html (voir projet-page.js), un clone est recréé
//        INSTANTANÉMENT à cette même position finale (donc pas de saut :
//        c'est un pur raccord), puis fondu vers la vraie image hero dès
//        qu'elle est chargée.
//
//   RETOUR (bouton "Retour aux projets", projet -> index#projets) :
//     Logique inverse. projet-page.js mémorise la position de l'image hero
//     au moment du clic, puis navigue vers "index.html?back=1#projets".
//     splash.js saute l'intro et scrolle instantanément vers #projets (voir
//     splash.js), puis prévient projets.js (événement "app:splash-ready")
//     que la mise en page est stable : on peut alors mesurer la position
//     réelle de la carte cible et animer le clone depuis la position hero
//     mémorisée jusqu'à cette carte.

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
          <img src="${projet.image}" alt="${projet.title}" loading="lazy" />
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

// ==================== TRANSITION - UTILITAIRES ====================

const TRANSITION_STORAGE_KEY = "projetTransition";
const TRANSITION_DURATION = 550; // ms - doit rester cohérent avec projet-page.js
const TRANSITION_EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

function getHeroBannerRect() {
  // Doit rester identique aux formules CSS de .projet-page-hero-image pour
  // que le raccord avec projet-page.js tombe pile sur la bonne position.
  const width = Math.min(window.innerWidth * 0.92, 920);
  const height = width * 0.75;

  return {
    top: 0,
    left: (window.innerWidth - width) / 2,
    width,
    height,
  };
}

function getRadius(el, fallback) {
  const val = parseFloat(getComputedStyle(el).borderRadius);
  return Number.isFinite(val) ? val : fallback;
}

function createTransitionClone(src, rect, radius) {
  const clone = document.createElement("img");
  clone.src = src;
  clone.className = "projet-transition-clone";
  clone.style.top = `${rect.top}px`;
  clone.style.left = `${rect.left}px`;
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;
  clone.style.borderRadius = `${radius}px`;
  document.body.appendChild(clone);
  return clone;
}

function animateClone(clone, rect, radius, onDone) {
  clone.style.transition = [
    `top ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
    `left ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
    `width ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
    `height ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
    `border-radius ${TRANSITION_DURATION}ms ${TRANSITION_EASING}`,
  ].join(", ");

  // Double rAF : on s'assure que le navigateur a bien peint la position de
  // départ avant de déclencher la transition vers la position d'arrivée.
  // Sans ça, les deux états peuvent être fusionnés en un seul repaint et
  // l'animation ne se joue pas (saut direct, pas de mouvement visible).
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      clone.style.top = `${rect.top}px`;
      clone.style.left = `${rect.left}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.borderRadius = `${radius}px`;
    });
  });

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    onDone();
  };

  clone.addEventListener("transitionend", finish, { once: true });
  // Filet de sécurité si transitionend ne se déclenche pas (ex: onglet en
  // arrière-plan qui throttle les animations).
  setTimeout(finish, TRANSITION_DURATION + 150);
}

// ==================== TRANSITION ALLER (clic sur une carte) ====================

function startForwardTransition(id, card) {
  const wrap = card.querySelector(".projet-image-wrap");
  const img = wrap ? wrap.querySelector("img") : null;

  if (!wrap || !img) {
    window.location.href = projetUrl(id);
    return;
  }

  const startRect = wrap.getBoundingClientRect();
  const targetRect = getHeroBannerRect();
  const src = img.currentSrc || img.src;
  const radius = getRadius(wrap, 14);

  const clone = createTransitionClone(
    src,
    { top: startRect.top, left: startRect.left, width: startRect.width, height: startRect.height },
    radius
  );
  wrap.style.visibility = "hidden";

  try {
    sessionStorage.setItem(
      TRANSITION_STORAGE_KEY,
      JSON.stringify({
        id,
        src,
        direction: "forward",
        startRect: {
          top: startRect.top,
          left: startRect.left,
          width: startRect.width,
          height: startRect.height,
        },
        targetRect,
        time: Date.now(),
      })
    );
  } catch (e) {
    /* sessionStorage indisponible : la navigation aura quand même lieu,
       simplement sans raccord animé côté page suivante. */
  }

  // La page détail reprend l'animation comme écran de chargement.
  window.location.href = projetUrl(id);
}

document.addEventListener("click", (event) => {
  // On laisse le comportement natif du navigateur pour les clics avec
  // modificateur (ouverture dans un nouvel onglet/fenêtre) ou un bouton
  // autre que le clic gauche.
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  const tagChip = event.target.closest(".projet-tag-chip");
  if (tagChip) return;

  if (event.target.closest('a[target="_blank"]')) return;

  const card = event.target.closest(".projet-card");
  if (!card) return;

  const link = event.target.closest("a");
  if (link) {
    const href = link.getAttribute("href") || "";
    // Seuls les liens qui mènent vers la page de détail de CE projet
    // déclenchent la transition ; demo/github gardent leur comportement natif.
    if (!href.startsWith("projet.html")) return;
  }

  event.preventDefault();

  const id = card.getAttribute("data-projet-id");
  startForwardTransition(id, card);
});

// ==================== TRANSITION RETOUR (depuis projet.html) ====================

function readBackwardTransition() {
  try {
    const raw = sessionStorage.getItem(TRANSITION_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.direction !== "backward") return null;
    if (Date.now() - data.time > 4000) return null;
    sessionStorage.removeItem(TRANSITION_STORAGE_KEY);
    return data;
  } catch (e) {
    return null;
  }
}

function playBackwardTransition(data) {
  const card = Array.from(document.querySelectorAll(".projet-card")).find(
    (c) => c.getAttribute("data-projet-id") === data.id
  );
  if (!card) return;

  const wrap = card.querySelector(".projet-image-wrap");
  if (!wrap) return;

  const startRect = data.rect || getHeroBannerRect();
  const targetRect = wrap.getBoundingClientRect();
  const radius = getRadius(wrap, 14);

  const clone = createTransitionClone(
    data.src,
    { top: startRect.top, left: startRect.left, width: startRect.width, height: startRect.height },
    0
  );
  wrap.style.visibility = "hidden";

  animateClone(
    clone,
    { top: targetRect.top, left: targetRect.left, width: targetRect.width, height: targetRect.height },
    radius,
    () => {
      wrap.style.visibility = "visible";
      clone.remove();
    }
  );
}

// Déclenché par splash.js une fois le scroll vers #projets effectué, pour
// être sûr que la carte cible est déjà à sa position finale (grille rendue,
// page scrollée) au moment où on mesure sa position pour l'animation.
window.addEventListener(
  "app:splash-ready",
  () => {
    const data = readBackwardTransition();
    if (data) {
      playBackwardTransition(data);
      try {
        history.replaceState(null, "", `${location.pathname}#projets`);
      } catch (e) {}
    }
  },
  { once: true }
);

// Sécurité : si la page est restaurée depuis le cache du navigateur (bouton
// précédent) après une transition, on s'assure que rien ne reste caché.
window.addEventListener("pageshow", (event) => {
  if (!event.persisted) return;
  document.querySelectorAll(".projet-image-wrap").forEach((wrap) => {
    wrap.style.visibility = "";
  });
  document.querySelectorAll(".projet-transition-clone").forEach((clone) => clone.remove());
});

renderProjets();
updateReadMoreVisibility();

window.addEventListener("load", updateReadMoreVisibility);

let projetsResizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(projetsResizeTimer);
  projetsResizeTimer = setTimeout(updateReadMoreVisibility, 150);
});