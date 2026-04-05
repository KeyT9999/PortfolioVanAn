/* eslint-disable react/no-unescaped-entities */
export default function Hosting() {
  return (
    <section id="hosting" className="pt-8 mb-8">
      {/* Hero Section: Mastery Statement */}
      <div className="px-6 md:px-12 mb-8 max-w-[1920px] mx-auto text-center">
        <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">Bản lĩnh sân khấu</span>
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none mb-8">
          4 Năm <br className="hidden md:block"/><i className="font-serif italic">Kinh Nghiệm.</i>
        </h1>
      </div>

      {/* Metric Highlights */}
      <div className="bg-surface-container-low py-8 mb-8">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 md:gap-12">
            <div className="text-center">
              <span className="font-headline text-4xl md:text-5xl block mb-2 text-primary">4+</span>
              <span className="font-label uppercase tracking-widest text-xs opacity-60">Năm kinh nghiệm chuyên nghiệp</span>
            </div>
            <div className="text-center">
              <span className="font-headline text-4xl md:text-5xl block mb-2 text-primary">50+</span>
              <span className="font-label uppercase tracking-widest text-xs opacity-60">Sự kiện lớn đã dẫn chương trình</span>
            </div>
            <div className="text-center">
              <span className="font-headline text-4xl md:text-5xl block mb-2 text-primary">3000+</span>
              <span className="font-label uppercase tracking-widest text-xs opacity-60">Khán giả đông nhất</span>
            </div>
          </div>
        </div>
      </div>



      {/* Gallery Grid */}
      <div className="py-8 px-6 md:px-12 max-w-[1920px] mx-auto mb-8">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">Kho lưu trữ</span>
            <h2 className="font-headline text-4xl italic">Những khoảnh khắc định hình tôi</h2>
          </div>
          <div className="hidden md:block">
            <p className="text-on-surface-variant max-w-xs text-sm italic">&quot;Sân khấu không chỉ là nơi đứng — đó là không gian thiêng liêng của sự kết nối.&quot;</p>
          </div>
        </div>
        {/* Row 1: Landscape lớn (2 cột) + Portrait (1 cột) + Portrait (1 cột) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
          {/* Ảnh 1: Landscape sự kiện lớn FPT — chiếm 2 cột */}
          <div className="lg:col-span-2 aspect-video overflow-hidden bg-surface-container-low">
            <img alt="Sự kiện quy mô lớn cùng FPT Schools" className="w-full h-full object-cover object-center transition-all duration-700" src={encodeURI('/VAN/624509358_122198634764573562_3428252542835663839_n.jpg')} />
          </div>
          {/* Ảnh 3: Portrait Vân An áo dài hồng */}
          <div className="aspect-[2/3] overflow-hidden bg-surface-container-low">
            <img alt="Vân An dẫn chương trình áo dài" className="w-full h-full object-cover object-top transition-all duration-700" src={encodeURI('/Triển Lãm tại công viên APEC/IMG_1865.JPG')} />
          </div>
          {/* Ảnh 2: Portrait chụp studio */}
          <div className="aspect-[3/4] overflow-hidden bg-surface-container-low">
            <img alt="Vân An cùng đồng nghiệp" className="w-full h-full object-cover object-top transition-all duration-700" src={encodeURI('/Host/att.RoXaBf5dbCu7ITZpIsYoMgAazZK9G-5PCkU98q0Op4M.jpg')} />
          </div>
        </div>
        {/* Row 2: Panoramic full width */}
        <div className="w-full overflow-hidden bg-surface-container-low" style={{height: '260px'}}>
          <img alt="Open Mic — Khoảnh khắc kết nối cùng hàng trăm khán giả" className="w-full h-full object-cover object-center transition-all duration-700" src={encodeURI('/Open Mic_/ChuHai--2_Original.JPG')} />
        </div>
      </div>


    </section>
  )
}
