export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
  stars: number;
  gradient: string;
  accent: string;
  glow: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Team Phoenix",
    role: "Hackathon 2026 — Co-teammate",
    avatar: "🦅",
    text: "Lidia was the backbone of our development team. Her ability to ship clean, working code under pressure is unreal. A true full-stack powerhouse.",
    stars: 5,
    gradient: "from-pale-lime to-sage",
    accent: "hsl(25 90% 65%)",
    glow: "rgba(253, 186, 116, 0.15)",
  },
  {
    name: "Stellar EA × GDG AASTU",
    role: "Blockchain Bootcamp Mentors",
    avatar: "⭐",
    text: "Lidia picked up Soroban smart contracts faster than anyone in the cohort. Her FairChain project stood out for both its technical implementation and real-world impact.",
    stars: 5,
    gradient: "from-olive-green to-forest-dark",
    accent: "hsl(25 95% 53%)",
    glow: "rgba(251, 146, 60, 0.15)",
  },
  {
    name: "AASTU Peer",
    role: "Software Engineering Cohort",
    avatar: "🎓",
    text: "Lidia always goes the extra mile. From algorithms to blockchain, she masters every domain she touches and always helps others along the way.",
    stars: 5,
    gradient: "from-sage to-olive-green",
    accent: "hsl(25 85% 58%)",
    glow: "rgba(254, 215, 170, 0.15)",
  },
];
