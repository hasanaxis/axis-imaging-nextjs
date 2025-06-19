"use client";

import React, { useState } from 'react';
import Header from '../../../components/Header';
import HeroServicesWithBreadcrumbs from '../../../components/services/ct-services/hero-ct-services';
import Footer from '../../../components/Footer';

export default function CTServicesPage() {
  const [isReferrer, setIsReferrer] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
      {/* Main content area for CT services page */}
      <main className="flex-1 w-full">
        <HeroServicesWithBreadcrumbs />
        {/* Add your CT service-specific components here */}
      </main>
      <Footer />
    </div>
  );
}
