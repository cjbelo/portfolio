import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects, getProjectBySlug } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - CJ Belo`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge
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
            <span className="text-sm text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">{project.role}</p>
        </div>

        {/* Project Image Placeholder */}
        <div className="relative h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid bg-[size:20px_20px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold text-primary/10">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        {(project.links.github || project.links.live) && (
          <div className="flex flex-wrap gap-4 mb-12">
            {project.links.github && (
              <Link
                href={project.links.github!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground h-9 px-4 gap-2 font-medium text-sm transition-colors"
              >
                <GitHubIcon className="h-4 w-4" />
                View on GitHub
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground h-9 px-4 gap-2 font-medium text-sm transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            )}
          </div>
        )}

        {/* Problem */}
        <Card className="mb-8 border-border/50">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="mb-8 border-border/50">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </CardContent>
        </Card>

        {/* Challenges & Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5">
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="currentColor"
                      >
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Key Learnings</h2>
              <ul className="space-y-3">
                {project.learnings.map((learning, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1.5">
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="currentColor"
                      >
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-border">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-medium">{nextProject.title}</div>
              </div>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
