import React from "react";

const DexaDescription: React.FC = () => {
  return (
    <section className="relative w-full px-6 pt-24 pb-24 overflow-hidden">
      {/* Background SVG - Mobile */}
      <img
        src="/assets/services-page/ct-scan-page/ct-desc-bg-new.svg"
        alt="DEXA Description Background"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
        aria-hidden="true"
      />
      {/* Background SVG - Desktop */}
      <img
        src="/assets/services-page/ct-scan-page/bg-svg-large.svg"
        alt="DEXA Description Background"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#662D91' }}>
          What to expect during<br />your DEXA Scan?
        </h2>
        <div className="space-y-8 max-w-2xl text-left mx-auto">
          {/* Before your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>Before your DEXA scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Wear comfortable, loose-fitting clothing without metal</li>
              <li>Remove jewelry, watches, and metal accessories</li>
              <li>Avoid calcium supplements for 24 hours before the scan</li>
              <li>Let us know if you&apos;re pregnant or may be pregnant</li>
            </ul>
          </div>
          {/* During your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>During your DEXA scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The procedure typically takes 10-20 minutes</li>
              <li>You&apos;ll lie comfortably on a padded table</li>
              <li>The scanner arm will move slowly over your body</li>
              <li>You&apos;ll need to remain still during the scan</li>
              <li>Usually scans the spine and hip areas</li>
              <li>Our friendly technicians will guide you through each step</li>
            </ul>
          </div>
          {/* After your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>After your DEXA scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You can return to normal activities immediately</li>
              <li>Your results will be analyzed by our expert radiologists</li>
              <li>Reports are typically available within 24 hours</li>
              <li>Your doctor will discuss results and treatment options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DexaDescription; 