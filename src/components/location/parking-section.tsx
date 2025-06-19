import React from 'react';

export default function ParkingSection() {
    return (
        <section className="relative py-20 px-10 bg-white lg:px-50 lg:py-50 w-full" style={{ marginBottom: '-100px' }}>
            {/* Title and Subtitle */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#23235B] mb-4">Where to Park?</h2>
                <p className="text-lg text-gray-600">Three car parks with over 300 FREE parking spaces</p>
            </div>

            {/* Parking Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Parking Option 1 */}
                <div className="relative">
                    {/* Number Circle */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#F72585] text-white flex items-center justify-center text-2xl font-bold z-10">
                        1
                    </div>
                    {/* Gray Box */}
                    <div className="bg-gray-200 h-64 w-full rounded-lg mb-4"></div>
                    {/* Content */}
                    <h3 className="text-xl font-bold text-center text-[#632075] mb-2">Free Underground Parking</h3>
                    <p className="text-gray-600 text-center">Underground parking with easy lift access up to our clinic. Easily access from [Road name].</p>
                </div>

                {/* Parking Option 2 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#F72585] text-white flex items-center justify-center text-2xl font-bold z-10">
                        2
                    </div>
                    <div className="bg-gray-200 h-64 w-full rounded-lg mb-4"></div>
                    <h3 className="text-xl font-bold text-center text-[#632075] mb-2">Shopping Centre Car Park</h3>
                    <p className="text-gray-600 text-center">Easily accessible parking at the front of our building. Just walk over to the building and go up the lift.</p>
                </div>

                {/* Parking Option 3 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#F72585] text-white flex items-center justify-center text-2xl font-bold z-10">
                        3
                    </div>
                    <div className="bg-gray-200 h-64 w-full rounded-lg mb-4"></div>
                    <h3 className="text-xl font-bold text-center text-[#632075] mb-2">Car Park 3</h3>
                    <p className="text-gray-600 text-center">Park around the building with the</p>
                </div>
            </div>
        </section>
    );
} 