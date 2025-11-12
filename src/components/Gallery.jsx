import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1465805139202-a644e217f00e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Inspiration</h2>
          <p className="mt-3 text-slate-600">Ambiances hygge, soirées autour du feu et bains nordiques sous les étoiles.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-sm">
              <img src={src} alt="Inspiration scandinave" className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
