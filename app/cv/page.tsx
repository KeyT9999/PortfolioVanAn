import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CVPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-24">
        {/* Hero / Header Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">
            <div>
              <p className="font-label uppercase tracking-[0.2rem] text-xs text-primary mb-4">Curriculum Vitae</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-tighter mb-8">Elevating the Art of Hospitality.</h1>
            </div>
            <div className="pb-4">
              <div className="h-[1px] w-full bg-outline-variant/30 mb-8"></div>
              <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                A synthesis of strategic marketing and high-end hosting. Committed to the standards of global excellence, where every detail is a curated experience.
              </p>
            </div>
          </div>
        </section>

        {/* Career Objective: Heart & Treasure */}
        <section className="bg-surface-container-low py-20 lg:py-24 mb-20 lg:mb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                <img alt="Professional portrait of a host" className="w-full h-full object-cover" src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/501039028_1202355758252309_6343487756814000815_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFf5eSC-HbfiX90bvQUIJ5ApXXsBwFRTI-ldewHAVFMjyn8QJ7qFaYvuawSeaNBcVPaW9zkJQ3h2DMURQWwluFp&_nc_ohc=_AR6_ex9cw0Q7kNvwGAj2Li&_nc_oc=AdrfExCOSNumuqg1goiVGKroA3d6aVydGtg1NHf2Z5ADHqygDyuXRNI0H2zfY9n3l3w&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=nlUcIQf9-ounpOMZRESZKQ&_nc_ss=7a30f&oh=00_AfwNOHh9A86EfSm77-isN4QqOAqlPlrLNZqqw8pzmL0WZg&oe=69C28A9D"/>
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-xs font-label uppercase tracking-[0.15rem] text-primary mb-6">Objective</h2>
                <h3 className="text-3xl md:text-4xl font-serif mb-8 italic">&quot;Where the heart is, there lies the treasure.&quot;</h3>
                <p className="text-xl font-body font-light leading-relaxed text-on-surface mb-8">
                  Aspiring to redefine the 5-star experience at <span className="font-semibold text-primary">Sheraton</span>. My goal is to serve as a PR Manager, leveraging my background in Multimedia Communications to bridge the gap between corporate identity and heartfelt guest relations. I am driven by the philosophy that true luxury is not just seen, but felt.
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-8">
                  <div>
                    <span className="block text-xs font-label uppercase tracking-widest text-outline mb-2">Focus</span>
                    <span className="text-lg">5-Star Standards</span>
                  </div>
                  <div>
                    <span className="block text-xs font-label uppercase tracking-widest text-outline mb-2">Ambition</span>
                    <span className="text-lg">PR Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience: STAR Method */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24 lg:mb-32">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-4 md:mb-0">Professional Journey</h2>
            <span className="text-xs font-label uppercase tracking-widest text-outline">Selected Experience</span>
          </div>
          <div className="space-y-16 lg:space-y-24">
            {/* Role 1 */}
            <div className="group relative">
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-4">
                  <span className="text-sm font-label text-primary">2023 — Present</span>
                  <h4 className="text-2xl font-serif mt-2">Operations &amp; Marketing Lead</h4>
                  <p className="text-on-surface-variant italic">Phuong Doi Restaurant</p>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="bg-surface-container-lowest p-6 lg:p-8 rounded-sm shadow-sm border-l-2 border-primary-container/30">
                    <p className="text-sm font-label uppercase tracking-widest text-primary mb-4">Strategic Impact (STAR)</p>
                    <ul className="space-y-4 text-on-surface font-light leading-relaxed">
                      <li><strong className="font-medium">Situation:</strong> Faced with market saturation and stagnant growth in the local dining sector.</li>
                      <li><strong className="font-medium">Task:</strong> Revitalize brand identity and execute a multi-channel performance marketing strategy.</li>
                      <li><strong className="font-medium">Action:</strong> Built a robust B2B network and fostered community engagement through curated culinary events.</li>
                      <li><strong className="font-medium">Result:</strong> Achieved a 40% increase in quarterly revenue and established a premier brand reputation in the region.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Role 2 */}
            <div className="group relative">
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-4">
                  <span className="text-sm font-label text-primary">2022 — Present</span>
                  <h4 className="text-2xl font-serif mt-2">Professional MC</h4>
                  <p className="text-on-surface-variant italic">Stage &amp; Presence</p>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 bg-surface-container rounded-sm">
                      <h5 className="font-serif text-lg mb-2">Open Stem Day 2026</h5>
                      <p className="text-sm text-on-surface-variant">Lead Host for the premier innovation summit, managing over 2,000 attendees.</p>
                    </div>
                    <div className="p-6 bg-surface-container rounded-sm">
                      <h5 className="font-serif text-lg mb-2">Da&apos;ling Art Space</h5>
                      <p className="text-sm text-on-surface-variant">Curated opening gala MC, blending artistic storytelling with corporate hosting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Role 3 */}
            <div className="group relative">
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-4">
                  <span className="text-sm font-label text-primary">2021 — 2023</span>
                  <h4 className="text-2xl font-serif mt-2">Admissions Collaborator</h4>
                  <p className="text-on-surface-variant italic">FPT University</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg font-light leading-relaxed mb-6">
                    Served as a Brand Representative, managing student care and sales pipelines. Successfully increased application conversion rates through personalized counseling and high-energy workshop leadership.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase tracking-wider">Sales Mastery</span>
                    <span className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase tracking-wider">Student Care</span>
                    <span className="px-3 py-1 bg-surface-container-high text-[10px] font-label uppercase tracking-wider">Brand Rep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications: Bento Grid Style */}
        <section className="bg-surface-container-low py-20 lg:py-24 mb-20 lg:mb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Education */}
              <div className="lg:col-span-2 bg-surface-container-lowest p-8 lg:p-10 rounded-sm">
                <h2 className="text-xs font-label uppercase tracking-[0.15rem] text-primary mb-8">Academic Foundation</h2>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-serif">Multimedia Communications</h3>
                    <p className="text-on-surface-variant italic">FPT University</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary/20">school</span>
                </div>
                <div className="space-y-4 border-t border-outline-variant/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">Full Merit Scholarship Recipient</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <p className="text-base lg:text-lg">Dean&apos;s List for Academic Excellence</p>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div className="bg-primary text-white p-8 lg:p-10 rounded-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-xs font-label uppercase tracking-[0.15rem] text-primary-fixed-dim mb-8">Accreditation</h2>
                  <ul className="space-y-6">
                    <li>
                      <p className="text-sm font-label opacity-60">MC Professional</p>
                      <p className="font-serif text-lg">Voice &amp; Stage Mastery</p>
                    </li>
                    <li>
                      <p className="text-sm font-label opacity-60">Pedagogy</p>
                      <p className="font-serif text-lg">IBSTPI Skills</p>
                    </li>
                    <li>
                      <p className="text-sm font-label opacity-60">Digital Marketing</p>
                      <p className="font-serif text-lg">IE University Mix</p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 hidden lg:block">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities & Projects */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Activities */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif italic mb-10 lg:mb-12">Leadership &amp; Honors</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-serif text-primary">01</span>
                  <div>
                    <h4 className="font-semibold text-lg">&quot;Coc Doc&quot; Award 2024</h4>
                    <p className="text-on-surface-variant font-light">Recognized for creating the most viral and impactful digital content of the year.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-serif text-primary">02</span>
                  <div>
                    <h4 className="font-semibold text-lg">Vice President, FDN Events</h4>
                    <p className="text-on-surface-variant font-light">Orchestrated large-scale student engagements and corporate mixers.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <span className="text-2xl font-serif text-primary">03</span>
                  <div>
                    <h4 className="font-semibold text-lg">Top 5 Mentor</h4>
                    <p className="text-on-surface-variant font-light">Selected for exceptional leadership and peer-to-peer guidance excellence.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Projects */}
            <div className="order-1 lg:order-2 bg-surface-container-high p-8 lg:p-12 rounded-sm relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xs font-label uppercase tracking-[0.15rem] text-primary mb-8">Featured Projects</h2>
                <div className="mb-8 lg:mb-10">
                  <h4 className="text-2xl font-serif mb-2">Nguoi Gieo Mam Xanh</h4>
                  <p className="text-sm uppercase tracking-widest text-outline mb-4">CSR &amp; Production</p>
                  <p className="font-light text-on-surface-variant leading-relaxed">
                    A documentary-style CSR initiative focused on sustainable agriculture and community education.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-serif mb-2">AI &amp; AEO in Tourism</h4>
                  <p className="text-sm uppercase tracking-widest text-outline mb-4">Research Analysis</p>
                  <p className="font-light text-on-surface-variant leading-relaxed">
                    Investigating the impact of Answer Engine Optimization on high-end tourism discovery.
                  </p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 opacity-5">
                <span className="material-symbols-outlined text-[12rem]">auto_awesome</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center py-20 lg:py-24">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-serif mb-8">Ready to curate the next chapter together?</h2>
            <a className="inline-block border-b-2 border-primary pb-2 text-primary font-serif text-2xl hover:tracking-widest transition-all duration-500" href="mailto:contact@thecuratedhost.com">
              get-in-touch@thecuratedhost.com
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
