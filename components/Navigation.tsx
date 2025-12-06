'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Profile', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const scrollPosition = window.scrollY + 200

      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].href.replace('#', '')
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-xl md:text-2xl font-black tracking-wider transition-all duration-300 ${
              isScrolled
                ? 'px-4 py-2 bg-black text-white rounded-lg shadow-lg border-2 border-gray-200'
                : 'text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/30'
            }`}
          >
            TRƯỜNG HẢI
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-sm font-bold transition-all duration-300 relative px-4 py-2 rounded-md ${
                    isScrolled
                      ? isActive
                        ? 'text-white bg-black shadow-md'
                        : 'text-gray-700 hover:text-black hover:bg-gray-100 hover:shadow-sm'
                      : isActive
                      ? 'text-white bg-white/20 backdrop-blur-sm shadow-lg border border-white/30'
                      : 'text-white/90 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? 'bg-black' : 'bg-white'
                      }`}
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

