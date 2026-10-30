import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Heder.css'; // Matches your current file name
import Logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* Logo */}
        <div className='Cilent_logo'>
          <img
          src = {Logo}
          />

        </div>
       

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/aboutus" className="nav-link">AboutUs</Link></li>
            <li><Link to="/LanguageService" className="nav-link">LanguageService</Link></li>
            <li><Link to="/Creator_colborator" className="nav-link">CreatorCollaborator</Link></li>
            <li><Link to="/opportunities" className="nav-link">Opportunities</Link></li>
            <li><Link to="/Testimonials" className="nav-link">Testimonials</Link></li>
            <li><Link to="/Contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="desktop-cta">
          <a href="#contact" className="cta-button">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn-wrapper">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-dropdown">
          <ul className="mobile-nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Home</Link></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">About Us</a></li>
            <li><a href="#translation-services" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Language Services</a></li>
            <li><a href="#creator-collaborations" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Creator Collaborations</a></li>
            <li><Link to="/opportunities" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Opportunities</Link></li>
            <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Testimonials</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;