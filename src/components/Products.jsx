import React from 'react'
import ProductCard from './ProductCard'

const products = [
  {
    title: 'Kota Grill',
    description: 'Le pavillon finlandais pour des soirées conviviales autour du feu.',
    image: 'https://images.unsplash.com/photo-1454916286212-0ea211dc68d6?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Sauna Finlandais',
    description: 'La tradition scandinave du bien-être, chez vous.',
    image: 'https://images.unsplash.com/photo-1724301930658-2f21ae702d07?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXVuYSUyMEZpbmxhbmRhaXN8ZW58MHwwfHx8MTc2MjkzMDQ1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Bain Nordique',
    description: 'Un bain chaud fumant, été comme hiver, sous les étoiles.',
    image: 'https://images.unsplash.com/photo-1650898591542-c6eb283d3747?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWluJTIwTm9yZGlxdWV8ZW58MHwwfHx8MTc2MjkzMDQ1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Chalet & Abri en bois',
    description: 'Espace de détente, atelier ou stockage, au style naturel et épuré.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Products() {
  return (
    <section id="produits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Produits phares</h2>
            <p className="mt-3 text-slate-600">Des matériaux naturels, une esthétique pure et une expérience unique.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-3 font-medium shadow-sm hover:bg-emerald-700">Demander un devis</a>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
