'use client';
import { useState } from 'react';

const dexaFaqs = [
    { 
        question: 'What is a DEXA scan and how does it work?', 
        answer: 'A DEXA (Dual-Energy X-ray Absorptiometry) scan uses two different X-ray beams to measure bone density. It\'s the most accurate way to assess bone health and detect osteoporosis. The scan measures how much X-ray energy is absorbed by your bones, providing precise density measurements.' 
    },
    { 
        question: 'How long does a DEXA scan take?', 
        answer: 'A DEXA scan typically takes 10-20 minutes, depending on the areas being scanned. The actual scanning time is usually just a few minutes, but preparation and positioning may take additional time.' 
    },
    { 
        question: 'Do I need to prepare for my DEXA scan?', 
        answer: 'Preparation is minimal. Avoid calcium supplements for 24 hours before the scan, wear comfortable clothing without metal, and remove jewelry. You may be asked to change into a hospital gown.' 
    },
    { 
        question: 'Is a DEXA scan safe?', 
        answer: 'Yes, DEXA scans are very safe and use extremely low doses of radiation - much lower than a regular X-ray. The radiation exposure is minimal and the benefits of early osteoporosis detection far outweigh any risks.' 
    },
    { 
        question: 'Will I feel anything during the DEXA scan?', 
        answer: 'DEXA scans are completely painless. You\'ll lie comfortably on a table while the scanner arm moves slowly over your body. You won\'t feel any radiation or discomfort.' 
    },
    { 
        question: 'When will I get my DEXA scan results?', 
        answer: 'Results are typically available within 24 hours and will be sent to your referring doctor. You can also access your results online through our patient portal.' 
    },
    { 
        question: 'Can I drive after my DEXA scan?', 
        answer: 'Yes, you can drive immediately after a DEXA scan. There are no restrictions on your activities after the procedure.' 
    },
    { 
        question: 'What should I wear for my DEXA scan?', 
        answer: 'Wear comfortable, loose-fitting clothing without metal zippers, buttons, or jewelry. You may be asked to change into a hospital gown for the scan.' 
    },
];

export default function DexaFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-20 flex flex-col items-center z-10" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#662D91' }}>
                DEXA Scan FAQ
            </h2>
            <div className="w-full max-w-3xl mx-auto">
                {dexaFaqs.map((faq, idx) => (
                    <div key={faq.question}>
                        <button
                            className="w-full text-left py-5 px-4 border-b border-gray-200 flex justify-between items-center text-xl text-[#252625] focus:outline-none"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <span>{faq.question}</span>
                            <span className="text-2xl">{openIndex === idx ? '−' : '+'}</span>
                        </button>
                        {openIndex === idx && (
                            <div className="px-4 py-5 pb-6 text-gray-500 text-lg bg-white-50">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
            <a href="#" className="mt-10 text-axis-royal-blue font-semibold underline text-lg hover:text-[#662D91]">
                More DEXA Scan frequently asked questions
            </a>
        </section>
    );
} 