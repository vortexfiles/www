"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IconSearch, IconLock, IconCloud } from "@tabler/icons-react";

// --- Components mimicking the pasted image ---

function SearchCard() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden p-6 text-left">
      {/* Search Input Simulation */}
      <div className="w-full h-10 bg-neutral-700/50 rounded-lg flex items-center px-4 mb-4 backdrop-blur-sm border border-white/5 shadow-inner">
        <IconSearch className="text-white/40 w-4 h-4 mr-3" />
        <span className="text-white/40 text-sm font-medium">rapport-q4...</span>
      </div>

      {/* Results List */}
      <div className="space-y-3 flex-1">
        {[
          { name: "Rapport-Q4.pdf", source: "Google Drive" },
          { name: "Rapport-Q4.pdf", source: "NAS" },
          { name: "Rapport-Q4.pdf", source: "Dropbox" },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            className="flex items-center justify-between text-sm group cursor-pointer"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
          >
            <span className="text-neutral-300 group-hover:text-white transition-colors">{item.name}</span>
            <span className="text-xs text-neutral-500 uppercase tracking-wider">{item.source}</span>
          </motion.div>
        ))}
      </div>

      {/* Blue Glow Effect */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

function SyncCard() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-900/60 ">
      {/* Spinner Ring */}
      <div className="relative w-24 h-24 flex items-center justify-center mb-4">
        {/* Track */}
        <div className="absolute inset-0 rounded-full border-4 border-white/5" />
        {/* Indicator */}
        <div className="absolute inset-0 rounded-full border-t-4 border-indigo-500 animate-spin" />
        
        {/* Inner Icon */}
        <IconCloud className="text-white/80 w-8 h-8" />
      </div>
      
      <span className="text-neutral-400 text-sm font-medium animate-pulse">Syncing...</span>
    </div>
  );
}

function LoaderCard() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-neutral-900/40">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-white animate-spin duration-[3s]" />
    </div>
  );
}

function SecurityCard() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-neutral-900/40 group overflow-hidden">
      <div className="w-16 h-16 bg-green-900/20 rounded-xl flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform duration-300">
        <IconLock className="text-green-500 w-8 h-8" />
      </div>
       <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

function BentoItem({ 
  className, 
  children, 
  title, 
  description 
}: { 
  className?: string; 
  children: React.ReactNode; 
  title?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/30 backdrop-blur-sm hover:border-white/20 transition-colors duration-300",
        className
      )}
    >
      {children}
      {(title || description) && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left">
          {title && <h3 className="text-lg font-bold text-white mb-1">{title}</h3>}
          {description && <p className="text-sm text-neutral-400">{description}</p>}
        </div>
      )}
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-[#0A0A0B] to-[#121214] relative overflow-hidden">
        {/* Ambient background glow for smooth transition */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto mb-16 relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Votre espace de travail, <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                réinventé.
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Une suite d&apos;outils puissants conçus pour éliminer les frictions.
              Synchronisation instantanée, recherche unifiée et sécurité militaire.
            </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
            {/* Large Top Left - Search */}
            <BentoItem className="md:col-span-2 md:row-span-2 bg-neutral-900/50 h-[300px] md:h-auto border border-white/10">
                <div className="absolute top-6 left-6 z-20">
                    <h3 className="text-xl font-bold text-white mb-2">Recherche Universelle</h3>
                    <p className="text-sm text-neutral-400 max-w-[200px]">
                        Cherchez un fichier, Vortex le trouve. Peu importe où il est stocké.
                    </p>
                </div>
                <div className="absolute top-24 left-6 right-6 bottom-6">
                    <div className="h-full bg-neutral-900/80 rounded-xl border border-white/5 backdrop-blur-md">
                        <SearchCard />
                    </div>
                </div>
            </BentoItem>

            {/* Top Right - Sync */}
            <BentoItem className="md:col-span-2 md:row-span-1 bg-neutral-900/50 h-[200px] md:h-auto border border-white/10">
               <div className="flex w-full h-full"> 
                   <div className="flex-1 p-6 flex flex-col justify-center text-left">
                        <h3 className="text-lg font-bold text-white mb-1">Moteur V3</h3>
                        <p className="text-xs text-neutral-400">Sync ultra-rapide & économe.</p>
                   </div>
                   <div className="w-1/2 h-full">
                       <SyncCard />
                   </div>
               </div>
            </BentoItem>

            {/* Bottom Medium - Offline */}
            <BentoItem className="md:col-span-1 md:row-span-1 bg-neutral-900/50 h-[200px] md:h-auto border border-white/10">
                 <LoaderCard />
                 <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Offline First</span>
                 </div>
            </BentoItem>

            {/* Bottom Small - Security */}
            <BentoItem className="md:col-span-1 md:row-span-1 bg-neutral-900/50 h-[200px] md:h-auto border border-white/10">
                 <SecurityCard />
                 <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-xs font-mono text-green-500/70 uppercase tracking-widest">E2E Encrypted</span>
                 </div>
            </BentoItem>
        </div>
    </section>
  );
}
