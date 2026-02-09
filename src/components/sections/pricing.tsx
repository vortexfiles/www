"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Magnet } from "@/components/ui/magnet";

const plans = [
  {
    name: "Gratuit",
    price: "0",
    period: "pour toujours",
    description: "Pour commencer et explorer.",
    features: [
      "2 espaces connectes",
      "Sync de base (1 regle)",
      "Partage proximite illimite",
      "5 Go de cache local",
      "Recherche globale",
    ],
    cta: "Telecharger",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "4,99",
    period: "/ mois",
    description: "Pour les utilisateurs exigeants.",
    features: [
      "Espaces illimites",
      "Regles de sync avancees",
      "Chiffrement E2E inclus",
      "Cache local illimite",
      "Support prioritaire",
      "Historique des versions",
    ],
    cta: "Commencer l'essai gratuit",
    highlighted: true,
  },
  {
    name: "Equipe",
    price: "9,99",
    period: "/ mois / utilisateur",
    description: "Pour les equipes et PME.",
    features: [
      "Tout le plan Pro",
      "Dashboard admin",
      "Permissions par equipe",
      "Audit trail",
      "SSO & SAML",
      "Support dedie",
    ],
    cta: "Contacter les ventes",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-accent-glow)_0%,transparent_50%)] opacity-10" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium mb-3">Tarifs</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Simple et transparent.
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Pas de surprise. 14 jours d&apos;essai gratuit sur le plan Pro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn(
                "relative rounded-2xl border p-8 transition-all duration-300",
                plan.highlighted
                  ? "border-accent bg-card shadow-[0_0_60px_rgba(108,92,231,0.12)] scale-[1.02]"
                  : "border-border bg-card hover:border-border/80"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-xs font-medium text-white">
                    Recommande
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price === "0" ? "Gratuit" : `${plan.price} EUR`}
                </span>
                {plan.price !== "0" && (
                  <span className="text-sm text-muted ml-1">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={plan.highlighted ? "text-accent" : "text-success"}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Magnet strength={0.1}>
                <button
                  className={cn(
                    "w-full rounded-full py-3 text-sm font-medium transition-all duration-200",
                    plan.highlighted
                      ? "bg-accent text-white hover:bg-accent-hover shadow-[0_0_20px_var(--color-accent-glow)]"
                      : "border border-border text-foreground hover:border-foreground/20 hover:bg-card-hover"
                  )}
                >
                  {plan.cta}
                </button>
              </Magnet>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
