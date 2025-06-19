'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
    isReferrer: boolean;
    setIsReferrer: (val: boolean) => void;
}

export default function Header({ isReferrer, setIsReferrer }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <header className="bg-[#23235B] text-white px-4 py-3 flex items-center justify-between w-full relative z-50" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
            {/* Logo */}
            <div className="flex items-center ml-4">
                <Link href="/"><Image src="/assets/logos/Group 4.png" alt="Axis Imaging Logo" width={100} height={34} priority /></Link>
            </div>

            {/* Hamburger/Close Button (Mobile) */}
            <button
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-axis-magenta hover:bg-axis-light-purple transition-colors focus:outline-none z-50 relative"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
                {menuOpen ? (
                    /* Close Icon */
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    /* Hamburger Icon */
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <rect y="6" width="28" height="2.5" rx="1.25" fill="white" />
                        <rect y="13" width="28" height="2.5" rx="1.25" fill="white" />
                        <rect y="20" width="28" height="2.5" rx="1.25" fill="white" />
                    </svg>
                )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 ml-8 pt-5 pb-5 pr-5 pl-5">
                <a href="/services" className="text-white font-regular hover:text-axis-magenta transition">Our Services</a>
                <a href="/about-us" className="text-white font-regular hover:text-axis-magenta transition">About Us</a>
                <a href="/contact" className="text-white font-regular hover:text-axis-magenta transition">Contact Us</a>
                <a href="#" className="text-white font-regular hover:text-axis-magenta transition">
                    {isReferrer ? 'Referrer Information' : 'Patient Information'}
                </a>
            </nav>

            {/* Desktop Toggle & Button */}
            <div className="hidden lg:flex items-center space-x-6 ml-8">
                <div className="flex items-center space-x-2">
                    <span className={isReferrer ? 'font-regular' : ''}>Referrer</span>
                    <button
                        type="button"
                        aria-pressed={isReferrer}
                        className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none flex items-center ${isReferrer ? 'bg-[#662D91]' : 'bg-pink-500'}`}
                        onClick={() => setIsReferrer(!isReferrer)}
                    >
                        <span
                            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${isReferrer ? 'translate-x-0' : 'translate-x-5'}`}
                        />
                    </button>
                    <span className={!isReferrer ? 'font-regular' : ''}>Patient</span>
                </div>
                <button className="bg-axis-magenta hover:bg-axis-light-purple text-white font-regular px-5 py-2 mr-4 rounded-lg shadow transition min-w-[180px]">
                    {isReferrer ? 'Refer a Patient' : 'Book Appointment'}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <>
                {/* Overlay */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
                        style={{ background: 'rgba(0,0,0,0.7)' }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}

                {/* Drawer */}
                <div
                    className={`fixed top-0 right-0 h-full w-full lg:w-80 max-w-[85vw] bg-[#23235B] shadow-2xl flex flex-col px-4 py-6 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}
                >
                    {/* Header with logo and close button */}
                    <div className="flex items-center justify-between mb-8 pt-2">
                        <Image src="/assets/logos/Group 4.png" alt="Axis Imaging Logo" width={80} height={27} />
                        <button
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-axis-magenta hover:bg-axis-light-purple transition-colors focus:outline-none"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col space-y-1 mb-8">
                        <a
                            href="#"
                            className="text-white font-regular text-lg py-4 px-2 hover:text-axis-magenta transition border-b border-white/20"
                            onClick={() => setMenuOpen(false)}
                        >
                            Our Services
                        </a>
                        <a
                            href="#"
                            className="text-white font-regular text-lg py-4 px-2 hover:text-axis-magenta transition border-b border-white/20"
                            onClick={() => setMenuOpen(false)}
                        >
                            About Us
                        </a>
                        <a
                            href="/contact"
                            className="text-white font-regular text-lg py-4 px-2 hover:text-axis-magenta transition border-b border-white/20"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                        <a
                            href="#"
                            className="text-white font-regular text-lg py-4 px-2 hover:text-axis-magenta transition border-b border-white/20"
                            onClick={() => setMenuOpen(false)}
                        >
                            {isReferrer ? 'Referrer Information' : 'Patient Information'}
                        </a>
                    </nav>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center space-x-3 mb-8 py-4 bg-white/10 rounded-lg">
                        <span className={`text-white text-sm ${isReferrer ? 'font-regular' : 'font-normal'}`}>
                            Referrer
                        </span>
                        <button
                            type="button"
                            aria-pressed={isReferrer}
                            className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none flex items-center ${isReferrer ? 'bg-[#662D91]' : 'bg-axis-magenta'}`}
                            onClick={() => setIsReferrer(!isReferrer)}
                        >
                            <span
                                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${isReferrer ? 'translate-x-0' : 'translate-x-5'}`}
                            />
                        </button>
                        <span className={`text-white text-sm ${!isReferrer ? 'font-regular' : 'font-normal'}`}>
                            Patient
                        </span>
                    </div>

                    {/* CTA Button */}
                    <button
                        className="w-full bg-axis-magenta hover:bg-axis-light-purple text-white font-regular text-base py-4 px-4 rounded-lg shadow-lg transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        {isReferrer ? 'Refer a Patient' : 'Book Appointment'}
                    </button>
                </div>
            </>
        </header>
    );
}