"use client";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
  borderColor?: string;
  as?: React.ElementType;
  onClick?: () => void;
}

export function MovingBorder({
  children,
  className,
  containerClassName,
  duration = 3000,
  borderColor = "var(--color-accent)",
  as: Component = "button",
  onClick,
}: MovingBorderProps) {
  return (
    <Component
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-accent/50",
        containerClassName
      )}
      onClick={onClick}
    >
      <span
        className="absolute inset-[-1000%] animate-shimmer"
        style={{
          backgroundImage: `conic-gradient(from 0deg, transparent 0%, ${borderColor} 20%, transparent 40%)`,
          backgroundSize: "200% 200%",
        }}
      />
      <span
        className={cn(
          "inline-flex h-full w-full items-center justify-center rounded-full bg-background px-6 text-sm font-medium text-foreground backdrop-blur-3xl gap-2",
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
}
