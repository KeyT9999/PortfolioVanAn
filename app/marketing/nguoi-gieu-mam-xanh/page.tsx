import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NguoiGieuMamXanhPage() {
  return (
    <main className="min-h-screen bg-[#fffae7] text-[#1c1c18]">
      <Navigation />

      <div className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <div className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">
            <Link href="/#marketing" className="hover:text-primary transition-colors">Marketing</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary">Người Gieo Mầm Xanh</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Case Study 02 · Tháng 06 – 07/2025</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-4">
            Đạo Diễn Sản Xuất & PR
          </h1>
          <p className="font-serif italic text-2xl text-on-surface-variant mb-12">
            MV &ldquo;Người Gieo Mầm Xanh&rdquo;
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl border-t border-b border-outline-variant/20 py-10">
            {[
              { value: '18K', label: 'Lượt xem organic sau 1 tuần' },
              { value: '46', label: 'Nhân sự điều phối' },
              { value: '0đ', label: 'Ngân sách quảng cáo' },
            ].map((m) => (
              <div key={m.label}>
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">{m.value}</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-outline leading-tight">{m.label}</div>
              </div>
            ))}
          </div>

          {/* MV Video Embed */}
          <div className="mt-16">
            <div className="relative w-full overflow-hidden rounded-sm shadow-2xl bg-black" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61578641312178%2Fvideos%2F1257373838838121%2F&show_text=false&width=560&t=0"
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none', overflow: 'hidden' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title="MV Người Gieo Mầm Xanh"
              />
              <div className="absolute bottom-4 left-6 text-white pointer-events-none">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] bg-black/40 backdrop-blur-sm px-2 py-1 rounded">MV Chính thức</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/watch/?v=1257373838838121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 blue-shimmer text-white px-8 py-3 rounded-sm font-label text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                <span className="material-symbols-outlined text-base">play_circle</span>
                Xem MV trên Facebook
              </a>
            </div>
          </div>
        </section>

        {/* Banner Truyền thông */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-8 mt-4">
          <div className="relative w-full aspect-[21/9] md:aspect-[4/1] rounded-sm overflow-hidden group">
            <img src="/Marketing/Thumbnail.png" alt="Chi tiết phương tiện truyền thông" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-white font-serif text-3xl md:text-5xl mb-6 shadow-sm">Chiến dịch Truyền thông</h3>
              <Link href="/marketing/nguoi-gieu-mam-xanh/truyen-thong" className="inline-flex items-center gap-2 bg-white text-[#1c1c18] px-8 py-3 rounded-sm font-label text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-xl">
                Xem chi tiết bài đăng <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>


        {/* 1. Mô tả dự án */}
        <section className="bg-surface-container-low py-8 mb-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4">
                <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">01</h2>
                <h3 className="font-serif text-3xl">Mô tả dự án</h3>
              </div>
              <div className="lg:col-span-8 space-y-5 font-body text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Đây là hành trình <strong className="text-on-surface font-medium">phim âm nhạc kết hợp thiện nguyện</strong>, nhằm tôn vinh những giáo viên gieo chữ tại Nam Trà My. Dự án được xây dựng để lan tỏa thông điệp tử tế, đồng thời kêu gọi sự ủng hộ từ cộng đồng cho trẻ em vùng cao.
                </p>
                <p>
                  Chiến lược PR dựa trên sức mạnh của <strong className="text-on-surface font-medium">sự chân thực</strong>, giúp chạm đến trái tim của hàng ngàn khán giả mà không cần bất kỳ ngân sách quảng cáo nào.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Vai trò cá nhân */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">02</h2>
              <h3 className="font-serif text-3xl">Vai trò cá nhân</h3>
              <p className="text-on-surface-variant text-sm mt-4 leading-relaxed">Đạo diễn Sản xuất & PR Chiến lược</p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {[
                {
                  icon: 'movie',
                  title: 'Đạo diễn Sản xuất',
                  desc: 'Trực tiếp quản trị đội ngũ gồm 46 nhân sự, bao gồm cả ê-kíp chuyên môn lẫn tình nguyện viên. Dẫn dắt tập thể giữa địa hình hiểm trở đòi hỏi một cái đầu lạnh, cùng một trái tim đủ ấm.',
                },
                {
                  icon: 'gavel',
                  title: 'Kỷ luật & Thấu cảm',
                  desc: 'Dùng kỷ luật thép để đảm bảo tiến độ, nhưng luôn dùng sự thấu cảm mềm mỏng để giữ lửa cho đồng đội. Xử lý các quy trình giấy tờ chuyên nghiệp, cùng vấn đề bản quyền âm nhạc và hậu kỳ.',
                },
                {
                  icon: 'campaign',
                  title: 'Chiến lược PR',
                  desc: 'Xây dựng chiến lược PR thuần organic dựa trên storytelling chân thực. Kết quả: 18.000 lượt xem sau một tuần mà không cần bất kỳ ngân sách quảng cáo nào.',
                },
              ].map((role) => (
                <div key={role.title} className="flex items-start gap-6 pl-6 py-2 border-l-2 border-primary rounded-sm">
                  <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-0.5">{role.icon}</span>
                  <div>
                    <h4 className="font-headline text-xl mb-2">{role.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Công cụ & Phương pháp */}
        <section className="bg-surface-container-low py-8 mb-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4">
                <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">03</h2>
                <h3 className="font-serif text-3xl">Công cụ & Phương pháp</h3>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: 'auto_stories', name: 'Storytelling', desc: 'Tư duy kể chuyện – cốt lõi của toàn bộ chiến lược' },
                    { icon: 'campaign', name: 'Strategic PR', desc: 'PR chiến lược thuần organic, không ngân sách quảng cáo' },
                    { icon: 'edit_note', name: 'Quản trị Hậu kỳ', desc: 'Xử lý bản quyền âm nhạc và quy trình hậu kỳ chuyên nghiệp' },
                  ].map((t) => (
                    <div key={t.name} className="p-6 bg-surface-container-lowest rounded-sm border border-outline-variant/10">
                      <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{t.icon}</span>
                      <div className="font-headline text-lg mb-2">{t.name}</div>
                      <div className="text-xs text-on-surface-variant leading-relaxed">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Kết quả */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">04</h2>
              <h3 className="font-serif text-3xl">Kết quả</h3>
            </div>
            <div className="lg:col-span-8 space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
              <p>
                MV đạt <strong className="text-on-surface font-medium">18.000 lượt xem tự nhiên sau một tuần</strong>, mà không cần bất kỳ ngân sách quảng cáo nào. Dự án tạo sức lan tỏa mạnh mẽ trên mạng xã hội, nhận được sự đồng cảm sâu sắc từ cộng đồng.
              </p>
              <p>
                Sự thành công này là minh chứng cho tinh thần dấn thân, cùng khả năng <em>kết nối tập thể vô điều kiện</em>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {[
                  { value: '18.000', label: 'Lượt xem tự nhiên', sublabel: 'Sau 1 tuần ra mắt' },
                  { value: '46', label: 'Nhân sự', sublabel: 'Ê-kíp & tình nguyện viên' },
                  { value: '0đ', label: 'Ngân sách quảng cáo', sublabel: 'Hoàn toàn organic' },
                ].map((r) => (
                  <div key={r.label} className="border-l-2 border-primary pl-6">
                    <div className="font-serif text-4xl text-on-surface mb-1">{r.value}</div>
                    <div className="font-semibold text-on-surface text-sm">{r.label}</div>
                    <div className="text-xs text-on-surface-variant mt-1">{r.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hình ảnh & Links */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/drive/folders/1kFS7Isq83CpFIj_eCSTwxzd0jBZOzgTp?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-outline-variant px-8 py-3 rounded-sm font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-base">folder_open</span>
              Hình ảnh & Tài liệu Dự án (Drive)
            </a>
          </div>
        </section>

        {/* Bài học */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-8">
          <div className="bg-surface p-10 md:p-14 border border-outline-variant/20 rounded-sm relative">
            <span className="material-symbols-outlined absolute -top-4 left-8 text-primary/20 text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-6">Tinh thần dự án</h4>
            <p className="font-serif italic text-xl text-on-surface-variant leading-relaxed max-w-4xl">
              Dẫn dắt 46 người giữa núi rừng Nam Trà My, mình học được rằng leadership không phải là biết tất cả — mà là biết giữ lửa cho những người xung quanh khi mọi thứ khó khăn nhất.
            </p>
            <cite className="mt-8 block font-label text-xs uppercase tracking-widest text-primary not-italic">Vân An — Đạo diễn Sản xuất</cite>
          </div>
        </section>

        {/* Back */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-12">
          <Link href="/#marketing" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Quay lại Marketing
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
