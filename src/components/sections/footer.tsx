export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505] text-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight">VORTEX</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4 max-w-xs">
              Tous vos fichiers, un seul endroit.
              <br />
              Centralisés, synchronisés, partagés.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-4">Produit</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
               <li><a href="#" className="hover:text-white">Fonctionnalités</a></li>
               <li><a href="#" className="hover:text-white">Marketplace</a></li>
               <li><a href="#" className="hover:text-white">Sécurité</a></li>
               <li><a href="#" className="hover:text-white">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-4">Société</h4>
            <ul className="space-y-2 text-xs text-neutral-400">
               <li><a href="#" className="hover:text-white">À propos</a></li>
               <li><a href="#" className="hover:text-white">Blog</a></li>
               <li><a href="#" className="hover:text-white">Carrières</a></li>
               <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Vortex. Tous droits réservés.
          </p>
          <p className="text-xs text-neutral-500">
            Fait avec soin à Paris.
          </p>
        </div>
      </div>
    </footer>
  );
}
