"use client";

import { useRef } from "react";
import { Film, Palette, Code, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Film,
    title: "Content Production",
    description:
      "Compelling video content, photography, and motion graphics that captivate your audience and tell your brand story.",
    features: [
      "Brand videos & commercials",
      "Social media content",
      "Motion graphics & animation",
    ],
    tags: ["Reels", "TikTok", "YouTube", "Photography"],
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Stunning visual identities and user interfaces that make lasting impressions and drive engagement.",
    features: [
      "Brand identity & guidelines",
      "UI/UX design",
      "Marketing collateral",
    ],
    tags: ["Branding", "UI/UX", "Print", "Packaging"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "High-performance websites and web applications built with cutting-edge technology for optimal results.",
    features: [
      "Custom web applications",
      "E-commerce solutions",
      "Landing pages & MVPs",
    ],
    tags: ["Next.js", "React", "Headless CMS", "Shopify"],
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "mx-auto max-w-2xl text-center transition-all duration-700",
            isInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
        >
          <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            Our Services
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">stand out</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From concept to launch, we deliver comprehensive creative solutions
            tailored to your unique needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl glass-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{
                transitionDelay: isInView ? `${(index + 1) * 100}ms` : "0ms",
              }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn more link */}
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
