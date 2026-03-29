import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-content animate-fade-in">
        <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-description">{t('hero.description')}</p>
        
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollToServices()}>{t('hero.cta_secondary')}</button>
          <a href="#contact" className="btn btn-secondary">{t('hero.cta_primary')}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
