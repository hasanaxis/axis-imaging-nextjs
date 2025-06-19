import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroServicesWithBreadcrumbs() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 1400px) {
            .hero-section-1400 {
              min-height: 700px !important;
            }
            .desktop-container-1400 {
              height: 700px !important;
              min-height: 700px !important;
            }
          }
          
          /* Tablet-specific styles */
          @media (min-width: 768px) and (max-width: 1023px) {
            .tablet-hero-height {
              height: 600px !important;
              min-height: 600px !important;
            }
            
            .tablet-content-positioning {
              padding-left: 2rem !important;
              padding-right: 2rem !important;
              max-width: none !important;
            }
            
            .tablet-gradient-overlay {
              background: linear-gradient(90deg, #262262 0%, #632075 20%, #B41E8E 35%, #C8138D 45%, rgba(200, 19, 141, 0.8) 50%, rgba(200, 19, 141, 0.4) 60%, transparent 75%) !important;
            }
          }
          
          /* Large tablet styles */
          @media (min-width: 1024px) and (max-width: 1199px) {
            .large-tablet-content {
              padding-left: 3rem !important;
              padding-right: 3rem !important;
            }
          }
        `
      }} />
      {/* Parent container for overlap effect */}
      <div className="relative">
        {/* Breadcrumbs Section */}
        <div className="absolute left-0 w-full z-30" style={{ top: '-90px' }}>
          {/* Wave Background */}
          <div className="absolute top-0 left-0 w-full" style={{ zIndex: 1, height: '210px' }}>
            <svg 
              className="w-full h-full md:mt-[93px]"
              viewBox="0 0 1440 210" 
              preserveAspectRatio="none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: '20px' }}
            >
              <path 
                d="M0,0 L1440,0 L1440,140 C1200,170 1000,185 800,175 C600,165 400,150 200,155 C100,157 50,158 0,157 Z" 
                fill="#FFF4FB" 
              />
            </svg>
          </div>
          {/* Breadcrumbs Navigation */}
          <div 
            className="relative z-10 flex items-center space-x-3 px-4 sm:px-6 pt-20 pb-2" 
            style={{ top: '64px', paddingTop: '50px' }}
          >
            <Link href="/">
              <span className="bg-[#23235B] text-white rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-base sm:text-lg font-medium shadow hover:bg-[#3a3a7a] transition cursor-pointer">
                Home
              </span>
            </Link>
            <span className="text-[#23235B] text-xl sm:text-2xl font-bold">&gt;</span>
            <Link href="/services">
              <span className="bg-[#F72585] text-white rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-base sm:text-lg font-medium shadow hover:bg-[#fa4fa3] transition cursor-pointer">
                Our Services
              </span>
            </Link>
            <span className="text-[#23235B] text-xl sm:text-2xl font-bold">&gt;</span>
            <Link href="/services/xray">
              <span className="bg-[#F72585] text-white rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-base sm:text-lg font-medium shadow hover:bg-[#fa4fa3] transition cursor-pointer">
                X-Ray
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Services Section */}
        <section
          className="hero-section-1400 relative flex flex-col md:flex-row items-end md:items-stretch md:justify-between"
          style={{ 
            fontFamily: 'deuterium-variable, Inter, sans-serif',
            paddingTop: '50px'
          }}
        >
          {/* Mobile Hero Section */}
          <section
            className="block md:hidden relative w-full h-[675px] flex flex-col justify-end"
            style={{
              backgroundImage: 'url(/assets/services/xray.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Gradient Overlay - Mobile */}
            <div
              className="absolute inset-0 z-5 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(236,0,140,0) 0%, rgba(234,1,140,0.04) 33%, rgba(209,14,141,0.7) 39%, rgba(197,21,141,1) 44%, rgba(180,30,142,1) 61%, rgba(99,32,117,1) 83%, rgba(38,34,98,1) 100%)',
              }}
            />
            {/* Content Container - Mobile */}
            <div className="relative w-full flex flex-col items-start px-4 sm:px-5 pb-6 sm:pb-8 z-10 max-w-[1260px] mx-auto">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-3 sm:mb-4 text-white text-left"
                style={{ 
                  fontFamily: 'deuterium-variable, Inter, sans-serif',
                  letterSpacing: '-0.01em'
                }}
              >
                X-Ray
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl text-white max-w-xl text-left mb-4 sm:mb-6"
                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
              >
                X-ray imaging uses a small amount of radiation to create detailed pictures of your bones and internal structures. This quick, painless procedure helps doctors diagnose fractures, infections, and other conditions with clear, high-quality images.
              </p>
              <button
                className="w-full sm:w-auto bg-axis-magenta hover:bg-axis-light-purple text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition text-base sm:text-lg"
                style={{ 
                  fontFamily: 'deuterium-variable, Inter, sans-serif',
                  boxShadow: '0 4px 24px 0 rgba(180, 30, 142, 0.25)'
                }}
              >
                Book Appointment
              </button>
            </div>
          </section>

          {/* Desktop Hero Section */}
          <div className="desktop-container-1400 tablet-hero-height hidden md:block w-full h-[500px] min-h-[500px] relative">
            {/* Background Container */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/services/xray.png"
                alt="X-ray procedure"
                fill
                className="object-contain object-right w-full h-full"
                priority
                quality={95}
              />
              {/* Gradient Overlay - Desktop & Tablet */}
              <div
                className="absolute inset-0 z-10 pointer-events-none tablet-gradient-overlay"
                style={{
                  background: 'linear-gradient(90deg, #262262 0%, #632075 25%, #B41E8E 45%, #C8138D 54%, rgba(200, 19, 141, 0.7) 57%, rgba(200, 19, 141, 0.3) 62%, transparent 70%)',
                }}
              />
            </div>
            {/* Content Container - Desktop & Tablet */}
            <div className="relative z-20 flex flex-col justify-center items-start h-full w-full max-w-[1800px] px-6 lg:px-24 mx-auto tablet-content-positioning large-tablet-content">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.05] mb-3 md:mb-4 lg:mb-6 text-white text-left"
                style={{ 
                  fontFamily: 'deuterium-variable, Inter, sans-serif',
                  letterSpacing: '-0.01em'
                }}
              >
                X-Ray
              </h1>
              <p
                className="text-base md:text-lg lg:text-xl text-white w-[46rem] text-left mb-4 md:mb-6 lg:mb-8"
                style={{ fontFamily: 'Inter, Arial, sans-serif' }}
              >
                X-ray imaging uses a small amount of radiation to create detailed pictures of your bones and internal structures. This quick, painless procedure helps doctors diagnose fractures, infections, and other conditions with clear, high-quality images.
              </p>
              <button
                className="bg-axis-magenta hover:bg-axis-light-purple text-white font-medium px-6 md:px-8 lg:px-10 py-3 lg:py-4 rounded-lg shadow-lg transition text-base md:text-lg lg:text-xl"
                style={{ 
                  fontFamily: 'deuterium-variable, Inter, sans-serif',
                  boxShadow: '0 4px 24px 0 rgba(180, 30, 142, 0.25)'
                }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 