import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className='min-h-screen bg-base-900'>
        {/* Navbar */}
         <header className="border-b border-base-600/30">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          {/* Logo component */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-base-50/70">
            <a href="#product" className="hover:text-white transition">Product</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#docs" className="hover:text-white transition">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:inline text-sm text-base-50/80 hover:text-white transition">Sign in</Link>
            <Link to="/onboarding" className="btn-primary text-sm px-4 py-2">Get Started</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Landing