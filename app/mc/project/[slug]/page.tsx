import fs from 'fs'
import path from 'path'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

// A tiny helper to generate slug
function slugify(text: string) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const publicDir = path.join(process.cwd(), 'public');
  const folders = fs.readdirSync(publicDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
      
  let targetFolder = "";
  let title = "";
  
  for (const folder of folders) {
      if (slugify(removeAccents(folder)) === params.slug) {
          targetFolder = folder;
          title = folder.replace(/_/g, ' ');
          break;
      }
  }

  if (!targetFolder) {
      return (
        <main className="pt-24 pb-32 bg-[#fcf9f3] text-[#1c1c18] min-h-screen">
            <Navigation title="MC Vân An" />
            <div className="text-center mt-32">
                <h1 className="text-4xl font-serif">Project not found</h1>
                <Link href="/mc" className="text-[#0a4275] mt-4 inline-block hover:underline">Quay lại Portfolio</Link>
            </div>
        </main>
      );
  }

  const folderPath = path.join(publicDir, targetFolder);
  const files = fs.readdirSync(folderPath);
  
  const images = files
      .filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i))
      .map(f => `/${encodeURI(targetFolder)}/${encodeURI(f)}`);

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
            <div key={idx} className="break-inside-avoid overflow-hidden rounded-sm bg-[#ebe8e2] relative group">
              <img 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                alt={`${title} image ${idx + 1}`} 
                src={img}
              />
              <div className="absolute inset-0 bg-[#0a4275]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <Link className="inline-flex items-center text-xs uppercase tracking-widest font-label text-[#0a4275] hover:opacity-70 transition-opacity" href="/mc">
                <span className="material-symbols-outlined text-[14px] mr-2">arrow_back</span> Trở về Portfolio
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
