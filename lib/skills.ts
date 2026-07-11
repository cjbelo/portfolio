export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "layout",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Bootstrap",
      "Vite",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "Flask",
      "PHP",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "AWS (Lambda, EC2, S3, DynamoDB, API Gateway)",
      "CloudFront",
      "Route53",
      "SES",
      "CloudWatch",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Serverless Framework",
    ],
  },
  {
    name: "Databases",
    icon: "database",
    skills: [
      "DynamoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: "brain",
    skills: [
      "OpenAI API",
      "Claude Code",
      "Prompt Engineering",
    ],
  },
  {
    name: "Tools & Practices",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "Agile",
      "Scrum",
      "Clean Architecture",
      "SOLID Principles",
      "Performance Optimization",
      "Code Reviews",
      "Mentoring",
    ],
  },
];
