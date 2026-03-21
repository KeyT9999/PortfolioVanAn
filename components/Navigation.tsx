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
      <nav className="fixed top-0 w-full z-40 bg-[#fffae7]/90 dark:bg-[#fffae7]/90 backdrop-blur-lg shadow-sm border-b border-blue-900/5 dark:border-white/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
          <div className="font-serif italic font-bold text-2xl text-[#011d45] dark:text-[#011d45] z-50 relative">
            <Link href="/">{title}</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-10 items-center font-serif text-lg tracking-tight">
            <Link className="font-bold text-[#011d45] dark:text-[#011d45] opacity-80 hover:opacity-100 hover:text-[#011d45] transition-colors duration-300" href="/#home">Home</Link>
            <Link className="font-bold text-[#011d45] dark:text-[#011d45] opacity-80 hover:opacity-100 hover:text-[#011d45] transition-colors duration-300" href="/#about">About</Link>
            <Link className="font-bold text-[#011d45] dark:text-[#011d45] opacity-80 hover:opacity-100 hover:text-[#011d45] transition-colors duration-300" href="/#skill">Skill</Link>
            <Link className="font-bold text-[#011d45] dark:text-[#011d45] opacity-80 hover:opacity-100 hover:text-[#011d45] transition-colors duration-300" href="/#marketing">Marketing</Link>
            <Link className="font-bold text-[#011d45] dark:text-[#011d45] opacity-80 hover:opacity-100 hover:text-[#011d45] transition-colors duration-300" href="/mc">MC</Link>
            <Link className="font-bold text-[#011d45] dark:text-[#011d45] opacity-80 hover:opacity-100 hover:text-[#011d45] transition-colors duration-300" href="/#research">Research</Link>
            <Link className="font-bold text-[#011d45] dark:text-[#011d45] opacity-80 hover:opacity-100 hover:text-[#011d45] transition-colors duration-300" href="/cv">My CV</Link>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <div className="hidden lg:flex items-start gap-8 pr-2 text-[#011d45]">
              <a
                href="tel:0986619798"
                className="flex flex-col leading-none transition-opacity duration-300 hover:opacity-70"
              >
                <span className="font-label text-[11px] font-bold tracking-[0.08em] uppercase">
                  Phone
                </span>
                <span className="mt-2 font-label text-sm font-medium tracking-[0.02em]">
                  0986 619 798
                </span>
              </a>
              <a
                href="mailto:nguyenthuyvanan05@gmail.com"
                className="flex flex-col leading-none transition-opacity duration-300 hover:opacity-70"
              >
                <span className="font-label text-[11px] font-bold tracking-[0.08em] uppercase">
                  Email
                </span>
                <span className="mt-2 font-label text-sm font-medium tracking-[0.01em]">
                  nguyenthuyvanan05@gmail.com
                </span>
              </a>
            </div>

            <a href="https://www.facebook.com/vanan.nguyenthuy.1" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block blue-shimmer text-[#011d45] px-8 py-2.5 rounded-sm font-bold tracking-wide text-sm scale-95 hover:scale-100 duration-200 ease-in-out">
              Inquire
            </a>
            
            <button 
              className="lg:hidden p-2 -mr-2 text-[#011d45] dark:text-[#011d45] relative z-[60]"
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
        className={`fixed inset-0 bg-[#fffae7] dark:bg-[#fffae7] z-[70] transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        } lg:hidden flex flex-col items-center justify-center space-y-8 font-serif text-3xl`}
      >
        <button 
          className="absolute top-8 right-6 p-2 text-[#011d45] dark:text-[#011d45]"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>

        <Link onClick={() => setIsOpen(false)} className="font-bold text-[#011d45] dark:text-[#011d45] hover:text-[#011d45] transition-colors" href="/#home">Home</Link>
        <Link onClick={() => setIsOpen(false)} className="font-bold text-[#011d45] dark:text-[#011d45] hover:text-[#011d45] transition-colors" href="/#about">About</Link>
        <Link onClick={() => setIsOpen(false)} className="font-bold text-[#011d45] dark:text-[#011d45] hover:text-[#011d45] transition-colors" href="/#skill">Skill</Link>
        <Link onClick={() => setIsOpen(false)} className="font-bold text-[#011d45] dark:text-[#011d45] hover:text-[#011d45] transition-colors" href="/#marketing">Marketing</Link>
        <Link onClick={() => setIsOpen(false)} className="font-bold text-[#011d45] dark:text-[#011d45] hover:text-[#011d45] transition-colors" href="/mc">MC Portfolio</Link>
        <Link onClick={() => setIsOpen(false)} className="font-bold text-[#011d45] dark:text-[#011d45] hover:text-[#011d45] transition-colors" href="/#research">Research</Link>
        <Link onClick={() => setIsOpen(false)} className="font-bold text-[#011d45] dark:text-[#011d45] hover:text-[#011d45] transition-colors" href="/cv">My CV</Link>

        <div className="flex flex-col items-center gap-5 pt-4 text-center">
          <a
            href="tel:0986619798"
            className="flex flex-col items-center text-[#011d45] transition-opacity duration-300 hover:opacity-70"
          >
            <span className="font-label text-[11px] font-bold uppercase tracking-[0.08em]">Phone</span>
            <span className="mt-2 text-base font-medium">0986 619 798</span>
          </a>
          <a
            href="mailto:nguyenthuyvanan05@gmail.com"
            className="flex flex-col items-center text-[#011d45] transition-opacity duration-300 hover:opacity-70"
          >
            <span className="font-label text-[11px] font-bold uppercase tracking-[0.08em]">Email</span>
            <span className="mt-2 text-base font-medium">nguyenthuyvanan05@gmail.com</span>
          </a>
        </div>
        
        <div className="pt-8 mt-8 border-t border-[#0a4275]/10 dark:border-white/10 w-2/3 text-center">
            <a onClick={() => setIsOpen(false)} href="https://www.facebook.com/vanan.nguyenthuy.1" target="_blank" rel="noopener noreferrer" className="blue-shimmer text-[#011d45] px-12 py-4 rounded-sm font-bold tracking-wide text-lg inline-block">
            Inquire Now
            </a>
        </div>
      </div>
    </>
  )
}
