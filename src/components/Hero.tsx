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
            className="relative min-h-[90vh] md:min-h-[600px] flex flex-col md:flex-row items-end md:items-stretch md:justify-between px-0 pt-0 pb-0 md:pl-0 md:py-0"
            style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}
        >
            {/* Mobile: Hero with background image, text/buttons at bottom, no gradient */}
            <section
                className="block lg:hidden relative min-h-screen w-full flex flex-col justify-end"
                style={{
                    minHeight: '100vh',
                    backgroundImage: 'url(/assets/hero/mobile-hero.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-full flex flex-col items-start px-5 pb-8 z-10" style={{ background: 'rgba(0,0,0,0.0)' }}>
                    <h1
                        className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white text-left"
                        style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', letterSpacing: '-0.01em' }}
                    >
                        <span className="block">
                            {isReferrer ? 'Radiology that puts your patients first' : 'Radiology that puts people first'}
                        </span>
                    </h1>
                    <p
                        className="mt-2 text-lg sm:text-xl text-white max-w-xl text-left mb-4"
                        style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                    >
                        {isReferrer
                            ? 'We make cutting-edge imaging clear, simple and accessible – delivering expert diagnostic services with compassionate care that you can trust for your patients.'
                            : 'We make cutting-edge imaging clear, simple and accessible – because when it comes to your health, you deserve both expert care and peace of mind.'}
                    </p>
                    <div className="flex items-center mt-2 mb-6">
                        <span className="inline-flex items-center justify-center w-7 h-7 mr-3 border-2 border-white bg-transparent rounded">
                            {/* White Checkmark SVG */}
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                                <path d="M4 8.5L7 11.5L12 5.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="text-white italic text-lg" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
                            We Bulk Bill most of our scans
                        </span>
                    </div>
                    <button
                        className="bg-axis-magenta hover:bg-axis-light-purple text-white font-semibold px-8 py-4 rounded-lg shadow transition text-lg self-start"
                        style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}
                    >
                        {isReferrer ? 'Refer a Patient' : 'Book Appointment'}
                    </button>
                    {isReferrer && (
                        <button
                            className="bg-axis-blue hover:bg-axis-royal-blue text-white font-semibold px-8 py-4 rounded-lg shadow transition text-lg self-start mt-4"
                            style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}
                        >
                            Access Patient Images
                        </button>
                    )}
                </div>
            </section>
            {/* Desktop: Background image with gradient overlay and content on top */}
            <div className="hidden lg:block w-full h-[600px] min-h-[700px] relative">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/hero/Hero.png"
                        alt="Radiology"
                        fill
                        className="object-cover w-full h-full"
                        priority
                        quality={95}
                    />
                    {/* Gradient overlay (left to right) */}
                    <div className="absolute inset-0 z-10 pointer-events-none" style={{
                        background: 'linear-gradient(90deg, #262262 0%, #632075 35%, #B41E8E 55%, #C8138D 63%, transparent 80%)',
                        opacity: 0.96,
                    }} />
                </div>
                {/* Content (centered vertically, left-aligned) */}
                <div className="relative z-20 flex flex-col justify-center items-start pl-24 pr-8 h-full w-full max-w-5xl">
                    <h1
                        className="text-7xl font-extrabold leading-[1.05] mb-8 text-white text-left"
                        style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', letterSpacing: '-0.01em' }}
                    >
                        {isReferrer
                            ? (<><span>Radiology that<br />puts your patients first</span></>)
                            : (<><span>Radiology that<br />puts people first</span></>)}
                    </h1>
                    <p
                        className="mt-2 text-2xl text-white max-w-xl text-left mb-8"
                        style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                    >
                        {isReferrer
                            ? 'We make cutting-edge imaging clear, simple and accessible – delivering expert diagnostic services with compassionate care that you can trust for your patients.'
                            : 'We make cutting-edge imaging clear, simple and accessible – because when it comes to your health, you deserve both expert care and peace of mind.'}
                    </p>
                    <div className="flex items-center mt-2 mb-8">
                        <span className="inline-flex items-center justify-center w-7 h-7 mr-3 border-2 border-white bg-transparent rounded">
                            {/* Magenta Checkmark SVG */}
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                                <path d="M4 8.5L7 11.5L12 5.5" stroke="#EC008C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="text-white italic text-lg" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
                            We Bulk Bill most of our scans
                        </span>
                    </div>
                    <button
                        className="bg-axis-magenta hover:bg-axis-light-purple text-white font-semibold px-10 py-4 rounded-lg shadow transition text-xl self-start"
                        style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}
                    >
                        {isReferrer ? 'Refer a Patient' : 'Book Appointment'}
                    </button>
                    {isReferrer && (
                        <button
                            className="bg-axis-blue hover:bg-axis-royal-blue text-white font-semibold px-10 py-4 rounded-lg shadow transition text-xl self-start mt-4"
                            style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}
                        >
                            Access Patient Images
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}