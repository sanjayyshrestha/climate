import React from 'react'
import Navbar from './components/Navbar'
import { EcoSortApp } from './components/EcoSortApp'
import { Header } from './components/Header'
import { DecorativeLeaves } from './components/DecorativeLeaves'
import Home from './components/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import HowItWorks from './components/HowItWorks'
import SignInPage from './components/SignIn'
import SignUpPage from './components/SignUp'
import { AnnouncementBanner } from './components/AnnouncementBanner'
import ScrollToTop from './lib/scrollToTop'


const App = () => {
  const location=useLocation();
  return (
    <div>
      {
        location.pathname==='/' && (
          <>
           <DecorativeLeaves />
      <AnnouncementBanner />
          </>
        )
      }
            <ScrollToTop />  
      <Header />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/howitworks' element={<HowItWorks/>} />
      <Route path='/signin' element={<SignInPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
     </Routes>
    </div>
  )
}

export default App