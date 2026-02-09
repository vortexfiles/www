"use client";
import { motion } from "motion/react";
import { Radar } from "@/components/ui/radar";

export function Proximity() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-medium mb-3">Partage proximite</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Partagez.
            <br />
            <span className="text-muted">Sans internet.</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-8">
            Envoyez des fichiers a quelqu&apos;un a cote de vous via Bluetooth et WiFi Direct.
            Pas de limite de taille. Transfert chiffre. Fonctionne meme sans reseau.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                ),
                title: "Zero configuration",
                desc: "Ouvrez Vortex sur deux appareils — c'est tout.",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                ),
                title: "Chiffre de bout en bout",
                desc: "Meme le partage local est securise par defaut.",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                ),
                title: "Reprise automatique",
                desc: "Transfert interrompu ? Il reprend tout seul.",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="shrink-0 mt-0.5 rounded-lg bg-accent/10 p-2 text-accent">
                  {feature.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{feature.title}</div>
                  <div className="text-sm text-muted">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Radar visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <Radar className="w-80 h-80" />

            {/* Device labels */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute top-[20%] right-[-10%] rounded-lg border border-border bg-card px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                <span className="text-xs text-foreground">MacBook de Leila</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
              className="absolute bottom-[25%] left-[-15%] rounded-lg border border-border bg-card px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-info" />
                <span className="text-xs text-foreground">iPhone de Sami</span>
              </div>
            </motion.div>

            {/* Transfer animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6 }}
              className="absolute top-[35%] right-[5%] rounded-lg border border-accent/30 bg-card px-3 py-2 shadow-[0_0_20px_var(--color-accent-glow)]"
            >
              <div className="text-[10px] text-muted mb-1">Envoi en cours</div>
              <div className="text-xs font-medium text-foreground">Rapport.pdf</div>
              <div className="mt-1.5 h-1 rounded-full bg-background overflow-hidden w-24">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "73%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
              <div className="text-[9px] text-muted mt-1">12 Mo/s &middot; ~2s restantes</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
