/* eslint-disable react/no-unescaped-entities */
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

import Link from 'next/link'

import { projects } from './data'

export default function MCPage() {
  return (
    <main className="pt-32 bg-[#fcf9f3] text-[#1c1c18]">
      <Navigation title="MC Vân An" />

      {/* Section 1: Intro */}
      <section className="px-6 md:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-[#0a4275] mb-6 block">The Curated Host</span>
            <h1 className="font-serif text-6xl md:text-8xl text-[#1c1c18] leading-tight mb-8">
              MC <span className="italic font-normal">VÂN AN</span>
            </h1>
            <div className="max-w-xl space-y-6 text-[#4e4639] leading-relaxed text-lg">
              <p className="font-serif italic text-2xl text-[#1c1c18]">"Kính chào Quý Đối tác và Quý Anh Chị,"</p>
              <p>
                MC được đào tạo nền tảng truyền thông, tập trung kết nối cảm xúc, truyền tải thông điệp tinh tế. Tôi tin rằng mỗi sân khấu là một câu chuyện cần được kể bằng cả sự chân thành và chuyên nghiệp.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-1 border border-[#d1c5b4]/30 text-xs font-label uppercase tracking-widest">Hội thảo</span>
                <span className="px-4 py-1 border border-[#d1c5b4]/30 text-xs font-label uppercase tracking-widest">Gala</span>
                <span className="px-4 py-1 border border-[#d1c5b4]/30 text-xs font-label uppercase tracking-widest">Vinh danh</span>
                <span className="px-4 py-1 border border-[#d1c5b4]/30 text-xs font-label uppercase tracking-widest">Tọa đàm</span>
                <span className="px-4 py-1 border border-[#d1c5b4]/30 text-xs font-label uppercase tracking-widest">Host đêm nhạc</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] bg-[#f0eee8] overflow-hidden rounded-sm">
              <img className="w-full h-full object-cover" alt="Professional MC portrait" src={encodeURI('/Ảnh đẹp để giới thiệu/IMG_5511.JPG')}/>
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-[#fcf9f3] shadow-sm border border-[#d1c5b4]/10 max-w-[280px]">
              <p className="font-serif italic text-[#1c1c18] mb-2">Giá trị cốt lõi</p>
              <p className="text-sm text-[#4e4639]">Lắng nghe, thấu hiểu, dẫn dắt cảm xúc, biến áp lực thành năng lượng.</p>
            </div>
          </div>
        </div>
        <div className="mt-24 text-right">
          <p className="font-serif italic text-xl text-[#0a4275]">"Rất mong có cơ hội hợp tác cùng quý vị. Trân trọng,"</p>
        </div>
      </section>

      {/* Section 2: Personal Info & Education */}
      <section className="bg-[#f6f3ed] py-32 px-6 md:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="font-serif text-4xl mb-12">Profile &amp; <span className="italic">Expertise</span></h2>
              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <span className="text-[#0a4275] font-serif text-3xl">01</span>
                  <div>
                    <h4 className="font-label uppercase tracking-widest text-xs text-[#7f7667] mb-2">Thông tin cá nhân</h4>
                    <p className="text-lg font-medium">Giọng Nữ (miền Nam)</p>
                    <p className="text-[#4e4639]">Chiều cao: 1m62 | Cân nặng: 44kg</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <span className="text-[#0a4275] font-serif text-3xl">02</span>
                  <div>
                    <h4 className="font-label uppercase tracking-widest text-xs text-[#7f7667] mb-2">Học vấn</h4>
                    <p className="text-lg font-medium">Truyền thông đa phương tiện</p>
                    <p className="text-[#4e4639]">Đại học FPT Đà Nẵng</p>
                  </div>
                </div>
                <div className="flex items-start gap-8">
                  <span className="text-[#0a4275] font-serif text-3xl">03</span>
                  <div>
                    <h4 className="font-label uppercase tracking-widest text-xs text-[#7f7667] mb-2">Chứng nhận</h4>
                    <p className="text-lg font-medium">"MC Sự kiện Chuyên sâu 2025"</p>
                    <p className="text-[#4e4639]">ABC Entertainment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#e5e2dc] p-12 rounded-sm">
              <h3 className="font-serif text-2xl mb-6">Kỹ năng sân khấu</h3>
              <p className="text-[#4e4639] mb-8 leading-relaxed">
                Phong thái sân khấu bài bản được trui rèn qua nhiều môi trường chuyên nghiệp. Khả năng xử lý tình huống linh hoạt và kinh nghiệm dẫn dắt đa dạng các loại hình sự kiện từ trang trọng đến nghệ thuật.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#d1c5b4]/20 pb-2">
                  <span className="text-sm font-medium">Dẫn dắt cảm xúc</span>
                  <span className="material-symbols-outlined text-[#0a4275] text-sm">check_circle</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#d1c5b4]/20 pb-2">
                  <span className="text-sm font-medium">Xử lý tình huống</span>
                  <span className="material-symbols-outlined text-[#0a4275] text-sm">check_circle</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#d1c5b4]/20 pb-2">
                  <span className="text-sm font-medium">Biên tập kịch bản</span>
                  <span className="material-symbols-outlined text-[#0a4275] text-sm">check_circle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Projects Showcase (Updated to 12 projects) */}
      <section className="py-32 px-6 md:px-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-[#0a4275] mb-4 block">Portfolio</span>
            <h2 className="font-serif text-5xl italic">Dự án tiêu biểu</h2>
          </div>
          <p className="max-w-sm text-[#4e4639] text-sm leading-relaxed">Những khoảnh khắc rực rỡ trên sân khấu, nơi thông điệp được lan tỏa và cảm xúc được thăng hoa qua từng chương trình.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-[#f0eee8]">
                <img 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  alt={project.title} 
                  src={project.image} 
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-[#1c1c18]">{project.title}</h3>
                <p className="text-sm text-[#4e4639] italic font-serif">{project.role}</p>
                <Link className="inline-flex items-center text-xs uppercase tracking-widest font-label text-[#0a4275] hover:text-[#0a4275] transition-colors pt-2" href={`/mc/project/${project.slug}`}>
                  View Details <span className="material-symbols-outlined text-[14px] ml-2">north_east</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900 text-stone-100 text-center px-6">
        <span className="font-label text-xs uppercase tracking-[0.4em] text-sky-400 mb-6 block">Ready to Collaborate?</span>
        <h2 className="font-serif text-5xl md:text-6xl mb-12">Hãy cùng tạo nên những <br/><span className="italic font-normal">khoảnh khắc đáng nhớ.</span></h2>
        <a href="https://www.facebook.com/vanan.nguyenthuy.1" target="_blank" rel="noopener noreferrer" className="blue-shimmer inline-block text-white px-12 py-4 rounded-sm font-semibold tracking-widest text-sm hover:opacity-90 transition-all transform hover:-translate-y-1">
          LIÊN HỆ ĐẶT LỊCH NGAY
        </a>
      </section>
      
      <Footer />
    </main>
  )
}
