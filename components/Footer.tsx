export default function Footer() {
  return (
    <footer className="bg-[#f6f3ed] dark:bg-stone-800 w-full border-t border-[#d1c5b4]/15">
      <div className="flex flex-col items-center gap-8 py-24 px-4 w-full text-center">
        <div className="font-serif italic text-xl text-[#1c1c18] dark:text-[#f3f0ea]">Vân An</div>
        <div className="flex flex-wrap justify-center gap-10 font-sans uppercase tracking-[0.1rem] text-xs">
          <a className="text-[#1c1c18] dark:text-[#f3f0ea] hover:tracking-widest transition-all duration-500" href="#">LinkedIn</a>
          <a className="text-[#1c1c18] dark:text-[#f3f0ea] hover:tracking-widest transition-all duration-500" href="#">Instagram</a>
          <a className="text-[#1c1c18] dark:text-[#f3f0ea] hover:tracking-widest transition-all duration-500" href="#">Facebook</a>
          <a className="text-[#1c1c18] dark:text-[#f3f0ea] hover:tracking-widest transition-all duration-500" href="#">Contact</a>
        </div>
        <p className="font-sans uppercase tracking-[0.1rem] text-xs text-[#775a19] dark:text-[#c5a059] mt-8">
          © 2024 Vân An. Where the heart is, there lies the treasure.
        </p>
      </div>
    </footer>
  )
}
