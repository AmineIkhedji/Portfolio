
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
      "assets/projets/prduit fournisseur info.png"
    ],
  },
   {
    id: "diabetes-prediction test",
    tag: "Mobile",
    title: "Diabetes Prediction Systems",
    translations: {
      fr: {
        title: "Diabetes Prediction Systems",
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
    image: "assets/projets/Notification Commercant.png",
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
    gallery: [
      "assets/projets/prduit fournisseur info.png",
      "assets/projets/Inscription 3.png",
      "assets/projets/prduit fournisseur modifier.png"
    ],
  },
];

function getLocalizedProjet(projet, lang) {
  const language = lang === "en" ? "en" : "fr";
  const localized = projet.translations?.[language];
  return localized ? { ...projet, ...localized } : projet;
}

window.getLocalizedProjet = getLocalizedProjet;
