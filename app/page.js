import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Help from '../components/Help'
import DiagnosticServices from '../components/DiagnosticServices'
import Know from '../components/Know'
import Booking from '../components/Booking'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Help />
      <DiagnosticServices />
      <Know />
      <Booking />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}