'use client'

import { useState } from 'react'

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openItems, setOpenItems] = useState({})

  const faqData = {
    general: [
      {
        id: 'gen1',
        question: 'Do I need a referral for medical imaging?',
        answer: 'Yes, you need a referral from your doctor for most medical imaging services. This ensures that the right scan is performed and helps with Medicare billing.'
      },
      {
        id: 'gen2',
        question: 'How long will my appointment take?',
        answer: 'Appointment times vary depending on the type of scan. Most X-rays take 10-15 minutes, ultrasounds 15-45 minutes, and CT scans 15-30 minutes. We\'ll give you an estimated time when you book.'
      },
      {
        id: 'gen3',
        question: 'When will I get my results?',
        answer: 'Most results are available within 24 hours. Your doctor will receive the report directly and discuss the results with you during your next appointment.'
      },
      {
        id: 'gen4',
        question: 'Is parking available?',
        answer: 'Yes, we have free parking available right at our front door for your convenience.'
      }
    ],
    'ct-scan': [
      {
        id: 'ct1',
        question: 'What is a CT scan?',
        answer: 'A CT (Computed Tomography) scan uses X-rays and computer technology to create detailed cross-sectional images of your body. It\'s a quick, painless procedure that provides detailed information about bones, organs, and soft tissues.'
      },
      {
        id: 'ct2',
        question: 'Do I need to prepare for a CT scan?',
        answer: 'Preparation depends on the type of CT scan. Some require fasting for 4-6 hours before the scan, while others may require contrast material. We\'ll provide specific instructions when you book your appointment.'
      },
      {
        id: 'ct3',
        question: 'Is a CT scan safe?',
        answer: 'CT scans are generally very safe. While they do use radiation, the amount is kept as low as possible while still providing clear images. The benefits of an accurate diagnosis typically far outweigh the small radiation risk.'
      }
    ],
    'x-ray': [
      {
        id: 'xray1',
        question: 'What should I wear for an X-ray?',
        answer: 'Wear comfortable, loose-fitting clothing without metal buttons, zippers, or jewelry in the area being examined. You may be asked to change into a hospital gown depending on the body part being X-rayed.'
      },
      {
        id: 'xray2',
        question: 'How long does an X-ray take?',
        answer: 'Most X-rays take only 10-15 minutes. The actual imaging takes just a few seconds, but positioning and preparation may take a few minutes longer.'
      },
      {
        id: 'xray3',
        question: 'Is it safe to have multiple X-rays?',
        answer: 'X-rays use very small amounts of radiation. Having several X-rays over time is generally safe, and your doctor will only order them when the medical benefit outweighs any small risk.'
      }
    ],
    ultrasound: [
      {
        id: 'us1',
        question: 'What is an ultrasound?',
        answer: 'Ultrasound uses high-frequency sound waves to create images of structures inside your body. It\'s completely safe, painless, and doesn\'t use radiation, making it ideal for monitoring pregnancies and examining soft tissues.'
      },
      {
        id: 'us2',
        question: 'Do I need to prepare for an ultrasound?',
        answer: 'Preparation varies by exam type. Abdominal ultrasounds may require fasting for 6-8 hours. Pelvic ultrasounds may require a full bladder. We\'ll provide specific instructions when you book.'
      },
      {
        id: 'us3',
        question: 'Will the ultrasound be uncomfortable?',
        answer: 'Ultrasounds are generally comfortable. You\'ll feel gentle pressure from the transducer (probe) as it moves across your skin with gel. Some exams may require slight pressure to get better images.'
      }
    ],
    dexa: [
      {
        id: 'dexa1',
        question: 'What is a DEXA scan?',
        answer: 'DEXA (Dual-energy X-ray Absorptiometry) is a specialized scan that measures bone density. It\'s the gold standard for diagnosing osteoporosis and assessing fracture risk.'
      },
      {
        id: 'dexa2',
        question: 'How should I prepare for a DEXA scan?',
        answer: 'Avoid taking calcium supplements for 24 hours before your scan. Wear comfortable clothing without metal buttons, zippers, or jewelry. You may be asked to change into a hospital gown.'
      },
      {
        id: 'dexa3',
        question: 'How long does a DEXA scan take?',
        answer: 'A DEXA scan typically takes 10-20 minutes. You\'ll lie still on a padded table while the scanner passes over your body. It\'s completely painless and uses very low levels of radiation.'
      }
    ]
  }

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'ct-scan', label: 'CT-Scan' },
    { id: 'x-ray', label: 'X-Ray' },
    { id: 'ultrasound', label: 'Ultrasound' },
    { id: 'dexa', label: 'Dexa' }
  ]

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setOpenItems({}) // Close all items when switching categories
  }

  const handleItemToggle = (itemId) => {
    setOpenItems(prev => {
      // Close all other items and toggle this one
      const newOpenItems = {}
      if (!prev[itemId]) {
        newOpenItems[itemId] = true
      }
      return newOpenItems
    })
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        {/* Category Tabs */}
        <div className="faq-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`faq-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="faq-content">
          <div className="faq-category active">
            {faqData[activeCategory]?.map((item) => (
              <div
                key={item.id}
                className={`faq-item ${openItems[item.id] ? 'active open' : ''}`}
              >
                <button
                  className={`faq-question ${openItems[item.id] ? 'active' : ''}`}
                  onClick={() => handleItemToggle(item.id)}
                >
                  {item.question}
                  <span className="faq-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M6 9l6 6 6-6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer ${openItems[item.id] ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* FAQ Section */
        .faq-section {
          background: #f8f9fa;
          padding: 100px 0;
          position: relative;
        }

        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .faq-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .faq-header h2 {
          font-size: 3rem;
          font-weight: 600;
          color: #262262;
          margin-bottom: 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
          text-align: left;
        }

        /* Category Tabs */
        .faq-tabs {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .faq-tab {
          background: transparent;
          border: 1px solid var(--axis-charcoal);
          padding: 15px 30px;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--axis-charcoal);
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 12px;
          outline: none !important;
          box-shadow: none !important;
        }

        .faq-tab:focus,
        .faq-tab:focus-visible,
        .faq-tab:active {
          outline: none !important;
          box-shadow: none !important;
          border: 1px solid var(--axis-charcoal);
        }

        .faq-tab.active {
          background: #262262;
          color: white;
          border-color: #262262;
          outline: none !important;
          box-shadow: none !important;
        }

        .faq-tab.active:focus,
        .faq-tab.active:focus-visible {
          outline: none !important;
          box-shadow: none !important;
          border-color: #262262;
        }

        .faq-tab:hover:not(.active) {
          background: #f5f5f5;
        }

        /* FAQ Content */
        .faq-content {
          max-width: 100%;
        }

        .faq-category.active {
          display: block;
        }

        .faq-item {
          border-bottom: 1px solid #ddd;
          margin-bottom: 0;
        }

        .faq-question {
          background: transparent;
          border: none;
          width: 100%;
          padding: 30px 0;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.1rem;
          font-weight: 400;
          color: #333;
          transition: all 0.3s ease;
          outline: none !important;
          box-shadow: none !important;
        }

        .faq-question:focus,
        .faq-question:focus-visible,
        .faq-question:active {
          outline: none !important;
          box-shadow: none !important;
        }

        .faq-question:hover {
          color: #262262;
        }

        .faq-question.active {
          color: #262262;
        }

        .faq-icon {
          width: 24px;
          height: 24px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          margin-left: 20px;
        }

        .faq-question.active .faq-icon {
          transform: rotate(180deg);
        }

        /* Updated FAQ Answer Styles */
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          padding: 0;
          color: #666;
          line-height: 1.6;
        }

        .faq-answer.open {
          max-height: 300px;
          padding-bottom: 30px;
        }

        .faq-answer p {
          font-size: 1rem;
          margin: 0;
          padding: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .faq-section {
            padding: 80px 0;
          }

          .faq-container {
            padding: 0 20px;
          }

          .faq-header h2 {
            font-size: 2.5rem;
          }

          .faq-tabs {
            flex-wrap: wrap;
            gap: 8px;
          }

          .faq-tab {
            padding: 12px 20px;
            font-size: 0.9rem;
            border-radius: 8px;
            border: 1px solid var(--axis-charcoal);
            outline: none !important;
            box-shadow: none !important;
          }

          .faq-tab:focus,
          .faq-tab:focus-visible {
            outline: none !important;
            box-shadow: none !important;
          }

          .faq-question {
            font-size: 1rem;
            padding: 25px 0;
          }
        }

        @media (max-width: 480px) {
          .faq-header h2 {
            font-size: 2rem;
          }

          .faq-tab {
            padding: 10px 16px;
            font-size: 0.85rem;
            outline: none !important;
            box-shadow: none !important;
          }

          .faq-question {
            font-size: 0.95rem;
            padding: 20px 0;
          }
        }
      `}</style>
    </section>
  )
}