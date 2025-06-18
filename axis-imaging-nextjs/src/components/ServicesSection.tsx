'use client';
import Image from 'next/image';

const services = [
    {
        title: 'CT-Scan',
        img: '/assets/services/ct-scan.png',
    },
    {
        title: 'X-ray',
        img: '/assets/services/xray.png',
    },
    {
        title: 'Ultrasound',
        img: '/assets/services/ultrasound.png',
    },
    {
        title: 'DEXA',
        img: '/assets/services/dexa.png',
    },
    {
        title: 'Interventional Procedures',
        img: '/assets/services/interventional.png',
    },
    {
        title: 'Cardiac CT-Scan',
        img: '/assets/services/cardiac-ct.png',
    },
];

export default function ServicesSection() {
    return (
        <section
            className="relative pb-16 pt-10 -mt-12"
            style={{
                backgroundColor: '#23235B',
            }}
        >
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center px-4 py-10">
                <h2 className="text-white text-6xl md:text-6xl font-bold text-center mb-4 py-6" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                    Explore our services
                </h2>
                <p className="text-[#C4CED4] text-center mb-10 max-w-4xl text-2xl py-6" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                    State-of-the-art equipment combined with a team that's ready for you. That's what makes us a truly great experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="relative rounded-2xl overflow-hidden group transition-transform hover:scale-105 h-[340px] flex"
                        >
                            <Image
                                src={service.img}
                                alt={service.title}
                                fill
                                className="object-cover"
                                style={{ zIndex: 1 }}
                                quality={95}
                            />
                            {/* Title and arrow */}
                            <div className="absolute bottom-6 left-6 right-6 mb-6 flex items-center z-20">
                                <span className="text-white text-3xl font-medium drop-shadow-lg pr-16" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                                    {service.title}
                                </span>
                                <span className="absolute right-6 flex items-center justify-center w-10 h-10 rounded-full bg-axis-dark-purple group-hover:bg-axis-magenta transition">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                        <path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}