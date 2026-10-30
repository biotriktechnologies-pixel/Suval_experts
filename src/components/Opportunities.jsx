import React, { useState } from 'react';
import { Camera, Users, Award, FileCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import './Opportunities.css';

const Opportunities = () => {
  const [activeRole, setActiveRole] = useState('creator');

  return (
    <section id="opportunities" className="opportunities-section">
      <div className="opportunities-container">
        
        {/* Section Header */}
        <div className="opportunities-header">
          <span className="cat-tag">Career & Partnerships</span>
          <h2 className="section-title">Find Your Place in the Language Industry</h2>
          <p className="section-subtitle">
            Whether you are a creator looking to build brand visibility or a specialized linguist seeking global project allocations, explore tailored opportunities with Suval Experts.
          </p>
        </div>

        {/* --- PATHWAY 1: CREATOR & BRAND COLLABORATION (Placed First) --- */}
        <div className="opportunity-block highlight-creator-block">
          <div className="block-badge-wrapper">
            <span className="badge-featured">
              <Sparkles size={14} /> Priority Collaboration — 2026
            </span>
          </div>

          <div className="block-grid">
            <div className="block-content">
              <div className="icon-wrapper purple-bg">
                <Camera size={28} />
              </div>
              <h3 className="block-title">Content Creators & Brand Collaborators</h3>
              <p className="block-description">
                Partner with us on founder interviews, brand spotlight reels, service explainers, and co-marketing campaigns tailored specifically for the language ecosystem.
              </p>
              
              <ul className="perks-list">
                <li><CheckCircle2 size={18} className="check-icon purple-text" /> Direct reach to language industry decision-makers</li>
                <li><CheckCircle2 size={18} className="check-icon purple-text" /> Professional video production & media co-creation</li>
                <li><CheckCircle2 size={18} className="check-icon purple-text" /> Flexible sponsorship & promotional structures</li>
              </ul>

              <a href="#contact" className="btn btn-purple">
                Explore Creator Partnerships <ArrowRight size={18} />
              </a>
            </div>

            <div className="block-visual purple-card-bg">
              <div className="visual-stat">
                <span className="stat-number">181+</span>
                <span className="stat-label">Global Markets Reached</span>
              </div>
              <div className="visual-stat">
                <span className="stat-number">Media</span>
                <span className="stat-label">Spotlights & Executive Features</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- PATHWAY 2: FREELANCER & LANGUAGE SPECIALIST REGISTRATION --- */}
        <div className="opportunity-block freelancer-block">
          <div className="block-header-sub">
            <div className="icon-wrapper blue-bg">
              <Users size={28} />
            </div>
            <div>
              <h3 className="block-title">Freelancer & Talent Network</h3>
              <p className="block-description">
                Join our vetted roster of native linguists, translators, transcriptionists, and voice specialists for confidential client workflows.
              </p>
            </div>
          </div>

          {/* Role Filter Tabs */}
          <div className="role-tabs">
            <button 
              className={`tab-btn ${activeRole === 'creator' ? 'active-tab' : ''}`}
              onClick={() => setActiveRole('creator')}
            >
              Translators & Localizers
            </button>
            <button 
              className={`tab-btn ${activeRole === 'transcriber' ? 'active-tab' : ''}`}
              onClick={() => setActiveRole('transcriber')}
            >
              Transcriptionists & OCR Experts
            </button>
            <button 
              className={`tab-btn ${activeRole === 'voice' ? 'active-tab' : ''}`}
              onClick={() => setActiveRole('voice')}
            >
              Voice & Speech Artists
            </button>
          </div>

          <div className="tab-content-panel">
            <div className="panel-grid">
              <div className="panel-item">
                <FileCheck size={20} className="blue-text" />
                <span>Verified Native Credentials</span>
              </div>
              <div className="panel-item">
                <Award size={20} className="blue-text" />
                <span>Strict NDA & Privacy Compliance</span>
              </div>
              <div className="panel-item">
                <Users size={20} className="blue-text" />
                <span>Long-Term Project Allocations</span>
              </div>
            </div>

            <div className="freelancer-cta-wrapper">
              <a href="#contact" className="btn btn-blue">
                Register as a Language Specialist <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Opportunities;