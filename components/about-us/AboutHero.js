'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="about-hero">
      <div className="about-hero-container">
        {/* Background Gradient */}
        <div className="gradient-background"></div>
        
        {/* Decorative X Elements */}
        <div className="decorative-x x-1"></div>
        <div className="decorative-x x-2"></div>
        <div className="decorative-x x-3"></div>

        <div className="content-wrapper">
          {/* Text Content */}
          <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-headline">
              Where Expert Care Meets 
              <span className="highlight"> Exceptional Service</span>
            </h1>
            
            <p className="hero-subheadline">
              Opening 2025 in Mickleham – your new local, independent provider 
              of high-quality radiology services, bringing expert care right to your community.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                Book Your Appointment
              </button>
              <button className="btn-secondary">
                Our Services
              </button>
            </div>

            {/* Opening Soon Badge */}
            <div className="opening-badge">
              <span className="badge-text">Opening Soon 2025</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className={`hero-image ${isVisible ? 'animate-in' : ''}`}>
            <div className="image-container">
              <Image
                src="/assets/images/about/hero-image.jpg"
                alt="Axis Imaging medical professionals providing compassionate care"
                width={600}
                height={700}
                quality={95}
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                className="hero-img"
              />
              <div className="image-gradient-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #ffffff;
          overflow: hidden;
          padding: 120px 0 80px;
        }

        .about-hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .gradient-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            ellipse at 20% 30%,
            rgba(236, 0, 140, 0.08) 0%,
            rgba(180, 30, 142, 0.05) 25%,
            rgba(102, 45, 145, 0.03) 50%,
            transparent 75%
          );
          z-index: 1;
        }

        /* Decorative X Elements */
        .decorative-x {
          position: absolute;
          width: 120px;
          height: 120px;
          opacity: 0.03;
          z-index: 1;
        }

        .decorative-x::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 8px;
          background: linear-gradient(45deg, #EC008C, #B41E8E, #662D91);
          transform: translate(-50%, -50%) rotate(45deg);
          border-radius: 4px;
        }

        .decorative-x::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 8px;
          background: linear-gradient(45deg, #EC008C, #B41E8E, #662D91);
          transform: translate(-50%, -50%) rotate(-45deg);
          border-radius: 4px;
        }

        .x-1 {
          top: 15%;
          right: 10%;
          transform: rotate(15deg);
        }

        .x-2 {
          bottom: 20%;
          left: 5%;
          transform: rotate(-25deg);
          width: 80px;
          height: 80px;
        }

        .x-3 {
          top: 60%;
          right: 5%;
          transform: rotate(35deg);
          width: 60px;
          height: 60px;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-headline {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          color: #662D91;
          margin-bottom: 30px;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #EC008C 0%, #B41E8E 50%, #662D91 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .hero-subheadline {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.3rem;
          line-height: 1.6;
          color: #606A70;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
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

        .opening-badge {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #EC008C 0%, #B41E8E 100%);
          padding: 8px 20px;
          border-radius: 25px;
          box-shadow: 0 4px 15px rgba(236, 0, 140, 0.2);
        }

        .badge-text {
          color: white;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-image {
          position: relative;
          opacity: 0;
          transform: translateX(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .hero-image.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 600px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .hero-img {
          transition: transform 0.6s ease;
        }

        .image-container:hover .hero-img {
          transform: scale(1.05);
        }

        .image-gradient-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(
            to top,
            rgba(236, 0, 140, 0.8) 0%,
            rgba(180, 30, 142, 0.4) 40%,
            transparent 100%
          );
          pointer-events: none;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .hero-headline {
            font-size: 3rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .image-container {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 100px 0 60px;
          }

          .about-hero-container {
            padding: 0 20px;
          }

          .content-wrapper {
            gap: 40px;
          }

          .hero-headline {
            font-size: 2.5rem;
          }

          .hero-subheadline {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }

          .image-container {
            height: 400px;
          }

          .decorative-x {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-headline {
            font-size: 2.2rem;
          }

          .hero-subheadline {
            font-size: 1rem;
          }

          .image-container {
            height: 350px;
          }
        }
      `}</style>
    </section>
  )
}