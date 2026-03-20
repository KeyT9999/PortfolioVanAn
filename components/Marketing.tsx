export default function Marketing() {
  return (
    <section id="marketing" className="pt-32 pb-24">
      {/* Hero Section: Case Study Title */}
      <div className="px-12 max-w-[1920px] mx-auto mb-24">
        <div className="flex flex-col md:flex-row items-end gap-12">
          <div className="w-full md:w-2/3">
            <span className="font-label uppercase tracking-[0.2rem] text-primary text-xs mb-4 block">Operations &amp; Marketing</span>
            <h1 className="font-headline text-5xl lg:text-7xl md:text-5xl font-bold text-on-surface leading-tight tracking-tighter">
              Case Study: F&amp;B Strategic Leadership
            </h1>
            <p className="mt-8 text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Tư duy thực chiến trong việc tái định vị và tối ưu hóa vận hành, chuyển đổi các chỉ số kỹ thuật số thành doanh thu thực tế và giá trị thương hiệu bền vững.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <div className="p-8 bg-surface-container-low border-l-4 border-primary">
              <div className="text-xs font-label uppercase tracking-widest text-outline mb-2">Primary Achievement</div>
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
          <div className="lg:col-span-4 bg-on-surface text-surface-container-lowest p-10 rounded-lg flex flex-col justify-between h-[400px]">
            <div>
              <span className="material-symbols-outlined text-primary-container mb-6" style={{ fontSize: "40px" }}>hub</span>
              <h3 className="font-headline text-2xl mb-2">Zalo Ecosystem</h3>
              <p className="text-surface-variant text-sm leading-relaxed">Private community management ensuring 85% retention rate and high engagement through personalized CRM.</p>
            </div>
            <div>
              <div className="text-6xl font-headline font-bold">220+</div>
              <div className="text-xs font-label uppercase tracking-widest text-primary-container mt-2">Core Members</div>
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
