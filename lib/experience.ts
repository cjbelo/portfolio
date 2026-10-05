export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Full-time" | "Contract" | "Freelance" | "Remote";
  highlights: string[];
  /**
   * Per-role tech stack shown on the resume page (matches the "Tech:" line in the PDF).
   * Optional - older roles on /experience timeline don't need it.
   */
  tech?: string[];
  /**
   * When true, the resume page renders this entry in the condensed "Earlier Experience"
   * block instead of the full professional-experience block. /experience timeline
   * renders all entries regardless.
   */
  condensed?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "TimeKo",
    role: "Founder / Full-Stack SaaS Developer",
    period: "November 2025 – Present",
    location: "Philippines (Remote)",
    type: "Contract",
    highlights: [
      "Designed and developed TimeKo, a multi-tenant SaaS platform for workforce and business operations.",
      "Built core business modules covering employee management, timekeeping, payroll, inventory, POS, scheduling, leave management, and multi-store operations.",
      "Architected the application end-to-end using React, TypeScript, Vite, Supabase/PostgreSQL, and serverless APIs.",
      "Developed the application as a Progressive Web App (PWA) for web-based workforce operations across desktop and mobile devices.",
      "Implemented Web Push notifications for real-time employee and system notifications on supported devices.",
      "Designed tenant-aware data structures and access controls to support multiple companies, stores, employees, and operational workflows.",
      "Owned the complete product lifecycle including architecture, database design, frontend/backend development, authentication, automated testing, deployment, and production troubleshooting.",
      "Followed testing-focused development practices by designing modular, testable components and validating application behavior across frontend and backend functionality.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "PWA",
      "Web Push",
      "Serverless",
    ],
  },
  {
    company: "RenditionDigital, Inc.",
    role: "Senior Software Engineer",
    period: "April 2024 – October 2025",
    location: "Philippines (Remote)",
    type: "Remote",
    highlights: [
      "Led UI feature development using React, TypeScript, and React-Bootstrap, delivering responsive and maintainable interfaces.",
      "Collaborated on scalable backend APIs using Python/Flask and PostgreSQL.",
      "Applied modular architecture, clean-code practices, and optimized React state management.",
      "Coordinated with cross-functional teams to deliver high-quality features and releases.",
    ],
    tech: [
      "React",
      "TypeScript",
      "React-Bootstrap",
      "Flask",
      "PostgreSQL",
      "Git",
      "Agile/SCRUM",
    ],
  },
  {
    company: "Freelance",
    role: "Mobile/Web Full-Stack Developer",
    period: "November 2023 – March 2024",
    location: "Philippines (Remote)",
    type: "Freelance",
    highlights: [
      "Built a production-oriented Progressive Web App using React, TypeScript, Redux, and Material UI.",
      "Developed scalable backend services using Node.js/TypeScript and AWS Lambda.",
      "Implemented DynamoDB and S3 for application data and file storage.",
      "Applied modern development and performance best practices across the frontend and backend.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "AWS Lambda",
      "DynamoDB",
      "S3",
    ],
  },
  {
    company: "ConnectOS",
    role: "Senior Full-Stack Developer",
    period: "November 2022 – October 2023",
    location: "Philippines (Remote)",
    type: "Full-time",
    highlights: [
      "Delivered a complete web application end-to-end, covering architecture, frontend, backend, cloud infrastructure, and deployment.",
      "Built responsive interfaces using React, Vite, Material UI, and Redux Toolkit.",
      "Designed and deployed serverless backend infrastructure using AWS Lambda, API Gateway, DynamoDB, S3, CloudFront, SES, and Route 53.",
      "Implemented application monitoring and optimization using AWS CloudWatch.",
      "Independently managed deployments, troubleshooting, and stakeholder communication.",
    ],
  },
  {
    company: "Orbital (Pay Perform Ltd.)",
    role: "Full-Stack Engineer",
    period: "June 2021 – November 2022",
    location: "UK · Remote",
    type: "Full-time",
    highlights: [
      "Developed interactive web applications using React, Node.js, and AWS Serverless.",
      "Collaborated with cross-functional teams following Agile/SCRUM practices.",
      "Established CI/CD workflows with automated unit-testing pipelines, integrating testing into the development and deployment lifecycle.",
      "Applied clean-code and maintainability practices to improve reliability and support continuous delivery.",
    ],
  },
  {
    company: "Hedy Philippines Inc.",
    role: "Senior Backend Developer",
    period: "January 2021 – June 2021",
    location: "Philippines (Remote)",
    type: "Full-time",
    highlights: [
      "Led backend development using PHP, MySQL, Redis, Nginx, and Docker.",
      "Built GraphQL APIs and integrated third-party services.",
      "Developed Magento 2 customizations and performed performance optimization.",
    ],
    condensed: true,
  },
  {
    company: "PCCW Solutions Philippines, Inc.",
    role: "Senior Full Stack Developer",
    period: "July 2018 – December 2020",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Designed and developed SOA/microservices architectures using React, Node.js, PHP, and Docker.",
      "Managed AWS infrastructure and CI/CD pipelines.",
      "Mentored developers and contributed to cross-functional technical strategy.",
    ],
    condensed: true,
  },
  {
    company: "Outsourced Quality Assured Services, Inc.",
    role: "Senior Magento Developer",
    period: "January 2018 – July 2018",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Developed Magento custom modules and integrations, maintained e-commerce platforms, optimized performance, and implemented security updates.",
    ],
    condensed: true,
  },
  {
    company: "Brady Philippines Direct Marketing Inc.",
    role: "Senior Web Developer / Tech Lead",
    period: "February 2012 – December 2017",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Developed and maintained Magento-based e-commerce platforms, customized modules and integrations, and collaborated with international development teams.",
    ],
    condensed: true,
  },
  {
    company: "Visualtribe Inc.",
    role: "Web Developer",
    period: "January 2008 – January 2012",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Developed websites and web applications, worked directly with clients on project requirements, and implemented SEO-focused solutions.",
    ],
    condensed: true,
  },
  {
    company: "Pamerstone Inc.",
    role: "Web Developer",
    period: "July 2007 – January 2008",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Developed and maintained company websites, static sites, and custom themes.",
    ],
    condensed: true,
  },
];

/** Full professional experience (5 most recent). */
export function getProfessionalExperience(): Experience[] {
  return experiences.filter((e) => !e.condensed);
}

/** Earlier experience (rendered condensed on the resume page). */
export function getEarlierExperience(): Experience[] {
  return experiences.filter((e) => e.condensed);
}
