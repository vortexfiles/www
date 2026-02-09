"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  icon,
  header,
  span,
}: {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  header?: React.ReactNode;
  span?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6",
        "hover:border-accent/40 transition-all duration-300",
        "hover:shadow-[0_0_40px_rgba(108,92,231,0.08)]",
        span === 2 && "md:col-span-2",
        className
      )}
    >
      {header && (
        <div className="mb-4 rounded-xl overflow-hidden">{header}</div>
      )}
      <div className="flex items-start gap-3">
        {icon && (
          <div className="shrink-0 rounded-lg bg-accent/10 p-2 text-accent">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-1">
            {title}
          </h3>
          <p className="text-muted text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
