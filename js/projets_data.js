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
          "Plateforme web et catalogue sur-mesure pour Wide Format Space : conception UI/UX, développement full-stack, intégration MySQL, multilingue et optimisation SEO.",
        fullDescription: [
          "Projet réalisé en autonomie complète — du maquettage UI/UX au développement full-stack, de la modélisation de la base de données au déploiement en production — pour Wide Format Space (WFS), entreprise basée à Aubervilliers et spécialisée dans les équipements d'impression grand format.",
          "Le site vitrine digitalise l'ensemble du catalogue commercial : matériel d'impression (séries KIP 71G / 75G / 79G, 700C et 900C, plieuses GeraFold et KIPFold, scanners 720 et 2300) avec fiches produits détaillées, visuels et brochures PDF téléchargeables, ainsi que la présentation des services de maintenance et SAV.",
          "L'expérience utilisateur intègre un système de filtres dynamiques pour les consommables et papiers, ainsi qu'un module de recherche rapide par référence ou désignation pour les pièces de rechange, interrogeant directement la base de données MySQL.",
          "Architecture bilingue (FR/EN), fully responsive et optimisée pour le référencement naturel (balises canonical, Open Graph, données structurées Schema.org, sitemaps). Protection des formulaires (contact, devis, SAV) via Cloudflare Turnstile et conformité RGPD garantissant le chargement conditionnel des scripts tiers (Google Maps, YouTube) après consentement.",
          "Stack & Infrastructure : Développement sur-mesure sans CMS en HTML, CSS, JavaScript, PHP et MySQL. Hébergement géré sur infrastructure LWS (wfsk.fr) avec certificat SSL (HTTPS) et redirection d'hôte. Identité visuelle : typographie Montserrat et couleur d'accent #0A5AAF.",
        ],
      },
      en: {
        title: "WFS — Wide Format Space",
        description:
          "Custom web platform and catalog for Wide Format Space: UI/UX design, full-stack development, MySQL integration, bilingual support, and SEO optimization.",
        fullDescription: [
          "Project carried out independently — from UI/UX design to full-stack development, database modeling, and production deployment — for Wide Format Space (WFS), an Aubervilliers-based company specializing in wide-format printing equipment.",
          "The showcase site digitizes the entire commercial catalog: printing hardware (KIP 71G / 75G / 79G, 700C, and 900C series, GeraFold and KIPFold folders, 720 and 2300 scanners) with detailed product pages, visuals, and downloadable PDF brochures, alongside maintenance and after-sales service presentations.",
          "The user experience features dynamic filtering for supplies and papers, as well as an instant search module by reference or description for spare parts, directly querying the MySQL database.",
          "Bilingual architecture (FR/EN), fully responsive, and SEO-optimized (canonical tags, Open Graph, Schema.org structured data, sitemaps). Form protection (contact, quote, SAV) via Cloudflare Turnstile and strict GDPR compliance ensuring conditional script loading (Google Maps, YouTube) upon consent.",
          "Stack & Infrastructure: Custom development without a CMS using HTML, CSS, JavaScript, PHP, and MySQL. Managed hosting on LWS infrastructure (wfsk.fr) with SSL encryption (HTTPS) and host redirection. Visual identity: Montserrat typography and #0A5AAF accent color.",
        ],
      },
    },

    platform: "Web",
    image: "/assets/projets/WFSK/logo.png",
    description:
      "Plateforme web et catalogue sur-mesure pour Wide Format Space : conception UI/UX, développement full-stack, intégration MySQL, multilingue et optimisation SEO.",
    fullDescription: [
      "Projet réalisé en autonomie complète — du maquettage UI/UX au développement full-stack, de la modélisation de la base de données au déploiement en production — pour Wide Format Space (WFS), entreprise basée à Aubervilliers et spécialisée dans les équipements d'impression grand format.",
      "Le site vitrine digitalise l'ensemble du catalogue commercial : matériel d'impression (séries KIP 71G / 75G / 79G, 700C et 900C, plieuses GeraFold et KIPFold, scanners 720 et 2300) avec fiches produits détaillées, visuels et brochures PDF téléchargeables, ainsi que la présentation des services de maintenance et SAV.",
      "L'expérience utilisateur intègre un système de filtres dynamiques pour les consommables et papiers, ainsi qu'un module de recherche rapide par référence ou désignation pour les pièces de rechange, interrogeant directement la base de données MySQL.",
      "Architecture bilingue (FR/EN), fully responsive et optimisée pour le référencement naturel (balises canonical, Open Graph, données structurées Schema.org, sitemaps). Protection des formulaires (contact, devis, SAV) via Cloudflare Turnstile et conformité RGPD garantissant le chargement conditionnel des scripts tiers (Google Maps, YouTube) après consentement.",
      "Stack & Infrastructure : Développement sur-mesure sans CMS en HTML, CSS, JavaScript, PHP et MySQL. Hébergement géré sur infrastructure LWS (wfsk.fr) avec certificat SSL (HTTPS) et redirection d'hôte. Identité visuelle : typographie Montserrat et couleur d'accent #0A5AAF.",
    ],
    tags: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Full-Stack",
      "UI/UX Design",
      "SEO",
      "Bilingue",
      "Sur-mesure",
    ],

    demoUrl: "https://wfsk.fr/",
    githubUrl: "",
    gallery: [
      "/assets/projets/WFSK/accueil.png",
      "/assets/projets/WFSK/pages_materiel_grand_format.png",
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
