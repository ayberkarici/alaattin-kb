import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Badges from '@/components/Badges'
import About from '@/components/About'
import Events from '@/components/Events'
import Packages from '@/components/Packages'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Badges />
      <About />
      <Events />
      <Packages />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
