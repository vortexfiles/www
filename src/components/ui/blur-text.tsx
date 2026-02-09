"use client";
import { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "characters";
}

export function BlurText({
  text,
  delay = 80,
  className,
  animateBy = "words",
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const elements = useMemo(() => {
    if (animateBy === "characters") return text.split("");
    return text.split(" ");
  }, [text, animateBy]);

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(12px)", opacity: 0, y: 10 }}
          animate={
            inView
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : { filter: "blur(12px)", opacity: 0, y: 10 }
          }
          transition={{
            duration: 0.4,
            delay: i * (delay / 1000),
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {el}
          {animateBy === "words" && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </span>
  );
}
