import React, { useState } from 'react';
import { Globe, FileText, Mic, Database, Camera, Users, Briefcase, PlayCircle, Share2, CheckCircle2, ArrowRight, Calculator } from 'lucide-react';
import './Language_service.css';

const LanguageServices = () => {
  const [activeTab, setActiveTab] = useState('core');
  
  // Interactive Estimate State
  const [wordCount, setWordCount] = useState(1000);
  const [serviceType, setServiceType] = useState('translation');

  const calculateEstimate = () => {
    const rate = serviceType === 'translation' ? 0.10 : serviceType === 'transcription' ? 0.08 : 0.12;
    return (wordCount * rate).toFixed(2);
  };

  const coreServices = [
    {
      icon: <Globe size={28} />,
      title: "Document Translation & Localization",
      desc: "Native translation across 181+ languages with context preservation, cultural adaptation, and strict terminology consistency.",
      tags: ["181+ Languages", "Legal & Medical", "Certified"]
    },
    {
      icon: <FileText size={28} />,
      title: "Audio & Video Transcription",
      desc: "High-precision verbatim and clean-read transcriptions tailored for corporate recordings, legal proceedings, and media production.",
      tags: ["Timecoded", "Multi-speaker", "Confidential"]
    },
    {
      icon: <Mic size={28} />,
      title: "Voiceover & Speech Processing",
      desc: "Native voice artists and structured speech data collection for voicebots, AI training, dubbing, and audio localization.",
      tags: ["Native Talent", "Studio Quality", "Acoustic Datasets"]
    },
    {
      icon: <Database size={28} />,
      title: "Language Data & OCR Curation",
      desc: "Optical Character Recognition (OCR) cleanup, dataset indexing, and structured linguistic data prep for LLMs and enterprise ingestion.",
      tags: ["OCR Processing", "Data Cleansing", "LLM Datasets"]
    }
  ];

  const contentServices = [
    {
      icon: <Camera size={28} />,
      title: "Brand Spotlight Reels",
      desc: "Short-form video reels introducing global language agencies, localization platforms, and tech solutions to targeted decision-makers.",
      tags: ["Short-form Video", "High Engagement", "Targeted Reach"]
    },
    {
      icon: <Users size={28} />,
      title: "Founder & Executive Interviews",
      desc: "In-depth video profiles highlighting pioneers, founders, and subject matter experts across the international language ecosystem.",
      tags: ["Executive Profiling", "Brand Authority", "Thought Leadership"]
    },
    {
      icon: <Briefcase size={28} />,
      title: "Company Introductions & Explainers",
      desc: "Polished corporate walkthroughs and service explainers breaking down complex localization workflows into visual stories.",
      tags: ["Corporate Video", "Service Demos", "Visual Storytelling"]
    },
    {
      icon: <Share2 size={28} />,
      title: "Social Media Collaborations",
      desc: "Multi-channel co-marketing campaigns and creator partnerships designed to amplify brand presence in the translation sector.",
      tags: ["Co-marketing", "Multi-platform", "Industry Reach"]
    }
  ];

  return (
    <div className="services-page-container">
      
      {/* --- HERO SECTION --- */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="cat-tag tag-blue">Enterprise Solutions</span>
          <h1 className="services-hero-title">
            Comprehensive Language <span className="highlight-text-blue">Solutions & Media</span> Services
          </h1>
          <p className="services-hero-desc">
            Combining rigorous 181+ language translation infrastructure with innovative creator-led brand storytelling to power your global expansion.
          </p>
        </div>
      </section>

      {/* --- MAIN SERVICES CATEGORY TABS --- */}
      <section className="services-catalogue-section">
        <div className="services-container">
          
          <div className="catalogue-tab-bar">
            <button 
              className={`catalogue-tab ${activeTab === 'core' ? 'active-tab-blue' : ''}`}
              onClick={() => setActiveTab('core')}
            >
              <Globe size={20} /> Core Language Services
            </button>
            <button 
              className={`catalogue-tab ${activeTab === 'content' ? 'active-tab-purple' : ''}`}
              onClick={() => setActiveTab('content')}
            >
              <Camera size={20} /> Content & Brand Collaborations (2026)
            </button>
          </div>

          {/* Core Services Grid */}
          {activeTab === 'core' && (
            <div className="services-grid">
              {coreServices.map((srv, idx) => (
                <div key={idx} className="service-card blue-hover-card">
                  <div className="service-card-icon blue-icon-bg">{srv.icon}</div>
                  <h3 className="service-card-title">{srv.title}</h3>
                  <p className="service-card-desc">{srv.desc}</p>
                  <div className="service-tags-wrapper">
                    {srv.tags.map((t, tIdx) => (
                      <span key={tIdx} className="service-tag-chip">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Content & Collaboration Services Grid */}
          {activeTab === 'content' && (
            <div className="services-grid">
              {contentServices.map((srv, idx) => (
                <div key={idx} className="service-card purple-hover-card">
                  <div className="service-card-icon purple-icon-bg">{srv.icon}</div>
                  <h3 className="service-card-title">{srv.title}</h3>
                  <p className="service-card-desc">{srv.desc}</p>
                  <div className="service-tags-wrapper">
                    {srv.tags.map((t, tIdx) => (
                      <span key={tIdx} className="service-tag-chip purple-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* --- ESTIMATE CALCULATOR SECTION --- */}
      <section className="calculator-section">
        <div className="services-container">
          <div className="calculator-card">
            <div className="calculator-header">
              <div className="calc-icon-box"><Calculator size={28} /></div>
              <div>
                <h3 className="calc-title">Instant Service Estimator</h3>
                <p className="calc-sub">Get an immediate estimation for your language projects.</p>
              </div>
            </div>

            <div className="calculator-body">
              <div className="calc-control-group">
                <label>Service Type:</label>
                <select 
                  value={serviceType} 
                  onChange={(e) => setServiceType(e.target.value)}
                  className="calc-select"
                >
                  <option value="translation">Translation & Localization</option>
                  <option value="transcription">Transcription & OCR</option>
                  <option value="speech">Speech & Audio Processing</option>
                </select>
              </div>

              <div className="calc-control-group">
                <label>Word Count / Volume: ({wordCount} words)</label>
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500" 
                  value={wordCount}
                  onChange={(e) => setWordCount(Number(e.target.value))}
                  className="calc-range-slider"
                />
              </div>

              <div className="calc-result-box">
                <span className="result-label">Estimated Budget Preview</span>
                <span className="result-price">${calculateEstimate()} <span className="currency-code">USD</span></span>
                <span className="result-disclaimer">*Final quote subject to exact file format and complexity.</span>
              </div>
            </div>

            <div className="calc-footer">
              <a href="/contact" className="btn-calc-cta">
                Submit Project Brief <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LanguageServices;