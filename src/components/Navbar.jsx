import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <img src="/logo.png" alt="BIZMUNIM Logo" className="brand-logo" />
          <span className="logo-text">BIZMUNIM</span>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>{t('nav.home')}</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>{t('nav.services')}</a>
          <a href="#stats" onClick={(e) => { e.preventDefault(); scrollToSection('stats'); }}>{t('nav.stats')}</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t('nav.contact')}</a>
          
          <button className="lang-btn" onClick={toggleLanguage}>
            <Globe size={18} />
            {language.toUpperCase()}
          </button>
        </div>

        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
