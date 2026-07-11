import useLenis from './lib/useLenis'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import WhyChoose from './components/WhyChoose'
import Specialities from './components/Specialities'
import Doctor from './components/Doctor'
import Doctors from './components/Doctors'
import Facilities from './components/Facilities'
import Gallery from './components/Gallery'
import NtrVaidyaseva from './components/NtrVaidyaseva'
import Emergency from './components/Emergency'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { Footer, MobileBar } from './components/Footer'
import ExpertServices from './components/Expertservices'

export default function App() {
  useLenis()
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <WhyChoose />
        <Specialities />
        <ExpertServices />
        <Doctor />
        <Doctors />
        <Facilities />
        <Gallery />
        <NtrVaidyaseva />
        <Emergency />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
