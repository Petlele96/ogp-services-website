'use client'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import { CredBar, Clients, Stats, EmailStrip } from '../components/CredBar'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import TrackRecord from '../components/TrackRecord'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <CredBar />
      <Clients />
      <Services />
      <Gallery />
      <TrackRecord />
      <Stats />
      <About />
      <EmailStrip />
      <Contact />
      <Footer />
    </main>
  )
}
