"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/our-services" },
    { name: "Projects", href: "/project" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled && !isHovered
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : isScrolled && isHovered
          ? "bg-white/95 shadow-2xl"
          : !isScrolled && isHovered
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <h1 className={`text-3xl font-bold transition-colors duration-300 ${
              isScrolled && !isHovered 
              ? "text-slate-800" 
              : !isScrolled && isHovered 
              ? "text-slate-800" 
              : isScrolled && isHovered
              ? "text-slate-800"
              : "text-white"
            }`}>
              Amazing
              <span className={`${
                isScrolled && !isHovered
                  ? "bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent"
                  : "text-sky-500"
              }`}>
                Constructions
              </span>
            </h1>
            <p className={`text-sm -mt-1 tracking-widest font-semibold transition-colors duration-300 ${
              isScrolled && !isHovered ? "text-slate-600" : !isScrolled && isHovered ? "text-slate-600" : isScrolled && isHovered
              ? "text-slate-800"
              : "text-white"
            }`}>
              BUILDING EXCELLENCE
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-base font-medium transition-all duration-300 rounded-lg group overflow-hidden ${
                    isScrolled && !isHovered 
                      ? "text-slate-700 hover:text-slate-900" 
                      : !isScrolled && isHovered
                      ? "text-slate-700 font-medium hover:text-sky-600"
                      : !isScrolled && !isHovered
                      ? "text-white hover:text-sky-300"
                      : "text-slate-700 hover:text-sky-600"
                  } `}
                > 
                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-all duration-300 p-2.5 rounded-lg transform hover:scale-110 ${
                isScrolled && !isHovered
                  ? "text-slate-700 hover:text-sky-600 hover:bg-sky-100"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`backdrop-blur-md border-t shadow-lg ${
          isHovered ? "bg-sky-800/95 border-sky-600/30" : "bg-white/95 border-sky-200/20"
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-5 py-4 text-lg font-bold transition-all duration-300 rounded-lg border-l-4 transform hover:translate-x-2 ${
                  isHovered
                    ? "text-white hover:text-sky-900 hover:bg-white/20 border-transparent hover:border-white"
                    : "text-slate-700 hover:text-slate-900 hover:bg-sky-50/50 border-transparent hover:border-sky-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar