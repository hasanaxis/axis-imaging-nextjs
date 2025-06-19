import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        title: 'CT-Scan',
        img: '/assets/services/ct-scan.png',
        route: '/services/ct-scan',
    },
    {
        title: 'X-ray',
        img: '/assets/services/xray.png',
        route: '/services/xray',
    },
    {
        title: 'Ultrasound',
        img: '/assets/services/ultrasound.png',
        route: '/services/ultrasound',
    },
    {
        title: 'DEXA',
        img: '/assets/services/dexa.png',
        route: '/services/dexa',
    },
    {
        title: 'Interventional Procedures',
        img: '/assets/services/interventional.png',
        route: '#', // Placeholder for future Interventional page
    },
    {
        title: 'Cardiac CT-Scan',
        img: '/assets/services/cardiac-ct.png',
        route: '#', // Placeholder for future Cardiac CT page
    },
];

export default function Services() {
    return (
        <section
            className="relative pb-16 pt-10 -mt-12"
            style={{
                backgroundColor: '#ffffff',
            }}
        >
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center px-4 py-10">
                <h2 className="text-[#662D91] text-4xl sm:text-4xl md:text-6xl font-bold mb-2 text-center mb-4 py-6" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                    Explore our services
                </h2>
                <p className="text-[#3C4247] text-center mb-10 max-w-4xl text-xl py-6" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                    State-of-the-art equipment combined with a team that&apos;s ready for you. That&apos;s what makes us a truly great experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.route}
                            className="block"
                        >
                            <div
                                className="relative rounded-lg overflow-hidden group transition-transform hover:scale-105 h-[340px] flex cursor-pointer"
                            >
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    style={{ zIndex: 1 }}
                                    quality={95}
                                />
                                {/* Title and arrow */}
                                <div className="absolute bottom-6 left-6 right-6 mb-6 flex items-center z-20">
                                    <span className="text-white text-3xl font-medium drop-shadow-lg pr-16" style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}>
                                        {service.title}
                                    </span>
                                    <span className="absolute right-6 flex items-center justify-center w-10 h-10 rounded-full bg-axis-dark-purple group-hover:bg-axis-magenta transition">
                                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                            <path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
