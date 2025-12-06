'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioItems } from '@/data/portfolio'

const categories = [
  'ALL',
  'Music Videos',
  'Dance',
  'BTS',
  'Photography',
]

export default function Portfolio() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isFiltering, setIsFiltering] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const filteredItems =
    activeFilter === 'ALL'
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.categories.includes(activeFilter)
        )

  const handleFilterChange = (category: string) => {
    if (category === activeFilter) return
    setIsFiltering(true)
    setActiveFilter(category)
    // Reset loaded images when filter changes
    setLoadedImages(new Set())
    // Reset filtering state after animation completes
    setTimeout(() => setIsFiltering(false), 500)
  }

  const handleItemClick = (id: number) => {
    router.push(`/portfolio/${id}`)
  }

  const handleImageLoad = (itemId: number) => {
    setLoadedImages((prev) => new Set(prev).add(itemId))
  }

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PORTFOLIO</h2>
          <p className="text-gray-600 text-sm md:text-base">
            CÁC SẢN PHẨM CỦA TÔI
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleFilterChange(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {index + 1}. {category}
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-black rounded-sm -z-10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.9,
                    y: -20,
                    transition: { duration: 0.25, ease: 'easeIn' } 
                  }}
                  transition={{ 
                    layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 },
                    y: { duration: 0.4 },
                    delay: isFiltering ? index * 0.03 : index * 0.05, // Faster stagger when filtering
                    ease: [0.25, 0.1, 0.25, 1] // Smooth cubic-bezier easing
                  }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.2, ease: 'easeOut' } 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1 
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="relative group cursor-pointer overflow-hidden bg-gray-100"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleItemClick(item.id)}
                >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  {/* Skeleton Loader */}
                  {!loadedImages.has(item.id) && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
                    >
                      <motion.div
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: 'linear',
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                      />
                    </motion.div>
                  )}
                  
                  {/* Image */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${
                      loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(item.id)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ 
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="text-center text-white px-4">
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm mb-4">{item.category}</p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleItemClick(item.id)
                        }}
                        className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                      >
                        XEM NGAY
                      </button>
                    </div>
                  </motion.div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

