import type { SocialLink, Project, Experience, Skill, Education, Certification } from "@/types";

export const PROFILE = {
  name: "Alex Chen",
  title: "Staff Full-Stack Engineer & Product Architect",
  bio: "I design and build high-impact digital products that scale. With 9+ years shipping production systems at fast-growing startups and enterprise teams, I turn ambiguous problems into elegant, performant solutions.",
  location: "San Francisco, CA",
  email: "alex.chen@email.com",
  availability: "Open to senior & staff roles",
  headline: "Building products that matter, with code that lasts.",
};

export const STATS = [
  { label: "Years Experience", value: "9+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Users Impacted", value: "2M+" },
  { label: "Open Source Stars", value: "4.2k" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "GithubLogo" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "LinkedinLogo" },
  { name: "Twitter", url: "https://twitter.com", icon: "TwitterLogo" },
  { name: "Email", url: "mailto:alex.chen@email.com", icon: "EnvelopeSimple" },
];

export const PROJECTS: Project[] = [
  {
    id: "atlas-dashboard",
    title: "Atlas Analytics Dashboard",
    description: "Real-time analytics platform processing 50M+ events daily with sub-second query latency.",
    longDescription: "A full-stack analytics platform built for a Series C fintech company. Handles 50M+ events daily with ClickHouse for OLAP workloads, a React + D3.js visualization layer, and a custom query builder that lets non-technical teams explore data without engineering support.",
    category: "Full Stack",
    tags: ["React", "Node.js", "ClickHouse", "Redis", "D3.js", "Kubernetes"],
    liveUrl: "https://atlas-demo.vercel.app",
    githubUrl: "https://github.com/alexchen/atlas",
    metrics: [
      { label: "Events/Day", value: "50M+" },
      { label: "Query Latency", value: "<200ms" },
      { label: "Uptime", value: "99.99%" },
    ],
    year: 2024,
  },
  {
    id: "neural-search",
    title: "Neural Semantic Search",
    description: "AI-powered search engine using vector embeddings for natural language queries across 10M documents.",
    longDescription: "Built a semantic search system leveraging OpenAI embeddings and Pinecone vector database. Supports natural language queries, hybrid keyword + vector ranking, and real-time document ingestion. Reduced search time from minutes to milliseconds for internal knowledge base.",
    category: "AI & Data",
    tags: ["Python", "FastAPI", "OpenAI", "Pinecone", "React", "TypeScript"],
    liveUrl: "https://neural-search.vercel.app",
    githubUrl: "https://github.com/alexchen/neural-search",
    metrics: [
      { label: "Documents", value: "10M+" },
      { label: "Search Speed", value: "45ms avg" },
      { label: "Accuracy", value: "94%" },
    ],
    year: 2024,
  },
  {
    id: "flowstate",
    title: "Flowstate Productivity App",
    description: "Cross-platform focus timer app with analytics, team sync, and distraction blocking.",
    longDescription: "A React Native productivity app combining Pomodoro technique with deep analytics. Features team focus sessions, app/website blocking, and a beautiful data visualization dashboard showing focus patterns over time. 50k+ downloads on App Store.",
    category: "Mobile",
    tags: ["React Native", "Expo", "SQLite", "RevenueCat", "Analytics"],
    liveUrl: "https://flowstate.app",
    githubUrl: "https://github.com/alexchen/flowstate",
    metrics: [
      { label: "Downloads", value: "50k+" },
      { label: "Rating", value: "4.8/5" },
      { label: "DAU", value: "8k" },
    ],
    year: 2023,
  },
  {
    id: "commerce-engine",
    title: "Headless Commerce Engine",
    description: "High-performance e-commerce API serving 100k+ concurrent users with 99.9% uptime.",
    longDescription: "Designed and built a microservices commerce platform handling product catalog, inventory, cart, checkout, and order management. Deployed on AWS with auto-scaling, CDN for static assets, and a GraphQL gateway for flexible client queries.",
    category: "Full Stack",
    tags: ["GraphQL", "Go", "PostgreSQL", "AWS", "Terraform", "Stripe"],
    liveUrl: "https://commerce-demo.alexchen.dev",
    githubUrl: "https://github.com/alexchen/commerce",
    metrics: [
      { label: "Concurrent Users", value: "100k+" },
      { label: "API Response", value: "<50ms p99" },
      { label: "Revenue Processed", value: "$12M/yr" },
    ],
    year: 2023,
  },
  {
    id: "design-system",
    title: "Meridian Design System",
    description: "Open-source component library with 60+ accessible components, theming, and documentation.",
    longDescription: "Created and maintained a production-grade design system used across 4 product teams. Built with Radix UI primitives, Storybook documentation, automated visual regression testing, and a theming engine supporting light/dark modes with custom brand tokens.",
    category: "Web Apps",
    tags: ["TypeScript", "Radix UI", "Storybook", "Tailwind", "Chromatic"],
    liveUrl: "https://meridian.alexchen.dev",
    githubUrl: "https://github.com/alexchen/meridian",
    metrics: [
      { label: "Components", value: "60+" },
      { label: "GitHub Stars", value: "4.2k" },
      { label: "Teams Using", value: "4" },
    ],
    year: 2022,
  },
  {
    id: "ml-pipeline",
    title: "Real-Time ML Pipeline",
    description: "MLOps infrastructure for training, deploying, and monitoring ML models in production.",
    longDescription: "Architected an end-to-end ML platform supporting model training with distributed GPU clusters, A/B testing framework, feature store, and automated model monitoring with drift detection. Reduced model deployment time from 2 weeks to 4 hours.",
    category: "AI & Data",
    tags: ["Python", "MLflow", "Kubernetes", "Apache Airflow", "Triton"],
    liveUrl: "https://ml-platform.alexchen.dev",
    githubUrl: "https://github.com/alexchen/ml-pipeline",
    metrics: [
      { label: "Deploy Time", value: "4hrs" },
      { label: "Models Live", value: "12" },
      { label: "GPU Hours Saved", value: "3k/mo" },
    ],
    year: 2024,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "staff-vantage",
    role: "Staff Software Engineer",
    company: "Vantage Systems",
    period: "2022 - Present",
    description: "Leading platform architecture for a developer tools company serving 500k+ engineers.",
    achievements: [
      "Architected a real-time collaboration engine reducing sync latency by 80%",
      "Led migration from monolith to microservices, improving deploy frequency 5x",
      "Mentored 6 senior engineers and established technical review processes",
      "Designed and shipped API gateway handling 2B+ requests/month",
    ],
    techStack: ["Go", "TypeScript", "React", "Kubernetes", "gRPC", "PostgreSQL"],
  },
  {
    id: "senior-fintech",
    role: "Senior Full-Stack Engineer",
    company: "NovaPay",
    period: "2020 - 2022",
    description: "Built core payment infrastructure and merchant dashboard for a Series B fintech.",
    achievements: [
      "Designed PCI-compliant payment processing pipeline handling $50M+/month",
      "Built merchant analytics dashboard adopted by 90% of enterprise clients",
      "Reduced checkout conversion friction, increasing revenue by 23%",
      "Implemented idempotent webhook system processing 10M+ events daily",
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "Redis", "Stripe", "AWS"],
  },
  {
    id: "mid-startup",
    role: "Full-Stack Engineer",
    company: "LaunchPad (Acquired)",
    period: "2018 - 2020",
    description: "Early engineer at a B2B SaaS startup, shipped product from MVP to acquisition.",
    achievements: [
      "Built core product features from scratch: onboarding, billing, team management",
      "Scaled database from 1k to 500k records without downtime",
      "Established CI/CD pipeline reducing release time from hours to minutes",
      "Company acquired by enterprise SaaS firm for $40M",
    ],
    techStack: ["React", "Python", "Django", "PostgreSQL", "Docker", "Heroku"],
  },
  {
    id: "junior-agency",
    role: "Frontend Developer",
    company: "Pixel & Co Studio",
    period: "2016 - 2018",
    description: "Crafted award-winning web experiences for Fortune 500 clients at a creative agency.",
    achievements: [
      "Delivered 15+ client projects with perfect on-time record",
      "Won 2 Awwwards Site of the Day for interactive campaigns",
      "Introduced component-based architecture adopted studio-wide",
    ],
    techStack: ["JavaScript", "Vue.js", "GSAP", "SCSS", "Webpack"],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "M.S. Computer Science",
    school: "Stanford University",
    year: "2016",
    detail: "Specialization in Distributed Systems & Machine Learning",
  },
  {
    degree: "B.S. Software Engineering",
    school: "UC Berkeley",
    year: "2014",
    detail: "Graduated with Honors, ACM Club President",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023" },
  { name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2022" },
  { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", year: "2021" },
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 93, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Vue.js", level: 78, category: "Frontend" },
  { name: "Node.js", level: 92, category: "Backend" },
  { name: "Go", level: 85, category: "Backend" },
  { name: "Python / FastAPI", level: 88, category: "Backend" },
  { name: "PostgreSQL", level: 90, category: "Backend" },
  { name: "GraphQL", level: 82, category: "Backend" },
  { name: "Kubernetes", level: 84, category: "DevOps & Cloud" },
  { name: "AWS / GCP", level: 87, category: "DevOps & Cloud" },
  { name: "Terraform", level: 79, category: "DevOps & Cloud" },
  { name: "CI/CD Pipelines", level: 91, category: "DevOps & Cloud" },
  { name: "System Design", level: 93, category: "Architecture" },
  { name: "Distributed Systems", level: 86, category: "Architecture" },
  { name: "Event-Driven Architecture", level: 83, category: "Architecture" },
  { name: "UI/UX Design", level: 80, category: "Design & Tools" },
  { name: "Figma", level: 76, category: "Design & Tools" },
  { name: "Git / GitHub", level: 95, category: "Design & Tools" },
  { name: "Docker", level: 89, category: "Design & Tools" },
];

export const TESTIMONIALS = [
  {
    quote: "Alex is the rare engineer who thinks like a product designer and ships like a machine. Our platform architecture was transformed in 6 months.",
    author: "Sarah Kim",
    role: "CTO, Vantage Systems",
  },
  {
    quote: "One of the most technically versatile people I have worked with. Alex built our entire payment infrastructure and it has not gone down once.",
    author: "Marcus Rivera",
    role: "VP Engineering, NovaPay",
  },
];

export const PHILOSOPHY = [
  "Write code for the next engineer, not just the compiler.",
  "Ship small, iterate fast, measure everything.",
  "Architecture is a conversation, not a document.",
  "The best abstraction is the one you did not need to build.",
];