'use client';
import Image from 'next/image';

export default function LocationSection() {
    return (
        <section
            className="bg-[#FFFAFA] py-30 w-full flex flex-col items-center relative overflow-hidden"
            style={{
                fontFamily: 'deuterium-variable, Inter, sans-serif',
            }}
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-4">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col items-start justify-center">
                    <h2 className="text-6xl md:text-7xl font-bold text-[#662D91] mb-8 leading-tight">
                        Easy to find<br />and access
                    </h2>
                    <p className="text-3xl text-[#3C4247] mb-10">300+ parking spaces</p>
                    <button className="bg-[#23235B] hover:bg-[#3C4247] text-white font-semibold px-14 py-4 rounded-full text-xl transition">
                        Learn more
                    </button>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/assets/location/building.png"
                        alt="Building"
                        width={650}
                        height={420}
                        className="rounded-2xl object-cover"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        priority
                        quality={95}
                    />
                </div>
            </div>
            <div
                className="absolute left-0 bottom-0 w-full pointer-events-none"
                style={{
                    height: '100px',
                    width: '100%',
                    backgroundImage: "url('/assets/pink-wave-bg.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    backgroundSize: '100% 100%',
                    zIndex: 20,
                }}
            />
        </section>
    );
}