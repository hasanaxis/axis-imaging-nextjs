'use client'

import Image from 'next/image'

export default function CTA() {
  const handleBookAppointment = () => {
    // Scroll to booking section
    const bookingSection = document.querySelector('#booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.log('Book appointment clicked')
      // Fallback - could open modal or navigate to booking page
    }
  }

  const handlePhoneCall = () => {
    window.location.href = 'tel:0300000'
  }

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          {/* Content Section */}
          <div className="cta-content">
            <h2>Ready to Book your Appointment?</h2>
            <p>
              Instantly book online in 3 simple steps. Or call our friendly team at{' '}
              <span className="cta-phone" onClick={handlePhoneCall}>
                03 000000
              </span>
            </p>
            <button className="cta-button" onClick={handleBookAppointment}>
              Book Appointment
            </button>
          </div>

          {/* Image Section */}
          <div className="cta-image-section">
            <Image
              src="/assets/images/gallery/Group 6.png"
              alt="Healthcare professional with patient"
              width={600}
              height={500}
              quality={95}
              style={{ 
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
              }}
              className="cta-image"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* CTA Section */
        .cta-section {
          background: #f8f9fa;
          padding: 80px 0;
          position: relative;
        }

        .cta-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .cta-card {
          background: linear-gradient(135deg, #262262 0%, #3d3085 50%, #262262 100%);
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          min-height: 500px;
          box-shadow: 0 20px 60px rgba(38, 34, 98, 0.3);
        }

        .cta-image-section {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .cta-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          position: relative;
          z-index: 3;
        }

        .cta-content {
          padding: 60px 50px;
          color: white;
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
        }

        .cta-content h2 {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 30px;
          color: white;
          letter-spacing: -0.02em;
          text-align: left;
          margin-top: 0;
        }

        .cta-content p {
          font-size: 1.3rem;
          line-height: 1.5;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          max-width: 480px;
          text-align: left;
          margin-top: 0;
        }

        .cta-phone {
          color: #eb008b;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .cta-phone:hover {
          color: #ff1a9e;
          text-decoration: underline;
        }

        .cta-button {
          background: #eb008b;
          color: white;
          border: none;
          padding: 18px 36px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .cta-button:hover {
          background: #c8006e;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(235, 0, 139, 0.4);
        }

        /* Animation */
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .cta-content {
          animation: slideInFromRight 0.8s ease-out;
        }

        .cta-image-section {
          animation: slideInFromLeft 0.8s ease-out;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .cta-card {
            grid-template-columns: 1fr;
            text-align: center;
            min-height: auto;
          }

          .cta-image-section {
            grid-column: unset;
            order: 2;
            padding: 40px 20px 0;
          }

          .cta-content {
            grid-column: unset;
            order: 1;
            padding: 50px 40px;
            text-align: left;
          }

          .cta-content h2 {
            font-size: 2.8rem;
            text-align: left;
          }

          .cta-content p {
            max-width: none;
            text-align: left;
          }

          .cta-button {
            align-self: flex-start;
          }
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 60px 0;
          }

          .cta-container {
            padding: 0 20px;
          }

          .cta-card {
            border-radius: 20px;
          }

          .cta-content {
            padding: 40px 30px 30px 30px;
            text-align: left;
          }

          .cta-content h2 {
            font-size: 2.2rem;
            margin-bottom: 25px;
            text-align: left;
          }

          .cta-content p {
            font-size: 1.1rem;
            margin-bottom: 35px;
            text-align: left;
          }

          .cta-button {
            padding: 16px 32px;
            font-size: 15px;
            align-self: flex-start;
          }

          .cta-image {
            width: 100%;
            padding: 0px 0px 0;
          }
        }

        @media (max-width: 480px) {
          .cta-container {
            padding: 0 15px;
          }

          .cta-content {
            padding: 40px 25px 25px 25px;
            text-align: left;
          }

          .cta-content h2 {
            font-size: 1.8rem;
            text-align: left;
          }

          .cta-content p {
            font-size: 1rem;
            margin-bottom: 30px;
            text-align: left;
          }

          .cta-button {
            padding: 14px 28px;
            font-size: 14px;
            align-self: flex-start;
          }

          .cta-image {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}