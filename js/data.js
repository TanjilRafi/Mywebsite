const DEVICON_BASE = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons";

const TECH_STACK = [
  { name: "React.js",   icon: `${DEVICON_BASE}/react/react-original.svg` },
  { name: "Next.js",    icon: `${DEVICON_BASE}/nextjs/nextjs-original.svg` },
  { name: "TypeScript", icon: `${DEVICON_BASE}/typescript/typescript-original.svg` },
  { name: "Java",       icon: `${DEVICON_BASE}/java/java-plain.svg` },
  { name: "Python",     icon: `${DEVICON_BASE}/python/python-original.svg` },
  { name: "Express",    icon: `${DEVICON_BASE}/express/express-original.svg` },
  { name: "SQL",        icon: `${DEVICON_BASE}/mysql/mysql-original.svg` },
  { name: "Supabase",   icon: `${DEVICON_BASE}/supabase/supabase-original.svg` },
  { name: "Git",        icon: `${DEVICON_BASE}/git/git-original.svg` },
  { name: "macOS Terminal", icon: `${DEVICON_BASE}/apple/apple-original.svg` },
];

const PROJECTS = [
  {
    id: "beefstock",
    title: "BeefStock",
    accent: "cyan",
    desc: {
      en: "A full-stack paper-trading platform for practicing stock trading strategies risk-free, with live-style portfolios and trade history.",
      fr: "Une plateforme de trading simulé full-stack pour tester des stratégies boursières sans risque, avec portefeuilles en direct et historique des transactions."
    },
    tags: ["React", "TypeScript", "Express", "Supabase"],
    github: "#",
    live: "#"
  },
  {
    id: "specaqi",
    title: "SpecAQI",
    accent: "green",
    desc: {
      en: "A hyperlocal air quality tracker that maps real-time AQI readings down to the neighborhood level for more precise environmental awareness.",
      fr: "Un traqueur de qualité de l'air hyperlocal qui cartographie les indices AQI en temps réel jusqu'à l'échelle du quartier."
    },
    tags: ["Next.js", "Tailwind", "Leaflet"],
    github: "#",
    live: "#"
  },
  {
    id: "darkorchid",
    title: "DarkOrchid",
    accent: "purple",
    desc: {
      en: "An Android application built with an Agile team, from sprint planning through delivery, with a cloud-backed data layer.",
      fr: "Une application Android développée en équipe Agile, de la planification des sprints jusqu'à la livraison, avec une couche de données infonuagique."
    },
    tags: ["Java", "Android Studio", "Firebase"],
    github: "#",
    live: "#"
  },
  {
    id: "ai-search-solvers",
    title: "AI Search Solvers",
    accent: "cyan",
    desc: {
      en: "A collection of algorithmic search and optimization solvers exploring heuristics and search-space reduction for classic AI problems.",
      fr: "Une collection de solveurs de recherche et d'optimisation algorithmique explorant des heuristiques et la réduction de l'espace de recherche pour des problèmes classiques d'IA."
    },
    tags: ["Python", "AI", "Algorithms"],
    github: "#",
    live: "#"
  }
];

const TAG_COLORS = {
  "React": "var(--cyan)", "TypeScript": "var(--purple)", "Express": "var(--green)", "Supabase": "var(--cyan)",
  "Next.js": "var(--cyan)", "Tailwind": "var(--green)", "Leaflet": "var(--purple)",
  "Java": "var(--purple)", "Android Studio": "var(--green)", "Firebase": "var(--cyan)",
  "Python": "var(--green)", "AI": "var(--purple)", "Algorithms": "var(--cyan)"
};
