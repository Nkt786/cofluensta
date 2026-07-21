'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Building2, Eye, LogOut } from 'lucide-react';
import { UserState } from './HeroSection';

interface DemoUserSwitcherProps {
  currentUser: UserState;
  onSwitchUser: (role: 'visitor' | 'creator' | 'business') => void;
}

export default function DemoUserSwitcher({ currentUser, onSwitchUser }: DemoUserSwitcherProps) {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white px-3 py-2 border-b border-purple-800/80 shadow-inner flex items-center justify-between overflow-x-auto no-scrollbar text-xs">
      <div className="flex items-center gap-2 font-bold whitespace-nowrap">
        <span className="px-2 py-0.5 rounded-md bg-purple-500/30 text-purple-200 border border-purple-400/40 text-[10px] tracking-wider uppercase font-black">
          Demo Workflow Switcher
        </span>
        <span className="text-gray-300 hidden sm:inline text-[11px]">
          Test how Cofluensta looks when logged out vs logged in:
        </span>
      </div>

      <div className="flex items-center gap-1.5 whitespace-nowrap">
        {/* Visitor Tab */}
        <button
          onClick={() => onSwitchUser('visitor')}
          className={`px-3 py-1 rounded-lg font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
            currentUser.role === 'visitor'
              ? 'bg-white text-purple-950 shadow-md scale-105'
              : 'bg-white/10 text-gray-200 hover:bg-white/20'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Guest Visitor</span>
        </button>

        {/* Sejal Creator Tab */}
        <button
          onClick={() => onSwitchUser('creator')}
          className={`px-3 py-1 rounded-lg font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
            currentUser.role === 'creator'
              ? 'bg-purple-500 text-white shadow-md shadow-purple-500/50 scale-105 border border-purple-300'
              : 'bg-white/10 text-purple-200 hover:bg-white/20'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Sejal (Creator)</span>
        </button>

        {/* Nikhil Business Tab */}
        <button
          onClick={() => onSwitchUser('business')}
          className={`px-3 py-1 rounded-lg font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${
            currentUser.role === 'business'
              ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/50 scale-105 border border-indigo-300'
              : 'bg-white/10 text-indigo-200 hover:bg-white/20'
          }`}
        >
          <Building2 className="w-3.5 h-3.5 text-indigo-300" />
          <span>Nikhil (Business)</span>
        </button>
      </div>
    </div>
  );
}
