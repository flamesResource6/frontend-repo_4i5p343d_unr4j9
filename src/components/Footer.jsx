import React from 'react'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-100 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-semibold">MS</div>
              <span className="font-semibold tracking-wide text-white text-lg">Maison Scandinave</span>
            </div>
            <p className="mt-4 text-slate-300 text-sm">Kotas finlandais, saunas barrel et bains nordiques haut de gamme. L'authenticité scandinave chez vous.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Liens rapides</h4>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li><a href="#produits" className="hover:text-white">Produits</a></li>
              <li><a href="#pourquoi-nous" className="hover:text-white">Pourquoi nous</a></li>
              <li><a href="#temoignages" className="hover:text-white">Témoignages</a></li>
              <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Nous contacter</h4>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2"><Phone size={16}/> <span>+33 1 23 45 67 89</span></li>
              <li className="flex items-center gap-2"><Mail size={16}/> <span>contact@maison-scandinave.com</span></li>
              <li className="flex items-center gap-2"><MapPin size={16}/> <span>12, Rue du Nord, 75000 Paris</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Suivez-nous</h4>
            <div className="mt-4 flex gap-3">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Facebook size={18}/></a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20"><Instagram size={18}/></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Maison Scandinave — Tous droits réservés.</div>
      </div>
    </footer>
  )
}
