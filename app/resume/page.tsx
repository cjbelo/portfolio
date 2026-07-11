import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/experience";
import { skillCategories } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Resume - CJ Belo",
  description:
    "Senior Full Stack Software Engineer with 16+ years of experience. Download my resume or view it online.",
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
              Christopher Jhun S. Belo
            </h1>
            <p className="text-xl text-primary font-medium">
              Senior Full-Stack Software Engineer
            </p>
            <p className="text-muted-foreground mt-2">
              Vinzons, Camarines Norte, Philippines (GMT+8) • Open to remote
              opportunities
            </p>
          </div>
          <Link
            href="/cv.pdf"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 h-9 px-4 gap-2 font-medium text-sm transition-colors shrink-0"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </div>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Senior Full-Stack Software Engineer with 16+ years of professional
            experience designing, building, and maintaining scalable web
            applications. Experienced across the entire software development
            lifecycle - from architecture and frontend engineering to backend
            APIs, cloud infrastructure, deployment pipelines, and production
            support. Strong expertise in React, TypeScript, Node.js, AWS
            Serverless, and modern frontend architecture. Passionate about writing
            clean, maintainable code, improving developer experience, mentoring
            engineers, and building products that solve real-world problems.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Experience
          </h2>
          <div className="space-y-6 mt-4">
            {experiences.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-medium">{exp.role}</h3>
                    <p className="text-primary text-sm">{exp.company}</p>
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
                {index < experiences.length - 1 && (
                  <div className="border-b border-border/50 my-6" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-border pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.skills.join(", ")}
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
            <h3 className="font-medium">AMA Computer College</h3>
            <p className="text-sm text-muted-foreground">
              Computer System Design & Programming - 2004
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
