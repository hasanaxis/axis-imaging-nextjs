import React from 'react';

export default function StepDirectionsSection() {
    return (
        <section className="relative w-screen max-w-none mt-20 px-10 lg:mt-0 lg:py-50 flex bg-[#FFF4FB] flex-col items-center justify-center overflow-hidden" style={{ minHeight: '600px', zIndex: 10, paddingLeft: 0, paddingRight: 0 }}>
            {/* Background Image with wavy top */}
            <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full">
                <img
                    src="/assets/location/location-background.png"
                    alt="Reception"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Content */}
            <div className="relative z-20 flex flex-col px-10 items-center w-full max-w-3xl px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#632075] mb-10">Watch our step by step directions</h2>
                <div className="w-full px-10 bg-gray-200 rounded-lg flex items-center justify-center" style={{ height: '320px' }}>
                    <span className="text-2xl font-semibold text-black">coming soon</span>
                </div>
            </div>
        </section>
    );
} 