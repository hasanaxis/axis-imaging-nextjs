'use client'

import Image from 'next/image'

export default function Features() {
  return (
    <section className="features desktop-only">
      <div className="features-container">
        <div className="feature">
          <div className="feature-icon">
            <Image 
              src="/assets/images/icons/hand.png" 
              alt="Personal Care" 
              width={32}
              height={32}
            />
          </div>
          <div className="feature-content">
            <h3>Truly Personal Care</h3>
            <p>We take the time to listen and explain results.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <Image 
              src="/assets/images/icons/arrow.png" 
              alt="Fast Results" 
              width={32}
              height={32}
            />
          </div>
          <div className="feature-content">
            <h3>Fast Results, Always</h3>
            <p>Same-day reporting on most scan.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <Image 
              src="/assets/images/icons/dollar.png" 
              alt="Bulk Billed" 
              width={32}
              height={32}
            />
          </div>
          <div className="feature-content">
            <h3>Bulk Billed</h3>
            <p>No hidden fees. No surprise costs.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Features Section - UPDATED to match design */
        .features {
          background: var(--axis-royal-blue);
          color: white;
          padding: 60px 0;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          padding: 0 40px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 50px;
          position: relative;
          transition: all 0.3s ease;
        }

        /* Add vertical dividers between features */
        .feature:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .feature-icon img {
          filter: brightness(0) invert(1);
          /* Makes PNG icons white */
        }

        .feature:hover .feature-icon {
          background: var(--axis-magenta);
          transform: scale(1.1);
        }

        .feature-content {
          flex: 1;
        }

        .feature h3 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .feature p {
          opacity: 0.9;
          line-height: 1.4;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Responsive adjustments for features */
        @media (max-width: 768px) {
          .features-container {
            display: none;
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 20px;
          }

          .features {
            display: none;
            flex-direction: column;
            text-align: center;
            gap: 15px;
            padding: 30px 20px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.05);
          }

          .feature:not(:last-child)::after {
            display: none;
          }

          .feature-icon {
            width: 80px;
            height: 80px;
          }

          .feature-icon img {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  )
}