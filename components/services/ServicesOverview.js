'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ServicesOverview() {
  const [animatedSections, setAnimatedSections] = useState(new Set())
  const observerRef = useRef(null)

  const services = [
    {
      id: 'ct-scan',
      title: 'CT Scan',
      description: 'A CT scan, or computed tomography scan, is a powerful imaging technique that combines X-ray technology with advanced computer processing to create detailed cross-sectional images of the body. This non-invasive procedure is essential for diagnosing various medical conditions, including tumors, internal injuries, and diseases affecting the organs.',
      image: '/assets/images/services/Frame 16.png',
      reverse: false
    },
    {
      id: 'x-ray',
      title: 'X-Ray',
      description: 'An X-ray is a widely used imaging technique that employs electromagnetic radiation to create images of the internal structures of the body. This quick and painless procedure is crucial for diagnosing fractures, infections, and other medical conditions. X-rays help healthcare professionals visualize bones and certain soft tissues, allowing for effective treatment planning.',
      image: '/assets/images/services/Frame 14.png',
      reverse: true
    },
    {
      id: 'ultrasound',
      title: 'Ultrasound',
      description: 'Ultrasound imaging uses high-frequency sound waves to create real-time images of internal structures. This safe, non-invasive procedure requires no radiation and is particularly valuable for examining soft tissues, monitoring pregnancies, and guiding medical procedures with precision.',
      image: '/assets/images/services/Frame 13.png',
      reverse: false
    },
    {
      id: 'dexa',
      title: 'DEXA Scan',
      description: 'DEXA (Dual-Energy X-ray Absorptiometry) scanning is the gold standard for measuring bone density. This precise, low-radiation procedure is essential for diagnosing osteoporosis, assessing fracture risk, and monitoring bone health over time, particularly in postmenopausal women and older adults.',
      image: '/assets/images/services/Frame 15.png',
      reverse: true
    },
    {
      id: 'interventional-radiology',
      title: 'Interventional Radiology',
      description: 'A DEXA scan, or dual-energy X-ray absorptiometry, is a specialized imaging technique used to measure bone density and assess bone health. This non-invasive procedure utilizes low-dose X-rays to provide precise measurements, helping to identify osteoporosis and other conditions that affect bone strength.',
      image: '/assets/images/services/interventional-radiology.png',
      reverse: false
    }
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const serviceId = entry.target.dataset.serviceId
          if (serviceId) {
            setAnimatedSections(prev => new Set([...prev, serviceId]))
            
            // Update hero if function exists
            if (window.updateServicesHero) {
              window.updateServicesHero(serviceId)
            }
          }
        }
      })
    }, observerOptions)

    // Observe all service sections
    const serviceSections = document.querySelectorAll('.service-section')
    serviceSections.forEach(section => {
      observerRef.current.observe(section)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleLearnMore = (serviceName) => {
    console.log(`Learn more clicked for: ${serviceName}`)
    // Here you could navigate to detailed service page or open modal
    alert(`Learn more about ${serviceName} - This would open detailed information or navigate to a dedicated page.`)
  }

  const scrollToService = (serviceId) => {
    const element = document.getElementById(`${serviceId}-section`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="services-overview">
      <div className="services-overview-container">
        <div className="services-overview-header">
          <h2>Our Services</h2>
          <p className="services-subtitle">
            Learn more about our services or book online
          </p>
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            id={`${service.id}-section`}
            data-service-id={service.id}
            className={`service-section ${animatedSections.has(service.id) ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`service-content ${service.reverse ? 'reverse' : ''}`}>
              <div className="service-image">
                <div className="image-container">
                  <Image
                    src={service.image}
                    alt={`${service.title} procedure`}
                    width={291}
                    height={492}
                    quality={100}
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    className={`service-img ${animatedSections.has(service.id) ? 'loaded' : ''}`}
                  />
                  <div className="image-gradient-overlay"></div>
                </div>
              </div>
              <div className="service-text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button 
                  className="service-learn-more"
                  onClick={() => handleLearnMore(service.title)}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Services Overview Section */
        .services-overview {
          background: #ffffff;
          padding: 60px 0;
        }

        .services-overview-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .services-overview-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .services-overview-header h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #4a3a8c;
          margin-bottom: 15px;
          letter-spacing: -0.02em;
          margin-top: 0;
        }

        .services-subtitle {
          font-size: 1.3rem;
          color: #ec008c;
          font-weight: 500;
          margin: 0;
        }

        /* Service Sections */
        .service-section {
          margin-bottom: 60px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-section:last-child {
          margin-bottom: 0;
        }

        .service-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .service-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Default layout: text left, image right */
        .service-content .service-text {
          order: 1;
        }

        .service-content .service-image {
          order: 2;
        }

        /* Reverse layout: image left, text right */
        .service-content.reverse .service-text {
          order: 2;
        }

        .service-content.reverse .service-image {
          order: 1;
        }

        .service-text h3 {
          font-size: 2.5rem;
          font-weight: 600;
          color: #4a3a8c;
          margin-bottom: 25px;
          letter-spacing: -0.01em;
          margin-top: 0;
        }

        .service-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #555;
          margin-bottom: 30px;
          margin-top: 0;
        }

        .service-learn-more {
          background: transparent;
          color: #4a3a8c;
          border: 2px solid #4a3a8c;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: "Inter", sans-serif;
        }

        .service-learn-more:hover {
          background: #4a3a8c;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(74, 58, 140, 0.3);
        }

        .service-learn-more:active {
          transform: scale(0.95);
        }

        .service-image {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }

        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 291 / 492; /* Maintain original aspect ratio */
          border-radius: 20px;
          overflow: hidden;
          height: 668px;
          width: 395px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .service-img {
          opacity: 0.8;
          transform: scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-img.loaded {
          opacity: 1;
          transform: scale(1);
        }

        .image-gradient-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
              to top,
              rgba(235, 0, 139, 0.85) 0%,
              rgba(235, 0, 139, 0.3) 40%,
              transparent 70%
            );
          pointer-events: none;
        }

        /* Hover effects */
        .service-section:hover {
          background: rgba(74, 58, 140, 0.02);
          border-radius: 20px;
          padding: 20px;
          margin-left: -20px;
          margin-right: -20px;
        }

        .service-section:hover .service-img {
          transform: scale(1.02);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .services-overview {
            padding: 40px 0;
          }

          .services-overview-container {
            padding: 0 20px;
          }

          .services-overview-header {
            margin-bottom: 40px;
          }

          .service-content,
          .service-content.reverse {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          /* Mobile layout: always image first, then text */
          .service-content .service-image,
          .service-content.reverse .service-image {
            order: 1;
          }

          .service-content .service-text,
          .service-content.reverse .service-text {
            order: 2;
          }

          .service-text {
            text-align: left;
            padding: 0 10px;
          }

          .service-section {
            margin-bottom: 50px;
          }

          .service-image {
            width: 100%;
            margin: 0;
          }

          .image-container {
            width: 100%;
            height: 350px;
            border-radius: 15px;
          }

          .service-text h3 {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .service-text p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 25px;
          }

          .service-learn-more {
            padding: 10px 20px;
            font-size: 15px;
          }
        }

        @media (max-width: 768px) {
          .services-overview {
            padding: 30px 0;
          }

          .services-overview-container {
            padding: 0 15px;
          }

          .services-overview-header h2 {
            font-size: 2.2rem;
            margin-bottom: 10px;
          }

          .services-subtitle {
            font-size: 1.1rem;
          }

          .service-section {
            margin-bottom: 40px;
          }

          .service-content {
            gap: 25px;
          }

          .image-container {
            width: 100%;
            height: 300px;
            border-radius: 12px;
          }

          .service-text {
            padding: 0 5px;
          }

          .service-text h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
          }

          .service-text p {
            font-size: 0.95rem;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .services-overview {
            padding: 25px 0;
          }

          .services-overview-container {
            padding: 0 12px;
          }

          .services-overview-header h2 {
            font-size: 1.9rem;
          }

          .services-subtitle {
            font-size: 1rem;
          }

          .service-section {
            margin-bottom: 35px;
          }

          .service-content {
            gap: 20px;
          }

          .image-container {
            width: 100%;
            height: 280px;
            border-radius: 10px;
          }

          .service-text h3 {
            font-size: 1.6rem;
            margin-bottom: 12px;
          }

          .service-text p {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 18px;
          }

          .service-learn-more {
            padding: 8px 16px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  )
}