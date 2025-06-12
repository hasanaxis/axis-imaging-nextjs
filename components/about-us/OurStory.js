'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function OurStory() {
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
    <section className="our-story" ref={sectionRef}>
      <div className="our-story-container">
        {/* Background Elements */}
        <div className="background-gradient"></div>
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>

        <div className="content-wrapper">
          {/* Image Section */}
          <div className={`story-image ${isVisible ? 'animate-in' : ''}`}>
            <div className="image-container">
              <Image
                src="/assets/images/about/modern-medical-facility.jpg"
                alt="Modern Axis Imaging facility in Mickleham"
                width={600}
                height={500}
                quality={95}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                className="story-img"
              />
              <div className="image-overlay"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-number">2025</span>
                <span className="stat-label">Opening Year</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">5C&apos;s</span>
                <span className="stat-label">Core Values</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`story-content ${isVisible ? 'animate-in' : ''}`}>
            <div className="section-badge">
              <span className="badge-text">Our Story</span>
            </div>

            <h2 className="story-headline">
              A New Beginning for 
              <span className="highlight"> Mickleham</span>
            </h2>

            <div className="story-text">
              <p className="story-paragraph">
                Axis Imaging is Mickleham&apos;s newest healthcare destination, opening in 2025 to serve our growing community. As a family-owned practice, we&apos;ve built our foundation on the belief that high-quality, independent healthcare providers are essential for vibrant and healthy communities.
              </p>

              <p className="story-paragraph">
                Our practice opens with a clear purpose: to bring accessible, compassionate radiology care right here to Mickleham and the surrounding areas. We understand that medical imaging can sometimes feel overwhelming, which is why we&apos;ve designed every aspect of our new clinic around your comfort and peace of mind.
              </p>

              <p className="story-paragraph highlight-paragraph">
                From day one, you&apos;ll experience the difference that comes from a practice built specifically with your needs in mind – where cutting-edge technology meets genuine care, and where you&apos;re not just a patient, but a valued member of our Mickleham community.
              </p>
            </div>

            {/* Feature Points */}
            <div className="feature-points">
              <div className="feature-point">
                <div className="feature-icon">
                  <div className="icon-circle">
                    <span className="icon-text">F</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4>Family-Owned</h4>
                  <p>Genuine care from our family to yours</p>
                </div>
              </div>

              <div className="feature-point">
                <div className="feature-icon">
                  <div className="icon-circle">
                    <span className="icon-text">C</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4>Community-Focused</h4>
                  <p>Deeply rooted in Mickleham&apos;s growth</p>
                </div>
              </div>

              <div className="feature-point">
                <div className="feature-icon">
                  <div className="icon-circle">
                    <span className="icon-text">E</span>
                  </div>
                </div>
                <div className="feature-content">
                  <h4>Expert Care</h4>
                  <p>Latest technology with compassionate service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .our-story {
          position: relative;
          padding: 120px 0;
          background: #ffffff;
          overflow: hidden;
        }

        .our-story-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .background-gradient {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(236, 0, 140, 0.02) 0%,
            rgba(180, 30, 142, 0.03) 50%,
            rgba(102, 45, 145, 0.02) 100%
          );
          z-index: 1;
        }

        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.05), rgba(102, 45, 145, 0.03));
          z-index: 1;
        }

        .circle-1 {
          width: 200px;
          height: 200px;
          top: 20%;
          right: 10%;
        }

        .circle-2 {
          width: 120px;
          height: 120px;
          bottom: 30%;
          left: 5%;
          background: linear-gradient(135deg, rgba(102, 45, 145, 0.04), rgba(236, 0, 140, 0.02));
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .story-image {
          position: relative;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .story-image.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .story-img {
          transition: transform 0.6s ease;
        }

        .image-container:hover .story-img {
          transform: scale(1.05);
        }

        .image-overlay {
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

        .stats-card {
          position: absolute;
          bottom: -30px;
          right: -30px;
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          gap: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.8rem;
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

        .story-content {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }

        .story-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.1), rgba(102, 45, 145, 0.1));
          padding: 8px 20px;
          border-radius: 25px;
          margin-bottom: 20px;
          border: 1px solid rgba(236, 0, 140, 0.2);
        }

        .badge-text {
          color: #EC008C;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .story-headline {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 3rem;
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

        .story-text {
          margin-bottom: 40px;
        }

        .story-paragraph {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #606A70;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .highlight-paragraph {
          padding: 25px;
          background: linear-gradient(135deg, rgba(236, 0, 140, 0.05), rgba(102, 45, 145, 0.03));
          border-radius: 12px;
          border-left: 4px solid #EC008C;
          color: #3C4247;
          font-weight: 500;
        }

        .feature-points {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-point {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          flex-shrink: 0;
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #EC008C 0%, #B41E8E 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(236, 0, 140, 0.3);
        }

        .icon-text {
          color: white;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .feature-content h4 {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 5px 0;
        }

        .feature-content p {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          color: #606A70;
          margin: 0;
          line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .story-headline {
            font-size: 2.5rem;
          }

          .stats-card {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 30px;
            align-self: center;
          }

          .image-container {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .our-story {
            padding: 80px 0;
          }

          .our-story-container {
            padding: 0 20px;
          }

          .content-wrapper {
            gap: 40px;
          }

          .story-headline {
            font-size: 2.2rem;
          }

          .story-paragraph {
            font-size: 1rem;
          }

          .stats-card {
            padding: 20px;
            flex-direction: column;
            gap: 15px;
            bottom: -20px;
            right: -20px;
          }

          .stat-divider {
            width: 40px;
            height: 1px;
            background: linear-gradient(to right, transparent, #C4CED4, transparent);
          }

          .feature-points {
            gap: 20px;
          }

          .decorative-circle {
            display: none;
          }

          .image-container {
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .story-headline {
            font-size: 1.9rem;
          }

          .stats-card {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 20px;
          }

          .feature-point {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  )
}