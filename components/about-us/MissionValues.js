'use client'

import { useState, useEffect, useRef } from 'react'

export default function MissionValues() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeValue, setActiveValue] = useState(0)
  const sectionRef = useRef(null)

  const values = [
    {
      id: 'community',
      title: 'Community',
      icon: 'C',
      description: 'We see ourselves as the newest addition to the Mickleham community we&apos;re excited to serve, fostering trust and continuity in care, so patients know they are valued members of a compassionate and connected healthcare network.',
      color: '#EC008C'
    },
    {
      id: 'compassion',
      title: 'Compassion',
      icon: 'C',
      description: 'Our state-of-the-art technology is paired with a commitment to compassion – ensuring that the highest standard of care is delivered in a way that respects your dignity and well-being.',
      color: '#B41E8E'
    },
    {
      id: 'comfort',
      title: 'Comfort',
      icon: 'C',
      description: 'Our brand new clinic is warm, welcoming and friendly. We know that imaging exams can be daunting, so we&apos;ve designed every detail to make your experience with us as comfortable as possible, with kindness and support at each step.',
      color: '#662D91'
    },
    {
      id: 'competence',
      title: 'Competence',
      icon: 'C',
      description: 'You can trust that you&apos;re in expert hands from day one. We&apos;ve invested in the latest advancements in medical technology combined with the highest standard of care to ensure precise and timely results.',
      color: '#262262'
    },
    {
      id: 'clarity',
      title: 'Clarity',
      icon: 'C',
      description: 'We believe in timely, clear communication with both patients and referrers, sharing knowledge to aid understanding, reassure, and enable the appropriate next steps in care.',
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveValue((prev) => (prev + 1) % values.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible, values.length])

  return (
    <section className="mission-values" ref={sectionRef}>
      <div className="mission-values-container">
        {/* Background Elements */}
        <div className="background-pattern"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>

        {/* Mission Section */}
        <div className={`mission-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="section-badge">
            <span className="badge-text">Illuminating Care</span>
          </div>

          <h2 className="mission-headline">
            Our <span className="highlight">Mission</span>
          </h2>

          <div className="mission-content">
            <p className="mission-text">
              To make radiology truly accessible for Mickleham and surrounding communities – not just in terms of easy access and convenience, but also by making the entire process clear, straightforward and stress-free. We believe that healthcare should never be a mystery, so we&apos;re committed to providing transparent communication, clear instructions, and a welcoming environment where patients feel comfortable every step of the way.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className={`values-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="values-header">
            <h3 className="values-headline">
              Our Values - <span className="highlight">The 5Cs</span>
            </h3>
            <p className="values-subtitle">
              Five core principles that guide everything we do
            </p>
          </div>

          <div className="values-content">
            {/* Values List */}
            <div className="values-list">
              {values.map((value, index) => (
                <div
                  key={value.id}
                  className={`value-item ${activeValue === index ? 'active' : ''}`}
                  onClick={() => setActiveValue(index)}
                  onMouseEnter={() => setActiveValue(index)}
                >
                  <div className="value-icon" style={{ background: value.color }}>
                    <span className="icon-text">{value.icon}</span>
                  </div>
                  <div className="value-info">
                    <h4 className="value-title">{value.title}</h4>
                    <div className="value-indicator">
                      <div 
                        className="indicator-fill"
                        style={{ 
                          backgroundColor: value.color,
                          width: activeValue === index ? '100%' : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Value Display */}
            <div className="active-value-display">
              <div className="value-card">
                <div className="card-header">
                  <div 
                    className="large-icon"
                    style={{ background: values[activeValue].color }}
                  >
                    <span className="large-icon-text">{values[activeValue].icon}</span>
                  </div>
                  <h4 className="card-title">{values[activeValue].title}</h4>
                </div>
                <p className="card-description">
                  {values[activeValue].description}
                </p>
                <div className="card-footer">
                  <div className="progress-indicators">
                    {values.map((_, index) => (
                      <div
                        key={index}
                        className={`progress-dot ${activeValue === index ? 'active' : ''}`}
                        style={{ 
                          backgroundColor: activeValue === index ? values[activeValue].color : '#C4CED4' 
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-values {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
          overflow: hidden;
        }

        .mission-values-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .background-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(236, 0, 140, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(102, 45, 145, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(180, 30, 142, 0.02) 0%, transparent 50%);
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.05), rgba(102, 45, 145, 0.03));
          z-index: 1;
        }

        .shape-1 {
          width: 150px;
          height: 150px;
          top: 10%;
          right: 15%;
          animation: float1 6s ease-in-out infinite;
        }

        .shape-2 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 10%;
          animation: float2 8s ease-in-out infinite;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 5%;
          animation: float3 7s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(120deg); }
        }

        .mission-section {
          text-align: center;
          margin-bottom: 100px;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mission-section.animate-in {
          opacity: 1;
          transform: translateY(0);
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

        .mission-headline {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.2;
          color: #662D91;
          margin-bottom: 40px;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #EC008C 0%, #B41E8E 50%, #662D91 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mission-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .mission-text {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          line-height: 1.7;
          color: #606A70;
          font-weight: 400;
        }

        .values-section {
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .values-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .values-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .values-headline {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.2;
          color: #662D91;
          margin-bottom: 15px;
          letter-spacing: -0.02em;
        }

        .values-subtitle {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          color: #606A70;
          font-weight: 400;
        }

        .values-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.5);
          border: 2px solid transparent;
        }

        .value-item:hover,
        .value-item.active {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(236, 0, 140, 0.2);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transform: translateX(10px);
        }

        .value-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .icon-text {
          color: white;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .value-info {
          flex: 1;
        }

        .value-title {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 10px 0;
        }

        .value-indicator {
          height: 3px;
          background: #C4CED4;
          border-radius: 2px;
          overflow: hidden;
        }

        .indicator-fill {
          height: 100%;
          transition: width 0.4s ease;
        }

        .active-value-display {
          position: sticky;
          top: 100px;
        }

        .value-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(236, 0, 140, 0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .large-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }

        .large-icon-text {
          color: white;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
        }

        .card-title {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: #662D91;
          margin: 0;
        }

        .card-description {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #606A70;
          margin-bottom: 30px;
          font-weight: 400;
        }

        .card-footer {
          display: flex;
          justify-content: center;
        }

        .progress-indicators {
          display: flex;
          gap: 8px;
        }

        .progress-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .progress-dot.active {
          transform: scale(1.2);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .values-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .active-value-display {
            position: relative;
            top: auto;
          }

          .mission-headline {
            font-size: 2.5rem;
          }

          .values-headline {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .mission-values {
            padding: 80px 0;
          }

          .mission-values-container {
            padding: 0 20px;
          }

          .mission-section {
            margin-bottom: 60px;
          }

          .mission-headline {
            font-size: 2.2rem;
          }

          .values-headline {
            font-size: 2rem;
          }

          .mission-text {
            font-size: 1.1rem;
          }

          .value-item {
            padding: 15px;
          }

          .value-card {
            padding: 30px 25px;
          }

          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .mission-headline {
            font-size: 1.9rem;
          }

          .values-headline {
            font-size: 1.7rem;
          }

          .mission-text {
            font-size: 1rem;
          }

          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .large-icon {
            width: 60px;
            height: 60px;
          }

          .large-icon-text {
            font-size: 1.5rem;
          }

          .card-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}