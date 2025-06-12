'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPatientMode, setIsPatientMode] = useState(true)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide header based on scroll direction
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && isHeaderVisible) {
          setIsHeaderVisible(false)
        } else if (currentScrollY < lastScrollY && !isHeaderVisible) {
          setIsHeaderVisible(true)
        }
      } else {
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isHeaderVisible])

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMode = () => {
    setIsPatientMode(!isPatientMode)
  }

  const handleBookAppointment = () => {
    // Scroll to booking section or open booking modal
    const bookingSection = document.querySelector('#booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'} ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="nav-container">
          <div className="logo">
            <Image
              src={isMobile ? "/assets/images/logos/Group 4.png" : "/assets/images/logos/AXIS_LOGO_COLOUR-CMYK.png"}
              alt="Axis Imaging"
              width={180}
              height={50}
              className="logo-img"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <ul className="nav-menu">
            <li><a href="/services" className="dropdown">Services</a></li>
            <li><a href="/about-us" className="dropdown">About Us</a></li>
            <li><a href="#patients" className="dropdown">Patient Information</a></li>
            <li><a href="#referrers">Referrer</a></li>
          </ul>

          <div className="nav-right">
            <div className="toggle-container">
              <span className={`toggle-label ${!isPatientMode ? 'active' : ''}`}>Referrer</span>
              <div 
                className={`toggle-switch ${!isPatientMode ? 'referrer-mode' : ''}`}
                onClick={toggleMode}
              >
                <div className="toggle-slider"></div>
              </div>
              <span className={`toggle-label ${isPatientMode ? 'active' : ''}`}>Patient</span>
            </div>
            <button className="book-appointment" onClick={handleBookAppointment}>
              Book Appointment
            </button>
          </div>

          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="/services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About Us</a></li>
            <li><a href="#patients" onClick={() => setIsMenuOpen(false)}>Patient Information</a></li>
            <li><a href="#referrers" onClick={() => setIsMenuOpen(false)}>Referrer</a></li>
          </ul>
          <div className="mobile-actions">
            <div className="mobile-toggle">
              <span className={`toggle-label ${!isPatientMode ? 'active' : ''}`}>Referrer</span>
              <div 
                className={`toggle-switch ${!isPatientMode ? 'referrer-mode' : ''}`}
                onClick={toggleMode}
              >
                <div className="toggle-slider"></div>
              </div>
              <span className={`toggle-label ${isPatientMode ? 'active' : ''}`}>Patient</span>
            </div>
            <button className="book-appointment" onClick={handleBookAppointment}>
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Header Styles - converted from your CSS */
        .header {
          background: white;
          padding: 15px 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100vw;
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transform: translateY(0);
          margin: 0;
        }

        .header.hidden {
          transform: translateY(-100%);
        }

        .header.visible {
          transform: translateY(0);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 50px;
          width: auto;
          object-fit: contain;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 45px;
          align-items: center;
        }

        .nav-menu li a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 16px;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-menu li a:hover {
          color: #ec008c;
        }

        .nav-menu li a.dropdown::after {
          content: "▼";
          font-size: 10px;
          margin-left: 8px;
          opacity: 0.6;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .toggle-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .toggle-label {
          font-size: 14px;
          font-weight: 500;
          color: #666;
          transition: color 0.3s ease;
        }

        .toggle-label.active {
          color: #ec008c;
          font-weight: 600;
        }

        .toggle-switch {
          position: relative;
          width: 50px;
          height: 26px;
          background: #ec008c;
          border-radius: 13px;
          cursor: pointer;
          transition: background 0.3s ease;
          border: none;
          outline: none;
        }

        .toggle-switch:hover {
          box-shadow: 0 0 10px rgba(236, 0, 140, 0.3);
        }

        .toggle-slider {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 22px;
          height: 22px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .toggle-switch.referrer-mode {
          background: #262262;
        }

        .toggle-switch.referrer-mode .toggle-slider {
          transform: translateX(-24px);
        }

        .book-appointment {
          background: #ec008c;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: "Inter", sans-serif;
          white-space: nowrap;
        }

        .book-appointment:hover {
          background: #b8006b;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(236, 0, 140, 0.3);
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          gap: 4px;
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-toggle span {
          width: 24px;
          height: 3px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .mobile-menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-menu {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          width: 100vw;
          background: white;
          padding: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          z-index: 999;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          margin: 0;
        }

        .mobile-menu.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-menu {
          list-style: none;
          margin: 0 0 20px 0;
          padding: 0;
        }

        .mobile-nav-menu li {
          margin-bottom: 15px;
        }

        .mobile-nav-menu a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 16px;
          display: block;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-nav-menu a:hover {
          color: #ec008c;
        }

        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #f0f0f0;
        }

        .mobile-toggle {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 768px) {
          .header {
            background: #262262;
            padding: 15px 0;
            left: 0;
            right: 0;
            top: 0;
            width: 100vw;
            margin: 0;
            position: fixed;
          }

          .nav-container {
            padding: 0 20px;
            max-width: 100%;
            width: 100%;
            margin: 0;
          }

          .logo {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }

          .logo-img {
            height: 60px;
            width: auto;
            object-fit: contain;
          }

          .nav-menu,
          .nav-right {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-menu {
            top: 75px;
            width: 100vw;
            left: 0;
            right: 0;
            margin: 0;
          }

          .mobile-menu-toggle span {
            background: white;
          }

          .header.hidden {
            transform: translateY(-100%);
          }

          .header.visible {
            transform: translateY(0);
          }

          .header.mobile-menu-open {
            transform: translateY(0) !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-toggle {
            display: none;
          }

          .nav-menu,
          .nav-right {
            display: flex;
          }

          .mobile-menu {
            display: none;
          }
        }

        @media (min-width: 769px) {
          .header.scrolled {
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
          }
        }

        @media (max-width: 768px) {
          .header.scrolled {
            background: rgba(38, 34, 98, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 20px rgba(38, 34, 98, 0.4);
          }
        }
      `}</style>
    </>
  )
}