/* eslint-disable react/no-unescaped-entities */
import { siteContent } from '@/data/siteContent'

export default function About() {
  const { expertiseSummary, careerObjectiveShort, contactMethods } = siteContent

  return (
    <section id="about" className="max-w-[1920px] mx-auto px-12 py-8 mb-8">


      {/* Vietnamese Introduction: Personal Letter */}
      <div className="bg-surface-container-low py-8 px-6 md:px-12 -mx-12 mb-8">
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

      {/* Expertise Summary: Lĩnh vực & Thành tích */}
      <div className="mb-8">
        <div className="text-center mb-16">
          <span className="font-label uppercase tracking-[0.2rem] text-primary">Tóm tắt chuyên môn</span>
          <h2 className="font-headline text-4xl mt-4 text-on-surface">Kinh nghiệm &amp; Lĩnh vực hoạt động</h2>
          <p className="mt-4 font-body text-on-surface-variant text-lg max-w-2xl mx-auto">{expertiseSummary.yearsIntro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expertiseSummary.fields.map((item, idx) => (
            <div key={idx} className="bg-surface-container-low border border-outline-variant/10 rounded-sm p-8 hover:bg-surface-container-high transition-colors duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-1 h-full min-h-[2rem] bg-primary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="font-headline text-lg text-on-surface mb-2 leading-tight">{item.field}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed group-hover:text-on-surface transition-colors duration-300">{item.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Section: Tonal Layering */}
      <div className="bg-surface py-8 px-6 md:px-12 -mx-12 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl text-on-surface">Người Kết Nối</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Với Vân An, cầm mic không chỉ để nói, mà là để lắng nghe nhịp đập của khán giả. Suốt 4 năm qua, từ những sân khấu nhỏ đến cơ hội được đồng hành từ 700 - 3.000 khán giả, tôi học được rằng: sức nặng của một người MC không nằm ở âm lượng, mà ở khả năng thấu cảm. Tôi luôn nỗ lực giữ cho mình sự điềm tĩnh và ấm áp, để mỗi sự kiện không chỉ là một kịch bản trôi chảy, mà là một không gian nơi mọi người tìm thấy sự kết nối thực sự.
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
              <div className="bg-surface-container-highest rounded-sm p-3 md:p-4 rotate-3 editorial-shadow">
                <img className="w-full h-auto rounded-sm drop-shadow-sm" src={encodeURI('/Ảnh đẹp để giới thiệu/quality_restoration_20250825215953064.JPEG')} alt="Vân An - Người Kết Nối" />
              </div>
              <div className="absolute top-0 right-0 p-12 bg-surface text-on-surface font-headline italic text-2xl -mr-12 border border-outline-variant/15">
                Hospitality-first <br/> Diplomacy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Objective: Ngắn hạn & Dài hạn & Liên hệ */}
      <div className="bg-surface-container-low py-8 px-6 md:px-12 -mx-12 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label uppercase tracking-[0.2rem] text-primary">Định hướng phát triển</span>
            <h2 className="font-headline text-4xl mt-4 text-on-surface">Mục tiêu nghề nghiệp</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ngắn hạn */}
            <div className="bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/10 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">flag</span>
                <h3 className="font-headline text-xl text-on-surface">Mục tiêu ngắn hạn</h3>
              </div>
              <div className="inline-block bg-primary/10 text-primary font-label text-xs uppercase tracking-wider px-3 py-1 rounded-sm mb-4">2 năm tới</div>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {careerObjectiveShort.shortTerm}
              </p>
            </div>

            {/* Dài hạn */}
            <div className="bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/10 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                <h3 className="font-headline text-xl text-on-surface">Mục tiêu dài hạn</h3>
              </div>
              <div className="inline-block bg-primary/10 text-primary font-label text-xs uppercase tracking-wider px-3 py-1 rounded-sm mb-4">5 năm tới</div>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {careerObjectiveShort.longTerm}
              </p>
            </div>

            {/* Thông tin liên hệ */}
            <div className="bg-surface-container-lowest p-10 rounded-sm border border-outline-variant/10 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">contact_page</span>
                <h3 className="font-headline text-xl text-on-surface">Thông tin liên hệ</h3>
              </div>
              <div className="space-y-4 font-body">
                {contactMethods.map((method, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                      {method.icon ?? 'chevron_right'}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs text-on-surface-variant/60 font-label uppercase tracking-wider mb-0.5">{method.label}</div>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-on-surface hover:text-primary transition-colors text-sm truncate block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-on-surface text-sm">{method.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skill" className="scroll-mt-32 py-16">
        <div className="text-center mb-16">
          <span className="font-label uppercase tracking-[0.2rem] text-primary">Expertise</span>
          <h2 className="font-headline text-4xl mt-4 text-on-surface">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Communications */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-sm p-8 hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">mic</span>
              <h3 className="font-headline text-lg text-on-surface tracking-wide uppercase">Communications</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Master of Ceremonies', 'Public Speaking', 'Brand Storytelling', 'Copywriting', 'Internal Documentation'].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-primary/8 text-on-surface font-body text-sm rounded-sm border border-outline-variant/15">{s}</span>
              ))}
            </div>
          </div>

          {/* Marketing */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-sm p-8 hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">trending_up</span>
              <h3 className="font-headline text-lg text-on-surface tracking-wide uppercase">Marketing</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Content Strategy', 'Social Media Management', 'Campaign Planning', 'Community Building'].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-primary/8 text-on-surface font-body text-sm rounded-sm border border-outline-variant/15">{s}</span>
              ))}
            </div>
          </div>

          {/* Hospitality */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-sm p-8 hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">hotel_class</span>
              <h3 className="font-headline text-lg text-on-surface tracking-wide uppercase">Hospitality</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Guest Experience', 'Service Quality Training', 'B2C Client Management', 'Event Coordination'].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-primary/8 text-on-surface font-body text-sm rounded-sm border border-outline-variant/15">{s}</span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-sm p-8 hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">build</span>
              <h3 className="font-headline text-lg text-on-surface tracking-wide uppercase">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Canva', 'Meta Business Suite', 'Microsoft Office', 'Zalo OA', 'Google Workspace'].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-primary/8 text-on-surface font-body text-sm rounded-sm border border-outline-variant/15">{s}</span>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-sm p-8 hover:bg-surface-container-high transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">language</span>
              <h3 className="font-headline text-lg text-on-surface tracking-wide uppercase">Language</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Vietnamese (Native)', 'English (Fluent)'].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-primary/8 text-on-surface font-body text-sm rounded-sm border border-outline-variant/15">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      
      {/* Signature Hospitality Quote */}
      <div className="py-16 bg-surface relative overflow-hidden flex justify-center items-center -mx-12 mt-8">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #0a4275 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </div>
        <div className="relative z-10 max-w-4xl text-center px-6">
          <span className="material-symbols-outlined text-primary text-3xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <blockquote className="font-headline text-3xl md:text-5xl leading-tight text-on-surface italic">
              &quot;Either way, mental strength is not just hoping that nothing ever goes wrong. It is believing that we have the capacity to handle it if it does.&quot;
          </blockquote>
          <cite className="mt-8 block font-label tracking-widest text-lg text-on-surface-variant not-italic">— Brianna Wiest</cite>
          <div className="mt-8 h-[1px] w-24 bg-primary mx-auto opacity-30"></div>
          <cite className="mt-8 block font-label uppercase tracking-widest text-sm text-primary not-italic">Phương châm sống</cite>
        </div>
      </div>
    </section>
  )
}
