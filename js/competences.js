// ==================== COMPÉTENCES ====================

const competencesData = [
  {
    title: "Web",
    subtitle: "Interfaces & expériences",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>',
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"],
  },
  {
    title: "Mobile",
    subtitle: "Développement cross-platform",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>',
    tags: ["Flutter", "Dart"],
  },
  {
    title: "Jeux",
    subtitle: "Développement de jeux",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11" /><line x1="8" x2="8" y1="9" y2="13" /><line x1="15" x2="15.01" y1="12" y2="12" /><line x1="18" x2="18.01" y1="10" y2="10" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" /></svg>',
    tags: ["Godot", "GDScript"],
  },
  {
    title: "Backend & API",
    subtitle: "Serveur & API",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>',
    tags: ["PHP", "Node.js", "Express.js", "Supabase"],
  },
  {
    title: "Bases de données",
    subtitle: "Gestion des données",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>',
    tags: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Outils",
    subtitle: "WorkFlow de développement",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><line x1="7" x2="17" y1="12" y2="12" /></svg>',
    tags: ["GitHub","Postman"],
  },
  {
    title: "Cloud & Déploiement",
    subtitle: "Hébergement & infrastructure",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>',
    tags: ["LWS", "Render", "Netlify"],
  },
  {
    title: "Design",
    subtitle: "Création & maquettage",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>',
    tags: ["Figma"],
  },
  {
    title: "Langage",
    subtitle: "Programmation",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>',
    tags: ["C", "Python"],
  },
];

function renderCompetences() {
  const container = document.getElementById("competencesGrid");
  if (!container) return;

  container.innerHTML = competencesData
    .map(
      (cat) => `
    <div class="competence-card" data-reveal="up">
      <div class="competence-header">
        <div class="competence-icon">${cat.icon}</div>
        <div>
          <h3 class="competence-title">${cat.title}</h3>
          <p class="competence-subtitle">${cat.subtitle}</p>
        </div>
      </div>
      <div class="competence-tags">
        ${cat.tags.map((tag) => `<span class="competence-tag">${tag}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

renderCompetences();
