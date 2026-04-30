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
    accentColor: "#BAC095",
    glow: "rgba(186, 192, 149, 0.25)",
    tags: ["Hackathon Finalist", "Web Dev", "Hospitality", "Team Phoenix"],
    github: "https://github.com/Lydia-Abegaz",
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
    title: "Devotionals API",
    slug: "devotionals-api",
    description:
      "Robust backend API built during Gara Innovation Bootcamp 2025. Scalable architecture for devotional content delivery, user management, and secure data access.",
    image: "/gara-bootcamp.jpg",
    emoji: "📜",
    gradient: "from-forest-dark via-sage to-olive-green",
    accentColor: "#636B2F",
    glow: "rgba(99,107,47,0.25)",
    tags: ["Node.js", "Express", "API Design", "Bootcamp"],
    github: "https://github.com/Lydia-Abegaz",
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
    accentColor: "#636B2F",
    glow: "rgba(99,107,47,0.25)",
    tags: ["Soroban", "Stellar", "Smart Contracts", "Rust"],
    github: "https://github.com/Lydia-Abegaz/Fair-Chain",
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
    title: "QuizBirr",
    slug: "quizbirr",
    description:
      "Mobile quiz app with real-money rewards. Full-stack with authentication, quiz logic, and reward systems. Built with TypeScript and React Native.",
    emoji: "🎯",
    gradient: "from-olive-green via-sage to-olive-green",
    accentColor: "#BAC095",
    glow: "rgba(186, 192, 149, 0.25)",
    tags: ["TypeScript", "React Native", "Node.js", "MongoDB"],
    github: "https://github.com/Lydia-Abegaz/QuizBirr",
    live: "#",
    featured: false,
    badge: "🎮 App",
    caseStudy: {
      problem:
        "Ethiopia's growing mobile-first audience lacked engaging, localized quiz platforms with real incentives. Existing global apps didn't support local payment methods or culturally relevant content.",
      architecture:
        "Cross-platform mobile app built with React Native and TypeScript. The backend runs on Node.js with Express, using MongoDB for user data, quiz content, and reward tracking. Features include real-time scoring, leaderboards, and a reward redemption system.",
      challenges:
        "Implementing a fair and tamper-proof reward system was critical. Handling real-time quiz sessions with concurrent users, preventing cheating through answer timing validation, and integrating with local payment providers all required careful design.",
      solution:
        "Built a server-authoritative quiz engine where answers are validated server-side with timing checks. Implemented a points-based reward system with withdrawal thresholds. Used React Native's cross-platform capabilities to target both Android and iOS with a single codebase.",
      techStack: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB"],
    },
  },
  {
    title: "Data Science Projects",
    slug: "data-science-projects",
    description:
      "Various ML and data analysis projects — real-world datasets, prediction models, and visual insights using Python.",
    emoji: "📊",
    gradient: "from-pale-lime via-forest-dark to-pale-lime",
    accentColor: "#D4DE95",
    glow: "rgba(212,222,149,0.25)",
    tags: ["Python", "Pandas", "NumPy", "ML"],
    github: "https://github.com/Lydia-Abegaz",
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
