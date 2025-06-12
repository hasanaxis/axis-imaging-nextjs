'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function CommunityFocus() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
    <section className="community-focus" ref={sectionRef}>
      <div className="community-focus-container">
        {/* Background Elements */}
        <div className="community-background"></div>
        <div className="mesh-pattern"></div>
        <div className="community-shapes">
          <div className="shape community-shape-1"></div>
          <div className="shape community-shape-2"></div>
          <div className="shape community-shape-3"></div>
        </div>

        <div className={`community-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="community-content">
            {/* Text Content */}
            <div className="community-text">
              <div className="section-badge community-badge">
                <span className="badge-text">Building Community</span>
              </div>

              <h2 className="community-headline">
                Building Stronger Communities Through <span className="highlight">Better Healthcare</span>
              </h2>

              <div className="community-description">
                <p className="community-paragraph">
                  At Axis Imaging, we believe that strong communities deserve strong, personalized healthcare. As Mickleham&apos;s newest independent provider, we&apos;re not just here to take scans – we&apos;re here to be a vital part of the growing community we&apos;re excited to serve.
                </p>

                <p className="community-paragraph">
                  We&apos;re committed to bringing expert radiology services directly to your neighborhood, because we know that when healthcare is close to home, communities thrive. Every patient we serve helps build the foundation of care that will support our shared community for years to come.
                </p>
              </div>

              {/* Community Values */}
              <div className="community-values">
                <div className="value-item">
                  <div className="value-icon">
                    <span className="value-emoji">🏘️</span>
                  </div>
                  <div className="value-content">
                    <h4>Local Community Focus</h4>
                    <p>Deeply rooted in Mickleham&apos;s growth and development</p>
                  </div>
                </div>

                <div className="value-item">
                  <div className="value-icon">
                    <span className="value-emoji">🤝</span>
                  </div>
                  <div className="value-content">
                    <h4>Building Relationships</h4>
                    <p>Creating lasting connections with patients and families</p>
                  </div>
                </div>

                <div className="value-item">
                  <div className="value-icon">
                    <span className="value-emoji">💚</span>
                  </div>
                  <div className="value-content">
                    <h4>Accessible Healthcare</h4>
                    <p>Making quality medical imaging available to everyone</p>
                  </div>
                </div>
              </div>

              {/* Community Stats */}
              <div className="community-stats">
                <div className="stats-header">
                  <h4>Our Community Commitment</h4>
                </div>
                <div className="stats-grid">
                  <div className="community-stat">
                    <span className="stat-number">2025</span>
                    <span className="stat-label">Opening in Mickleham</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="community-stat">
                    <span className="stat-number">Local</span>
                    <span className="stat-label">Family-Owned Practice</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="community-stat">
                    <span className="stat-number">Expert</span>
                    <span className="stat-label">Community Care</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="community-image">
              <div className="image-container">
                <Image
                  src="/assets/images/about/community-healthcare.jpg"
                  alt="Axis Imaging serving the Mickleham community"
                  width={600}
                  height={500}
                  quality={95}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  className="community-img"
                />
                <div className="community-overlay"></div>
                
                {/* Community Badge */}
                <div className="community-card">
                  <div className="card-header">
                    <div className="card-icon">🏥</div>
                    <div className="card-info">
                      <h4>Mickleham Community</h4>
                      <p>Healthcare Destination</p>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>Your new healthcare destination opening 2025</p>
                    <div className="card-features">
                      <span className="feature">Expert Care</span>
                      <span className="feature">Local Service</span>
                      <span className="feature">Family Owned</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Community Elements */}
              <div className="floating-community-elements">
                <div className="community-element element-1">
                  <span className="element-icon">👥</span>
                  <span className="element-text">Community First</span>
                </div>
                <div className="community-element element-2">
                  <span className="element-icon">🌟</span>
                  <span className="element-text">Expert Care</span>
                </div>
                <div className="community-element element-3">
                  <span className="element-icon">🏠</span>
                  <span className="element-text">Local Pride</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .community-focus {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          overflow: hidden;
        }

        .community-focus-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .community-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(236, 0, 140, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(102, 45, 145, 0.04) 0%, transparent 50%);
          z-index: 1;
        }

        .mesh-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(236, 0, 140, 0.05) 1px, transparent 0);
          background-size: 30px 30px;
          z-index: 1;
        }

        .community-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.08), rgba(102, 45, 145, 0.04));
        }

        .community-shape-1 {
          width: 150px;
          height: 150px;
          top: 10%;
          right: 5%;
          animation: communityFloat1 12s ease-in-out infinite;
        }

        .community-shape-2 {
          width: 100px;
          height: 100px;
          bottom: 15%;
          left: 10%;
          animation: communityFloat2 10s ease-in-out infinite;
        }

        .community-shape-3 {
          width: 80px;
          height: 80px;
          top: 70%;
          right: 20%;
          animation: communityFloat3 14s ease-in-out infinite;
        }

        @keyframes communityFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -20px) rotate(90deg); }
          50% { transform: translate(-10px, -10px) rotate(180deg); }
          75% { transform: translate(-20px, 15px) rotate(270deg); }
        }

        @keyframes communityFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -25px) rotate(180deg); }
        }

        @keyframes communityFloat3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-15px, 10px) rotate(120deg); }
          66% { transform: translate(10px, -15px) rotate(240deg); }
        }

        .community-section {
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .community-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .community-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
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

        .community-headline {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.2;
          color: #662D91;
          margin-bottom: 30px;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #EC008C 0%, #B41E8E 50%, #662D91 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .community-description {
          margin-bottom: 40px;
        }

        .community-paragraph {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #606A70;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .community-values {
          margin-bottom: 40px;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
          padding: 15px;
          background: rgba(236, 0, 140, 0.02);
          border-radius: 12px;
          border-left: 3px solid #EC008C;
        }

        .value-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.1), rgba(102, 45, 145, 0.1));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .value-emoji {
          font-size: 1.5rem;
        }

        .value-content h4 {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 5px 0;
        }

        .value-content p {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.95rem;
          color: #606A70;
          margin: 0;
          line-height: 1.5;
        }

        .community-stats {
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.05), rgba(102, 45, 145, 0.03));
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(236, 0, 140, 0.1);
        }

        .stats-header h4 {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 20px 0;
          text-align: center;
        }

        .stats-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
        }

        .community-stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #EC008C;
          line-height: 1;
          margin-bottom: 5px;
        }

        .stat-label {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          color: #606A70;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #C4CED4, transparent);
        }

        .community-image {
          position: relative;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .community-img {
          transition: transform 0.6s ease;
        }

        .image-container:hover .community-img {
          transform: scale(1.05);
        }

        .community-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(236, 0, 140, 0.1) 0%,
            rgba(102, 45, 145, 0.05) 100%
          );
          pointer-events: none;
        }

        .community-card {
          position: absolute;
          bottom: 30px;
          left: 30px;
          right: 30px;
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .card-icon {
          font-size: 1.8rem;
        }

        .card-info h4 {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #662D91;
          margin: 0;
        }

        .card-info p {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          color: #EC008C;
          margin: 0;
          font-weight: 500;
        }

        .card-body p {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          color: #606A70;
          margin: 0 0 15px 0;
          line-height: 1.5;
        }

        .card-features {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .feature {
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.1), rgba(102, 45, 145, 0.1));
          color: #662D91;
          padding: 5px 12px;
          border-radius: 20px;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(236, 0, 140, 0.2);
        }

        .floating-community-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .community-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.9);
          padding: 10px 15px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(236, 0, 140, 0.2);
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #662D91;
        }

        .element-1 {
          top: 20px;
          right: 20px;
          animation: elementFloat1 6s ease-in-out infinite;
        }

        .element-2 {
          top: 50%;
          left: -10px;
          animation: elementFloat2 8s ease-in-out infinite;
        }

        .element-3 {
          bottom: 120px;
          right: 40px;
          animation: elementFloat3 7s ease-in-out infinite;
        }

        @keyframes elementFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes elementFloat2 {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }

        @keyframes elementFloat3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-5px, -8px); }
        }

        .element-icon {
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .community-content {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .community-headline {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .community-focus {
            padding: 80px 0;
          }

          .community-focus-container {
            padding: 0 20px;
          }

          .community-headline {
            font-size: 2.2rem;
          }

          .value-item {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .stats-grid {
            flex-direction: column;
            gap: 15px;
          }

          .stat-divider {
            width: 40px;
            height: 1px;
            background: linear-gradient(to right, transparent, #C4CED4, transparent);
          }

          .image-container {
            height: 350px;
          }

          .community-card {
            bottom: 20px;
            left: 20px;
            right: 20px;
            padding: 20px;
          }

          .floating-community-elements {
            display: none;
          }

          .community-shapes {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .community-headline {
            font-size: 1.9rem;
          }

          .community-stats {
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  )
}