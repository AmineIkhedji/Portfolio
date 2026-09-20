// ==================== DONNÉES DES PROJETS ====================
// Pour ajouter un projet : copie/colle un objet dans le tableau ci-dessous.
// Champs optionnels : demoUrl, githubUrl, gallery.
// - Si "demoUrl" est vide/absent -> le bouton "Demo" est caché.
// - Si "githubUrl" est vide/absent -> le bouton "GitHub" est caché.
// - "description" = texte court affiché sur la carte (tronqué à 3 lignes).
// - "fullDescription" = texte complet affiché dans la fenêtre de détail.
// - "gallery" = liste d'images affichées dans le carrousel de la page détail.

const projetsData = [
  {
    id: "diabetes-prediction",
    tag: "ML",
    title: "Diabetes Prediction System",
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
    image: "assets/projets/diabetes-prediction.png",
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
    gallery: ["assets/projets/Projects.jpg", "assets/projets/BATMAN.jpg","assets/projets/image12.png","assets/projets/image15.png","assets/projets/prduit fournisseur info.png"],
  },
];
