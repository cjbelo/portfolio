export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  status: "Personal" | "Professional" | "Open Source";
  featured: boolean;
  year: string;
  role: string;
  tech: string[];
  problem: string;
  solution: string;
  challenges: string[];
  learnings: string[];
  links: {
    live?: string;
    github?: string;
  };
  featuredOrder?: number;
}

export const projects: Project[] = [
  {
    slug: "road-damage-detection",
    title: "Road Damage Detection Platform",
    shortDescription:
      "AI-powered platform that detects potholes and road damage from dashcam footage using computer vision.",
    description:
      "A platform that automatically detects potholes and road damage from dashcam footage using computer vision, maps their locations on an interactive dashboard, and provides tools for monitoring road conditions over time.",
    status: "Personal",
    featured: true,
    year: "2024",
    role: "Solo Developer",
    tech: [
      "Next.js",
      "TypeScript",
      "Python",
      "OpenCV",
      "YOLO",
      "Leaflet",
      "PostgreSQL",
      "AWS",
    ],
    problem:
      "Road damage detection is typically done manually, making it slow, expensive, and inconsistent. Municipalities and organizations need an automated way to identify and prioritize road repairs.",
    solution:
      "Built a full-stack platform that uses computer vision and YOLO models to analyze dashcam footage, automatically detect and classify road damage, geotag locations on an interactive map, and provide a dashboard for monitoring road conditions over time.",
    challenges: [
      "Training a custom YOLO model for road damage detection with limited labeled data",
      "Optimizing video processing pipeline for real-time inference on cloud infrastructure",
      "Designing an intuitive map interface for non-technical users",
    ],
    learnings: [
      "Deepened expertise in computer vision and model deployment at scale",
      "Learned to balance accuracy vs. inference speed in production systems",
      "Gained experience building map-based visualizations with large geospatial datasets",
    ],
    links: {
      github: "https://github.com/cjbelo/road-damage-detection",
    },
    featuredOrder: 1,
  },
  {
    slug: "enterprise-hr-system",
    title: "Enterprise HR Management System",
    shortDescription:
      "Full-featured HR platform with attendance tracking, employee management, and reporting for enterprise clients.",
    description:
      "A comprehensive enterprise HR platform built for ConnectOS, featuring attendance tracking via biometric integration, employee self-service portals, automated payroll reporting, and role-based access control for enterprise-scale organizations.",
    status: "Professional",
    featured: true,
    year: "2022–2023",
    role: "Senior Full-Stack Developer",
    tech: [
      "React",
      "TypeScript",
      "Material UI",
      "Node.js",
      "AWS Lambda",
      "DynamoDB",
      "PostgreSQL",
    ],
    problem:
      "Enterprise client needed to replace multiple disconnected HR tools with a unified platform that could handle thousands of employees across multiple locations.",
    solution:
      "Designed and built a comprehensive HR system with real-time attendance tracking, employee self-service portals, automated payroll reporting, and role-based access control across organizational hierarchies.",
    challenges: [
      "Building a scalable attendance system handling 5,000+ daily check-ins",
      "Implementing complex RBAC across organizational hierarchies",
      "Integrating with existing biometric hardware and payroll systems",
    ],
    learnings: [
      "Deep experience with enterprise-scale React architecture and state management",
      "Learned to design systems that handle partial failures gracefully",
      "Improved skills in building accessible, form-heavy interfaces",
    ],
    links: {},
    featuredOrder: 2,
  },
  {
    slug: "ai-powered-applications",
    title: "AI-Powered Applications",
    shortDescription:
      "Collection of AI integrations using OpenAI APIs, LangChain, and prompt engineering for real-world business problems.",
    description:
      "A collection of AI-powered tools and integrations built during freelance engagements, including AI assistants with custom knowledge bases, document processing pipelines, automated workflow builders, and prompt engineering frameworks for consistent, reliable outputs.",
    status: "Personal",
    featured: true,
    year: "2023–2024",
    role: "Full-Stack Developer",
    tech: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "LangChain",
      "Python",
      "Vector Databases",
      "AWS Lambda",
    ],
    problem:
      "Many businesses struggle to integrate AI capabilities effectively - they need practical solutions, not just demos.",
    solution:
      "Built a suite of AI-powered tools including AI assistants with custom knowledge bases, document processing pipelines, automated workflow builders, and prompt engineering frameworks for consistent, reliable outputs.",
    challenges: [
      "Designing prompt templates that produce consistent results across use cases",
      "Building retrieval-augmented generation (RAG) pipelines from scratch",
      "Handling rate limits and optimizing API costs for production workloads",
    ],
    learnings: [
      "Gained deep practical knowledge of LLMs, embeddings, and vector databases",
      "Learned to design human-in-the-loop systems for AI-assisted workflows",
      "Improved ability to communicate AI capabilities and limitations to stakeholders",
    ],
    links: {
      github: "https://github.com/cjbelo/ai-apps",
    },
    featuredOrder: 3,
  },
  {
    slug: "full-stack-saas-dashboard",
    title: "Full Stack SaaS Dashboard",
    shortDescription:
      "Production-grade SaaS starter kit with authentication, RBAC, API integrations, and real-time analytics.",
    description:
      "A modern SaaS dashboard demonstrating production-grade patterns for authentication, role-based access control, third-party API integrations, analytics, and performance optimization - built as a reusable starter kit for rapid SaaS development.",
    status: "Personal",
    featured: true,
    year: "2024",
    role: "Solo Developer",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "AWS",
      "NextAuth",
    ],
    problem:
      "Starting a SaaS product requires solving the same authentication, billing, and dashboard challenges every time. This project creates a production-ready template.",
    solution:
      "Built a complete SaaS starter kit with NextAuth authentication, multi-tenant RBAC, Stripe integration for billing, real-time analytics dashboard, and comprehensive API integrations - all optimized for performance from the ground up.",
    challenges: [
      "Designing a flexible multi-tenant architecture that scales cleanly",
      "Implementing real-time analytics without database performance hits",
      "Building a component library that balances flexibility with consistency",
    ],
    learnings: [
      "Mastered Next.js App Router patterns and server components",
      "Learned to design APIs that are both developer-friendly and secure",
      "Improved ability to create reusable, well-documented codebases",
    ],
    links: {
      github: "https://github.com/cjbelo/saas-dashboard",
    },
    featuredOrder: 4,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));
}
