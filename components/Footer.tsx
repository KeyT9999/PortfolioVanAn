export default function Footer() {
  return (
    <footer className="w-full border-t border-[#d1c5b4]/15 bg-[#fffae7]">
      <div className="flex w-full flex-col items-center gap-8 px-4 py-24 text-center">
        <div className="font-serif text-xl italic text-[#1c1c18]">Vân An</div>

        <div className="flex flex-wrap justify-center gap-10 font-sans text-xs uppercase tracking-[0.1rem]">
          <a
            className="text-[#1c1c18] transition-all duration-500 hover:tracking-widest"
            href="https://www.linkedin.com/in/nguy%E1%BB%85n-thu%E1%BB%B3-v%C3%A2n-an-88108a30b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-[#1c1c18] transition-all duration-500 hover:tracking-widest"
            href="https://www.facebook.com/vanan.nguyenthuy.1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="text-[#1c1c18] transition-all duration-500 hover:tracking-widest"
            href="https://zalo.me/0986619798"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 text-[#1c1c18] md:flex-row md:gap-16">
          <a
            href="tel:0986619798"
            className="flex flex-col items-center transition-opacity duration-300 hover:opacity-70"
          >
            <span className="font-label text-[11px] font-bold uppercase tracking-[0.12rem]">
              Phone
            </span>
            <span className="mt-2 text-sm font-medium tracking-[0.03rem]">
              0986 619 798
            </span>
          </a>

          <a
            href="mailto:nguyenthuyvanan05@gmail.com"
            className="flex flex-col items-center transition-opacity duration-300 hover:opacity-70"
          >
            <span className="font-label text-[11px] font-bold uppercase tracking-[0.12rem]">
              Email
            </span>
            <span className="mt-2 break-all text-sm font-medium tracking-[0.01rem]">
              nguyenthuyvanan05@gmail.com
            </span>
          </a>
        </div>

        <p className="mt-8 font-sans text-xs uppercase tracking-[0.1rem] text-[#0a4275]">
          © 2026 Vân An. Where the heart is, there lies the treasure.
        </p>
      </div>
    </footer>
  )
}
