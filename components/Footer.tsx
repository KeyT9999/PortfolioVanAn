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
            Liên hệ
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 text-[#1c1c18] md:flex-row md:gap-16 font-sans">
          <a
            href="tel:0986619798"
            className="flex flex-col items-center transition-all duration-500 hover:tracking-[0.15rem]"
          >
            <span className="text-xs uppercase tracking-[0.1rem] mb-2">
              Điện thoại
            </span>
            <span className="text-xs tracking-[0.1rem]">
              0986 619 798
            </span>
          </a>

          <a
            href="mailto:nguyenthuyvanan05@gmail.com"
            className="flex flex-col items-center transition-all duration-500 hover:tracking-[0.15rem]"
          >
            <span className="text-xs uppercase tracking-[0.1rem] mb-2">
              Email
            </span>
            <span className="text-xs tracking-[0.1rem] break-all">
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
