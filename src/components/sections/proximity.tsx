"use client";
import { motion } from "motion/react";
import { Radar } from "@/components/ui/radar";

export function Proximity() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#121214] to-[#0A0A0B] border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-medium text-indigo-400 mb-6">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Technologie Vortex Share
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Partagez à la vitesse <br />
            <span className="text-indigo-400">du son.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Envoyez des fichiers à quelqu&apos;un à côté de vous via Bluetooth et
            WiFi Direct. Pas de limite de taille. Transfert chiffré. Fonctionne
            même sans réseau.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                ),
                title: "Zéro configuration",
                desc: "Ouvrez Vortex sur deux appareils — c'est tout.",
              },
              {
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                ),
                title: "Sécurisé par défaut",
                desc: "Chiffrement de bout en bout lors du transfert.",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="shrink-0 mt-0.5 rounded-lg bg-indigo-500/10 p-2 text-indigo-400 border border-indigo-500/20">
                  {feature.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {feature.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {feature.desc}
                  </div>
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
          className="flex items-center justify-center relative h-[400px]"
        >
          <div className="relative">
            <Radar className="w-80 h-80 md:w-96 md:h-96" />

            {/* Device labels */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute top-[20%] right-[-10%] rounded-lg border border-white/10 bg-black/60 backdrop-blur-md px-3 py-2 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-foreground font-medium">
                  MacBook de Leila
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-[20%] left-[-10%] rounded-lg border border-white/10 bg-black/60 backdrop-blur-md px-3 py-2 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500 overflow-hidden" />
                <div className="flex flex-col">
                  <span className="text-xs text-foreground font-medium">
                    iPhone 15 Pro
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Envoi en cours... (84%)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
