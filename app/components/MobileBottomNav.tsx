'use client';

import React, { useState } from 'react';
import { Home, Search, Plus, MessageSquare, User } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
}

export default function MobileBottomNav({ onOpenJoinModal }: MobileBottomNavProps) {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = [
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Explore', label: 'Explore', icon: Search },
    { id: 'PostJob', label: 'Post a Job', icon: Plus, isCenterButton: true },
    { id: 'Messages', label: 'Messages', icon: MessageSquare },
    { id: 'Profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-xl border-t border-gray-200/80 px-3 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around relative max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          if (tab.isCenterButton) {
            return (
              <div key={tab.id} className="flex flex-col items-center -mt-6">
                <button
                  onClick={() => {
                    setActiveTab(tab.id);
                    onOpenJoinModal('business');
                  }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/40 border-2 border-[#FAF8F5] hover:scale-105 active:scale-95 transition-all"
                  aria-label="Post a Job"
                >
                  <Plus className="w-6 h-6 stroke-[2.5]" />
                </button>
                <span className="text-[10px] font-semibold text-purple-600 mt-1">
                  {tab.label}
                </span>
              </div>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === 'Profile') {
                  onOpenJoinModal('general');
                }
              }}
              className="flex flex-col items-center py-1 px-2 transition-all"
            >
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? 'text-purple-600 stroke-[2.5]' : 'text-gray-500'
                }`}
              />
              <span
                className={`text-[10px] mt-1 font-semibold transition-colors ${
                  isActive ? 'text-purple-600 font-bold' : 'text-gray-500'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
