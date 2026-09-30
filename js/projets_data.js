const projetsData = [
  {
    id: "Darlink",
    tag: "Mobile",
    title: "Darlink",

    translations: {
      fr: {
        title: "DarLink",
        description:
          "Application immobilière multiplateforme permettant de rechercher, publier et gérer des biens à vendre ou à louer, avec messagerie, favoris et estimation intelligente des prix.",

        fullDescription: [
          "DarLink est une application immobilière hybride conçue pour faciliter la mise en relation entre acheteurs, locataires, propriétaires et promoteurs immobiliers.",
          "L’application permet de consulter et publier des annonces, rechercher des biens selon différents critères, sauvegarder des favoris, communiquer via une messagerie interne et gérer les réservations et abonnements.",
          "Une fonctionnalité de Machine Learning permet également d’estimer le prix d’un bien à partir de critères tels que le type de bien, la localisation, la surface et le nombre de pièces.",
          "Le projet intègre également une approche DevSecOps avec GitHub Actions, incluant des pipelines CI/CD ainsi que des analyses de sécurité SAST, DAST et SCA.",
        ],
      },

      en: {
        title: "DarLink",
        description:
          "A cross-platform real estate application for searching, publishing and managing properties for sale or rent, with messaging, favorites and intelligent price estimation.",

        fullDescription: [
          "DarLink is a hybrid real estate application designed to connect buyers, tenants, property owners and real estate developers.",
          "The application allows users to browse and publish listings, search for properties using different criteria, save favorites, communicate through internal messaging, and manage reservations and subscriptions.",
          "A Machine Learning feature also estimates property prices based on criteria such as property type, location, surface area and number of rooms.",
          "The project also follows a DevSecOps approach using GitHub Actions, including CI/CD pipelines and SAST, DAST and SCA security analysis.",
        ],
      },
    },

    platform: "Android / IOS",
    image: "assets/projets/Darlink/logo.png",

    description:
      "Application immobilière multiplateforme avec annonces, messagerie et estimation intelligente des prix.",

    fullDescription: [
      "Application hybride de mise en relation pour la vente, l’achat et la location de biens immobiliers.",
      "Recherche avancée, gestion des annonces, favoris, messagerie interne, réservations et abonnements.",
      "Intégration d’un modèle de Machine Learning pour l’estimation automatique des prix immobiliers.",
      "Mise en place d’une approche DevSecOps avec CI/CD et analyses de sécurité automatisées.",
    ],

    tags: [
      "Flutter",
      "Dart",
      "Supabase",
      "FastAPI",
      "Python",
      "Machine Learning",
      "GitHub Actions",
      "DevSecOps",
    ],

    demoUrl: "",
    githubUrl: "",
    gallery: [
      "assets/projets/Darlink/login.png",
      "assets/projets/Darlink/catalogue.png",
      "assets/projets/Darlink/Messagerie.png",
      "assets/projets/Darlink/cree_annonce.png",
      "assets/projets/Darlink/projet.png",
    ],
  },
  {
    id: "wfs",
    tag: "web",
    title: "WFS — Wide Format Space",

    translations: {
      fr: {
        title: "WFS — Wide Format Space",
        description:
          "Site vitrine et catalogue bilingue pour Wide Format Space : impression grand format KIP, plieuses GERA / KIPFold, scanners, consommables, papiers, pièces de rechange et SAV.",
        fullDescription: [
          "Wide Format Space (WFS) est une entreprise d’Aubervilliers spécialisée dans l’impression grand format. Le site présente l’offre destinée aux professionnels de l’architecture, de l’ingénierie et de la création : matériel KIP, plieuses GERA et KIPFold, scanners, logiciels, consommables, papiers, pièces de rechange et service après-vente.",
          "Le catalogue machines (séries KIP 71G / 75G / 79G, 700C et 900C, GeraFold, KIPFold, scanners 720 et 2300) est intégré au code, avec fiches produits, visuels, points forts et brochures PDF. Les consommables et papiers sont filtrables ; les pièces de rechange sont servies depuis MySQL, avec recherche par référence ou désignation.",
          "Le site est bilingue (français par défaut, anglais), responsive, et optimisé SEO (canonical, Open Graph, données structurées, sitemaps). Les formulaires contact, devis et SAV utilisent Cloudflare Turnstile. Google Maps et YouTube ne se chargent qu’après consentement cookies.",
          "Stack : HTML, CSS, JavaScript et PHP, sans CMS. Hébergement LWS sur wfsk.fr (HTTPS, redirection www vers l’apex). Identité : Montserrat, accent #0A5AAF.",
        ],
      },
      en: {
        title: "WFS — Wide Format Space",
        description:
          "Bilingual showcase and catalog site for Wide Format Space: KIP wide-format printing, GERA / KIPFold folders, scanners, supplies, papers, spare parts, and after-sales service.",
        fullDescription: [
          "Wide Format Space (WFS) is an Aubervilliers-based company specializing in wide-format printing. The site presents the offering for architecture, engineering, and creative professionals: KIP hardware, GERA and KIPFold folders, scanners, software, supplies, papers, spare parts, and after-sales service.",
          "The machine catalog (KIP 71G / 75G / 79G, 700C and 900C series, GeraFold, KIPFold, 720 and 2300 scanners) lives in the codebase, with product pages, visuals, highlights, and PDF brochures. Supplies and papers are filterable; spare parts come from MySQL, searchable by reference or name.",
          "The site is bilingual (French default, English), responsive, and SEO-oriented (canonical, Open Graph, structured data, sitemaps). Contact, quote, and after-sales forms use Cloudflare Turnstile. Google Maps and YouTube load only after cookie consent.",
          "Stack: HTML, CSS, JavaScript, and PHP, no CMS. Hosted on LWS at wfsk.fr (HTTPS, www to apex redirect). Visual identity: Montserrat, accent #0A5AAF.",
        ],
      },
    },

    platform: "Web",
    image: "/assets/projets/WFSK/logo.png",
    description:
      "Site vitrine et catalogue bilingue pour Wide Format Space : impression grand format KIP, plieuses GERA / KIPFold, scanners, consommables, papiers, pièces de rechange et SAV.",
    fullDescription: [
      "Wide Format Space (WFS) est une entreprise d’Aubervilliers spécialisée dans l’impression grand format. Le site présente l’offre destinée aux professionnels de l’architecture, de l’ingénierie et de la création : matériel KIP, plieuses GERA et KIPFold, scanners, logiciels, consommables, papiers, pièces de rechange et service après-vente.",
      "Le catalogue machines (séries KIP 71G / 75G / 79G, 700C et 900C, GeraFold, KIPFold, scanners 720 et 2300) est intégré au code, avec fiches produits, visuels, points forts et brochures PDF. Les consommables et papiers sont filtrables ; les pièces de rechange sont servies depuis MySQL, avec recherche par référence ou désignation.",
      "Le site est bilingue (français par défaut, anglais), responsive, et optimisé SEO (canonical, Open Graph, données structurées, sitemaps). Les formulaires contact, devis et SAV utilisent Cloudflare Turnstile. Google Maps et YouTube ne se chargent qu’après consentement cookies.",
      "Stack : HTML, CSS, JavaScript et PHP, sans CMS. Hébergement LWS sur wfsk.fr (HTTPS, redirection www vers l’apex). Identité : Montserrat, accent #0A5AAF.",
    ],
    tags: [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "SEO",
      "Bilingue",
      "Vitrine",
    ],

    demoUrl: "https://wfsk.fr/",
    githubUrl: "",
    gallery: [
      "/images/projects/wfs/accueil.webp",
      "/images/projects/wfs/catalogue.webp",
      "/images/projects/wfs/fiche-produit.webp",
      "/images/projects/wfs/pieces-de-rechange.webp",
    ],
  },

  {
    id: "tijarti",
    tag: "Mobile",
    title: "Tijarti",

    translations: {
      fr: {
        title: "Tijarti",
        description:
          "Application mobile de commerce de gros pour l’Algérie : commerçants, fournisseurs, employés et administrateurs, du catalogue à la livraison.",
        fullDescription: [
          "Tijarti centralise le commerce de gros algérien, trop souvent géré par téléphone, WhatsApp ou déplacements. Les fournisseurs publient un catalogue avec variantes (prix, conditionnement, photos) ; les commerçants commandent, suivent leurs livraisons et notent leurs partenaires.",
          "Quatre rôles dans une seule app Flutter : commerçant (catalogue, panier, commandes, favoris, avis), fournisseur (catalogue, commandes, employés, statistiques), employé (traitement des commandes) et administrateur (validation des comptes, catalogues, signalements, maintenance).",
          "Les inscriptions commerçant et fournisseur restent en attente jusqu’à validation admin. Au checkout, le panier est découpé en une commande par fournisseur (code CMD-…), puis le statut avance : en attente, confirmée, envoyée, refusée ou annulée, avec notifications in-app et push.",
          "Projet de licence à l’Université Abderrahmane Mira de Béjaïa, commencé en équipe de six puis repris et finalisé individuellement : API REST, sécurité JWT, PostgreSQL, Cloudinary et Firebase Cloud Messaging.",
        ],
      },
      en: {
        title: "Tijarti",
        description:
          "A B2B wholesale mobile app for the Algerian market: merchants, suppliers, employees and admins, from catalog to delivery.",
        fullDescription: [
          "Tijarti brings Algerian wholesale trade into one app instead of phone calls, WhatsApp and in-person runs. Suppliers publish catalogs with variants (price, packaging, photos); merchants order, track deliveries and rate their partners.",
          "Four roles in a single Flutter app: merchant (catalog, cart, orders, favorites, reviews), supplier (catalog, orders, staff, stats), employee (order processing) and administrator (account approval, catalogs, reports, maintenance).",
          "Merchant and supplier sign-ups stay pending until an admin approves them. Checkout splits the cart into one order per supplier (CMD-… codes). Status then moves through pending, confirmed, shipped, rejected or cancelled, with in-app and push notifications.",
          "Bachelor’s project at Université Abderrahmane Mira de Béjaïa, started by a team of six and later finished solo: REST API, JWT security, PostgreSQL, Cloudinary and Firebase Cloud Messaging.",
        ],
      },
    },

    platform: "Android / iOS",
    image: "/assets/projets/Tijarti/tijarti.png",
    description:
      "Application mobile de commerce de gros pour l’Algérie : commerçants, fournisseurs, employés et administrateurs, du catalogue à la livraison.",
    fullDescription: [
      "Tijarti centralise le commerce de gros algérien, trop souvent géré par téléphone, WhatsApp ou déplacements. Les fournisseurs publient un catalogue avec variantes (prix, conditionnement, photos) ; les commerçants commandent, suivent leurs livraisons et notent leurs partenaires.",
      "Quatre rôles dans une seule app Flutter : commerçant (catalogue, panier, commandes, favoris, avis), fournisseur (catalogue, commandes, employés, statistiques), employé (traitement des commandes) et administrateur (validation des comptes, catalogues, signalements, maintenance).",
      "Les inscriptions commerçant et fournisseur restent en attente jusqu’à validation admin. Au checkout, le panier est découpé en une commande par fournisseur (code CMD-…), puis le statut avance : en attente, confirmée, envoyée, refusée ou annulée, avec notifications in-app et push.",
      "Projet de licence à l’Université Abderrahmane Mira de Béjaïa, commencé en équipe de six puis repris et finalisé individuellement : API REST, sécurité JWT, PostgreSQL, Cloudinary et Firebase Cloud Messaging.",
    ],
    tags: [
      "Flutter",
      "Dart",
      "GetX",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Firebase",
      "Cloudinary",
      "REST API",
      "Supabase",
      "Render",
    ],

    githubUrl: "",
    gallery: [],
  },
];

function getLocalizedProjet(projet, lang) {
  const language = lang === "en" ? "en" : "fr";
  const localized = projet.translations?.[language];
  return localized ? { ...projet, ...localized } : projet;
}

window.getLocalizedProjet = getLocalizedProjet;
