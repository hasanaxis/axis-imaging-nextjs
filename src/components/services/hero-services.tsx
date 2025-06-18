import Image from 'next/image';

export default function HeroServices() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 1400px) {
            .hero-section-1400 {
              min-height: 700px !important;
            }
            .desktop-container-1400 {
              height: 700px !important;
              min-height: 700px !important;
            }
          }
        `
      }} />
      <section
        className="hero-section-1400 relative min-h-[500px] flex flex-col md:flex-row items-end md:items-stretch md:justify-between px-0 pt-0 pb-0 md:pl-0 md:py-0 h-auto"
        style={{ fontFamily: 'deuterium-variable, Inter, sans-serif' }}
      >
        {/* Mobile: Hero with background image, text/buttons at bottom */}
        <section
          className="block md:hidden relative min-h-[450px] w-full flex flex-col justify-end lg:min-h-[700px]"
          style={{
            backgroundImage: 'url(/assets/services-page/hero-services/sonographer-white-gloves.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="w-full flex flex-col items-start px-5 pb-8 z-10 max-w-[1260px] mx-auto">
            <h1
              className="text-4xl sm:text-5xl font-medium leading-tight mb-4 text-white text-left"
              style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', letterSpacing: '-0.01em' }}
            >
              <span className="block">Our Services</span>
            </h1>
            <p
              className="mt-2 text-lg sm:text-xl text-white max-w-xl text-left mb-4"
              style={{ fontFamily: 'Inter, Arial, sans-serif' }}
            >
              Expert diagnostic imaging services delivered with compassionate care. From routine screenings to complex procedures, our advanced technology and experienced team provide the answers you and your doctor need.
            </p>
            <button
              className="w-full bg-axis-magenta hover:bg-axis-light-purple text-white font-medium px-8 py-4 rounded-lg shadow-lg transition text-lg self-stretch"
              style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', boxShadow: '0 4px 24px 0 rgba(180, 30, 142, 0.25)' }}
            >
              Book Appointment
            </button>
          </div>
        </section>

        {/* Desktop: Background image with gradient overlay and content on top */}
        <div className="desktop-container-1400 hidden md:block w-full h-[500px] min-h-[500px] relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/services-page/hero-services/sonographer-white-gloves.png"
              alt="Sonographer performing ultrasound"
              fill
              className="object-contain object-right w-full h-full"
              priority
              quality={95}
            />
            {/* Gradient overlay (left to right) */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, #262262 0%, #632075 25%, #B41E8E 45%, #C8138D 54%, rgba(200, 19, 141, 0.7) 57%, rgba(200, 19, 141, 0.3) 62%, transparent 70%)',
              }}
            />
          </div>
          {/* Content (centered vertically, left-aligned, max width) */}
          <div className="relative z-20 flex flex-col justify-center items-start h-full w-full max-w-[1800px] pl-8 pr-8 lg:pl-24 lg:pr-8 mx-auto">
            <h1
              className="text-5xl md:text-6xl font-medium leading-[1.05] mb-6 text-white text-left"
              style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', letterSpacing: '-0.01em' }}
            >
              Our Services
            </h1>
            <p
              className="mt-2 text-xl text-white max-w-xl text-left mb-8"
              style={{ fontFamily: 'Inter, Arial, sans-serif' }}
            >
              Expert diagnostic imaging services delivered with compassionate care. From routine screenings to complex procedures, our advanced technology and experienced team provide the answers you and your doctor need.
            </p>
            <button
              className="bg-axis-magenta hover:bg-axis-light-purple text-white font-medium px-10 py-4 rounded-lg shadow-lg transition text-xl self-start"
              style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', boxShadow: '0 4px 24px 0 rgba(180, 30, 142, 0.25)' }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </>
  );
}