import React from 'react';
import Image from 'next/image';

export default function AboutUsSection() {
    return (
        <main className="flex flex-col items-center justify-center bg-white py-20 px-4 lg:py-50 md:px-0">
            <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col items-start justify-center mb-8 lg:mb-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#662D91] mb-6 leading-tight" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                        Where expert care meets exceptional service
                    </h1>
                    <p className="text-[#3C4247] text-base md:text-lg mb-4 max-w-lg">
                        Axis Imaging was founded with a simple belief: that high-quality, independent healthcare providers are essential for vibrant and healthy communities.
                    </p>
                    <p className="text-[#3C4247] text-base md:text-lg max-w-lg">
                        As a family-owned practice, we take pride in offering a warm, welcoming environment where your medical imaging needs are met with expertise and compassion.
                    </p>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src="/assets/clarity/2.png"
                        alt="Axis Imaging - Expert care and exceptional service"
                        width={500}
                        height={300}
                        className="w-[320px] h-[220px] md:w-[380px] md:h-[260px] rounded-lg object-cover"
                        priority
                        quality={95}
                    />
                </div>
            </div>
        </main>
    );
} 