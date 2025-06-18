import React from 'react';
import Image from 'next/image';

export default function AboutUsHero() {
    return (
        <section className="relative w-full h-[520px] bg-[#F8F0F7] overflow-hidden">
            {/* Background image covering full width */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/assets/services-page/hero-services/sonographer-white-gloves.png"
                    alt="Medical professional performing ultrasound"
                    fill
                    className="object-contain object-right"
                    priority
                />
            </div>

            {/* 90 degree linear gradient overlay as specified */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: 'linear-gradient(90deg, #262262 0%, #632075 17%, #B41E8E 47%, rgba(197, 21, 141, 0.7) 56%, transparent 65%)'
                }}
            />

            {/* Content container */}
            <div className="relative z-20 h-full flex items-center px-8">
                <div className="max-w-xl">
                    <h1 className="text-white text-6xl font-bold mb-6 leading-tight">
                        About Us
                    </h1>
                    <p className="text-white text-lg leading-relaxed mb-8 max-w-lg">
                        As a family-owned radiology practice, we're deeply committed to serving our local community with expert diagnostic imaging services. Our team combines advanced technology with compassionate care to ensure every patient feels comfortable, informed and valued.
                    </p>
                    <button className="bg-[#EC008C] hover:bg-[#D1007A] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-base shadow-lg hover:shadow-xl">
                        Book Appointment
                    </button>
                </div>
            </div>
        </section >
    );
}