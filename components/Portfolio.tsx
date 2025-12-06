'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface PortfolioItem {
  id: number
  title: string
  category: string
  categories: string[]
  image: string
  link?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'LÁ TRÀ HẠNH PHÚC – WAO TEA COFFEE',
    category: 'Video Corporate',
    categories: ['Video Corporate'],
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7c4?w=800',
  },
  {
    id: 2,
    title: 'TFSVN – Vì Bước Tiến Mới',
    category: 'Video Corporate',
    categories: ['Video Corporate'],
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800',
  },
  {
    id: 3,
    title: 'DrCare – Glamiss Cool',
    category: 'TVC',
    categories: ['TVC'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
  },
  {
    id: 4,
    title: 'Kiềm Nghĩa – Giới thiệu sản phẩm',
    category: 'Product Brand',
    categories: ['Product Brand'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
  },
  {
    id: 5,
    title: 'Mcredit – Vay nhanh',
    category: 'Films',
    categories: ['Films'],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
  },
  {
    id: 6,
    title: 'Lo-supply : Hàng gì cũng có',
    category: 'Commercial',
    categories: ['Commercial'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
  },
  {
    id: 7,
    title: 'COLOSBABY – ƯỚC GÌ ĐƯỢC HƠN',
    category: 'TVC',
    categories: ['TVC'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  },
  {
    id: 8,
    title: 'Những chuyến bay XANH – Vietjet',
    category: 'Commercial',
    categories: ['Commercial', 'Music Videos'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
  },
  {
    id: 9,
    title: 'What Is My Power? YOLA',
    category: 'Commercial',
    categories: ['Commercial', 'Music Videos'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
  },
  {
    id: 10,
    title: 'Còn Gì Để Mất | She Kings',
    category: 'Music Videos',
    categories: ['Music Videos'],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
  },
  {
    id: 11,
    title: 'Một đời Hoàn Mỹ',
    category: 'Viral',
    categories: ['Viral'],
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
  },
  {
    id: 12,
    title: 'GRAB "CHUNG TAY" – H\'HEN NIÊ',
    category: 'Commercial',
    categories: ['Commercial'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
  },
]

const categories = [
  'ALL',
  'Commercial',
  'Films',
  'Music Videos',
  'Product Brand',
  'TVC',
  'Video Corporate',
  'Viral',
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems =
    activeFilter === 'ALL'
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.categories.includes(activeFilter)
        )

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
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-medium transition-all ${
                activeFilter === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {index + 1}. {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative group cursor-pointer overflow-hidden bg-gray-100"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredItem === item.id ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center"
                  >
                    <div className="text-center text-white px-4">
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm mb-4">{item.category}</p>
                      <button className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-100 transition-colors">
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
      </div>
    </section>
  )
}

