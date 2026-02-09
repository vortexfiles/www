"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const plugins = [
  {
    name: "Chiffrement E2E",
    desc: "Vos fichiers, illisibles par quiconque d'autre",
    price: "4,99 EUR",
    badge: "Populaire",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
    color: "from-accent to-purple-400",
    installs: "12.4k",
    rating: "4.9",
  },
  {
    name: "Regles Pro",
    desc: "Conditions combinees, horaires, filtres regex",
    price: "3,99 EUR",
    badge: "Nouveau",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
    ),
    color: "from-info to-blue-400",
    installs: "8.1k",
    rating: "4.8",
  },
  {
    name: "OCR & Recherche",
    desc: "Cherchez du texte dans vos photos et scans",
    price: "3,99 EUR",
    badge: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"/><path d="M12 17h.01"/></svg>
    ),
    color: "from-warning to-orange-400",
    installs: "5.6k",
    rating: "4.7",
  },
  {
    name: "Historique & Versions",
    desc: "Revenez a n'importe quelle version d'un fichier",
    price: "2,99 EUR",
    badge: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    color: "from-success to-emerald-400",
    installs: "3.2k",
    rating: "4.6",
  },
];

export function Marketplace() {
  return (
    <section id="marketplace" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium mb-3">Marketplace</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Etendez Vortex
            <br />
            <span className="text-muted">a votre facon.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            30+ plugins pour aller plus loin. Productivite, securite, media, integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plugins.map((plugin, i) => (
            <motion.div
              key={plugin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(108,92,231,0.08)] cursor-pointer"
            >
              {/* Badge */}
              {plugin.badge && (
                <div className="absolute top-4 right-4">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[10px] font-medium",
                      plugin.badge === "Populaire"
                        ? "bg-accent/10 text-accent"
                        : "bg-success/10 text-success"
                    )}
                  >
                    {plugin.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br",
                  plugin.color
                )}
                style={{ color: "white" }}
              >
                {plugin.icon}
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-foreground mb-1">
                {plugin.name}
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">
                {plugin.desc}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-3 mb-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-warning"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  {plugin.rating}
                </span>
                <span>{plugin.installs} installs</span>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">
                  {plugin.price}
                </span>
                <span className="text-xs text-accent group-hover:underline">
                  Installer &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="#"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Voir tous les plugins &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
