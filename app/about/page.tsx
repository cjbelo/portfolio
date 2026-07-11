import type { Metadata } from "next";
import { MapPin, Calendar, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - CJ Belo",
  description:
    "Senior Full Stack Software Engineer with 16+ years of experience building scalable applications, AI-powered solutions, and intuitive user experiences.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I&apos;m a Senior Full Stack Software Engineer with 16+ years of
            experience building web applications - from enterprise systems to
            AI-powered products. I enjoy solving complex problems, learning new
            technologies, and creating software that people actually enjoy using.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold">The Short Version</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey in software engineering started in 2007 when I began
                building websites for local businesses. Since then, I&apos;ve
                worked with startups, agencies, and enterprise companies across
                the Philippines and internationally - always focused on
                delivering high-quality, user-centric solutions.
              </p>
              <p>
                Today, I specialize in building modern web applications using
                React, Next.js, TypeScript, and Node.js. I have extensive
                experience with AWS cloud architecture, AI/ML integrations, and
                creating scalable systems that handle thousands of users.
              </p>
              <p>
                Outside of work, I enjoy exploring AI technologies, building side
                projects, gaming, and constantly improving my craft. I believe
                great software isn&apos;t just functional - it should be intuitive,
                reliable, and enjoyable to use.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6 space-y-4">
              <h3 className="font-semibold">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Vinzons, Camarines Norte, Philippines</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>16+ years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm">Open to opportunities</span>
                </div>
              </div>
            </div>

            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 w-full h-9 px-4 gap-2 font-medium text-sm transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Link>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">My Philosophy</h2>
          <blockquote className="border-l-4 border-primary pl-6 py-2 bg-card/50 rounded-r-xl">
            <p className="text-lg text-muted-foreground italic leading-relaxed">
              &ldquo;Great software isn&apos;t just functional - it should be
              intuitive, reliable, and enjoyable to use. I believe in writing
              code that other developers can understand and maintain,
              communicating clearly with stakeholders, and always keeping the end
              user in mind.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* What I Do */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Full Stack Development",
                description:
                  "Building complete web applications from database design to user interface.",
              },
              {
                title: "Cloud Architecture",
                description:
                  "Designing scalable AWS infrastructure that's cost-effective and reliable.",
              },
              {
                title: "AI Integration",
                description:
                  "Adding AI capabilities to products using LLMs, computer vision, and automation.",
              },
              {
                title: "Technical Consulting",
                description:
                  "Helping teams make better architectural decisions and shipping faster.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Beyond Work */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Beyond Work</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "AI Exploration",
              "Side Projects",
              "Gaming",
              "Tech Blogs",
              "Open Source",
              "Continuous Learning",
            ].map((interest) => (
              <Badge key={interest} variant="outline" className="px-3 py-1">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
