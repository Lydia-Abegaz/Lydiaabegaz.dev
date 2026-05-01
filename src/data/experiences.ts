export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  color: string;
  glowColor: string;
}

export const experiences: Experience[] = [
  {
    title: "Finalist — Team Phoenix",
    company: "Hospitality Hackathon 2026",
    location: "Addis Ababa, Ethiopia",
    period: "2026",
    description:
      "Led development of the Kuriftu Hospitality Platform as part of Team Phoenix. Placed as finalists for creating a comprehensive hospitality solution. Built modern web technologies to enhance guest experiences and streamline resort operations.",
    skills: ["Hackathon", "Team Leadership", "Web Dev", "Hospitality Tech"],
    color: "hsl(25 90% 65%)",
    glowColor: "rgba(253, 186, 116, 0.2)",
  },
  {
    title: "Gara Innovation Bootcamp",
    company: "Gara Innovation",
    location: "Addis Ababa, Ethiopia",
    period: "2025",
    description:
      "Completed intensive innovation bootcamp. Engineered a Devotionals API and earned a certificate of completion. Focused on backend systems and innovation frameworks.",
    skills: ["Backend Dev", "API Design", "Innovation", "API Security"],
    color: "hsl(25 95% 53%)",
    glowColor: "rgba(251, 146, 60, 0.2)",
  },
  {
    title: "Hackathon Finalist — Stellar EA × GDG AASTU",
    company: "Stellar East Africa × GDG AASTU",
    location: "Addis Ababa, Ethiopia",
    period: "2024",
    description:
      "Powered by Stellar East Africa in collaboration with GDG AASTU On Campus. Developed FairChain — a blockchain-based ethical supply chain platform using Soroban smart contracts. Placed as a hackathon finalist for technical innovation.",
    skills: ["Soroban", "Stellar Blockchain", "Smart Contracts", "Rust"],
    color: "hsl(25 95% 53%)",
    glowColor: "rgba(251, 146, 60, 0.2)",
  },
  {
    title: "Full Stack Developer",
    company: "GitHub Portfolio Projects",
    location: "Addis Ababa, Ethiopia",
    period: "2024 — Present",
    description:
      "Building and maintaining multiple full-stack projects on GitHub, ranging from web applications to blockchain solutions. Continuously learning and implementing modern technologies.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Blockchain"],
    color: "hsl(25 85% 58%)",
    glowColor: "rgba(254, 215, 170, 0.2)",
  },
  {
    title: "Software Engineering Student",
    company: "Addis Ababa Science & Technology University",
    location: "Addis Ababa, Ethiopia",
    period: "2024 — Present",
    description:
      "Pursuing B.Sc in Software Engineering with strong foundations in programming, data structures, full-stack web development, AI/ML, and blockchain technologies.",
    skills: ["Java", "Python", "Data Structures", "Algorithms", "SE"],
    color: "hsl(25 80% 45%)",
    glowColor: "rgba(249, 115, 22, 0.2)",
  },
];
