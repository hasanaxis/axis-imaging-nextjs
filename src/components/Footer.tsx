'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#2B2960] text-[#C4CED4] pt-16 pb-8 px-4 overflow-x-hidden" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12">
                {/* Logo and description */}
                <div className="flex-1 min-w-[220px] text-sm mb-10 md:mb-0 w-full max-w-full">
                    <div className="mb-6">
                        <Image src="/assets/logos/Group 4.png" alt="Axis Imaging Logo" width={120} height={40} priority />
                    </div>
                    <p>
                        As a family-owned practice, we&apos;re deeply committed to serving our local community with expert radiology services. Our team combines advanced technology with compassionate care to ensure every patient feels comfortable, informed and valued.
                    </p>
                </div>

                {/* Links columns */}
                <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-full">
                    {/* Customer Support */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-3">Customer Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">Find our clinic</Link></li>
                            <li><Link href="#" className="hover:underline">Feedback</Link></li>
                            <li><Link href="#" className="hover:underline">My Account</Link></li>
                            <li><Link href="#" className="hover:underline">Book A Free Consultation</Link></li>
                            <li><Link href="#" className="hover:underline">FAQs</Link></li>
                            <li><Link href="#" className="hover:underline">Prep + Aftercare</Link></li>
                            <li><Link href="#" className="hover:underline">Appointments + Cancellations</Link></li>
                            <li><Link href="#" className="hover:underline">Terms + Conditions</Link></li>
                            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:underline">Click and Collect</Link></li>
                        </ul>
                        <h4 className="text-white text-lg font-bold mt-6 mb-2">Follow Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">Blog</Link></li>
                            <li><Link href="#" className="hover:underline">Newsletter</Link></li>
                        </ul>
                        <div className="flex gap-4 mt-4">
                            <Link href="#" aria-label="Facebook" className="text-white hover:text-[#C4CED4]"><FaFacebookF size={24} /></Link>
                            <Link href="#" aria-label="Instagram" className="text-white hover:text-[#C4CED4]"><FaInstagram size={24} /></Link>
                            <Link href="#" aria-label="YouTube" className="text-white hover:text-[#C4CED4]"><FaYoutube size={24} /></Link>
                            <Link href="#" aria-label="LinkedIn" className="text-white hover:text-[#C4CED4]"><FaLinkedinIn size={24} /></Link>
                        </div>
                    </div>
                    {/* Our Services */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-3">Our Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">CT-Scan</Link></li>
                            <li><Link href="#" className="hover:underline">X-ray</Link></li>
                            <li><Link href="#" className="hover:underline">Ultrasound</Link></li>
                            <li><Link href="#" className="hover:underline">DEXA</Link></li>
                            <li><Link href="#" className="hover:underline">Interventional procedures</Link></li>
                            <li><Link href="#" className="hover:underline">Cardiac CT</Link></li>
                            <li><Link href="#" className="hover:underline">Euflexxa Injection</Link></li>
                        </ul>
                    </div>
                    {/* Corporate */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-3">Corporate</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:underline">About Us</Link></li>
                            <li><Link href="#" className="hover:underline">Our team</Link></li>
                            <li><Link href="#" className="hover:underline">Our Medical Team</Link></li>
                        </ul>
                    </div>
                    {/* Clinic Details */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-3">CLINICS DETAILS</h4>
                        <address className="not-italic mb-4 text-sm">
                            21 Cityside Drive,<br />
                            Mickleham, Victoria 3064
                        </address>
                        <div className="flex items-center gap-2 mb-2">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" stroke="#C4CED4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span>03 000 00</span>
                        </div>
                        <div className="flex items-center gap-2 break-words">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8m0 0l8-8m-8 8v8" stroke="#C4CED4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            <span className="break-words">info@axisimaging.com.au</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center mt-12 pt-8 border-t border-[#3C3A6B] text-sm">
                <span>© 2025 Axis Imaging. All Rights Reserved.</span>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="text-[#00B2E3] hover:underline">Privacy Policy</Link>
                    <span className="text-[#C4CED4]">/</span>
                    <Link href="#" className="text-[#00B2E3] hover:underline">Terms + Conditions</Link>
                </div>
            </div>
        </footer>
    );
}
