/* eslint-disable react/no-unescaped-entities */
export default function Hosting() {
  return (
    <section id="hosting" className="pt-32 mb-32">
      {/* Hero Section: Mastery Statement */}
      <div className="px-6 md:px-12 mb-32 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">Bản lĩnh sân khấu</span>
            <h1 className="font-headline text-5xl lg:text-7xl md:text-5xl lg:text-8xl tracking-tighter leading-none mb-8">
              4 Năm <br/><i className="font-serif italic">Tôi Luyện.</i>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm">
              Điều hành sân khấu với sự chước mực của Marketing và thần thái chưán bực. Từ những buổi tinh việc nhỏ đến các sự kiện quy mô nghìn người.
            </p>
          </div>
        </div>
      </div>

      {/* Metric Highlights */}
      <div className="bg-surface-container-low py-24 mb-32">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 md:gap-12">
            <div className="text-center md:text-left">
              <span className="font-headline text-6xl block mb-2 text-primary">4+</span>
              <span className="font-label uppercase tracking-widest text-xs opacity-60">Năm kinh nghiệm chuyên nghiệp</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-headline text-6xl block mb-2 text-primary">50+</span>
              <span className="font-label uppercase tracking-widest text-xs opacity-60">Sự kiện lớn đã dẫn chương trình</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-headline text-6xl block mb-2 text-primary">3000+</span>
              <span className="font-label uppercase tracking-widest text-xs opacity-60">Khán giả đông nhất</span>
            </div>
          </div>
        </div>
      </div>



      {/* Gallery Grid */}
      <div className="py-16 px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">Kho lưu trữ</span>
            <h2 className="font-headline text-4xl italic">Những khoảnh khắc định hình tôi</h2>
          </div>
          <div className="hidden md:block">
            <p className="text-on-surface-variant max-w-xs text-sm italic">&quot;Sân khấu không chỉ là nơi đứng — đó là không gian thiêng liêng của sự kết nối.&quot;</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 md:row-span-2 aspect-square md:aspect-auto overflow-hidden bg-surface-container-low">
            <img alt="Vân An tại RESCONNECT 2025" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={encodeURI('/RESCONNECT 2025/ChuHai-00464_Original.JPG')} />
          </div>
          <div className="aspect-square overflow-hidden bg-surface-container-low">
            <img alt="MC Thảm đỏ Lễ Tôn Vinh" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={encodeURI('/MC Thảm đỏ Lễ Tôn Vinh/IMG_3001.JPG')} />
          </div>
          <div className="aspect-square overflow-hidden bg-surface-container-low">
            <img alt="Biểu diễn nghệ thuật 20-11" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={encodeURI('/Biểu diễn nghệ thuật 20-11/IMG_2134.JPG')} />
          </div>
          <div className="lg:col-span-2 aspect-video md:aspect-auto overflow-hidden bg-surface-container-low">
            <img alt="Open Mic Event" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src={encodeURI('/Open Mic_/ChuHai-00168_Original.JPG')} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="pb-48 px-6 md:px-12 max-w-[1920px] mx-auto text-center">
        <div className="max-w-2xl mx-auto py-24 border-y border-outline-variant/15">
          <h2 className="font-headline text-5xl mb-8">Sẵn sàng cho buổi trình diễn tiếp theo?</h2>
          <p className="text-on-surface-variant mb-12">Sẵn sàng nhận lịch sự kiện doanh nghiệp, hội nghị, và các buổi lễ trang trọng trong và ngoài nước.</p>
          <button className="blue-shimmer text-white px-12 py-4 rounded-sm font-semibold tracking-[0.1em] uppercase text-xs hover:shadow-xl transition-shadow">
            Kiểm tra lịch trống
          </button>
        </div>
      </div>
    </section>
  )
}
