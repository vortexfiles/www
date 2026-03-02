import Link from "next/link"

const footerLinks = {
  Produit: ["Fonctionnalités", "Tarifs", "Sécurité", "Roadmap"],
  Ressources: ["Documentation", "Contribuer", "Discord", "GitHub"],
  "Équipe": ["Nöe Gebert", "Lorenzo La Rocca", "Killian Quintin", "Menzo Smit-Adam", "Matthieu Witrowiez"],
  Mentions: ["Confidentialité", "Conditions", "Sécurité"],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <span className="text-sm font-bold text-background">V</span>
              </div>
              <span className="text-lg font-semibold tracking-tight font-mono">Vortex</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Un gestionnaire de fichiers intelligent avec IA, open-source et multiplateforme. Vos fichiers trouvent leur place.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vortex EIP — Epitech Innovation Project. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
