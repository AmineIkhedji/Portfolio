const projetsData = [
  {
    id: "diabetes-prediction",
    tag: "ML",
    title: "Diabetes Prediction System",
    translations: {
      fr: {
        title: "Diabetes Prediction System",
        description:
          "Application web de santé propulsée par le machine learning qui prédit le risque de diabète et génère des rapports professionnels.",
        fullDescription: [
          "Application web de santé propulsée par le machine learning qui prédit le risque de diabète et génère des rapports professionnels.",
          "Le système repose sur un modèle entraîné sur des données médicales, avec un tableau de bord utilisateur permettant de suivre l'historique des prédictions et d'exporter les résultats en PDF.",
        ],
      },
      en: {
        title: "Diabetes Prediction System",
        description:
          "A machine learning-powered healthcare web application that predicts diabetes risk and generates professional reports.",
        fullDescription: [
          "A machine learning-powered healthcare web application that predicts diabetes risk and generates professional reports.",
          "The system uses a model trained on medical data, with a user dashboard for tracking prediction history and exporting results as PDF files.",
        ],
      },
    },
    image: "assets/projets/diabetes-prediction.png",
    description:
      "Application web de santé propulsée par le machine learning qui prédit le risque de diabète et génère des rapports professionnels.",
    fullDescription: [
      "Application web de santé propulsée par le machine learning qui prédit le risque de diabète et génère des rapports professionnels.",
      "Le système repose sur un modèle entraîné sur des données médicales, avec un tableau de bord utilisateur permettant de suivre l'historique des prédictions et d'exporter les résultats en PDF.",
    ],
    tags: [
      "Risk Prediction",
      "Authentication",
      "PDF Reports",
      "User Dashboard",
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: "kidney-stone-detection",
    tag: "ML",
    title: "Kidney Stone Detection",
    translations: {
      fr: {
        title: "Kidney Stone Detection",
        description:
          "Solution d'imagerie médicale par deep learning utilisant des modèles CNN pour classifier des images d'échographie rénale.",
        fullDescription: [
          "Solution d'imagerie médicale par deep learning utilisant des modèles CNN pour classifier des images d'échographie rénale.",
          "Un tableau de bord de détection permet de visualiser les résultats de classification en temps réel, avec un focus sur la précision du modèle et l'analyse d'images médicales.",
        ],
      },
      en: {
        title: "Kidney Stone Detection",
        description:
          "A deep learning medical imaging solution using CNN models to classify kidney ultrasound images.",
        fullDescription: [
          "A deep learning medical imaging solution using CNN models to classify kidney ultrasound images.",
          "A detection dashboard displays classification results in real time, focusing on model accuracy and medical image analysis.",
        ],
      },
    },
    platform: "mobile",
    image: "assets/projets/chill.jpg",
    description:
      "Solution d'imagerie médicale par deep learning utilisant des modèles CNN pour classifier des images d'échographie rénale.",
    fullDescription: [
      "Solution d'imagerie médicale par deep learning utilisant des modèles CNN pour classifier des images d'échographie rénale.",
      "Un tableau de bord de détection permet de visualiser les résultats de classification en temps réel, avec un focus sur la précision du modèle et l'analyse d'images médicales.",
    ],
    tags: [
      "Medical Image Analysis",
      "CNN Classification",
      "Detection Dashboard",
      "Deep Learning",
    ],
    demoUrl: "",
    githubUrl: "",
    gallery: [
      "assets/projets/chill.jpg",
      "assets/projets/diabetes-prediction.png",
      "assets/projets/Ergonomie.avif",
      "assets/projets/HTML interface.webp",
      "assets/projets/IMG20260920162425.jpg",
      "assets/projets/interface 1960.jpg",
      "assets/projets/Interface du futur.jpeg",
      "assets/projets/Machine Interface Homme.png",
      "assets/projets/Macintosh.webp",
      "assets/projets/Methode evaluation UI.gif",
      "assets/projets/Modern UI.webp",
      "assets/projets/msdos 1960.webp",
      "assets/projets/NLS 1960.png",
      "assets/projets/Responsive.jpg",
      "assets/projets/VR && AR.jpeg",
      "assets/projets/prduit fournisseur info.png",
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
      "Render"
    ],

    githubUrl: "",
    gallery: [
      "/images/projects/tijarti/onboarding.png",
      "/images/projects/tijarti/login.png",
      "/images/projects/tijarti/fiche-produit.png",
      "/images/projects/tijarti/panier.png",
      "/images/projects/tijarti/historique-commandes.png",
      "/images/projects/tijarti/catalogue-fournisseur.png",
      "/images/projects/tijarti/stats-fournisseur.png",
      "/images/projects/tijarti/dashboard-admin.png",
    ],
  },
];

function getLocalizedProjet(projet, lang) {
  const language = lang === "en" ? "en" : "fr";
  const localized = projet.translations?.[language];
  return localized ? { ...projet, ...localized } : projet;
}

window.getLocalizedProjet = getLocalizedProjet;
