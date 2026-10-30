import React, { useState } from 'react';
import { Globe, Award, Calendar, CheckCircle2, FileText, ExternalLink, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const timelinePhases = [
    {
      period: '2021',
      badge: 'Origins',
      title: 'The Foundation',
      description: "Origins of Suval's language-services journey, laying the framework for global linguistic operations and quality standards.",
      highlights: ['Initial language network formulation', 'Process standardization & QA protocols']
    },
    {
      period: '2022–2025',
      badge: 'Operations & Scaling',
      title: 'Incorporation & Growth',
      description: 'Official company incorporation, execution of enterprise linguistic operations, building deep industry relationships, and expanding field experience.',
      highlights: ['Formal corporate incorporation', 'Scaling translation across 181+ languages', 'Securing enterprise client relationships']
    },
    {
      period: '2026 Onwards',
      badge: 'New Strategic Era',
      title: 'Content & Brand Collaborations',
      description: 'Expansion into dedicated language-industry content creation, founder interviews, spotlight reels, and strategic brand collaborations.',
      highlights: ['Launch of creator-led storytelling', 'Executive spotlights & brand showcases', 'Media platform expansion']
    }
  ];

  const trustedClients = [
    'Shaip',
    'Sri Sai Translations',
    'Transtech IT Solutions',
    'Magnon Sancus'
  ];

  return (
    <div className="about-page-container">
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="cat-tag tag-blue">Company Story</span>
          <h1 className="about-hero-title">
            Bridging Global Communication Through <span className="highlight-text-blue">Linguistic Excellence</span> & Storytelling
          </h1>
          <p className="about-hero-desc">
            From enterprise translation workflows to creator-led media collaborations, Suval Experts powers cross-cultural reach across the global language ecosystem.
          </p>

          {/* Credibility Counter Banner */}
          <div className="credibility-banner">
            <div className="credibility-icon">
              <Globe size={32} />
            </div>
            <div>
              <div className="credibility-number">181+ Languages</div>
              <div className="credibility-sub">& Counting Across Global Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THREE-PHASE TIMELINE SECTION --- */}
      <section className="timeline-section">
        <div className="about-section-container">
          <div className="about-section-header">
            <span className="cat-tag">Our Journey</span>
            <h2 className="about-section-title">Evolution & Milestones</h2>
            <p className="about-section-subtitle">
              How Suval Experts transitioned from core localization infrastructure into a modern media & language solutions power.
            </p>
          </div>

          <div className="timeline-grid">
            {timelinePhases.map((phase, index) => (
              <div 
                key={index} 
                className={`timeline-card ${index === 2 ? 'timeline-card-highlight' : ''}`}
              >
                <div className="timeline-year-wrapper">
                  <span className="timeline-year">{phase.period}</span>
                  <span className={`timeline-badge ${index === 2 ? 'badge-purple' : ''}`}>
                    {phase.badge}
                  </span>
                </div>

                <h3 className="timeline-card-title">{phase.title}</h3>
                <p className="timeline-card-desc">{phase.description}</p>

                <ul className="timeline-check-list">
                  {phase.highlights.map((item, hIdx) => (
                    <li key={hIdx}>
                      <CheckCircle2 size={16} className={index === 2 ? 'text-purple' : 'text-blue'} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT CREDIBILITY & COLLABORATIONS SECTION --- */}
      <section className="clients-credibility-section">
        <div className="about-section-container">
          <div className="about-section-header">
            <span className="cat-tag tag-purple">Proven Track Record</span>
            <h2 className="about-section-title">Trusted Across the Ecosystem</h2>
            <p className="about-section-subtitle">
              Delivering precision and strategic support for leading brands, technology providers, and translation agencies.
            </p>
          </div>

          <div className="clients-logo-grid">
            {trustedClients.map((client, idx) => (
              <div key={idx} className="client-badge-card">
                <Building2 size={22} className="client-icon" />
                <span className="client-name">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INCORPORATION CERTIFICATE SECTION --- */}
      <section className="incorporation-section">
        <div className="about-section-container">
          <div className="incorporation-box">
            <div className="incorporation-info">
              <div className="cert-icon-wrapper">
                <ShieldCheck size={36} />
              </div>
              <div>
                <span className="cert-tag">Verified Compliance</span>
                <h3 className="incorporation-title">Official Corporate Incorporation</h3>
                <p className="incorporation-desc">
                  Suval Experts is an officially registered entity operating under strict corporate and legal standards for client data privacy, contract execution, and project governance.
                </p>
              </div>
            </div>

            <div className="incorporation-action">
              <button 
                className="btn-cert-view"
                onClick={() => setIsModalOpen(true)}
              >
                <FileText size={18} /> View Incorporation Certificate <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Certificate Lightbox Modal */}
      {isModalOpen && (
        <div className="cert-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>Certificate of Incorporation</h4>
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <img 
                src="/incorporation-certificate.jpg" 
                alt="Suval Experts Incorporation Certificate" 
                className="cert-responsive-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="cert-fallback-placeholder" style={{display: 'none'}}>
                <ShieldCheck size={48} className="text-blue-600 mb-2" />
                <p className="font-semibold text-slate-800">Incorporation Certificate Document</p>
                <span className="text-xs text-slate-500 mt-1">Official Document On File</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;