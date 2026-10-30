import React from 'react';
import { Camera, Users, Video, FileText, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, PlayCircle } from 'lucide-react';
import './Creator_colborator.css';

const CreatorCollaborations = () => {
  const workflowSteps = [
    {
      step: '01',
      title: 'Submit Collaboration Enquiry',
      desc: 'Fill out our dedicated brand brief detailing your company objectives, target audience, and preferred campaign style.'
    },
    {
      step: '02',
      title: 'Discuss Content Concept',
      desc: 'Collaborate directly with Surbhi Arora and our production team to align on storytelling hooks, messaging, and visual format.'
    },
    {
      step: '03',
      title: 'Finalize Deliverables',
      desc: 'Lock in timelines, script outlines, platform placements, and commercial agreements with transparent pricing models.'
    },
    {
      step: '04',
      title: 'Create and Approve Content',
      desc: 'Professional production of spotlight reels, executive interviews, or service explainers with review and approval checkpoints.'
    },
    {
      step: '05',
      title: 'Project Completion',
      desc: 'Final master files delivered in high-res formats optimized for LinkedIn, YouTube, and multi-channel distribution.'
    },
    {
      step: '06',
      title: 'Publish and Review Performance',
      desc: 'Content goes live to an industry-relevant audience, followed by transparent reach engagement reporting.'
    }
  ];

  const contentOfferings = [
    {
      icon: <Camera size={26} />,
      title: "Brand Spotlight Reels",
      desc: "Dynamic short-form video reels highlighting language service providers, translation agencies, and translation software."
    },
    {
      icon: <Users size={26} />,
      title: "Founder & Executive Interviews",
      desc: "In-depth video conversations profiling industry pioneers, CEOs, and innovators in the language space."
    },
    {
      icon: <Video size={26} />,
      title: "Company Introductions",
      desc: "Polished corporate overview videos introducing localization firms and translation startups to global enterprise buyers."
    },
    {
      icon: <PlayCircle size={26} />,
      title: "Service Explainers",
      desc: "Engaging visual breakdowns simplifying complex translation technology, MT post-editing, and localization workflows."
    },
    {
      icon: <FileText size={26} />,
      title: "Industry Education",
      desc: "Informative content modules and educational resource guides tailored for rising professionals in the language sector."
    },
    {
      icon: <Sparkles size={26} />,
      title: "Social Media Collaborations",
      desc: "Strategic co-marketing and multi-channel campaign executions designed to amplify brand visibility."
    }
  ];

  return (
    <div className="creator-page-container">
      
      {/* --- HERO SECTION --- */}
      <section className="creator-hero">
        <div className="creator-hero-content">
          <span className="cat-tag tag-purple">New in 2026 — Strategic Media</span>
          <h1 className="creator-hero-title">
            Creator-Led Industry <span className="highlight-text-purple">Storytelling & Visibility</span>
          </h1>
          <p className="creator-hero-desc">
            Moving beyond informal social media presence. Suval Experts provides a structured, professional media framework to showcase language brands, founders, and innovations to a targeted global audience.
          </p>
          <div className="creator-hero-cta">
            <a href="/contact" className="btn-creator-primary">
              Submit Collaboration Enquiry <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTENT OFFERINGS GRID --- */}
      <section className="creator-offerings-section">
        <div className="creator-container">
          <div className="section-header">
            <span className="cat-tag">Portfolio of Offerings</span>
            <h2 className="section-title">Designed for Language Industry Buyers</h2>
            <p className="section-subtitle">
              Unlike generic marketing agencies, our content is crafted by industry insiders who deeply understand the localization and translation ecosystem.
            </p>
          </div>

          <div className="offerings-grid">
            {contentOfferings.map((item, index) => (
              <div key={index} className="offering-card">
                <div className="offering-icon-box">{item.icon}</div>
                <h3 className="offering-title">{item.title}</h3>
                <p className="offering-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STRUCTURED 6-STEP WORKFLOW TIMELINE --- */}
      <section className="workflow-section">
        <div className="creator-container">
          <div className="section-header">
            <span className="cat-tag tag-purple">Professional Execution</span>
            <h2 className="section-title">Our Collaboration Workflow</h2>
            <p className="section-subtitle">
              A transparent, step-by-step engagement process ensuring your brand narrative is crafted with absolute precision.
            </p>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((s, idx) => (
              <div key={idx} className="workflow-step-card">
                <div className="step-number-badge">{s.step}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA BANNER --- */}
      <section className="creator-cta-section">
        <div className="creator-container">
          <div className="cta-banner-box">
            <div className="cta-banner-info">
              <h3>Ready to Elevate Your Brand Visibility in 2026?</h3>
              <p>Connect with Surbhi Arora to discuss customized spotlight reels, executive interviews, or brand campaigns.</p>
            </div>
            <a href="/contact" className="btn-banner-action">
              Start Your Collaboration Brief <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CreatorCollaborations;