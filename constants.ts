
import { Project, Job, SkillData, TechCategory, EducationItem, Publication } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/gurumaheswarreddy12",
  linkedin: "https://www.linkedin.com/in/guru-maheswar-reddy-30a374320",
  email: "gurumahesh478@gmail.com"
};


export const TECH_STACK: TechCategory[] = [
  {
    category: "FRONTEND DEVELOPMENT",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS"
    ]
  },
  {
    category: "SHOPIFY & E-COMMERCE",
    skills: [
      "Shopify",
      "Shopify Theme Development",
      "Liquid",
      "App Integration",
      "Payment Gateway Integration"
    ]
  },
  {
    category: "BACKEND & APIs",
    skills: [
      "Java",
      "REST API",
      "SQL"
    ]
  },
  {
    category: "TOOLS & DEPLOYMENT",
    skills: [
      "GitHub",
      "Postman",
      "Vercel",
      "GoDaddy"
    ]
  }
];

export const ABOUT = {
  intro: "Welcome! I'm Guru Maheshwar Reddy, a passionate Software Developer with 1+ year of hands-on experience in building and maintaining modern web applications. I focus on frontend development and Shopify-based solutions, creating responsive, user-friendly, and scalable web interfaces. With practical experience in UI design, Shopify theme customization, backend integration, and application deployment using GoDaddy hosting, I enjoy turning business requirements into reliable and impactful digital solutions."
,
  bullets: [
    { title: "AI Enthusiast", desc: "Focused on shaping smarter algorithms and predictive models." },
    { title: "Software Architect", desc: "Designing modern, scalable backend systems for production." },
    { title: "Tech Visionary", desc: "Committed to ethical and sustainable AI development." }
  ],
  funFact: "Artificial Intelligence is like a painter with infinite brushes—every stroke creates something new and revolutionary."
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "Sree Dattha Institute of Engineering and Science",
    degree: "B.Tech in Computer Science and Engineering",
    period: "JUN 2022 - MAY 2025",
    grade: "7.16 CGPA",
    desc: "Built a strong foundation in computer science including programming, database management systems, and software development. Gained hands-on experience through academic projects and practical training in frontend and backend technologies.",
    skills: [
      "Java",
      "HTML5",
      "CSS3",
      "JavaScript",
      "SQL",
      "Object-Oriented Programming",
      "DBMS"
    ]
  },
  {
    institution: "Loyola Polytechnic (YSR College), Pulivendula, Cuddapah",
    degree: "Diploma in Engineering",
    period: "Completed",
    grade: "Completed",
    desc: "Completed diploma education with a focus on engineering fundamentals, practical learning, and technical problem-solving.",
    skills: [
      "Engineering Fundamentals",
      "Basic Programming",
      "Mathematics",
      "Technical Problem Solving"
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Investigation of Machine Learning Algorithms in Detecting Chronic Kidney Disorder",
    publisher: "SPRINGER",
    date: "JUN 7, 2025",
    description: "A non-trivial effort made in the direction of advancement in machine learning (ML) through the past decade has brought us much ahead in clinical and research settings. This research explores traditional ML algorithms for improving of diagnosis and prognosis of chronic kidney disease (CKD). We study decision trees, support vector machines, and Naive Bayes to arrive at an accurate, robust, and explainable model for predicting the progression of CKD. The comparative study invokes analysis of the proposed models in uncovering patterns, extracting vital components from the diverse patient information and medical imaging to generate accurate prognostic insights.",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-4241-0_11"
  },
  {
    title: "AI Powered Resource Management System",
    publisher: "IEEE",
    date: "JAN 15, 2025",
    description: "The ongoing problem of manual data entry in education has a novel answer in the form of the AI-Powered Resource Management System. Through the use of cutting-edge technologies and deep learning, it transforms the processing of invoices while lowering errors and streamlining operations. The Vosk speech recognition toolkit makes voice querying simple, increasing automation and accessibility. The system additionally incorporates liveness detection using OpenCV for authentication in order to guarantee robust security.",
    link: "https://ieeexplore.ieee.org/document/10837375/references#references"
  },
  {
    title: "Speech-enabled machine learning-based automated attendance monitoring system through face recognition",
    publisher: "IEEE",
    date: "SEP 30, 2023",
    description: "Verification, and validation are important issues in computerized systems for security in almost every domain. Face recognition plays a huge role in authenticity. To make this attendance monitoring system more hassle-free, in this paper, we have proposed and implemented an automated speech-recognized attendance monitoring system primarily based on image processing, speech recognition, and the machine learning algorithm LBPH. Our proposed system has been tested robust and efficient in automating the monitoring task.",
    link: "https://ieeexplore.ieee.org/document/10263205"
  },
  {
    title: "Survey of Regression-Driven Stock-Market-Price-Predictors",
    publisher: "International Journal of Scientific Research in Science, Engineering and Technology",
    date: "JUN 17, 2022",
    description: "The Stock market price prediction is a sophisticated task intrinsically involving the company’s earnings, the market competition, demand, and stability apart from the extrinsic parameters. Thus, multiple algorithms have been written to predict the non-linear and fluctuating Stock price sensitized by the market emotions. Different algorithms have different principles and varying degrees of accuracy.",
    link: "https://ijsrset.com/IJSRSET22991540"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'WEB_001',
    title: 'ArshithFresh.com – E-Commerce Website',
    description:
      'Developed and maintained a responsive e-commerce website using HTML5, CSS3, JavaScript, and Shopify. Implemented UI/UX improvements, product filters, promotional banners, form validations, and performance optimizations to enhance user engagement and conversion.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Shopify', 'Git', 'UI/UX'],
    metrics: [
      { label: 'Platform', value: 'E-Commerce' },
      { label: 'Focus', value: 'Frontend' }
    ],
    status: 'LIVE',
    link: 'https://arshithfresh.com'
  },

  {
    id: 'JAVA_001',
    title: 'Employee Management System',
    description:
      'Built a backend application using Java and Spring Boot with RESTful architecture. Implemented CRUD operations, database integration, and SQL queries to manage employee data efficiently.',
    tech: ['Java', 'Spring Boot', 'REST API', 'SQL', 'JDBC'],
    metrics: [
      { label: 'Architecture', value: 'Backend' },
      { label: 'Stack', value: 'Java' }
    ],
    status: 'COMPLETED',
    link: '#'
  },

  {
    id: 'WEB_004',
    title: 'ISU Fashion – Shopify Store',
    description:
      'Designed and customized a Shopify e-commerce store using Shopify Liquid, JavaScript, and HTML/CSS. Implemented responsive design, dynamic product sliders, advanced product filtering, and optimized navigation for improved performance and user experience.',
    tech: ['Shopify Liquid', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
    metrics: [
      { label: 'Platform', value: 'Shopify' },
      { label: 'Domain', value: 'Fashion E-Commerce' }
    ],
    status: 'LIVE',
    link: 'https://isufashion.com/'
  }
];

