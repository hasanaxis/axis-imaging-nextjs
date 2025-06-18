'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ClaritySection from '@/components/ClaritySection';
import ServicesSection from '@/components/ServicesSection';
import LocationSection from '@/components/LocationSection';
import FAQSection from '@/components/FAQSection';
import BookAppointmentSection from '@/components/BookAppointmentSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isReferrer, setIsReferrer] = useState(true);
  return (
    <>
      <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
      <Hero isReferrer={isReferrer} />
      <Features />
      <ClaritySection />
      <ServicesSection />
      <LocationSection />
      <FAQSection />
      <BookAppointmentSection />
      <Footer />
    </>
  );
}