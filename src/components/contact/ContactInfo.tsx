'use client';
import React from 'react';

export default function ContactInfo() {
    return (
        <section className="w-full py-10 px-4 bg-white flex justify-center">
            <div className="w-full max-w-[1260px] mx-auto">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#23235B', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                    Clinic Details
                </h2>
                <div className="mb-4">
                    <span className="block text-lg mb-1" style={{ color: '#23235B', fontFamily: 'Inter, Arial, sans-serif' }}>
                        21 Cityside Drive, Mickleham, Victoria 3064
                    </span>
                </div>
                <div className="mb-4">
                    <a href="mailto:info@axisimaging.com.au" className="block text-lg mb-1 underline hover:text-[#632075]" style={{ color: '#23235B', fontFamily: 'Inter, Arial, sans-serif' }}>
                        info@axisimaging.com.au
                    </a>
                </div>
                <div className="mb-4">
                    <a href="tel:0300000" className="block text-lg underline hover:text-[#632075]" style={{ color: '#23235B', fontFamily: 'Inter, Arial, sans-serif' }}>
                        03 000 00
                    </a>
                </div>
                <div>
                    <span className="block text-lg" style={{ color: '#23235B', fontFamily: 'Inter, Arial, sans-serif' }}>
                        <strong>Opening Hours:</strong> 9am - 5pm Monday - Friday
                    </span>
                </div>
            </div>
        </section>
    );
} 