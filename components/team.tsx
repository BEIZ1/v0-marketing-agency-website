"use client";

import { useRef } from "react";
import { Linkedin, Twitter, Dribbble } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { cn } from "@/lib/utils";

function TeamStat({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const display = useAnimatedCounter(ref, { end, suffix, duration: 1800 });

  return (
    <div ref={ref}>
      <div className="text-3xl font-bold text-foreground">{display}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const teamMembers = [
  {
    name: "Alex Mitchell",
    role: "Creative Director",
    expertise: "10+ years crafting award-winning brand experiences",
    avatar: "AM",
    color: "from-primary/30 to-primary/10",
    socials: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    expertise: "Full-stack architect specializing in scalable web solutions",
    avatar: "SC",
    color: "from-chart-2/30 to-chart-2/10",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Marcus Rivera",
    role: "Content Strategist",
    expertise: "Storytelling expert with 8+ years in video production",
    avatar: "MR",
    color: "from-chart-3/30 to-chart-3/10",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="team" ref={sectionRef} className="relative py-24 lg:py-32">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -left-4 top-1/4 h-2 w-2 animate-pulse rounded-full bg-primary" />
        <div className="absolute left-1/4 top-1/3 h-1.5 w-1.5 animate-pulse rounded-full bg-primary/70 delay-100" />
        <div className="absolute right-1/3 top-1/4 h-2 w-2 animate-pulse rounded-full bg-primary/60 delay-200" />
        <div className="absolute right-1/4 bottom-1/3 h-1.5 w-1.5 animate-pulse rounded-full bg-primary/80 delay-300" />
        <div className="absolute left-1/3 bottom-1/4 h-2 w-2 animate-pulse rounded-full bg-primary/50 delay-500" />
      </div>

      {/* Background glow */}
      <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column - Studio story */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
          >
            <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
              About the Team
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              A small team with{" "}
              <span className="gradient-text">big ambitions</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Founded in 2020, BEIZ Studio was born from a shared passion for
              exceptional digital craft. We believe in the power of thoughtful
              design and strategic content to transform brands.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Our diverse team combines deep expertise in content production,
              brand design, and web development. We work as true partners with
              our clients, not just service providers.
            </p>
            <div className="mt-8 flex items-center gap-8">
              <TeamStat end={50} suffix="+" label="Projects completed" />
              <div className="h-12 w-px bg-border" />
              <TeamStat end={12} label="Countries served" />
              <div className="h-12 w-px bg-border" />
              <TeamStat end={3} label="Years in business" />
            </div>
          </div>

          {/* Right column - Team cards */}
          <div className="space-y-4 lg:pt-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={cn(
                  "group glass-card rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{
                  transitionDelay: isInView ? `${(index + 1) * 150}ms` : "0ms",
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br text-lg font-semibold text-foreground",
                      member.color
                    )}
                  >
                    {member.avatar}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary">{member.role}</p>
                      </div>

                      {/* Socials */}
                      <div className="flex items-center gap-1">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            className="p-2 text-muted-foreground transition-colors hover:text-primary"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            className="p-2 text-muted-foreground transition-colors hover:text-primary"
                            aria-label={`${member.name}'s Twitter`}
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.socials.dribbble && (
                          <a
                            href={member.socials.dribbble}
                            className="p-2 text-muted-foreground transition-colors hover:text-primary"
                            aria-label={`${member.name}'s Dribbble`}
                          >
                            <Dribbble className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
