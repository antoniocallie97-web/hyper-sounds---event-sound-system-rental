import React, { useState } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { SpeakersSection } from './components/SpeakersSection.jsx';
import { PackageBuilder } from './components/PackageBuilder.jsx';
import { PopularPackages } from './components/PopularPackages.jsx';
import { EventTypesSection } from './components/EventTypesSection.jsx';
import { HowItWorks } from './components/HowItWorks.jsx';
import { GallerySection } from './components/GallerySection.jsx';
import { WhatsAppCTA } from './components/WhatsAppCTA.jsx';
import { ContactSection } from './components/ContactSection.jsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  // Live state for custom package builder
  const [quantities, setQuantities] = useState({
    bigBass: 0,
    bass: 2,
    mid: 2,
  });

  const totalInPackage = quantities.bigBass + quantities.bass + quantities.mid;

  const handleUpdateQuantity = (type, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(0, Math.min(24, prev[type] + delta)),
    }));
  };

  const handleSetQuantity = (type, value) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(0, Math.min(24, value)),
    }));
  };

  const handleAddToPackage = (type, count) => {
    setQuantities((prev) => ({
      ...prev,
      [type]: Math.max(0, Math.min(24, prev[type] + count)),
    }));
  };

  const handleSelectPreset = (newQuantities) => {
    setQuantities(newQuantities);
  };

  const handleReset = () => {
    setQuantities({
      bigBass: 0,
      bass: 0,
      mid: 0,
    });
  };

  const scrollToBuilder = () => {
    const el = document.getElementById('builder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar totalInPackage={totalInPackage} onOpenBuilder={scrollToBuilder} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Speaker Products Section */}
        <SpeakersSection
          onAddToPackage={handleAddToPackage}
          onScrollToBuilder={scrollToBuilder}
        />

        {/* 3. Interactive Package Builder */}
        <PackageBuilder
          quantities={quantities}
          onUpdateQuantity={handleUpdateQuantity}
          onSetQuantity={handleSetQuantity}
          onReset={handleReset}
        />

        {/* 4. Pre-Made Packages */}
        <PopularPackages onSelectPackage={handleSelectPreset} />

        {/* 5. Event Types Section */}
        <EventTypesSection onLoadPreset={handleSelectPreset} />

        {/* 6. How It Works Section */}
        <HowItWorks />

        {/* 7. Gallery Section */}
        <GallerySection />

        {/* 8. WhatsApp CTA */}
        <WhatsAppCTA />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* Fixed Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
