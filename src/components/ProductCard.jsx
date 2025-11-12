import React from 'react'

export default function ProductCard({ image, title, description }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
