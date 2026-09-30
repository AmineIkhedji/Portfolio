// ==================== TRADUCTIONS ====================
// Structure complète des textes du site en français et en anglais

const translations = {
  fr: {
    // ============ NAVBAR ============
    nav: {
      home: "Accueil",
      about: "À propos de moi",
      skills: "Compétences",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
    },

    // ============ HERO ============
    hero: {
      eyebrow: "Bonjour, je suis",
      role_1: "Développeur polyvalent",
      role_2: "Étudiant en informatique",
      role_3: "Concepteur de solutions numériques",
      role_4: "En constante progression",
      role_5: "Passionné par la création",
      cta_primary: "Voir mes projets",
      cta_secondary: "CV",
    },

    // ============ À PROPOS ============
    about: {
      title: 'Un développeur qui <span class="accent">aime créer.</span>',
      lead: "Je suis étudiant en Master 2 Génie Logiciel, passionné par le développement et la création de projets numériques. J'aime comprendre comment les choses fonctionnent, expérimenter avec différentes technologies et surtout apprendre en construisant.",
      p1: "Mon parcours m'a amené à explorer plusieurs domaines du développement, notamment le web, les applications mobiles avec Flutter, la programmation en C et le développement de jeux avec Godot.",
      p2: "Je cherche constamment à élargir mes compétences et à découvrir de nouvelles technologies. Mon objectif est de devenir un développeur polyvalent, capable de m'adapter à différents projets et de transformer des idées en applications fonctionnelles, modernes et bien conçues.",
      stats: {
        card1: {
          number: "Projets personnels",
          label: "Apprendre par la pratique",
        },
        card2: {
          number: "Full Stack",
          label: "Du frontend au backend",
        },
        card3: {
          number: "Multi-plateforme",
          label: "Web · Mobile · Desktop · Jeux",
        },
        card4: {
          number: "Domaines",
          label: "Développement · Design · Création",
        },
      },
      meta: {
        location: "Localisation",
        location_value: "Béjaïa, Algérie",
        education: "Formation",
        education_value: "Master 2 Génie Logiciel",
        experience: "Expérience",
        experience_value: "Académique · Personnel · Client",
      },
    },

    // ============ COMPÉTENCES ============
    skills: {
      title: 'Mes <span class="accent">compétences.</span>',
      categories: {
        web: {
          title: "Web",
          subtitle: "Interfaces & expériences",
          tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
        },
        mobile: {
          title: "Mobile",
          subtitle: "Développement cross-platform",
          tags: ["Flutter", "Dart"],
        },
        games: {
          title: "Jeux",
          subtitle: "Développement de jeux",
          tags: ["Godot", "GDScript"],
        },
        backend: {
          title: "Backend & API",
          subtitle: "Serveur & API",
          tags: ["PHP", "Node.js", "Express.js", "Supabase"],
        },
        databases: {
          title: "Bases de données",
          subtitle: "Gestion des données",
          tags: ["MySQL", "PostgreSQL", "MongoDB"],
        },
        tools: {
          title: "Outils",
          subtitle: "WorkFlow de développement",
          tags: ["GitHub", "Postman"],
        },
        cloud: {
          title: "Cloud & Déploiement",
          subtitle: "Hébergement & infrastructure",
          tags: ["LWS", "Render", "Netlify"],
        },
        design: {
          title: "Design",
          subtitle: "Création & maquettage",
          tags: ["Figma"],
        },
        languages: {
          title: "Langage",
          subtitle: "Programmation",
          tags: ["C", "Python"],
        },
      },
    },

    // ============ PROJETS ============
    projects: {
      title: 'Mes <span class="accent">projets.</span>',
      read_more: "Lire la suite",
      view_project: "Voir le projet",
      demo: "Demo",
      github: "GitHub",
      back: "Retour aux projets",
      screens: "Galerie",
      next: "Projet suivant",
      not_found: {
        title: "Projet introuvable",
        description: "Ce projet n'existe pas ou a été retiré.",
      },
    },

    // ============ FORMATION ============
    education: {
      title: 'Apprendre en <span class="accent">construisant.</span>',
      career_title: "Carrière",
      certifications_title: "Certifications",
      timeline: [
        {
          date: "2026 — Présent",
          title: "Master 2 Informatique",
          description: "Univ. Béjaïa — Spécialité Génie logiciel",
        },
        {
          date: "2025 — 2026",
          title: "Master 1 Informatique",
          description: "Univ. Béjaïa — Spécialité Génie logiciel",
        },
        {
          date: "2024 — 2025",
          title: "Licence 3 Informatique",
          description: "Univ. Béjaïa — Spécialité Système informatique",
        },
        {
          date: "2023 — 2024",
          title: "Licence 2 Informatique",
          description: "Univ. Béjaïa",
        },
        {
          date: "2022 — 2023",
          title: "Licence 1 Informatique",
          description: "Univ. Béjaïa",
        },
        {
          date: "2022",
          title: "Baccalauréat Mathématique",
          description: "Mention Bien",
        },
      ],
      certifications: [
        {
          org: "Université de Béjaïa",
          title: "Licence — Spécialité Système informatique",
        },
        {
          org: "Top Excellence",
          title: "MERN Full Stack (Création de site web)",
        },
        {
          org: "Tusna",
          title: "Création de site web",
        },
        {
          org: "Udemy",
          title: "Formation en C en ligne",
        },
      ],
    },

    // ============ CONTACT ============
    contact: {
      title: 'Discutons de votre projet<span class="accent">.</span>',
      subtitle:
        "Disponible pour un stage, une collaboration ou simplement échanger.",
      email: "ikhedjiamine43@gmail.com",
    },

    // ============ FOOTER ============
    footer: {
      copyright: "&copy; {year} Ikhedji Amine &mdash; Tous droits réservés.",
    },
  },

  // ========================================================================
  // ========================================================================
  // ========================================================================

  en: {
    // ============ NAVBAR ============
    nav: {
      home: "Home",
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },

    // ============ HERO ============
    hero: {
      eyebrow: "Hello, I am",
      role_1: "Versatile Developer",
      role_2: "Computer Science Student",
      role_3: "Digital Solutions Designer",
      role_4: "Constantly Evolving",
      role_5: "Passionate about Creation",
      cta_primary: "View my projects",
      cta_secondary: "Resume",
    },

    // ============ ABOUT ============
    about: {
      title: 'A developer who <span class="accent">loves to create.</span>',
      lead: "I am a Master 2 Software Engineering student, passionate about development and creating digital projects. I love understanding how things work, experimenting with different technologies, and above all, learning by building.",
      p1: "My journey has led me to explore several areas of development, including web, mobile applications with Flutter, C programming, and game development with Godot.",
      p2: "I am constantly seeking to expand my skills and discover new technologies. My goal is to become a versatile developer, able to adapt to different projects and transform ideas into functional, modern, and well-designed applications.",
      stats: {
        card1: {
          number: "Personal Projects",
          label: "Learning by doing",
        },
        card2: {
          number: "Full Stack",
          label: "From frontend to backend",
        },
        card3: {
          number: "Cross-platform",
          label: "Web · Mobile · Desktop · Games",
        },
        card4: {
          number: "Domains",
          label: "Development · Design · Creation",
        },
      },
      meta: {
        location: "Location",
        location_value: "Béjaïa, Algeria",
        education: "Education",
        education_value: "Master 2 Software Engineering",
        experience: "Experience",
        experience_value: "Academic · Personal · Client",
      },
    },

    // ============ SKILLS ============
    skills: {
      title: 'My <span class="accent">skills.</span>',
      categories: {
        web: {
          title: "Web",
          subtitle: "Interfaces & experiences",
          tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
        },
        mobile: {
          title: "Mobile",
          subtitle: "Cross-platform development",
          tags: ["Flutter", "Dart"],
        },
        games: {
          title: "Games",
          subtitle: "Game development",
          tags: ["Godot", "GDScript"],
        },
        backend: {
          title: "Backend & API",
          subtitle: "Server & API",
          tags: ["PHP", "Node.js", "Express.js", "Supabase"],
        },
        databases: {
          title: "Databases",
          subtitle: "Data management",
          tags: ["MySQL", "PostgreSQL", "MongoDB"],
        },
        tools: {
          title: "Tools",
          subtitle: "Development workflow",
          tags: ["GitHub", "Postman"],
        },
        cloud: {
          title: "Cloud & Deployment",
          subtitle: "Hosting & infrastructure",
          tags: ["LWS", "Render", "Netlify"],
        },
        design: {
          title: "Design",
          subtitle: "Creation & prototyping",
          tags: ["Figma"],
        },
        languages: {
          title: "Languages",
          subtitle: "Programming",
          tags: ["C", "Python"],
        },
      },
    },

    // ============ PROJECTS ============
    projects: {
      title: 'My <span class="accent">projects.</span>',
      read_more: "Read more",
      view_project: "View project",
      demo: "Demo",
      github: "GitHub",
      back: "Back to projects",
      screens: "Screenshots",
      next: "Next project",
      not_found: {
        title: "Project not found",
        description: "This project does not exist or has been removed.",
      },
    },

    // ============ EDUCATION ============
    education: {
      title: 'Learning by <span class="accent">building.</span>',
      career_title: "Career",
      certifications_title: "Certifications",
      timeline: [
        {
          date: "2026 — Present",
          title: "Master 2 Computer Science",
          description: "University of Béjaïa — Software Engineering specialization",
        },
        {
          date: "2025 — 2026",
          title: "Master 1 Computer Science",
          description: "University of Béjaïa — Software Engineering specialization",
        },
        {
          date: "2024 — 2025",
          title: "Bachelor 3 Computer Science",
          description: "University of Béjaïa — Computer Systems specialization",
        },
        {
          date: "2023 — 2024",
          title: "Bachelor 2 Computer Science",
          description: "University of Béjaïa",
        },
        {
          date: "2022 — 2023",
          title: "Bachelor 1 Computer Science",
          description: "University of Béjaïa",
        },
        {
          date: "2022",
          title: "Mathematics Baccalaureate",
          description: "Honors: Good",
        },
      ],
      certifications: [
        {
          org: "University of Béjaïa",
          title: "Bachelor's Degree — Computer Systems specialization",
        },
        {
          org: "Top Excellence",
          title: "MERN Full Stack (Website Creation)",
        },
        {
          org: "Tusna",
          title: "Website Creation",
        },
        {
          org: "Udemy",
          title: "Online C Programming Course",
        },
      ],
    },

    // ============ CONTACT ============
    contact: {
      title: 'Let\'s discuss your project<span class="accent">.</span>',
      subtitle: "Available for an internship, collaboration, or just to chat.",
      email: "ikhedjiamine43@gmail.com",
    },

    // ============ FOOTER ============
    footer: {
      copyright: "&copy; {year} Ikhedji Amine &mdash; All rights reserved.",
    },
  },
};