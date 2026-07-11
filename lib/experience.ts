export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Full-time" | "Contract" | "Freelance";
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "RenditionDigital, Inc.",
    role: "Senior Software Engineer",
    period: "April 2024 – Present",
    location: "Philippines (Remote)",
    type: "Remote",
    highlights: [
      "Led frontend feature development using React and TypeScript",
      "Built responsive interfaces with React Bootstrap",
      "Collaborated with backend engineers using Flask APIs",
      "Optimized React state management and application performance",
      "Worked closely with cross-functional Agile teams",
    ],
  },
  {
    company: "Freelance",
    role: "Mobile/Web Full-Stack Developer",
    period: "November 2023 – March 2024",
    location: "Philippines (Remote)",
    type: "Freelance",
    highlights: [
      "Developed Progressive Web Applications",
      "Built AWS Serverless backend services",
      "Implemented scalable file management using S3",
      "Used DynamoDB for NoSQL data storage",
    ],
  },
  {
    company: "ConnectOS",
    role: "Senior Full-Stack Developer",
    period: "November 2022 – October 2023",
    location: "Philippines (Remote)",
    type: "Full-time",
    highlights: [
      "Designed and developed complete full-stack web applications",
      "Built frontend using React, Vite and Material UI",
      "Implemented AWS Serverless backend architecture",
      "Managed deployments and cloud infrastructure",
      "Worked directly with stakeholders",
    ],
  },
  {
    company: "Orbital (Pay Perform Ltd.)",
    role: "Full-Stack Engineer",
    period: "June 2021 – November 2022",
    location: "Philippines (Remote)",
    type: "Full-time",
    highlights: [
      "Developed React applications for enterprise clients",
      "Built Node.js backend services",
      "Implemented AWS Serverless solutions",
      "Created CI/CD pipelines with GitHub Actions",
    ],
  },
  {
    company: "Hedy Philippines Inc.",
    role: "Senior Backend Developer",
    period: "January 2021 – June 2021",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Led backend development initiatives",
      "Developed GraphQL APIs for core platform features",
      "Customized Magento 2 for enterprise clients",
      "Optimized application performance and database queries",
    ],
  },
  {
    company: "PCCW Solutions Philippines",
    role: "Senior Full Stack Developer",
    period: "July 2018 – December 2020",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Designed SOA and microservice architectures",
      "Developed React and Node.js applications",
      "Managed AWS infrastructure (EC2, RDS, S3, VPC, ElastiCache)",
      "Mentored developers and led technical initiatives",
    ],
  },
  {
    company: "Outsourced Quality Assured Services",
    role: "Senior Magento Developer",
    period: "January 2018 – July 2018",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Maintained and optimized Magento websites",
      "Developed custom modules and extensions",
      "Integrated third-party services and payment gateways",
      "Applied security updates and performance optimizations",
    ],
  },
  {
    company: "Brady Philippines Direct Marketing Inc.",
    role: "Senior Web Developer / Tech Lead",
    period: "February 2012 – December 2017",
    location: "Philippines",
    type: "Full-time",
    highlights: [
      "Led Magento development for enterprise e-commerce",
      "Built custom modules and integrations",
      "Worked with international teams across multiple time zones",
      "Delivered SEO-friendly, high-performance websites",
    ],
  },
];
