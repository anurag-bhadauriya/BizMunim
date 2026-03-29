import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import './Stats.css';

const StatCard = ({ value, label }) => (
  <div className="stat-card">
    <div className="stat-value">{value}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const Stats = () => {
  const { t } = useTranslation();

  return (
    <section id="stats" className="section stats-section">
      <div className="container">
        <div className="stats-header">
          <h2 className="stats-title">{t('stats.title')}</h2>
          <p className="stats-subtitle">{t('stats.subtitle')}</p>
        </div>

        <div className="stats-grid">
          <StatCard value="8+" label={t('stats.years')} />
          <StatCard value="500+" label={t('stats.clients')} />
          <StatCard value="15+" label={t('stats.states')} />
          <StatCard value="99.9%" label={t('stats.success')} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
