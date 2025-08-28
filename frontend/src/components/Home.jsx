import React from 'react'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeatureSection'
import { DecorativeLeaves } from './DecorativeLeaves'

const Home = () => {
  return (
    <div>
       <main className="relative z-10">
        {/* <DecorativeLeaves /> */}
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  )
}

export default Home