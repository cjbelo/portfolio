import type { Metadata } from "next";
import { experiences } from "@/lib/experience";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Experience - CJ Belo",
  description:
    "16+ years of building web applications, from enterprise systems to AI-powered products.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground">
            16+ years of building web applications, systems, and products.
            From enterprise software to AI-powered solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border" />

          {/* Timeline Entries */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <Card className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-xl font-semibold">{exp.role}</h2>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <Badge variant="outline" className="font-normal">
                          {exp.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <Badge variant="secondary" className="mb-4 font-normal">
                      {exp.type}
                    </Badge>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
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
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
