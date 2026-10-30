import React, { useState } from 'react';
import { Mail, Phone, Globe, Send, CheckCircle, AlertCircle, Briefcase, Camera, Users } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [enquiryType, setEnquiryType] = useState('language');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.target);
    // Replace with your free access key from web3forms.com (takes 10 seconds to get)
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setLoading(false);
        e.target.reset();
      } else {
        setError(true);
        setLoading(false);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <section className="contact-page-section">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <span className="cat-tag">Get in Touch</span>
          <h1 className="contact-title">Let’s Start a Conversation</h1>
          <p className="contact-subtitle">
            Whether you need enterprise language solutions, creator-led brand collaborations, or want to join our vetted talent network, select your pathway below.
          </p>
        </div>

        <div className="contact-grid-layout">
          
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p className="info-desc">Reach out directly via phone or email, or submit your brief through the form.</p>

            <div className="info-items-stack">
              <div className="info-item">
                <div className="info-icon-box"><Phone size={20} /></div>
                <div>
                  <span className="info-label">Phone Numbers</span>
                  <div className="info-values">
                    <a href="tel:+918360125306">+91 8360 125 306</a>
                    <a href="tel:+916284312425">+91 6284 312 425</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box"><Mail size={20} /></div>
                <div>
                  <span className="info-label">Business Emails</span>
                  <div className="info-values">
                    <a href="mailto:translation@suvalexperts.in">translation@suvalexperts.in</a>
                    <a href="mailto:suvalexperts@gmail.com">suvalexperts@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box"><Globe size={20} /></div>
                <div>
                  <span className="info-label">Global Operations</span>
                  <span className="info-text">Serving clients across 181+ languages worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Brief Submission Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message-box">
                <CheckCircle size={48} className="success-icon" />
                <h3>Brief Successfully Submitted!</h3>
                <p>Thank you for reaching out. Your submission has been securely delivered directly to our team inbox. We will get back to you shortly.</p>
                <button 
                  className="btn-reset-form"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                
                {/* Enquiry Type Selector Tabs */}
                <div className="form-group">
                  <label className="form-main-label">Select Enquiry Type:</label>
                  <div className="enquiry-type-tabs">
                    <button
                      type="button"
                      className={`type-tab ${enquiryType === 'language' ? 'active-tab' : ''}`}
                      onClick={() => setEnquiryType('language')}
                    >
                      <Briefcase size={16} /> Language Services
                    </button>
                    <button
                      type="button"
                      className={`type-tab ${enquiryType === 'creator' ? 'active-tab' : ''}`}
                      onClick={() => setEnquiryType('creator')}
                    >
                      <Camera size={16} /> Creator / Brand Collaboration
                    </button>
                    <button
                      type="button"
                      className={`type-tab ${enquiryType === 'freelancer' ? 'active-tab' : ''}`}
                      onClick={() => setEnquiryType('freelancer')}
                    >
                      <Users size={16} /> Freelancer Registration
                    </button>
                  </div>
                  {/* Hidden input to pass enquiry type to email */}
                  <input type="hidden" name="Enquiry_Type" value={enquiryType} />
                </div>

                {/* Common Contact Fields */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name / Organization *</label>
                    <input type="text" name="name" required placeholder="Enter your name or company" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" required placeholder="you@company.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Contact Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX" />
                </div>

                {/* CONDITIONAL FIELDS FOR CREATOR COLLABORATION */}
                {enquiryType === 'creator' && (
                  <div className="conditional-block">
                    <h4 className="conditional-title">Creator & Campaign Specifications</h4>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label>Brand / Company Website *</label>
                        <input type="url" name="brand_website" placeholder="https://yourbrand.com" required={enquiryType === 'creator'} />
                      </div>
                      <div className="form-group">
                        <label>Social Media Profile / Handle *</label>
                        <input type="text" name="social_profile" placeholder="LinkedIn / YouTube / Instagram link" required={enquiryType === 'creator'} />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Desired Content Type *</label>
                      <select name="desired_content" className="form-select">
                        <option value="Brand Spotlight Reels">Brand Spotlight Reels</option>
                        <option value="Founder Interviews">Founder Interviews</option>
                        <option value="Company Introductions">Company Introductions</option>
                        <option value="Service Explainers">Service Explainers</option>
                        <option value="Industry Education">Industry Education</option>
                        <option value="Social Media Collaboration">Social Media Collaboration</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Campaign Goals & Overview *</label>
                      <textarea name="campaign_goals" rows="4" placeholder="Describe your promotional goals, target audience, and timeline..." required={enquiryType === 'creator'}></textarea>
                    </div>
                  </div>
                )}

                {/* CONDITIONAL FIELDS FOR LANGUAGE SERVICES */}
                {enquiryType === 'language' && (
                  <div className="conditional-block">
                    <div className="form-group">
                      <label>Target Languages / Scope *</label>
                      <input type="text" name="language_scope" placeholder="e.g., English to French & Spanish, 50,000 words" />
                    </div>
                    <div className="form-group">
                      <label>Project Details & Brief *</label>
                      <textarea name="language_brief" rows="4" placeholder="Tell us about your translation, transcription, or localization requirements..." required={enquiryType === 'language'}></textarea>
                    </div>
                  </div>
                )}

                {/* CONDITIONAL FIELDS FOR FREELANCER REGISTRATION */}
                {enquiryType === 'freelancer' && (
                  <div className="conditional-block">
                    <div className="form-group">
                      <label>Primary Specialization & Native Language *</label>
                      <input type="text" name="freelancer_specialization" placeholder="e.g., Japanese Translator, Voiceover Artist, Transcriptionist" required={enquiryType === 'freelancer'} />
                    </div>
                    <div className="form-group">
                      <label>Years of Experience & Portfolio/Resume Link *</label>
                      <textarea name="freelancer_background" rows="3" placeholder="Provide a brief summary of your credentials and link to your professional profile..." required={enquiryType === 'freelancer'}></textarea>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="form-error-alert">
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again or email us directly.</span>
                  </div>
                )}

                <button type="submit" className="btn-submit-enquiry" disabled={loading}>
                  {loading ? 'Sending Brief...' : <>Submit Enquiry <Send size={18} /></>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;