import React from 'react';

export default function ContactAdditionalInfo() {
    return (
        <section className="w-full flex justify-center py-10 px-4 bg-white">
            <div className="w-full max-w-[1260px] bg-[#FAF8FF] border-l-8 border-[#F72585] p-8">
                <h3 className="text-2xl font-semibold mb-6" style={{ color: '#23235B', fontFamily: 'deuterium-variable, Inter, sans-serif' }}>Additional Info</h3>
                <ul className="mb-6 space-y-4">
                    <li className="text-lg" style={{ color: '#23235B', fontFamily: 'Inter, Arial, sans-serif' }}>
                        <span className="font-bold">• Bulk billing available</span> for eligible Medicare services
                    </li>
                    <li className="text-lg font-bold" style={{ color: '#23235B', fontFamily: 'Inter, Arial, sans-serif' }}>
                        • Free onsite parking
                    </li>
                    <li className="text-lg font-bold" style={{ color: '#23235B', fontFamily: 'Inter, Arial, sans-serif' }}>
                        • Wheelchair-accessible clinic
                    </li>
                    <li className="text-lg" style={{ color: '#23235B', fontFamily: 'Inter, Arial, sans-serif' }}>
                        <span className="font-bold">• Same-day and next-day appointments</span> often available
                    </li>
                </ul>
            </div>
        </section>
    );
} 