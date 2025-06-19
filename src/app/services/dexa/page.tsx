"use client";

import React, { useState } from 'react';
import Header from '../../../components/Header';
import HeroServicesWithBreadcrumbs from '../../../components/services/dexa/hero-dexa-services';
import WhyDexaSection from '../../../components/services/dexa/why-dexa';
import DexaDescription from '../../../components/services/dexa/dexa-description';
import DexaFAQ from '../../../components/services/dexa/dexa-faq';
import Footer from '../../../components/Footer';

export default function DexaServicesPage() {
  const [isReferrer, setIsReferrer] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
      {/* Main content area for DEXA services page */}
      <main className="flex-1 w-full">
        <HeroServicesWithBreadcrumbs />
        <div className="relative">
          <WhyDexaSection />
          <div className="relative z-10 -mt-24">
            <DexaDescription />
            <DexaFAQ />
          </div>
        </div>
        {/* Add your DEXA service-specific components here */}
      </main>
      <Footer />
    </div>
  );
} 