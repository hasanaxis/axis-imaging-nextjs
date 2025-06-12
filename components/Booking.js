'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  const stepData = {
    1: {
      title: "Get Your Referral",
      description: "Located in the booming Merrifield precinct of Mickleham. The very first Radiology clinic in the suburb.",
      image: "/assets/images/gallery/Group 8.png"
    },
    2: {
      title: "Book an Appointment",
      description: "Call us or book online through our simple booking system. We'll find a time that works for you.",
      image: "/assets/images/gallery/Group 6.png"
    },
    3: {
      title: "We'll guide you through the rest",
      description: "Our friendly team will take care of everything else. Just arrive 15 minutes early and we'll handle the rest.",
      image: "/assets/images/gallery/patient-consultation.png"
    }
  }

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleStepClick = (step) => {
    setCurrentStep(step)
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleBookAppointment = () => {
    console.log('Book appointment clicked')
    // Add booking logic here
  }

  const currentStepData = stepData[currentStep]

  return (
    <section className="booking-section" id="booking-section">
      <div className="booking-container">
        {/* Desktop Header */}
        <div className="booking-header">
          <div className="booking-subtitle">Simple Booking Process</div>
          <h2>Here&apos;s how it works</h2>
        </div>

        {/* Desktop Main Content */}
        <div className="booking-content">
          <div className="booking-image-section">
            <div className="booking-image">
              <Image
                src={currentStepData.image}
                alt="Patient consultation"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                id="step-image"
              />
            </div>
          </div>

          <div className="booking-text-section">
            <h3 id="step-title">{currentStepData.title}</h3>
            <p id="step-description">{currentStepData.description}</p>
            <button className="booking-btn" onClick={handleBookAppointment}>
              Book Appointment
            </button>
          </div>
        </div>

        {/* Desktop Process Steps */}
        <div className="process-steps">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`process-step ${currentStep === step ? 'active' : ''} step-button`}
              data-step={step}
              onClick={() => handleStepClick(step)}
            >
              <div className="step-number">0{step}</div>
              <div className="step-title">{stepData[step].title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Card Design */}
      <div className="mobile-booking-card">
        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="mobile-subtitle">Aiming for clinical excellence</div>
          <h2 className="mobile-title">We&apos;re Here to Help</h2>
        </div>

        {/* Mobile Image */}
        <div className="mobile-image-container">
          <Image
            src={currentStepData.image}
            alt="Patient consultation"
            width={320}
            height={240}
            style={{ objectFit: 'cover' }}
            className="mobile-step-image"
            id="mobile-step-image"
          />
        </div>

        {/* Mobile Content */}
        <div className="mobile-content">
          <h3 id="mobile-step-title" className="mobile-step-title">
            {currentStepData.title}
          </h3>
          <p id="mobile-step-description" className="mobile-step-description">
            {currentStepData.description}
          </p>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button 
            className="nav-arrow step-prev" 
            id="prev-btn"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            <span>‹</span>
          </button>

          <div className="pagination-dots">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`dot ${currentStep === step ? 'active' : ''} step-button`}
                data-step={step}
                onClick={() => handleStepClick(step)}
              />
            ))}
          </div>

          <button 
            className="nav-arrow step-next" 
            id="next-btn"
            onClick={handleNext}
            disabled={currentStep === 3}
          >
            <span>›</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Simple Booking Process Section */
        .booking-section {
          background: #262262;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .booking-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* Header Section */
        .booking-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .booking-subtitle {
          font-size: 1.1rem;
          color: #eb008b;
          font-weight: 400;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
          font-family: "Deuterium Variable", var(--primary-font);
        }

        .booking-header h2 {
          font-size: 3rem;
          font-weight: 500;
          color: white;
          margin-bottom: 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
          font-family: "Deuterium Variable", var(--primary-font);
        }

        /* Main Content Grid */
        .booking-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          margin-bottom: 80px;
        }

        .booking-image-section {
          position: relative;
          align-items: center;
        }

        .booking-image {
          width: 100%;
          max-width: 600px;
          border-radius: 20px;
          overflow: hidden;
        }

        .booking-text-section h3 {
          font-size: 2.5rem;
          font-weight: 400;
          color: white;
          margin-bottom: 30px;
          letter-spacing: -0.01em;
          line-height: 1.2;
          font-family: "Deuterium Variable", var(--primary-font);
        }

        .booking-text-section p {
          font-size: 1.2rem;
          color: #b8c5e8;
          line-height: 1.6;
          margin-bottom: 40px;
          font-weight: 300;
          font-family: "Deuterium Variable", var(--primary-font);
        }

        .booking-btn {
          background: #eb008b;
          color: white;
          border: none;
          padding: 18px 36px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 16px;
          font-family: "Deuterium Variable", var(--primary-font);
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
        }

        .booking-btn:hover {
          background: #c8006e;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(235, 0, 139, 0.4);
        }

        /* Process Steps */
        .process-steps {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          background: transparent;
          border-radius: 20px;
          overflow: hidden;
          padding: 0;
          border: 1px solid #ffffff;
        }

        .process-step {
          background: transparent;
          padding: 40px 30px;
          text-align: left;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          border-right: 1px solid #ffffff;
          min-height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 100%;
          box-sizing: border-box;
        }

        .process-step:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .process-step.active .step-number {
          color: #eb008b;
        }

        .process-step:last-child {
          border-right: none;
        }

        .step-number {
          font-size: 2.5rem;
          font-weight: 500;
          color: #8892b0;
          margin-bottom: 15px;
          line-height: 1;
          transition: all 0.3s ease;
          font-family: "Deuterium Variable", var(--primary-font);
        }

        .step-title {
          font-size: 1.1rem;
          font-weight: 400;
          color: white;
          margin-bottom: 0;
          line-height: 1.4;
          font-family: "Deuterium Variable", var(--primary-font);
          text-align: left;
          max-width: none;
        }

        .mobile-booking-card {
          display: none;
        }

        /* Responsive Design Updates */
        @media (max-width: 968px) {
          .process-steps {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .process-step {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            min-height: 100px;
            padding: 30px 25px;
          }

          .process-step:last-child {
            border-bottom: none;
          }
        }

        @media (max-width: 768px) {
          .booking-section {
            padding: 60px 20px;
            position: relative;
          }

          .booking-container {
            padding: 0;
            max-width: 100%;
          }

          .booking-header {
            display: none;
          }

          /* Hide desktop content */
          .booking-content,
          .process-steps {
            display: none;
          }

          /* Mobile Card Container */
          .mobile-booking-card {
            position: relative;
            margin: 0;
            background: none;
            border-radius: 0;
            padding: 0;
            overflow: hidden;
            min-height: 600px;
            display: flex;
            flex-direction: column;
          }

          /* Mobile Header */
          .mobile-header {
            text-align: center;
            margin-bottom: 30px;
            position: relative;
            z-index: 2;
          }

          .mobile-subtitle {
            font-size: 1rem;
            color: #eb008c;
            font-weight: 400;
            margin-bottom: 10px;
            font-family: "Deuterium Variable", var(--primary-font);
          }

          .mobile-title {
            font-size: 2.2rem;
            font-weight: 600;
            color: white;
            line-height: 1.2;
            font-family: "Deuterium Variable", var(--primary-font);
          }

          /* Mobile Image Container */
          .mobile-image-container {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            position: relative;
            z-index: 2;
          }

          .mobile-step-image {
            width: 100%;
            max-width: 320px;
            height: 240px;
            object-fit: cover;
            border-radius: 15px;
          }

          /* Mobile Content */
          .mobile-content {
            text-align: center;
            position: relative;
            z-index: 2;
            margin-top: 20px;
          }

          .mobile-step-title {
            font-size: 1.8rem;
            font-weight: 500;
            color: white;
            margin-bottom: 15px;
            font-family: "Deuterium Variable", var(--primary-font);
          }

          .mobile-step-description {
            font-size: 1rem;
            color: white;
            line-height: 1.5;
            margin-bottom: 30px;
            font-family: "Deuterium Variable", var(--primary-font);
          }

          /* Mobile Navigation */
          .mobile-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            position: relative;
            z-index: 2;
          }

          .nav-arrow {
            width: 50px;
            height: 50px;
            background: #eb008c;
            border-radius: 50%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: white;
            font-size: 18px;
          }

          .nav-arrow:hover {
            background: #c8006e;
            transform: scale(1.1);
          }

          .nav-arrow:disabled {
            background: rgba(235, 0, 140, 0.3);
            cursor: not-allowed;
            transform: none;
          }

          /* Pagination dots */
          .pagination-dots {
            display: flex;
            gap: 10px;
          }

          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .dot.active {
            background: #eb008c;
            transform: scale(1.2);
          }

          .dot:hover {
            background: rgba(235, 0, 140, 0.7);
          }
        }

        @media (max-width: 480px) {
          .mobile-booking-card {
            margin: 0 15px;
            padding: 30px 20px;
            min-height: 550px;
          }

          .mobile-title {
            font-size: 1.8rem;
          }

          .mobile-step-image {
            max-width: 280px;
            height: 200px;
          }

          .mobile-step-title {
            font-size: 1.5rem;
          }

          .mobile-step-description {
            font-size: 0.9rem;
          }

          .nav-arrow {
            width: 45px;
            height: 45px;
            font-size: 16px;
          }
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .booking-content,
        .process-steps {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .process-step {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .process-step:nth-child(1) {
          animation-delay: 0.1s;
        }

        .process-step:nth-child(2) {
          animation-delay: 0.2s;
        }

        .process-step:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  )
}