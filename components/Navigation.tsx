"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation({ title = "Vân An" }: { title?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-sm border-b border-blue-900/5 dark:border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
          <div className="font-serif italic text-2xl text-[#1c1c18] dark:text-[#f3f0ea] z-50 relative">
            <Link href="/">{title}</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-10 items-center font-serif text-lg tracking-tight">
            <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#0a4275] transition-colors duration-300" href="/#home">Home</Link>
            <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#0a4275] transition-colors duration-300" href="/#about">About</Link>
            <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#0a4275] transition-colors duration-300" href="/#hosting">Hosting</Link>
            <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#0a4275] transition-colors duration-300" href="/#marketing">Marketing</Link>
            <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#0a4275] transition-colors duration-300" href="/#media">Media</Link>
            <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#0a4275] transition-colors duration-300" href="/mc">MC</Link>
            <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#0a4275] transition-colors duration-300" href="/#research">Research</Link>
            <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#0a4275] transition-colors duration-300" href="/cv">My CV</Link>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <a href="https://www.facebook.com/vanan.nguyenthuy.1" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block blue-shimmer text-white px-8 py-2.5 rounded-sm font-semibold tracking-wide text-sm scale-95 hover:scale-100 duration-200 ease-in-out">
              Inquire
            </a>
            
            <button 
              className="lg:hidden p-2 -mr-2 text-[#1c1c18] dark:text-[#f3f0ea] relative z-[60]"
              onClick={() => setIsOpen(true)}
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-3xl transition-transform duration-300">
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#fcf9f3] dark:bg-slate-900 z-[70] transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        } lg:hidden flex flex-col items-center justify-center space-y-8 font-serif text-3xl`}
      >
        <button 
          className="absolute top-8 right-6 p-2 text-[#1c1c18] dark:text-[#f3f0ea]"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>

        <Link onClick={() => setIsOpen(false)} className="text-[#1c1c18] dark:text-[#f3f0ea] hover:text-[#0a4275] transition-colors" href="/#home">Home</Link>
        <Link onClick={() => setIsOpen(false)} className="text-[#1c1c18] dark:text-[#f3f0ea] hover:text-[#0a4275] transition-colors" href="/#about">About</Link>
        <Link onClick={() => setIsOpen(false)} className="text-[#1c1c18] dark:text-[#f3f0ea] hover:text-[#0a4275] transition-colors" href="/#hosting">Hosting</Link>
        <Link onClick={() => setIsOpen(false)} className="text-[#1c1c18] dark:text-[#f3f0ea] hover:text-[#0a4275] transition-colors" href="/#marketing">Marketing</Link>
        <Link onClick={() => setIsOpen(false)} className="text-[#1c1c18] dark:text-[#f3f0ea] hover:text-[#0a4275] transition-colors" href="/#media">Media</Link>
        <Link onClick={() => setIsOpen(false)} className="text-[#1c1c18] dark:text-[#f3f0ea] hover:text-[#0a4275] transition-colors" href="/mc">MC Portfolio</Link>
        <Link onClick={() => setIsOpen(false)} className="text-[#1c1c18] dark:text-[#f3f0ea] hover:text-[#0a4275] transition-colors" href="/#research">Research</Link>
        <Link onClick={() => setIsOpen(false)} className="text-[#1c1c18] dark:text-[#f3f0ea] hover:text-[#0a4275] transition-colors" href="/cv">My CV</Link>
        
        <div className="pt-8 mt-8 border-t border-[#0a4275]/10 dark:border-white/10 w-2/3 text-center">
            <a onClick={() => setIsOpen(false)} href="https://www.facebook.com/vanan.nguyenthuy.1" target="_blank" rel="noopener noreferrer" className="blue-shimmer text-white px-12 py-4 rounded-sm font-semibold tracking-wide text-lg inline-block">
            Inquire Now
            </a>
        </div>
      </div>
    </>
  )
}
