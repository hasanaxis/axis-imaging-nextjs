"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/services/breadcrumbs';
import HeroServices from '../../components/services/hero-services';

export default function ServicesPage() {
  const [isReferrer, setIsReferrer] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
      <Breadcrumbs />
      {/* Main content area for services page */}
      <main className="flex-1 w-full">
        <HeroServices />
        {/* Add your service-related components here */}
      </main>
    </div>
  );
}
