import type { Metadata } from "next";
import {
  Layout,
  Server,
  Cloud,
  Database,
  Brain,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/lib/skills";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Skills - CJ Belo",
  description:
    "Technical skills and technologies: React, Next.js, TypeScript, Node.js, AWS, AI, and more.",
};

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout className="h-5 w-5 text-primary" />,
  server: <Server className="h-5 w-5 text-primary" />,
  cloud: <Cloud className="h-5 w-5 text-primary" />,
  database: <Database className="h-5 w-5 text-primary" />,
  brain: <Brain className="h-5 w-5 text-primary" />,
  wrench: <Wrench className="h-5 w-5 text-primary" />,
};

export default function SkillsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Skills & Technologies
          </h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive toolkit built over 16+ years of solving real
            problems with modern technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.name}
              className="border-border/50 hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {iconMap[category.icon] || (
                      <Layout className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <h2 className="text-lg font-semibold">{category.name}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-normal px-2.5 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Notes */}
        <div className="mt-16 bg-card rounded-xl border border-border p-8">
          <h2 className="text-xl font-semibold mb-4">
            Continuous Learning
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Technology evolves fast. I stay current with the ecosystem through
            open source contributions, side projects, and constant experimentation.
            My approach is to deeply understand fundamentals while remaining
            flexible enough to adopt better tools when they emerge.
          </p>
        </div>
      </div>
    </div>
  );
}
