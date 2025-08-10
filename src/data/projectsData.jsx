import blogImg from "../images/blog-img.png";
import blogImg1 from "../images/blog-img1.png";
import blogImg2 from "../images/blog-img2.png";
import blogImg3 from "../images/blog-img3.png";
import bannerImg from "../images/banner-img.png";
import bannerBg from "../images/banner-bg.png";

export const projectsData = [
  {
    id: 1,
    name: "Portfolio Personnel",
    category: "website",
    image: blogImg,
    description: "Portfolio moderne développé avec React + Vite, présentant mes compétences en développement full-stack",
    technologies: ["React", "Vite", "CSS3", "JavaScript"],
    github: "https://github.com/abubakrsamake/myportofolio",
    demo: "#"
  },
  {
    id: 2,
    name: "Application E-commerce",
    category: "website",
    image: blogImg1,
    description: "Plateforme e-commerce complète avec gestion des produits, panier et paiement sécurisé",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/abubakrsamake",
    demo: "#"
  },
  {
    id: 3,
    name: "App Mobile React Native",
    category: "mobile",
    image: blogImg2,
    description: "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    github: "https://github.com/abubakrsamake",
    demo: "#"
  },
  {
    id: 4,
    name: "Système de Gestion",
    category: "desktop",
    image: blogImg3,
    description: "Application desktop pour la gestion d'inventaire avec interface moderne et rapports avancés",
    technologies: ["Electron", "React", "SQLite", "Chart.js"],
    github: "https://github.com/abubakrsamake",
    demo: "#"
  },
  {
    id: 5,
    name: "API REST Microservices",
    category: "backend",
    image: bannerImg,
    description: "Architecture microservices avec API REST pour application d'entreprise",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/abubakrsamake",
    demo: "#"
  },
  {
    id: 6,
    name: "Dashboard Analytics",
    category: "website",
    image: bannerBg,
    description: "Tableau de bord interactif pour l'analyse de données avec visualisations en temps réel",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com/abubakrsamake",
    demo: "#"
  },
];