"use client";

import React, { useState } from 'react';
import Header from '../../../components/Header';
import HeroServicesWithBreadcrumbs from '../../../components/services/xray/hero-xray-services';
import WhyXraySection from '../../../components/services/xray/why-xray';
import XrayDescription from '../../../components/services/xray/xray-description';
import XrayFAQ from '../../../components/services/xray/xray-faq';
import BookAppointmentSection from '../../../components/BookAppointmentSection';
import Footer from '../../../components/Footer';

export default function XrayServicesPage() {
  const [isReferrer, setIsReferrer] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
      {/* Main content area for X-ray services page */}
      <main className="flex-1 w-full">
        <HeroServicesWithBreadcrumbs />
        <div className="relative">
          <WhyXraySection />
          <div className="relative z-10 -mt-24">
            <XrayDescription />
            <XrayFAQ />
          </div>
        </div>
        <BookAppointmentSection />
        {/* Add your X-ray service-specific components here */}
      </main>
      <Footer />
    </div>
  );
} 