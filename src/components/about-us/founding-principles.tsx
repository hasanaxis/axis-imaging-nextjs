import React from 'react';

const principles = [
    {
        title: 'Clarity',
        description:
            'We believe in transparent communication with both patients and referring doctors, sharing knowledge to aid understanding and enable the best next steps in your care.',
    },
    {
        title: 'Community',
        description:
            'We see ourselves as part of the local communities we serve, fostering trust and continuity in care so patients know they\'re valued members of our healthcare family.',
    },
    {
        title: 'Compassion',
        description:
            'Our state-of-the-art technology is paired with genuine care, ensuring the highest standard of service is delivered with respect for your dignity and well-being.',
    },
    {
        title: 'Comfort',
        description:
            "We've created warm, welcoming facilities where patients feel at ease. Whether easing anxiety about an exam or providing support during your visit, patient comfort is our top priority.",
    },
    {
        title: 'Competence',
        description:
            "You can trust that you're in expert hands. We combine the latest medical technology with highly experienced professionals to ensure precise, timely results.",
    },
];

function PrincipleHeading({ title }: { title: string }) {
    return (
        <span
            className="text-[28px] md:text-[32px] font-medium"
            style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', color: '#262262' }}
        >
            <span style={{ color: '#EC008C' }}>{title.charAt(0)}</span>
            {title.slice(1)}
            {' -'}
        </span>
    );
}

export default function FoundingPrinciples() {
    return (
        <section className="w-full bg-[#2D2563] py-12 px-2 md:px-0 flex flex-col items-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-10 py-10" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                Guided by our founding principles
            </h2>
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {principles.slice(0, 2).map((p) => (
                    <div key={p.title} className="px-2 md:px-0">
                        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col justify-center min-h-[240px]">
                            <span className="block mb-4">
                                <PrincipleHeading title={p.title} />
                            </span>
                            <p className="text-[#3C4247] text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{p.description}</p>
                        </div>
                    </div>
                ))}
                {principles.slice(2, 4).map((p) => (
                    <div key={p.title} className="px-2 md:px-0">
                        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col justify-center min-h-[240px]">
                            <span className="block mb-4">
                                <PrincipleHeading title={p.title} />
                            </span>
                            <p className="text-[#3C4247] text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{p.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-5xl w-full flex justify-center mt-8">
                <div className="px-2 md:px-0 w-full md:w-2/3">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col justify-center min-h-[240px]">
                        <span className="block mb-4">
                            <PrincipleHeading title={principles[4].title} />
                        </span>
                        <p className="text-[#3C4247] text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{principles[4].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
