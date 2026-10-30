import React from 'react';
import { Quote, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import './Testimonial.css';

const Testimonials = () => {
  const verifiedTestimonials = [
    {
      quote: "Suval Experts delivered our legal localization project across 12 target languages under an aggressive deadline. Their accuracy and strict data confidentiality protocols are second to none.",
      author: "Operations Director",
      company: "Global Legal & Translation Agency",
      languages: "12 Languages",
      rating: 5
    },
    {
      quote: "Their structured approach to handling high-volume transcription and OCR data cleanup saved our engineering team weeks of processing time. Exceptional linguistic fidelity.",
      author: "Head of AI Data Processing",
      company: "Enterprise Tech Solutions Provider",
      languages: "Multilingual Speech Data",
      rating: 5
    },
    {
      quote: "Working with Surbhi and her team for certified corporate document translations has been smooth and reliable. True professionals who understand enterprise compliance.",
      author: "Senior Compliance Manager",
      company: "International Logistics Firm",
      languages: "French, German, Spanish & Japanese",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="cat-tag">Client Feedback</span>
          <h2 className="testimonials-title">Trusted by Enterprise Leaders</h2>
          <p className="testimonials-subtitle">
            Authentic feedback from our core language-services and localization operations. Real results built on rigorous quality standards.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {verifiedTestimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-top-row">
                <div className="quote-icon-box">
                  <Quote size={22} />
                </div>
                <div className="star-rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-icon" fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-author-box">
                <div className="author-details">
                  <h4 className="author-name">{item.author}</h4>
                  <p className="author-company">{item.company}</p>
                </div>
                <div className="verification-badge">
                  <ShieldCheck size={14} />
                  <span>{item.languages}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2026 Creator Collaboration Notice Box */}
        <div className="creator-notice-box">
          <div className="notice-icon">
            <CheckCircle2 size={24} />
          </div>
          <div className="notice-content">
            <h4>Creator Collaborations & Campaign Metrics (Coming Soon in 2026)</h4>
            <p>
              As our inaugural founder spotlights, brand reels, and creator-led media campaigns go live, this section will be updated with genuine campaign examples and measurable reach metrics. We believe in 100% authentic reporting over simulated case studies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;