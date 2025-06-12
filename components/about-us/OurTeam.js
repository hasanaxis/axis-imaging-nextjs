'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function OurTeam() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState(0)
  const sectionRef = useRef(null)

  const teamMembers = [
    {
      id: 'sarah-mitchell',
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Radiologist',
      credentials: 'MBBS, FRANZCR',
      specialization: 'Musculoskeletal & Women\'s Imaging',
      experience: '15+ Years',
      education: 'Royal Melbourne Hospital Fellowship',
      description: 'Dr. Mitchell brings over 15 years of international experience in diagnostic radiology, specializing in musculoskeletal and women\'s imaging. A Royal Melbourne Hospital fellowship graduate, she\'s passionate about using advanced imaging to improve patient outcomes while ensuring every patient feels heard and cared for.',
      image: '/assets/images/team/dr-sarah-mitchell.jpg',
      color: '#EC008C'
    },
    {
      id: 'james-chen',
      name: 'Dr. James Chen',
      role: 'Senior Radiologist',
      credentials: 'MBBS, FRANZCR',
      specialization: 'Abdominal & Cardiac Imaging',
      experience: '12+ Years',
      education: 'Monash University Graduate',
      description: 'With 12 years of expertise in abdominal and cardiac imaging, Dr. Chen combines technical excellence with compassionate care. This Monash University graduate is known for his meticulous attention to detail and commitment to clear, understandable communication with patients.',
      image: '/assets/images/team/dr-james-chen.jpg',
      color: '#B41E8E'
    },
    {
      id: 'lisa-thompson',
      name: 'Lisa Thompson',
      role: 'Chief Technologist',
      credentials: 'Advanced Diploma in Medical Radiations',
      specialization: 'All Imaging Modalities',
      experience: '10+ Years',
      education: 'RMIT University',
      description: 'Lisa leads our skilled technologist team with over 10 years of experience across all imaging modalities. Her focus on patient comfort and technical excellence ensures you feel at ease while receiving optimal results for every scan.',
      image: '/assets/images/team/lisa-thompson.jpg',
      color: '#662D91'
    },
    {
      id: 'maria-rodriguez',
      name: 'Maria Rodriguez',
      role: 'Practice Manager',
      credentials: 'Bachelor of Health Administration',
      specialization: 'Healthcare Operations',
      experience: '8+ Years',
      education: 'La Trobe University',
      description: 'Maria oversees our daily operations with warmth and efficiency, ensuring smooth patient experiences from booking to results. With 8 years in healthcare administration, she embodies our commitment to making medical imaging as stress-free as possible.',
      image: '/assets/images/team/maria-rodriguez.jpg',
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

  return (
    <section className="our-team" ref={sectionRef}>
      <div className="our-team-container">
        {/* Background Elements */}
        <div className="background-gradient"></div>
        <div className="pattern-overlay"></div>

        {/* Header */}
        <div className={`team-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="section-badge">
            <span className="badge-text">Meet Our Expert Team</span>
          </div>

          <h2 className="team-headline">
            Your <span className="highlight">Healthcare Heroes</span>
          </h2>

          <p className="team-subtitle">
            Our experienced radiologists, technologists, and support staff are dedicated to providing you with exceptional care from our family to yours.
          </p>
        </div>

        {/* Team Content */}
        <div className={`team-content ${isVisible ? 'animate-in' : ''}`}>
          {/* Team Grid */}
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`team-card ${selectedMember === index ? 'active' : ''}`}
                onClick={() => setSelectedMember(index)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    quality={95}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    className="member-image"
                  />
                  <div 
                    className="image-overlay"
                    style={{ background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)` }}
                  ></div>
                </div>

                <div className="card-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role" style={{ color: member.color }}>
                    {member.role}
                  </p>
                  <p className="member-credentials">{member.credentials}</p>
                  
                  <div className="member-stats">
                    <div className="stat">
                      <span className="stat-value">{member.experience}</span>
                      <span className="stat-label">Experience</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                      <span className="stat-value">Expert</span>
                      <span className="stat-label">Level</span>
                    </div>
                  </div>
                </div>

                <div className="card-hover-indicator">
                  <div 
                    className="indicator-dot"
                    style={{ backgroundColor: member.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Member Detail */}
          <div className="member-detail">
            <div className="detail-card">
              <div className="detail-header">
                <div className="detail-image">
                  <Image
                    src={teamMembers[selectedMember].image}
                    alt={teamMembers[selectedMember].name}
                    width={120}
                    height={120}
                    quality={95}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    className="detail-member-image"
                  />
                </div>
                <div className="detail-info">
                  <h3 className="detail-name">{teamMembers[selectedMember].name}</h3>
                  <p 
                    className="detail-role"
                    style={{ color: teamMembers[selectedMember].color }}
                  >
                    {teamMembers[selectedMember].role}
                  </p>
                  <p className="detail-credentials">{teamMembers[selectedMember].credentials}</p>
                </div>
              </div>

              <div className="detail-body">
                <div className="expertise-grid">
                  <div className="expertise-item">
                    <h4>Specialization</h4>
                    <p>{teamMembers[selectedMember].specialization}</p>
                  </div>
                  <div className="expertise-item">
                    <h4>Education</h4>
                    <p>{teamMembers[selectedMember].education}</p>
                  </div>
                </div>

                <div className="member-description">
                  <p>{teamMembers[selectedMember].description}</p>
                </div>

                <div className="member-highlights">
                  <div className="highlight-item">
                    <div 
                      className="highlight-icon"
                      style={{ backgroundColor: teamMembers[selectedMember].color }}
                    >
                      <span>★</span>
                    </div>
                    <span>Expert in {teamMembers[selectedMember].specialization}</span>
                  </div>
                  <div className="highlight-item">
                    <div 
                      className="highlight-icon"
                      style={{ backgroundColor: teamMembers[selectedMember].color }}
                    >
                      <span>♥</span>
                    </div>
                    <span>Passionate about patient care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .our-team {
          position: relative;
          padding: 120px 0;
          background: #ffffff;
          overflow: hidden;
        }

        .our-team-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .background-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            ellipse at 70% 30%,
            rgba(236, 0, 140, 0.03) 0%,
            rgba(180, 30, 142, 0.02) 40%,
            transparent 70%
          );
          z-index: 1;
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 75%, rgba(102, 45, 145, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(236, 0, 140, 0.02) 0%, transparent 50%);
          z-index: 1;
        }

        .team-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-header.animate-in {
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

        .team-headline {
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

        .team-subtitle {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          line-height: 1.6;
          color: #606A70;
          font-weight: 400;
          max-width: 700px;
          margin: 0 auto;
        }

        .team-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .team-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .team-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          opacity: 0;
          transform: translateY(30px);
          animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .team-card:hover,
        .team-card.active {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: rgba(236, 0, 140, 0.3);
        }

        .card-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .member-image {
          transition: transform 0.4s ease;
        }

        .team-card:hover .member-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-card:hover .image-overlay,
        .team-card.active .image-overlay {
          opacity: 1;
        }

        .card-content {
          padding: 25px;
          position: relative;
        }

        .member-name {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 8px 0;
        }

        .member-role {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          font-weight: 500;
          margin: 0 0 5px 0;
        }

        .member-credentials {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          color: #606A70;
          margin: 0 0 20px 0;
        }

        .member-stats {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #EC008C;
          line-height: 1;
        }

        .stat-label {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.8rem;
          color: #606A70;
        }

        .stat-divider {
          width: 1px;
          height: 30px;
          background: linear-gradient(to bottom, transparent, #C4CED4, transparent);
        }

        .card-hover-indicator {
          position: absolute;
          top: 15px;
          right: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-card:hover .card-hover-indicator,
        .team-card.active .card-hover-indicator {
          opacity: 1;
        }

        .indicator-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .member-detail {
          position: sticky;
          top: 100px;
        }

        .detail-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(236, 0, 140, 0.1);
        }

        .detail-header {
          display: flex;
          gap: 25px;
          margin-bottom: 30px;
          align-items: center;
        }

        .detail-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 3px solid rgba(236, 0, 140, 0.2);
        }

        .detail-info {
          flex: 1;
        }

        .detail-name {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 8px 0;
        }

        .detail-role {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          margin: 0 0 5px 0;
        }

        .detail-credentials {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          color: #606A70;
          margin: 0;
        }

        .detail-body {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .expertise-item h4 {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #662D91;
          margin: 0 0 8px 0;
        }

        .expertise-item p {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.95rem;
          color: #606A70;
          margin: 0;
          line-height: 1.5;
        }

        .member-description p {
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          line-height: 1.7;
          color: #606A70;
          margin: 0;
        }

        .member-highlights {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: "Deuterium Variable", -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.95rem;
          color: #606A70;
        }

        .highlight-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .team-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .member-detail {
            position: relative;
            top: auto;
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .team-headline {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .our-team {
            padding: 80px 0;
          }

          .our-team-container {
            padding: 0 20px;
          }

          .team-header {
            margin-bottom: 50px;
          }

          .team-headline {
            font-size: 2.2rem;
          }

          .team-subtitle {
            font-size: 1.1rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .detail-card {
            padding: 30px 25px;
          }

          .detail-header {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .team-headline {
            font-size: 1.9rem;
          }

          .card-content {
            padding: 20px;
          }

          .detail-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  )
}