"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-sky-200/20"
          : "bg-white/90 backdrop-blur-sm shadow-sm border-b border-slate-200/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group cursor-pointer">
            <h1 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
              Amazing
              <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                Constructions
              </span>
            </h1>
            <p className="text-xs text-slate-500 -mt-1 tracking-wider font-medium">BUILDING EXCELLENCE</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-slate-700 hover:text-slate-900 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-sky-50/50 group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-sky-600 focus:outline-none focus:text-sky-600 transition-colors duration-200 p-2 rounded-lg hover:bg-sky-50/50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sky-200/20 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 hover:bg-sky-50/50 block px-4 py-3 text-base font-semibold transition-all duration-200 rounded-lg border-l-4 border-transparent hover:border-sky-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

          
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
