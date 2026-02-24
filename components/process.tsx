"use client";

import { useRef } from "react";
import { Search, FileText, Rocket, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your brand, goals, and audience to understand what makes you unique.",
    timeline: "1-2 days",
    deliverables: "Discovery call, Research doc",
  },
  {
    icon: FileText,
    number: "02",
    title: "Strategy & Brief",
    description:
      "We craft a detailed roadmap with clear milestones, timelines, and measurable objectives.",
    timeline: "2-3 days",
    deliverables: "Strategy deck, Project brief",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Production",
    description:
      "Our team brings the vision to life with iterative feedback loops and transparent communication.",
    timeline: "1-4 weeks",
    deliverables: "Design files, Code, Content",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Launch & Optimize",
    description:
      "We launch with precision and continue to optimize based on real performance data.",
    timeline: "Ongoing",
    deliverables: "Analytics, Optimization",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05 });

  // Individual step refs for progressive reveal
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const stepInView = [
    useInView(stepRefs[0], { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }),
    useInView(stepRefs[1], { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }),
    useInView(stepRefs[2], { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }),
    useInView(stepRefs[3], { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }),
  ];

  return (
    <section id="process" ref={sectionRef} className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "mx-auto max-w-2xl text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            Our Process
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How we <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A proven methodology that delivers results on time, every time.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mt-16">
          {/* Timeline line - desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">
            <div
              className={cn(
                "h-full w-full bg-gradient-to-b from-primary via-primary/50 to-transparent transition-all duration-1000",
                isInView ? "scale-y-100" : "scale-y-0"
              )}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={stepRefs[index]}
                className={cn(
                  "relative transition-all duration-700 ease-out",
                  stepInView[index]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                )}
              >
                <div
                  className={cn(
                    "flex flex-col gap-8 lg:flex-row lg:items-center",
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}
                >
                  {/* Card */}
                  <div
                    className={cn(
                      "flex-1",
                      index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                    )}
                  >
                    <div className="group glass-card rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] lg:p-8">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                          <step.icon className="h-6 w-6" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold text-primary">
                              {step.number}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                          <p className="mt-2 text-muted-foreground">
                            {step.description}
                          </p>

                          {/* Meta */}
                          <div className="mt-4 flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span className="text-sm text-muted-foreground">
                                <span className="text-foreground">
                                  Timeline:
                                </span>{" "}
                                {step.timeline}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span className="text-sm text-muted-foreground">
                                <span className="text-foreground">
                                  Deliverables:
                                </span>{" "}
                                {step.deliverables}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - desktop */}
                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                    <div
                      className={cn(
                        "relative flex h-4 w-4 items-center justify-center transition-all duration-500",
                        stepInView[index] ? "scale-100" : "scale-0"
                      )}
                    >
                      <span className="absolute h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                      <span className="relative h-3 w-3 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
