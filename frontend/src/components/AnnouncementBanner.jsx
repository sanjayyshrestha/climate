"use client"
import React from "react"
import { ArrowRight, X } from "lucide-react"
import { useState } from "react"

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-green-600 text-white px-5 py-3 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-2 text-md font-semibold tracking-tighter">
          <span>🌱 EcoPulse now tracks carbon footprint reduction in real-time.</span>
          <button className="flex items-center gap-1 hover:underline">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <button onClick={() => setIsVisible(false)} className="absolute right-4 p-1 hover:bg-green-700 rounded">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
