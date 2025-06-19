'use client';
import { useState } from 'react';

const ultrasoundFaqs = [
    { 
        question: 'What is an ultrasound and how does it work?', 
        answer: 'An ultrasound uses high-frequency sound waves to create real-time images of your internal organs and tissues. The sound waves bounce off different structures in your body and create images that help doctors diagnose and monitor various conditions.' 
    },
    { 
        question: 'How long does an ultrasound take?', 
        answer: 'Most ultrasounds take between 15-45 minutes, depending on the area being examined and the complexity of the study. The actual scanning time varies based on what your doctor needs to see.' 
    },
    { 
        question: 'Do I need to prepare for my ultrasound?', 
        answer: 'Preparation depends on the type of ultrasound. For abdominal ultrasounds, you may need to fast for several hours. For pelvic or bladder ultrasounds, you may need to drink water to fill your bladder. We will provide specific instructions when you book your appointment.' 
    },
    { 
        question: 'Is an ultrasound safe?', 
        answer: 'Yes, ultrasounds are completely safe and use no radiation. They use sound waves, which are harmless to your body. This makes ultrasound ideal for monitoring pregnancies and examining sensitive areas.' 
    },
    { 
        question: 'Will I feel anything during the ultrasound?', 
        answer: 'Ultrasounds are generally painless. You may feel slight pressure as the transducer is moved over your skin, and the gel may feel cool initially. The procedure is non-invasive and comfortable.' 
    },
    { 
        question: 'When will I get my ultrasound results?', 
        answer: 'Results are typically available within 24 hours and will be sent to your referring doctor. You can also access your results online through our patient portal.' 
    },
    { 
        question: 'Can I drive after my ultrasound?', 
        answer: 'Yes, you can drive immediately after an ultrasound. There are no restrictions on your activities after the procedure.' 
    },
    { 
        question: 'What should I wear for my ultrasound?', 
        answer: 'Wear comfortable, loose-fitting clothing that can be easily moved or removed if needed. You may be asked to change into a hospital gown for certain types of ultrasounds.' 
    },
];

export default function UltrasoundFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-20 flex flex-col items-center z-10" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#662D91' }}>
                Ultrasound FAQ
            </h2>
            <div className="w-full max-w-3xl mx-auto">
                {ultrasoundFaqs.map((faq, idx) => (
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
                More Ultrasound frequently asked questions
            </a>
        </section>
    );
} 