'use client';
import Image from 'next/image';

export default function ClaritySection() {
    return (
        <section
            className="bg-[#FFF4FB] pt-20 pb-40 w-full flex flex-col items-center relative overflow-hidden"
            style={{
                fontFamily: 'DeuteriumVariable, Inter, sans-serif',
            }}
        >
            {/* Decorative background circles at the top */}
            <div className="absolute z-0 top-[-100px] left-[-120px] w-[320px] h-[320px] bg-[#FFE6F5] rounded-full opacity-80" />
            <div className="absolute z-0 top-[-70px] left-[30%] w-[400px] h-[400px] bg-[#FFE6F5] rounded-full opacity-60" />
            <div className="absolute z-0 top-[100px] right-[-100px] w-[300px] h-[300px] bg-[#FFE6F5] rounded-full opacity-70" />
            <div className="absolute z-0 top-[-80px] left-[60%] w-[220px] h-[220px] bg-[#FFE6F5] rounded-full opacity-70" />
            {/* Heading */}
            <h2 className="relative z-10 text-6xl md:text-6xl font-bold text-axis-dark-purple text-center mb-12 px-4 py-6">
                We provide clarity every<br className="hidden md:block" /> step of the way
            </h2>
            {/* Cards */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-stretch gap-8 mb-8 px-4 relative z-10">
                {/* Card 1 */}
                <div className="flex flex-col items-center rounded-xl px-6 py-0 flex-1 bg-transparent">
                    <Image src="/assets/clarity/1.png" alt="Book online or call us" width={260} height={220} className="rounded-lg object-cover mb-6" />
                    <h3 className="text-[#662D91] text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>Book online or call us</h3>
                    <p className="text-[#3C4247] text-lg text-center" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>Use our easy online booking form to choose a time that's convenient or call us.</p>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-center rounded-xl px-6 py-0 flex-1 bg-transparent">
                    <Image src="/assets/clarity/2.png" alt="Our team will guide you" width={260} height={220} className="rounded-lg object-cover mb-6" />
                    <h3 className="text-[#662D91] text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>Our team will guide you</h3>
                    <p className="text-[#3C4247] text-lg text-center" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>Our team will guide you through each step when you are at the clinic.</p>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-center rounded-xl px-6 py-0 flex-1 bg-transparent">
                    <Image src="/assets/clarity/3.png" alt="Scans reported in 24 hours" width={260} height={220} className="rounded-lg object-cover mb-6" />
                    <h3 className="text-[#662D91] text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>Scans reported in 24 hours</h3>
                    <p className="text-[#3C4247] text-lg text-center" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>You shouldn't have to wait to get your results. That's why we get back to you within 24 hours.</p>
                </div>
            </div>
            <button className="mt-6 bg-axis-magenta hover:bg-axis-light-purple text-white font-semibold px-6 py-2 rounded-lg shadow transition">
                Book Appointment
            </button>
            <div
                className="absolute left-0 bottom-0 w-full pointer-events-none"
                style={{
                    height: '100px',
                    width: '100%',
                    backgroundImage: "url('/assets/wave-bg.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                    backgroundSize: '100% 100%',
                    zIndex: 20,
                }}
            />
        </section>
    );
} 