'use client';
import Image from 'next/image';

export default function BookAppointmentSection() {
    return (
        <section className="w-full flex justify-center items-center py-16 bg-white">
            <div className="w-full max-w-6xl bg-[#23235B] rounded-3xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                {/* Left: Image */}
                <div className="relative w-full md:w-1/2 h-[340px] md:h-[420px] flex-shrink-0">
                    <Image
                        src="/assets/cta/cta-nurse-patient.png" // Update this path to your actual image
                        alt="Nurse and patient"
                        fill
                        className="object-cover object-left"
                        priority
                        quality={95}
                    />
                </div>
                {/* Right: Text and Button */}
                <div className="flex-1 flex flex-col justify-center items-start px-8 py-10 md:py-0 md:pl-12">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Ready to Book your<br />Appointment?
                    </h2>
                    <p className="text-white text-xl md:text-2xl mb-8">
                        Instantly book online in 3 simple steps. Or call our friendly team at 03 000000
                    </p>
                    <button className="bg-axis-magenta hover:bg-pink-500 text-white font-semibold px-8 py-4 rounded-lg text-xl transition">
                        Book Appointment
                    </button>
                </div>
            </div>
        </section>
    );
}