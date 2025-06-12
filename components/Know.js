'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Know() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const knowItems = [
    {
      id: 'reports',
      icon: '/assets/images/icons/circular-arrow.png',
      alt: 'pink circular arrow going clockwise',
      title: '24 Hour Reports',
      description: 'Your doctor receives detailed results within 24 hours of your scan'
    },
    {
      id: 'billing',
      icon: '/assets/images/icons/dollar-circle.png',
      alt: 'pink dollar sign in a circle',
      title: 'Bulk Billing',
      description: 'Most scans are bulk billed - no out-of-pocket cost for most patients'
    },
    {
      id: 'parking',
      icon: '/assets/images/icons/parking.png',
      alt: 'pink P in a square box',
      title: 'Easy Parking',
      description: 'Free parking available right at our front door for your convenience'
    }
  ]

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index)
            setVisibleCards(prev => [...new Set([...prev, cardIndex])])
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const cards = sectionRef.current?.querySelectorAll('.know-card')
    cards?.forEach((card, index) => {
      card.dataset.index = index
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="know-section" ref={sectionRef}>
      <div className="know-container">
        <div className="know-header">
          <h2>What You Need to Know</h2>
          <p>
            Expert scans, fast reporting, and care that feels human. At Axis
            Imaging, we combine medical precision with a deep commitment to your
            comfort and clarity.
          </p>
        </div>

        <div className="know-cards">
          {knowItems.map((item, index) => (
            <div
              key={item.id}
              className={`know-card fade-in ${visibleCards.includes(index) ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="know-card-icon">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={80}
                  height={80}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* What You Need to Know Section */
        .know-section {
          background: #f8f9fa;
          padding: 100px 0;
          position: relative;
        }

        .know-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .know-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .know-header h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #662d91;
          margin-bottom: 30px;
          letter-spacing: -0.02em;
          line-height: 1.2;
          text-align: center;
        }

        .know-header p {
          font-size: 1.3rem;
          color: #5a5a5a;
          font-weight: 400;
          max-width: 800px;
          line-height: 1.6;
          text-align: center;
          margin: 0 auto;
        }

        .know-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          align-items: stretch;
        }

        .know-card {
          background: white;
          border: 2px solid #eb008b;
          border-radius: 20px;
          padding: 50px 40px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .know-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(235, 0, 139, 0.15);
          border-color: #662d91;
        }

        .know-card-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .know-card:hover .know-card-icon {
          transform: scale(1.1);
        }

        .know-card h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2c2c2c;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .know-card p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #5a5a5a;
        }

        /* Animation */
        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .know-card {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .know-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .know-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .know-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        /* Mobile Design - Matching Screenshot Exactly */
        @media (max-width: 768px) {
          .know-section {
            padding: 60px 0;
            background: #f5f5f5;
          }

          .know-container {
            padding: 0 20px;
            max-width: 100%;
          }

          .know-header {
            margin-bottom: 40px;
            text-align: center;
          }

          .know-header h2 {
            font-size: 2.2rem;
            color: #4a3a8c;
            margin-bottom: 20px;
            font-weight: 700;
            line-height: 1.2;
            font-family: "Deuterium Variable", var(--primary-font);
          }

          .know-header p {
            font-size: 1rem;
            color: #5a5a5a;
            line-height: 1.5;
            margin: 0 auto;
            max-width: 320px;
            font-family: "Deuterium Variable", var(--primary-font);
          }

          .know-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 340px;
            margin: 0 auto;
          }

          .know-card {
            background: white;
            border: 2px solid #eb008b;
            border-radius: 20px;
            padding: 25px 20px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(235, 0, 140, 0.08);
            transition: all 0.3s ease;
            position: relative;
            min-height: auto;
          }

          .know-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(235, 0, 140, 0.12);
          }

          .know-card-icon {
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .know-card-icon img {
            width: 50px !important;
            height: 50px !important;
          }

          .know-card h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: #2c2c2c;
            margin-bottom: 12px;
            line-height: 1.3;
            font-family: "Deuterium Variable", var(--primary-font);
          }

          .know-card p {
            font-size: 0.9rem;
            line-height: 1.4;
            color: #666;
            margin: 0;
            font-family: "Deuterium Variable", var(--primary-font);
          }
        }

        @media (max-width: 480px) {
          .know-section {
            padding: 50px 0;
          }

          .know-container {
            padding: 0 15px;
          }

          .know-header h2 {
            font-size: 1.9rem;
            line-height: 1.1;
          }

          .know-header p {
            font-size: 0.95rem;
            max-width: 280px;
          }

          .know-cards {
            max-width: 300px;
            gap: 18px;
          }

          .know-card {
            padding: 22px 18px;
            border-radius: 18px;
          }

          .know-card-icon img {
            width: 45px !important;
            height: 45px !important;
          }

          .know-card h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }

          .know-card p {
            font-size: 0.85rem;
            line-height: 1.3;
          }
        }

        /* Responsive Design for larger tablets */
        @media (max-width: 968px) and (min-width: 769px) {
          .know-cards {
            grid-template-columns: 1fr;
            gap: 30px;
            max-width: 500px;
            margin: 0 auto;
          }

          .know-header h2 {
            font-size: 2.5rem;
          }

          .know-header p {
            font-size: 1.2rem;
          }

          .know-card {
            padding: 40px 30px;
          }
        }
      `}</style>
    </section>
  )
}