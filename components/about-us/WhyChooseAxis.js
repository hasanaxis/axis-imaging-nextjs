'use client'

import { useState, useEffect, useRef } from 'react'

export default function WhyChooseAxis() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const differentiators = [
    {
      title: 'Family-owned and community-focused',
      description: 'Genuine care from our family to yours',
      icon: '👨‍👩‍👧‍👦',
      color: '#EC008C'
    },
    {
      title: 'Patient-centered experience',
      description: 'Every aspect of our new clinic designed around your comfort and convenience',
      icon: '🎯',
      color: '#B41E8E'
    },
    {
      title: 'Expert radiologists with international experience',
      description: 'Bringing world-class expertise to Mickleham',
      icon: '🌍',
      color: '#662D91'
    },
    {
      title: 'Brand new, state-of-the-art facility',
      description: 'The latest equipment in a purpose-built environment',
      icon: '🏢',
      color: '#262262'
    },
    {
      title: 'Transparent, clear communication',
      description: 'We believe informed patients make better health decisions',
      icon: '📋',
      color: '#00A496'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="why-choose-axis" ref={sectionRef}>
      <div className="why-choose-container">
        {/* Background Elements */}
        <div className="choice-background"></div>
        <div className="geometric-pattern"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <div className={`differentiators-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="diff-header">
            <div className="section-badge">
              <span className="badge-text">Why Choose Us</span>
            </div>

            <h2 className="diff-headline">
              The <span className="highlight">Axis Imaging</span> Difference
            </h2>
            
            <p className="diff-subtitle">
              As Mickleham&apos;s newest independent radiology practice opening in 2025, we bring a fresh perspective to medical imaging. We&apos;re not just another clinic – we&apos;re your new neighbors, committed to strengthening our growing community&apos;s health through expert care and exceptional service.
            </p>
          </div>

          <div className="differentiators-grid">
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className="diff-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="diff-icon-container">
                  <div 
                    className="diff-icon"
                    style={{ backgroundColor: diff.color }}
                  >
                    <span className="diff-emoji">{diff.icon}</span>
                  </div>
                  <div 
                    className="icon-glow"
                    style={{ boxShadow: `0 0 20px ${diff.color}40` }}
                  ></div>
                </div>
                
                <div className="diff-content">
                  <h4 className="diff-title">{diff.title}</h4>
                  <p className="diff-description">{diff.description}</p>
                </div>
                
                <div className="diff-arrow" style={{ color: diff.color }}>
                  →
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="choice-cta">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Experience the Difference?</h3>
              <p className="cta-description">
                Join us as we open Mickleham&apos;s newest healthcare destination in 2025
              </p>
              <div className="cta-buttons">
                <button className="btn-primary">Book Your Appointment</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-choose-axis {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f5f6f7 100%);
          overflow: hidden;
        }

        .why-choose-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .choice-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(236, 0, 140, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(102, 45, 145, 0.04) 0%, transparent 50%);
          z-index: 1;
        }

        .geometric-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(30deg, rgba(236, 0, 140, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(236, 0, 140, 0.02) 87.5%, rgba(236, 0, 140, 0.02)),
            linear-gradient(150deg, rgba(236, 0, 140, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(236, 0, 140, 0.02) 87.5%, rgba(236, 0, 140, 0.02));
          background-size: 60px 60px;
          z-index: 1;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .shape {
          position: absolute;
          background: linear-gradient(45deg, rgba(236, 0, 140, 0.1), rgba(102, 45, 145, 0.05));
          border-radius: 50%;
        }

        .shape-1 {
          width: 120px;
          height: 120px;
          top: 15%;
          right: 10%;
          animation: float1 8s ease-in-out infinite;
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 8%;
          animation: float2 6s ease-in-out infinite;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          top: 60%;
          right: 15%;
          animation: float3 10s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -15px) rotate(120deg); }
          66% { transform: translate(-10px, 10px) rotate(240deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -20px) rotate(180deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-15px, 10px) rotate(90deg); }
          75% { transform: translate(10px, -5px) rotate(270deg); }
        }

        .differentiators-section {
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .differentiators-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .diff-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.1), rgba(102, 45, 145, 0.1));
          padding: 10px 24px;
          border-radius: 30px;
          margin-bottom: 25px;
          border: 1px solid rgba(236, 0, 140, 0.2);
        }

        .badge-text {
          color: #EC008C;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .diff-headline {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.2;
          color: #662D91;
          margin-bottom: 25px;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #EC008C 0%, #B41E8E 50%, #662D91 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .diff-subtitle {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          line-height: 1.7;
          color: #606A70;
          font-weight: 400;
          max-width: 800px;
          margin: 0 auto;
        }

        .differentiators-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          max-width: 900px;
          margin: 0 auto 80px;
        }

        .diff-card {
          display: flex;
          align-items: center;
          gap: 30px;
          background: white;
          padding: 30px 35px;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(236, 0, 140, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          opacity: 0;
          transform: translateX(-30px);
          animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          position: relative;
          overflow: hidden;
        }

        .diff-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #EC008C, #B41E8E, #662D91);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .diff-card:hover::before {
          transform: scaleY(1);
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .diff-card:hover {
          transform: translateX(15px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          border-color: rgba(236, 0, 140, 0.3);
        }

        .diff-icon-container {
          position: relative;
          flex-shrink: 0;
        }

        .diff-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          transform: translate(-50%, -50%) scale(0);
          transition: all 0.3s ease;
        }

        .diff-card:hover .icon-glow {
          transform: translate(-50%, -50%) scale(1.2);
        }

        .diff-emoji {
          font-size: 1.8rem;
        }

        .diff-content {
          flex: 1;
        }

        .diff-title {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .diff-description {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          color: #606A70;
          margin: 0;
          line-height: 1.5;
        }

        .diff-arrow {
          font-size: 1.8rem;
          font-weight: bold;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .diff-card:hover .diff-arrow {
          transform: translateX(8px) scale(1.2);
        }

        .choice-cta {
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.05), rgba(102, 45, 145, 0.03));
          padding: 50px 40px;
          border-radius: 24px;
          text-align: center;
          border: 1px solid rgba(236, 0, 140, 0.1);
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 15px 0;
        }

        .cta-description {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          color: #606A70;
          margin: 0 0 30px 0;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #EC008C 0%, #B41E8E 100%);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(236, 0, 140, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(236, 0, 140, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #662D91;
          border: 2px solid #662D91;
          padding: 16px 32px;
          border-radius: 12px;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #662D91;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 45, 145, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .diff-headline {
            font-size: 2.5rem;
          }

          .diff-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .why-choose-axis {
            padding: 80px 0;
          }

          .why-choose-container {
            padding: 0 20px;
          }

          .diff-headline {
            font-size: 2.2rem;
          }

          .diff-card {
            padding: 25px 30px;
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .diff-arrow {
            display: none;
          }

          .choice-cta {
            padding: 40px 30px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }

          .floating-shapes {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .diff-headline {
            font-size: 1.9rem;
          }

          .diff-card {
            padding: 20px 25px;
          }

          .choice-cta {
            padding: 30px 25px;
          }

          .cta-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}