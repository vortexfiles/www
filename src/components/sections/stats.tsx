"use client";
import { motion } from "motion/react";
import { CountUp } from "@/components/ui/count-up";

const stats = [
  { value: 450000, suffix: "+", label: "Fichiers geres" },
  { value: 12000, suffix: "+", label: "Utilisateurs actifs" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime" },
  { value: 30, suffix: "+", label: "Plugins disponibles" },
];

export function Stats() {
  return (
    <section className="relative py-20 px-6 border-t border-b border-border/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <CountUp
              end={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals ?? 0}
              duration={2.5}
              className="text-3xl md:text-4xl font-bold text-foreground"
            />
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
