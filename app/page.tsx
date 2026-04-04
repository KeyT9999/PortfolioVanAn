import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Hosting from '@/components/Hosting'
import Marketing from '@/components/Marketing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Hosting />
      <Marketing />
      <Footer />
    </main>
  )
}
