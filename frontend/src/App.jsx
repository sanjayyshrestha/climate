import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { EcoSortApp } from './components/EcoSortApp'
import { Header } from './components/Header'
import { DecorativeLeaves } from './components/DecorativeLeaves'
import Home from './components/Home'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HowItWorks from './components/HowItWorks'
import SignInPage from './components/SignIn'
import SignUpPage from './components/SignUp'
import { AnnouncementBanner } from './components/AnnouncementBanner'
import ScrollToTop from './lib/scrollToTop'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from 'lucide-react'


const App = () => {
  const {authUser,checkAuth,isCheckingAuth}=useAuthStore()
  const location=useLocation();

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  console.log(authUser)

  if(isCheckingAuth && !authUser){
  return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin' />
    </div>
  )
}

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
      <Route path='/' element={authUser?<Home/>:<Navigate to={'/signin'} />} />
      <Route path='/howitworks' element={<HowItWorks/>} />
      <Route path='/signin' element={<SignInPage/>} />
      <Route path='/signup' element={<SignUpPage/>} />
     </Routes>
    </div>
  )
}

export default App