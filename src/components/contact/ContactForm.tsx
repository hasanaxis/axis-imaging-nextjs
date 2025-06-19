'use client';
import React, { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', enquiryType: 'General', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError('Please fill in all required fields.');
            return;
        }
        setError('');
        setSubmitted(true);
        // Here you would handle the actual submission (API call, etc.)
    };

    return (
        <section className="w-full py-10 px-4 bg-white flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-[1260px] mx-auto flex flex-col gap-6">
                <style>{`
                    .contact-placeholder::placeholder {
                        color: #23235B;
                        opacity: 1;
                    }
                `}</style>
                <h2 className="text-3xl font-medium mb-6" style={{ color: '#23235B', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>Send Us a Message</h2>
                {error && <div className="text-red-500 text-left">{error}</div>}
                {submitted ? (
                    <div className="text-green-600 text-left text-lg">Thank you for contacting us! We will get back to you soon.</div>
                ) : (
                    <>
                        <div>
                            <label htmlFor="name" className="block font-medium mb-2" style={{ color: '#23235B', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name*"
                                value={form.name}
                                onChange={handleChange}
                                className="contact-placeholder border border-gray-300 rounded-lg px-4 py-3 text-lg w-full focus:outline-none focus:ring-2 focus:ring-[#632075] text-[#23235B]" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#23235B' }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium mb-2" style={{ color: '#23235B', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email*"
                                value={form.email}
                                onChange={handleChange}
                                className="contact-placeholder border border-gray-300 rounded-lg px-4 py-3 text-lg w-full focus:outline-none focus:ring-2 focus:ring-[#632075] text-[#23235B]" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#23235B' }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block font-medium mb-2" style={{ color: '#23235B', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Your Phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="contact-placeholder border border-gray-300 rounded-lg px-4 py-3 text-lg w-full focus:outline-none focus:ring-2 focus:ring-[#632075] text-[#23235B]" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#23235B' }}
                            />
                        </div>
                        <div>
                            <label htmlFor="enquiryType" className="block font-medium mb-2" style={{ color: '#23235B', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>Enquiry Type</label>
                            <select
                                id="enquiryType"
                                name="enquiryType"
                                value={form.enquiryType}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 text-lg w-full focus:outline-none focus:ring-2 focus:ring-[#632075] text-[#23235B]" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#23235B' }}
                            >
                                <option value="General">General</option>
                                <option value="Appointment">Appointment</option>
                                <option value="Referral">Referral</option>
                                <option value="Billing">Billing</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-medium mb-2" style={{ color: '#23235B', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message*"
                                value={form.message}
                                onChange={handleChange}
                                className="contact-placeholder border border-gray-300 rounded-lg px-4 py-3 text-lg w-full min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#632075] text-[#23235B]" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#23235B' }}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#F72585] hover:bg-[#B41E8E] text-white font-medium px-8 py-4 rounded-lg text-xl transition mt-2 w-fit"
                            style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}
                        >
                            Send Message
                        </button>
                    </>
                )}
            </form>
        </section>
    );
} 