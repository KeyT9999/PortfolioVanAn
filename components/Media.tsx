/* eslint-disable react/no-unescaped-entities */
export default function Media() {
  return (
    <section id="media" className="pt-32 pb-24">
      {/* Metrics & Outcomes */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-24">
        <div className="text-center mb-24">
          <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">The Outcomes</span>
          <h2 className="font-headline text-4xl md:text-5xl">Quantifying Excellence</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-outline-variant/20">
          <div className="bg-surface py-16 px-8 text-center group transition-colors hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-primary-container text-3xl mb-6 block">visibility</span>
            <div className="font-headline text-5xl mb-2">18K+</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-outline">Lượt tiếp cận tự nhiên</div>
          </div>
          <div className="bg-surface py-16 px-8 text-center group transition-colors hover:bg-surface-container-low border-x border-outline-variant/15">
            <span className="material-symbols-outlined text-primary-container text-3xl mb-6 block">groups</span>
            <div className="font-headline text-5xl mb-2">46</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-outline">Thành viên được dẫn dắt</div>
          </div>
          <div className="bg-surface py-16 px-8 text-center group transition-colors hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-primary-container text-3xl mb-6 block">favorite</span>
            <div className="font-headline text-5xl mb-2">100%</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-outline">CSR Integration</div>
          </div>
        </div>
      </div>
    </section>
  )
}
