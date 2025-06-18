'use client';
import Image from 'next/image';

export default function BookAppointmentSection() {
    return (
        <section className="w-full flex justify-center items-center py-8 px-4 md:py-12 md:px-8 bg-white">
            <div className="w-full max-w-5xl bg-[#23235B] rounded-3xl shadow-lg relative flex flex-col lg:flex-row items-center overflow-hidden p-4 md:p-8" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                {/* Right: Text and Button */}
                <div className="flex-1 flex flex-col justify-center items-start px-8 py-10 md:py-0 md:pl-12">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Ready to Book your Appointment?
                    </h2>
                    <p className="text-white text-xl md:text-2xl mb-8">
                        Instantly book online in 3 simple steps. Or call our friendly team at 03 000000
                    </p>
                    <button className="bg-axis-magenta hover:bg-pink-500 text-white font-semibold px-8 py-4 rounded-lg text-xl transition">
                        Book Appointment
                    </button>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-end mt-4 lg:mt-0">
                    <Image
                        src="/assets/cta/cta-nurse-patient.png"
                        alt="Nurse and patient"
                        width={600}
                        height={480}
                        className="w-100% h-100% max-w-full max-h-[100%] md:max-h-[100%] lg:max-h-[100%]"
                        priority
                        quality={95}
                    />
                </div>
            </div>
        </section>
    );
}