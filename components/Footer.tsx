"use client";

import { socialLinks, navLinks } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-mono font-bold text-foreground text-xl mb-3">
              Hrishikesh Netke
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Software Developer based in Mumbai, India.
              Building full-stack products end-to-end.
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available for new projects
            </span>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Resume ↓
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target={link.platform !== "email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {link.label}
                      {link.platform !== "email" && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/60">
            © {year} Hrishikesh Netke. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
