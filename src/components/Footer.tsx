import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Dribbble } from "lucide-react";
import logoAsset from "@/assets/planora-logo.png.asset.json";

const footerGroups = [
  {
    title: "Product",
    links: ["Overview", "Storefronts", "Brand Kits", "Integrations", "Changelog"],
  },
  {
    title: "Solutions",
    links: ["For Startups", "For Enterprise", "For Agencies", "For Retail", "For Creators"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Brand Guidelines", "Community", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press Kit", "Contact", "Legal"],
  },
];

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
  { icon: Dribbble, label: "Dribbble" },
];

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main footer content */}
      <div className="container-full py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src={logoAsset.url}
                alt="Planora"
                className="h-9 w-auto rounded-lg bg-primary-foreground/95 p-1"
              />
            </Link>
            <p className="mt-5 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Empowering modern experiences & commerce. One platform for
              storefronts, brand systems, and scalable digital products.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-electric-light/60 hover:bg-electric/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary-foreground/40 mb-5 font-sans">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-full py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Planora. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors duration-300">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
