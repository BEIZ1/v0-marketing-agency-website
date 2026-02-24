"use client";

import { useEffect, useState, type RefObject } from "react";

interface UseAnimatedCounterOptions {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function useAnimatedCounter(
  ref: RefObject<Element | null>,
  options: UseAnimatedCounterOptions
) {
  const { end, duration = 2000, prefix = "", suffix = "", decimals = 0 } = options;
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(element);

          if (prefersReducedMotion) {
            setDisplay(`${prefix}${end.toFixed(decimals)}${suffix}`);
            return;
          }

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * end;

            setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, end, duration, prefix, suffix, decimals, hasAnimated]);

  return display;
}
