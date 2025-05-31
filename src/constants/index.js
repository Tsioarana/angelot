import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  projet1,
  projet2,
  projet3,
  projet4,
  projet5,
  projet6,
  // diplome,
  // formation,
  devweb,
  graphiste,
  redaction,
  prestashop,
  moraraha,
  randev,
  devmobile,
  pr,
  af,
  karma,
  
} from "../assets";

export const navLinks = [
  {
    id: "aprops",
    title: "À propos",
  },
  {
    id: "competence",
    title: "Compétences",
  },
  {
    id: "experiance",
    title: "Expérience",
  },
  {
    id: "projet",
    title: "Projet",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Développeur Web",
    icon: devweb,
  },
  {
    title: "Designer",
    icon: graphiste,
  },
  {
    title: "Photographe",
    icon: devmobile,
  },
  

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Stagiaire en Développement Prestashop chez RandevTeam",
    company_name: "randev",
    logo_company: randev,
    icon: prestashop,
    iconBg: "#383E56",
    date: "1 Juillet 2024 - 31 Août 2024",
    points: [
      "Travail sur l'amélioration des fonctionnalités e-commerce, personnalisation des thèmes et intégration de divers modules tiers."
    ],
  },
  {
    title: "Stagiaire en développement mobile React Native chez RandevTeam",
    company_name: " MAO & SON et Arduino",
    logo_company: randev,
    icon: reactjs,
    iconBg: "#DDE0E6FF",
    date: "Septembre 2024 - novembre 2024",
    points: [
      "Développement d'applications mobiles utilisant React Native, en se concentrant sur les améliorations UI/UX et la compatibilité multiplateforme."
    ],
  },
  {
    title: "Développeur Front-End chez Agence Moraraha",
    company_name: "Intégrateur et Génie Logiciel",
    logo_company: moraraha,
    icon: javascript,
    iconBg: "#3488F5FF",
    date: "Décembre 2024 - Février 2025",
    points: [
      "Conception et développement d’interfaces utilisateur modernes et performantes avec HTML, CSS (Tailwind), JavaScript/TypeScript et Vanilla JS."
    ],
  },
  {
    title: "Développeur Freelance",
    company_name: "Intégrateur et Génie Logiciel",
    logo_company: karma,
    icon: reactjs,
    iconBg: "#0A4561FF",
    date: "Mars 2025 - Present",
    points: [
      "Conception et développement d’interfaces utilisateur modernes et performantes avec HTML, CSS (Tailwind), JavaScript/TypeScript et Vanilla JS."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fast Food",
    description:
      "Développement d'un projet de restaurant de fast-food en utilisant uniquement le frontend avec React.js. Ce projet met en avant une interface utilisateur dynamique et interactive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: projet1,
    source_code_link: "https://github.com/Tsioarana/commerceReact",
  },
  {
    name: "Malagasy Tsara Vokatra",
    description:
      "Un projet de hackathon réalisé à l'Université Insi, centré sur l'agriculture intelligente. Ce projet vise à améliorer les pratiques agricoles grâce à des solutions technologiques innovantes.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: projet2,
    source_code_link: "https://github.com/Tsioarana/hackaton-front",
  },
  {
    name: "Messenger",
    description:
      "Création d'une application de messagerie en utilisant PHP et MySQL. Ce projet permet aux utilisateurs de communiquer facilement et efficacement en temps réel.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
    ],
    image: projet3,
    source_code_link: "https://github.com/Tsioarana/jahdy_chat",
  },
  {
    name: "Tours et Rencontres",
    description:
      "Développement d'un site web pour une agence de voyage à Madagascar, axé sur le tourisme. Ce projet facilite la réservation et la planification d'activités touristiques.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: projet6,
    source_code_link: "https://github.com/Tsioarana/Rencontres",
  },
  {
    name: "I_Bikao Boutique",
    description:
      "Création d'un site e-commerce pour la boutique I_Bikao. Ce projet permet aux utilisateurs de parcourir et d'acheter des produits en ligne de manière intuitive.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: projet4,
    source_code_link: "https://github.com/Tsioarana/ibikao",
  },
  {
    name: "Marketplace",
    description:
      "Développement d'une plateforme de marketplace en utilisant Django. Ce projet connecte acheteurs et vendeurs, facilitant les transactions en ligne.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",

      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: projet5,
    source_code_link: "https://github.com/Tsioarana/Marketplace",
  },
];

export { services, technologies, experiences, testimonials, projects };
