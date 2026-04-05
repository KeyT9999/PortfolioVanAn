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

        {/* Video Embedding & Content */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 space-y-12">
          
          {/* Video 1 */}
          <div className="bg-surface-container-low rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 p-4 lg:p-8 flex justify-center items-center">
                <div className="w-full max-w-[560px] aspect-video relative flex justify-center bg-surface-container-high rounded-md overflow-hidden">
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
              
              <div className="lg:col-span-7 px-6 pb-8 lg:py-10 lg:pr-10">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-sm text-xs font-semibold tracking-wider uppercase mr-3">Bài dự thi số 86</span>
                  <span className="text-on-surface-variant font-label text-sm uppercase">44K lượt xem · 304 cảm xúc · 57 lượt chia sẻ</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-2 text-on-surface">Tuổi thơ dữ dội</h2>
                <details className="group cursor-pointer">
                  <summary className="list-none flex items-center gap-2 font-label text-sm uppercase tracking-widest text-[#1877F2] font-semibold hover:opacity-80 transition-opacity w-max mb-2">
                    <span className="group-open:hidden">Xem thêm nội dung review</span>
                    <span className="hidden group-open:inline">Thu gọn</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-open:-rotate-180">expand_more</span>
                  </summary>
                  <div className="mt-4 space-y-4 font-body text-base text-on-surface-variant leading-relaxed pb-4">
                    <p><strong>Có một viên ngọc quý mà thời gian dành riêng để ban tặng con người, đó là Tuổi thơ.</strong> Viên ngọc màu nhiệm, trong sáng nhưng quá mong manh, không thể tìm thấy lần thứ hai trong đời. Và có một thế hệ người Việt chưa bao giờ được cầm viên ngọc trên tay, Tuổi thơ dữ dội của Phùng Quán được viết cho thế hệ đó.</p>
                    <p>Trong dòng chảy của văn học cách mạng Việt Nam, Tuổi Thơ Dữ Dội của Phùng Quán là một viên đá lấp lánh – được mài dũa từ khói súng, nước mắt và trái tim những đứa trẻ anh hùng. Cuốn sách ấy, không chỉ khắc họa cuộc kháng chiến khốc liệt bằng súng đạn, mà còn viết nên một bản hùng ca tuổi thơ – nơi những cậu bé chỉ mới 13, 14 tuổi đã cầm súng, truyền tin, hy sinh như những người lính trưởng thành.</p>
                    <p>Bởi trong đó, có tiếng cười hồn nhiên, những trò chọi dế, bắn chim… Nhưng cũng có máu, có nước mắt, có cả một Huế ngùn ngụt chiến tranh – được nhìn qua ánh mắt ngơ ngác mà kiêu hãnh của những chiến sĩ nhỏ tuổi.</p>
                    <p className="font-serif italic text-lg border-l-2 border-primary/50 pl-4 my-6 text-on-surface">Đọc sách, người ta rơi nước mắt. Nhưng không phải vì thương. Mà vì biết ơn. Vì giữa những dòng văn ấy – là nhịp tim rực cháy của một thế hệ chưa kịp lớn…</p>
                  </div>
                </details>
                
                <a href="https://www.facebook.com/reel/1207656557723504" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-md font-semibold tracking-wide hover:bg-[#166FE5] transition-colors hover:shadow-md">
                  <span className="material-symbols-outlined text-xl">play_circle</span>
                  <span>Xem Video trên Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-surface-container-low rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 p-4 lg:p-8 flex justify-center items-center">
                <div className="w-full max-w-[560px] aspect-video relative flex justify-center bg-surface-container-high rounded-md overflow-hidden">
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
              
              <div className="lg:col-span-7 px-6 pb-8 lg:py-10 lg:pr-10">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-sm text-xs font-semibold tracking-wider uppercase mr-3">Bài dự thi số 61 - 62</span>
                  <span className="text-on-surface-variant font-label text-sm uppercase">54K lượt xem · 284 cảm xúc · 105 lượt chia sẻ</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-2 text-on-surface">Một đời như kẻ tìm đường</h2>
                <details className="group cursor-pointer">
                  <summary className="list-none flex items-center gap-2 font-label text-sm uppercase tracking-widest text-[#1877F2] font-semibold hover:opacity-80 transition-opacity w-max mb-2">
                    <span className="group-open:hidden">Xem thêm nội dung review</span>
                    <span className="hidden group-open:inline">Thu gọn</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-open:-rotate-180">expand_more</span>
                  </summary>
                  <div className="mt-4 space-y-4 font-body text-base text-on-surface-variant leading-relaxed pb-4">
                    <p>Nhịp của mỗi người trong cuộc sống là khác nhau vì vậy đừng bao giờ nhìn vào sự thành công của người khác mà cảm giáo sư tủi thân tự trách chính mình. Quan trọng là đừng bao giờ bỏ cuộc và biết mình ở đâu, nhịp của bản thân như thế nào.</p>
                    <p>Cuốn sách “Một đời như kẻ tìm đường” nghiêng hẳn về triết lý sống. Sách được viết bởi Giáo Sư Phan Văn Trường, một người khao khát tìm tòi những đường hướng tốt để đi, mong muốn tặng lại những người trẻ đang khát khao cũng tìm kiếm hướng đi đúng đời mình.</p>
                    <p>Thầy ngày xưa với biết bao nhiêu thiếu thốn trong cuộc sống như tiền bạc vật chất, ăn uống nhưng giáo sư đều vượt qua hết, thế thì tại sao chúng ta không bỏ công tìm thông tin, kiến thức trên internet để hoàn thiện mình. Thầy cũng có đôi lời gửi gắm tới các vị phụ huynh: thương con, mong con trưởng thành là đúng nhưng cách ta làm mới là điều quan trọng.</p>
                    <p className="font-serif italic text-lg border-l-2 border-primary/50 pl-4 my-6 text-on-surface">&quot;Có lẽ, triết lý thấm nhuần nhất là: Không có độ tuổi nào &apos;già&apos;. Điều quan trọng ở đây là chúng ta cần cố gắng để giấc mơ chèn ép thực tế, để trí tưởng tượng vượt qua kiến thức, để niềm hy vọng xoá nhoà trải nghiệm.&quot;</p>
                  </div>
                </details>
                
                <a href="https://www.facebook.com/reel/1617550322151972" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-md font-semibold tracking-wide hover:bg-[#166FE5] transition-colors hover:shadow-md">
                  <span className="material-symbols-outlined text-xl">play_circle</span>
                  <span>Xem Video trên Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
