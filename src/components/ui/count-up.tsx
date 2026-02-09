"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 2,
  decimals = 0,
  suffix = "",
  prefix = "",
  separator = ",",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = Date.now();
    const durationMs = duration * 1000;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) requestAnimationFrame(tick);
      else setCount(end);
    };

    requestAnimationFrame(tick);
  }, [started, end, duration]);

  const formatted = `${prefix}${count
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator)}${suffix}`;

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {formatted}
    </span>
  );
}
