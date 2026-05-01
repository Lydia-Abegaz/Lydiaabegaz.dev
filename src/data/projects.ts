export interface Project {
  title: string;
  slug: string;
  description: string;
  image?: string;
  emoji: string;
  gradient: string;
  accentColor: string;
  glow: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  badge: string;
  caseStudy: {
    problem: string;
    architecture: string;
    challenges: string;
    solution: string;
    techStack: string[];
    screenshots?: string[];
  };
}

export const projects: Project[] = [
  {
    title: "Kuriftu Hospitality Platform",
    slug: "kuriftu-hospitality-platform",
    description:
      "Comprehensive hospitality platform for Kuriftu Resorts. Built as a Hackathon 2026 finalist with Team Phoenix. Modern full-stack app enhancing guest experiences and streamlining resort operations.",
    image: "/kuriftu-hackathon.jpg.jpg",
    emoji: "🏨",
    gradient: "from-sage via-sage/80 to-pale-lime",
    accentColor: "hsl(25 95% 53%)",
    glow: "rgba(251, 146, 60, 0.25)",
    tags: ["Hackathon Finalist", "Web Dev", "Hospitality", "Team Phoenix"],
    github: "https://github.com/Lydia-Aliso",
    live: "https://kuriftu.panastra.tech/",
    featured: true,
    badge: "🏆 Finalist",
    caseStudy: {
      problem:
        "Kuriftu Resorts needed a modern digital platform to streamline guest bookings, enhance on-site experiences, and manage resort operations efficiently. The existing systems were fragmented with no unified digital experience for guests.",
      architecture:
        "A full-stack web application using React and Next.js on the frontend with a Node.js/Express backend. The system features a responsive guest portal, an admin dashboard for operations management, and real-time booking capabilities. The architecture follows a modular design with separate services for bookings, guest profiles, and resort amenities.",
      challenges:
        "The biggest challenges were delivering a production-ready platform within the hackathon timeframe, integrating real-time availability checks across multiple resort locations, and ensuring the UI/UX met the premium brand standards of Kuriftu Resorts. Coordinating across a team under time pressure required disciplined task allocation.",
      solution:
        "We broke the system into modular components, assigning frontend, backend, and design tasks in parallel. Used Next.js App Router for SEO-friendly pages, implemented optimistic UI updates for fast interactions, and built a clean admin panel for resort staff. The final platform impressed judges with its polish and real-world viability.",
      techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
  },
  {
    title: "DonerBridge",
    slug: "doner-bridge",
    description:
      "Modern donor management and fundraising platform connecting donors with causes. Streamlines donation tracking, campaign management, and beneficiary coordination for non-profits and charitable organizations.",
    emoji: "🌉",
    gradient: "from-primary via-accent/80 to-secondary",
    accentColor: "hsl(25 95% 53%)",
    glow: "rgba(251, 146, 60, 0.25)",
    tags: ["PHP", "Laravel", "MySQL", "Full Stack", "Non-Profit"],
    github: "https://github.com/Lydia-Abegaz/DonerBridge",
    live: "#",
    featured: true,
    badge: "🌍 Impact",
    caseStudy: {
      problem:
        "Non-profit organizations and charitable causes struggle with donor management, tracking contributions, and coordinating between donors and beneficiaries. Existing solutions are often expensive, complex, or lack the specific features needed for Ethiopian charitable organizations.",
      architecture:
        "A full-stack web application built with PHP and Laravel framework. Features a modular architecture with separate components for donor management, campaign tracking, beneficiary coordination, and reporting. MySQL serves as the relational database with Eloquent ORM for data management.",
      challenges:
        "Building a secure and scalable donation tracking system required careful database design. Implementing role-based access for different user types (admins, donors, beneficiaries) while maintaining data privacy. Creating intuitive interfaces for non-technical staff at charitable organizations.",
      solution:
        "Developed a comprehensive donor management platform with Laravel's robust authentication and authorization systems. Implemented a clean dashboard for tracking donations, managing campaigns, and generating reports. The platform enables transparent fund allocation and real-time donation tracking.",
      techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "Eloquent ORM"],
    },
  },
  {
    title: "Devotionals API",
    slug: "devotionals-api",
    description:
      "Robust backend API built during Gara Innovation Bootcamp 2025. Scalable architecture for devotional content delivery, user management, and secure data access.",
    image: "/gara-bootcamp.jpg",
    emoji: "📜",
    gradient: "from-forest-dark via-sage to-olive-green",
    accentColor: "hsl(25 85% 58%)",
    glow: "rgba(254, 215, 170, 0.25)",
    tags: ["Node.js", "Express", "API Design", "Bootcamp"],
    github: "https://github.com/Lydia-Aliso",
    live: "#",
    featured: true,
    badge: "🎓 Certificate",
    caseStudy: {
      problem:
        "Devotional content communities needed a reliable backend API to manage users, serve daily devotional entries, handle authentication securely, and scale with growing user bases. No existing solution catered specifically to this niche with a developer-friendly API.",
      architecture:
        "RESTful API built with Node.js and Express, following MVC architecture. Features include JWT-based authentication, role-based access control, paginated content endpoints, and input validation. MongoDB serves as the primary datastore with Mongoose for schema management.",
      challenges:
        "Designing a clean, well-documented API within the bootcamp timeframe required disciplined planning. Implementing secure authentication with refresh tokens, proper error handling across all endpoints, and ensuring the API could handle concurrent requests without data conflicts were key technical challenges.",
      solution:
        "Applied RESTful design principles with clear resource naming, implemented middleware chains for auth and validation, and used MongoDB's aggregation pipeline for efficient content queries. Added comprehensive error handling and API documentation with Swagger. The resulting API earned a certificate of completion from Gara Innovation.",
      techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Swagger"],
    },
  },
  {
    title: "FairChain",
    slug: "fairchain",
    description:
      "Blockchain-based ethical supply chain verification platform using Soroban smart contracts. Enables Ethiopian factories to prove compliance with international standards through cryptographic verification.",
    image: "/stellar-bootcamp.jpg",
    emoji: "🔗",
    gradient: "from-forest-dark via-olive-green to-forest-dark",
    accentColor: "hsl(25 85% 58%)",
    glow: "rgba(254, 215, 170, 0.25)",
    tags: ["Soroban", "Stellar", "Smart Contracts", "Rust"],
    github: "https://github.com/Lydia-Aliso/Fair-Chain",
    live: "#",
    featured: true,
    badge: "🏆 Hackathon Finalist",
    caseStudy: {
      problem:
        "Ethiopian factories exporting goods face challenges proving compliance with international labor and environmental standards. Traditional certification is expensive, slow, and vulnerable to fraud. Supply chains lack transparency, eroding trust with international buyers.",
      architecture:
        "Built on Stellar's Soroban smart contract platform, FairChain uses an on-chain verification model. Factory compliance data is hashed and stored immutably on the blockchain. A React frontend allows factories to submit compliance evidence and buyers to verify certifications. The Soroban smart contracts handle the verification logic, timestamping, and access control.",
      challenges:
        "Learning Rust and Soroban's smart contract paradigm within a hackathon timeline was the primary challenge. Designing a gas-efficient contract that could handle complex verification logic, managing the Stellar test network for development, and building a user-friendly frontend for non-technical factory operators all required creative solutions.",
      solution:
        "Designed a streamlined smart contract with minimal storage operations to reduce gas costs. Implemented off-chain data hashing with on-chain verification anchors — a hybrid approach that keeps costs low while maintaining cryptographic integrity. The frontend abstracts all blockchain complexity behind simple upload and verify flows.",
      techStack: ["Rust", "Soroban", "Stellar SDK", "React", "TypeScript", "Node.js"],
    },
  },
  {
    title: "Portfolio Projects Collection",
    slug: "portfolio-projects",
    description:
      "Collection of web development, blockchain, and full-stack projects showcasing modern technologies and best practices. From React applications to Soroban smart contracts.",
    emoji: "💻",
    gradient: "from-primary/20 via-accent/20 to-primary/20",
    accentColor: "hsl(25 95% 53%)",
    glow: "rgba(251, 146, 60, 0.25)",
    tags: ["React", "Next.js", "TypeScript", "Blockchain", "Full Stack"],
    github: "https://github.com/Lydia-Aliso",
    live: "#",
    featured: false,
    badge: "🚀 Portfolio",
    caseStudy: {
      problem:
        "As a software engineer, I needed to showcase my diverse skill set across multiple technologies and domains. Creating individual project pages for every repository would be time-consuming and hard to maintain.",
      architecture:
        "A curated collection of projects hosted on GitHub, ranging from web applications to blockchain smart contracts. Each project demonstrates different aspects of software engineering including frontend development, backend APIs, and emerging technologies like Soroban.",
      challenges:
        "Managing multiple projects while maintaining code quality, documentation, and keeping up with rapidly evolving technologies. Balancing between learning new frameworks and building production-ready applications.",
      solution:
        "Created a diverse portfolio of projects that showcase different technologies and problem-solving approaches. Each project is well-documented with clear README files and follows best practices for the respective tech stack. This portfolio demonstrates versatility and continuous learning.",
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "Soroban", "Rust", "MongoDB"],
    },
  },
  {
    title: "Data Science Projects",
    slug: "data-science-projects",
    description:
      "Various ML and data analysis projects — real-world datasets, prediction models, and visual insights using Python.",
    emoji: "📊",
    gradient: "from-pale-lime via-forest-dark to-pale-lime",
    accentColor: "hsl(25 90% 65%)",
    glow: "rgba(253, 186, 116, 0.25)",
    tags: ["Python", "Pandas", "NumPy", "ML"],
    github: "https://github.com/Lydia-Aliso",
    live: "#",
    featured: false,
    badge: "🧠 AI/ML",
    caseStudy: {
      problem:
        "Real-world datasets often contain hidden patterns that can drive better decision-making. These projects explore practical applications of machine learning and data analysis across various domains.",
      architecture:
        "A collection of Jupyter notebook-based projects using Python's data science ecosystem. Each project follows a structured pipeline: data collection, cleaning, exploratory analysis, feature engineering, model training, and evaluation. Visualizations are created with Matplotlib and Seaborn.",
      challenges:
        "Working with messy real-world data required significant preprocessing. Selecting appropriate ML algorithms for different problem types, avoiding overfitting with limited datasets, and communicating results effectively through visualizations were recurring challenges.",
      solution:
        "Applied systematic EDA (Exploratory Data Analysis) before modeling. Used cross-validation and hyperparameter tuning to optimize models. Created clear, publication-quality visualizations that tell the data story effectively. Documented findings in well-structured notebooks for reproducibility.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
    },
  },
];
