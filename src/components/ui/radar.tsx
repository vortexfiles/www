"use client";
import { cn } from "@/lib/utils";

export function Radar({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-64 h-64", className)}>
      {/* Concentric rings */}
      {[1, 2, 3, 4].map((ring) => (
        <div
          key={ring}
          className="absolute inset-0 rounded-full border border-accent/10"
          style={{
            width: `${ring * 25}%`,
            height: `${ring * 25}%`,
            top: `${50 - (ring * 25) / 2}%`,
            left: `${50 - (ring * 25) / 2}%`,
          }}
        />
      ))}

      {/* Radar sweep */}
      <div className="absolute inset-0 animate-radar">
        <div
          className="absolute top-1/2 left-1/2 w-1/2 h-[2px] origin-left"
          style={{
            background: "linear-gradient(90deg, var(--color-accent), transparent)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-1/2 h-1/2 origin-top-left"
          style={{
            background: "conic-gradient(from 0deg, var(--color-accent-glow) 0deg, transparent 60deg)",
          }}
        />
      </div>

      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />

      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 animate-pulse-ring"
          style={{
            width: "12px",
            height: "12px",
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {/* Device dots */}
      <div className="absolute top-[25%] left-[65%] w-2 h-2 rounded-full bg-success shadow-[0_0_8px_var(--color-success)] animate-float" />
      <div
        className="absolute top-[60%] left-[20%] w-2 h-2 rounded-full bg-info shadow-[0_0_8px_var(--color-info)] animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[40%] left-[75%] w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
