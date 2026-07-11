import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Calendar } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact - CJ Belo",
  description:
    "Get in touch for engineering opportunities, freelance projects, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-muted-foreground">
            Have an idea you&apos;d like to build? Looking for a senior engineer?
            I&apos;d love to hear about your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-6">Send a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
                <div className="space-y-4">
                  <Link
                    href="mailto:belo.cj@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <span>belo.cj@gmail.com</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/cjbelo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <LinkedInIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span>linkedin.com/in/cjbelo</span>
                  </Link>
                  <Link
                    href="https://github.com/cjbelo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GitHubIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span>github.com/cjbelo</span>
                  </Link>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span>Philippines (GMT+8)</span>
                  </div>
                  <Link
                    href="https://calendar.app.google/ApHyaRKDL21E6BHn8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span>Schedule a Meeting</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="border-border/50 bg-green-500/5 border-green-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                  <h2 className="text-lg font-semibold text-green-500">
                    Open to Opportunities
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  I&apos;m currently available for senior engineering roles,
                  freelance projects, and consulting work. Response time is
                  usually within 24 hours.
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-2">Response Time</h2>
                <p className="text-sm text-muted-foreground">
                  I typically respond to inquiries within 12–48 hours. For
                  urgent matters, LinkedIn is the fastest way to reach me.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
