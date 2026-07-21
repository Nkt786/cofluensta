'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import HowItWorksSection from './components/HowItWorksSection';
import DualCardsSection from './components/DualCardsSection';
import BrandLogosSection from './components/BrandLogosSection';
import MobileBottomNav from './components/MobileBottomNav';
import JoinModal from './components/JoinModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'creator' | 'business' | 'general'>('general');

  const handleOpenJoinModal = (type: 'creator' | 'business' | 'general') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-gray-600 relative selection:bg-purple-600 selection:text-white">
      
      {/* Background Decorative Ambient Lighting */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Sections */}
      <div className="space-y-4">
        <HeroSection onOpenJoinModal={handleOpenJoinModal} />
        <StatsBar />
        <HowItWorksSection />
        <DualCardsSection onOpenJoinModal={handleOpenJoinModal} />
        <BrandLogosSection />
      </div>

      {/* Footer Minimalist Copyright */}
      <footer className="border-t border-gray-200/60 py-8 px-4 text-center text-xs text-gray-500 mb-16 md:mb-0">
        <p>© {new Date().getFullYear()} Cofluensta. All rights reserved. Connect. Collaborate. Grow.</p>
      </footer>

      {/* Mobile Fixed Bottom Navigation */}
      <MobileBottomNav onOpenJoinModal={handleOpenJoinModal} />

      {/* Onboarding Interactive Modal */}
      <JoinModal
        isOpen={modalOpen}
        initialType={modalType}
        onClose={() => setModalOpen(false)}
      />

    </main>
  );
}
