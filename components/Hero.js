'use client'

import Image from 'next/image'

export default function Hero() {
  const handleBookAppointment = () => {
    const bookingSection = document.querySelector('#booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Fallback - could open a modal or navigate to booking page
      alert('Booking system would open here')
    }
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Mickleham Medical Imaging.</h1>
          <p>
            Now accepting patients at our brand-new Mickleham clinic. Experience
            modern radiology with care that feels personal — and billing that&apos;s
            fully bulk billed.
          </p>
          <button className="hero-cta" onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>
        <div className="hero-image-section">
          <Image
            src="/assets/images/hero/mobile-hero.png"
            alt="Medical professional with patient"
            width={800}
            height={600}
            quality={95}
            className="hero-image"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center bottom',
              minHeight: '300px'
            }}
            priority
          />
        </div>
      </div>

      <style jsx>{`
        /* Hero Section - Mobile First */
        .hero {
          background: linear-gradient(180deg, #262262 0%, #7f268a 100%);
          color: white;
          padding: 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          margin-top: 80px;
          display: flex;
          flex-direction: column;
        }

        .hero-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        .hero-content {
          padding: 40px 20px 30px;
          position: relative;
          z-index: 2;
          flex: 0 0 auto;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          color: white;
          margin-top: 0;
        }

        .hero-content p {
          font-size: 1.1rem;
          margin-bottom: 30px;
          opacity: 0.95;
          line-height: 1.6;
          font-weight: 400;
          color: white;
          margin-top: 0;
        }

        .hero-cta {
          background: #eb008b;
          color: white;
          padding: 16px 30px;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: inline-block;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .hero-cta:hover {
          background: white;
          color: #eb008b;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .hero-image-section {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 280px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 1;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center bottom;
          min-height: 300px;
          display: block;
        }

        /* Responsive adjustments for different screen sizes */
        @media (max-width: 375px) {
          .hero {
            margin-top: 80px;
          }

          .hero-content {
            padding: 30px 15px 25px;
          }

          .hero-content h1 {
            font-size: 2.2rem;
            margin-bottom: 15px;
          }

          .hero-content p {
            font-size: 1rem;
            margin-bottom: 25px;
          }

          .hero-cta {
            padding: 14px 28px;
            margin-bottom: 15px;
          }

          .hero-image-section {
            top: 240px;
          }
        }

        @media (min-width: 376px) and (max-width: 414px) {
          .hero-image-section {
            top: 260px;
          }
        }

        @media (min-width: 415px) and (max-width: 768px) {
          .hero-image-section {
            top: 280px;
          }
        }

        /* Landscape orientation */
        @media (max-width: 768px) and (orientation: landscape) {
          .hero {
            margin-top: 60px;
            min-height: 100vh;
          }

          .hero-content {
            padding: 20px 20px 15px;
          }

          .hero-content h1 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .hero-content p {
            font-size: 1rem;
            margin-bottom: 15px;
          }

          .hero-cta {
            padding: 12px 24px;
            margin-bottom: 10px;
          }

          .hero-image-section {
            top: 180px;
          }
        }

        /* Desktop styles */
        @media (min-width: 769px) {
          .hero {
            background-image: url("/assets/images/hero/Hero.png");
            background-size: cover;
            background-position: center right;
            background-repeat: no-repeat;
            height: 80vh;
            margin-top: 70px;
            align-items: center;
          }

          .hero::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 60%;
            height: 100%;
            background: linear-gradient(
              90deg,
              rgba(38, 34, 98, 0.95) 0%,
              rgba(180, 30, 142, 0.85) 45%,
              rgba(236, 0, 140, 0.7) 75%,
              transparent 100%
            );
            z-index: 1;
          }

          .hero-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
            align-items: center;
            padding: 0 40px;
            height: 100%;
          }

          .hero-content {
            max-width: 580px;
            position: relative;
            z-index: 3;
            padding: 0;
            height: auto;
          }

          .hero-content h1 {
            font-size: 3.8rem;
            font-weight: 800;
            margin-bottom: 30px;
          }

          .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 40px;
            max-width: 520px;
          }

          .hero-image-section {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}