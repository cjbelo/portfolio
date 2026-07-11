"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProjects } from "@/lib/projects";
import { Hero } from "@/components/hero";
import { GitHubIcon } from "@/components/icons";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
};

function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={isInView ? "enter" : "initial"}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ReturnType<typeof getFeaturedProjects>[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      <Card className="group h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
        {/* Placeholder Image Area */}
        <div className="relative h-48 bg-gradient-to-br from-primary/10 to-cyan-500/10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-dot-grid bg-[size:16px_16px]" />
          <div className="text-4xl font-bold text-primary/20">
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
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 4).map((t) => (
              <Badge key={t} variant="outline" className="text-xs font-normal">
                {t}
              </Badge>
            ))}
            {project.tech.length > 4 && (
              <Badge variant="outline" className="text-xs font-normal">
                +{project.tech.length - 4}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-3">
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <GitHubIcon className="h-4 w-4" />
                Code
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 ml-auto group/link"
            >
              View Case Study
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function HomeContent() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* What I Build Section */}
      <SectionWrapper className="py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What I Build
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Senior Full Stack Software Engineer with 16+ years of experience
              building web applications - from enterprise systems to AI-powered
              products. I enjoy solving complex problems, learning new
              technologies, and creating software that people actually enjoy
              using. Whether it&apos;s architecting scalable backend systems,
              crafting pixel-perfect interfaces, or integrating AI capabilities,
              I focus on building solutions that are maintainable, scalable, and
              genuinely useful.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Featured Projects Section */}
      {/*
      <SectionWrapper className="py-24" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Selected work showcasing engineering depth and product thinking.
              </p>
            </div>
            {/* <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground h-9 px-4 gap-1.5 font-medium text-sm transition-colors self-start sm:self-auto"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link> */}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 4).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>
      */}

      {/* How I Think Section */}
      <SectionWrapper className="py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              How I Think
            </h2>
            <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 text-left">
              &ldquo;I enjoy solving complex problems by balancing clean
              architecture, performance, and user experience. Whether
              I&apos;m building enterprise software, AI-powered applications, or
              personal products, I aim to create solutions that are
              maintainable, scalable, and genuinely useful.&rdquo;
            </blockquote>
            <p className="mt-6 text-muted-foreground">
              Great software isn&apos;t just functional - it should be intuitive,
              reliable, and enjoyable to use. I believe in writing code that
              other developers can understand and maintain, communicating
              clearly with stakeholders, and always keeping the end user in
              mind.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Contact CTA Section */}
      <SectionWrapper className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary/10 via-card to-cyan-500/10 rounded-2xl p-8 sm:p-12 text-center border border-border"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Have an idea you&apos;d like to build?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Looking for a senior engineer? I&apos;d love to hear about your
              project. Let&apos;s create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 h-10 px-6 gap-2 font-medium text-base transition-colors"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground h-10 px-6 gap-2 font-medium text-base transition-colors"
            >
              View Resume
            </Link>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
