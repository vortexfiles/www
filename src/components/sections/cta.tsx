"use client";
import { motion } from "motion/react";
import { Magnet } from "@/components/ui/magnet";

export function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Pret a tout centraliser ?
        </h2>
        <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
          Rejoignez des milliers d&apos;utilisateurs qui ont simplifie leur gestion de fichiers.
          Gratuit pour commencer, puissant pour grandir.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Magnet strength={0.15}>
            <a
              href="#"
              className="group rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-[0_0_30px_var(--color-accent-glow)] hover:shadow-[0_0_50px_var(--color-accent-glow)]"
            >
              Telecharger gratuitement
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </Magnet>
        </div>

        <p className="mt-6 text-xs text-muted">
          Disponible sur iOS, Android et Desktop. Aucune carte requise.
        </p>
      </motion.div>
    </section>
  );
}
