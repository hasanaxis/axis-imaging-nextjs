'use client'

import { useState, useEffect, useRef } from 'react'

export default function OurPromise() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePromise, setActivePromise] = useState(0)
  const sectionRef = useRef(null)

  const promises = [
    {
      id: 'accessible',
      title: 'Accessible & Convenient',
      description: 'We prioritize making radiology services easy to access – offering flexible hours, convenient location, and a patient-friendly approach to care. Quality healthcare should be within everyone&apos;s reach.',
      icon: '🏥',
      color: '#EC008C'
    },
    {
      id: 'expert-care',
      title: 'Expert Care with Heart',
      description: 'Our highly skilled team ensures every patient receives the highest standard of diagnostic imaging, delivered with the compassion and respect you deserve.',
      icon: '❤️',
      color: '#B41E8E'
    },
    {
      id: 'clear-communication',
      title: 'Clear Communication',
      description: 'We take time to explain procedures, results, and next steps in clear, understandable language. Your comfort comes from knowing exactly what to expect.',
      icon: '💬',
      color: '#662D91'
    },
    {
      id: 'fast-results',
      title: 'Fast, Reliable Results',
      description: 'Most results available within 24 hours, with urgent cases processed even faster. Your healthcare provider receives detailed, professional reports to guide your treatment.',
      icon: '⚡',
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
    if (isVisible) {
      const interval = setInterval(() => {
        setActivePromise((prev) => (prev + 1) % promises.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible, promises.length])

  return (
    <section className="our-promise" ref={sectionRef}>
      <div className="our-promise-container">
        {/* Background Elements */}
        <div className="promise-background"></div>
        <div className="wave-pattern"></div>

        <div className={`promise-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="section-badge">
            <span className="badge-text">Our Commitment to You</span>
          </div>

          <h2 className="promise-headline">
            Our <span className="highlight">Promise</span>
          </h2>

          <div className="promise-content">
            <div className="promise-grid">
              {promises.map((promise, index) => (
                <div
                  key={promise.id}
                  className={`promise-card ${activePromise === index ? 'active' : ''}`}
                  onClick={() => setActivePromise(index)}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div 
                    className="promise-icon"
                    style={{ backgroundColor: promise.color }}
                  >
                    <span className="icon-emoji">{promise.icon}</span>
                  </div>
                  <h3 className="promise-title">{promise.title}</h3>
                  <p className="promise-description">{promise.description}</p>
                  <div 
                    className="promise-indicator"
                    style={{ backgroundColor: activePromise === index ? promise.color : '#C4CED4' }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .our-promise {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
          overflow: hidden;
        }

        .our-promise-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .promise-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(236, 0, 140, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(102, 45, 145, 0.03) 0%, transparent 50%);
          z-index: 1;
        }

        .wave-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(236, 0, 140, 0.01) 10px,
              rgba(236, 0, 140, 0.01) 20px
            );
          z-index: 1;
        }

        .promise-section {
          text-align: center;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .promise-section.animate-in {
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

        .promise-headline {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.2;
          color: #662D91;
          margin-bottom: 50px;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #EC008C 0%, #B41E8E 50%, #662D91 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .promise-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .promise-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .promise-card:hover,
        .promise-card.active {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: rgba(236, 0, 140, 0.3);
        }

        .promise-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          transition: all 0.3s ease;
        }

        .icon-emoji {
          font-size: 2rem;
        }

        .promise-title {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 15px 0;
        }

        .promise-description {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #606A70;
          margin: 0 0 20px 0;
        }

        .promise-indicator {
          width: 40px;
          height: 4px;
          border-radius: 2px;
          margin: 0 auto;
          transition: all 0.3s ease;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .promise-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .promise-headline {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .our-promise {
            padding: 80px 0;
          }

          .our-promise-container {
            padding: 0 20px;
          }

          .promise-headline {
            font-size: 2.2rem;
          }

          .promise-card {
            padding: 30px 25px;
          }
        }

        @media (max-width: 480px) {
          .promise-headline {
            font-size: 1.9rem;
          }

          .promise-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  )
}