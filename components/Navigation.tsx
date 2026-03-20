import Link from 'next/link'

export default function Navigation({ title = "Vân An" }: { title?: string }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-sm border-b border-blue-900/5 dark:border-white/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
        <div className="font-serif italic text-2xl text-[#1c1c18] dark:text-[#f3f0ea]">
          <Link href="/">{title}</Link>
        </div>
        <div className="hidden md:flex gap-10 items-center font-serif text-lg tracking-tight">
          <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#6ba3d6] transition-colors duration-300" href="/#home">Home</Link>
          <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#6ba3d6] transition-colors duration-300" href="/#about">About</Link>
          <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#6ba3d6] transition-colors duration-300" href="/#hosting">Hosting</Link>
          <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#6ba3d6] transition-colors duration-300" href="/#marketing">Marketing</Link>
          <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#6ba3d6] transition-colors duration-300" href="/#media">Media</Link>
          <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#6ba3d6] transition-colors duration-300" href="/mc">MC</Link>
          <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#6ba3d6] transition-colors duration-300" href="/#research">Research</Link>
          <Link className="text-[#1c1c18] dark:text-[#f3f0ea] opacity-80 hover:opacity-100 hover:text-[#6ba3d6] transition-colors duration-300" href="/cv">My CV</Link>
        </div>
        <a href="https://www.facebook.com/vanan.nguyenthuy.1" target="_blank" rel="noopener noreferrer" className="blue-shimmer text-white px-8 py-2.5 rounded-sm font-semibold tracking-wide text-sm scale-95 hover:scale-100 duration-200 ease-in-out inline-block">
          Inquire
        </a>
      </div>
    </nav>
  )
}
