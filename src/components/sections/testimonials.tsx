"use client";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Je ne cherche plus mes fichiers. Vortex a remplace mes 3 apps de cloud en une seule. Le partage proximite en amphi, c'est magique.",
    name: "Sami K.",
    role: "Etudiant en ingenierie",
    avatar: "S",
  },
  {
    quote:
      "Mes rushes 4K sont syncs sur le NAS automatiquement. Plus de transferts manuels, plus de fichiers perdus. Le game changer pour les createurs.",
    name: "Leila M.",
    role: "Creatrice de contenu",
    avatar: "L",
  },
  {
    quote:
      "On a enfin une visibilite sur ou sont les fichiers de l'equipe. Le chiffrement E2E nous rassure pour les documents clients.",
    name: "Karim B.",
    role: "Responsable IT, PME",
    avatar: "K",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium mb-3">Temoignages</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
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
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6 hover:border-accent/20 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-warning"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-muted leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center text-xs font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
