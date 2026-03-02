"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Partage", href: "#proximity" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Tarifs", href: "#pricing" },
];

export function NavbarMenu({ children }: { children: React.ReactNode }) {
  return <nav className="hidden md:flex items-center gap-6">{children}</nav>;
}

export function NavbarMenuItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </a>
  );
}

export function ResizableNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
            <span className="text-sm font-bold text-white">V</span>
          </div>
          <span className="text-lg font-semibold tracking-tight font-mono">Vortex</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Se connecter</Button>
          <Button size="sm">Télécharger</Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <Button size="sm" className="mt-2">Télécharger</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
