"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface RadarProps {
  className?: string;
}

export function Radar({ className }: RadarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = 0;
    let animId: number;

    const dots = [
      { r: 0.35, theta: 0.9 },
      { r: 0.65, theta: 2.3 },
      { r: 0.5, theta: 4.1 },
      { r: 0.8, theta: 5.5 },
    ];

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(W, H) / 2 - 8;

      ctx.clearRect(0, 0, W, H);

      // Rings
      [0.25, 0.5, 0.75, 1].forEach((f) => {
        ctx.beginPath();
        ctx.arc(cx, cy, R * f, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(99,102,241,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Cross lines
      ctx.strokeStyle = "rgba(99,102,241,0.12)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - R, cy);
      ctx.lineTo(cx + R, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - R);
      ctx.lineTo(cx, cy + R);
      ctx.stroke();

      // Sweep gradient
      // Draw sweep as filled arc
      const grd = ctx.createLinearGradient(cx, cy, cx + R, cy);
      grd.addColorStop(0, "rgba(99,102,241,0.35)");
      grd.addColorStop(1, "rgba(99,102,241,0)");

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, R, 0, Math.PI * 0.5);
      ctx.closePath();
      ctx.fillStyle = "rgba(99,102,241,0.12)";
      ctx.fill();
      // Sweep line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(R, 0);
      ctx.strokeStyle = "rgba(99,102,241,0.9)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      // Dots — glow when sweep passes over them
      dots.forEach((d) => {
        const px = cx + Math.cos(d.theta) * d.r * R;
        const py = cy + Math.sin(d.theta) * d.r * R;

        // Check if sweep recently passed
        const normalizedAngle = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const dotAngle = (d.theta + Math.PI * 2) % (Math.PI * 2);
        const diff = (normalizedAngle - dotAngle + Math.PI * 2) % (Math.PI * 2);
        const glow = diff < 0.4 ? 1 - diff / 0.4 : 0;

        // Outer glow
        const g = ctx.createRadialGradient(px, py, 0, px, py, 12 + glow * 8);
        g.addColorStop(0, `rgba(99,102,241,${0.6 + glow * 0.4})`);
        g.addColorStop(1, "rgba(99,102,241,0)");
        ctx.beginPath();
        ctx.arc(px, py, 12 + glow * 8, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,190,255,${0.8 + glow * 0.2})`;
        ctx.fill();
      });

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(99,102,241,0.9)";
      ctx.fill();

      angle += 0.018;
      animId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "transparent" }}
      />
    </div>
  );
}
