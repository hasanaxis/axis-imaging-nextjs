import React from "react";

const CtScanDescription: React.FC = () => {
  return (
    <section className="relative w-full px-6 pt-24 pb-24 overflow-hidden">
      {/* Background SVG - Mobile */}
      <img
        src="/assets/services-page/ct-scan-page/ct-desc-bg-new.svg"
        alt="CT Scan Description Background"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
        aria-hidden="true"
      />
      {/* Background SVG - Desktop */}
      <img
        src="/assets/services-page/ct-scan-page/bg-svg-large.svg"
        alt="CT Scan Description Background"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#662D91' }}>
          What to expect during<br />your CT-Scan?
        </h2>
        <div className="space-y-8 max-w-2xl text-left mx-auto">
          {/* Before your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>Before your scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Wear comfortable, loose-fitting clothing</li>
              <li>Remove jewelry and metal objects</li>
              <li>Let us know if you&apos;re pregnant or may be pregnant</li>
              <li>Follow any specific preparation instructions we provide</li>
            </ul>
          </div>
          {/* During your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>During your scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The procedure typically takes 10-30 minutes</li>
              <li>You&apos;ll lie comfortably on a padded table</li>
              <li>The scanner will move around you – you won&apos;t feel anything</li>
              <li>You may need to hold your breath briefly for clearer images</li>
              <li>Our friendly technicians will guide you through each step</li>
            </ul>
          </div>
          {/* After your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>After your scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You can return to normal activities immediately</li>
              <li>Your results will be analyzed by our expert radiologists</li>
              <li>Reports are typically available within 24 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtScanDescription;
