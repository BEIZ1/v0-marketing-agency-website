"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, TrendingUp, ExternalLink, Globe, Github, FigmaIcon, HardDrive, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const filters = ["All", "Content", "Design", "Web"];

type CaseStudy = {
  id: number;
  title: string;
  description: string;
  category: "Content" | "Design" | "Web";
  tags: string[];
  result: string;
  image: string;
  // Extended details for case overlay
  summary: string;
  deliveryTime: string;
  highlights: Array<{ label: string; value: string }>;
  deliverables: string[];
  techStack?: string[];
  resources: Array<{
    label: string;
    url: string;
    icon: "website" | "figma" | "github" | "drive";
  }>;
  gallery: string[];
};

const projects: CaseStudy[] = [
  {
    id: 1,
    title: "TechFlow SaaS",
    description: "Complete rebrand and product website for a B2B SaaS platform",
    category: "Web",
    tags: ["Landing Page", "Branding", "UI/UX"],
    result: "+45% conversions",
    image: "linear-gradient(135deg, oklch(0.35 0.15 260), oklch(0.25 0.1 280))",
    summary: "TechFlow needed a complete digital transformation to compete in the modern B2B SaaS space. We rebuilt their brand identity from the ground up and created a high-converting product website that clearly communicates their value proposition while maintaining technical credibility.",
    deliveryTime: "8 weeks",
    highlights: [
      { label: "Conversion increase", value: "+45%" },
      { label: "Time to launch", value: "8 weeks" },
      { label: "Page speed score", value: "98/100" },
      { label: "A/B tests run", value: "12" },
    ],
    deliverables: [
      "Brand strategy & visual identity",
      "UI/UX design system (Figma)",
      "Landing page development (Next.js)",
      "Product pages & pricing calculator",
      "Blog & documentation setup",
      "SEO optimization & meta tags",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    resources: [
      { label: "Live Website", url: "#", icon: "website" },
      { label: "Figma Design", url: "#", icon: "figma" },
      { label: "GitHub Repo", url: "#", icon: "github" },
    ],
    gallery: [
      "linear-gradient(135deg, oklch(0.35 0.15 260), oklch(0.25 0.1 280))",
      "linear-gradient(135deg, oklch(0.3 0.18 260), oklch(0.22 0.12 280))",
      "linear-gradient(135deg, oklch(0.4 0.12 260), oklch(0.28 0.08 280))",
    ],
  },
  {
    id: 2,
    title: "Luxe Cosmetics",
    description: "Visual identity and social content strategy for premium beauty brand",
    category: "Content",
    tags: ["Reels", "Branding", "Photography"],
    result: "2M+ views",
    image: "linear-gradient(135deg, oklch(0.4 0.12 320), oklch(0.3 0.08 340))",
    summary: "Luxe Cosmetics wanted to establish a premium presence on social media that would resonate with their target audience. We developed a comprehensive content strategy and produced a series of high-quality reels that showcased their products in an aspirational yet authentic way.",
    deliveryTime: "6 weeks",
    highlights: [
      { label: "Total views", value: "2M+" },
      { label: "Engagement rate", value: "8.4%" },
      { label: "Follower growth", value: "+125%" },
      { label: "Content pieces", value: "24" },
    ],
    deliverables: [
      "Content strategy & calendar",
      "Product photography (12 shoots)",
      "Instagram Reels (15 videos)",
      "Brand guidelines for content",
      "Hashtag research & strategy",
      "Influencer collaboration framework",
    ],
    resources: [
      { label: "Instagram Profile", url: "#", icon: "website" },
      { label: "Content Guidelines", url: "#", icon: "figma" },
      { label: "Asset Library", url: "#", icon: "drive" },
    ],
    gallery: [
      "linear-gradient(135deg, oklch(0.4 0.12 320), oklch(0.3 0.08 340))",
      "linear-gradient(135deg, oklch(0.45 0.1 330), oklch(0.32 0.06 350))",
      "linear-gradient(135deg, oklch(0.38 0.14 310), oklch(0.28 0.1 330))",
    ],
  },
  {
    id: 3,
    title: "FinanceHub App",
    description: "Mobile-first web application for personal finance management",
    category: "Web",
    tags: ["Web App", "UI/UX", "Dashboard"],
    result: "MVP in 14 days",
    image: "linear-gradient(135deg, oklch(0.35 0.18 180), oklch(0.25 0.12 200))",
    summary: "FinanceHub needed to launch their MVP quickly to test market demand. We designed and built a mobile-first progressive web app that helps users track expenses, set budgets, and visualize their financial health. The app was delivered in record time without compromising on quality or user experience.",
    deliveryTime: "14 days",
    highlights: [
      { label: "Development time", value: "14 days" },
      { label: "User signups (week 1)", value: "1,200+" },
      { label: "Mobile performance", value: "95/100" },
      { label: "Features shipped", value: "18" },
    ],
    deliverables: [
      "UX research & wireframes",
      "UI design system & components",
      "Expense tracking dashboard",
      "Budget planning tools",
      "Data visualization charts",
      "Authentication & user profiles",
      "PWA setup & offline mode",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Recharts", "Supabase"],
    resources: [
      { label: "Live App", url: "#", icon: "website" },
      { label: "Figma Prototype", url: "#", icon: "figma" },
      { label: "Documentation", url: "#", icon: "drive" },
    ],
    gallery: [
      "linear-gradient(135deg, oklch(0.35 0.18 180), oklch(0.25 0.12 200))",
      "linear-gradient(135deg, oklch(0.3 0.2 190), oklch(0.22 0.14 210))",
      "linear-gradient(135deg, oklch(0.4 0.16 170), oklch(0.28 0.1 190))",
    ],
  },
  {
    id: 4,
    title: "Artisan Coffee Co.",
    description: "Brand identity, packaging, and e-commerce experience design",
    category: "Design",
    tags: ["Branding", "Packaging", "Shopify"],
    result: "+68% sales",
    image: "linear-gradient(135deg, oklch(0.45 0.1 60), oklch(0.35 0.08 80))",
    summary: "Artisan Coffee Co. wanted to differentiate themselves in the crowded specialty coffee market. We created a distinctive brand identity that celebrates their craft, designed premium packaging that tells their story, and built an e-commerce experience that converts browsers into loyal customers.",
    deliveryTime: "10 weeks",
    highlights: [
      { label: "Sales increase", value: "+68%" },
      { label: "Cart conversion", value: "4.2%" },
      { label: "Avg order value", value: "+32%" },
      { label: "Brand recall", value: "89%" },
    ],
    deliverables: [
      "Brand strategy & positioning",
      "Visual identity & logo system",
      "Packaging design (3 variants)",
      "Shopify store design & build",
      "Product photography direction",
      "Marketing collateral templates",
      "Social media brand kit",
    ],
    resources: [
      { label: "Online Store", url: "#", icon: "website" },
      { label: "Brand Guidelines", url: "#", icon: "figma" },
      { label: "Assets Package", url: "#", icon: "drive" },
    ],
    gallery: [
      "linear-gradient(135deg, oklch(0.45 0.1 60), oklch(0.35 0.08 80))",
      "linear-gradient(135deg, oklch(0.5 0.08 70), oklch(0.38 0.06 90))",
      "linear-gradient(135deg, oklch(0.42 0.12 50), oklch(0.32 0.1 70))",
    ],
  },
  {
    id: 5,
    title: "Wellness Studio",
    description: "Content series and social media presence for yoga & wellness brand",
    category: "Content",
    tags: ["Video", "Social", "Photography"],
    result: "50K followers",
    image: "linear-gradient(135deg, oklch(0.4 0.15 140), oklch(0.3 0.1 160))",
    summary: "Wellness Studio wanted to build an engaged community around mindful living and wellness practices. We created a multi-platform content strategy that included instructional videos, inspirational photography, and educational carousel posts that resonated with their audience and drove significant growth.",
    deliveryTime: "12 weeks",
    highlights: [
      { label: "Follower growth", value: "50K+" },
      { label: "Video completion rate", value: "68%" },
      { label: "Community engagement", value: "12.1%" },
      { label: "Class bookings", value: "+210%" },
    ],
    deliverables: [
      "Content strategy & pillars",
      "Video production (8 series)",
      "Photography sessions (6 shoots)",
      "Educational carousel posts (20)",
      "Story templates & highlights",
      "Community management guidelines",
      "Analytics & reporting dashboard",
    ],
    resources: [
      { label: "Instagram", url: "#", icon: "website" },
      { label: "Content Calendar", url: "#", icon: "figma" },
      { label: "Video Archive", url: "#", icon: "drive" },
    ],
    gallery: [
      "linear-gradient(135deg, oklch(0.4 0.15 140), oklch(0.3 0.1 160))",
      "linear-gradient(135deg, oklch(0.45 0.12 150), oklch(0.32 0.08 170))",
      "linear-gradient(135deg, oklch(0.38 0.18 130), oklch(0.28 0.12 150))",
    ],
  },
  {
    id: 6,
    title: "PropTech Platform",
    description: "Full-stack web platform for real estate marketplace",
    category: "Web",
    tags: ["Platform", "Web App", "UI/UX"],
    result: "+32% leads",
    image: "linear-gradient(135deg, oklch(0.35 0.2 260), oklch(0.28 0.15 240))",
    summary: "PropTech Platform needed a modern, scalable solution to connect property seekers with real estate agents. We built a comprehensive platform with advanced search, mapping integration, lead management, and a dashboard for agents to manage their listings and track performance.",
    deliveryTime: "16 weeks",
    highlights: [
      { label: "Lead increase", value: "+32%" },
      { label: "Listings posted", value: "2,400+" },
      { label: "Search accuracy", value: "94%" },
      { label: "Agent satisfaction", value: "4.8/5" },
    ],
    deliverables: [
      "Platform UX research & strategy",
      "Admin dashboard & agent portal",
      "Property search with filters & map",
      "Lead management system",
      "Analytics & reporting tools",
      "Mobile-responsive design",
      "API development & documentation",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Mapbox"],
    resources: [
      { label: "Live Platform", url: "#", icon: "website" },
      { label: "Design System", url: "#", icon: "figma" },
      { label: "API Documentation", url: "#", icon: "drive" },
    ],
    gallery: [
      "linear-gradient(135deg, oklch(0.35 0.2 260), oklch(0.28 0.15 240))",
      "linear-gradient(135deg, oklch(0.3 0.22 270), oklch(0.25 0.17 250))",
      "linear-gradient(135deg, oklch(0.4 0.18 250), oklch(0.3 0.13 230))",
    ],
  },
];

export function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleViewCase = (project: CaseStudy) => {
    setSelectedCase(project);
  };

  const handleCloseDialog = () => {
    setSelectedCase(null);
  };

  const handleNavigateCase = (direction: "prev" | "next") => {
    if (!selectedCase) return;
    
    const currentIndex = projects.findIndex((p) => p.id === selectedCase.id);
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % projects.length 
      : (currentIndex - 1 + projects.length) % projects.length;
    
    setSelectedCase(projects[newIndex]);
  };

  const getResourceIcon = (iconType: string) => {
    switch (iconType) {
      case "website":
        return <Globe className="h-4 w-4" />;
      case "figma":
        return <FigmaIcon className="h-4 w-4" />;
      case "github":
        return <Github className="h-4 w-4" />;
      case "drive":
        return <HardDrive className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <section id="work" ref={sectionRef} className="relative py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "mx-auto max-w-2xl text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm shadow">
            Our Work
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Selected <span className="gradient-text">projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of our recent work across content, design, and
            development.
          </p>
        </div>

        {/* Filter pills */}
        <div
          className={cn(
            "mt-12 flex flex-wrap justify-center gap-2 transition-all duration-700 delay-100",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]",
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]",
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{
                transitionDelay: isInView ? `${(index + 2) * 100}ms` : "0ms",
              }}
            >
              {/* Project image placeholder */}
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ background: project.image }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => handleViewCase(project)}
                    className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
                  >
                    View case
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="font-medium text-primary">
                    {project.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Details Dialog */}
      <Dialog
        open={!!selectedCase}
        onOpenChange={(open) => {
          if (!open) handleCloseDialog();
        }}
      >
        {selectedCase && (
          <DialogContent className="glass-card max-w-3xl max-h-[90vh] overflow-y-auto p-0 gap-0">
            {/* Header with navigation */}
            <DialogHeader className="sticky top-0 z-10 glass-card border-b border-border px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleNavigateCase("prev")}
                    className="h-8 w-8 rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleNavigateCase("next")}
                    className="h-8 w-8 rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="rounded-full">
                    {selectedCase.category}
                  </Badge>
                  {selectedCase.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                  {selectedCase.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {selectedCase.description}
                </DialogDescription>
              </div>
            </DialogHeader>

            {/* Content */}
            <div className="space-y-8 p-6">
              {/* Hero Gallery */}
              <div className="space-y-3">
                <div
                  className="aspect-video w-full rounded-xl"
                  style={{ background: selectedCase.image }}
                />
                <div className="grid grid-cols-2 gap-3">
                  {selectedCase.gallery.slice(1).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-video rounded-lg"
                      style={{ background: img }}
                    />
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Project Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedCase.summary}
                </p>
              </div>

              <Separator />

              {/* Highlights/Results */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Results & Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedCase.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border bg-secondary/50 p-4"
                    >
                      <p className="text-2xl font-bold text-primary">
                        {highlight.value}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {highlight.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Deliverables */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Scope & Deliverables
                </h3>
                <ul className="space-y-2">
                  {selectedCase.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack (Web only) */}
              {selectedCase.techStack && (
                <>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <Separator />

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Resources & Links
                </h3>
                <div className="grid gap-3">
                  {selectedCase.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-border bg-secondary/50 p-4 transition-colors hover:border-primary/50 hover:bg-secondary/80"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {getResourceIcon(resource.icon)}
                        </div>
                        <span className="font-medium text-foreground">
                          {resource.label}
                        </span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>

              <Separator />

              {/* CTA */}
              <div className="space-y-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Like what you see?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {"Let's create something similar for your brand. Share your project details and we'll get back to you within 24 hours."}
                  </p>
                </div>
                <Button
                  onClick={() => {
                    handleCloseDialog();
                    document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow"
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
