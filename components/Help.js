'use client'

import Image from 'next/image'

export default function Help() {
  const handlePatientClick = () => {
    // Navigate to patient information or scroll to relevant section
    console.log('Patient info clicked')
    // You can add navigation logic here later
  }

  const handleDoctorClick = () => {
    // Navigate to referrer information or scroll to relevant section
    console.log('Doctor/Referrer info clicked')
    // You can add navigation logic here later
  }

  return (
    <section className="help-section">
      <div className="help-container">
        <div className="help-header">
          <h2>How Can We Help You Today?</h2>
          <p>Not sure where to start? Choose the path that&apos;s right for you.</p>
        </div>

        <div className="help-cards">
          <div className="help-card">
            <div className="help-card-image">
              <Image
                src="/assets/images/gallery/patient-consultation.png"
                alt="Patient consultation with healthcare provider"
                width={500}
                height={280}
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' 
                }}
              />
            </div>
            <div className="help-card-content">
              <h3>I&apos;m a Patient</h3>
              <p>
                Whether you need an X-ray, ultrasound, CT, or DEXA, we&apos;re here to
                make the process simple, clear, and stress-free. From easy online
                bookings to fast results and bulk billing, you&apos;ll experience care
                that&apos;s personal—every step of the way.
              </p>
              <button className="help-card-btn" onClick={handlePatientClick}>
                Explore Patient Info
              </button>
            </div>
          </div>

          <div className="help-card">
            <div className="help-card-image">
              <Image
                src="/assets/images/gallery/doctor-workstation.png"
                alt="Doctor reviewing medical scans at workstation"
                width={500}
                height={280}
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' 
                }}
              />
            </div>
            <div className="help-card-content">
              <h3>I&apos;m a Doctor</h3>
              <p>
                We make referrals fast, smooth, and reliable—just like our reports.
                Send patients with confidence knowing they&apos;ll be seen quickly,
                treated with compassion, and that you&apos;ll get clear, timely
                results—usually within 24 hours.
              </p>
              <button className="help-card-btn" onClick={handleDoctorClick}>
                Explore Referrer Info
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* How Can We Help You Today Section */
        .help-section {
          background: radial-gradient(
            ellipse at center,
            #ec008c 0%,
            /* Magenta in center */ rgba(236, 0, 140, 0.5) 15%,
            rgba(236, 0, 140, 0.2) 30%,
            rgba(236, 0, 140, 0) 45%,
            rgba(236, 0, 140, 0) 60%,
            rgba(236, 0, 140, 0) 75%,
            rgba(236, 0, 140, 0) 85%,
            #ffffff 100% /* White at edges */
          );
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .help-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        .help-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .help-header h2 {
          font-size: 3rem;
          font-weight: 800;
          font-family: "Deuterium Variable", var(--primary-font);
          color: #662d91;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          line-height: 1.2;
          text-align: left;
        }

        .help-header p {
          font-size: 1.3rem;
          color: var(--axis-grey-mid);
          font-weight: 400;
          font-family: "Deuterium Variable", var(--primary-font);
          max-width: 600px;
          line-height: 1.5;
          text-align: left;
        }

        .help-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          align-items: stretch;
        }

        .help-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
          transform: translateY(0);
          opacity: 1;
          cursor: pointer;
        }

        .help-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
        }

        .help-card-image {
          width: 100%;
          height: 280px;
          overflow: hidden;
          position: relative;
          display: block;
        }

        .help-card-image img {
          transition: transform 0.3s ease;
        }

        .help-card:hover .help-card-image img {
          transform: scale(1.03);
        }

        .help-card-content {
          padding: 40px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .help-card-content h3 {
          font-size: 1.8rem;
          font-weight: 500;
          font-family: "Deuterium Variable", var(--primary-font);
          color: var(--axis-royal-blue);
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .help-card-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--axis-charcoal);
          margin-bottom: 35px;
          flex: 1;
        }

        .help-card-btn {
          background: transparent;
          color: var(--axis-royal-blue);
          border: 2px solid var(--axis-royal-blue);
          padding: 16px 32px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: var(--primary-font);
          align-self: flex-start;
        }

        .help-card-btn:hover {
          background: var(--axis-magenta);
          border-color: var(--axis-magenta);
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(236, 0, 140, 0.25);
        }

        /* Smooth entrance animation */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .help-card {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .help-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .help-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        /* Initial state for animation */
        .help-card {
          opacity: 0;
          transform: translateY(40px);
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .help-cards {
            gap: 30px;
          }

          .help-header h2 {
            font-size: 2.5rem;
          }

          .help-header p {
            font-size: 1.2rem;
          }

          .help-card-content {
            padding: 35px 30px;
          }
        }

        @media (max-width: 768px) {
          .help-section {
            padding: 80px 0;
            display: none;
          }

          .help-container {
            padding: 0 20px;
          }

          .help-header {
            margin-bottom: 60px;
          }

          .help-header h2 {
            font-size: 2.2rem;
          }

          .help-header p {
            font-size: 1.1rem;
          }

          .help-cards {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .help-card-image {
            height: 240px;
          }

          .help-card-content {
            padding: 30px 25px;
          }

          .help-card-content h3 {
            font-size: 1.6rem;
          }

          .help-card-content p {
            font-size: 1rem;
            margin-bottom: 30px;
          }

          .help-card-btn {
            padding: 14px 28px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .help-section {
            padding: 60px 0;
            display: none;
          }

          .help-container {
            padding: 0 15px;
          }

          .help-header h2 {
            font-size: 1.8rem;
          }

          .help-header p {
            font-size: 1rem;
          }

          .help-card-image {
            height: 200px;
          }

          .help-card-content {
            padding: 25px 20px;
          }

          .help-card-content h3 {
            font-size: 1.4rem;
            margin-bottom: 15px;
          }

          .help-card-content p {
            font-size: 0.95rem;
            margin-bottom: 25px;
          }

          .help-card-btn {
            padding: 12px 24px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  )
}