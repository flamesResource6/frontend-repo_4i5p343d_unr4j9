import React from 'react'
import { Star, Truck, ShieldCheck, Sofa } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Qualité scandinave',
    desc: 'Bois nordique sélectionné, finitions haut de gamme, durabilité éprouvée.'
  },
  {
    icon: Sofa,
    title: 'Confort & Design',
    desc: 'Intérieurs chaleureux, ergonomiques et lumineux, pensés pour le cocooning.'
  },
  {
    icon: Truck,
    title: 'Livraison partout',
    desc: 'Réseau logistique fiable, pose et installation possibles selon régions.'
  },
  {
    icon: Star,
    title: 'Service Premium',
    desc: 'Accompagnement sur-mesure, de la conception à la première flambée.'
  }
]

export default function Features() {
  return (
    <section id="pourquoi-nous" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Pourquoi nous choisir ?</h2>
          <p className="mt-3 text-slate-600">Notre exigence du détail au service de votre bien-être scandinave.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-100">
              <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
