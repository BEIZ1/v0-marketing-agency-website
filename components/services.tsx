"use client";

import { useRef, useState } from "react";
import { Film, Palette, Code, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Service = {
  icon: typeof Film;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  details: {
    longDescription: string;
    process: string[];
    whyUs: string[];
  };
};

const services: Service[] = [
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
    details: {
      longDescription:
        "We produce end-to-end content that resonates with your audience. From scripting and storyboarding through filming, editing, and post-production, every frame is crafted to communicate your brand's unique narrative and drive measurable engagement.",
      process: [
        "Discovery call & creative brief",
        "Concept development & storyboarding",
        "Production & filming",
        "Post-production & motion graphics",
        "Review, revisions & delivery",
      ],
      whyUs: [
        "Cinematic quality on any budget",
        "Fast turnaround without sacrificing polish",
        "Platform-optimized formats (vertical, square, 16:9)",
        "Full rights ownership included",
      ],
    },
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
    details: {
      longDescription:
        "Great design is invisible -- it simply works. We build cohesive visual systems that unify your brand across every touchpoint, from your website and app to print materials and packaging. Our process is research-driven and rooted in user empathy.",
      process: [
        "Brand audit & competitor analysis",
        "Moodboarding & visual direction",
        "Logo, typography & color system",
        "UI component library in Figma",
        "Brand guidelines documentation",
      ],
      whyUs: [
        "Systematic approach with reusable design tokens",
        "Accessibility-first color and type decisions",
        "Figma source files with developer handoff",
        "Scalable design systems for growing teams",
      ],
    },
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
    details: {
      longDescription:
        "We engineer fast, scalable, and accessible web experiences that convert visitors into customers. Whether you need a marketing site, a full-stack SaaS product, or a headless e-commerce store, we deliver production-ready code with modern tooling.",
      process: [
        "Technical discovery & architecture planning",
        "UI development with component library",
        "Backend, API & database integration",
        "Performance optimization & testing",
        "Deployment, monitoring & handover",
      ],
      whyUs: [
        "98+ Lighthouse scores as standard",
        "SEO-optimized and Core Web Vitals friendly",
        "CI/CD pipelines and automated testing",
        "Clean, documented code you actually own",
      ],
    },
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
            <button
              key={service.title}
              type="button"
              onClick={() => setSelectedService(service)}
              className={cn(
                "group relative overflow-hidden rounded-2xl glass-card p-8 text-left transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] cursor-pointer",
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
            </button>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Dialog
        open={!!selectedService}
        onOpenChange={(open) => {
          if (!open) setSelectedService(null);
        }}
      >
        {selectedService && (
          <DialogContent className="glass-card max-w-2xl max-h-[85vh] overflow-y-auto p-0 gap-0">
            {/* Header */}
            <DialogHeader className="p-6 pb-0">
              <div className="mb-4 inline-flex self-start rounded-xl bg-primary/10 p-3 text-primary">
                <selectedService.icon className="h-6 w-6" />
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                {selectedService.title}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed mt-2">
                {selectedService.details.longDescription}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 p-6">
              <Separator />

              {/* Our Process */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Our Process
                </h4>
                <ol className="space-y-3">
                  {selectedService.details.process.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <Separator />

              {/* Why Us */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Why Work With Us
                </h4>
                <ul className="space-y-2">
                  {selectedService.details.whyUs.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                      <span className="text-sm text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* CTA */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-sm text-muted-foreground">
                  {"Ready to get started? Share your project details and we'll get back to you within 24 hours."}
                </p>
                <Button
                  onClick={() => {
                    setSelectedService(null);
                    document
                      .getElementById("brief")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-3 w-full bg-primary text-primary-foreground hover:bg-primary/90 glow"
                >
                  Order a Brief
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
