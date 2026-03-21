'use client'

import Image from 'next/image'
import { useState } from 'react'

const heroPortraits = [
  {
    src: encodeURI('/Ảnh đẹp để giới thiệu/IMG_0695.JPG'),
    alt: 'Vân An portrait in ao dai',
  },
  {
    src: encodeURI('/Ảnh đẹp để giới thiệu/quality_restoration_20250825190635597.JPEG'),
    alt: 'Vân An portrait restored',
  },
] as const

export default function Hero() {
  const [activePortraitIndex, setActivePortraitIndex] = useState(0)

  const handlePortraitToggle = () => {
    setActivePortraitIndex((currentIndex) =>
      currentIndex === heroPortraits.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden mb-32">
      {/* Asymmetrical Grid Container */}
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 z-10 flex flex-col items-start gap-8">
          <div className="space-y-4">
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary font-medium">Portfolio Vol. 1</span>
            <h1 className="font-headline text-5xl lg:text-7xl md:text-5xl lg:text-8xl text-on-surface leading-[1.1] tracking-tight">
              Nguyễn Thuỳ <span className="italic font-normal">Vân An</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant font-body text-lg leading-relaxed border-l-2 border-outline-variant pl-6 py-2">
              Multimedia Communication | Professional Host | Strategic Marketer. 
              <br/>
              <span className="text-sm italic opacity-70">Where the heart is, there lies the treasure.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <button className="hero-gradient text-white px-10 py-4 rounded-sm font-label font-semibold text-sm tracking-widest uppercase shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
              View My Work
            </button>
            <a 
              href="/CVVANAN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-outline-variant/30 text-on-surface px-10 py-4 rounded-sm font-label font-semibold text-sm tracking-widest uppercase hover:bg-surface-container-high transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
        
        {/* Right Visual Column (Asymmetrical Placement) */}
        <div className="lg:col-span-6 relative mt-12 md:mt-0">
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-2xl ml-auto">
            {/* Main Image Frame */}
            <button
              type="button"
              onClick={handlePortraitToggle}
              className="absolute inset-0 bg-surface-container-low rounded-lg p-2 md:p-4 rotate-2 shadow-2xl overflow-hidden group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              aria-label="Chạm vào ảnh để chuyển sang ảnh giới thiệu còn lại"
            >
              <div className="relative h-full w-full overflow-hidden rounded-md">
                {heroPortraits.map((portrait, index) => (
                  <Image
                    key={portrait.src}
                    src={portrait.src}
                    alt={portrait.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-all duration-700 ease-in-out ${
                      activePortraitIndex === index
                        ? 'opacity-100 scale-100 grayscale-0'
                        : 'pointer-events-none opacity-0 scale-105 grayscale'
                    }`}
                  />
                ))}
                <span className="absolute bottom-4 left-4 rounded-full bg-[#fffae7]/85 px-4 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.28em] text-[#011d45] backdrop-blur-sm">
                  Tap Photo
                </span>
              </div>
            </button>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-12 -right-12 font-headline text-9xl text-outline-variant/10 select-none">CH</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hidden md:flex">
        <span className="font-label text-[10px] uppercase tracking-[0.3rem]">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  )
}
