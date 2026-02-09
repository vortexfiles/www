"use client";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { BlurText } from "@/components/ui/blur-text";
import { MovingBorder } from "@/components/ui/moving-border";
import { Magnet } from "@/components/ui/magnet";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(108, 92, 231, 0.15)" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow)_0%,transparent_70%)] opacity-20" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex"
        >
          <MovingBorder
            as="div"
            className="!px-4 !py-1.5 !text-xs !text-muted"
            containerClassName="!h-auto"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Beta ouverte — Gratuit pendant le lancement
          </MovingBorder>
        </motion.div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
          <BlurText
            text="Tous vos fichiers."
            delay={60}
            className="justify-center"
          />
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-hover to-info bg-clip-text text-transparent">
            <BlurText
              text="Un seul endroit."
              delay={60}
              className="justify-center"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Clouds, serveurs, NAS — centralises, synchronises et partages.
          <br className="hidden sm:block" />
          Meme sans internet.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnet strength={0.15}>
            <a
              href="#pricing"
              className="group relative rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-[0_0_30px_var(--color-accent-glow)] hover:shadow-[0_0_50px_var(--color-accent-glow)]"
            >
              Telecharger gratuitement
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </Magnet>
          <a
            href="#features"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-200"
          >
            Voir les fonctionnalites
          </a>
        </motion.div>

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6 text-muted"
        >
          <span className="flex items-center gap-1.5 text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            iOS
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341a.5.5 0 0 0-.187.7l1.5 2.6a.5.5 0 0 0 .887-.46l-1.5-2.6a.5.5 0 0 0-.7-.24zm-11.046 0a.5.5 0 0 0-.7.24l-1.5 2.6a.5.5 0 0 0 .887.46l1.5-2.6a.5.5 0 0 0-.187-.7zM12 2a1 1 0 0 1 .894.553L14.382 5h3.118a1 1 0 0 1 .894 1.447L17 9h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2L5.606 6.447A1 1 0 0 1 6.5 5h3.118l1.488-2.447A1 1 0 0 1 12 2z"/></svg>
            Android
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v10h16V6H4zm-1 14h18v2H3v-2z"/></svg>
            Desktop
          </span>
        </motion.div>

        {/* Hero visual - App mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-border bg-card p-2 shadow-[0_0_80px_rgba(108,92,231,0.1)]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="mx-auto rounded-md bg-background/50 px-12 py-1 text-xs text-muted">
                vortex.app
              </div>
            </div>

            {/* App preview content */}
            <div className="grid grid-cols-12 gap-0 min-h-[340px]">
              {/* Sidebar */}
              <div className="col-span-3 border-r border-border p-4">
                <div className="space-y-1">
                  {["Tous les fichiers", "Google Drive", "Dropbox", "NAS Bureau"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                          i === 0
                            ? "bg-accent/10 text-accent"
                            : "text-muted hover:bg-card-hover"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            i === 0
                              ? "bg-accent"
                              : i === 3
                              ? "bg-success"
                              : "bg-info"
                          }`}
                        />
                        {item}
                      </div>
                    )
                  )}
                </div>
                <div className="mt-6 rounded-lg border border-border p-3">
                  <div className="text-[10px] text-muted mb-2">Stockage</div>
                  <div className="h-1.5 rounded-full bg-background overflow-hidden">
                    <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-accent to-info" />
                  </div>
                  <div className="text-[10px] text-muted mt-1">42.8 Go / 69 Go</div>
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-9 p-4">
                {/* Search bar */}
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-background/50 border border-border px-3 py-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <span className="text-xs text-muted">Chercher dans tous vos espaces...</span>
                </div>
                {/* File list */}
                <div className="space-y-1">
                  {[
                    { name: "Rapport-Q4.pdf", source: "Drive", size: "2.4 Mo", status: "synced" },
                    { name: "Presentation-client.pptx", source: "Dropbox", size: "18 Mo", status: "syncing" },
                    { name: "Photos-shoot/", source: "NAS", size: "4.2 Go", status: "synced" },
                    { name: "Contrat-final.docx", source: "Drive", size: "890 Ko", status: "encrypted" },
                    { name: "Backup-janvier.zip", source: "NAS", size: "12 Go", status: "synced" },
                  ].map((file) => (
                    <div
                      key={file.name}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs hover:bg-card-hover transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent text-[10px] font-bold">
                          {file.name.split(".").pop()?.toUpperCase().slice(0, 3) ?? "DIR"}
                        </div>
                        <div>
                          <div className="text-foreground font-medium">{file.name}</div>
                          <div className="text-muted">{file.source} &middot; {file.size}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-1.5 w-1.5 rounded-full ${
                            file.status === "synced"
                              ? "bg-success"
                              : file.status === "syncing"
                              ? "bg-warning animate-pulse"
                              : "bg-accent"
                          }`}
                        />
                        <span className="text-muted capitalize">{file.status === "synced" ? "Sync" : file.status === "syncing" ? "En cours..." : "Chiffre"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect under the mockup */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-accent/10 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
