"use client"
import React from 'react'
import { useState } from "react"

export const HeroSection = () => {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    // Handle file drop logic here
  }

  return (
    <section className="px-6 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 text-balance">Sort Smarter. Waste Less.</h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-pretty">
          Upload a photo of your waste item and we'll tell you exactly how to dispose of it properly.
        </p>

        <div
          className={`max-w-md mx-auto border-2 border-dashed rounded-lg p-12 transition-all duration-200 ${
            isDragOver ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-green-400 hover:bg-green-25"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-16 h-16 mx-auto mb-4 text-green-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>

          <p className="text-gray-600 font-medium mb-2">Drag & drop your waste image here</p>
          <p className="text-sm text-gray-500">or click to select a file</p>
        </div>
      </div>
    </section>
  )
}
