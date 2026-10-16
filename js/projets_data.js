const projetsData = [
  {
    id: "wfs",

    tag: "web",

    title: "WFS — Wide Format Space",

    translations: {
      fr: {
        title: "WFS — Wide Format Space",

        description:
          "Site vitrine bilingue et catalogue produit sur mesure pour Wide Format Space, conçu et développé de façon autonome, de l’interface au déploiement.",

        fullDescription: [
          "Site vitrine bilingue et catalogue produit sur mesure pour Wide Format Space, conçu et développé de façon autonome, de l’interface au déploiement. L’entreprise, basée à Aubervilliers, est spécialisée dans l’impression grand format.",

          "Le site vitrine digitalise l'ensemble du catalogue commercial : matériel d'impression (séries KIP 71G / 75G / 79G, 700C et 900C, plieuses GeraFold et KIPFold, scanners 720 et 2300) avec fiches produits détaillées, visuels et brochures PDF téléchargeables, ainsi que la présentation des services de maintenance et SAV.",

          "L'expérience utilisateur intègre un système de filtres dynamiques pour les consommables et papiers, ainsi qu'un module de recherche rapide par référence ou désignation pour les pièces de rechange, interrogeant directement la base de données MySQL.",

          "Entièrement responsive et optimisé pour le référencement naturel (balises canonical, Open Graph, données structurées Schema.org, sitemaps), le site protège ses formulaires (contact, devis, SAV) avec Cloudflare Turnstile. La conformité RGPD garantit que les scripts tiers (Google Maps, YouTube) ne sont chargés qu’après consentement.",

          "Stack & Infrastructure : Développement sur-mesure sans CMS en HTML, CSS, JavaScript, PHP et MySQL. Hébergement géré sur infrastructure LWS (wfsk.fr) avec certificat SSL (HTTPS) et redirection d'hôte.",
        ],
      },

      en: {
        title: "WFS — Wide Format Space",
        description:
          "A bilingual showcase website and custom product catalog for Wide Format Space, independently designed and developed from interface design to deployment.",
        fullDescription: [
          "A bilingual showcase website and custom product catalog for Wide Format Space, independently designed and developed from interface design to deployment. The Aubervilliers-based company specializes in wide-format printing.",
          "The website digitizes the entire commercial catalog, including printing equipment (KIP 71G / 75G / 79G, 700C and 900C series, GeraFold and KIPFold folders, and 720 and 2300 scanners), with detailed product pages, images and downloadable PDF brochures, as well as maintenance and after-sales service information.",
          "The user experience includes dynamic filters for consumables and paper, plus a quick search tool for spare parts by reference or description, querying the MySQL database directly.",
          "The website is fully responsive and search-engine optimized, with canonical tags, Open Graph metadata, Schema.org structured data and sitemaps. Contact, quote and after-sales service forms are protected by Cloudflare Turnstile. GDPR compliance ensures that third-party scripts such as Google Maps and YouTube load only after consent.",
          "Technology stack and infrastructure: custom development without a CMS using HTML, CSS, JavaScript, PHP and MySQL. Hosting is managed on LWS infrastructure (wfsk.fr), with an SSL certificate (HTTPS) and host redirection.",
        ],
      },
    },

    platform: "Web",

    image: "/assets/projets/WFSK/logo.png",

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
          "Application mobile B2B de commerce de gros adaptée au marché algérien, réunissant commerçants, fournisseurs, employés et administrateurs au sein d’un même parcours de commande.",

        fullDescription: [
          "Application mobile B2B de commerce de gros adaptée au marché algérien, réunissant commerçants, fournisseurs, employés et administrateurs au sein d’un même parcours de commande. Elle remplace les commandes souvent gérées par téléphone ou WhatsApp et permet aux fournisseurs de présenter leurs produits avec prix, conditionnements et photos.",

          "Quatre rôles dans une seule app Flutter : commerçant (catalogue, panier, commandes, favoris, avis), fournisseur (catalogue, commandes, employés, statistiques), employé (traitement des commandes) et administrateur (validation des comptes, catalogues, signalements, maintenance).",

          "Les inscriptions commerçant et fournisseur restent en attente jusqu’à validation admin. Au checkout, le panier est découpé en une commande par fournisseur (code CMD-…), puis le statut avance : en attente, confirmée, envoyée, refusée ou annulée, avec notifications in-app et push.",

          "Projet de licence à l’Université Abderrahmane Mira de Béjaïa, initié en équipe de six puis repris et finalisé individuellement. Ma contribution couvre notamment l’API REST, l’authentification JWT, PostgreSQL, Cloudinary et les notifications Firebase Cloud Messaging.",
        ],
      },

      en: {
        title: "Tijarti",
        description:
          "A B2B wholesale mobile app tailored to the Algerian market, bringing merchants, suppliers, employees and administrators together in a single ordering workflow.",
        fullDescription: [
          "A B2B wholesale mobile app tailored to the Algerian market, bringing merchants, suppliers, employees and administrators together in a single ordering workflow. It replaces ordering workflows often handled by phone or WhatsApp and allows suppliers to showcase products with prices, packaging options and photos.",
          "Four roles are available in one Flutter app: merchants can browse the catalog, manage carts and orders, save favorites and leave reviews; suppliers can manage products, orders, employees and statistics; employees process orders; and administrators manage account approvals, catalogs, reports and maintenance.",
          "Merchant and supplier registrations remain pending until approved by an administrator. At checkout, the cart is split into one order per supplier, each with a CMD-… code. Order statuses include pending, confirmed, shipped, rejected and cancelled, with in-app and push notifications.",
          "Bachelor’s degree project at Université Abderrahmane Mira de Béjaïa, initially developed by a team of six and later completed individually. My contribution includes the REST API, JWT authentication, PostgreSQL, Cloudinary and Firebase Cloud Messaging notifications.",
        ],
      },
    },

    platform: "Android / iOS",

    image: "/assets/projets/Tijarti/logo.png",

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

    changelog: "assets/projets/Tijarti/CHANGELOG.md",

    gallery: [
      "/assets/projets/Tijarti/Accueil admin.jpg",

      "/assets/projets/Tijarti/Accueil Commercant.jpg",

      "/assets/projets/Tijarti/Accueil Fournisseur.jpg",

      "/assets/projets/Tijarti/Attente.png",

      "/assets/projets/Tijarti/Bienvenue 2.jpg",

      "/assets/projets/Tijarti/Bienvenue.jpg",

      "/assets/projets/Tijarti/Commande de fournisseur.jpg",

      "/assets/projets/Tijarti/Employe.jpg",

      "/assets/projets/Tijarti/Favoris.jpg",

      "/assets/projets/Tijarti/Gestion utilisateur admin 2.jpg",

      "/assets/projets/Tijarti/Gestion utilisateur admin 3.jpg",

      "/assets/projets/Tijarti/Gestion utilisateur admin.jpg",

      "/assets/projets/Tijarti/Historique commande commercant.jpg",

      "/assets/projets/Tijarti/inscription.jpg",

      "/assets/projets/Tijarti/menu admin.jpg",

      "/assets/projets/Tijarti/Notification temp reel.jpg",

      "/assets/projets/Tijarti/Panier commercant.jpg",

      "/assets/projets/Tijarti/Poster produit fournisseur.jpg",

      "/assets/projets/Tijarti/Profil Commercant.jpg",

      "/assets/projets/Tijarti/Profil fournisseur.jpg",

      "/assets/projets/Tijarti/Signalement admin.jpg",

      "/assets/projets/Tijarti/statistiques 2.png",

      "/assets/projets/Tijarti/Statistiques 3.png",

      "/assets/projets/Tijarti/Statistiques.png",
    ],
  },

  {
    id: "PlantCheck",

    tag: "ML / Mobile",

    title: "Plant Check",

    translations: {
      fr: {
        title: "Plant Check",

        description:
          "Application mobile universitaire de détection des maladies des plantes par intelligence artificielle, avec analyse d’images exécutée directement sur l’appareil.",

        fullDescription: [
          "Application mobile universitaire de détection des maladies des plantes par intelligence artificielle, avec analyse d’images exécutée directement sur l’appareil. Réalisée en groupe dans le cadre du Master en Génie Logiciel, elle accepte les photos prises avec l’appareil ou importées depuis la galerie.",

          "Le projet combine Deep Learning et préparation de données : un modèle EfficientNetB3 a été entraîné sur un jeu de données issu de quatre sources publiques, après fusion, nettoyage, déduplication et équilibrage des classes.",

          "Converti en TensorFlow Lite, le modèle a été intégré à l’application Flutter, permettant la détection hors connexion.",

          "L'application propose également un historique des analyses, un tableau de bord statistique et un système de sauvegarde des résultats avec MongoDB Atlas et Cloudinary.",
        ],
      },

      en: {
        title: "Plant Check",
        description:
          "A university group project: a mobile app that detects plant diseases using artificial intelligence, with image analysis performed directly on the device.",
        fullDescription: [
          "A university group project: a mobile app that detects plant diseases using artificial intelligence, with image analysis performed directly on the device. Developed as part of a Master’s degree in Software Engineering, it accepts photos taken with the camera or imported from the gallery.",
          "The project combines Deep Learning and Big Data. An EfficientNetB3 model was trained on a dataset assembled from four public data sources, after merging classes, cleaning the data, removing duplicates and balancing the classes.",
          "The model was converted to TensorFlow Lite and integrated into the Flutter app, allowing disease detection without an Internet connection.",
          "The app also includes an analysis history, a statistical dashboard and result storage using MongoDB Atlas and Cloudinary.",
        ],
      },
    },

    platform: "Android / iOS",

    image: "/assets/projets/plantcheck/logo.png",

    tags: [
      "Flutter",

      "Dart",

      "TensorFlow",

      "TensorFlow Lite",

      "EfficientNetB3",

      "Deep Learning",

      "Node.js",

      "Express",

      "MongoDB Atlas",

      "Cloudinary",

      "JWT",

      "Render",
    ],

    demoUrl: "",

    githubUrl: "",

    gallery: [
      "/assets/projets/plantcheck/1.jpg",

      "/assets/projets/plantcheck/2.jpg",

      "/assets/projets/plantcheck/3.jpg",

      "/assets/projets/plantcheck/4.jpg",
    ],
  },

  {
    id: "Darlink",

    tag: "Mobile",

    title: "Darlink",

    translations: {
      fr: {
        title: "DarLink",

        description:
          "Application immobilière multiplateforme dédiée à la recherche et à la publication de biens à vendre ou à louer. Elle propose une messagerie intégrée, des favoris et une estimation intelligente des prix.",

        fullDescription: [
          "Application immobilière multiplateforme dédiée à la recherche et à la publication de biens à vendre ou à louer. Elle propose une messagerie intégrée, des favoris et une estimation intelligente des prix. Développée en équipe dans le cadre d’un projet universitaire, DarLink met en relation acheteurs, locataires, propriétaires et promoteurs immobiliers.",

          "Les annonces peuvent être filtrées selon plusieurs critères ; les utilisateurs peuvent aussi gérer leurs réservations et abonnements.",

          "Un modèle de Machine Learning estime le prix d’un bien à partir de critères comme son type, sa localisation, sa surface et son nombre de pièces.",

          "Le projet intègre une démarche DevSecOps avec GitHub Actions, des pipelines CI/CD et des analyses de sécurité SAST, DAST et SCA.",
        ],
      },

      en: {
        title: "DarLink",
        description:
          "A cross-platform real estate app for searching, publishing and managing properties for sale or rent, with messaging, favorites and intelligent price estimation.",
        fullDescription: [
          "A cross-platform real estate app for searching, publishing and managing properties for sale or rent, with messaging, favorites and intelligent price estimation. Developed as a university group project, it connects buyers, tenants, property owners and real estate developers.",
          "Listings can be filtered using multiple criteria, and users can also manage bookings and subscriptions.",
          "A Machine Learning feature estimates property prices based on criteria such as property type, location, floor area and number of rooms.",
          "The project also adopts a DevSecOps approach with GitHub Actions, including CI/CD pipelines and security analysis using SAST, DAST and SCA.",
        ],
      },
    },

    platform: "Android / iOS",

    image: "assets/projets/Darlink/logo.png",

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
    id: "maktaba-dz",

    tag: "Web",

    title: "MAKTABA.DZ",

    translations: {
      fr: {
        title: "MAKTABA.DZ",

        description:
          "Marketplace web algérienne dédiée à l’achat et à la vente de livres d’occasion, favorisant le réemploi des ouvrages et l’accès à la lecture.",

        fullDescription: [
          "Marketplace web algérienne dédiée à l’achat et à la vente de livres d’occasion, favorisant le réemploi des ouvrages et l’accès à la lecture. Le projet a été réalisé en équipe dans le cadre des études universitaires.",

          "Les utilisateurs peuvent parcourir le catalogue, vendre des livres, gérer leurs commandes et utiliser le DZK, le solde virtuel de la plateforme. Des espaces dédiés aux clients, employés et administrateurs permettent également de gérer les livres, les ventes et l’activité.",

          "Le projet intègre un assistant conversationnel connecté à Google Gemini ainsi qu’un service de prévision des ventes par période et par catégorie. Un AGL a servi à modéliser plusieurs entités métier et à produire certains éléments du backend.",
        ],
      },

      en: {
        title: "MAKTABA.DZ",
        description:
          "An Algerian second-hand book marketplace that gives books a second life through a community of readers.",
        fullDescription: [
          "An Algerian second-hand book marketplace that gives books a second life through a community of readers. Developed as a university team project.",
          "Users can browse the catalog, list books for sale, manage orders and use DZK, the platform’s virtual balance. Dedicated spaces for customers, employees and administrators support the management of books, sales and platform activity.",
          "The project includes a conversational assistant connected to Google Gemini and a sales forecasting service by period and category. A software engineering tool (AGL) was used to model several business entities and generate parts of the backend.",
        ],
      },
    },

    platform: "Application web",

    image: "/assets/projets/maktabadz/logo.png",

    tags: [
      "Marketplace",

      "E-commerce",

      "React",

      "Node.js",

      "Python",

      "Intelligence artificielle",

      "Projet universitaire",
    ],

    demoUrl: "https://maktabadz.netlify.app/",

    githubUrl: "",

    gallery: [
      "/assets/projets/maktabadz/accueil.png",

      "/assets/projets/maktabadz/panier.png",

      "/assets/projets/maktabadz/vente.png",

      "/assets/projets/maktabadz/profile.png",

      "/assets/projets/maktabadz/IA.png",
    ],
  },

  {
    id: "pong-game",

    tag: "Jeu vidéo",

    title: "Pong Game",

    translations: {
      fr: {
        title: "Pong — jeu d’arcade",

        description:
          "Jeu d’arcade inspiré de Pong, développé en C avec raylib, avec trois niveaux de difficulté en solo et un mode multijoueur local.",

        fullDescription: [
          "Jeu d’arcade inspiré de Pong, développé en C avec raylib, avec trois niveaux de difficulté en solo et un mode multijoueur local. Il comprend également un menu d’accueil, un écran d’aide et des commandes de pause et de reprise.",

          "En solo, le joueur affronte un adversaire contrôlé par l’ordinateur ; en multijoueur local, deux joueurs s’affrontent au clavier.",

          "Les niveaux moyen et difficile ajoutent des obstacles mobiles. Une partie se termine lorsqu’un joueur atteint 13 points avec au moins deux points d’avance.",
        ],
      },

      en: {
        title: "Pong — Arcade Game",
        description:
          "A version of the classic Pong game, developed in C with raylib, featuring a single-player mode with multiple difficulty levels and local multiplayer.",
        fullDescription: [
          "A version of the classic Pong game, developed in C with raylib, featuring a single-player mode with multiple difficulty levels and local multiplayer. It also includes a title screen, a help screen, and pause and resume controls.",
          "In single-player mode, you face a computer-controlled opponent; local multiplayer lets two players compete using the keyboard.",
          "The medium and hard difficulty levels add moving obstacles. A match ends when a player reaches 13 points with a lead of at least two points.",
        ],
      },
    },

    platform: "PC — Windows",

    image: "/assets/projets/Pong/Pong.webp",

    tags: ["C", "raylib", "IA de jeu", "Multijoueur local"],

    demoUrl: "",

    githubUrl: "",

    gallery: [
      "/assets/projets/Pong/menu.png",
      "/assets/projets/Pong/tuto.png",
      "/assets/projets/Pong/mode.png",
      "/assets/projets/Pong/niveau.png",
      "/assets/projets/Pong/gameplay.png",
    ],
  },
  {
    id: "premier-jeu-3d",
    tag: "jeu-3d",
    title: "Premier jeu 3D",

    translations: {
      fr: {
        title: "Premier jeu 3D",
        description:
          "Un petit prototype créé pour découvrir Godot, Blender et les bases du jeu vidéo en 3D.",
        fullDescription: [
          "Ce projet personnel est avant tout une exploration : je voulais prendre en main Godot et Blender, et comprendre les étapes de création d’un jeu en 3D. L’objectif n’était pas de produire un jeu commercial ou parfaitement abouti, mais d’apprendre en expérimentant.",
          "Le prototype met en scène un niveau 3D où l’on peut déplacer un personnage, sauter, courir et interagir avec quelques éléments. On y trouve notamment des pièces à ramasser, des ennemis, une clé et une porte, un coffre ainsi qu’un bouton qui active une plateforme mobile.",
          "Le projet m’a permis de me familiariser avec la création de scènes et de personnages, les déplacements et collisions, les animations et les interactions entre objets. Le jeu utilise Godot 4 et des scripts C# ; certains modèles et ressources proviennent d’assets existants.",
        ],
      },
      en: {
        title: "First 3D Game",
        description:
          "A small prototype made to explore Godot, Blender, and the basics of 3D game development.",
        fullDescription: [
          "This personal project was mainly an exploration: I wanted to get hands-on with Godot and Blender and understand the process of creating a 3D game. The goal was not to build a polished commercial product, but to learn by experimenting.",
          "The prototype features a 3D level where the player can move, jump, run, and interact with a few objects. It includes collectible coins, enemies, a key and a door, a chest, and a button that activates a moving platform.",
          "Working on it gave me the opportunity to explore scenes and character setup, movement and collisions, animations, and interactions between game objects. The project uses Godot 4 and C# scripts, with some models and resources sourced from existing asset packs.",
        ],
      },
    },

    platform: "PC",
    image: "/assets/projets/Elden ring 2/godot.png",
    tags: [
      "Godot",
      "Blender",
      "C#",
      "Jeu 3D",
      "Prototype",
      "Projet d’apprentissage",
    ],

    demoUrl: "",
    githubUrl: "",
    gallery: [
      "/assets/projets/Elden ring 2/1.png",
      "/assets/projets/Elden ring 2/2.png",
      "/assets/projets/Elden ring 2/3.png",
      "/assets/projets/Elden ring 2/4.png",
      "/assets/projets/Elden ring 2/5.png",
    ],
  },
  {
    id: "chronos",
    tag: "Mobile",
    title: "Chronos",

    translations: {
      fr: {
        title: "Chronos",
        description:
          "Mon application personnelle de gestion du temps : tâches, habitudes récurrentes et calendrier réunis dans une expérience claire, personnalisable et utilisable hors ligne.",
        fullDescription: [
          "Chronos est un projet personnel. Je l’ai conçu pour rassembler les tâches, les habitudes et le calendrier dans un seul espace, et aider à organiser ses journées avec plus de clarté.",
          "Les tâches peuvent être détaillées et planifiées avec une date, des horaires facultatifs, une catégorie, une priorité, un statut et une couleur. Des rappels locaux peuvent prévenir l’utilisateur avant une tâche.",
          "Les habitudes récurrentes peuvent être organisées selon les jours de la semaine et accompagnées de rappels. L’accueil met en évidence les éléments du jour pour retrouver rapidement ses priorités.",
          "Le calendrier propose plusieurs façons de consulter son emploi du temps : jour, trois jours, semaine, mois et kanban. Des statistiques quotidiennes, hebdomadaires et globales permettent de visualiser la progression des tâches.",
          "J’ai également travaillé la personnalisation de l’expérience : thème clair ou sombre, couleur principale, nom du profil et premier jour de la semaine. Un tutoriel accompagne la découverte des principales sections.",
          "Chronos est pensé pour fonctionner sans compte ni serveur : les données sont enregistrées localement sur l’appareil avec Isar. L’application est développée en Flutter et utilise Riverpod pour gérer l’état.",
        ],
      },
      en: {
        title: "Chronos",
        description:
          "My personal time-management app, bringing tasks, recurring habits and a calendar together in a clear, customizable experience that works offline.",
        fullDescription: [
          "Chronos is a personal project. I built it to bring tasks, habits and a calendar into one place, making it easier to plan each day with clarity.",
          "Tasks can include a description, date, optional time range, category, priority, status and color. Local reminders can notify users before a task is due.",
          "Recurring habits can be scheduled for selected days of the week and can have reminders. The home screen highlights the day’s items, making priorities easy to find.",
          "The calendar offers several ways to review a schedule: day, three-day, week, month and kanban views. Daily, weekly and overall statistics help users see their task progress.",
          "The experience can be personalized with light or dark mode, a primary color, a profile name and a preferred first day of the week. An onboarding tutorial introduces the main sections.",
          "Chronos is designed to work without an account or server: data is stored locally on the device using Isar. The app is built with Flutter and uses Riverpod for state management.",
        ],
      },
    },

    platform: "Flutter · Android / iOS",
    image: "/assets/projets/Chronos/Logo.png",
    tags: [
      "Flutter",
      "Dart",
      "Productivité",
      "Gestion du temps",
      "Tâches",
      "Habitudes",
      "Calendrier",
      "Statistiques",
      "Offline-first",
      "Riverpod",
      "Isar",
    ],

    demoUrl: "",
    githubUrl: "https://github.com/AmineIkhedji/Chronos",
    gallery: [
      "/assets/projets/chronos/SplashScreen.jpg",
      "/assets/projets/chronos/tuto.jpg",
      "/assets/projets/chronos/tuto4.jpg",
      "/assets/projets/chronos/tuto5.jpg",
      "/assets/projets/chronos/tuto3.jpg",
      "/assets/projets/chronos/tuto2.jpg",
      "/assets/projets/chronos/accueil.jpg",
      "/assets/projets/chronos/accueil2.jpg",
      "/assets/projets/chronos/accueil3.jpg",
      "/assets/projets/chronos/nouveau.jpg",
      "/assets/projets/chronos/tache.jpg",
      "/assets/projets/chronos/detail tache.jpg",
      "/assets/projets/chronos/habit.jpg",
      "/assets/projets/chronos/calendrier.jpg",
      "/assets/projets/chronos/calendrier2.jpg",
      "/assets/projets/chronos/stats.jpg",
      "/assets/projets/chronos/parametre.jpg",
      "/assets/projets/chronos/personnaliser.jpg",
      "/assets/projets/chronos/parametre2.jpg",
    ],
  },
];

function getLocalizedProjet(projet, lang) {
  const language = lang === "en" ? "en" : "fr";

  const localized = projet.translations?.[language];

  return localized ? { ...projet, ...localized } : projet;
}

window.getLocalizedProjet = getLocalizedProjet;
