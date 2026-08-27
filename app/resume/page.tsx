import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft, ExternalLink, Mail, Phone } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import {
  getProfessionalExperience,
  getEarlierExperience,
} from "@/lib/experience";
import { resumeSkillCategories } from "@/lib/resume-skills";

export const metadata: Metadata = {
  title: "Resume - CJ Belo",
  description:
    "Senior Full-Stack Software Engineer with 16+ years of experience designing and building scalable web applications, SaaS platforms, and cloud-based systems. Download my resume or view it online.",
};

export default function ResumePage() {
  const professional = getProfessionalExperience();
  const earlier = getEarlierExperience();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between mb-12 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
              Christopher Jhun S. Belo
            </h1>
            <p className="text-xl text-primary font-medium">
              Senior Full-Stack Software Engineer
            </p>
            <p className="text-muted-foreground mt-2">
              Mandaluyong City, Manila, Philippines ·{" "}
              <Link
                href="mailto:belo.cj@gmail.com"
                className="hover:text-primary transition-colors"
              >
                belo.cj@gmail.com
              </Link>{" "}
              ·{" "}
              <Link
                href="tel:+639567316972"
                className="hover:text-primary transition-colors"
              >
                +63 956 731 6972
              </Link>
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
              <span>
                LinkedIn:{" "}
                <Link
                  href="https://linkedin.com/in/cjbelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  cjbelo
                </Link>
              </span>
              <span>
                GitHub:{" "}
                <Link
                  href="https://github.com/cjbelo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  cjbelo
                </Link>
              </span>
              <span>
                Portfolio:{" "}
                <Link
                  href="https://cjbelo.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  cjbelo.dev
                </Link>
              </span>
            </div>
          </div>
          <Link
            href="/cj-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 h-9 px-4 gap-2 font-medium text-sm transition-colors shrink-0 w-full sm:w-auto"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </div>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Senior Full-Stack Software Engineer with 16+ years of experience
            designing and building scalable web applications, SaaS platforms,
            and cloud-based systems. Strong expertise in React, TypeScript,
            Node.js, Python, PostgreSQL, AWS, and serverless architectures, with
            experience owning products end-to-end from architecture and database
            design through development, deployment, and production support.
            Experienced in building multi-tenant applications, PWAs, REST APIs,
            and cloud infrastructure, while collaborating with distributed teams
            and mentoring developers.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {resumeSkillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6 mt-4">
            {professional.map((exp, index) => (
              <div key={`${exp.company}-${exp.period}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-medium">
                      {exp.role} - {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.type} · {exp.location}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {exp.period}
                  </div>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {exp.tech && exp.tech.length > 0 && (
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-medium text-foreground">Tech:</span>{" "}
                    {exp.tech.join(", ")}
                  </p>
                )}
                {index < professional.length - 1 && (
                  <div className="border-b border-border/50 my-6" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Earlier Experience (condensed) */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Earlier Experience
          </h2>
          <div className="space-y-4 mt-4">
            {earlier.map((exp) => (
              <div key={`${exp.company}-${exp.period}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="font-medium">
                    {exp.role} - {exp.company}
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    {exp.period}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {exp.highlights.join(" ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Education
          </h2>
          <div className="mt-4">
            <h3 className="font-medium">
              AMA Computer College - Daet, Camarines Norte
            </h3>
            <p className="text-sm text-muted-foreground">
              Computer System Design & Programming · 2004
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                Programmer of the Year
              </Badge>
              <Badge variant="outline" className="text-xs">
                Best Thesis Presentation
              </Badge>
              <Badge variant="outline" className="text-xs">
                Regional IT Competition Winner
              </Badge>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Certifications
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="font-medium">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-sm text-primary">Amazon Web Services</p>
              </div>
              <div className="text-sm text-muted-foreground">August 2025</div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="font-medium">
                  AWS Certified Developer – Associate
                </h3>
                <p className="text-sm text-primary">Amazon Web Services</p>
              </div>
              <div className="text-sm text-muted-foreground">November 2024</div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Links
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href="https://github.com/cjbelo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <GitHubIcon className="h-4 w-4" />
              github.com/cjbelo
            </Link>
            <Link
              href="https://linkedin.com/in/cjbelo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="h-4 w-4" />
              linkedin.com/in/cjbelo
            </Link>
            <Link
              href="https://cjbelo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <ExternalLink className="h-4 w-4" />
              cjbelo.dev
            </Link>
            <Link
              href="mailto:belo.cj@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Mail className="h-4 w-4" />
              belo.cj@gmail.com
            </Link>
            <Link
              href="tel:+639567316972"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Phone className="h-4 w-4" />
              +63 956 731 6972
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg hover:bg-muted h-9 px-4 gap-2 font-medium text-sm transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
