import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import {
  Layers,
  Flame,
  Hammer,
  Wrench,
  ShieldCheck,
  Compass,
  ArrowUpRight
} from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Flame: Flame,
  Hammer: Hammer,
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Compass: Compass
};

function ServiceCard({ service }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = iconMap[service.icon] || Wrench;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const waInquiryUrl = BUSINESS_CONFIG.getWhatsAppLink(
    `ഹലോ, "${service.title}" സംബന്ധിച്ച് അന്വേഷിക്കാനാണ്. എന്റെ ടാങ്കിന്റെ ഫോട്ടോയും ലൊക്കേഷനും അയക്കുന്നു.`
  );

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        background: isHovered
          ? 'linear-gradient(180deg, rgba(26, 35, 51, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)'
          : 'linear-gradient(180deg, rgba(18, 24, 35, 0.75) 0%, rgba(13, 19, 29, 0.85) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: isHovered ? '1px solid rgba(56, 189, 248, 0.5)' : '1px solid rgba(148, 163, 184, 0.16)',
        borderRadius: '14px',
        padding: '1.75rem 1.5rem',
        perspective: '1000px',
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-6px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        boxShadow: isHovered
          ? '0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 0 20px -4px rgba(56, 189, 248, 0.25)'
          : '0 8px 24px -10px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <div>
        {/* Top Icon & Tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem'
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: isHovered
                ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.3) 0%, rgba(15, 23, 42, 0.8) 100%)'
                : 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.6) 100%)',
              border: isHovered ? '1px solid rgba(56, 189, 248, 0.6)' : '1px solid rgba(148, 163, 184, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isHovered ? '0 0 15px rgba(56, 189, 248, 0.3)' : 'none'
            }}
          >
            <IconComponent
              size={24}
              color={isHovered ? '#38BDF8' : '#CBD5E1'}
            />
          </div>

          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              color: '#38BDF8',
              border: '1px solid rgba(56, 189, 248, 0.3)'
            }}
          >
            {service.highlight}
          </span>
        </div>

        {/* Malayalam Title */}
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#F8FAFC',
            marginBottom: '0.35rem',
            lineHeight: 1.3
          }}
        >
          {service.title}
        </h3>

        {/* English Subtitle */}
        <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, marginBottom: '0.85rem' }}>
          {service.englishTitle}
        </div>

        {/* Short Description */}
        <p
          style={{
            fontSize: '0.9rem',
            color: '#94A3B8',
            lineHeight: 1.6,
            marginBottom: '1rem'
          }}
        >
          {service.shortDescription}
        </p>
      </div>

      {/* Action: WhatsApp for this service */}
      <a
        href={waInquiryUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.85rem',
          borderTop: '1px solid rgba(148, 163, 184, 0.1)',
          color: '#38BDF8',
          fontSize: '0.85rem',
          fontWeight: 600,
          textDecoration: 'none'
        }}
      >
        <span>ഇതിനായി ഫോട്ടോ അയക്കൂ</span>
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="industrial-grid"
      style={{
        padding: '80px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            <span>ഞങ്ങളുടെ പ്രധാന സർവീസുകൾ</span>
          </div>

          <h2 className="section-title">
            വാട്ടർ ടാങ്ക് ഒട്ടിച്ചു നൽകുന്ന <span className="text-gradient">പ്രധാന ജോലികൾ</span>
          </h2>

          <p className="section-subtitle">
            1000 ലിറ്റർ മുതൽ ഏത് കപ്പാസിറ്റിയുള്ള ടാങ്കിലെയും ലീക്കുകൾ ശാശ്വതമായി അടച്ചു ബലപ്പെടുത്തി നൽകുന്നു.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}
        >
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
