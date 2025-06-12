'use client'

import { useState, useEffect } from 'react'

export default function ServicesHero() {
  const [currentService, setCurrentService] = useState('services')

  const serviceData = {
    services: {
      title: "Services",
      subtitle: "Comprehensive imaging services with advanced technology and expert care"
    }
  }

  // Method to update service from other components
  const updateService = (serviceType) => {
    if (serviceData[serviceType]) {
      setCurrentService(serviceType)
    }
  }

  // Expose method globally if needed
  useEffect(() => {
    window.updateServicesHero = updateService
    return () => {
      delete window.updateServicesHero
    }
  }, [])

  const currentServiceData = serviceData[currentService] || serviceData.services

  return (
    <section className="services-hero">
      <div className="services-hero-overlay"></div>
      <div className="services-hero-container">
        <div className="services-hero-content">
          <h1 className="services-hero-title">{currentServiceData.title}</h1>
          {currentServiceData.subtitle && (
            <p className="services-hero-subtitle">{currentServiceData.subtitle}</p>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Services Hero Section */
        .services-hero {
          background-image: url("/assets/images/services/services-hero.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
          margin-top: 80px;
        }

        .services-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, 
            rgba(38, 34, 98, 0.4) 0%, 
            rgba(127, 38, 138, 0.4) 100%);
          z-index: 1;
        }

        .services-hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        .services-hero-content {
          color: white;
          max-width: 600px;
        }

        .services-hero-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
          margin-top: 0;
        }

        .services-hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          line-height: 1.5;
          margin: 0;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
        }

        /* Loading animation */
        .services-hero.loading {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        @media (max-width: 768px) {
          .services-hero {
            padding: 100px 0 60px;
            margin-top: 75px;
          }

          .services-hero-container {
            padding: 0 20px;
          }

          .services-hero-title {
            font-size: 2.5rem;
          }

          .services-hero-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .services-hero-title {
            font-size: 2rem;
          }

          .services-hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}