export const EXPERIENCE: Job[] = [
  {
    role: 'Software Developer',
    company: 'Arshith Fresh India Pvt Ltd',
    period: 'APR 2025 - PRESENT',
    description: [
      'Designed, developed, and maintained a production e-commerce website using HTML5, CSS3, JavaScript, and Shopify with a strong focus on responsive UI/UX.',
      'Customized Shopify themes, implemented product listings, promotional banners, and seasonal campaigns to support business and marketing goals.',
      'Built interactive UI components such as sliders, dropdowns, product filters, and animated sections to enhance user engagement and navigation.',
      'Integrated JavaScript-based form validations and dynamic user interactions to improve data accuracy and overall user experience.',
      'Managed website hosting, deployment, and domain configuration using GoDaddy.',
      'Maintained clean, version-controlled codebases using Git and collaborated with cross-functional teams for timely releases.'
    ],
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Shopify',
      'Shopify Liquid',
      'UI/UX',
      'Git',
      'GoDaddy'
    ]
  },

  {
    role: 'Frontend Developer Intern',
    company: 'Suntech Solutions',
    period: 'DEC 2024 - FEB 2025',
    description: [
      'Worked on the development and maintenance of an e-commerce website, focusing on frontend development and UI enhancements.',
      'Implemented new website features and UI updates based on client and business requirements.',
      'Created reusable UI components and optimized CSS structures for better maintainability.',
      'Assisted in debugging, performance optimization, and deployment of website updates.'
    ],
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Shopify',
      'Git'
    ]
  },

  {
    role: 'Java Full Stack Intern',
    company: 'JSpiders',
    period: 'APR 2024 - JUN 2024',
    description: [
      'Worked on real-time Java-based projects with a focus on backend development using Spring Boot.',
      'Implemented CRUD operations, RESTful APIs, and SQL queries for database-driven applications.',
      'Gained hands-on experience with Core Java, OOPS, JDBC, Servlets, JSP, Spring MVC, and SQL.',
      'Developed a backend-focused Employee Management System as part of practical training.'
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'SQL',
      'JDBC',
      'REST API'
    ]
  }
];

export const SKILL_DATA: SkillData[] = [
  { subject: 'Frontend Development (HTML/CSS/JS/React.JS)', A: 140, fullMark: 150 },
  { subject: 'Shopify & Theme Development', A: 145, fullMark: 150 },
  { subject: 'UI/UX & Responsive Design', A: 135, fullMark: 150 },
  { subject: 'Java & Spring Boot', A: 120, fullMark: 150 },
  { subject: 'REST APIs & SQL', A: 125, fullMark: 150 },
  { subject: 'Version Control & Deployment', A: 130, fullMark: 150 }
];
