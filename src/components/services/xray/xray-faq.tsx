'use client';
import { useState } from 'react';

const xrayFaqs = [
    { 
        question: 'What is an X-ray and how does it work?', 
        answer: 'An X-ray uses a small amount of radiation to create images of your bones and internal structures. The X-ray machine sends radiation through your body, and different tissues absorb it differently, creating a picture that shows bones, lungs, and other structures.' 
    },
    { 
        question: 'How long does an X-ray take?', 
        answer: 'Most X-rays take between 5-15 minutes, depending on the area being examined and the number of views needed. The actual exposure time is just a fraction of a second, but positioning and preparation may take additional time.' 
    },
    { 
        question: 'Do I need to prepare for my X-ray?', 
        answer: 'Usually, no special preparation is needed for X-rays. You may be asked to remove jewelry, metal objects, or change into a hospital gown. For certain types of X-rays, you might need to fast or follow specific instructions.' 
    },
    { 
        question: 'Is an X-ray safe?', 
        answer: 'X-rays are generally safe and use very low doses of radiation. The benefits of accurate diagnosis typically outweigh the small radiation risk. We use the lowest radiation dose possible while maintaining image quality.' 
    },
    { 
        question: 'Will I feel anything during the X-ray?', 
        answer: 'X-rays are completely painless. You won\'t feel the radiation at all. You may need to hold still or change positions, which might be slightly uncomfortable but not painful.' 
    },
    { 
        question: 'When will I get my X-ray results?', 
        answer: 'Results are typically available within 24 hours and will be sent to your referring doctor. You can also access your results online through our patient portal.' 
    },
    { 
        question: 'Can I drive after my X-ray?', 
        answer: 'Yes, you can drive immediately after an X-ray. There are no restrictions on your activities after the procedure.' 
    },
    { 
        question: 'What should I wear for my X-ray?', 
        answer: 'Wear comfortable, loose-fitting clothing without metal zippers, buttons, or jewelry. You may be asked to change into a hospital gown for the X-ray.' 
    },
];

export default function XrayFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-20 flex flex-col items-center z-10" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#662D91' }}>
                X-Ray FAQ
            </h2>
            <div className="w-full max-w-3xl mx-auto">
                {xrayFaqs.map((faq, idx) => (
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
                More X-Ray frequently asked questions
            </a>
        </section>
    );
} 