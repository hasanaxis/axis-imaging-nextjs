import Header from '../../components/Header'
import AboutHero from '@/components/about-us/AboutHero'
import OurStory from '@/components/about-us/OurStory'
import MissionValues from '@/components/about-us/MissionValues'
import OurTeam from '@/components/about-us/OurTeam'
import OurTechnology from '@/components/about-us/OurTechnology'
import OurPromise from '@/components/about-us/OurPromise'
import WhyChooseAxis from '@/components/about-us/WhyChooseAxis'
import CommunityFocus from '@/components/about-us/CommunityFocus'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About Us - Axis Imaging | Expert Care, Exceptional Service',
  description: 'Opening 2025 in Mickleham - Axis Imaging is your new local, independent provider of high-quality radiology services, bringing expert care right to your community.',
  keywords: 'axis imaging, about us, mickleham radiology, medical imaging, ct scan, x-ray, ultrasound, dexa scan, family owned clinic',
  openGraph: {
    title: 'About Us - Axis Imaging',
    description: 'Opening 2025 in Mickleham - Your new local radiology provider bringing expert care to your community.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <OurStory />
      <MissionValues />
      <OurTeam />
      <OurTechnology />
      <OurPromise />
      <WhyChooseAxis />
      <CommunityFocus />
      <CTA />
      <Footer />
      {/* Additional sections will be added here as we build them */}
    </>
  )
}