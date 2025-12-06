'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { ImageSwiper } from '@/components/ImageSwiper'
import { portfolioItems } from '@/data/portfolio'

export default function PortfolioDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id ? parseInt(params.id as string, 10) : null

  const item = id ? portfolioItems.find((item) => item.id === id) : null

  if (!item) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h2>
          <button
            onClick={() => router.push('/#portfolio')}
            className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Quay lại Portfolio
          </button>
        </div>
      </div>
    )
  }

  // Convert images to CardData format for ImageSwiper
  const images = item.images || [item.image]
  const cardData = images.map((imageUrl, index) => ({
    id: index + 1,
    imageUrl: imageUrl,
    title: `${item.title} - ${index + 1}`,
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/#portfolio')}
        className="fixed top-6 left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/80 text-white hover:bg-black transition-colors backdrop-blur-sm"
        aria-label="Quay lại"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start pt-8">
          {/* Left Column - Header & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full lg:sticky lg:top-24"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex gap-2 flex-wrap mb-4">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-500 mb-6">
                {item.category}
              </p>
            </div>

            {/* Project Info */}
            {(item.director || item.client || item.year) && (
              <div className="mb-8 space-y-3 text-sm md:text-base">
                {item.director && (
                  <div className="flex">
                    <span className="text-gray-500 font-medium w-24 flex-shrink-0">
                      Đạo diễn:
                    </span>
                    <span className="text-gray-900">{item.director}</span>
                  </div>
                )}
                {item.client && (
                  <div className="flex">
                    <span className="text-gray-500 font-medium w-24 flex-shrink-0">
                      Khách hàng:
                    </span>
                    <span className="text-gray-900">{item.client}</span>
                  </div>
                )}
                {item.year && (
                  <div className="flex">
                    <span className="text-gray-500 font-medium w-24 flex-shrink-0">
                      Năm:
                    </span>
                    <span className="text-gray-900">{item.year}</span>
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            {item.description && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => router.push('/#portfolio')}
                className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-lg flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại Portfolio
              </button>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors rounded-lg border-2 border-black flex items-center justify-center gap-2"
                >
                  Xem dự án
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - ImageSwiper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 w-full flex justify-center items-center lg:min-h-[450px]"
          >
            <div className="w-full max-w-[640px]">
              <ImageSwiper
                cards={cardData}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

