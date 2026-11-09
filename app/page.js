import Hero from '../components/Hero'
import { CredBar, Clients, Stats, EmailStrip } from '../components/CredBar'
import WhyOGP from '../components/WhyOGP'
import ServiceCards from '../components/ServiceCards'
import RecentProjects from '../components/RecentProjects'
import Gallery from '../components/Gallery'
import About from '../components/About'
import CtaBand from '../components/CtaBand'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <CredBar />
      <Clients />
      <WhyOGP />
      <ServiceCards />
      <RecentProjects />
      <Gallery />
      <Stats />
      <About />
      <CtaBand />
      <EmailStrip />
      <Contact />
    </main>
  )
}
