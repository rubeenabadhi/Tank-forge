import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Phone, MessageSquare, MapPin, Droplet, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#07090D',
        borderTop: '1px solid rgba(148, 163, 184, 0.12)',
        padding: '60px 0 30px 0',
        color: '#94A3B8',
        fontSize: '0.9rem'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}
              >
                <Droplet size={18} color="#38BDF8" style={{ transform: 'rotate(180deg)' }} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                വാട്ടർ ടാങ്ക് വെൽഡിംഗ് സർവീസ്
              </span>
            </div>

            <p style={{ color: '#94A3B8', lineHeight: 1.6, marginBottom: '1rem' }}>
              500 ലിറ്റർ മുതൽ ഏത് കപ്പാസിറ്റിയുള്ള വാട്ടർ ടാങ്കിലെയും പൊട്ടലുകളും വിള്ളലുകളും നേരിട്ടെത്തി വെൽഡ് ചെയ്ത് വാട്ടർപ്രൂഫാക്കി നൽകുന്നു.
            </p>

            <div style={{ color: '#38BDF8', fontSize: '0.85rem', fontWeight: 600 }}>
              📍 നിങ്ങളുടെ ലൊക്കേഷൻ അയച്ചു തന്നാൽ നേരിട്ടെത്തും.
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                color: '#F1F5F9',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              പ്രധാന സേവനങ്ങൾ
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>500L മുതൽ ടാങ്ക് വിള്ളൽ മാറ്റൽ</li>
              <li>സിന്റക്സ് / പ്ലാസ്റ്റിക് ടാങ്ക് വെൽഡിംഗ്</li>
              <li>ഔട്ട്‌ലെറ്റ് പൈപ്പ് & വാൽവ് ലീക്ക് ഫിക്സിംഗ്</li>
              <li>സ്ഥലത്ത് നേരിട്ടെത്തിയുള്ള സർവീസ്</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4
              style={{
                fontSize: '1.05rem',
                color: '#F1F5F9',
                fontWeight: 700,
                marginBottom: '1rem'
              }}
            >
              നേരിട്ട് വിളിക്കാം
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#38BDF8" />
                <a href={BUSINESS_CONFIG.getPhoneLink()} style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem' }}>
                  {BUSINESS_CONFIG.displayPhone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={16} color="#25D366" />
                <a
                  href={BUSINESS_CONFIG.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', fontWeight: 600 }}
                >
                  WhatsApp: {BUSINESS_CONFIG.displayPhone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="#38BDF8" />
                <span>On-site Doorstep Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#64748B'
          }}
        >
          <div>
            © {new Date().getFullYear()} Water Tank Leak Repair & Welding Service. Phone: {BUSINESS_CONFIG.displayPhone}.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#CBD5E1',
              background: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              padding: '5px 10px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            <span>മുകളിലേക്ക്</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
