"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeImage } from "@/components/theme-image";
import { projects, type Project } from "@/lib/projects";

type Filter = "All" | Project["status"];

const filters: Filter[] = ["All", "Personal", "Professional", "Open Source"];

export function ProjectsGrid() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.status === active)),
    [active]
  );

  return (
    <>
      {/* Filter Chips */}
      <div
        className="flex items-center gap-2 mb-8 flex-wrap"
        role="tablist"
        aria-label="Filter projects by status"
      >
        <span className="text-sm text-muted-foreground">Showing</span>
        {filters.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-full"
            >
              <Badge
                variant={isActive ? "default" : "outline"}
                className={
                  isActive
                    ? "cursor-default"
                    : "cursor-pointer hover:bg-muted transition-colors"
                }
              >
                {f === "All" ? "All Projects" : f}
              </Badge>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {visible.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((project) => (
            <Card
              key={project.slug}
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <ThemeImage
                    src={typeof project.image === "string" ? project.image : undefined}
                    srcByTheme={
                      typeof project.image === "string"
                        ? undefined
                        : project.image
                    }
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="relative h-full bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-dot-grid bg-[size:16px_16px]" />
                    <div className="text-5xl font-bold text-primary/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
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
      ) : (
        <div className="text-center py-16 text-muted-foreground border border-dashed border-border rounded-xl">
          No projects in this category yet.
        </div>
      )}
    </>
  );
}
