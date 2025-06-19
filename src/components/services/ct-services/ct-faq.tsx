'use client';
import { useState } from 'react';

const ctFaqs = [
    { 
        question: 'What is a CT scan and how does it work?', 
        answer: 'A CT (Computed Tomography) scan uses X-rays and computer technology to create detailed cross-sectional images of your body. It provides more detailed information than regular X-rays and can show bones, soft tissues, blood vessels, and organs in great detail.' 
    },
    { 
        question: 'How long does a CT scan take?', 
        answer: 'Most CT scans take between 10-30 minutes, depending on the area being scanned. The actual scanning time is usually just a few minutes, but preparation and positioning may take additional time.' 
    },
    { 
        question: 'Do I need to prepare for my CT scan?', 
        answer: 'Preparation depends on the type of CT scan. You may need to fast for several hours before the scan, avoid certain medications, or drink a contrast solution. We will provide specific instructions when you book your appointment.' 
    },
    { 
        question: 'Will I need contrast dye for my CT scan?', 
        answer: 'Some CT scans require contrast dye to highlight certain areas. If contrast is needed, it will be administered orally, intravenously, or both. Our team will explain the process and any potential side effects.' 
    },
    { 
        question: 'Is a CT scan safe?', 
        answer: 'CT scans are generally safe and use low doses of radiation. The benefits of accurate diagnosis typically outweigh the small radiation risk. We use the lowest radiation dose possible while maintaining image quality.' 
    },
    { 
        question: 'When will I get my CT scan results?', 
        answer: 'Results are typically available within 24 hours and will be sent to your referring doctor. You can also access your results online through our patient portal.' 
    },
    { 
        question: 'Can I drive after my CT scan?', 
        answer: 'Yes, you can usually drive after a CT scan unless you received sedation or contrast dye that made you feel unwell. If you have concerns, please arrange for someone to drive you.' 
    },
    { 
        question: 'What should I wear for my CT scan?', 
        answer: 'Wear comfortable, loose-fitting clothing without metal zippers, buttons, or jewelry. You may be asked to change into a hospital gown for the scan.' 
    },
];

export default function CTFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-20 flex flex-col items-center z-10" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#662D91' }}>
                CT-scan FAQ
            </h2>
            <div className="w-full max-w-3xl mx-auto">
                {ctFaqs.map((faq, idx) => (
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
                More CT-scan frequently asked questions
            </a>
        </section>
    );
}
