import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Briefcase, Calculator, ShieldCheck, FileText, Target } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="service-card">
    <div className="service-icon-wrapper">
      <Icon size={32} className="service-icon" />
    </div>
    <h3 className="service-card-title">{title}</h3>
    <p className="service-card-desc">{desc}</p>
  </div>
);

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    { icon: Briefcase, key: 'incorporation' },
    { icon: Calculator, key: 'taxation' },
    { icon: ShieldCheck, key: 'ip' },
    { icon: FileText, key: 'compliance' },
    { icon: Target, key: 'advisory' }
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={t(`services.${service.key}.title`)}
              desc={t(`services.${service.key}.desc`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
