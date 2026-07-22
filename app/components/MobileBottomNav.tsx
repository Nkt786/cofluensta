'use client';

import React, { useState } from 'react';
import { Home, Flame, MessageSquare, Search, User, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileBottomNavProps {
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
  onOpenFeedModal: () => void;
}

export default function MobileBottomNav({ onOpenJoinModal, onOpenFeedModal }: MobileBottomNavProps) {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = [
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Feed', label: 'Feed', icon: Flame, isFeed: true },
    { id: 'Messages', label: 'Messages', icon: MessageSquare, badge: '3' },
    { id: 'Explore', label: 'Explore', icon: Search },
    { id: 'Profile', label: 'Profile', icon: User },
  ];

  return (
    <>
      {/* TWITTER/X STYLE FLOATING "+" FAB ACTION BUTTON */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 250, delay: 0.2 }}
        className="md:hidden fixed bottom-20 right-5 z-40 flex flex-col items-center"
      >
        <button
          onClick={() => onOpenJoinModal('business')}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-purple-700 to-indigo-600 text-white flex items-center justify-center shadow-xl shadow-purple-600/40 border-2 border-purple-950 hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          aria-label="Create New Collab or Campaign"
        >
          <Plus className="w-7 h-7 stroke-[3] group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </motion.div>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0826]/95 backdrop-blur-2xl border-t border-purple-900/40 px-2 py-1.5 shadow-[0_-4px_25px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-around relative max-w-md mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            if (tab.isFeed) {
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    onOpenFeedModal();
                  }}
                  className="flex flex-col items-center py-1 px-2 relative group transition-all cursor-pointer"
                >
                  <div className="relative">
                    <Icon className="w-5 h-5 text-amber-500 fill-amber-400 animate-pulse" />
                    <span className="absolute -top-1 -right-2 px-1 py-0.2 rounded-full bg-purple-600 text-white text-[8px] font-black tracking-wider shadow-xs">
                      LIVE
                    </span>
                  </div>
                  <span className="text-[10px] mt-1 font-extrabold text-amber-600">
                    {tab.label}
                  </span>
                </button>
              );
            }

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === 'Messages' || tab.id === 'Profile') {
                    onOpenJoinModal('general');
                  }
                }}
                className="flex flex-col items-center py-1 px-2 transition-all cursor-pointer relative"
              >
                <div className="relative">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? 'text-purple-400 stroke-[2.5]' : 'text-slate-450'
                    }`}
                  />
                  {tab.badge && (
                    <span className="absolute -top-1 -right-2.5 px-1.5 py-0.2 rounded-full bg-indigo-650 text-white text-[8px] font-black shadow-xs">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span
                  className={`text-[10px] mt-1 transition-colors ${
                    isActive ? 'text-purple-400 font-extrabold' : 'text-slate-400 font-semibold'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
