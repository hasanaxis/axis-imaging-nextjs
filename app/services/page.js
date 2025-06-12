// app/services/page.js
import Header from '../../components/Header'
import ServicesHero from '../../components/services/ServicesHero'
import ServicesOverview from '../../components/services/ServicesOverview'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesHero />
      <ServicesOverview />
      <CTA />
      <Footer />
    </main>
  )
}