export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Full Stack" | "AI & Data" | "Web Apps" | "Mobile";
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  metrics: { label: string; value: string }[];
  year: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}
