import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="industrial-grid"
      style={{
        padding: '80px 0',
        position: 'relative',
        background: 'linear-gradient(180deg, #090C10 0%, #0F172A 50%, #090C10 100%)',
        borderTop: '1px solid rgba(148, 163, 184, 0.15)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 28, 42, 0.9) 0%, rgba(11, 15, 22, 0.96) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px -5px rgba(56, 189, 248, 0.2)',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto'
          }}
        >
          {/* Badge */}
          <div className="section-badge" style={{ display: 'inline-flex' }}>
            <span className="section-badge-dot" />
            <span>നേരിട്ടുള്ള സർവീസ് ലഭിക്കാൻ</span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '1rem',
              lineHeight: 1.15
            }}
          >
            Need a Custom Water Tank / <span className="text-gradient">ടാങ്ക് റിപ്പയർ ചെയ്യണോ?</span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#CBD5E1',
              maxWidth: '680px',
              margin: '0 auto 2.2rem auto',
              lineHeight: 1.6
            }}
          >
            Tell us what you need. We'll discuss the size, material and requirements with you. ടാങ്കിന്റെ ഫോട്ടോയും ലൊക്കേഷനും വാട്സാപ്പിൽ അയച്ചു തരൂ, നേരിട്ടെത്തി ഒപ്പിച്ചു തരാം.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            {/* Call Now */}
            <a
              href={BUSINESS_CONFIG.getPhoneLink()}
              className="btn-primary btn-shimmer"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}
            >
              <Phone size={20} />
              <span>വിളിക്കൂ: {BUSINESS_CONFIG.displayPhone}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={BUSINESS_CONFIG.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem'
              }}
            >
              <MessageSquare size={20} />
              <span>വാട്സാപ്പ് ചെയ്യൂ</span>
            </a>

            {/* Share Location */}
            <a
              href={BUSINESS_CONFIG.getLocationShareLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '1rem 1.8rem',
                fontSize: '1rem',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38BDF8'
              }}
            >
              <MapPin size={18} color="#38BDF8" />
              <span>ലൊക്കേഷൻ അയക്കൂ</span>
            </a>
          </div>

          {/* Contact Details Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(148, 163, 184, 0.15)'
            }}
          >
            {/* Phone Card */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone size={20} color="#38BDF8" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  Phone / ഫോൺ
                </div>
                <div style={{ fontSize: '1.05rem', color: '#F1F5F9', fontWeight: 700 }}>
                  {BUSINESS_CONFIG.displayPhone}
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(37, 211, 102, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MessageSquare size={20} color="#25D366" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  WhatsApp
                </div>
                <div style={{ fontSize: '1.05rem', color: '#F1F5F9', fontWeight: 700 }}>
                  {BUSINESS_CONFIG.displayPhone}
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                borderRadius: '12px',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MapPin size={20} color="#38BDF8" />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 600 }}>
                  Service Area
                </div>
                <div style={{ fontSize: '0.88rem', color: '#F1F5F9', fontWeight: 600 }}>
                  Doorstep Service Across Location
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
