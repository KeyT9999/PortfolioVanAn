import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import SectionIndicator from '@/components/SectionIndicator'
import SocialSidebar from '@/components/SocialSidebar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SectionIndicator />
      <SocialSidebar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}

