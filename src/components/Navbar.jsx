import React, { useState, useEffect } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Phone, MessageSquare, Menu, X, Droplet, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(9, 12, 16, 0.96)'
          : 'linear-gradient(180deg, rgba(9, 12, 16, 0.92) 0%, rgba(9, 12, 16, 0) 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(148, 163, 184, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '74px' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0284C7 0%, #0F172A 100%)',
              border: '1px solid rgba(56, 189, 248, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.25)'
            }}
          >
            <Droplet size={20} color="#38BDF8" style={{ transform: 'rotate(180deg)' }} />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
                lineHeight: 1.1
              }}
            >
              Water Tank Welding Service
            </div>
            <div
              style={{
                fontSize: '0.72rem',
                color: '#38BDF8',
                letterSpacing: '0.04em',
                fontWeight: 600
              }}
            >
              1000L മുതൽ ഏത് ടാങ്കും ഒട്ടിച്ചു കൊടുക്കും
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#CBD5E1',
                transition: 'color 0.2s ease',
                padding: '6px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call & WhatsApp Quick Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href={BUSINESS_CONFIG.getPhoneLink()}
            className="btn-primary"
            style={{
              padding: '0.6rem 1.15rem',
              fontSize: '0.95rem'
            }}
          >
            <Phone size={16} />
            <span>{BUSINESS_CONFIG.displayPhone}</span>
          </a>

          <a
            href={BUSINESS_CONFIG.getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              padding: '0.6rem 1.1rem',
              fontSize: '0.95rem',
              display: 'none'
            }}
            id="nav-wa-btn"
          >
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid var(--border-steel)',
              borderRadius: '8px',
              padding: '8px',
              color: '#FFFFFF'
            }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(11, 14, 20, 0.98)',
            borderBottom: '1px solid var(--border-steel)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#E2E8F0',
                padding: '8px 0',
                borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
              }}
            >
              {link.name}
            </a>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.5rem' }}>
            <a
              href={BUSINESS_CONFIG.getPhoneLink()}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={16} />
              <span>വിളിക്കൂ: {BUSINESS_CONFIG.displayPhone}</span>
            </a>

            <a
              href={BUSINESS_CONFIG.getLocationShareLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MapPin size={16} />
              <span>ലൊക്കേഷൻ വാട്സാപ്പിൽ അയക്കൂ</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          #nav-wa-btn { display: inline-flex !important; }
        }
        @media (max-width: 899px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
