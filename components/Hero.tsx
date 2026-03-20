export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden mb-32">
      {/* Asymmetrical Grid Container */}
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Content Column */}
        <div className="md:col-span-6 z-10 flex flex-col items-start gap-8">
          <div className="space-y-4">
            <span className="font-label text-xs uppercase tracking-[0.2rem] text-primary font-medium">Portfolio Vol. 1</span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] tracking-tight">
              Where the heart is, there <span className="italic font-normal">lies the treasure</span>.
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-on-surface-variant font-body text-lg leading-relaxed border-l-2 border-outline-variant pl-6 py-2">
              Multimedia Student | Professional Host | Strategic Marketer. 
              <br/>
              <span className="text-sm italic opacity-70">Crafting resonant narratives through modern hosting and digital strategy.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <button className="hero-gradient text-white px-10 py-4 rounded-sm font-label font-semibold text-sm tracking-widest uppercase shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
              View My Work
            </button>
            <button className="border border-outline-variant/30 text-on-surface px-10 py-4 rounded-sm font-label font-semibold text-sm tracking-widest uppercase hover:bg-surface-container-high transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
        
        {/* Right Visual Column (Asymmetrical Placement) */}
        <div className="md:col-span-6 relative mt-12 md:mt-0">
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-2xl ml-auto">
            {/* Main Image Frame */}
            <div className="absolute inset-0 bg-surface-container-low rounded-lg p-2 md:p-4 rotate-2 shadow-2xl overflow-hidden group">
              <img 
                alt="Professional Portrait" 
                className="w-full h-full object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/606141761_1377866870701196_7022180937168848850_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE5Y7UKvOKKpX5bZdL9Q2zlLdrY8oq76_4t2tjyirvr_qucvKk4MdR3g_7GZaq6Xqvw2h18zXoMZoJqsw9Qg-OW&_nc_ohc=1PqK9pEPZZcQ7kNvwE-Vcic&_nc_oc=Adr_EpLZMghPy_Lzp1IAdPlZ_0BKgTQr-Yu9-wDOR9yFNIoFKBUCO1N1MCseiHeOwe0&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=ezQafP-KTHBn2rT3CBLcVQ&_nc_ss=7a30f&oh=00_AfzgkAfS_pFrz9XP7xLzFpez1_nFv2b1cNboqBR2UtAUwA&oe=69C2998B"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-12 -right-12 font-headline text-9xl text-outline-variant/10 select-none">CH</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hidden md:flex">
        <span className="font-label text-[10px] uppercase tracking-[0.3rem]">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  )
}
