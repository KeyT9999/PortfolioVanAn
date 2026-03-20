/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <section id="about" className="max-w-[1920px] mx-auto px-12 py-24 mb-32">
      {/* Hero Section: Intentional Asymmetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
        <div className="lg:col-span-7 relative">
          <div className="font-label uppercase tracking-[0.2rem] text-primary mb-6">Our Philosophy</div>
          <h1 className="font-headline text-6xl lg:text-8xl md:text-6xl text-on-surface leading-[1.1] tracking-tight">
            Trái tim <br/> <span className="italic font-normal font-serif ml-12 md:ml-24">&amp; Trí tuệ</span>
          </h1>
          <div className="mt-16 max-w-xl">
            <p className="text-xl md:text-2xl font-body font-light text-on-surface-variant leading-relaxed">
              The intersection of magnetic charisma and strategic precision. We believe that true hospitality is an intellectual pursuit led by the heart.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 relative group">
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-surface-container-high editorial-shadow p-2">
            <img className="w-full h-full object-cover rounded-sm filter grayscale hover:grayscale-0 transition-all duration-700" src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/501039028_1202355758252309_6343487756814000815_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFf5eSC-HbfiX90bvQUIJ5ApXXsBwFRTI-ldewHAVFMjyn8QJ7qFaYvuawSeaNBcVPaW9zkJQ3h2DMURQWwluFp&_nc_ohc=_AR6_ex9cw0Q7kNvwGAj2Li&_nc_oc=AdrfExCOSNumuqg1goiVGKroA3d6aVydGtg1NHf2Z5ADHqygDyuXRNI0H2zfY9n3l3w&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=nlUcIQf9-ounpOMZRESZKQ&_nc_ss=7a30f&oh=00_AfwNOHh9A86EfSm77-isN4QqOAqlPlrLNZqqw8pzmL0WZg&oe=69C28A9D" alt="Professional MC in elegant suit holding a microphone" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-surface p-8 max-w-xs editorial-shadow border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">auto_awesome</span>
            <p className="font-body text-sm text-on-surface-variant italic">&quot;A host's greatest tool is not their voice, but their ability to make every guest feel like the only person in the room.&quot;</p>
          </div>
        </div>
      </div>

      {/* Narrative Section: Tonal Layering */}
      <div className="bg-surface-container-low py-32 px-6 md:px-12 -mx-12 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl text-on-surface">The MC's Charisma</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Commanding a room requires more than a script; it requires an intuitive understanding of human energy. My approach to hosting blends the warmth of a concierge with the authority of a diplomat, ensuring every event is an experience, not just a schedule.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-headline text-3xl text-on-surface">Strategic Marketing</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  Behind the stage presence lies a rigorous analytical framework. Every interaction is a touchpoint in a larger brand narrative. I apply marketing psychology to live events, ensuring the brand's message isn't just heard, but felt and remembered.
                </p>
              </div>
            </div>
            <div className="relative pt-12 md:pt-24 hidden md:block">
              <div className="aspect-square bg-surface-container-highest rounded-sm p-4 rotate-3 editorial-shadow">
                <img className="w-full h-full object-cover" src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/607076567_1377902420697641_6788106196815912713_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFClmO-1KtLSKE2mQnstlimV-FGjKBzEddX4UaMoHMR16eBE682Z1U9e-Lb7iz_nTd1pii2AJji_qa7pE7IS4SG&_nc_ohc=Mf76X8_M_YoQ7kNvwGAtnPc&_nc_oc=Adoxox1yQjHru15PWZ06yhAXToc-YEjJnmJG7DljRdql1MzW-O6BE_a91yMgLQDvOFY&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=J4B6vo_JE6gUKX9A0Ojk0Q&_nc_ss=7a30f&oh=00_AfxkdwZPvvdZNgN3AutMV-fOCOkjZ43Bu5GR1H_u7po-zg&oe=69C2744A" alt="Elegant boardroom setting with warm natural lighting" />
              </div>
              <div className="absolute top-0 right-0 p-12 bg-surface text-on-surface font-headline italic text-2xl -mr-12 border border-outline-variant/15">
                Hospitality-first <br/> Diplomacy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section: Bento-ish Grid */}
      <div className="py-16">
        <div className="text-center mb-24">
          <span className="font-label uppercase tracking-[0.2rem] text-primary">Core Pillars</span>
          <h2 className="font-headline text-4xl mt-4">The Foundation of Excellence</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-12 rounded-sm border border-outline-variant/10 hover:bg-surface-container-high transition-colors duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8">temp_preferences_custom</span>
            <h3 className="font-headline text-2xl mb-4">Refined Focus</h3>
            <p className="font-body text-on-surface-variant">Prioritizing the subtle nuances that define high-end experiences, from silent service to perfect timing.</p>
          </div>
          <div className="bg-surface-container-lowest p-12 rounded-sm border border-outline-variant/10 hover:bg-surface-container-high transition-colors duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8">gavel</span>
            <h3 className="font-headline text-2xl mb-4">Diplomatic Grace</h3>
            <p className="font-body text-on-surface-variant">Navigating complex environments with a steady hand, maintaining poise in the most demanding situations.</p>
          </div>
          <div className="bg-surface-container-lowest p-12 rounded-sm border border-outline-variant/10 hover:bg-surface-container-high transition-colors duration-500">
            <span className="material-symbols-outlined text-primary text-5xl mb-8">lightbulb</span>
            <h3 className="font-headline text-2xl mb-4">Strategic Intent</h3>
            <p className="font-body text-on-surface-variant">Ensuring every word and gesture serves the ultimate goal of the project, creating seamless brand alignment.</p>
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
          <cite className="mt-8 block font-label uppercase tracking-widest text-sm text-on-surface-variant not-italic">Our Executive Mandate</cite>
        </div>
      </div>
    </section>
  )
}
