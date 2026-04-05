import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ReviewSachPage() {
  return (
    <main className="min-h-screen bg-[#fffae7] text-[#1c1c18]">
      <Navigation />

      <div className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <div className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">
            <Link href="/#marketing" className="hover:text-primary transition-colors">Marketing</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary">Review Sách</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12 text-center">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Video Content & Review</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-4">
            Review Sách
          </h1>
          <p className="font-serif italic text-2xl text-on-surface-variant mb-6">Lan tỏa văn hóa đọc</p>
          <div className="inline-block border border-primary/20 bg-primary/5 text-primary px-6 py-2 rounded-sm font-label uppercase text-xs tracking-widest font-semibold">
            Danh hiệu: CÓC VIẾT ĐẠI HỌC FPT ĐÀ NẴNG 2024 VÀ 2025
          </div>
        </section>

        {/* Video Embedding */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-4 lg:p-8 rounded-lg flex justify-center items-center overflow-hidden">
              <div className="w-full max-w-[560px] aspect-video relative flex justify-center">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLIBRARY.FPTUDN%2Fvideos%2F1207656557723504%2F&show_text=false&width=560&t=0"
                  width="560"
                  height="314"
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>

            <div className="bg-surface-container-low p-4 lg:p-8 rounded-lg flex justify-center items-center overflow-hidden">
              <div className="w-full max-w-[560px] aspect-video relative flex justify-center">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLIBRARY.FPTUDN%2Fvideos%2F1617550322151972%2F&show_text=false&width=560&t=0" 
                  width="560" 
                  height="314" 
                  style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
