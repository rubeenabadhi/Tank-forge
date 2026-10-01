/**
 * BUSINESS CONFIGURATION
 * 
 * Updated with exact customer details:
 * Phone & WhatsApp: 9846700255
 * Service: Water tank crack & leak repair from 500 Litres onwards
 * Location sharing via WhatsApp
 */

export const BUSINESS_CONFIG = {
  // Business Branding
  businessName: "Water Tank Leak Repair & Welding Services",
  malayalamTitle: "വാട്ടർ ടാങ്ക് ലീക്ക് & ക്രാക്ക് വെൽഡിംഗ് സർവീസ്",
  tagline: "വാട്ടർ ടാങ്ക് പൊട്ടിയോ? 1000 ലിറ്റർ മുതൽ ഏത് ടാങ്കും ഒപ്പിച്ചു കൊടുക്കും!",
  subtitle: "Professional Water Tank Crack Repair & Leak Welding (1000L Onwards)",
  description: "വാട്ടർ ടാങ്കിലെ വിള്ളലുകളും ലീക്കുകളും ശാശ്വതമായി വെൽഡ് ചെയ്ത് ശരിയാക്കുന്നു. നിങ്ങളുടെ ലൊക്കേഷൻ അയക്കൂ, നേരിട്ടെത്തി സർവീസ് ചെയ്യുന്നു.",

  // Contact Details
  phone: "+91 9846700255",
  whatsapp: "+91 9846700255",
  displayPhone: "9846700255",
  cleanPhone: "919846700255",
  cleanWhatsApp: "919846700255",
  location: "On-site Doorstep Service (ലൊക്കേഷൻ അയച്ചു തന്നാൽ നേരിട്ടെത്തും)",

  // Default WhatsApp messages
  defaultWhatsAppMessage: "ഹലോ, എന്റെ വാട്ടർ ടാങ്കിൽ ലീക്കുണ്ട്/പൊട്ടിയിട്ടുണ്ട്. റിപ്പയർ ചെയ്യണം. ടാങ്കിന്റെ ഫോട്ടോയും ലൊക്കേഷനും താഴെ അയക്കുന്നു.",
  locationWhatsAppMessage: "ഹലോ, വാട്ടർ ടാങ്ക് റിപ്പയർ ചെയ്യുന്നതിനായി എന്റെ ലൊക്കേഷനും ടാങ്കിന്റെ ഫോട്ടോയും അയക്കുന്നു. ദയവായി പരിശോധിക്കുക.",

  // Helper link generators
  getPhoneLink: function() {
    return `tel:+${this.cleanPhone}`;
  },

  getWhatsAppLink: function(customMessage) {
    const text = encodeURIComponent(customMessage || this.defaultWhatsAppMessage);
    return `https://wa.me/${this.cleanWhatsApp}?text=${text}`;
  },

  getLocationShareLink: function() {
    const text = encodeURIComponent(this.locationWhatsAppMessage);
    return `https://wa.me/${this.cleanWhatsApp}?text=${text}`;
  }
};
