import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import CampaignSlider from '@/components/CampaignSlider'

export default function PhuongDoiPage() {
  return (
    <main className="min-h-screen bg-[#fffae7] text-[#1c1c18]">
      <Navigation />

      <div className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <div className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">
            <Link href="/#marketing" className="hover:text-primary transition-colors">Marketing</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-primary">Nhà Hàng Phương Dội</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Case Study 01 · 06/2025 – Hiện tại</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-4">
            Quản Trị Thương Hiệu & Vận Hành F&B
          </h1>
          <p className="font-serif italic text-2xl text-on-surface-variant mb-12">Nhà Hàng Phương Dội</p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl border-t border-b border-outline-variant/20 py-10">
            {[
              { value: '700M', label: 'Doanh thu tháng đầu (VNĐ)' },
              { value: '+28%', label: 'Tăng trưởng (350M → 450M)' },
              { value: '223', label: 'Thành viên Zalo OA' },
            ].map((m) => (
              <div key={m.label}>
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">{m.value}</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-outline leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 1. Mô tả dự án */}
        <section className="bg-surface-container-low py-20 mb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4">
                <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">01</h2>
                <h3 className="font-serif text-3xl mb-0">Mô tả dự án</h3>
              </div>
              <div className="lg:col-span-8 space-y-5 font-body text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Dự án tập trung vào việc <strong className="text-on-surface font-medium">xây dựng nền tảng thương hiệu</strong> và chuẩn hóa quy trình vận hành cho nhà hàng ngay từ giai đoạn ra mắt. Mục tiêu cốt lõi là chinh phục nhóm khách hàng trung niên (<strong className="text-on-surface font-medium">từ 30–40 và 40–55 tuổi</strong>) – những người ưu tiên sự tinh tế, tin cậy và chất lượng dịch vụ chuẩn mực.
                </p>
                <p>
                  Mình đóng vai trò là người kết nối giá trị cốt lõi của nhà hàng với nhu cầu thực tế của khách hàng thông qua các chiến lược truyền thông và điểm chạm dịch vụ trực tiếp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Vai trò cá nhân */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">02</h2>
              <h3 className="font-serif text-3xl">Vai trò cá nhân</h3>
              <p className="text-on-surface-variant text-sm mt-4 leading-relaxed">Nhiệm vụ & Sự dấn thân</p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {[
                {
                  icon: 'campaign',
                  title: 'Chiến lược & Nội dung',
                  desc: 'Nghiên cứu tâm lý khách hàng trung niên để phát triển USPs và duy trì 5–6 bài đăng mỗi tuần trên mạng xã hội theo phong cách kể chuyện (Storytelling) chân thực.',
                },
                {
                  icon: 'manage_accounts',
                  title: 'Quản trị Vận hành',
                  desc: 'Trực tiếp thiết kế và thực hiện các chương trình đào tạo kỹ năng phục vụ hàng tuần cho nhân viên, nỗ lực chuẩn hóa trải nghiệm khách hàng tại điểm chạm.',
                },
                {
                  icon: 'handshake',
                  title: 'Đối ngoại & B2B',
                  desc: 'Đảm nhiệm việc đàm phán, quản lý hợp đồng với các đơn vị lữ hành và đối tác sự kiện, đồng thời hoàn thiện các quy trình paperwork chuyên môn.',
                },
              ].map((role) => (
                <div key={role.title} className="flex items-start gap-6 p-8 bg-surface-container-lowest border-l-2 border-primary rounded-sm">
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
        <section className="bg-surface-container-low py-20 mb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4">
                <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">03</h2>
                <h3 className="font-serif text-3xl">Công cụ & Phương pháp</h3>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-outline mb-6">Công cụ quản lý</h4>
                  <div className="space-y-4">
                    {[
                      { icon: 'monitoring', name: 'Meta Business Suite', desc: 'Quản trị nội dung' },
                      { icon: 'forum', name: 'Zalo OA', desc: 'Chăm sóc cộng đồng' },
                      { icon: 'description', name: 'Microsoft Office', desc: 'Xử lý dữ liệu và văn bản' },
                    ].map((t) => (
                      <div key={t.name} className="flex items-center gap-4">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-sm">
                          <span className="material-symbols-outlined text-primary text-lg">{t.icon}</span>
                        </div>
                        <div>
                          <div className="font-medium text-on-surface text-sm">{t.name}</div>
                          <div className="text-xs text-on-surface-variant">{t.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-label text-xs uppercase tracking-widest text-outline mb-6">Phương pháp thực chiến</h4>
                  <div className="space-y-4">
                    {[
                      { icon: 'psychology', name: 'Customer Insight Research', desc: 'Phân tích nhu cầu nhóm khách 30–55 tuổi' },
                      { icon: 'diversity_3', name: 'Community Nurturing', desc: 'Xây dựng mối quan hệ tin tưởng thay vì quảng cáo đại trà' },
                      { icon: 'analytics', name: 'Market Analysis', desc: 'Phân tích biến động để điều chỉnh chiến lược kịp thời' },
                    ].map((t) => (
                      <div key={t.name} className="flex items-center gap-4">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-sm">
                          <span className="material-symbols-outlined text-primary text-lg">{t.icon}</span>
                        </div>
                        <div>
                          <div className="font-medium text-on-surface text-sm">{t.name}</div>
                          <div className="text-xs text-on-surface-variant">{t.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Kết quả */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">04</h2>
              <h3 className="font-serif text-3xl">Kết quả đạt được</h3>
              <p className="text-on-surface-variant text-sm mt-4 leading-relaxed">Sự nỗ lực của cả tập thể</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '700M VNĐ', label: 'Sự đón nhận từ thị trường', desc: 'Doanh thu trong tháng đầu tiên ra mắt thương hiệu.' },
                { value: '+28%', label: 'Phục hồi tăng trưởng', desc: 'Doanh thu tăng từ 350 triệu lên 450 triệu VNĐ qua lắng nghe khách hàng.' },
                { value: '223', label: 'Gắn kết cộng đồng', desc: 'Thành viên Zalo hoạt động tích cực trong độ tuổi mục tiêu.' },
              ].map((r) => (
                <div key={r.label} className="border-l-2 border-primary pl-6">
                  <div className="font-serif text-4xl text-on-surface mb-2">{r.value}</div>
                  <div className="font-semibold text-on-surface text-sm mb-2">{r.label}</div>
                  <div className="text-xs text-on-surface-variant leading-relaxed">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bài học */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20">
          <div className="bg-surface p-10 md:p-14 border border-outline-variant/20 rounded-sm relative">
            <span className="material-symbols-outlined absolute -top-4 left-8 text-primary/20 text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-6">Bài học đúc kết</h4>
            <div className="space-y-5 font-serif italic text-xl text-on-surface-variant leading-relaxed max-w-4xl">
              <p>10 tháng với vị trí này, là một người thầy lớn đối với mình. Những kiến thức sách vở vốn không màu hồng, bởi thực tế luôn đi kèm thử thách.</p>
              <p>Mình đã học được cách <span className="text-on-surface not-italic font-medium">quản trị nhân sự</span>, biết lúc nào cần cứng rắn hay mềm mỏng. Nghề làm dâu trăm họ rèn luyện cho mình sự tỉ mỉ, cùng lòng trắc ẩn sâu sắc.</p>
              <p>Khi thấu hiểu nhóm khách hàng trung niên, <em>kho báu nhận lại chính là niềm tin bền vững</em>.</p>
            </div>
            <cite className="mt-8 block font-label text-xs uppercase tracking-widest text-primary not-italic">Vân An — Bài học thực chiến</cite>
          </div>
        </section>

        {/* Chiến dịch */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
          <h3 className="font-serif text-3xl mb-10">Một số chiến dịch đã thực hiện</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CampaignSlider
              label="29/08 – 02/09/2025"
              title="Rực Rỡ Ngày Độc Lập"
              description="Chiến dịch truyền thông chào mừng Lễ Độc Lập với chuỗi nội dung cảm xúc và hình ảnh đậm chất dân tộc."
              facebookUrl="https://www.facebook.com/PhuongDoiQuan"
              links={[
                { title: 'Bài viết 1 - Phần 1', url: 'https://www.facebook.com/photo.php?fbid=122132257652857159&set=a.122110481468857159&type=3' },
                { title: 'Bài viết 1 - Phần 2', url: 'https://www.facebook.com/photo.php?fbid=122132257898857159&set=a.122106119672857159&type=3' },
                { title: 'Bài viết 2', url: 'https://fb.watch/GghIN0MYxk/?' },
                { title: 'Bài viết 3', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02Rcnv2JxnzrfpUQ9ECG4yvKhbQbijqnv8YZbFJjtN5dSQ4BvcRnqf94mHZESQtmsMl&id=61575714796374' },
                { title: 'Bài viết 4', url: 'https://m.facebook.com/story.php?story_fbid=pfbid035JddRULrUNiUVgLE3Ym4adRSh22YFcdW2gYNNq6KPcbcyGdXXqF6Sx4zBZoxZh9ql&id=61575714796374' },
                { title: 'Bài viết 5', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0qqnFqctS4fB43FgWP4x6XrE5k6q9eHnnsLMuDEYYe9XYEg7a882sB5YbVpgp4FUMl&id=61575714796374' },
                { title: 'Bài viết 6', url: 'https://fb.watch/GghM1ZLslN/?' },
                { title: 'Bài viết 7', url: 'https://fb.watch/GghMSiH52H/?' },
                { title: 'Bài viết 8', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0H7VTN5ixz5XN9FZm1DFBVMXkuw8fudPMBhkaAyKjuW1Dpg5N6CwKpiW5EmaUHy8Ul&id=61575714796374' },
                { title: 'Bài viết 9', url: 'https://fb.watch/GghOow42sg/?' },
                { title: 'Bài viết 10', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0aCnqeTp9xHg2qpBYJcomKEdyjcRyMFQedCartWRk4FnHVqEUBWqBhe8ouf6sD7Npl&id=61575714796374' },
              ]}
              images={[
                { src: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/540467929_122133753620857159_232865191147215737_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFkWOd_q6StmRvqsadBYbF9F0togpME_7EXS2iCkwT_sZ4zileU49yx2Ke5weBZ8DT1VNsJBTuwifcIcCOnavIn&_nc_ohc=XdnhuHOXijIQ7kNvwGBWKPu&_nc_oc=AdrCnIjsmm2qfl0uQfxHorAbfYKE-GFxVD1a9skroqO5MBU9T7AdRaD965SpEfgGFSY&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=yVJoTLe0CAla0jzAgzpoQg&_nc_ss=7a3a8&oh=00_Af1XfnvYpXhVOt8tDvavov9hVUI2iCWRtJ6Rvik1HlHgbw&oe=69D3CD2A", alt: "Rực Rỡ Ngày Độc Lập 1" },
                { src: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/540461289_122133753632857159_8266787930077727886_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFTFyds_HhxOdl8sD7dsPe-nZ6rqWnxRCidnqupafFEKGl2N_WFpSNAyAppHQWYpwDG-yyDRUw2aTJvnOXxLAb2&_nc_ohc=vvRkghAJyQ0Q7kNvwERxz-x&_nc_oc=Ado9BDeI3DWpBDb2WbVAaEBPv5XDM2HIBHqaowerOJ5sp3qo3Q0rxl06GvV3rDJgNqQ&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=CNawFaKfX_bO-KuSHFPrXg&_nc_ss=7a3a8&oh=00_Af1_OJu7uZ3BxDKfOW2OoZcO8BGFsHDMJ6yHQ7w1nQSdPA&oe=69D3F24E", alt: "Rực Rỡ Ngày Độc Lập 2" },
                { src: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/540267091_122133753674857159_7535963620971085059_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFYmLHe7H7FMEdfCLSXDVql3CyusUc8NMHcLK6xRzw0weSYntUL0b2rS9hOFthZe3faO9AssMq0QF-vOB2U0byO&_nc_ohc=PwcPOzoMxfwQ7kNvwHPVtNr&_nc_oc=AdrO5an8tR4o-GCpqgP_Pi016BIkkeTjHPBDXJ7pzSojqwkrjQspQlHVXCU1vTUykwY&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=7grwS1vHiWAPw-bRFMQHXw&_nc_ss=7a3a8&oh=00_Af2TGXwiCfTB-YsQHlLG0r3gu9GPVh8GZePqifm0Mlo_2Q&oe=69D3EAED", alt: "Rực Rỡ Ngày Độc Lập 3" },
                { src: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/540762530_122133753686857159_7887196901810294090_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHZS3aUXv0aIciQImLp0vMn_QlOoEwNBif9CU6gTA0GJyvj3xK7wcH1pOc3TCeXY4Xxy4OQpWdRb4z0e7WqVQj_&_nc_ohc=uYMn8yD9UwMQ7kNvwE5XPa-&_nc_oc=AdraTfw07x0S3hMQYuJyZE96jV91fD-0rsQtDBRnEEd6JfWCAl3KYaWei2SFI_KYRRo&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=9IZLJf0QmJfZLOo9II1h5A&_nc_ss=7a3a8&oh=00_Af1F3FaxAu5-Xo0AGAVGqkqOaT9ym_yl220ovgzrT1m_UA&oe=69D3D750", alt: "Rực Rỡ Ngày Độc Lập 4" },
                { src: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/541151634_122134064846857159_2147787571516367984_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHmoZXtOhSaGiwMpLj82hkdrDwPUc_c3dqsPA9Rz9zd2irGOhd0lH1S__jceNkwlF5BexLu07Y7xzTIWi-qEERF&_nc_ohc=f_Z_jeJh9w4Q7kNvwEazaJN&_nc_oc=Adr45hBnQyknFQUtQEZF8LzODk1vOzfEJ0IHz7qGw5mXB3iNS1k5sIFslXoFnwog70w&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=1yg1iRJZU_aCCKi7o7SyGQ&_nc_ss=7a3a8&oh=00_Af1C6SSgufQDvrJa-S6gSrqjKnq_h6xOXQ0HUYBXbY-4HA&oe=69D3E2EE", alt: "Rực Rỡ Ngày Độc Lập 5" },
              ]}
            />

            {/* Sự Kiện Bia Trúng Thưởng */}
            <div className="bg-surface-container-low rounded-sm overflow-hidden border border-outline-variant/10 flex flex-col">
              <div className="w-full aspect-video overflow-hidden bg-black">
                <img
                  src="/Marketing/biatrungthuong.jpg"
                  alt="Sự Kiện Bia Trúng Thưởng"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">2025</span>
                <h4 className="font-headline text-xl mb-3">Sự Kiện Bia Trúng Thưởng</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
                  Chương trình khuyến mãi và minigame tương tác nhằm tăng tần suất ghé thăm, tạo viral word-of-mouth trong cộng đồng khách hàng thân thiết.
                </p>

                <div className="mb-4">
                  <details className="group marker:content-['']">
                    <summary className="flex items-center gap-2 text-on-surface font-label text-[10px] uppercase tracking-widest font-semibold cursor-pointer select-none pb-2 border-b border-outline-variant/10">
                      <span className="material-symbols-outlined text-[14px] group-open:rotate-180 transition-transform">expand_more</span>
                      Xem 2 bài viết chiến dịch
                    </summary>
                    <div className="mt-2 flex flex-col gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                      <a href="https://www.facebook.com/share/p/1FS96eNcT8/" target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-variant hover:text-primary flex items-start gap-2 py-1">
                        <span className="material-symbols-outlined text-[12px] mt-0.5 flex-shrink-0">open_in_new</span>
                        <span className="leading-tight">Bài viết 1</span>
                      </a>
                      <a href="https://m.facebook.com/story.php?story_fbid=pfbid02U56MpPP8fKMMC6fCSD8cAU7qxz2PcoTnZdGnb76BABkFfLH2goS9iKaPCv1o7oVcl&id=61575714796374" target="_blank" rel="noopener noreferrer" className="text-xs text-on-surface-variant hover:text-primary flex items-start gap-2 py-1">
                        <span className="material-symbols-outlined text-[12px] mt-0.5 flex-shrink-0">open_in_new</span>
                        <span className="leading-tight">Bài viết 2</span>
                      </a>
                    </div>
                  </details>
                </div>

                <a href="https://www.facebook.com/share/v/1Dr8KPxmio/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-semibold group mt-auto">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  Xem video trên Facebook
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>
            </div>

            <CampaignSlider
              label="Tháng 8/2025"
              title="Lễ Hội Pháo Hoa 2025"
              description="Chiến dịch truyền thông khai thác sự kiện lễ hội pháo hoa quốc tế để tăng nhận diện thương hiệu địa phương."
              facebookUrl="https://www.facebook.com/PhuongDoiQuan"
              links={[
                { title: 'Bài viết 1', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0aWGLL8DCLFzzojFw4U5W3QPTaxAbFEb7eoWp2ybuyvYcsyGXvaTJ4fE2gAZpXPcRl&id=61575714796374' },
                { title: 'Bài viết 2', url: 'https://fb.watch/GgiG1CCBPL/?' },
                { title: 'Bài viết 3', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02KNDPgDbvy8rpGuQ4KhYXFnAXXHVn5VfaJzXnwDdUGsBXHM1Hf3N9fFxFTsZ5Qnwjl&id=61575714796374' },
                { title: 'Bài viết 4', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0JTo4qPsNdFJFiofpmLSCmLmWjsYfMEvPiaVGoAyACfyHJFDkZwwzu1bPpYUE7PPjl&id=61575714796374' },
                { title: 'Bài viết 5', url: 'https://m.facebook.com/story.php?story_fbid=pfbid06XQJRFD8vMCq7jYFzeEtzxwX5naM6bUeJeFews7LJkn4CcvEZLXrdb7FVEaX2MNAl&id=61575714796374' },
                { title: 'Bài viết 6', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02BeZaziaqRQ4NFhCzvWkJRhqH26DuBuBra2qBW6qCHPUgNA89xnuzqcfe6NTcrWuXl&id=61575714796374' },
                { title: 'Bài viết 7', url: 'https://m.facebook.com/story.php?story_fbid=pfbid024U2yYWPJnGwY28MqPSAb5yPeupF2jzSr4LSG2qXBzoBBx12MhQQ9C5Zr6fPSuorKl&id=61575714796374' },
                { title: 'Bài viết 8', url: 'https://m.facebook.com/story.php?story_fbid=pfbid024U2yYWPJnGwY28MqPSAb5yPeupF2jzSr4LSG2qXBzoBBx12MhQQ9C5Zr6fPSuorKl&id=61575714796374' },
                { title: 'Bài viết 9', url: 'https://fb.watch/GgiP8YV8Pk/?' },
                { title: 'Bài viết 10', url: 'https://m.facebook.com/story.php?story_fbid=pfbid035SVgz4gdKQNAshH4VUAw47stkBpWaBRtGKTEiiHcdU6yVbZLvJ1XUaBtzGBfTrf3l&id=61575714796374' },
                { title: 'Bài viết 11', url: 'https://fb.watch/GgiRqTgEna/?' },
                { title: 'Bài viết 12', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02DX7k4w9iPBQ8XyYiNBptxfvgX95YJpTBdfsQr3ZGgTKdxPKX5QFbFEdfbSqgEKEgl&id=61575714796374' },
                { title: 'Bài viết 13', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02Jmhp9QkFSjkhpqYVxZRPqL1jSoijiJVievPqRXdqDNsZWuiyYcuKM4HfFj8eNPJEl&id=61575714796374' },
                { title: 'Bài viết 14', url: 'https://fb.watch/GgiTPPYXlt/?' },
              ]}
              images={[
                { src: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/516455905_122124093974857159_7667382130683832916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGdWr-rW8asPgbPeAVkCuUgO2eueE6tNU47Z654Tq01ToFhbaxVeKkyZJau4POckKv0kU37iUsrLw4_n2bhvu2_&_nc_ohc=HEAMrHf_DxwQ7kNvwGEZEv_&_nc_oc=Adqv3lNQu6KRCMbcMoP-2bP3k8dGEUjsVstfI3IhiJEGE-QF-mNsKc0A5IbvfUH3uZ0&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=Olbw9qfShOIt9ncbASK7WQ&_nc_ss=7a3a8&oh=00_Af2w4ISbXt1lAUY7MZQuFt0f7iqyJUuNyid877PNuaFMXg&oe=69D3E43A", alt: "Lễ Hội Pháo Hoa 2025" },
              ]}
            />

            <CampaignSlider
              label="03/10/2025"
              title="Lân Khúc Trăng Rằm"
              description="Chiến dịch kết hợp lễ hội Trung Thu, đưa hình ảnh thương hiệu hoà quyện cùng không khí truyền thống ấm áp."
              facebookUrl="https://www.facebook.com/share/v/1AjFeG48ne/"
              links={[
                { title: 'Bài viết 1', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0gcYS9aa5xoBpvhr7htwf67ksyYJMXPmSY48ZamzX5o62m8BnoMDKuArgYr8SP1xul&id=61575714796374' },
                { title: 'Bài viết 2 - Phần 1', url: 'https://www.facebook.com/photo.php?fbid=122137969544857159&set=a.122106119672857159&type=3' },
                { title: 'Bài viết 2 - Phần 2', url: 'https://www.facebook.com/photo.php?fbid=122137969682857159&set=a.122110481468857159&type=3' },
                { title: 'Bài viết 3', url: 'https://fb.watch/GghCour-RX/?' },
              ]}
              images={[
                { src: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/555466381_122137941170857159_6480823852290015491_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFhoBwrN-cJlDUNcbnHXUk6rajni_GiEQStqOeL8aIRBCx1GzF2Q-cgTC5b-KVaRoRHoXLGvVIoQdfEuWu-IOt9&_nc_ohc=hBfYLmq7UGoQ7kNvwGd9pcr&_nc_oc=AdopL_RNlLUn-ooNOqs46i2yxGZuf8QWgLjJ9ozEXFHcHyIW7CJq0qeeiAc8rWtA4e0&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=s8rPgPbh4zrqY6GaGotL9w&_nc_ss=7a3a8&oh=00_Af0rcmk07XbN6LdxRJNcKBLCXT0fSx23X9ImEfnwrEyltw&oe=69D6539F", alt: "Lân Khúc Trăng Rằm 1" },
                { src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/555929715_122137941278857159_950773375378915164_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH0G_62S_0G8nqWEVWFXCoLqaxqCuZ-OymprGoK5n47KUqDuonJgsfrUhNF4vVceemk0479nw-nRIvhUgmpireO&_nc_ohc=iwYhzG-Pq9oQ7kNvwGfYJWu&_nc_oc=AdrBkA5AcGmteYGIeB1Hrchd8AQHrOZnQGVrBajOC8g663GaNuyZHmOdvfctw6l21Vc&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=vBq-FyUEA36XJ9Fk2ox8pw&_nc_ss=7a3a8&oh=00_Af3dwAzR8hUUH3wsHnCnPiviQvmiCLh5UZOQf0Ds4nZgqg&oe=69D655F7", alt: "Lân Khúc Trăng Rằm 2" },
                { src: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/555345909_122137941212857159_5432931029620979441_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHI0yoko-JkOqMS83BioKckCgAfER8WtO0KAB8RHxa07b9WgbSCCDnhD9Ylw6KXai5o0W71S4HRxWvFDM1g11mG&_nc_ohc=OeGcViVZAMYQ7kNvwFnlooQ&_nc_oc=AdqlclCRFASgVbLeB5R4eYSia4zKb8C4u_Iakt9fF-F1t4YWoX02p7y2ubK1AQLb5po&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=k7PkRFf8A1jDOn_3JGnVow&_nc_ss=7a3a8&oh=00_Af03cAAb-ownsw886OOlvrfktdat7mn2YKjCprOrpN5qvQ&oe=69D66E8A", alt: "Lân Khúc Trăng Rằm 3" },
                { src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/553901026_122137941248857159_8673139425979863998_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHlbDHbzGpyrjM8oBkL0b8bOWznm5YuVN05bOebli5U3YbmXfyECx5eMQ9LJ26t0SvHZxMBU1B7BWxS-cfIFrkH&_nc_ohc=heQh9x8_H0gQ7kNvwGggLLW&_nc_oc=Ado0Sqi-mlWXK7TCtOz9XDva-8YjuNvd_PNVP6E5VgpT7EXuE-zA25B2SLiaz4tE91E&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=A1wmi2p6wrwmB7bZfBDrdQ&_nc_ss=7a3a8&oh=00_Af32lz8QJdqmwPzTVw22Ahs68i5QefO1CWx_m1KGQyD5eQ&oe=69D67559", alt: "Lân Khúc Trăng Rằm 4" },
              ]}
            />

            <CampaignSlider
              label="12/2025"
              title="Mang Không Khí Giáng Sinh"
              description="Chiến dịch truyền thông mùa lễ hội, biến không gian nhà hàng thành điểm đến ấm áp và lan toả tinh thần Giáng Sinh."
              facebookUrl="https://www.facebook.com/PhuongDoiQuan"
              links={[
                { title: 'Bài viết 1 - Phần 1', url: 'https://www.facebook.com/photo.php?fbid=122150024564857159&set=a.122106119672857159&type=3' },
                { title: 'Bài viết 1 - Phần 2', url: 'https://www.facebook.com/photo.php?fbid=122150024684857159&set=a.122110481468857159&type=3' },
                { title: 'Bài viết 2', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02cmRcB57G2pXGoux8TueVtN6dRDVYpAU3EmHS8ETDVemvf5h8vXqcAYu69w3QBMbtl&id=61575714796374' },
                { title: 'Bài viết 3', url: 'https://fb.watch/Ggi2HoKPfU/?' },
                { title: 'Bài viết 4', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0hLNQKxzfgt5tzS31pCvneeaKrgAe935CWSJDyqT8osXqWuo49RcK1umhvgrsGHDvl&id=61575714796374' },
                { title: 'Bài viết 5', url: 'https://fb.watch/Ggi4wNkDLc/?' },
                { title: 'Bài viết 6', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02Fv9BpAZv32pgnRgpApb6kotWFioC6rgvdaCaH2xvv1rgpGky557y5dTh51Ykd7ozl&id=61575714796374' },
                { title: 'Bài viết 7', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02WyGyuG2xWdnAY2mghFT6DGVJdSw9PJp8V2FAFBay7YACanSrvuqiUVtNecWyX9s7l&id=61575714796374' },
                { title: 'Bài viết 8', url: 'https://m.facebook.com/story.php?story_fbid=pfbid02C3AmEfpBbUk8WECRAgNmfxzgdaa1gk9LaekeVMZWaJKfVzS3467JALCmpL4tjuVBl&id=61575714796374' },
                { title: 'Bài viết 9', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0216DnB89QDRE5PU2BvENhK9myhW7Pf5CUjnyaKfGVk5UfR89rMyHH2VSmqsfbfjfGl&id=61575714796374' },
                { title: 'Bài viết 10', url: 'https://m.facebook.com/story.php?story_fbid=pfbid0216DnB89QDRE5PU2BvENhK9myhW7Pf5CUjnyaKfGVk5UfR89rMyHH2VSmqsfbfjfGl&id=61575714796374' },
              ]}
              images={[
                { src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/601371303_122150024570857159_4063149441092379826_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEQw-deFDwlQ6dcSkaD1p8tJrME1jcG5H8mswTWNwbkf9TgQuu4StT3WHUXB9xNRjRa_XXQmP1pS1cZ5tEkdWXW&_nc_ohc=Eiq7QAIIb1UQ7kNvwHHLV18&_nc_oc=AdpA1H0Th4rumtBvJz5-65GqYwFRznZzZxK8-EK01hG1TY9j_2QCODoEjD9xl2s2nTA&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=bPsjUsh4XxCmdyKMUMQVlw&_nc_ss=7a3a8&oh=00_Af0RKrza5Y4fT2wBJygDLFGyJiasMRsWRxsFw0A6cfOKIA&oe=69D657D5", alt: "Giáng Sinh Phương Dội" },
              ]}
            />
          </div>

          {/* Drive link */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://www.facebook.com/PhuongDoiQuan" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-outline-variant px-8 py-3 rounded-sm font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-base">facebook</span>
              Xem Fanpage Nhà Hàng
            </a>

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
