/**
 * Subset of skills shown on the resume page. Mirrors the "TECHNICAL SKILLS"
 * block of the PDF resume 1:1 - kept separate from lib/skills.ts (which feeds
 * the comprehensive /skills page) so the two views don't have to agree.
 */

export interface ResumeSkillCategory {
  name: string;
  skills: string[];
}

export const resumeSkillCategories: ResumeSkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Python", "Flask", "PHP", "REST APIs", "GraphQL"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "DynamoDB", "Redis"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS Services", "Docker"],
  },
  {
    name: "Architecture",
    skills: ["SaaS", "Multi-Tenant Systems", "Serverless", "Microservices", "PWA"],
  },
  {
    name: "Development & DevOps",
    skills: ["Git", "GitHub", "CI/CD", "Agile/SCRUM"],
  },
];
