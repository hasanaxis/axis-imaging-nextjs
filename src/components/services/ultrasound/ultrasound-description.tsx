import React from "react";

const UltrasoundDescription: React.FC = () => {
  return (
    <section className="relative w-full px-6 pt-24 pb-24 overflow-hidden">
      {/* Background SVG - Mobile */}
      <img
        src="/assets/services-page/ct-scan-page/ct-desc-bg-new.svg"
        alt="Ultrasound Description Background"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
        aria-hidden="true"
      />
      {/* Background SVG - Desktop */}
      <img
        src="/assets/services-page/ct-scan-page/bg-svg-large.svg"
        alt="Ultrasound Description Background"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#662D91' }}>
          What to expect during<br />your Ultrasound?
        </h2>
        <div className="space-y-8 max-w-2xl text-left mx-auto">
          {/* Before your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>Before your scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Wear comfortable, loose-fitting clothing</li>
              <li>You may need to fast for certain abdominal ultrasounds</li>
              <li>Drink water for pelvic or bladder ultrasounds</li>
              <li>Follow any specific preparation instructions we provide</li>
            </ul>
          </div>
          {/* During your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>During your scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>The procedure typically takes 15-45 minutes</li>
              <li>You&apos;ll lie comfortably on an examination table</li>
              <li>A warm gel will be applied to your skin</li>
              <li>The transducer will be moved over the area being examined</li>
              <li>You may be asked to change positions or hold your breath</li>
              <li>Our skilled sonographers will guide you through each step</li>
            </ul>
          </div>
          {/* After your scan */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#662D91' }}>After your scan</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You can return to normal activities immediately</li>
              <li>The gel will be wiped off your skin</li>
              <li>Your results will be analyzed by our expert radiologists</li>
              <li>Reports are typically available within 24 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltrasoundDescription; 