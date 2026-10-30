import React, { useEffect, useRef, useState } from 'react';
import { Globe, Mic, Database, FileText, Video, Users, Camera, Briefcase, Share2, PlayCircle, ArrowRight, Sparkles, Building2, UserCheck, ShieldCheck, Star, Quote, ExternalLink } from 'lucide-react';
import './Home.css';
import Client from '../../assets/clients.jpg'
const Home = () => {
  const canvasRef = useRef(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  // Animated Blue Globe / Network Canvas Visual
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const numParticles = 45;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${1 - dist / 130})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#2563eb';
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const embeddedTestimonials = [
    {
      quote: "Suval Experts delivered our legal localization project across 12 target languages under an aggressive deadline. Their accuracy and strict data confidentiality protocols are second to none.",
      author: "Operations Director",
      company: "Global Legal & Translation Agency",
      languages: "12 Languages"
    },
    {
      quote: "Their structured approach to handling high-volume transcription and OCR data cleanup saved our engineering team weeks of processing time. Exceptional linguistic fidelity.",
      author: "Head of AI Data Processing",
      company: "Enterprise Tech Solutions Provider",
      languages: "Multilingual Speech Data"
    },
    {
      quote: "Working with Surbhi and her team for certified corporate document translations has been smooth and reliable. True professionals who understand enterprise compliance.",
      author: "Senior Compliance Manager",
      company: "International Logistics Firm",
      languages: "French, German & Spanish"
    }
  ];

  return (
    <div className="homepage-container">
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <canvas ref={canvasRef} className="hero-canvas" />

        <div className="hero-content">
          <span className="hero-badge">Global Network</span>
          
          <h1 className="hero-title">
            Global Reach. <span className="highlight-text">Local Expertise.</span>
          </h1>
          <h2 className="hero-title-two">“Where the Language Industry Meets Content Creation.”</h2>

          <p className="hero-description">
            From multilingual solutions to creator-led industry storytelling, 
            Suval Experts connects language businesses, professionals, and 
            opportunities across the globe.
          </p>

          <div className="hero-cta-group">
            <a href="#translation-services" className="btn btn-primary">
              Explore Language Services
            </a>
            <a href="#creator-collaborations" className="btn btn-secondary">
              Explore Creator Collaborations
            </a>
          </div>
        </div>
      </section>

      {/* --- IMMEDIATE HIGHLIGHT CARDS SECTION --- */}
      <section className="highlights-section">
        <div className="section-container">
          <div className="highlights-grid">
            
            <div className="feature-card_card-blue">
              <div className="card-badge">Core Operations</div>
              <h2 className="card-title">Our Expertise</h2>
              <p className="card-text">
                Established translation, localization, and multilingual solutions 
                across <strong>181 languages (& counting)</strong>.
              </p>
              <a href="#translation-services" className="card-link">
                View Language Capabilities &rarr;
              </a>
            </div>

            <div className="feature-card card-purple">
              <div className="card-badge badge-new">New Direction — 2026</div>
              <h2 className="card-title">Our Next Chapter — 2026</h2>
              <p className="card-text">
                Dedicated language-industry content, brand storytelling, and 
                promotional collaborations.
              </p>
              <a href="#creator-collaborations" className="card-link">
                Discover Collaborations &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>
        <section id="founder-section" className="founder-showcase-section">
        <div className="section-container">
          <div className="founder-grid">
            
            {/* Left Column: Portrait Showcase */}
            <div className="founder-image-wrapper">
              <div className="founder-card-glow"></div>
              <img 
                src= {Client}
                alt="Surbhi Arora - Founder of Suval Experts" 
                className="founder-portrait"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="founder-portrait-fallback" style={{display: 'none'}}>
                <Users size={64} className="text-blue-600 mb-2" />
                <span className="text-sm font-semibold text-gray-600">Surbhi Arora Portrait</span>
              </div>
              <div className="founder-badge-floating">
                <Sparkles size={16} className="text-amber-500" />
                <span>Founder & Visionary</span>
              </div>
            </div>

            {/* Right Column: Content & Collaboration Value Proposition */}
            <div className="founder-content-wrapper">
              <span className="cat-tag tag-purple">Leadership & Vision</span>
              <h2 className="founder-heading">
                Meet the Founder. <br />
                <span className="highlight-text-purple">Discover the Voice Behind the Vision.</span>
              </h2>
              
              <p className="founder-bio">
                With years of experience building connections across the language industry, <strong>Surbhi Arora</strong> is bringing a new dimension to Suval Experts — using content, conversations, and creative storytelling to help language businesses become more visible.
              </p>

              <div className="founder-offerings-stack">
                {/* For Language Companies */}
                <div className="founder-target-card">
                  <div className="target-icon-box blue-icon">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="target-title">For Language Companies</h3>
                    <p className="target-desc">Get your services, expertise, and brand story in front of an industry-relevant audience.</p>
                  </div>
                </div>

                {/* For Language Professionals */}
                <div className="founder-target-card">
                  <div className="target-icon-box purple-icon">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h3 className="target-title">For Language Professionals</h3>
                    <p className="target-desc">Discover conversations, insights, and opportunities across the language ecosystem.</p>
                  </div>
                </div>
              </div>

              <div className="founder-cta-action">
                <a href="/contact" className="btn btn-founder-cta">
                  Collaborate With Surbhi <ArrowRight size={18} />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- DUAL COMPANY PATHWAYS SECTION --- */}
      <section className="company-pathways-section">
        <div className="section-container">
          <div className="pathways-header">
            <span className="cat-tag">For Businesses & Brands</span>
            <h2 className="category-title">How Are You Looking to Collaborate?</h2>
            <p className="category-subtitle">
              Choose your pathway below to submit a tailored brief suited to your specific objectives and pricing model.
            </p>
          </div>

          <div className="pathways-grid">
            {/* Pathway A: Language Solutions */}
            <div className="pathway-card pathway-blue">
              <div className="pathway-icon-wrapper blue-icon">
                <Globe size={32} />
              </div>
              <span className="pathway-tag">Path A</span>
              <h3 className="pathway-title">Looking for Language Solutions?</h3>
              <p className="pathway-desc">
                Translation, localization, multilingual data, linguistic support, transcription, and speech solutions handled by verified global professionals.
              </p>
              <div className="pathway-footer">
                <ul className="pathway-features-list">
                  <li>✔ Enterprise-grade confidentiality</li>
                  <li>✔ 181+ regional languages</li>
                  <li>✔ Rigorous QA workflows</li>
                </ul>
                <a href="#translation-services" className="btn-pathway btn-pathway-blue">
                  Submit Translation Brief <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Pathway B: Industry Visibility */}
            <div className="pathway-card pathway-purple">
              <div className="pathway-icon-wrapper purple-icon">
                <Camera size={32} />
              </div>
              <span className="pathway-tag tag-purple">Path B — New 2026</span>
              <h3 className="pathway-title">Looking for Industry Visibility?</h3>
              <p className="pathway-desc">
                Creator-led content, brand showcases, executive interviews, promotional video campaigns, and social media media placement collaborations.
              </p>
              <div className="pathway-footer">
                <ul className="pathway-features-list">
                  <li>✔ Spotlight reels & executive interviews</li>
                  <li>✔ Targeted language-industry audience</li>
                  <li>✔ Custom promotional campaigns</li>
                </ul>
                <a href="#creator-collaborations" className="btn-pathway btn-pathway-purple">
                  Submit Content Promotion Brief <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESTRUCTURED SERVICES & OFFERINGS SECTION --- */}
      <section className="services-main-section">
        <div className="section-container">
          
          {/* CATEGORY 1: Core Translation & Language Services */}
          <div id="translation-services" className="service-category-block">
            <div className="category-header">
              <span className="cat-tag">Enterprise Solutions</span>
              <h2 className="category-title">Core Language & Translation Services</h2>
              <p className="category-subtitle">
                Rigorous translation and data processing workflows for confidential enterprise records and international projects.
              </p>
            </div>

            <div className="offerings-grid">
              <div className="offering-card">
                <div className="offering-icon blue-icon"><Globe size={28} /></div>
                <h3>Translation & Localization</h3>
                <p>Accurate, context-aware translation across 181+ regional and international languages handled by native professionals.</p>
              </div>

              <div className="offering-card">
                <div className="offering-icon blue-icon"><FileText size={28} /></div>
                <h3>Transcription</h3>
                <p>High-precision audio and video transcription services optimized for legal, corporate, and media records.</p>
              </div>

              <div className="offering-card">
                <div className="offering-icon blue-icon"><Mic size={28} /></div>
                <h3>Voice & Speech</h3>
                <p>Professional voiceover, speech data collection, and audio localization tailored for diverse audience segments.</p>
              </div>

              <div className="offering-card">
                <div className="offering-icon blue-icon"><Database size={28} /></div>
                <h3>Language Data</h3>
                <p>Structured dataset curation, optical character recognition (OCR) data cleanup, and multi-lingual dataset indexing.</p>
              </div>
            </div>
          </div>

          {/* CATEGORY 2: Language Industry Content & Brand Collaborations — New in 2026 */}
          <div id="creator-collaborations" className="service-category-block category-highlighted">
            <div className="category-header">
              <span className="cat-tag tag-purple">New in 2026</span>
              <h2 className="category-title">Language Industry Content & Brand Collaborations</h2>
              <p className="category-subtitle">
                Engaging digital narratives, media spotlights, and creator-led marketing designed specifically for the global language sector.
              </p>
            </div>

            <div className="offerings-grid">
              <div className="offering-card card-purple-accent">
                <div className="offering-icon purple-icon"><Camera size={28} /></div>
                <h3>Brand Spotlight Reels</h3>
                <p>Dynamic, short-form video reels highlighting language service providers, translation agencies, and global tools.</p>
              </div>

              <div className="offering-card card-purple-accent">
                <div className="offering-icon purple-icon"><Users size={28} /></div>
                <h3>Founder Interviews</h3>
                <p>In-depth video conversations and profile features showcasing pioneers, executives, and innovators in the language space.</p>
              </div>

              <div className="offering-card card-purple-accent">
                <div className="offering-icon purple-icon"><Briefcase size={28} /></div>
                <h3>Company Introductions</h3>
                <p>Polished corporate overview videos introducing localization firms and translation startups to global enterprise clients.</p>
              </div>

              <div className="offering-card card-purple-accent">
                <div className="offering-icon purple-icon"><PlayCircle size={28} /></div>
                <h3>Service Explainers</h3>
                <p>Clear, engaging visual walkthroughs breaking down complex translation technology, MT post-editing, and workflows.</p>
              </div>

              <div className="offering-card card-purple-accent">
                <div className="offering-icon purple-icon"><FileText size={28} /></div>
                <h3>Industry Education</h3>
                <p>Informative content modules, educational tutorials, and linguistic resource guides tailored for rising professionals.</p>
              </div>

              <div className="offering-card card-purple-accent">
                <div className="offering-icon purple-icon"><Share2 size={28} /></div>
                <h3>Social Media Collaborations</h3>
                <p>Strategic co-marketing, influencer partnerships, and multi-channel campaign executions to amplify brand reach.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- NEW CREDIBILITY & TRUST SECTION (PLACED BEFORE FOUNDER STORY) --- */}
      <section className="credibility-trust-section">
        <div className="section-container">
          <div className="credibility-main-header">
            <span className="cat-tag">Trust & Proven Track Record</span>
            <h2 className="category-title">Don't Just Take Our Word for It.</h2>
            <p className="category-subtitle">
              Discover the people we've worked with, the experiences they've shared, and the credentials behind Suval Experts.
            </p>
          </div>

          {/* Dual Pillar Highlights: Credentials & Real Experiences */}
          <div className="credibility-pillars-grid">
            
            {/* Pillar 1: Our Credentials */}
            <div className="pillar-card">
              <div className="pillar-icon-box blue-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="pillar-title">Our Credentials</h3>
              <p className="pillar-desc">
                Explore our company registration and incorporation details, verifying our formal legal compliance and secure operational governance.
              </p>
              <button 
                className="pillar-link-action"
                onClick={() => setIsCertModalOpen(true)}
              >
                View Certificate &rarr;
              </button>
            </div>

            {/* Pillar 2: Real Experiences */}
            <div className="pillar-card">
              <div className="pillar-icon-box purple-icon">
                <Star size={28} />
              </div>
              <h3 className="pillar-title">Real Experiences</h3>
              <p className="pillar-desc">
                Read verified feedback from enterprise clients and professional linguists who've partnered with us on complex localization assignments.
              </p>
              <a href="/testimonials" className="pillar-link-action">
                Read Testimonials &rarr;
              </a>
            </div>

          </div>

          {/* Embedded Testimonials Directly on Homepage */}
          <div className="embedded-testimonials-wrapper">
            <h3 className="embedded-heading">What Our Partners Are Saying</h3>
            <div className="embedded-grid">
              {embeddedTestimonials.map((t, idx) => (
                <div key={idx} className="embedded-card">
                  <div className="embedded-quote-icon"><Quote size={20} /></div>
                  <p className="embedded-text">"{t.quote}"</p>
                  <div className="embedded-author-info">
                    <strong>{t.author}</strong>
                    <span>{t.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- MEET THE FOUNDER SECTION --- */}
    

      {/* Responsive Certificate Lightbox Modal */}
      {isCertModalOpen && (
        <div className="cert-modal-overlay" onClick={() => setIsCertModalOpen(false)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4>Certificate of Incorporation</h4>
              <button className="modal-close-btn" onClick={() => setIsCertModalOpen(false)}>&times;</button>
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

export default Home;