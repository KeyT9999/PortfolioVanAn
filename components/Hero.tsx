'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const images = [
  { id: 1, src: '/home/1.jpg' },
  { id: 2, src: '/home/2.jpg' },
  { id: 3, src: '/home/3.jpg' },
  { id: 4, src: '/home/4.jpg' },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    portfolioSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleImageChange = (imageIndex: number) => {
    setCurrentImageIndex(imageIndex)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Slide Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex].src}
              alt={`Background ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay để text dễ đọc hơn */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg"
          >
            <motion.span
              onClick={() => handleImageChange(0)}
              className="cursor-pointer hover:scale-105 transition-transform inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I'm
            </motion.span>{' '}
            <motion.span
              onClick={() => handleImageChange(1)}
              className="block mt-2 text-5xl md:text-7xl lg:text-8xl cursor-pointer hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HẢI
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onClick={() => handleImageChange(2)}
            className="text-xl md:text-2xl lg:text-3xl font-light text-white drop-shadow-md cursor-pointer hover:scale-105 transition-transform inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Media Freelancer & Creative
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.a
              href="tel:+84364605132"
              onClick={(e) => {
                e.preventDefault()
                handleImageChange(3)
              }}
              className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CALL ME
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleImageChange(0)
              }}
              className="px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK NOW
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-8 bottom-8 z-50 hidden md:flex flex-col items-center gap-4"
      >
        <motion.button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center gap-2 text-white hover:text-gray-200 transition-colors"
          aria-label="Scroll to portfolio"
        >
          <span className="text-sm font-medium text-white drop-shadow-md writing-vertical-rl">
            CUỘN XUỐNG
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-white drop-shadow-md" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}

