'use client';
import Image from 'next/image';

export default function Features() {
    return (
        <section className="bg-[#23235B] py-13 flex justify-center" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>
            <div className="w-full max-w-7xl flex flex-row items-center justify-between min-h-[140px] px-0">
                {/* Feature 1 */}
                <div className="flex flex-row items-center flex-1 min-w-0">
                    <Image src="/assets/icons/care.svg" alt="Personal Care" width={96} height={96} className="mr-8" />
                    <div>
                        <h3 className="text-white text-xl font-bold mb-1 mt-2 whitespace-nowrap">
                            Your Personal Care
                        </h3>
                        <p className="text-[#C4CED4] text-base">We listen, explain and guide you through every step.</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="hidden md:flex flex-col items-center justify-center w-0 flex-shrink-0 mx-24">
                    <div className="h-[94px] border-l border-[#C4CED4]" />
                </div>
                {/* Feature 2 */}
                <div className="flex flex-row items-center flex-1 min-w-0">
                    <Image src="/assets/icons/fast.svg" alt="Fast Results" width={96} height={96} className="mr-8" />
                    <div>
                        <h3 className="text-white text-xl font-bold mb-1 mt-2 whitespace-nowrap">
                            Fast Results, Always
                        </h3>
                        <p className="text-[#C4CED4] text-base">Our expert radiologists deliver accurate, timely results quickly.</p>
                    </div>
                </div>
                {/* Divider */}
                <div className="hidden md:flex flex-col items-center justify-center w-0 flex-shrink-0 mx-24">
                    <div className="h-[94px] border-l border-[#C4CED4]" />
                </div>
                {/* Feature 3 */}
                <div className="flex flex-row items-center flex-1 min-w-0">
                    <Image src="/assets/icons/bulk.svg" alt="Bulk Billed" width={96} height={96} className="mr-8" />
                    <div>
                        <h3 className="text-white text-xl font-bold mb-1 mt-2">Bulk Billed</h3>
                        <p className="text-[#C4CED4] text-base">We bulk bill most services for accessible care.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}