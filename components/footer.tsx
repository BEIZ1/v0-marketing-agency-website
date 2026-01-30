"use client";

import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Dribbble,
  ArrowUpRight,
} from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@beiz.studio",
    href: "mailto:hello@beiz.studio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 4 123 4567",
    href: "tel:+97141234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, UAE",
    href: "#",
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Dribbble, label: "Dribbble", href: "#" },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Content Production", href: "#services" },
      { label: "Brand Design", href: "#services" },
      { label: "Web Development", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#team" },
      { label: "Our Process", href: "#process" },
      { label: "Case Studies", href: "#work" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative border-t border-border bg-secondary/30 pt-16 pb-8 lg:pt-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contact cards */}
        <div
          className={cn(
            "mb-16 grid gap-4 sm:grid-cols-3 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {contactInfo.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              className={cn(
                "group glass-card rounded-2xl p-6 transition-all duration-500 hover:border-primary/50",
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{
                transitionDelay: isInView ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <contact.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {contact.label}
                  </p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
              </div>
            </a>
          ))}
        </div>

        {/* Main footer content */}
        <div
          className={cn(
            "grid gap-12 lg:grid-cols-5 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-block text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              BEIZ <span className="font-light">Marketing agency</span>
            </a>
            <p className="mt-4 max-w-sm text-muted-foreground">
              A premium creative agency delivering exceptional content,
              design, and web experiences. Based in Dubai, working globally.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                null
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-foreground">{column.title}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className={cn(
            "mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row transition-all duration-700 delay-300",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BEIZ Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
