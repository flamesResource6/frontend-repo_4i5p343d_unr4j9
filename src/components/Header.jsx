import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Produits', href: '#produits' },
  { label: 'Pourquoi nous', href: '#pourquoi-nous' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-white/80 backdrop-blur shadow-sm' : 'bg-white/40 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-semibold">MS</div>
            <span className="font-semibold tracking-wide text-gray-900 text-lg">Maison Scandinave</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#produits" className="ml-2 inline-flex items-center rounded-full bg-emerald-600 text-white px-5 py-2 font-medium shadow-sm hover:bg-emerald-700 transition-colors">
              Découvrir nos modèles
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Ouvrir le menu" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-gray-800">
                {item.label}
              </a>
            ))}
            <a href="#produits" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-5 py-2 font-medium shadow-sm">
              Découvrir nos modèles
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
