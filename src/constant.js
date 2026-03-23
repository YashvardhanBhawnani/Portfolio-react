// About Section Logos
import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { PiUsers } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";

// Skill Section Logos
import htmlLogo from './images/tech_logo/html.png';
import cssLogo from './images/tech_logo/css.png';
import javascriptLogo from './images/tech_logo/javascript.png';
import reactjsLogo from './images/tech_logo/reactjs.png';
import tailwindcssLogo from './images/tech_logo/tailwindcss.png';
import mysqlLogo from './images/tech_logo/mysql.png';
import mongodbLogo from './images/tech_logo/mongodb.png';
import cppLogo from './images/tech_logo/cpp.png';
import javaLogo from './images/tech_logo/java.png';
import gitLogo from './images/tech_logo/git.png';
import githubLogo from './images/tech_logo/github.png';
import vscodeLogo from './images/tech_logo/vscode.png';

// Experience Logo
import yashLogo from "./images/yashimghero.png"

// Projects Logo
import alumniLogo from "./images/project_logo/alumni_logo.png";
import ecomLogo from "./images/project_logo/ecom_logo.png";
import portfolioLogo from "./images/project_logo/portfolio_logo.png";
import todoLogo from "./images/project_logo/tidytrack_logo.png";
import focusLogo from "./images/project_logo/focus_on_today_logo.png";
import burgerLogo from "./images/project_logo/burger_landing_page_logo.png";
import ticLogo from "./images/project_logo/tic_tac_toe_logo.png";
import loanLogo from "./images/project_logo/loan_ml_logo.png";

// Education Logo
import bcmLogo from "./images/bcm_school_logo.png";
import baluniLogo from "./images/baluni_public_school_logo.png";
import iipsLogo from "./images/iips_logo.png";

// Contact Logo
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { PiMapPinSimpleAreaFill } from "react-icons/pi";

// about section
export const highlights = [
  {
    icon: BsCodeSlash,
    title: "Clean Code",
    desc: "Focused on creating user-friendly React applications with clean, scalable code.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Performance",
    desc: "Optimizing React applications for speed and smooth user experiences.",
  },
  {
    icon: PiUsers,
    title: "Collaboration",
    desc: "Collaborating to turn ideas into real-world React applications.",
  },
  {
    icon: GoLightBulb,
    title: "Innovation",
    desc: "Continuously learning modern web technologies and best practices in React.",
  },
];

// Skills Section
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

// experience section
export const experiences = [
  {
    id: 0,
    img: yashLogo,
    role: "Frontend Developer",
    company: "Updated Soon..",
    date: "20/03/2026",
    desc: "Relevant Experience: Built multiple responsive websites as part of coursework and personal projects using React, Tailwind CSS, HTML, CSS, and JavaScript.Examples include a Alumni Association Website, E-commerce Website,BG-changer and a Personal Portfolio Website to showcase projects.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
    ],
  },
  {
    id: 1,
    img: yashLogo,
    role: "Updated Soon",
    company: "Updated Soon..",
    date: "20/03/2026",
    desc: "This section will be updated in the future with internships or professional experience.",
    skills: [
      "Node JS",
      "MongoDb",
      "Redux",
    ],
  },
];

