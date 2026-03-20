/* eslint-disable react/no-unescaped-entities */
export default function Research() {
  return (
    <section id="research" className="pt-32 pb-24">
      {/* Hero Research Header */}
      <div className="px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-6">Tầm nhìn công nghệ</div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">AI &amp; AEO in Tourism.</h1>
            <div className="flex items-center gap-4 mb-12">
              <span className="px-3 py-1 bg-surface-container-high rounded-sm text-[10px] uppercase tracking-widest border border-outline-variant/20 font-medium">Research Finalist</span>
              <div className="h-[1px] w-24 bg-outline-variant/30"></div>
              <span className="text-sm font-light italic text-on-surface-variant">2024 Industry Intelligence Report</span>
            </div>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-lg text-on-surface-variant leading-relaxed italic border-l-2 border-primary/20 pl-8">
              Exploring the nexus of human trust and algorithmic precision in the future of global hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* Insights Grid (Asymmetric Layout) */}
      <div className="px-12 max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="bg-surface-container-low p-12 rounded-sm border-l border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">psychology</span>
                <h3 className="font-label text-xs uppercase tracking-widest font-semibold">Key Insight</h3>
              </div>
              <h2 className="font-serif text-3xl mb-6">Consumer trust and AI adoption in hospitality.</h2>
              <p className="text-on-surface-variant leading-relaxed">
                The paradox of personalization: while travelers crave the efficiency of AI-driven itineraries, the conversion threshold remains tied to the perceived "human touch" and transparency of the curation process.
              </p>
            </div>
            <div className="relative group overflow-hidden bg-surface-container-highest aspect-[4/5] rounded-sm">
              <img alt="Futuristic architectural concept" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/605531383_1377559400731943_9108653410773346440_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHQo4UmgoYXzhf_QmzBNcivAvqrURSFbMoC-qtRFIVsyjkj5OltA01hsEtzhDHGqoJWFdbJc3qyVVJ0GkCnb8a5&_nc_ohc=fo-P4TT6ugQQ7kNvwHu3EXL&_nc_oc=AdpjaHWolNAtW1EtD55g3LMKTlGWflA-nvjXqYPjibhdZG34Cz0CxmSypbXdi4_NnnU&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=_iFu5zkYEx1ysYSdcEikyA&_nc_ss=7a30f&oh=00_AfxrwzX-_8v9mCuTZuS1DlUWDbNmYzJXRpKow8Cat8ZQ8A&oe=69C28265"/>
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-background via-transparent to-transparent w-full">
                <p className="font-label text-[10px] uppercase tracking-widest opacity-60">Visual Study 01: Digital Architecture</p>
              </div>
            </div>
          </div>
          <div className="md:pt-40 space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">query_stats</span>
                <h3 className="font-label text-xs uppercase tracking-widest font-semibold">Analysis</h3>
              </div>
              <p className="text-xl font-serif leading-relaxed">
                Analysis of customer behavior and technology suggests that AEO (Answer Engine Optimization) is superseding traditional SEO in the travel discovery phase.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/15 pt-8">
                <div>
                  <div className="text-3xl font-serif text-primary">82%</div>
                  <div className="font-label text-[10px] uppercase tracking-tighter opacity-70">Trust in Human Curation</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-primary">64%</div>
                  <div className="font-label text-[10px] uppercase tracking-tighter opacity-70">AI Interaction Adoption</div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-1 border border-outline-variant/10 shadow-sm">
              <img alt="Data visualization chart" className="w-full h-64 object-cover" src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/589097267_4218047968409498_904782228036059533_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHFiIfUeCQZiYIyClxo0wJ1kQRHy7tbjl-RBEfLu1uOX7uIp40ADT9mWDdcdm0_Kn-B9kwuZczI47NllnWRPuGj&_nc_ohc=yv-bqMP_O5UQ7kNvwEQjfZs&_nc_oc=AdqBiBWkB4Fe6jAwuC5C6TJ0O5IVNK8JEz4959AH8pOWX43XClXNz_VMlEa7TV6Gs9s&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=raMeZ6_jrqY-oLN-K-qoWA&_nc_ss=7a30f&oh=00_AfzwkKh_BGJ1K03DKHiVCRvqCr5NXm94myrmeouShTFyFQ&oe=69C29573"/>
              <div className="p-6">
                <h4 className="font-serif text-lg mb-2">Technological Integration</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Monitoring the shift from keyword-based searches to conversational intent mapping in luxury travel segments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-surface-container-low py-32 px-12 border-y border-outline-variant/10 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-1">
            <h2 className="font-serif text-4xl mb-6">Academic Integrity.</h2>
            <p className="text-on-surface-variant mb-8">
              Our research methodology combines quantitative data from global hospitality aggregators with qualitative depth-interviews from industry leaders.
            </p>
            <button className="flex items-center gap-2 text-primary font-semibold tracking-wide group">
              <span className="font-label text-xs uppercase">Download Abstract</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="h-1 w-8 bg-primary"></div>
              <h4 className="font-label text-sm font-bold uppercase tracking-widest">Phase I: Collection</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">Aggregation of search intent data across major OTAs and emerging AI answer engines to identify divergence in user journey patterns.</p>
            </div>
            <div className="space-y-4">
              <div className="h-1 w-8 bg-primary-container"></div>
              <h4 className="font-label text-sm font-bold uppercase tracking-widest">Phase II: Validation</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-80">Cross-referencing behavioral datasets with actual booking conversions to isolate the &quot;Confidence Gap&quot; in AI recommendations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA / Future Outlook */}
      <div className="px-12 max-w-4xl mx-auto text-center">
        <span className="material-symbols-outlined text-5xl text-primary/30 mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
        <h2 className="font-serif text-4xl md:text-5xl italic mb-12 leading-tight">&quot;Innovation in hospitality is not about replacing the host, but empowering them with the wisdom of the machine.&quot;</h2>
        <div className="flex justify-center">
          <div className="w-16 h-[1px] bg-outline-variant"></div>
        </div>
      </div>
    </section>
  )
}
