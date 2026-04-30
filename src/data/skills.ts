export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  emoji: string;
  color: string;
  glow: string;
  skills: Skill[];
}

export const categories: SkillCategory[] = [
  {
    title: "Languages",
    emoji: "💻",
    color: "#636B2F",
    glow: "rgba(99,107,47,0.3)",
    skills: [
      { name: "JavaScript / TypeScript", level: 90, icon: "⚡" },
      { name: "Python",                  level: 85, icon: "🐍" },
      { name: "Java",                    level: 80, icon: "☕" },
      { name: "Rust (Soroban)",          level: 75, icon: "🦀" },
    ],
  },
  {
    title: "Web Development",
    emoji: "🌐",
    color: "#D4DE95",
    glow: "rgba(212,222,149,0.3)",
    skills: [
      { name: "React.js / Next.js",    level: 88, icon: "⚛️" },
      { name: "Node.js / Express",     level: 85, icon: "🟢" },
      { name: "MERN Stack",            level: 87, icon: "🔥" },
      { name: "Tailwind / CSS3",       level: 90, icon: "🎨" },
      { name: "REST APIs",             level: 88, icon: "🔗" },
    ],
  },
  {
    title: "Blockchain",
    emoji: "⛓️",
    color: "#3D4127",
    glow: "rgba(61,65,39,0.3)",
    skills: [
      { name: "Soroban Smart Contracts", level: 85, icon: "📝" },
      { name: "Stellar Blockchain",      level: 80, icon: "⭐" },
      { name: "Web3 Concepts",           level: 78, icon: "🌍" },
      { name: "DeFi Protocols",          level: 72, icon: "💱" },
    ],
  },
  {
    title: "Data Science & AI",
    emoji: "🧠",
    color: "#BAC095",
    glow: "rgba(186,192,149,0.3)",
    skills: [
      { name: "Machine Learning",      level: 75, icon: "🤖" },
      { name: "Pandas / NumPy",        level: 80, icon: "📊" },
      { name: "Data Visualization",    level: 78, icon: "📈" },
      { name: "Deep Learning",         level: 65, icon: "🧬" },
    ],
  },
];

export const toolTags: string[] = [
  "Git / GitHub", "Figma", "VS Code", "MongoDB",
  "MySQL", "Docker", "Postman", "Linux",
];
