'use client';
import { useState } from 'react';

const faqs = [
    { question: 'Are all scans bulk billed?', answer: 'Yes, all scans are bulk billed for eligible patients.' },
    { question: 'Do I need a referral to book an appointment?', answer: 'Yes, a referral from your doctor is required.' },
    { question: 'How long does it take to receive my results?', answer: 'Results are typically available within 24 hours.' },
    { question: 'Is there parking available at the clinic?', answer: 'Yes, we have 300+ parking spaces available.' },
    { question: 'What should I bring to my appointment?', answer: 'Please bring your referral, Medicare card, and any previous scans.' },
    { question: 'How will I receive my results?', answer: 'Results will be sent to your referring doctor and can be accessed online.' },
    { question: 'Can BetterHelp substitute for traditional face-to-face therapy?', answer: 'BetterHelp is a supplement, not a substitute, for traditional therapy.' },
    { question: 'How long can I use BetterHelp?', answer: 'You can use BetterHelp as long as you need support.' },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-20 flex flex-col items-center bg-white" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>
            <h2 className="text-6xl md:text-7xl font-bold text-[#662D91] text-center mb-12">Frequently asked Questions</h2>
            <div className="w-full max-w-3xl mx-auto">
                {faqs.map((faq, idx) => (
                    <div key={faq.question}>
                        <button
                            className="w-full text-left py-5 px-4 border-b border-gray-200 flex justify-between items-center text-xl text-[#252625] focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <span>{faq.question}</span>
                            <span className="text-2xl">{openIndex === idx ? '−' : '+'}</span>
                        </button>
                        {openIndex === idx && (
                            <div className="px-4 pb-5 text-gray-700 text-lg bg-gray-50">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
            <a href="#" className="mt-10 text-axis-royal-blue font-semibold underline text-lg hover:text-[#662D91]">
                More frequently asked questions
            </a>
        </section>
    );
}