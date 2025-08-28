"use client"
import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { LogInIcon, Leaf } from "lucide-react"
import { useAuthStore } from "../store/useAuthStore"

export const Header = () => {
  const navigate = useNavigate()
  const {authUser,logout}=useAuthStore()
  return (
    <header className="sticky top-0 z-50 bg-green-200 px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105" onClick={()=>{navigate('/');scrollTo(0,0)}}>
          <Leaf className="w-8 h-8 text-green-700" />
          <span className="text-xl font-bold text-green-800">EcoPulse</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to={"/"} 
            className={({ isActive }) => 
              `relative font-semibold text-md transition-all duration-300 ${
                isActive 
                  ? "text-green-900 scale-105" 
                  : "text-green-800 hover:text-green-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-700 rounded-full animate-pulse"></div>
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to={"/howitworks"} 
            className={({ isActive }) => 
              `relative font-semibold text-md transition-all duration-300 ${
                isActive 
                  ? "text-green-900 scale-105" 
                  : "text-green-800 hover:text-green-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                How It Works
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-700 rounded-full animate-pulse"></div>
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to={"/about"} 
            className={({ isActive }) => 
              `relative font-semibold text-md transition-all duration-300 ${
                isActive 
                  ? "text-green-900 scale-105" 
                  : "text-green-800 hover:text-green-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-700 rounded-full animate-pulse"></div>
                )}
              </>
            )}
          </NavLink>
          
          <NavLink 
            to={"/calculate"} 
            className={({ isActive }) => 
              `relative font-semibold text-md transition-all duration-300 ${
                isActive 
                  ? "text-green-900 scale-105" 
                  : "text-green-800 hover:text-green-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Calculate
                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-700 rounded-full animate-pulse"></div>
                )}
              </>
            )}
          </NavLink>
        </nav>
        
        <button
          onClick={() => {!authUser?navigate("/signin"):logout()}}
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white font-semibold text-md rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-green-700"
        >
          <LogInIcon className="size-4" />
          <span>
           {
            authUser?"LOGOUT":"LOGIN"
           }
          </span>
        </button>
      </div>
    </header>
  )
}