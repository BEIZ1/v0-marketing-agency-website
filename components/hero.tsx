"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setIsHovering(true));
      container.addEventListener("mouseleave", () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", () => setIsHovering(true));
        container.removeEventListener("mouseleave", () => setIsHovering(false));
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20"
    >
      {/* Cursor spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, oklch(0.65 0.24 260 / 0.08), transparent 40%)`,
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">
              Available for Q1 2026 projects
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-in animation-delay-100 max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-foreground">We craft </span>
            <span className="gradient-text">digital experiences</span>
            <br />
            <span className="text-foreground">that </span>
            <span className="relative inline-block">
              <span className="gradient-text">drive results</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.5C47.6667 2.16667 141.4 -2.3 199 5.5"
                  stroke="url(#paint0_linear)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="1"
                    y1="4"
                    x2="199"
                    y2="4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="oklch(0.75 0.2 260)" />
                    <stop offset="1" stopColor="oklch(0.65 0.25 280)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in animation-delay-200 mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Content production, design, and web development — delivered with{" "}
            <span className="text-foreground font-medium">speed</span>,{" "}
            <span className="text-foreground font-medium">quality</span>, and{" "}
            <span className="text-foreground font-medium">measurable outcomes</span>.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in animation-delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <Button
              asChild
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 glow px-8"
            >
              <a href="#brief">
                Request a Brief
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground px-8"
            >
              <a href="#work">
                <Play className="mr-2 h-4 w-4" />
                See Work
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in animation-delay-400 mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-16">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "3x", label: "Average ROI" },
              { value: "<48h", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          
        </div>
      </div>
    </section>
  );
}
