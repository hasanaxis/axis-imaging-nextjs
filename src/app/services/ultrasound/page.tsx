"use client";

import React, { useState } from 'react';
import Header from '../../../components/Header';
import HeroServicesWithBreadcrumbs from '../../../components/services/ultrasound/hero-ultrasound-services';
import WhyUltrasoundSection from '../../../components/services/ultrasound/why-ultrasound';
import UltrasoundDescription from '../../../components/services/ultrasound/ultrasound-description';
import UltrasoundFAQ from '../../../components/services/ultrasound/ultrasound-faq';
import Footer from '../../../components/Footer';

export default function UltrasoundServicesPage() {
  const [isReferrer, setIsReferrer] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
      {/* Main content area for Ultrasound services page */}
      <main className="flex-1 w-full">
        <HeroServicesWithBreadcrumbs />
        <div className="relative">
          <WhyUltrasoundSection />
          <div className="relative z-10 -mt-24">
            <UltrasoundDescription />
            <UltrasoundFAQ />
          </div>
        </div>
        {/* Add your Ultrasound service-specific components here */}
      </main>
      <Footer />
    </div>
  );
}
