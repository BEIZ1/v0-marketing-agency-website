"use client";

import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function DynamicBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use dark mode as default for server render to prevent hydration mismatch
  const displayTheme = mounted ? theme : "dark";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-700",
          displayTheme === "dark"
            ? "bg-gradient-to-br from-[#0a0a12] via-[#0f0f1a] to-[#0a0a12]"
            : "bg-gradient-to-br from-[#f8f9fc] via-[#f0f1f5] to-[#f8f9fc]"
        )}
      />

      {/* Animated blob 1 - Top left */}
      <div
        className={cn(
          "absolute -top-1/4 -left-1/4 h-[60%] w-[60%] rounded-full blur-[120px] animate-blob",
          displayTheme === "dark"
            ? "bg-[oklch(0.35_0.15_260/0.4)]"
            : "bg-[oklch(0.75_0.08_260/0.3)]"
        )}
      />

      {/* Animated blob 2 - Top right */}
      <div
        className={cn(
          "absolute -top-1/4 -right-1/4 h-[50%] w-[50%] rounded-full blur-[100px] animate-blob animation-delay-2000",
          displayTheme === "dark"
            ? "bg-[oklch(0.30_0.12_280/0.35)]"
            : "bg-[oklch(0.80_0.06_280/0.25)]"
        )}
      />

      {/* Animated blob 3 - Bottom center */}
      <div
        className={cn(
          "absolute -bottom-1/4 left-1/4 h-[55%] w-[55%] rounded-full blur-[110px] animate-blob animation-delay-4000",
          displayTheme === "dark"
            ? "bg-[oklch(0.28_0.14_240/0.3)]"
            : "bg-[oklch(0.82_0.05_240/0.2)]"
        )}
      />

      {/* Animated blob 4 - Center accent */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40%] w-[40%] rounded-full blur-[150px] animate-blob-slow",
          displayTheme === "dark"
            ? "bg-[oklch(0.40_0.20_260/0.15)]"
            : "bg-[oklch(0.70_0.10_260/0.1)]"
        )}
      />

      {/* Vignette overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-700",
          displayTheme === "dark"
            ? "bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,18,0.5)_70%,rgba(10,10,18,0.8)_100%)]"
            : "bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,249,252,0.3)_70%,rgba(248,249,252,0.5)_100%)]"
        )}
      />

      {/* Grain overlay */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-700",
          displayTheme === "dark" ? "opacity-[0.03]" : "opacity-[0.02]"
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
