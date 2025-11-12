import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Camille & Hugo',
    quote: 'Ambiance magique autour du feu. Notre Kota Grill est devenu le coeur de nos soirées !',
    image: 'https://images.unsplash.com/photo-1733578461809-2fad5df26479?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI5NDE0NDB8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    name: 'Nicolas',
    quote: 'Le sauna au bord du jardin, un vrai rituel bien-être. Qualité irréprochable.',
    image: 'https://images.unsplash.com/photo-1606719174974-7cf1de40836c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOaWNvbGFzfGVufDB8MHx8fDE3NjI5NDE0NDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    name: 'Élise',
    quote: 'Service premium et installation parfaite. Je recommande sans hésiter !',
    image: 'https://images.unsplash.com/photo-1541534401786-2077eed87a42?q=80&w=600&auto=format&fit=crop'
  }
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Témoignages</h2>
          <p className="mt-3 text-slate-600">Ils ont choisi l'authenticité scandinave, ils racontent.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-50 rounded-2xl p-6 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
