import React from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { Phone, MapPin } from 'lucide-react';

export default function MobileQuickBar() {
  return (
    <div className="mobile-sticky-bar">
      <a
        href={BUSINESS_CONFIG.getPhoneLink()}
        className="btn-primary"
        style={{
          flex: 1,
          padding: '0.85rem 0.5rem',
          fontSize: '0.92rem',
          justifyContent: 'center',
          borderRadius: '8px'
        }}
      >
        <Phone size={17} />
        <span>വിളിക്കൂ</span>
      </a>

      <a
        href={BUSINESS_CONFIG.getLocationShareLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
        style={{
          flex: 1.3,
          padding: '0.85rem 0.5rem',
          fontSize: '0.92rem',
          justifyContent: 'center',
          borderRadius: '8px'
        }}
      >
        <MapPin size={17} />
        <span>ലൊക്കേഷൻ അയക്കൂ</span>
      </a>
    </div>
  );
}
