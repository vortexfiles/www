"use client";
import { motion } from "motion/react";
import React from "react";

const testimonials = [
  {
    quote:
      "Je ne cherche plus mes fichiers. Vortex a remplacé mes 3 apps de cloud en une seule. Le partage proximité en amphi, c'est magique.",
    name: "Sami K.",
    role: "Étudiant en ingénierie",
    avatar: "SK",
  },
  {
    quote:
      "Mes rushes 4K sont syncs sur le NAS automatiquement. Plus de transferts manuels, plus de fichiers perdus. Le game changer pour les créateurs.",
    name: "Leila M.",
    role: "Créatrice de contenu",
    avatar: "LM",
  },
  {
    quote:
      "On a enfin une visibilité sur où sont les fichiers de l'équipe. Le chiffrement E2E nous rassure pour les documents clients.",
    name: "Karim B.",
    role: "Responsable IT, PME",
    avatar: "KB",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 px-6 bg-[#020202] border-t border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#020202] to-[#020202]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium mb-3">Témoignages</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Ils utilisent Vortex.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors"
            >
              <div className="mb-6 flex gap-1">
                 {[1,2,3,4,5].map(s => (
                   <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                 ))}
              </div>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
