import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const footerLinks = {
  pages: [
    { href: "/about", label: "About" },
    // { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { href: "https://github.com/cjbelo", label: "GitHub" },
    { href: "https://linkedin.com/in/cjbelo", label: "LinkedIn" },
    { href: "mailto:belo.cj@gmail.com", label: "Email" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold">
              <span className="text-primary">CJ</span>{" "}
              <span className="text-foreground">Belo</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building modern web experiences that solve real-world problems.
              Senior Full Stack Engineer based in the Philippines.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Philippines (GMT+8)</span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.label === "GitHub" ? (
                    <GitHubIcon className="h-5 w-5" />
                  ) : link.label === "LinkedIn" ? (
                    <LinkedInIcon className="h-5 w-5" />
                  ) : (
                    <Mail className="h-5 w-5" />
                  )}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Open to opportunities
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-green-500 mt-1">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Available for hire
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CJ Belo. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Let's build with CJ
          </p>
        </div>
      </div>
    </footer>
  );
}
