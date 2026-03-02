import { Building2, Shield, Users, Headphones, Globe, Lock, BarChart3, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Chiffrement avancé",
    description: "Vos données sont chiffrées en AES-256 avant tout envoi vers le cloud. Sécurité totale.",
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Code libre et transparent, sans enfermement dans un écosystème propriétaire.",
  },
  {
    icon: Headphones,
    title: "Transfert de proximité",
    description: "Envoyez des fichiers à un appareil voisin instantanément, sans câble ni clé USB.",
  },
  {
    icon: Globe,
    title: "Interface moderne",
    description: "Une interface érgonomique et fluide pour gérer vos données avec style.",
  },
  {
    icon: Lock,
    title: "Marche communautaire",
    description: "Installez des extensions communautaires pour améliorer votre expérience Vortex.",
  },
  {
    icon: BarChart3,
    title: "Multi-cloud",
    description: "Gérez vos fichiers sur Google Drive, OneDrive, iCloud et serveurs personnels depuis l’app.",
  },
  {
    icon: Workflow,
    title: "Automatisation",
    description: "Programmez la copie et le déplacement de vos données selon vos propres règles personnalisées.",
  },
  {
    icon: Building2,
    title: "Convertisseurs intégrés",
    description: "Convertissez vos fichiers d’un format à l’autre (PNG → JPG, DOCX → PDF…) directement dans Vortex.",
  },
]

const logos = ["Google Drive", "OneDrive", "iCloud", "Linux", "Windows", "FTP"]

export function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-24 border-t border-border/40 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <Building2 className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">Avantages</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">Pourquoi choisir Vortex ?</h2>
          <p className="mt-4 text-muted-foreground">
            Une utilisation innovante de l’IA, une accessibilité accrue et une flexibilité multiplateforme. Vortex
            répond à tous vos besoins de gestion de fichiers.
          </p>
        </div>

        {/* Trusted by logos */}
        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-center text-sm text-muted-foreground mb-6">Compatible avec</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="font-mono text-lg font-semibold text-muted-foreground/60">
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {enterpriseFeatures.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/60 bg-[#141414] p-6 transition-all duration-300 scale-100 hover:scale-105 hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-mono text-sm font-semibold">{feature.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-accent/40 bg-gradient-to-b from-accent/10 to-transparent p-8 text-center sm:p-12">
          <h3 className="font-mono text-xl font-bold">Prêt à rejoindre Vortex ?</h3>
          <p className="mt-4 text-muted-foreground">
            Téléchargez Vortex gratuitement et reprenez le contrôle de vos fichiers dès aujourd’hui.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">Télécharger gratuitement</Button>
            <Button size="lg" variant="outline">
              Contribuer sur GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
