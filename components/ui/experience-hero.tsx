"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Component() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 min-h-[80vh] flex items-center">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          Disponible maintenant
        </div>
        <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Vos fichiers trouvent
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            leur place.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Un gestionnaire de fichiers intelligent qui centralise vos données locales et cloud avec une recherche IA en langage naturel.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">
            Télécharger gratuitement
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent">
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
}
