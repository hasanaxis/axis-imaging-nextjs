import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
    isReferrer: boolean;
}

export default function Hero({ isReferrer }: HeroProps) {
    // Local state to trigger animation
    const [show, setShow] = useState(isReferrer);

    // Update show state when isReferrer changes (for animation)
    useEffect(() => {
        setShow(false);
        const timeout = setTimeout(() => setShow(true), 50); // short delay for fade out/in
        return () => clearTimeout(timeout);
    }, [isReferrer]);

    return (
        <section
            className="relative min-h-[600px] flex items-center"
            style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}
        >
            {/* Background image with gradient overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero/Hero.png"
                    alt="Radiology"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    quality={95}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, #262262 0%, #632075 35%, #B41E8E 55%, transparent 63%)",
                        opacity: 0.90,
                    }}
                />
            </div>
            {/* Content */}
            <div
                key={isReferrer ? 'referrer' : 'patient'}
                className={`relative z-10 max-w-2xl pl-24 py-16 flex flex-col items-start justify-center transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
                    <span className="block">
                        {isReferrer ? 'Radiology that puts your patients first' : 'Radiology that puts people first'}
                    </span>
                </h1>
                <p className="mt-4 text-lg text-white max-w-xl">
                    {isReferrer
                        ? 'We make cutting-edge imaging clear, simple and accessible – delivering expert diagnostic services with compassionate care that you can trust for your patients.'
                        : 'We make cutting-edge imaging clear, simple and accessible – because when it comes to your health, you deserve both expert care and peace of mind.'}
                </p>
                <div className="flex items-center mt-6">
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 border-2 border-white bg-transparent rounded">
                        {/* Checkmark SVG */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 8.5L7 11.5L12 5.5" stroke="var(--color-axis-magenta)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <span className="text-white-200 italic">
                        We Bulk Bill most of our scans
                    </span>
                </div>
                <div className="flex space-x-4 mt-8">
                    <button className="bg-axis-magenta hover:bg-axis-light-purple text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                        {isReferrer ? 'Refer a Patient' : 'Book Appointment'}
                    </button>
                    {isReferrer && (
                        <button className="bg-axis-blue hover:bg-axis-royal-blue text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                            Access Patient Images
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}