import { Link } from "react-router-dom";
import { GithubLogo, LinkedinLogo, TwitterLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { PROFILE, SOCIAL_LINKS } from "@/data/portfolioData";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
};

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">{PROFILE.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{PROFILE.title}</p>
            <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} />
              {PROFILE.location}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">Quick Links</h4>
            <div className="space-y-2">
              {["/", "/projects", "/cv", "/about", "/contact"].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-foreground">Connect</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    aria-label={link.name}
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                );
              })}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {PROFILE.availability}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
