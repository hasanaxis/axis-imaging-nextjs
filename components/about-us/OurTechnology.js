'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function OurTechnology() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTech, setActiveTech] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)

  const technologies = [
    {
      id: 'ct-scanner',
      name: 'Latest-Generation CT Scanner',
      category: 'Computed Tomography',
      description: 'High-resolution imaging with significantly reduced radiation dose, featuring advanced noise reduction and faster scan times for your comfort and safety.',
      features: [
        'Ultra-low radiation dose',
        'Advanced noise reduction',
        'Faster scan times',
        'Enhanced image quality',
        'Patient comfort features'
      ],
      benefits: [
        'Reduced radiation exposure',
        'Clearer, more detailed images',
        'Quicker procedures',
        'Improved patient experience'
      ],
      image: '/assets/images/technology/ct-scanner.jpg',
      icon: '🔍',
      color: '#EC008C'
    },
    {
      id: 'digital-xray',
      name: 'Digital X-Ray Systems',
      category: 'Digital Radiography',
      description: 'Full-body digital radiography with immediate image processing, eliminating wait times and providing instant, crystal-clear results.',
      features: [
        'Immediate image processing',
        'Digital image enhancement',
        'Full-body capabilities',
        'Instant results',
        'No film processing delays'
      ],
      benefits: [
        'Instant image availability',
        'Superior image quality',
        'Environmentally friendly',
        'Faster diagnosis'
      ],
      image: '/assets/images/technology/digital-xray.jpg',
      icon: '📱',
      color: '#B41E8E'
    },
    {
      id: 'ultrasound',
      name: 'High-Resolution Ultrasound',
      category: 'Ultrasound Imaging',
      description: 'Advanced ultrasound technology providing real-time imaging for comprehensive diagnostic applications, from pregnancy monitoring to musculoskeletal assessment.',
      features: [
        'Real-time imaging',
        'High-frequency transducers',
        'Multiple imaging modes',
        'Advanced doppler capabilities',
        'Portable options available'
      ],
      benefits: [
        'No radiation exposure',
        'Real-time visualization',
        'Non-invasive procedures',
        'Versatile applications'
      ],
      image: '/assets/images/technology/ultrasound.jpg',
      icon: '🌊',
      color: '#662D91'
    },
    {
      id: 'dexa-scanner',
      name: 'DEXA Bone Density Scanner',
      category: 'Bone Densitometry',
      description: 'Precision bone health assessment using the gold standard in osteoporosis screening and fracture risk evaluation.',
      features: [
        'Dual-energy X-ray absorptiometry',
        'Precise bone density measurement',
        'Low radiation dose',
        'Whole body composition analysis',
        'Advanced reporting software'
      ],
      benefits: [
        'Early osteoporosis detection',
        'Fracture risk assessment',
        'Treatment monitoring',
        'Comprehensive bone health evaluation'
      ],
      image: '/assets/images/technology/dexa-scanner.jpg',
      icon: '🦴',
      color: '#262262'
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
    if (isVisible && isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isVisible, isAutoPlaying, technologies.length])

  const handleTechSelect = (index) => {
    setActiveTech(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume after 10 seconds
  }

  return (
    <section className="our-technology" ref={sectionRef}>
      <div className="our-technology-container">
        {/* Background Elements */}
        <div className="tech-background"></div>
        <div className="grid-pattern"></div>
        <div className="floating-elements">
          <div className="tech-particle particle-1"></div>
          <div className="tech-particle particle-2"></div>
          <div className="tech-particle particle-3"></div>
          <div className="tech-particle particle-4"></div>
        </div>

        {/* Header */}
        <div className={`tech-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="section-badge">
            <span className="badge-text">Advanced Technology</span>
          </div>

          <h2 className="tech-headline">
            <span className="highlight">State-of-the-Art</span> Technology
          </h2>

          <p className="tech-subtitle">
            We&apos;ve invested in the latest imaging technology to provide the clearest, most accurate results while prioritizing your comfort and convenience in our purpose-built Mickleham facility.
          </p>
        </div>

        {/* Technology Showcase */}
        <div className={`tech-showcase ${isVisible ? 'animate-in' : ''}`}>
          {/* Technology Navigation */}
          <div className="tech-navigation">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`tech-nav-item ${activeTech === index ? 'active' : ''}`}
                onClick={() => handleTechSelect(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="nav-icon"
                  style={{ backgroundColor: activeTech === index ? tech.color : '#C4CED4' }}
                >
                  <span className="icon-emoji">{tech.icon}</span>
                </div>
                <div className="nav-content">
                  <h4 className="nav-title">{tech.name}</h4>
                  <p className="nav-category">{tech.category}</p>
                  <div className="nav-progress">
                    <div 
                      className="progress-fill"
                      style={{ 
                        backgroundColor: tech.color,
                        width: activeTech === index ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Technology Display */}
          <div className="tech-display">
            <div className="display-content">
              {/* Technology Image */}
              <div className="tech-image">
                <div className="image-container">
                  <Image
                    src={technologies[activeTech].image}
                    alt={technologies[activeTech].name}
                    width={600}
                    height={400}
                    quality={95}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    className="technology-img"
                  />
                  <div 
                    className="tech-overlay"
                    style={{ 
                      background: `linear-gradient(135deg, ${technologies[activeTech].color}20, ${technologies[activeTech].color}10)` 
                    }}
                  ></div>
                  
                  {/* Technology Badge */}
                  <div className="tech-badge">
                    <span 
                      className="badge-icon"
                      style={{ backgroundColor: technologies[activeTech].color }}
                    >
                      {technologies[activeTech].icon}
                    </span>
                    <span className="badge-label">Latest Technology</span>
                  </div>
                </div>
              </div>

              {/* Technology Details */}
              <div className="tech-details">
                <div className="details-header">
                  <h3 className="tech-name">{technologies[activeTech].name}</h3>
                  <p 
                    className="tech-category"
                    style={{ color: technologies[activeTech].color }}
                  >
                    {technologies[activeTech].category}
                  </p>
                </div>

                <p className="tech-description">
                  {technologies[activeTech].description}
                </p>

                <div className="tech-info-grid">
                  {/* Features */}
                  <div className="info-section">
                    <h4 className="info-title">Key Features</h4>
                    <ul className="feature-list">
                      {technologies[activeTech].features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <div 
                            className="feature-dot"
                            style={{ backgroundColor: technologies[activeTech].color }}
                          ></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="info-section">
                    <h4 className="info-title">Patient Benefits</h4>
                    <ul className="benefit-list">
                      {technologies[activeTech].benefits.map((benefit, index) => (
                        <li key={index} className="benefit-item">
                          <div 
                            className="benefit-check"
                            style={{ backgroundColor: technologies[activeTech].color }}
                          >
                            ✓
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technology Stats */}
                <div className="tech-stats">
                  <div className="stat-item">
                    <span className="stat-number">2025</span>
                    <span className="stat-label">Latest Model</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">Premium</span>
                    <span className="stat-label">Quality</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-number">Expert</span>
                    <span className="stat-label">Operation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .our-technology {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f5f6f7 100%);
          overflow: hidden;
        }

        .our-technology-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .tech-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(236, 0, 140, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(102, 45, 145, 0.05) 0%, transparent 50%);
          z-index: 1;
        }

        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(236, 0, 140, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 0, 140, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 1;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .tech-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #EC008C, #B41E8E);
          border-radius: 50%;
          opacity: 0.6;
        }

        .particle-1 {
          top: 20%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .particle-2 {
          top: 60%;
          right: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .particle-3 {
          bottom: 30%;
          left: 20%;
          animation: float 10s ease-in-out infinite;
        }

        .particle-4 {
          top: 40%;
          right: 25%;
          animation: float 7s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(10px); }
        }

        .tech-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tech-header.animate-in {
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

        .tech-headline {
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

        .tech-subtitle {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          line-height: 1.6;
          color: #606A70;
          font-weight: 400;
          max-width: 800px;
          margin: 0 auto;
        }

        .tech-showcase {
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .tech-showcase.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-navigation {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
          overflow-x: auto;
          padding: 20px 0;
        }

        .tech-nav-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px 25px;
          background: white;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          min-width: 280px;
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-nav-item:hover,
        .tech-nav-item.active {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(236, 0, 140, 0.3);
        }

        .nav-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .icon-emoji {
          font-size: 1.5rem;
        }

        .nav-content {
          flex: 1;
        }

        .nav-title {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 5px 0;
        }

        .nav-category {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          color: #606A70;
          margin: 0 0 10px 0;
        }

        .nav-progress {
          height: 3px;
          background: #C4CED4;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          transition: width 0.4s ease;
        }

        .tech-display {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(236, 0, 140, 0.1);
        }

        .display-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
        }

        .tech-image {
          position: relative;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .technology-img {
          transition: transform 0.6s ease;
        }

        .tech-display:hover .technology-img {
          transform: scale(1.05);
        }

        .tech-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .tech-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.95);
          padding: 10px 15px;
          border-radius: 25px;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }

        .badge-label {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #662D91;
        }

        .tech-details {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .details-header {
          margin-bottom: 20px;
        }

        .tech-name {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 8px 0;
        }

        .tech-category {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
        }

        .tech-description {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #606A70;
          margin-bottom: 30px;
        }

        .tech-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 30px;
        }

        .info-section {
          background: rgba(236, 0, 140, 0.02);
          padding: 20px;
          border-radius: 12px;
        }

        .info-title {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 15px 0;
        }

        .feature-list,
        .benefit-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .feature-item,
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          color: #606A70;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .benefit-check {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.7rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .tech-stats {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: rgba(102, 45, 145, 0.05);
          border-radius: 12px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #EC008C;
          line-height: 1;
          margin-bottom: 5px;
        }

        .stat-label {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.8rem;
          color: #606A70;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #C4CED4, transparent);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .display-content {
            grid-template-columns: 1fr;
          }

          .tech-navigation {
            flex-direction: column;
            gap: 15px;
          }

          .tech-nav-item {
            min-width: auto;
          }

          .tech-headline {
            font-size: 2.5rem;
          }

          .image-container {
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .our-technology {
            padding: 80px 0;
          }

          .our-technology-container {
            padding: 0 20px;
          }

          .tech-headline {
            font-size: 2.2rem;
          }

          .tech-subtitle {
            font-size: 1.1rem;
          }

          .tech-details {
            padding: 30px 25px;
          }

          .tech-info-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .tech-stats {
            flex-direction: column;
            gap: 15px;
          }

          .stat-divider {
            width: 40px;
            height: 1px;
            background: linear-gradient(to right, transparent, #C4CED4, transparent);
          }
        }

        @media (max-width: 480px) {
          .tech-headline {
            font-size: 1.9rem;
          }

          .tech-nav-item {
            padding: 15px 20px;
          }

          .tech-details {
            padding: 25px 20px;
          }

          .tech-name {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}