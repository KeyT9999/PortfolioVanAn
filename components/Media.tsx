/* eslint-disable react/no-unescaped-entities */
export default function Media() {
  return (
    <section id="media" className="pt-32 pb-24">
      {/* Hero Spotlight Section: MV 'Người Gieo Mầm Xanh' */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-6 block">Spotlight Production</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 tracking-tighter">
              Người Gieo <br/><span className="italic font-normal">Mầm Xanh</span>
            </h1>
            <div className="flex flex-wrap gap-8 items-center mb-12">
              <div className="flex flex-col">
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Role</span>
                <span className="font-body text-lg font-medium">Director &amp; Executive Producer</span>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="font-label text-[10px] uppercase tracking-widest text-outline">Engagement</span>
                <span className="font-body text-lg font-medium">18,000+ Organic Views</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 text-right pb-4">
            <p className="font-body text-lg text-on-surface-variant leading-relaxed italic max-w-sm ml-auto">
              &quot;Visual storytelling that breathes life into the spirit of community service and the silent strength of those who nurture the future.&quot;
            </p>
          </div>
        </div>
        
        {/* Cinematic Placeholder */}
        <div className="mt-16 relative aspect-video w-full overflow-hidden bg-surface-container-high rounded-sm group cursor-pointer shadow-2xl">
          <img alt="Cinematic frame from MV Nguoi Gieo Mam Xanh" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/501039028_1202355758252309_6343487756814000815_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFf5eSC-HbfiX90bvQUIJ5ApXXsBwFRTI-ldewHAVFMjyn8QJ7qFaYvuawSeaNBcVPaW9zkJQ3h2DMURQWwluFp&_nc_ohc=_AR6_ex9cw0Q7kNvwGAj2Li&_nc_oc=AdrfExCOSNumuqg1goiVGKroA3d6aVydGtg1NHf2Z5ADHqygDyuXRNI0H2zfY9n3l3w&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=nlUcIQf9-ounpOMZRESZKQ&_nc_ss=7a30f&oh=00_AfwNOHh9A86EfSm77-isN4QqOAqlPlrLNZqqw8pzmL0WZg&oe=69C28A9D"/>
          <div className="absolute inset-0 bg-on-background/20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center glass-effect transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 text-white">
            <span className="font-label text-[10px] uppercase tracking-[0.3em]">Official Music Video</span>
          </div>
        </div>
      </div>

      {/* CSR & Leadership Section (Trái tim phụng sự) */}
      <div className="bg-surface-container-low py-32 mb-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-16">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight">Trái tim phụng sự: <br/>A Narrative of Impact</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
                  Beyond the lens and the stage, leadership is defined by the lives touched. In directing 'Người Gieo Mầm Xanh', the mission was to bridge corporate social responsibility with raw, emotional creative vision.
                </p>
                {/* Leadership Stats Bento */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-lowest p-8 rounded-sm border-l-2 border-primary">
                    <span className="font-headline text-4xl text-primary block mb-2">46</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-outline">Associates Managed</span>
                  </div>
                  <div className="bg-surface-container-lowest p-8 rounded-sm">
                    <span className="font-headline text-4xl text-primary block mb-2">CSR</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-outline">Primary Focus</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-10 border border-outline-variant/20 rounded-sm italic text-on-surface-variant font-serif text-xl leading-relaxed relative">
                <span className="material-symbols-outlined absolute -top-4 left-6 text-primary-container text-4xl opacity-50">format_quote</span>
                &quot;True leadership isn't about being in front; it's about gieo (sowing) the seeds that allow others to flourish in the greenest of futures.&quot;
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-12">
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg">
                  <img alt="Leadership in action at event" className="w-full h-full object-cover" src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/607076567_1377902420697641_6788106196815912713_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFClmO-1KtLSKE2mQnstlimV-FGjKBzEddX4UaMoHMR16eBE682Z1U9e-Lb7iz_nTd1pii2AJji_qa7pE7IS4SG&_nc_ohc=Mf76X8_M_YoQ7kNvwGAtnPc&_nc_oc=Adoxox1yQjHru15PWZ06yhAXToc-YEjJnmJG7DljRdql1MzW-O6BE_a91yMgLQDvOFY&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=J4B6vo_JE6gUKX9A0Ojk0Q&_nc_ss=7a30f&oh=00_AfxkdwZPvvdZNgN3AutMV-fOCOkjZ43Bu5GR1H_u7po-zg&oe=69C2744A"/>
                </div>
                <div className="aspect-square bg-primary-container/10 flex flex-col justify-end p-8">
                  <span className="material-symbols-outlined text-primary mb-4">volunteer_activism</span>
                  <h3 className="font-headline text-2xl">Social Impact</h3>
                  <p className="font-body text-sm mt-2 opacity-70">Empowering local communities through creative media channels.</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="aspect-square rounded-sm overflow-hidden shadow-lg">
                  <img alt="Associates collaborating" className="w-full h-full object-cover" src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/607049779_1377890430698840_4174542373816425836_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGhtrZfRANRP2t6RPgVOomYWk_8vZGuODNaT_y9ka44M2dlS49B-48Rx5O6FDAI7b7f5IWUDlOCe3GNggfOn22O&_nc_ohc=2fUj5AwR96wQ7kNvwHuibvZ&_nc_oc=Adq-nRbOi_3MFWORND8CiLzYahBIIDB9fy91Lz7Qi693f3svkoy6DNXyq6tRPPZSMCg&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=AuYYmkZEP898XxZHgHSurg&_nc_ss=7a30f&oh=00_AfzbkvASRnbH49fCJyb7ynluOmW6rXqjTctNxh3Y_-KGGQ&oe=69C27E83"/>
                </div>
                <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg">
                  <img alt="Media production equipment" className="w-full h-full object-cover" src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/606141761_1377866870701196_7022180937168848850_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE5Y7UKvOKKpX5bZdL9Q2zlLdrY8oq76_4t2tjyirvr_qucvKk4MdR3g_7GZaq6Xqvw2h18zXoMZoJqsw9Qg-OW&_nc_ohc=1PqK9pEPZZcQ7kNvwE-Vcic&_nc_oc=Adr_EpLZMghPy_Lzp1IAdPlZ_0BKgTQr-Yu9-wDOR9yFNIoFKBUCO1N1MCseiHeOwe0&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=ezQafP-KTHBn2rT3CBLcVQ&_nc_ss=7a30f&oh=00_AfzgkAfS_pFrz9XP7xLzFpez1_nFv2b1cNboqBR2UtAUwA&oe=69C2998B"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics & Outcomes */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-24">
        <div className="text-center mb-24">
          <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary mb-4 block">The Outcomes</span>
          <h2 className="font-headline text-4xl md:text-5xl">Quantifying Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
          <div className="bg-surface py-16 px-8 text-center group transition-colors hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-primary-container text-3xl mb-6 block">visibility</span>
            <div className="font-headline text-5xl mb-2">18K+</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-outline">Organic Reach</div>
          </div>
          <div className="bg-surface py-16 px-8 text-center group transition-colors hover:bg-surface-container-low border-x border-outline-variant/15">
            <span className="material-symbols-outlined text-primary-container text-3xl mb-6 block">groups</span>
            <div className="font-headline text-5xl mb-2">46</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-outline">Team Members Guided</div>
          </div>
          <div className="bg-surface py-16 px-8 text-center group transition-colors hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-primary-container text-3xl mb-6 block">favorite</span>
            <div className="font-headline text-5xl mb-2">100%</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-outline">CSR Integration</div>
          </div>
        </div>
      </div>
    </section>
  )
}
