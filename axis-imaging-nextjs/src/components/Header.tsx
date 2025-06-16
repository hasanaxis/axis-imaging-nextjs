import Image from 'next/image';

interface HeaderProps {
    isReferrer: boolean;
    setIsReferrer: (val: boolean) => void;
}

export default function Header({ isReferrer, setIsReferrer }: HeaderProps) {
    return (
        <header className="bg-[#23235B] text-white px-8 py-4 flex items-center justify-between w-full" style={{ fontFamily: 'DeuteriumVariable, Inter, sans-serif' }}>
            {/* Logo */}
            <div className="flex items-center">
                <Image src="/assets/logos/Group 4.png" alt="Axis Imaging Logo" width={120} height={40} priority />
            </div>
            {/* Navigation */}
            <nav className="flex space-x-8 ml-8">
                <a href="#" className="text-white font-medium hover:text-axis-magenta transition">Our Services</a>
                <a href="#" className="text-white font-medium hover:text-axis-magenta transition">About Us</a>
                <a href="#" className="text-white font-medium hover:text-axis-magenta transition">Contact Us</a>
                <a href="#" className="text-white font-medium hover:text-axis-magenta transition">
                    {isReferrer ? 'Referrer Information' : 'Patient Information'}
                </a>
            </nav>
            {/* Referrer/Patient Toggle & Button */}
            <div className="flex items-center space-x-6 ml-8">
                <div className="flex items-center space-x-2">
                    <span className={isReferrer ? 'font-bold' : ''}>Referrer</span>
                    <button
                        type="button"
                        aria-pressed={isReferrer}
                        className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none flex items-center ${isReferrer ? 'bg-[#662D91]' : 'bg-pink-500'}`}
                        onClick={() => setIsReferrer(!isReferrer)}
                    >
                        <span
                            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${isReferrer ? 'translate-x-0' : 'translate-x-5'}`}
                        />
                    </button>
                    <span className={!isReferrer ? 'font-bold' : ''}>Patient</span>
                </div>
                <button className="bg-axis-magenta hover:bg-axis-light-purple text-white font-semibold px-5 py-2 rounded-lg shadow transition min-w-[180px]">
                    {isReferrer ? 'Refer a Patient' : 'Book Appointment'}
                </button>
            </div>
        </header>
    );
}