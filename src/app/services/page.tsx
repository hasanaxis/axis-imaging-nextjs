"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import HeroServices from '../../components/services/hero-services';
import Services from '../../components/services/services';
import BookAppointmentSection from '../../components/BookAppointmentSection';
import Footer from '../../components/Footer';

export default function ServicesPage() {
  const [isReferrer, setIsReferrer] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
      {/* Main content area for services page */}
      <main className="flex-1 w-full">
        <HeroServices />
        <Services />
        <BookAppointmentSection />
        {/* Add your service-related components here */}
      </main>
      <Footer />
    </div>
  );
}
