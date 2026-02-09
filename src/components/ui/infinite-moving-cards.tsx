"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { icon: React.ReactNode; name: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      const dirVal = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", dirVal);

      const speedVal =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", speedVal);

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: start
            ? `scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite`
            : "none",
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-3 shrink-0"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm font-medium text-foreground whitespace-nowrap">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
      `}</style>
    </div>
  );
}
