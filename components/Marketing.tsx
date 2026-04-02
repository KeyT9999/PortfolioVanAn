import CampaignSlider from './CampaignSlider'

export default function Marketing() {
  return (
    <section id="marketing" className="pt-32 pb-24">
      {/* Hero Section: Case Study Title */}
      <div className="px-12 max-w-[1920px] mx-auto mb-24">
        <div className="flex flex-col md:flex-row items-end gap-12">
          <div className="w-full md:w-2/3">
            <span className="font-label uppercase tracking-[0.2rem] text-primary text-xs mb-4 block">Vận hành &amp; Marketing</span>
            <h1 className="font-headline text-5xl lg:text-7xl md:text-5xl font-bold text-on-surface leading-tight tracking-tighter">
              Case Study: Chiến lược F&amp;B
            </h1>
            <p className="mt-8 text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Tư duy thực chiến trong việc tái định vị và tối ưu hóa vận hành, biến các chỉ số kỹ thuật số thành doanh thu thực tế và giá trị thương hiệu bền vững.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <div className="p-8 bg-surface-container-low border-l-4 border-primary">
              <div className="text-xs font-label uppercase tracking-widest text-outline mb-2">Thành tích nổi bật</div>
              <div className="text-4xl font-headline font-bold text-primary">800M VND</div>
              <div className="text-sm text-on-surface-variant mt-1">Monthly Revenue Milestone</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid: Data & Analytics */}
      <div className="px-12 max-w-[1920px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Page Growth Card */}
          <div className="lg:col-span-4 bg-surface-container-low p-10 rounded-lg flex flex-col justify-between h-[400px]">
            <div>
              <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: "40px" }}>trending_up</span>
              <h3 className="font-headline text-2xl mb-2">Audience Expansion</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Organic growth strategies focused on high-intent F&amp;B enthusiasts and industry professionals.</p>
            </div>
            <div className="relative">
              <div className="text-6xl font-headline font-bold text-on-surface">1800+</div>
              <div className="text-xs font-label uppercase tracking-widest text-primary mt-2">Active Followers</div>
              <div className="absolute bottom-0 right-0 opacity-10">
                <span className="material-symbols-outlined" style={{ fontSize: "120px" }}>groups</span>
              </div>
            </div>
          </div>
          
          {/* Zalo Ecosystem Card */}
          <div className="lg:col-span-4 bg-[#fffae7] text-on-surface p-10 rounded-lg flex flex-col justify-between h-[400px] border border-outline-variant/20">
            <div>
              <span className="material-symbols-outlined text-primary mb-6" style={{ fontSize: "40px" }}>hub</span>
              <h3 className="font-headline text-2xl mb-2">Zalo Ecosystem</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Private community management ensuring 85% retention rate and high engagement through personalized CRM.</p>
            </div>
            <div>
              <div className="text-6xl font-headline font-bold">220+</div>
              <div className="text-xs font-label uppercase tracking-widest text-primary mt-2">Core Members</div>
            </div>
          </div>
          
          {/* Strategic Image/Visual */}
          <div className="lg:col-span-4 rounded-lg overflow-hidden relative group">
            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/589097267_4218047968409498_904782228036059533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHFiIfUeCQZiYIyClxo0wJ1kQRHy7tbjl-RBEfLu1uOX7uIp40ADT9mWDdcdm0_Kn-B9kwuZczI47NllnWRPuGj&_nc_ohc=yv-bqMP_O5UQ7kNvwEQjfZs&_nc_oc=AdqBiBWkB4Fe6jAwuC5C6TJ0O5IVNK8JEz4959AH8pOWX43XClXNz_VMlEa7TV6Gs9s&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=raMeZ6_jrqY-oLN-K-qoWA&_nc_ss=7a30f&oh=00_AfzwkKh_BGJ1K03DKHiVCRvqCr5NXm94myrmeouShTFyFQ&oe=69C29573" alt="Modern high-end restaurant team meeting in warm lighting"/>
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-surface/90 backdrop-blur-md p-6">
                <h4 className="font-label text-xs uppercase tracking-widest mb-1">Context</h4>
                <p className="font-serif italic text-lg text-on-surface">Precision in operations defines the hospitality experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Deep-Dive: Phương Dội */}
      <div className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Project Description */}
          <div className="lg:col-span-5">
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-6 block">Mô tả dự án</span>
            <h2 className="font-headline text-3xl md:text-4xl mb-8 leading-tight">Quản trị Thương hiệu &amp; Vận hành F&amp;B</h2>
            <div className="space-y-6 text-on-surface-variant font-body leading-relaxed">
              <p>
                Dự án tập trung vào việc xây dựng nền tảng thương hiệu và chuẩn hóa quy trình vận hành cho nhà hàng ngay từ giai đoạn ra mắt.
              </p>
              <p>
                Mục tiêu cốt lõi là chinh phục nhóm khách hàng trung niên (<strong className="text-on-surface font-medium">30–55 tuổi</strong>) — những người ưu tiên sự tinh tế, tin cậy và chất lượng dịch vụ chuẩn mực.
              </p>
              <p>
                Mình đóng vai trò là người kết nối giá trị cốt lõi của nhà hàng với nhu cầu thực tế của khách hàng thông qua các chiến lược truyền thông và điểm chạm dịch vụ trực tiếp.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <span className="px-3 py-1 bg-surface-container-high rounded-sm text-[10px] uppercase tracking-widest font-label">06/2025 — Hiện tại</span>
              <div className="h-[1px] w-12 bg-outline-variant/30"></div>
              <span className="text-sm text-on-surface-variant italic">10 tháng thực chiến</span>
            </div>
          </div>

          {/* Right: Role Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-2 block">Vai trò cá nhân</span>
            
            {/* Role 1: Strategy & Content */}
            <div className="bg-surface-container-low p-8 rounded-sm border-l-2 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">campaign</span>
                <h4 className="font-headline text-xl">Chiến lược &amp; Nội dung</h4>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Nghiên cứu tâm lý khách hàng trung niên để phát triển USPs và duy trì 5–6 bài đăng mỗi tuần trên mạng xã hội theo phong cách kể chuyện (Storytelling) chân thực.
              </p>
            </div>

            {/* Role 2: Operations */}
            <div className="bg-surface-container-low p-8 rounded-sm border-l-2 border-primary/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">settings</span>
                <h4 className="font-headline text-xl">Quản trị Vận hành</h4>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Trực tiếp thiết kế và thực hiện các chương trình đào tạo kỹ năng phục vụ hàng tuần cho nhân viên, nỗ lực chuẩn hóa trải nghiệm khách hàng tại điểm chạm.
              </p>
            </div>

            {/* Role 3: B2B */}
            <div className="bg-surface-container-low p-8 rounded-sm border-l-2 border-primary/40">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">handshake</span>
                <h4 className="font-headline text-xl">Đối ngoại &amp; B2B</h4>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Đảm nhiệm việc đàm phán, quản lý hợp đồng với các đơn vị lữ hành và đối tác sự kiện, đồng thời hoàn thiện các quy trình paperwork chuyên môn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Methods */}
      <div className="bg-surface-container-low py-24 px-6 md:px-12 mb-32">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-16">
            <div>
              <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">Công cụ &amp; Phương pháp</span>
              <h2 className="font-headline text-3xl md:text-4xl">Bộ công cụ thực chiến</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Tools */}
            <div>
              <h3 className="font-label text-xs uppercase tracking-widest text-outline mb-8">Công cụ quản lý</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-sm">
                    <span className="material-symbols-outlined text-primary text-lg">monitoring</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg mb-1">Meta Business Suite</h4>
                    <p className="text-sm text-on-surface-variant">Quản trị nội dung, lập lịch đăng bài và theo dõi hiệu suất fanpage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-sm">
                    <span className="material-symbols-outlined text-primary text-lg">forum</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg mb-1">Zalo OA</h4>
                    <p className="text-sm text-on-surface-variant">Chăm sóc cộng đồng và duy trì tương tác cá nhân hóa với khách hàng mục tiêu.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-sm">
                    <span className="material-symbols-outlined text-primary text-lg">description</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg mb-1">Microsoft Office</h4>
                    <p className="text-sm text-on-surface-variant">Xử lý dữ liệu, báo cáo kinh doanh và quản lý văn bản hợp đồng.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Methods */}
            <div>
              <h3 className="font-label text-xs uppercase tracking-widest text-outline mb-8">Phương pháp thực chiến</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-sm">
                    <span className="material-symbols-outlined text-primary text-lg">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg mb-1">Customer Insight Research</h4>
                    <p className="text-sm text-on-surface-variant">Phân tích nhu cầu khắt khe của nhóm khách hàng 30–55 tuổi để xây dựng chiến lược phù hợp.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-sm">
                    <span className="material-symbols-outlined text-primary text-lg">diversity_3</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg mb-1">Community Nurturing</h4>
                    <p className="text-sm text-on-surface-variant">Xây dựng mối quan hệ dựa trên sự tin tưởng thay vì quảng cáo đại trà.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-surface-container-highest rounded-sm">
                    <span className="material-symbols-outlined text-primary text-lg">analytics</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg mb-1">Market Analysis</h4>
                    <p className="text-sm text-on-surface-variant">Phân tích biến động để điều chỉnh chiến lược kinh doanh kịp thời.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Showcase */}


      {/* Lessons Learned */}
      <div className="bg-[#fffae7] py-24 px-6 md:px-12 mb-32">
        <div className="max-w-4xl mx-auto">
          <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-6 block">Bài học đúc kết</span>
          <div className="relative">
            <span className="material-symbols-outlined absolute -top-2 -left-2 text-primary/15 text-5xl">format_quote</span>
            <div className="pl-8 md:pl-12 border-l-2 border-primary/30 space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
              <p>
                10 tháng với vị trí này là một người thầy lớn đối với mình. Những kiến thức sách vở vốn không màu hồng, bởi thực tế luôn đi kèm thử thách. Quá trình thực chiến đã tặng cho mình nhiều va vấp, giúp mình trưởng thành hơn từng ngày.
              </p>
              <p>
                Mình đã học được cách <strong className="text-on-surface font-medium">quản trị nhân sự</strong>, biết lúc nào cần cứng rắn hay mềm mỏng. Việc vận hành đội ngũ đòi hỏi sự linh hoạt, nhằm đảm bảo chất lượng dịch vụ tốt nhất.
              </p>
              <p>
                Khi thấu hiểu nhóm khách hàng trung niên, <em>kho báu nhận lại chính là niềm tin bền vững</em>. Mỗi sai sót đều là một bài học đắt giá, thúc đẩy mình hoàn thiện tư duy mỗi ngày.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CASE STUDY: NHÀ HÀNG PHƯƠNG ĐỘI ===== */}
      <div className="px-12 max-w-[1920px] mx-auto mb-32">
        {/* Section Header */}
        <div className="mb-16 border-b border-outline-variant/15 pb-12">
          <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">Case Study 01</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-headline text-4xl lg:text-5xl font-bold text-on-surface leading-tight">
                Quản Trị Thương Hiệu &amp; Vận Hành F&amp;B<br/>
                <span className="italic font-normal font-serif">Nhà Hàng Phương Đội</span>
              </h2>
            </div>
            <div className="lg:col-span-4 text-right">
              <span className="font-label text-xs uppercase tracking-widest text-outline block mb-1">Thời gian</span>
              <span className="font-body text-lg text-on-surface-variant">Tháng 06/2025 – Hiện tại</span>
            </div>
          </div>
        </div>

        {/* Description + Role Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-headline text-xl mb-4 uppercase tracking-widest text-on-surface text-sm font-semibold">Mô tả dự án</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Dự án tập trung vào việc xây dựng nền tảng thương hiệu và chuẩn hóa quy trình vận hành cho nhà hàng ngay từ giai đoạn ra mắt. Mục tiêu cốt lõi là chinh phục nhóm khách hàng trung niên (30–55 tuổi) – những người ưu tiên sự tinh tế, tin cậy và chất lượng dịch vụ chuẩn mực.
            </p>
            <a
              href="https://www.facebook.com/PhuongDoiQuan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold group font-label text-xs uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              Xem Fanpage Nhà Hàng
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          <div>
            <h3 className="font-headline text-xl mb-4 uppercase tracking-widest text-on-surface text-sm font-semibold">Vai trò cá nhân</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">campaign</span>
                <div>
                  <span className="font-body font-medium text-on-surface block">Chiến lược &amp; Nội dung</span>
                  <span className="font-body text-sm text-on-surface-variant">Nghiên cứu tâm lý khách hàng, phát triển USPs và duy trì 5–6 bài đăng/tuần theo phong cách Storytelling chân thực.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">manage_accounts</span>
                <div>
                  <span className="font-body font-medium text-on-surface block">Quản trị Vận hành</span>
                  <span className="font-body text-sm text-on-surface-variant">Thiết kế và thực hiện chương trình đào tạo kỹ năng phục vụ hàng tuần, chuẩn hóa trải nghiệm khách hàng tại mọi điểm chạm.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">handshake</span>
                <div>
                  <span className="font-body font-medium text-on-surface block">Đối ngoại &amp; B2B</span>
                  <span className="font-body text-sm text-on-surface-variant">Đàm phán và quản lý hợp đồng với các đơn vị lữ hành, đối tác sự kiện; hoàn thiện quy trình paperwork chuyên môn.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Tools + Results Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface-container-low p-10 rounded-sm border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>build</span>
            <h4 className="font-headline text-lg mb-4">Công cụ &amp; Phương pháp</h4>
            <ul className="space-y-2 font-body text-sm text-on-surface-variant">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0"></span>Meta Business Suite</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0"></span>Zalo OA</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0"></span>Microsoft Office</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0"></span>Customer Insight Research</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0"></span>Community Nurturing</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0"></span>Market Analysis</li>
            </ul>
          </div>
          <div className="lg:col-span-2 bg-surface-container-low p-10 rounded-sm border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>bar_chart</span>
            <h4 className="font-headline text-lg mb-6">Kết quả đạt được</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-l-2 border-primary pl-6">
                <div className="font-headline text-3xl text-on-surface mb-1">700M</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-outline">Doanh thu tháng đầu tiên (VNĐ)</div>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <div className="font-headline text-3xl text-on-surface mb-1">+28%</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-outline">Tăng trưởng doanh thu (350M → 450M VNĐ)</div>
              </div>
              <div className="border-l-2 border-primary pl-6">
                <div className="font-headline text-3xl text-on-surface mb-1">223</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-outline">Thành viên Zalo OA hoạt động tích cực</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Learned Quote */}
        <div className="bg-surface p-10 border border-outline-variant/20 rounded-sm mb-16 relative">
          <span className="material-symbols-outlined absolute -top-4 left-8 text-primary-container text-4xl opacity-40">format_quote</span>
          <p className="font-serif italic text-xl text-on-surface-variant leading-relaxed max-w-4xl">
            10 tháng với vị trí này, là một người thầy lớn. Nghề làm dâu trăm họ rèn luyện cho mình sự tỉ mỉ, cùng lòng trắc ẩn sâu sắc. Khi thấu hiểu nhóm khách hàng trung niên, kho báu nhận lại chính là niềm tin bền vững.
          </p>
          <cite className="mt-6 block font-label text-xs uppercase tracking-widest text-primary not-italic">Vân An — Bài học thực chiến</cite>
        </div>

        {/* Campaign Cards */}
        <div>
          <h3 className="font-headline text-2xl mb-8">Một số chiến dịch đã thực hiện</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campaign 1 */}
            <CampaignSlider
              label="29/08 – 02/09/2025"
              title="Rực Rỡ Ngày Độc Lập"
              description="Chiến dịch truyền thông chào mừng Lễ Độc Lập với chuỗi nội dung cảm xúc và hình ảnh đậm chất dân tộc, thu hút sự quan tâm của cộng đồng khách hàng trung niên."
              facebookUrl="https://www.facebook.com/PhuongDoiQuan"
              images={[
                { src: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/540467929_122133753620857159_232865191147215737_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFkWOd_q6StmRvqsadBYbF9F0togpME_7EXS2iCkwT_sZ4zileU49yx2Ke5weBZ8DT1VNsJBTuwifcIcCOnavIn&_nc_ohc=XdnhuHOXijIQ7kNvwGBWKPu&_nc_oc=AdrCnIjsmm2qfl0uQfxHorAbfYKE-GFxVD1a9skroqO5MBU9T7AdRaD965SpEfgGFSY&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=yVJoTLe0CAla0jzAgzpoQg&_nc_ss=7a3a8&oh=00_Af1XfnvYpXhVOt8tDvavov9hVUI2iCWRtJ6Rvik1HlHgbw&oe=69D3CD2A", alt: "Rực Rỡ Ngày Độc Lập 1" },
                { src: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/540461289_122133753632857159_8266787930077727886_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFTFyds_HhxOdl8sD7dsPe-nZ6rqWnxRCidnqupafFEKGl2N_WFpSNAyAppHQWYpwDG-yyDRUw2aTJvnOXxLAb2&_nc_ohc=vvRkghAJyQ0Q7kNvwERxz-x&_nc_oc=Ado9BDeI3DWpBDb2WbVAaEBPv5XDM2HIBHqaowerOJ5sp3qo3Q0rxl06GvV3rDJgNqQ&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=CNawFaKfX_bO-KuSHFPrXg&_nc_ss=7a3a8&oh=00_Af1_OJu7uZ3BxDKfOW2OoZcO8BGFsHDMJ6yHQ7w1nQSdPA&oe=69D3F24E", alt: "Rực Rỡ Ngày Độc Lập 2" },
                { src: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/540267091_122133753674857159_7535963620971085059_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFYmLHe7H7FMEdfCLSXDVql3CyusUc8NMHcLK6xRzw0weSYntUL0b2rS9hOFthZe3faO9AssMq0QF-vOB2U0byO&_nc_ohc=PwcPOzoMxfwQ7kNvwHPVtNr&_nc_oc=AdrO5an8tR4o-GCpqgP_Pi016BIkkeTjHPBDXJ7pzSojqwkrjQspQlHVXCU1vTUykwY&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=7grwS1vHiWAPw-bRFMQHXw&_nc_ss=7a3a8&oh=00_Af2TGXwiCfTB-YsQHlLG0r3gu9GPVh8GZePqifm0Mlo_2Q&oe=69D3EAED", alt: "Rực Rỡ Ngày Độc Lập 3" },
                { src: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/540762530_122133753686857159_7887196901810294090_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHZS3aUXv0aIciQImLp0vMn_QlOoEwNBif9CU6gTA0GJyvj3xK7wcH1pOc3TCeXY4Xxy4OQpWdRb4z0e7WqVQj_&_nc_ohc=uYMn8yD9UwMQ7kNvwE5XPa-&_nc_oc=AdraTfw07x0S3hMQYuJyZE96jV91fD-0rsQtDBRnEEd6JfWCAl3KYaWei2SFI_KYRRo&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=9IZLJf0QmJfZLOo9II1h5A&_nc_ss=7a3a8&oh=00_Af1F3FaxAu5-Xo0AGAVGqkqOaT9ym_yl220ovgzrT1m_UA&oe=69D3D750", alt: "Rực Rỡ Ngày Độc Lập 4" },
                { src: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/541151634_122134064846857159_2147787571516367984_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHmoZXtOhSaGiwMpLj82hkdrDwPUc_c3dqsPA9Rz9zd2irGOhd0lH1S__jceNkwlF5BexLu07Y7xzTIWi-qEERF&_nc_ohc=f_Z_jeJh9w4Q7kNvwEazaJN&_nc_oc=Adr45hBnQyknFQUtQEZF8LzODk1vOzfEJ0IHz7qGw5mXB3iNS1k5sIFslXoFnwog70w&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=1yg1iRJZU_aCCKi7o7SyGQ&_nc_ss=7a3a8&oh=00_Af1C6SSgufQDvrJa-S6gSrqjKnq_h6xOXQ0HUYBXbY-4HA&oe=69D3E2EE", alt: "Rực Rỡ Ngày Độc Lập 5" },
              ]}
            />

            {/* Campaign 2 */}
            <div className="bg-surface-container-low rounded-sm overflow-hidden border border-outline-variant/10 flex flex-col">
              <div className="aspect-video bg-surface-container-highest flex items-center justify-center relative">
                <span className="material-symbols-outlined text-outline-variant/30" style={{ fontSize: '64px' }}>image</span>
                <span className="absolute bottom-3 left-3 font-label text-[10px] uppercase tracking-wider text-outline-variant/60">Ảnh placeholder — Vân An thêm sau</span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">2025</span>
                <h4 className="font-headline text-xl mb-3">Sự Kiện Bia Trúng Thưởng</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-1">
                  Chương trình khuyến mãi và minigame tương tác nhằm tăng tần suất ghé thăm, tạo viral word-of-mouth trong cộng đồng khách hàng thân thiết.
                </p>
                <a
                  href="https://www.facebook.com/PhuongDoiQuan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-semibold group mt-auto"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Xem trên Fanpage
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>
            </div>

            {/* Campaign 3 */}
            <CampaignSlider
              label="Tháng 8/2025"
              title="Lễ Hội Pháo Hoa 2025"
              description="Chiến dịch truyền thông khai thác sự kiện lễ hội pháo hoa quốc tế để tăng nhận diện thương hiệu địa phương."
              facebookUrl="https://www.facebook.com/PhuongDoiQuan"
              images={[
                { src: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/516455905_122124093974857159_7667382130683832916_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGdWr-rW8asPgbPeAVkCuUgO2eueE6tNU47Z654Tq01ToFhbaxVeKkyZJau4POckKv0kU37iUsrLw4_n2bhvu2_&_nc_ohc=HEAMrHf_DxwQ7kNvwGEZEv_&_nc_oc=Adqv3lNQu6KRCMbcMoP-2bP3k8dGEUjsVstfI3IhiJEGE-QF-mNsKc0A5IbvfUH3uZ0&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=Olbw9qfShOIt9ncbASK7WQ&_nc_ss=7a3a8&oh=00_Af2w4ISbXt1lAUY7MZQuFt0f7iqyJUuNyid877PNuaFMXg&oe=69D3E43A", alt: "Lễ Hội Pháo Hoa 2025" },
              ]}
            />
          </div>

          {/* Drive Link */}
          <div className="mt-8 flex justify-end">
            <a
              href="https://drive.google.com/drive/folders/1gRI0X_C4RiayxOWpJvBBz6XiZ9J9PmM8?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-outline-variant px-8 py-3 rounded-sm font-label text-xs font-bold tracking-widest uppercase hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-base">folder_open</span>
              Xem toàn bộ tài liệu chiến dịch (Drive)
            </a>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-surface-container-low py-32 px-12 mb-32">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row gap-24 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="font-headline text-4xl font-bold mb-8">Core Competencies</h2>
              <p className="text-on-surface-variant leading-relaxed italic border-l-2 border-outline-variant pl-6">
                &quot;Marketing is not just about visibility; it is the art of engineering desire through operational excellence.&quot;
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest mb-6">
                  <span className="material-symbols-outlined text-primary">workspace_premium</span>
                </div>
                <h4 className="font-headline text-xl mb-4">Branding</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Crafting cohesive identity systems that resonate with high-net-worth clientele and casual diners alike.</p>
              </div>
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest mb-6">
                  <span className="material-symbols-outlined text-primary">handshake</span>
                </div>
                <h4 className="font-headline text-xl mb-4">B2B Negotiation</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Strategic partnership management and vendor negotiations to optimize supply chain costs by 15%.</p>
              </div>
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest mb-6">
                  <span className="material-symbols-outlined text-primary">monitoring</span>
                </div>
                <h4 className="font-headline text-xl mb-4">CRM &amp; Data</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Implementing data-driven loyalty programs that bridge the gap between digital interaction and physical sales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl mb-8 leading-tight">Ready to elevate your hospitality project?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="blue-shimmer text-white px-10 py-4 rounded-sm font-label font-bold tracking-widest uppercase text-sm">Download Full Case Study</button>
            <button className="border border-outline-variant px-10 py-4 rounded-sm font-label font-bold tracking-widest uppercase text-sm hover:bg-surface-container transition-colors">Book Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}
