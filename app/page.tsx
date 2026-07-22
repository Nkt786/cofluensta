'use client';

import React, { useState } from 'react';
import DemoUserSwitcher from './components/DemoUserSwitcher';
import Navbar from './components/Navbar';
import HeroSection, { UserState } from './components/HeroSection';
import LoggedInDashboardSection from './components/LoggedInDashboardSection';
import StatsBar from './components/StatsBar';
import HowItWorksSection from './components/HowItWorksSection';
import DualCardsSection from './components/DualCardsSection';
import BrandLogosSection from './components/BrandLogosSection';
import MobileBottomNav from './components/MobileBottomNav';
import JoinModal from './components/JoinModal';
import FeedModal from './components/FeedModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'creator' | 'business' | 'general'>('general');
  const [feedModalOpen, setFeedModalOpen] = useState(false);

  // Demo Logged-In User State (Visitor vs Sejal Creator vs Nikhil Business)
  const [currentUser, setCurrentUser] = useState<UserState>({
    isLoggedIn: false,
    role: 'visitor',
    name: '',
    avatar: '',
    badge: '',
  });

  const handleSwitchUser = (role: 'visitor' | 'creator' | 'business') => {
    if (role === 'creator') {
      setCurrentUser({
        isLoggedIn: true,
        role: 'creator',
        name: 'Sejal Sharma',
        avatar: '/creator_female_camera.png',
        badge: 'Lifestyle Influencer (95K)',
      });
    } else if (role === 'business') {
      setCurrentUser({
        isLoggedIn: true,
        role: 'business',
        name: 'Nikhil',
        avatar: '/business_male_suit.png',
        badge: 'Technikh Media Manager',
      });
    } else {
      setCurrentUser({
        isLoggedIn: false,
        role: 'visitor',
        name: '',
        avatar: '',
        badge: '',
      });
    }
  };

  const handleOpenJoinModal = (type: 'creator' | 'business' | 'general') => {
    setModalType(type);
    setModalOpen(true);
  };

  const handleOpenFeedModal = () => {
    setFeedModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#030014] text-slate-300 relative selection:bg-purple-600 selection:text-white">
      
      {/* Top Demo Workflow Switcher (Guest vs Sejal vs Nikhil) */}
      <DemoUserSwitcher 
        currentUser={currentUser}
        onSwitchUser={handleSwitchUser}
      />

      {/* Background Decorative Ambient Lighting */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <Navbar 
        onOpenJoinModal={handleOpenJoinModal} 
        onOpenFeedModal={handleOpenFeedModal}
        currentUser={currentUser}
        onSwitchUser={handleSwitchUser}
      />

      {/* Hero Section */}
      <HeroSection 
        onOpenJoinModal={handleOpenJoinModal} 
        currentUser={currentUser}
        onOpenFeedModal={handleOpenFeedModal}
      />

      {/* CONDITIONAL RENDER: Logged In Feed/Dashboard vs Logged Out Marketing */}
      {currentUser.isLoggedIn ? (
        <LoggedInDashboardSection 
          currentUser={currentUser}
          onOpenJoinModal={handleOpenJoinModal}
          onOpenFeedModal={handleOpenFeedModal}
        />
      ) : (
        <div className="space-y-4">
          <StatsBar />
          <HowItWorksSection />
          <DualCardsSection onOpenJoinModal={handleOpenJoinModal} />
          <BrandLogosSection />
        </div>
      )}

      {/* Footer Minimalist Copyright */}
      <footer className="border-t border-white/5 py-8 px-4 text-center text-xs text-slate-500 mb-16 md:mb-0">
        <p>© {new Date().getFullYear()} Cofluensta. All rights reserved. Connect. Collaborate. Grow.</p>
      </footer>

      {/* Mobile Fixed Bottom Navigation */}
      <MobileBottomNav 
        onOpenJoinModal={handleOpenJoinModal}
        onOpenFeedModal={handleOpenFeedModal} 
      />

      {/* Onboarding Interactive Modal */}
      <JoinModal
        isOpen={modalOpen}
        initialType={modalType}
        onClose={() => setModalOpen(false)}
      />

      {/* Live Collab Feed Modal */}
      <FeedModal
        isOpen={feedModalOpen}
        onClose={() => setFeedModalOpen(false)}
        onOpenJoinModal={handleOpenJoinModal}
      />

    </main>
  );
}
