"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "motion/react";

function SearchPreview() {
  return (
    <div className="rounded-xl bg-background/50 border border-border p-3">
      <div className="flex items-center gap-2 mb-3 text-xs text-muted">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        rapport-q4
      </div>
      {["Google Drive", "NAS", "Dropbox"].map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="flex items-center justify-between py-1.5 text-xs"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center text-[8px] font-bold text-accent">
              PDF
            </div>
            <span className="text-foreground">rapport-q4-final.pdf</span>
          </div>
          <span className="text-muted">{src}</span>
        </motion.div>
      ))}
    </div>
  );
}

function SyncPreview() {
  return (
    <div className="rounded-xl bg-background/50 border border-border p-3">
      <div className="flex items-center gap-3 text-xs">
        <div className="rounded-lg bg-info/10 text-info p-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/></svg>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <div className="rounded-lg bg-success/10 text-success p-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/></svg>
        </div>
      </div>
      <div className="mt-2 text-[11px] text-muted">
        Chaque nouveau <span className="text-accent">.pdf</span> dans Drive/Cours &rarr; NAS/Archives
      </div>
      <div className="mt-2 flex items-center gap-1.5">
        <div className="h-1 w-1 rounded-full bg-success" />
        <span className="text-[10px] text-success">Active &middot; 142 fichiers synchronises</span>
      </div>
    </div>
  );
}

function OfflinePreview() {
  return (
    <div className="rounded-xl bg-background/50 border border-border p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-1.5 w-1.5 rounded-full bg-warning animate-pulse" />
        <span className="text-[11px] text-warning">Hors ligne</span>
      </div>
      {["Projet-client.fig", "Brief-campagne.pdf", "Moodboard/"].map((f, i) => (
        <div key={f} className="flex items-center justify-between py-1 text-xs">
          <span className="text-foreground">{f}</span>
          <span className="text-success text-[10px]">
            {i < 2 ? "Disponible" : "Cache"}
          </span>
        </div>
      ))}
      <div className="mt-2 text-[10px] text-muted">3 actions en attente de connexion</div>
    </div>
  );
}

function SecurityPreview() {
  return (
    <div className="rounded-xl bg-background/50 border border-border p-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <div>
          <div className="text-xs font-medium text-foreground">Chiffrement E2E</div>
          <div className="text-[10px] text-success">Actif sur 24 fichiers</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["AES-256", "Zero-knowledge", "RGPD"].map((tag) => (
          <div key={tag} className="rounded-md bg-accent/5 py-1 text-center text-[9px] text-accent">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium mb-3">Fonctionnalites</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Tout ce dont vous avez besoin.
            <br />
            <span className="text-muted">Rien de superflu.</span>
          </h2>
        </motion.div>

        <BentoGrid>
          <BentoGridItem
            title="Recherche universelle"
            description="Trouvez n'importe quel fichier dans n'importe quel espace en une seule recherche. Resultats instantanes, filtrables par type, date ou source."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            }
            header={<SearchPreview />}
            span={2}
          />
          <BentoGridItem
            title="Sync intelligente"
            description="Creez des regles si/alors pour automatiser vos transferts. Pas de code, pas de jargon."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
            }
            header={<SyncPreview />}
          />
          <BentoGridItem
            title="Offline-first"
            description="Vortex reste fonctionnel sans internet. Vos fichiers caches sont accessibles, les actions s'executent a la reconnexion."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            }
            header={<OfflinePreview />}
          />
          <BentoGridItem
            title="Securite transparente"
            description="Chiffrement E2E optionnel, indicateurs de statut clairs, zero-knowledge. Vos fichiers, vos cles."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            }
            header={<SecurityPreview />}
            span={2}
          />
        </BentoGrid>
      </div>
    </section>
  );
}
