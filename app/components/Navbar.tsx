'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Flame, Sparkles, ArrowRight, Compass, Users, Building2, Tag, BookOpen, Zap, LogOut } from 'lucide-react';
import { UserState } from './HeroSection';

interface NavbarProps {
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
  onOpenFeedModal?: () => void;
  currentUser: UserState;
  onSwitchUser: (role: 'visitor' | 'creator' | 'business') => void;
}

export default function Navbar({ onOpenJoinModal, onOpenFeedModal, currentUser, onSwitchUser }: NavbarProps) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Sparkles },
    { name: 'Creators', href: '#creators', icon: Users, badge: '100K+' },
    { name: 'Businesses', href: '#businesses', icon: Building2, badge: 'PRO' },
    { name: 'Explore', href: '#explore', icon: Compass, badge: 'HOT' },
    { name: 'Pricing', href: '#pricing', icon: Tag },
    { name: 'Resources', href: '#resources', icon: BookOpen, hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#030014]/80 border-b border-white/5 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('Home')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-purple-500 to-indigo-500 flex items-center justify-center p-[2px] shadow-md shadow-purple-500/20">
              <div className="w-full h-full bg-[#030014] rounded-full flex items-center justify-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                  C
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight leading-none">
                Cofluensta
              </h1>
              <p className="text-[10px] text-purple-400 font-semibold tracking-wide mt-0.5">
                Connect. Collaborate. Grow.
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative px-3 lg:px-4 py-2 text-sm font-semibold transition-colors duration-200 flex items-center gap-1 ${
                    isActive ? 'text-purple-400 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                  )}
                </a>
              );
            })}
          </nav>
 
          {/* Desktop Right Auth Actions */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenFeedModal && (
              <button
                onClick={onOpenFeedModal}
                className="px-3.5 py-2 text-sm font-bold text-amber-400 bg-amber-950/30 hover:bg-amber-950/60 rounded-xl border border-amber-900/40 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Flame className="w-4 h-4 text-amber-500 fill-amber-400 animate-pulse" />
                <span>Live Feed</span>
              </button>
            )}
 
            {currentUser.isLoggedIn ? (
              <div className="flex items-center gap-2 p-1.5 pr-3 rounded-xl bg-purple-950/30 border border-purple-900/40">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/50">
                  <Image src={currentUser.avatar} alt={currentUser.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">{currentUser.name}</p>
                  <p className="text-[10px] font-semibold text-purple-400 capitalize">{currentUser.role}</p>
                </div>
                <button
                  onClick={() => onSwitchUser('visitor')}
                  className="p-1 rounded-lg text-slate-400 hover:text-purple-400 hover:bg-purple-900/40 transition-colors ml-1 cursor-pointer"
                  title="Log out demo user"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onOpenJoinModal('general')}
                  className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-500 bg-transparent transition-all duration-200 cursor-pointer"
                >
                  Login
                </button>
                <button
                  onClick={() => onOpenJoinModal('general')}
                  className="px-5 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-200 cursor-pointer"
                >
                  Join Now
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            {onOpenFeedModal && (
              <button
                onClick={onOpenFeedModal}
                className="px-3 py-1.5 rounded-xl bg-amber-950/30 border border-amber-900/40 text-amber-400 text-xs font-bold flex items-center gap-1 shadow-xs cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-400 animate-pulse" />
                <span>Feed</span>
              </button>
            )}
 
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-200 bg-[#0B0826] border border-purple-900/40 shadow-xs hover:bg-purple-950/30 transition-all active:scale-95 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* MOBILE FLOATING MENU SHEET */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-black/60 backdrop-blur-xs"
            />
 
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              transition={{ type: 'spring', damping: 24, stiffness: 300 }}
              className="md:hidden fixed top-[84px] left-4 right-4 z-50 bg-[#0A071E] rounded-3xl p-4 border-2 border-purple-900/40 shadow-2xl shadow-purple-950/50 space-y-3"
            >
              {/* Logged in User Bar inside Mobile Menu */}
              {currentUser.isLoggedIn && (
                <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-purple-500/50">
                      <Image src={currentUser.avatar} alt={currentUser.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white leading-none">{currentUser.name}</p>
                      <p className="text-[10px] font-semibold text-purple-400 uppercase mt-0.5">{currentUser.role} Account</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onSwitchUser('visitor');
                      setMobileMenuOpen(false);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-transparent border border-purple-900/40 text-purple-400 text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-purple-950/40"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
 
              {/* Featured Live Feed Card */}
              {onOpenFeedModal && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFeedModal();
                  }}
                  className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-950/20 to-purple-950/20 border border-purple-900/40 flex items-center justify-between cursor-pointer hover:border-purple-800 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                      <Flame className="w-5 h-5 fill-white animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Live Collab Feed</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium">120+ active brand deals & pitches</p>
                    </div>
                  </div>
 
                  <span className="text-xs font-bold text-purple-400 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    Open <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </motion.div>
              )}

              {/* Navigation Items */}
              <div className="space-y-1 py-1">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  const isActive = activeTab === link.name;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 + 0.08 }}
                      onClick={() => {
                        setActiveTab(link.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-500/25'
                          : 'text-slate-300 hover:bg-purple-950/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-400'} group-hover:scale-110 transition-transform`} />
                        <span>{link.name}</span>
                      </div>
 
                      {link.badge && (
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-purple-950/50 text-purple-300 border border-purple-800/40'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </motion.a>
                  );
                })}
              </div>
 
              {/* Bottom Auth Dock */}
              {!currentUser.isLoggedIn && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-3 border-t border-white/5 flex items-center gap-2"
                >
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenJoinModal('general');
                    }}
                    className="flex-1 py-2.5 text-center text-xs font-semibold text-slate-300 rounded-xl border border-slate-700 bg-transparent hover:border-slate-500 hover:bg-white/5 cursor-pointer"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenJoinModal('general');
                    }}
                    className="flex-1 py-2.5 text-center text-xs font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/20 hover:from-purple-500 hover:to-indigo-500 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5 fill-white" />
                    <span>Join Now</span>
                  </button>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
