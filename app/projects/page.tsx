import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects - CJ Belo",
  description:
    "Featured projects showcasing engineering depth, product thinking, and technical excellence.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A selection of projects that showcase engineering depth, product
            thinking, and a passion for building things people actually use.
          </p>
        </div>

        {/* Filter Info */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <span className="text-sm text-muted-foreground">Showing</span>
          <Badge variant="default">All Projects</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Personal
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Professional
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            Open Source
          </Badge>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Placeholder Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dot-grid bg-[size:16px_16px]" />
                <div className="text-5xl font-bold text-primary/20">
                  {project.title.charAt(0)}
                </div>
                <Badge
                  className="absolute top-3 right-3"
                  variant={
                    project.status === "Personal"
                      ? "default"
                      : project.status === "Professional"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.role}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 5).map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                  {project.tech.length > 5 && (
                    <Badge variant="outline" className="text-xs font-normal">
                      +{project.tech.length - 5}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      View Code
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 ml-auto group/link font-medium"
                  >
                    Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
