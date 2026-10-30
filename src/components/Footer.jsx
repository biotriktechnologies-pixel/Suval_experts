import React from 'react';
import { Mail, Phone, Shield, FileText, Lock, BookOpen } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust path if your logo is saved elsewhere
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Top Row: Brand & Quick Links / Policies */}
        <div className="footer-grid">
          
          {/* Brand Info & Logo */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrapper">
              <img 
                src={logo} 
                alt="Suval Experts Logo" 
                className="footer-brand-logo"
                onError={(e) => {
                  // Fallback if image path needs adjustment
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="footer-fallback-text" style={{display: 'none'}}>Suval Experts</span>
            </div>
            <p className="footer-brand-tagline">
              Global Reach. Local Expertise. Connecting businesses and language professionals for multilingual and creator-led projects.
            </p>
          </div>

          {/* Policies & Compliance */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Policies</h4>
            <ul className="footer-links-list">
              <li>
                <Shield size={16} className="footer-icon" />
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <FileText size={16} className="footer-icon" />
                <a href="#cookie">Cookie Policy</a>
              </li>
              <li>
                <Lock size={16} className="footer-icon" />
                <a href="#terms">Terms and Conditions</a>
              </li>
              <li>
                <BookOpen size={16} className="footer-icon" />
                <a href="#conduct">Code of Conduct</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-stack">
              <div className="contact-item">
                <Phone size={16} className="footer-icon" />
                <div className="phones-list">
                  <a href="tel:+918360125306">+91 8360 125 306</a>
                  <a href="tel:+916284312425">+91 6284 312 425</a>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={16} className="footer-icon" />
                <div className="emails-list">
                  <a href="mailto:translation@suvalexperts.in">translation@suvalexperts.in</a>
                  <a href="mailto:suvalexperts@gmail.com">suvalexperts@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2023 Suval Experts • All Rights Reserved
          </p>
          <p className="developer-text">
            Design & Developed By <span className="dev-name">Biotrik Technologies</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;