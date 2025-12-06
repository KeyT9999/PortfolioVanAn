'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'Profile' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(i)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentPage = String(activeSection + 1).padStart(2, '0')
  const totalPages = String(sections.length).padStart(2, '0')

  // Determine if we're on hero section (dark background)
  const isHeroSection = activeSection === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className={`fixed bottom-8 left-8 z-50 hidden md:block ${
        isHeroSection ? 'text-white' : 'text-black'
      }`}
    >
      <div className="text-sm font-medium drop-shadow-md">
        {currentPage} / {totalPages}
      </div>
    </motion.div>
  )
}

