import React from 'react';
import Link from 'next/link';

export default function Breadcrumbs() {
  return (
    <div className="relative bg-white overflow-hidden min-h-[200px]" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
      {/* Responsive SVG Background */}
      <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 1 }}>
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* More dramatic wave curve */}
          <path 
            d="M0,0 L1440,0 L1440,120 C1200,160 1000,180 800,160 C600,140 400,120 200,140 C100,150 50,155 0,150 Z" 
            fill="#FFF4FB" 
          />
        </svg>
      </div>
      {/* Breadcrumbs */}
      <div className="relative z-10 flex items-center space-x-3 px-6 pt-8 pb-4">
        <Link href="/">
          <span className="bg-[#23235B] text-white rounded-full px-5 py-2 text-lg font-medium shadow hover:bg-[#3a3a7a] transition cursor-pointer">Home</span>
        </Link>
        <span className="text-[#23235B] text-2xl font-bold">&gt;</span>
        <Link href="/services">
          <span className="bg-[#F72585] text-white rounded-full px-5 py-2 text-lg font-medium shadow hover:bg-[#fa4fa3] transition cursor-pointer">Our Services</span>
        </Link>
      </div>
    </div>
  );
}