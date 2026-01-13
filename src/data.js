export const personalData = {
  name: "Esmael Mosaad",
  role: "Fullstack Developer",
  bio: "I am a passionate Fullstack Developer with expertise in building scalable web applications. I specialize in frontend development with React and Angular, and backend development with Node.js.",
  email: "esmaelll12367@gmail.com",
  socials: {
    github: "https://github.com/esmael889",
    linkedin: "https://www.linkedin.com/in/esmael-mosaad-758a28247/",
    facebook: "https://www.facebook.com/esmel.mosad"
  },
  profileImage: "/profile.jpg"
};

export const skillsData = [
  {
    category: "Frontend",
    items: ["React", "Angular", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript","Bootstrap", "TailwindCSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express","SQL", "MongoDB", "PostgreSQL", "REST APIs","nestjs"]
  },
  {
    category: "Tools & Others",
    items: ["Git & Github", "Docker", "AWS", "Jira", "Agile"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Rfof",
    description: `An AI-powered platform that connects service providers (like developers and freelancers) with 
clients and companies seeking smart digital solutions. I contributed to building and optimizing 
the user interface for key pages such as the homepage, service listings, and user dashboards.`,
    tech: ["React", "Subabase", "MongoDB", "Redux"],
    repo: "https://github.com",
    live: "https://rofof.sa/",
    image: "../public/store_1.avif"
  },
  {
    id: 2,
    title: "Saraha App",
    description: "Saraha App is a full-stack web application that allows users to receive anonymous feedback from friends, coworkers, and family. Unlike basic messaging apps, this version focuses on a premium user experience featuring a stunning glassmorphism design, fluid animations, and a robust serverless architecture.",
    tech: ["React", "Node.js", "Socket.io"],
    repo: "https://github.com/esmael889/Saraha_app",
    live: "https://saraha-app-blush.vercel.app/login",
    image: "../public/message_2.avif"
  },
  {
    id: 3,
    title: "Eccommerce Website",
    description: "hopSphere is a full-stack e-commerce platform built with React, Firebase, and Stripe, styled with Tailwind CSS. It features user authentication, cart management, secure payments, and order history, with Firebase Functions handling backend logic,Authentication: Google/email login via Firebase Auth",
    tech: ["React", "Vite", "CSS3"],
    repo: "https://github.com/esmael-Zimozi22/ecommerce-app",
    live: "https://ecommerce-app-sigma-flax.vercel.app/login",
    image: "../public/Eccomerce_1.avif"
  }
];

export const achievementsData = {
  stats: [
    { label: "Students Mentored", value: "500+" },
    { label: "Workshops Delivered", value: "50+" },
    { label: "Hours of Teaching", value: "1000+" },
    { label: "Success Stories", value: "100+" }
  ],
  gallery: [
    { id: 1, src: "../public/cycle_1.jpg", alt: "NTI MEAN STACK Cycle 1" },
    { id: 2, src: "../public/NTI_Cycle_2.jpg", alt: "NTI MEAN STACK Cycle 2" },
    { id: 3, src: "../public/Bootcamp_last.jpg", alt: "Coding Bootcamp 1" },
    { id: 4, src: "../public/Bootcamp_4.jpg", alt: "coding Bootcamp 2" },
    { id: 5, src: "../public/ll.jpeg", alt: "NTI Lab1" },
    { id: 6, src: "../public/NTI_lab2.jpeg", alt: "NTI Lab2" },
  ]
};

export const certificatesData = [
  {
    id: 1,
    title: "وزارة الدفاع,هيئة الاستخبارات العسكرية,فرع نظم المعلومات",
    issuer: "FrontEnd Developer",
    date: "2024",
    image: "../public/experience certificate.jpeg",
    link: "https://login.microsoftonline.com/ff4a48d6-4b5e-4fd3-8266-7eafc3e6e23e/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&response%5Ftype=code%20id%5Ftoken&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=B0EB1CA381A395B25D2871690CD0B4AE45010FE44B2261E2%2DDFF895CE60CDAB237AFEBD29CFE60E616A540E427B1805F6822F2BE13402309F&redirect%5Furi=https%3A%2F%2Ffcibuedu%2Dmy%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0w&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=c24aeca1%2D00d4%2De000%2Dfbf6%2D44e87ee9e1fd"
  },
  {
    id: 2,
    title: "Git & Github Certificate",
    issuer: "Route",
    date: "2023",
    image: "../public/Route.jpeg",
    link: "https://bit.ly/3GM1Oe9"
  },
  {
    id: 3,
    title: "Git & Github Certification",
    issuer: "Elmadrasa",
    date: "2023",
    image: "../public/Git&GitHUB.jpeg",
    link: "https://openjsf.org/"
  }
];