// projects section
export const projects = [
  {
    id: 0,
    title: "Alumni Association",
    description:
      "A responsive Alumni Association platform built with React.js to foster seamless networking between graduates and their alma mater. It features a modern, mobile-first interface with smooth animations, and interactive event portals designed for community engagement.",
    image: alumniLogo,
    tags: ["HTML", "CSS", "React.js"],
    github: "https://github.com/YashvardhanBhawnani/backend_code_clg_project",
    webapp: "https://alumni-website-project-azure.vercel.app/",
  },

  {
    id: 1,
    title: "SnapStore E-commerce Store",
    description:
      "A modern and responsive SnapStore e-commerce platform designed to streamline online shopping with a sleek, intuitive interface. Built with HTML, CSS, and JavaScript, it features a functional shopping cart, and smooth scroll animations, ensuring a seamless and engaging user experience from browsing to checkout.",
    image: ecomLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/YashvardhanBhawnani/SnapStore-E-commerce-App",
    webapp: "https://snapcart-ecom.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A professional portfolio website highlighting my skills in web development, projects, and technical expertise. Designed with HTML, CSS , JavaScript to create a responsive, modern, and interactive experience for recruiters and collaborators.",
    image: portfolioLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/YashvardhanBhawnani/Personal_portfolio_old",
    webapp: "https://yashvardhanbhawnanisportfolio.netlify.app/",
  },
  // {
  //   id: 3,
  //   title: "TidyTrack- Todoie App",
  //   description:
  //     "A modern and responsive To-Do application designed to streamline productivity and task management in real-time. Built with React.js and Tailwind CSS, it features persistent data storage via LocalStorage,providing a sleek and reliable user interface for organizing daily goals.",
  //   image: todoLogo,
  //   tags: ["React.js", "Tailwind CSS"],
  //   github:
  //     "https://github.com/YashvardhanBhawnani/Practice_Projects_Web_Dev/tree/main/Practice_projects/React_Projects/Thapa_Technical_Projects/proj2-TidyTrack-Todo-App",
  //   webapp: "https://tidytrack18.netlify.app/",
  // },
  {
    id: 4,
    title: "Focus On Today",
    description:
      "A modern and responsive Focus On Today productivity tool designed to help users prioritize their top three daily objectives with zero distractions. Built with HTML, CSS, and JavaScript, it features a minimalist interface, ensuring a streamlined user experience that emphasizes clarity and daily achievement.",
    image: focusLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/YashvardhanBhawnani/Practice_Projects_Web_Dev/tree/main/Practice_projects/FrontEnd_procoder_projects/focus_on_today",
    webapp: "https://focus-on-todayb.netlify.app/",
  },
  {
    id: 5,
    title: "Burger Restaurant - Landing Page ",
    description:
      "A modern and responsive Burger Restaurant landing page designed to showcase menus and drive customer engagement through a bold, appetizing interface. Built with HTML, CSS, and JavaScript, it features a functional hamburger menu for seamless mobile navigation, smooth scroll animations, and a fully optimized layout that ensures a delicious user experience on any device.",
    image: burgerLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/YashvardhanBhawnani/Practice_Projects_Web_Dev/tree/main/js_proj2_lec111",
    webapp: "https://burger-yb-menu.netlify.app/#top-picks",
  },
  // {
  //   id: 6,
  //   title: "Tic-Tac-Toe Game",
  //   description:
  //     "A minimalist Tic-Tac-Toe game built with React.js featuring real-time state management and a built-in win-detection algorithm. It offers a smooth, interactive interface and a responsive design for a seamless gaming experience on any device.",
  //   image: ticLogo,
  //   tags: ["HTML", "CSS", "React.js"],
  //   github:
  //     "https://github.com/YashvardhanBhawnani/Practice_Projects_Web_Dev/tree/main/Practice_projects/React_Projects/piyush_garg/proj2-tic-tac-toe",
  //   webapp: "https://tic-tac-toe-yb.netlify.app/",
  // },
  {
    id: 7,
    title: "Loan-Approved-Or-Not Predictor",
    description:
      "A modern and responsive Loan Approval Predictor designed to help users evaluate their loan eligibility in real-time. Built with React.js and integrated with Machine Learning APIs, it features a clean data-entry interface, dynamic result visualization, and smooth animations, providing a seamless and user-friendly experience for financial decision-making.",
    image: loanLogo,
    tags: ["Python", "Machine Learning"],
    github:
      "https://github.com/YashvardhanBhawnani/Loan_Approved_or_Not-Predictor",
    webapp: "#",
  },
];

// education section
export const education = [
  {
    id: 0,
    img: iipsLogo,
    school: "International Institute of Professional Studies (IIPS), DAVV",
    date: "Oct 2021 - May 2026",
    grade: "8.87 CGPA",
    desc: "Pursuing an Integrated B.Tech-M.Tech Degree in Information Technology , focusing on Advanced Software Development and research-driven problem-solving. Dedicated to building innovative technology solutions and strengthening technical expertise through the seamless transition from foundational engineering to postgraduate specialized projects..",
    degree: "Master of Technology- M.Tech in IT- B.Tech in IT Dual Degree Course",
  },
  {
    id: 1,
    img: baluniLogo,
    school:
      "Baluni Public School DayalBagh, Sikandarpur,Agra Uttar Pradesh(UP)",
    date: "May 2020 - October 2021",
    grade: "90.1%",
    desc: "Completed class 12 under the CBSE board, studying Physics, Chemistry, Mathematics (PCM).",
    degree: "CBSE(XII) - PCM with Physical Education",
  },
  {
    id: 2,
    img: bcmLogo,
    school:
      "BCM Senior Secondary School Basant City,Pakhowal Road,Ludhiana Punjab ",
    date: "May 2018 - July 2019",
    grade: "84.4%",
    desc: "Completed class 10 under the CBSE board, studying Science with Computer.",
    degree: "CBSE(X)",
  },
];

// contact section
export const contactInfo = [
  {
    icon: CiMail,
    label: "Email",
    value: "yashvardhanbhawnani@gmail.com",
    href: "mailto:yashvardhanbhawnani@gmail.com",
  },
  {
    icon: MdOutlinePhone,
    label: "Phone",
    value: "+91-8305281241",
    href: "tel:+918305281241",
  },
  {
    icon: PiMapPinSimpleAreaFill,
    label: "Location",
    value: "Indore, Madhya Pradesh(MP), India",
    href: "#",
  },
];