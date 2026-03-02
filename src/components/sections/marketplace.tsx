"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const plugins = [
  {
    name: "Chiffrement E2E",
    desc: "Vos fichiers, illisibles par quiconque d'autre",
    price: "4,99 EUR",
    badge: "Populaire",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    color: "from-indigo-500 to-purple-400",
  },
  {
    name: "OCR Automatique",
    desc: "Indexez le texte de vos images et PDFs scannés",
    price: "2,99 EUR",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 7V4h3" />
        <path d="M9 15h6" />
        <path d="M20 7V4h-3" />
        <path d="M20 17v3h-3" />
        <path d="M4 17v3h3" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Video Transcode",
    desc: "Optimisez vos vidéos pour le streaming web",
    price: "Inclus",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
    color: "from-orange-500 to-red-400",
  },
  {
    name: "Git Sync",
    desc: "Sauvegardez vos repos directement dans Vortex",
    price: "1,99 EUR",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M5 5v14" />
        <path d="M19 5v14" />
      </svg>
    ),
    color: "from-neutral-500 to-neutral-400",
  },
];

export function Marketplace() {
  return (
    <section id="marketplace" className="relative py-24 px-6 bg-[#020202] border-t border-white/5">
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium mb-3">
            Marketplace
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Étendez Vortex
            <br />
            <span className="text-neutral-500">à votre façon.</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            30+ plugins pour aller plus loin. Productivité, sécurité, média,
            intégrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plugins.map((plugin, i) => (
            <motion.div
              key={plugin.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                  plugin.color
                )}
              />
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-white/5 text-white">
                  {plugin.icon}
                </div>
                {plugin.price && (
                  <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-neutral-300">
                    {plugin.price}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {plugin.name}
              </h3>
              <p className="text-sm text-neutral-400">{plugin.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
