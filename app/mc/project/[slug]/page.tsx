import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { projectDetails } from '../../data'

// SSG Generation to prevent Vercel Serverless Function Limit Excess
export function generateStaticParams() {
  return Object.keys(projectDetails).map(slug => ({ slug }))
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug];

  if (!project) {
      return (
        <main className="pt-24 pb-32 bg-[#fcf9f3] text-[#1c1c18] min-h-screen flex flex-col">
            <Navigation title="MC Vân An" />
            <div className="text-center mt-32 flex-grow">
                <h1 className="text-4xl font-serif mb-6">Project not found</h1>
                <Link href="/mc" className="inline-flex items-center text-xs uppercase tracking-widest font-label text-[#0a4275] border border-[#0a4275]/30 px-6 py-2 hover:bg-[#0a4275]/5 transition-colors">
                    <span className="material-symbols-outlined text-[14px] mr-2">arrow_back</span> Quay lại Portfolio
                </Link>
            </div>
            <Footer />
        </main>
      );
  }

  const { title, images } = project;

  return (
    <main className="pt-24 bg-[#fcf9f3] text-[#1c1c18] min-h-screen flex flex-col">
      <Navigation title="MC Vân An" />

      {/* Hero Section */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-16 mt-20 w-full text-center">
        <span className="font-label text-xs uppercase tracking-[0.2em] text-[#0a4275] mb-4 block">Dự án tiêu biểu</span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-[#1c1c18] leading-tight tracking-tight max-w-4xl mx-auto">
          {title}
        </h1>
        <div className="w-16 h-[1px] bg-[#0a4275] mx-auto mt-12 mb-16"></div>
      </header>

      {/* Full Gallery Section: Pinterest style masonry */}
      <section className="flex-grow px-6 md:px-12 max-w-screen-2xl mx-auto w-full mb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid overflow-hidden rounded-sm bg-[#ebe8e2] relative group shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-500">
              <img 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                alt={`${title} image ${idx + 1}`} 
                src={img}
              />
              <div className="absolute inset-0 bg-[#0a4275]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
            <Link className="inline-flex items-center justify-center px-10 py-4 border border-[#0a4275]/30 text-[#1c1c18] font-label text-sm tracking-widest uppercase hover:bg-[#ebe8e2] transition-colors" href="/mc">
                <span className="material-symbols-outlined text-[16px] mr-2">arrow_back</span> Back to Portfolio
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
