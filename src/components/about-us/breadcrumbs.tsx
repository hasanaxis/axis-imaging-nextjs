import React from 'react';

interface BreadcrumbItem {
    label: string;
    isActive?: boolean;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <section className="relative w-full bg-white">
            {/* Light pink wavy background */}
            <div className="relative w-full h-24 bg-[#FDE6F7] overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-2 left-1/4 w-16 h-16 bg-white bg-opacity-30 rounded-full"></div>
                <div className="absolute top-4 right-1/3 w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
                <div className="absolute top-1 right-1/4 w-8 h-8 bg-white bg-opacity-25 rounded-full"></div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg
                        viewBox="0 0 1440 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-[60px]"
                    >
                        <path
                            d="M0 20 Q 360 0 720 20 T 1440 20 V60 H0V20Z"
                            fill="#FDE6F7"
                        />
                    </svg>
                </div>

                {/* Breadcrumb navigation */}
                <div className="relative z-10 h-full flex items-center px-8">
                    <nav className="flex items-center gap-3">
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && (
                                    <span className="text-[#EC008C] text-xl font-medium">›</span>
                                )}
                                <button
                                    className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${item.isActive
                                        ? 'bg-[#EC008C] text-white shadow-md hover:bg-[#D1007A]'
                                        : 'bg-[#2A2A5B] text-white hover:bg-opacity-80'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Additional wave for seamless transition */}
            <div className="relative w-full h-8 bg-white">
                <svg
                    viewBox="0 0 1440 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <path
                        d="M0 12 Q 360 0 720 12 T 1440 12 V32 H0V12Z"
                        fill="#FDE6F7"
                    />
                </svg>
            </div>
        </section>
    );
}