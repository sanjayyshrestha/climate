import React from 'react'

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
