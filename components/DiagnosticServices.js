'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

export default function DiagnosticServices() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)
  const servicesGridRef = useRef(null)
  const intersectionObserverRef = useRef(null)
  const scrollTimeoutRef = useRef(null)

  const services = [
    {
      id: 'ct-scan',
      title: 'CT-Scan',
      image: '/assets/images/services/Frame 16.png',
      alt: 'CT Scan procedure'
    },
    {
      id: 'x-ray',
      title: 'X-Ray',
      image: '/assets/images/services/Frame 14.png',
      alt: 'X-Ray procedure'
    },
    {
      id: 'ultrasound',
      title: 'Ultrasound',
      image: '/assets/images/services/Frame 13.png',
      alt: 'Ultrasound procedure'
    },
    {
      id: 'dexa',
      title: 'DEXA',
      image: '/assets/images/services/Frame 15.png',
      alt: 'DEXA scan procedure'
    }
  ]

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsAnimated(true), 100)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      clearTimeout(timer)
    }
  }, [])

  // Setup intersection observer for mobile
  useEffect(() => {
    if (!isMobile || !servicesGridRef.current) return

    const options = {
      root: servicesGridRef.current,
      rootMargin: '0px',
      threshold: 0.6,
    }

    intersectionObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = Array.from(servicesGridRef.current.children).indexOf(entry.target)
          if (cardIndex !== -1 && cardIndex !== currentIndex) {
            setCurrentIndex(cardIndex)
          }
        }
      })
    }, options)

    // Observe all service cards
    const cards = servicesGridRef.current.children
    Array.from(cards).forEach((card) => {
      intersectionObserverRef.current.observe(card)
    })

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect()
      }
    }
  }, [isMobile, currentIndex])

  // Handle scroll on mobile with debouncing
  const handleScroll = useCallback(() => {
    if (!isMobile || !servicesGridRef.current) return

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const grid = servicesGridRef.current
      const gridRect = grid.getBoundingClientRect()
      const gridCenter = gridRect.left + gridRect.width / 2

      let closestIndex = 0
      let closestDistance = Infinity

      const cards = grid.children
      for (let i = 0; i < cards.length; i++) {
        const cardRect = cards[i].getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const distance = Math.abs(cardCenter - gridCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      }

      if (closestIndex !== currentIndex) {
        setCurrentIndex(closestIndex)
      }
    }, 100)
  }, [isMobile, currentIndex])

  useEffect(() => {
    if (!isMobile || !servicesGridRef.current) return

    const grid = servicesGridRef.current
    grid.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      grid.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll, isMobile])

  const handleServiceClick = (index, serviceId) => {
    setCurrentIndex(index)
    console.log(`Selected service: ${serviceId}`)
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    
    if (isMobile && servicesGridRef.current) {
      const cards = servicesGridRef.current.children
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        })
      }
    }
  }

  const handleViewAllServices = () => {
    console.log('View all services clicked')
  }

  return (
    <section className="diagnostic-section">
      <div className="diagnostic-container">
        <div className="diagnostic-header">
          <h2>Our Services</h2>
          <p>My doctor referred me for →</p>
        </div>

        <div 
          className="diagnostic-grid" 
          id="services-grid"
          ref={servicesGridRef}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`diagnostic-card service-card ${index === currentIndex ? 'focused' : ''} ${isAnimated ? 'animate' : ''}`}
              data-service={service.id}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => handleServiceClick(index, service.id)}
            >
              <div className="diagnostic-card-image">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 280px, (max-width: 1200px) 50vw, 25vw"
                  priority={index === 0}
                />
              </div>
              <div className="diagnostic-card-overlay">
                <div className="diagnostic-card-content">
                  <h3>{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots (mobile only) */}
        <div className="services-pagination" id="services-pagination">
          {services.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              data-index={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile bottom section */}
        <div className="mobile-services-bottom">
          <div className="mobile-services-subtitle">Or view all services</div>
          <button className="diagnostic-btn" onClick={handleViewAllServices}>
            View All Services
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Expert Diagnostic Imaging Section */
        .diagnostic-section {
          background: #ffffff;
          padding: 100px 0;
          position: relative;
        }

        .diagnostic-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .diagnostic-btn {
          background: transparent;
          color: #4a3a8c;
          border: 2px solid #4a3a8c;
          padding: 16px 32px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          align-self: flex-start;
          margin-top: 50px;
        }

        .diagnostic-btn:hover {
          background: #eb008b;
          border-color: #eb008b;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(236, 0, 140, 0.25);
        }

        .diagnostic-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .diagnostic-header h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #662d91;
          margin-bottom: 30px;
          letter-spacing: -0.02em;
          line-height: 1.2;
          text-align: left;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .diagnostic-header p {
          font-size: 1.3rem;
          color: #eb008b;
          font-weight: 400;
          line-height: 1.5;
          text-align: left;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .diagnostic-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          align-items: stretch;
        }

        .diagnostic-card {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          height: 500px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px);
        }

        .diagnostic-card.animate {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .diagnostic-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .diagnostic-card-image {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .diagnostic-card:hover .diagnostic-card-image :global(img) {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        .diagnostic-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to top, 
            rgba(235, 0, 139, 0.9) 0%, 
            rgba(235, 0, 139, 0.2) 30%, 
            rgba(235, 0, 139, 0) 60%, 
            rgba(235, 0, 139, 0) 80%, 
            transparent 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 30px;
          transition: all 0.3s ease;
        }

        .diagnostic-card-content h3 {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          margin: 0;
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-services-subtitle {
          display: none;
        }

        .services-pagination {
          display: none;
        }

        .mobile-services-bottom {
          display: none;
        }

        /* Mobile Design - Horizontal Scroll */
        @media (max-width: 768px) {
          .diagnostic-section {
            padding: 60px 0;
            background: #ffffff;
          }

          .mobile-services-subtitle {
            display: flex;
          }

          .mobile-services-bottom {
            display: block;
          }

          .diagnostic-container {
            padding: 0;
            max-width: 100%;
          }

          .diagnostic-header {
            margin-bottom: 30px;
            padding: 0 20px;
          }

          .diagnostic-header h2 {
            font-size: 2.5rem;
            color: #4a3a8c;
            margin-bottom: 15px;
            text-align: left;
            font-weight: 700;
          }

          .diagnostic-header p {
            font-size: 1rem;
            color: #eb008b;
            text-align: left;
            margin-bottom: 0;
          }

          /* Horizontal scroll container */
          .diagnostic-grid {
            display: flex;
            overflow-x: auto;
            gap: 20px;
            padding: 20px;
            scroll-behavior: smooth;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding-left: calc(50vw - 140px);
            padding-right: calc(50vw - 140px);
          }

          .diagnostic-grid::-webkit-scrollbar {
            display: none;
          }

          .diagnostic-card {
            flex: 0 0 280px;
            height: 350px;
            border-radius: 20px;
            scroll-snap-align: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 3px solid transparent;
            position: relative;
            transform: scale(0.85);
            opacity: 0.6;
            filter: blur(1px);
          }

          .diagnostic-card.animate {
            opacity: 0.6;
            transform: scale(0.85);
            animation: none;
          }

          .diagnostic-card.focused {
            transform: scale(1) !important;
            opacity: 1 !important;
            border: 3px solid #262262 !important;
            box-shadow: 0 15px 35px rgba(38, 34, 98, 0.4) !important;
            z-index: 10;
            filter: blur(0px) !important;
          }

          /* Improve pagination dots visibility */
          .services-pagination {
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 30px 0;
            margin-top: 15px;
          }

          .pagination-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: rgba(38, 34, 98, 0.25);
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid transparent;
            padding: 0;
            position: relative;
          }

          .pagination-dot.active {
            background: #262262;
            transform: scale(1.3);
            border: 2px solid rgba(38, 34, 98, 0.2);
            box-shadow: 0 4px 12px rgba(38, 34, 98, 0.3);
          }

          .pagination-dot:hover:not(.active) {
            background: rgba(38, 34, 98, 0.5);
            transform: scale(1.1);
          }

          .diagnostic-card-overlay {
            padding: 20px;
            background: linear-gradient(
              to top,
              rgba(235, 0, 139, 0.85) 0%,
              rgba(235, 0, 139, 0.3) 40%,
              transparent 70%
            );
          }

          .diagnostic-card-content h3 {
            font-size: 1.6rem;
            font-weight: 600;
            color: white;
          }

          /* Bottom section with subtitle and button */
          .mobile-services-bottom {
            padding: 30px 20px 0;
            text-align: left;
          }

          .mobile-services-subtitle {
            font-size: 1.1rem;
            color: #00a496;
            margin-bottom: 15px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          .diagnostic-btn {
            background: transparent;
            color: #4a3a8c;
            border: 2px solid #4a3a8c;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 500;
            font-size: 14px;
            margin-top: 0;
          }

          .diagnostic-btn:hover {
            background: #4a3a8c;
            color: white;
          }
        }

        @media (max-width: 480px) {
          .diagnostic-header h2 {
            font-size: 2rem;
          }

          .diagnostic-card {
            flex: 0 0 250px;
            height: 320px;
          }

          .diagnostic-card-content h3 {
            font-size: 1.4rem;
          }

          .mobile-services-bottom {
            padding: 25px 15px 0;
          }
        }

        /* Desktop responsive */
        @media (min-width: 769px) and (max-width: 1200px) {
          .diagnostic-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .diagnostic-card.focused {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 25px 45px rgba(38, 34, 98, 0.15);
          }

          .services-pagination {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}