import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { X, MessageSquare, Phone } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [tankCapacity, setTankCapacity] = useState('500 – 1000 Liters');
  const [tankType, setTankType] = useState('സിന്റക്സ് / പ്ലാസ്റ്റിക് ടാങ്ക്');
  const [issueType, setIssueType] = useState('പൊട്ടൽ / വിള്ളൽ (Crack/Break)');
  const [locationNote, setLocationNote] = useState('');

  if (!isOpen) return null;

  const capacities = [
    '500 Liters',
    '1,000 Liters',
    '1,500 – 2,000 Liters',
    '3,000 – 5,000+ Liters'
  ];

  const types = [
    'സിന്റക്സ് / പ്ലാസ്റ്റിക് ടാങ്ക്',
    'മെറ്റൽ / കസ്റ്റം ടാങ്ക്',
    'പൈപ്പ് / ഔട്ട്‌ലെറ്റ് നോസിൽ'
  ];

  const issues = [
    'പൊട്ടൽ / വിള്ളൽ (Crack/Break)',
    'അടിവശത്തെ ലീക്ക് (Bottom Seam Leak)',
    'പൈപ്പ് ജോയിന്റ് ലീക്ക് (Nozzle Leak)',
    'മറ്റ് തകരാറുകൾ (Other)'
  ];

  const handleSendWhatsApp = () => {
    let msg = `*വാട്ടർ ടാങ്ക് റിപ്പയർ അന്വേഷണം*\n`;
    msg += `• കപ്പാസിറ്റി: ${tankCapacity}\n`;
    msg += `• ടാങ്ക് തരം: ${tankType}\n`;
    msg += `• പ്രശ്നം: ${issueType}\n`;
    if (locationNote.trim()) {
      msg += `• സ്ഥലം / വിവരണം: ${locationNote.trim()}\n`;
    }
    msg += `\nലൊക്കേഷനും ടാങ്കിന്റെ ഫോട്ടോയും ഇതിനൊപ്പം അയക്കുന്നു. ദയവായി ചെലവും സമയവും അറിയിക്കുക.`;

    window.open(BUSINESS_CONFIG.getWhatsAppLink(msg), '_blank');
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5, 7, 11, 0.88)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        zIndex: 150
      }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={{
          background: 'linear-gradient(145deg, #101622 0%, #0A0E17 100%)',
          border: '1px solid rgba(56, 189, 248, 0.4)',
          borderRadius: '18px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.2)',
          padding: '1.75rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <div className="section-badge" style={{ marginBottom: '0.4rem', padding: '0.2rem 0.65rem', fontSize: '0.72rem' }}>
              <span className="section-badge-dot" />
              <span>വാട്ടർ ടാങ്ക് ഒട്ടിച്ചു നൽകാൻ</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>
              ടാങ്കിന്റെ വിവരങ്ങൾ തിരഞ്ഞെടുക്കൂ
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '2px' }}>
              1000 ലിറ്റർ മുതൽ ഏത് ടാങ്കും സ്ഥലത്തെത്തി ഒപ്പിച്ചു കൊടുക്കും.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#CBD5E1',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          {/* Capacity */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.45rem' }}>
              1. ടാങ്കിന്റെ കപ്പാസിറ്റി (അളവ്):
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {capacities.map((cap) => (
                <button
                  key={cap}
                  type="button"
                  onClick={() => setTankCapacity(cap)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    textAlign: 'center',
                    fontWeight: tankCapacity === cap ? 700 : 400,
                    background: tankCapacity === cap ? 'rgba(56, 189, 248, 0.25)' : 'rgba(30, 41, 59, 0.4)',
                    border: tankCapacity === cap ? '1px solid #38BDF8' : '1px solid rgba(148, 163, 184, 0.15)',
                    color: tankCapacity === cap ? '#FFFFFF' : '#94A3B8'
                  }}
                >
                  {cap}
                </button>
              ))}
            </div>
          </div>

          {/* Tank Type */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.45rem' }}>
              2. ടാങ്കിന്റെ ഇനം:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {types.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTankType(t)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    textAlign: 'center',
                    fontWeight: tankType === t ? 700 : 400,
                    background: tankType === t ? 'rgba(56, 189, 248, 0.25)' : 'rgba(30, 41, 59, 0.4)',
                    border: tankType === t ? '1px solid #38BDF8' : '1px solid rgba(148, 163, 184, 0.15)',
                    color: tankType === t ? '#FFFFFF' : '#94A3B8'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Problem */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.45rem' }}>
              3. എന്തുതരം തകരാറാണ് ഉള്ളത്?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {issues.map((iss) => (
                <button
                  key={iss}
                  type="button"
                  onClick={() => setIssueType(iss)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    textAlign: 'center',
                    fontWeight: issueType === iss ? 700 : 400,
                    background: issueType === iss ? 'rgba(56, 189, 248, 0.25)' : 'rgba(30, 41, 59, 0.4)',
                    border: issueType === iss ? '1px solid #38BDF8' : '1px solid rgba(148, 163, 184, 0.15)',
                    color: issueType === iss ? '#FFFFFF' : '#94A3B8'
                  }}
                >
                  {iss}
                </button>
              ))}
            </div>
          </div>

          {/* Location / Note */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.45rem' }}>
              4. നിങ്ങളുടെ സ്ഥലമോ മറ്റു വിവരങ്ങളോ (Optional):
            </label>
            <textarea
              rows={2}
              value={locationNote}
              onChange={(e) => setLocationNote(e.target.value)}
              placeholder="ഉദാ: ടെറസ്സിലാണ് ടാങ്ക്, ചെറിയ വിള്ളലുണ്ട്..."
              style={{
                width: '100%',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#F1F5F9',
                fontSize: '0.85rem',
                outline: 'none',
                fontFamily: 'inherit',
                resize: 'none'
              }}
            />
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.4rem' }}>
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="btn-whatsapp"
              style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', justifyContent: 'center' }}
            >
              <MessageSquare size={18} />
              <span>വാട്സാപ്പിൽ അയക്കൂ (ലൊക്കേഷൻ & ഫോട്ടോ)</span>
            </button>

            <a
              href={BUSINESS_CONFIG.getPhoneLink()}
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', justifyContent: 'center' }}
            >
              <Phone size={17} />
              <span>നേരിട്ട് വിളിക്കൂ: {BUSINESS_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
