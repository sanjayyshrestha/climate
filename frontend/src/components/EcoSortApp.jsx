import React from 'react'
import { Header } from "./Header"
import { HeroSection } from "./HeroSection"
import { DecorativeLeaves } from "./DecorativeLeaves"
import { FeaturesSection } from "./FeatureSection"
import { Route, Routes } from 'react-router-dom'
import HowItWorks from './HowItWorks'



export const EcoSortApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      <DecorativeLeaves />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <Routes>
          <Route path='/howitworks' element={<HowItWorks/>} />
        </Routes>
      </main>
    </div>
  )
}
