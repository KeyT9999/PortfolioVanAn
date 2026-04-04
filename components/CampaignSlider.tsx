'use client'

import { useState, useRef } from 'react'

interface CampaignSliderProps {
  images: { src: string; alt: string }[]
  label: string
  title: string
  description: string
  facebookUrl?: string
  links?: { title: string; url: string }[]
}

export default function CampaignSlider({
  images,
  label,
  title,
  description,
  facebookUrl,
  links,
}: CampaignSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const goToNext = () =>
    setCurrentIndex((i) => (i + 1) % images.length)

  const goToPrev = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 40) goToNext()
    else if (delta < -40) goToPrev()
    touchStartX.current = null
  }

  return (
    <div className="bg-surface-container-low rounded-sm overflow-hidden border border-outline-variant/10 flex flex-col">
      {/* Image Area */}
      <div
        className="aspect-video relative overflow-hidden cursor-pointer select-none"
        onClick={goToNext}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goToPrev() }}
              aria-label="Ảnh trước"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goToNext() }}
              aria-label="Ảnh tiếp"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </>
        )}

        {/* Dot Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i) }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                aria-label={`Ảnh ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 text-white font-label text-[10px] z-10">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col flex-1">
        <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">{label}</span>
        <h4 className="font-headline text-xl mb-3">{title}</h4>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">{description}</p>

        {links && links.length > 0 && (
          <div className="mb-4">
            <details className="group marker:content-['']">
              <summary className="flex items-center gap-2 text-on-surface font-label text-[10px] uppercase tracking-widest font-semibold cursor-pointer select-none pb-2 border-b border-outline-variant/10">
                <span className="material-symbols-outlined text-[14px] group-open:rotate-180 transition-transform">expand_more</span>
                Xem {links.length} bài viết chiến dịch
              </summary>
              <div className="mt-2 flex flex-col gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                {links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-variant hover:text-primary flex items-start gap-2 py-1">
                    <span className="material-symbols-outlined text-[12px] mt-0.5 flex-shrink-0">open_in_new</span>
                    <span className="leading-tight">{link.title}</span>
                  </a>
                ))}
              </div>
            </details>
          </div>
        )}

        {facebookUrl && (
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-semibold group mt-auto"
          >
            <span className="material-symbols-outlined text-sm">open_in_new</span>
            Xem trên Fanpage
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </a>
        )}
      </div>
    </div>
  )
}
