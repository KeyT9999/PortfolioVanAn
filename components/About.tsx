/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section id="about" className="max-w-[1920px] mx-auto px-12 py-24 mb-32">
      {/* Hero Section: Intentional Asymmetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
        <div className="lg:col-span-7 relative">
          <div className="font-label uppercase tracking-[0.2rem] text-primary mb-6">Triết lý của tôi</div>
          <h1 className="font-headline text-6xl lg:text-8xl md:text-6xl text-on-surface leading-[1.1] tracking-tight">
            Trái tim <br/> <span className="italic font-normal font-serif ml-12 md:ml-24">&amp; Trí tuệ</span>
          </h1>
          <div className="mt-16 max-w-xl">
            <p className="text-xl md:text-2xl font-body font-light text-on-surface-variant leading-relaxed">
              Sự giao thoa giữa sức hút tự nhiên và tư duy chiến lược. Mình tin rằng sự hiếu khách thực sự là một hành trình tiếp thị bằng cả trái tim.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 relative group">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-surface-container-high editorial-shadow p-2">
            <img className="w-full h-full object-cover rounded-sm filter grayscale hover:grayscale-0 transition-all duration-700" src={encodeURI('/Ảnh đẹp để giới thiệu/quality_restoration_20250825190635597.JPEG')} alt="Vân An — Professional MC & Strategic Marketer" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface p-8 max-w-xs editorial-shadow border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">auto_awesome</span>
            <p className="font-body text-sm text-on-surface-variant italic">&quot;A host's greatest tool is not their voice, but their ability to make every guest feel like the only person in the room.&quot;</p>
          </div>
        </div>
      </div>

      {/* Vietnamese Introduction: Personal Letter */}
      <div className="bg-surface-container-low py-24 px-6 md:px-12 -mx-12 mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-2 border-primary pl-8 md:pl-12">
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-6 block">Lời giới thiệu</span>
            <p className="font-serif italic text-2xl md:text-3xl text-on-surface leading-relaxed mb-8">
              &quot;Mến chào Quý đối tác và các Anh/Chị,&quot;
            </p>
            <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
              <p>
                Là một sinh viên ngành Truyền thông tại FPT, Vân An chọn định nghĩa bản thân qua những con số và trải nghiệm thực tế thay vì chỉ là lý thuyết. <strong className="text-on-surface font-medium">4 năm kinh nghiệm MC</strong> giúp mình có sự nhạy bén trong ngôn ngữ, trong khi <strong className="text-on-surface font-medium">10 tháng điều hành Marketing &amp; F&amp;B</strong> đã rèn luyện cho mình tư duy đa nhiệm và khả năng thích nghi &quot;thần tốc&quot; trước mọi biến động thị trường.
              </p>
              <p>
                Mình luôn đặt trọn tâm huyết vào việc thấu hiểu khách hàng, vì với mình, đó là cách duy nhất để tối ưu hóa thương hiệu một cách bền vững. Rất sẵn lòng được đóng góp sức trẻ và góc nhìn mới mẻ của mình vào những dự án sắp tới của Quý doanh nghiệp.
              </p>
            </div>
          </div>

          {/* Expertise Tags */}
          <div className="mt-16 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-surface-container-high rounded-sm text-xs font-label uppercase tracking-wider border border-outline-variant/15">Digital Marketing</span>
            <span className="px-4 py-2 bg-surface-container-high rounded-sm text-xs font-label uppercase tracking-wider border border-outline-variant/15">Branding</span>
            <span className="px-4 py-2 bg-surface-container-high rounded-sm text-xs font-label uppercase tracking-wider border border-outline-variant/15">Content Strategy</span>
            <span className="px-4 py-2 bg-surface-container-high rounded-sm text-xs font-label uppercase tracking-wider border border-outline-variant/15">Performance Marketing</span>
            <span className="px-4 py-2 bg-surface-container-high rounded-sm text-xs font-label uppercase tracking-wider border border-outline-variant/15">F&amp;B Operations</span>
            <span className="px-4 py-2 bg-surface-container-high rounded-sm text-xs font-label uppercase tracking-wider border border-outline-variant/15">Event Hosting</span>
          </div>
        </div>
      </div>

      {/* Narrative Section: Tonal Layering */}
      <div className="bg-surface py-32 px-6 md:px-12 -mx-12 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl text-on-surface">Sức hút của người dẫn chương trình</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Điều hành sân khấu không chỉ dựa vào câu chữ — mà ở khả năng cảm nhận năng lượng của khán giả. Cách tiếp cận của mình kết hợp sự ấm áp của người lễ tân với bản lĩnh của người ngoại giao, đảm bảo mỗi sự kiện là một trải nghiệm đáng nhớ.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-headline text-3xl text-on-surface">Strategic Marketing</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Ẩn sau phong thái sân khấu là một khung tư duy phân tích sắc bén. Mọi điểm chạm đều là một mảnh ghép trong câu chuyện thương hiệu lớn hơn. Mình áp dụng tâm lý học Marketing vào các sự kiện trực tiếp để thông điệp không chỉ được nghe, mà còn được cảm nhận và ghi nhớ.
                </p>
              </div>
            </div>
            <div className="relative pt-12 md:pt-24 hidden md:block">
              <div className="aspect-square bg-surface-container-highest rounded-sm p-4 rotate-3 editorial-shadow">
                <img className="w-full h-full object-cover" src={encodeURI('/RESCONNECT 2025/ChuHai-00769_Original.JPG')} alt="Vân An tại sự kiện RESCONNECT 2025" />
              </div>
              <div className="absolute top-0 right-0 p-12 bg-surface text-on-surface font-headline italic text-2xl -mr-12 border border-outline-variant/15">
                Hospitality-first <br/> Diplomacy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Objective & Contact */}
      <div className="bg-surface-container-low py-24 px-6 md:px-12 -mx-12 mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-6">flag</span>
            <h3 className="font-headline text-2xl mb-4">Mục tiêu ngắn hạn</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Trở thành nhân sự chính thức tại môi trường tiêu chuẩn 5 sao quốc tế trong 3 tháng, bằng sự chân thành, năng lực giải quyết vấn đề và khả năng lan tỏa thông điệp ý nghĩa.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-6">rocket_launch</span>
            <h3 className="font-headline text-2xl mb-4">Mục tiêu dài hạn</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Trong 5 năm tới, phát triển lên vai trò Trưởng phòng PR với cam kết góp phần gia tăng 20% mật độ tín nhiệm thương hiệu thông qua những kết nối đối ngoại bền vững.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-6">contact_page</span>
            <h3 className="font-headline text-2xl mb-4">Liên hệ</h3>
            <div className="space-y-4 font-body text-on-surface-variant">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base">phone</span>
                <a href="tel:0986619798" className="hover:text-primary transition-colors">0986 619 798</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base">mail</span>
                <a href="mailto:nguyenthuyvanan05@gmail.com" className="hover:text-primary transition-colors text-sm">nguyenthuyvanan05@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-base">link</span>
                <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-thu%E1%BB%B3-v%C3%A2n-an-88108a30b/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-sm">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section: Bento-ish Grid */}
      <div id="skill" className="scroll-mt-32 py-16">
        <div className="text-center mb-24">
          <span className="font-label uppercase tracking-[0.2rem] text-primary">Cột trụ cốt lõi</span>
          <h2 className="font-headline text-4xl mt-4">Nền tảng của sự xuất sắc</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-12 rounded-sm border border-outline-variant/10 hover:bg-surface-container-high transition-colors duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8">temp_preferences_custom</span>
            <h3 className="font-headline text-2xl mb-4">Sự tập trung tinh tế</h3>
            <p className="font-body text-on-surface-variant">Chú trọng những chi tiết tinh tế tạo nên trải nghiệm cao cấp — từ phục vụ thầm lặng đến đú́ng giờ chíánh xác.</p>
          </div>
          <div className="bg-surface-container-lowest p-12 rounded-sm border border-outline-variant/10 hover:bg-surface-container-high transition-colors duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8">gavel</span>
            <h3 className="font-headline text-2xl mb-4">Ngoại giao tinh tế</h3>
            <p className="font-body text-on-surface-variant">Diễu hành trong môi trường phức tạp với sự bình tĩnh và cướng dịu trong mọi tình huống đòi hỏi cao nhất.</p>
          </div>
          <div className="bg-surface-container-lowest p-12 rounded-sm border border-outline-variant/10 hover:bg-surface-container-high transition-colors duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8">lightbulb</span>
            <h3 className="font-headline text-2xl mb-4">Tư duy chiến lược</h3>
            <p className="font-body text-on-surface-variant">Mọi lời nói và hành động đều phục vụ mục tiêu lớn hơn, tạo nên sự đồng nhất thương hiệu liền mạch.</p>
          </div>
        </div>
      </div>
      
      {/* Signature Hospitality Quote */}
      <div className="py-48 bg-surface relative overflow-hidden flex justify-center items-center -mx-12 mt-16">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #0a4275 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </div>
        <div className="relative z-10 max-w-4xl text-center px-6">
          <span className="material-symbols-outlined text-primary text-3xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <blockquote className="font-headline text-3xl md:text-5xl leading-tight text-on-surface italic">
              &quot;True hospitality is found at the intersection of where the heart meets the intellect.&quot;
          </blockquote>
          <div className="mt-12 h-[1px] w-24 bg-primary mx-auto opacity-30"></div>
          <cite className="mt-8 block font-label uppercase tracking-widest text-sm text-on-surface-variant not-italic">Phương châm sống</cite>
        </div>
      </div>
    </section>
  )
}
