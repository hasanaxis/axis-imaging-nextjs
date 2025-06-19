import React from 'react';

export default function LocationMapCard() {
    return (
        <section className="relative w-full flex justify-center items-center min-h-[420px] md:min-h-[520px] bg-white py-16 px-4">
            {/* Google Map */}
            <iframe
                title="Mickleham Location Map"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: 'grayscale(0.6) contrast(1.1)' }}
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=21+Cityside+Drive,+Mickleham,+VIC,+3064&output=embed"
            ></iframe>
            {/* Overlay Card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-xl w-full mx-4 flex flex-col items-start" style={{ boxShadow: '0 4px 32px 0 rgba(44,44,44,0.10)' }}>
                <span className="text-xs font-medium tracking-widest mb-2" style={{ color: '#EC008C', fontFamily: 'Inter, Arial, sans-serif' }}>
                    LOCATION
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#262262', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                    Mickleham
                </h2>
                <div className="text-[#3C4247] text-base md:text-lg mb-2" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
                    Level 1, 107/21 Cityside Drive,<br />
                    Mickleham, VIC, 3064
                </div>
                <div className="text-[#3C4247] text-base md:text-lg mb-4" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
                    03 000 00
                </div>
                <a
                    href="https://www.google.com/maps/dir/?api=1&destination=21+Cityside+Drive,+Mickleham,+VIC,+3064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2D2563] font-medium underline hover:text-[#EC008C] transition"
                    style={{ fontFamily: 'Inter, Arial, sans-serif' }}
                >
                    Get Directions
                </a>
            </div>
        </section>
    );
} 