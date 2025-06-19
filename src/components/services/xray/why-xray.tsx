import React from 'react';
import Image from 'next/image';

const reasons = [
  {
    icon: '/assets/services-page/ct-scan-page/SVGs-why-ct/accuracy-precision.svg',
    label: 'Diagnose bone fractures and injuries',
  },
  {
    icon: '/assets/services-page/ct-scan-page/SVGs-why-ct/heart-cardiac-care.svg',
    label: 'Detect lung conditions and infections',
  },
  {
    icon: '/assets/services-page/ct-scan-page/SVGs-why-ct/reports-results.svg',
    label: 'Examine dental and jaw problems',
  },
  {
    icon: '/assets/services-page/ct-scan-page/SVGs-why-ct/ct-scan-imaging.svg',
    label: 'Screen for chest abnormalities',
  },
  {
    icon: '/assets/services-page/ct-scan-page/SVGs-why-ct/fast-timing.svg',
    label: 'Monitor bone healing progress',
  },
  {
    icon: '/assets/services-page/ct-scan-page/SVGs-why-ct/security-safety.svg',
    label: 'Identify foreign objects in the body',
  },
];

export default function WhyXraySection() {
  return (
    <section className="relative flex justify-center items-center pt-0 pb-12 sm:py-12 px-0 sm:px-0 bg-[#f7f7fa]">
      <div className="bg-[#262262] rounded-none sm:rounded-xl shadow-lg max-w-5xl w-full px-6 py-10 md:py-14 flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-4xl font-medium text-center mb-2" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
          Why might you need an <br className="hidden md:block" />X-Ray?
        </h2>
        <p className="text-white text-base md:text-lg text-center mb-8 mt-2 opacity-90">
          Your doctor may recommend an X-ray to:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 w-full max-w-3xl">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-3">
                <Image src={reason.icon} alt="" width={60} height={60} />
              </div>
              <span className="text-white text-sm md:text-base opacity-90" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>{reason.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 