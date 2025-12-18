import { Project, SkillCategory, Certification } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Velvet Vogue Clothing Store",
    description:
      "A multi-page online clothing store providing a seamless shopping experience for trendy casualwear and formal wear.",
    image: "/projects/Velvet-Vogue.jpeg",
    techStack: [
      "HTML",
      "CSS",
      "JavaSript + JQuery",
      "Ajax",
      "MySQL",
      "PHP",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/Maleeshadil/VelvetVogueWebsite.git",
  },
  {
    id: 2,
    title: "To-Do-App",
    description:
      "Full-stack web application to manage personal tasks with features for adding, updating, deleting, and tracking task status.",
    image: "/projects/To-Do-App.jpg",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Maleeshadil/To-Do-App.git",
  },
  {
    id: 3,
    title: "Simple Billing System ",
    description:
      "A web-based billing system that generates bill slips by entering a product ID and the quantity of products.",
    image: "/projects/Billing-System.png",
    techStack: [
      "HTML",
      "CSS",
      "JavaSript + JQuery",
      "Ajax",
      "MySQL",
      "PHP",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/Maleeshadil/BillingSystem.git",
  },
  {
    id: 4,
    title: "Database system for Quiet Attic Films",
    description:
      "Windows Forms application for Quiet Attic Films, a film production company, to streamline management and storage of production details",
    image: "/projects/Quiet-Attic-Films.jpeg",
    techStack: ["C#", "SQL Server", "Windows Forms"],
    githubUrl: "https://github.com/Maleeshadil/NewQuiteAtticFilmProduction.git",
  },
  {
    id: 5,
    title: "Payroll Management System",
    description:
      "Windows Forms app for a toy company to manage payroll and calculate employee salaries accurately and efficiently.",
    image: "/projects/Payroll-System.jpeg",
    techStack: ["C#", "SQL Server", "Windows Forms"],
    githubUrl:
      "https://github.com/Maleeshadil/GrifindoToysPayrollSystemWinForm.git",
  },
  {
    id: 6,
    title: "Attendance Management System",
    description:
      "Built a web-based attendance system with QR code scanning to track employee attendance, leaves, and working hours.",
    image: "/projects/Attendance-Tracker.png",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "AI Support: Amazon Q",
    ],
    githubUrl:
      "https://github.com/Maleeshadil/attendance-management-system.git",
  },
  {
    id: 7,
    title: "My Personal Portfolio Website",
    description:
      "A responsive portfolio website built to showcase my projects, skills, and experience as a software developer.",
    image: "/projects/Portfolio.png",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "EmailJS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/Maleeshadil/my-portfolio.git",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5/CSS3", category: "frontend", level: 90 },
      { name: "JavaScript", category: "frontend", level: 90 },
      { name: "React", category: "frontend", level: 80 },
      { name: "Tailwind CSS", category: "frontend", level: 75 },
      { name: "Bootstrap", category: "frontend", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", category: "backend", level: 85 },
      { name: "Express.js", category: "backend", level: 85 },
      { name: "Laravel", category: "backend", level: 75 },
      { name: "PHP", category: "backend", level: 80 },
      { name: "Java", category: "backend", level: 65 },
      { name: "C#", category: "backend", level: 60 },
      { name: "MongoDB", category: "backend", level: 75 },
      { name: "MySQL", category: "backend", level: 80 },
      { name: "RESTful APIs", category: "backend", level: 80 },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git/GitHub", category: "tools", level: 90 },
      { name: "Visual Studio Code", category: "tools", level: 95 },
      { name: "Postman", category: "tools", level: 90 },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    year: "2022",
    verificationUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    credentialID: "GEHSesUCk4",
    imageUrl: "/certificates/Web Design for Beginners.jpeg",
  },
  {
    id: 2,
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    year: "2022",
    verificationUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    credentialID: "x3ds8FAZPT",
    imageUrl: "/certificates/Python for Beginners.jpeg",
  },
  {
    id: 3,
    title: "Python Programming",
    issuer: "University of Moratuwa",
    year: "2022",
    verificationUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    credentialID: "mIwJbrjICa",
    imageUrl: "/certificates/Python Programming.jpeg",
  },
  {
    id: 4,
    title: "Front-End Web Development",
    issuer: "University of Moratuwa",
    year: "2022",
    verificationUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    credentialID: "vg0PXyb3Cv",
    imageUrl: "/certificates/Front End Web Development.jpeg",
  },
  {
    id: 5,
    title: "Server-side web programming",
    issuer: "University of Moratuwa",
    year: "2023",
    verificationUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    credentialID: "Tqw6PckyCT",
    imageUrl: "/certificates/Server side Web Programming.jpeg",
  },
  {
    id: 6,
    title: "JavaScript(Basic)",
    issuer: "HackerRank",
    year: "2025",
    verificationUrl: "https://www.hackerrank.com/certificates/d9daa9b61cf1",
    credentialID: "",
    imageUrl: "/certificates/JavaScript(Basic).png",
  },
  {
    id: 7,
    title: "React(Basic)",
    issuer: "HackerRank",
    year: "2025",
    verificationUrl: "https://www.hackerrank.com/certificates/758eb4d56919",
    credentialID: "udtMGiOnTq",
    imageUrl: "/certificates/React(Basic).png",
  },
  {
    id: 8,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    year: "2025",
    verificationUrl:
      "https://api.badgr.io/public/assertions/yeTFeh1YQTGV1kbJ3S5M2w",
    credentialID: "udtMGiOnTq",
    imageUrl: "/certificates/Postman.png",
  },
  {
    id: 9,
    title: "Front-End For-Beginners",
    issuer: "Sololearn",
    year: "2025",
    verificationUrl: "https://www.sololearn.com/certificates/CC-8YSLZ72H",
    credentialID: "",
    imageUrl: "/certificates/Front-End For-Beginners.jpeg",
  },
];
