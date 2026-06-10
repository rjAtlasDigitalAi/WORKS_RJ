import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DigitalMarketing from './components/DigitalMarketing';
import WebsiteDevelopment from './components/WebsiteDevelopment';
import AIVideoProduction from './components/AIVideoProduction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111827] selection:bg-[#2563EB] selection:text-white">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Area */}
        <Hero />

        {/* Section 1: Digital Marketing */}
        <DigitalMarketing />

        {/* Section 2: Website Development */}
        <WebsiteDevelopment />

        {/* Section 3: AI Video Production */}
        <AIVideoProduction />
      </main>

      {/* Footer / Contact */}
      <Footer />
    </div>
  );
}
