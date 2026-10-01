import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import MobileQuickBar from './components/MobileQuickBar';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  const handleOpenQuote = (data = null) => {
    setQuoteInitialData(data);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setQuoteInitialData(null);
  };

  const handleSelectService = (service) => {
    handleOpenQuote({
      title: service.title,
      description: service.shortDescription
    });
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section with 3D Procedural Metal Water Tank */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Six Specialized Services */}
        <Services onSelectService={handleSelectService} />

        {/* About Section */}
        <About onOpenQuote={() => handleOpenQuote()} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Five-Step Work Process Timeline */}
        <Process onOpenQuote={() => handleOpenQuote()} />

        {/* Project Gallery */}
        <Gallery onOpenQuote={(proj) => handleOpenQuote(proj)} />

        {/* Strong Contact Call To Action */}
        <ContactCTA onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Custom Quote / Inquiry Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        initialData={quoteInitialData}
      />

      {/* Mobile Sticky Quick Contact Bar */}
      <MobileQuickBar />
    </div>
  );
}
