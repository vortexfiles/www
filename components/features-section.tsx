"use client"

import type React from "react"

import { Cloud, Zap, Shield, GitBranch, Globe, Cpu, Database, Layers, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Cloud,
    title: "Recherche intelligente par IA",
    description: "Retrouvez n'importe quel fichier en langage naturel grâce à l'IA — sans connaître son nom exact.",
  },
  {
    icon: Zap,
    title: "Organisation automatisée",
    description: "L'IA analyse vos fichiers et vous propose des règles de tri intelligentes pour garder votre espace propre.",
  },
  {
    icon: Shield,
    title: "Chiffrement des données",
    description: "Vos fichiers sont chiffrés en AES-256 avant tout envoi vers le cloud. Votre vie privée est protégée.",
  },
  {
    icon: GitBranch,
    title: "Multi-cloud unifié",
    description: "Gérez vos fichiers locaux, Google Drive, OneDrive, iCloud et serveurs FTP depuis une seule interface.",
  },
  {
    icon: Globe,
    title: "Transfert de proximité",
    description: "Envoyez des fichiers instantanément à un appareil voisin, sans câble ni clé USB.",
  },
  {
    icon: Cpu,
    title: "Marche communautaire",
    description: "Installez des extensions créées par la communauté pour personnaliser et améliorer votre expérience.",
  },
  {
    icon: Database,
    title: "Visionneurs intégrés",
    description: "Ouvrez vos PDF, documents Word, feuilles Excel et images directement dans Vortex.",
  },
  {
    icon: Layers,
    title: "Automatisation par règles",
    description: "Programmez la copie, le déplacement ou la sauvegarde de vos données selon vos propres règles.",
  },
]

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = scrollContainer.scrollLeft

    const animate = () => {
      if (!isPaused && !isDragging && scrollContainer) {
        scrollPosition += 0.5
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      } else if (scrollContainer) {
        scrollPosition = scrollContainer.scrollLeft
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused, isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainer.offsetLeft)
    setScrollLeft(scrollContainer.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    const x = e.pageX - scrollContainer.offsetLeft
    const walk = (x - startX) * 2
    scrollContainer.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setIsPaused(false)
  }

  const duplicatedFeatures = [...features, ...features]

  return (
    <section id="features" className="py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">Fonctionnalités de Vortex</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Une plateforme pensée pour centraliser vos fichiers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vortex simplifie la gestion de vos fichiers en unifiant local, cloud et serveurs dans une interface moderne pilotée par l’IA.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 w-[320px] rounded-2xl border border-border/60 bg-card/50 p-8 transition-all hover:border-border hover:bg-card"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-mono text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
