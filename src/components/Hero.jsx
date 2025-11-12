import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="h-[70vh] md:h-[80vh] w-full bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[70vh] md:h-[80vh] flex items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow">
              Vivez l’Art de Vivre Nordique
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">
              Kota Grill, Sauna, Bain Nordique – L’authenticité scandinave chez vous.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#produits" className="inline-flex items-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-medium shadow-lg shadow-emerald-900/20 transition-colors">
                Voir les produits
              </a>
              <a href="#galerie" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-medium backdrop-blur">
                S'inspirer
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
