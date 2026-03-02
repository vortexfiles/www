import { Book, Code2, FileText, Terminal, Zap, GitBranch, Layers, Shield } from "lucide-react"
import Link from "next/link"

const docCategories = [
  {
    icon: Zap,
    title: "Recherche IA",
    description: "Retrouvez vos fichiers en langage naturel grâce à l’intelligence artificielle",
    links: ["Recherche avancée", "Filtres intelligents", "Historique"],
  },
  {
    icon: Code2,
    title: "Centralisation",
    description: "Gérez vos fichiers locaux, cloud et serveurs depuis une seule interface",
    links: ["Google Drive", "OneDrive", "iCloud", "Serveur FTP"],
  },
  {
    icon: Terminal,
    title: "Organisation auto",
    description: "Laissez l’IA trier et ranger vos documents, photos et autres fichiers",
    links: ["Règles de tri", "Suggestions IA", "Automatisation"],
  },
  {
    icon: GitBranch,
    title: "Transfert de proximité",
    description: "Envoyez des fichiers instantanément à un appareil voisin sans fil ni USB",
    links: ["Wi-Fi direct", "Appareils détectés", "Historique transferts"],
  },
  {
    icon: Layers,
    title: "Suppléments",
    description: "Visionneurs intégrés, convertisseurs de formats et marketplace de plugins",
    links: ["PDF / Word / Excel", "Convertisseurs", "Plugins communauté"],
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Chiffrement AES-256 de vos données avant tout envoi vers le cloud",
    links: ["Chiffrement", "Vie privée", "Contrôle d’accès"],
  },
]

export function DocsSection() {
  return (
    <section id="docs" className="py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <Book className="h-4 w-4" />
            <span className="font-mono uppercase tracking-wider">Fonctionnalités avancées</span>
          </div>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight sm:text-4xl">Tout ce dont vous avez besoin</h2>
          <p className="mt-4 text-muted-foreground">
            Vortex intègre toutes les fonctionnalités pour gérer vos fichiers intelligemment, au quotidien.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {docCategories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-border/60 bg-[#141414] p-6 transition-all duration-300 hover:border-accent/40 hover:bg-[#1a1a1a] scale-100 hover:scale-105"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <category.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-mono font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
              <ul className="mt-4 space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      <FileText className="h-3 w-3" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#" className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline">
            Voir toutes les fonctionnalités
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
