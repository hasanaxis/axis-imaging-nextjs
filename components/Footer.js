'use client'

import Image from 'next/image'

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:admin@axisimaging.com.au'
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:0300000'
  }

  const handleAddressClick = () => {
    // Open Google Maps with the address
    const address = '107/21 Cityside Drive, Mickleham, VIC 3065'
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank')
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <Image
            src="/assets/images/logos/Group 4.png"
            alt="Axis Imaging Logo in white"
            width={200}
            height={60}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Quick Links Section */}
        <div className="footer-links-section">
          <h3>Quick Links</h3>
          <div className="footer-links-column">
            <a href="/services" className="footer-link">Services</a>
            <a href="/about" className="footer-link">About us</a>
            <a href="#patients" className="footer-link">Patient information</a>
          </div>
          <div className="footer-links-column">
            <a href="/privacy" className="footer-link">Privacy policy</a>
            <a href="/terms" className="footer-link">Terms and Conditions</a>
            <a href="/disclosure" className="footer-link">Disclosure Statement</a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <h3>Contact Us</h3>

          <div className="contact-item" onClick={handlePhoneClick}>
            <div className="contact-icon">
              <Image 
                src="/assets/images/icons/Frame.png" 
                alt="Phone Icon" 
                width={24}
                height={24}
              />
            </div>
            <div className="contact-text">
              <a href="tel:0300000">03 000 00</a>
            </div>
          </div>

          <div className="contact-item" onClick={handleEmailClick}>
            <div className="contact-icon">
              <Image 
                src="/assets/images/icons/Frame-1.png" 
                alt="Mail Icon" 
                width={24}
                height={24}
              />
            </div>
            <div className="contact-text">
              <a href="mailto:admin@axisimaging.com.au">admin@axisimaging.com.au</a>
            </div>
          </div>

          <div className="contact-item" onClick={handleAddressClick}>
            <div className="contact-icon">
              <Image 
                src="/assets/images/icons/Frame-2.png" 
                alt="Map Icon" 
                width={24}
                height={24}
              />
            </div>
            <div className="contact-text">
              107/ 21 Cityside Drive, Mickleham,<br />
              VIC , 3065
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Axis Imaging. All rights reserved.</p>
      </div>

      <style jsx>{`
        /* Footer Styles */
        .footer {
          background: #4a5568;
          color: white;
          padding: 80px 0 40px;
          position: relative;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Logo Section */
        .footer-logo-section {
          display: flex;
          flex-direction: column;
        }

        /* Quick Links Section */
        .footer-links-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0px 60px;
        }

        .footer-links-section h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin-bottom: 30px;
          grid-column: 1 / -1;
        }

        .footer-links-column {
          display: flex;
          flex-direction: column;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 1rem;
          margin-bottom: 20px;
          transition: color 0.3s ease;
          font-weight: 400;
        }

        .footer-link:hover {
          color: #eb008b;
        }

        /* Contact Section */
        .footer-contact-section {
          display: flex;
          flex-direction: column;
        }

        .footer-contact-section h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 5px;
          border-radius: 8px;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        .contact-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
        }

        .contact-text a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-text a:hover {
          color: #eb008b;
        }

        /* Bottom Section */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 60px;
          padding-top: 30px;
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: left;
          }

          .footer-links-section {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }

          .footer-container {
            padding: 0 20px;
            gap: 40px;
          }

          .footer-links-section {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-links-section h3 {
            grid-column: 1;
          }

          .contact-item {
            margin-bottom: 20px;
          }

          .contact-text {
            font-size: 1rem;
          }

          .footer-bottom {
            margin-top: 40px;
            padding-top: 20px;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 0 15px;
          }

          .contact-text {
            font-size: 0.95rem;
          }

          .footer-link {
            font-size: 0.95rem;
          }
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-logo-section,
        .footer-links-section,
        .footer-contact-section {
          animation: fadeInUp 0.6s ease-out;
        }

        .footer-links-section {
          animation-delay: 0.1s;
        }

        .footer-contact-section {
          animation-delay: 0.2s;
        }
      `}</style>
    </footer>
  )
}