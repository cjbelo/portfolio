import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects-grid";

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

        <ProjectsGrid />
      </div>
    </div>
  );
}
