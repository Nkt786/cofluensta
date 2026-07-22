'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, Sparkles, Filter, Briefcase, Zap, Search, Bookmark, ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';

interface FeedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
}

export default function FeedModal({ isOpen, onClose, onOpenJoinModal }: FeedModalProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: '🔥 All Drops' },
    { id: 'Brands', label: '💼 Brand Briefs' },
    { id: 'Creators', label: '📸 Creator Pitches' },
    { id: 'HighBudget', label: '⚡ $1K+ Deals' },
  ];

  const feedItems = [
    {
      id: 1,
      type: 'brand',
      author: 'BoAt Lifestyle',
      avatar: '/business_male_suit.png',
      badge: 'Verified Brand',
      title: 'Seeking 10 Tech & Gaming Creators for Wireless Earbuds Campaign',
      description: 'Create 1 dedicated Instagram Reel + 1 YouTube Short showcasing active noise cancellation features.',
      budget: '$1,200 - $3,000',
      tags: ['Tech', 'Audio', 'Instagram Reels'],
      applicants: 28,
      timeAgo: '12m ago',
    },
    {
      id: 2,
      type: 'creator',
      author: 'Rohan Verma',
      avatar: '/creator_male_camera.png',
      badge: '120K Followers',
      title: 'Open for Tech Unboxing, Gadget Reviews & App Sponsorships',
      description: 'High engagement rate (8.4%). Specializing in gadget reviews, PC setups, and tech unboxings.',
      budget: '$800 / Video',
      tags: ['Gadgets', 'YouTube', 'High ROI'],
      applicants: 16,
      timeAgo: '45m ago',
    },
    {
      id: 3,
      type: 'brand',
      author: 'Myntra Fashion',
      avatar: '/business_male_suit.png',
      badge: 'Top Partner',
      title: 'Gen-Z Festive Fashion Haul — Reels & Shorts Collab',
      description: 'Looking for trendy fashion creators to style 3 outfits from our new streetwear line.',
      budget: '$2,500 - $5,000',
      tags: ['Fashion', 'Streetwear', 'Reels'],
      applicants: 42,
      timeAgo: '2h ago',
    },
    {
      id: 4,
      type: 'creator',
      author: 'Ananya Sharma',
      avatar: '/creator_female_camera.png',
      badge: '85K Followers',
      title: 'Skincare & Beauty Product Reviews — August Availability',
      description: 'Available for organic skincare brand integration and aesthetic product unboxing reels.',
      budget: '$600 / Reel',
      tags: ['Beauty', 'Skincare', 'Aesthetic'],
      applicants: 19,
      timeAgo: '3h ago',
    },
  ];

  const filteredItems = feedItems.filter((item) => {
    if (activeCategory === 'Brands') return item.type === 'brand';
    if (activeCategory === 'Creators') return item.type === 'creator';
    if (activeCategory === 'HighBudget') return item.budget.includes('$1,200') || item.budget.includes('$2,500');
    return true;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-gray-950/70 backdrop-blur-md">
          {/* Backdrop Click */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Feed Container Drawer */}
          <motion.div 
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-2xl bg-[#0A071E] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10 border border-purple-900/40"
          >
            {/* Header Ticker */}
            <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 text-white px-5 py-3.5 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Flame className="w-5 h-5 text-amber-300 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold flex items-center gap-2">
                    <span>Live Collab Feed</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </h3>
                  <p className="text-[11px] text-purple-100 font-medium">124 live brand deals & creator pitches dropped today</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="p-4 bg-purple-955/20 border-b border-purple-900/30 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30 scale-105'
                      : 'bg-[#131135] text-slate-300 hover:bg-purple-955/30 border border-purple-900/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Scrollable Feed Item Cards */}
            <div className="p-4 space-y-4 overflow-y-auto max-h-[60vh] custom-scrollbar bg-[#030014]/60">
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-2xl bg-[#0B0826]/80 border border-purple-900/30 shadow-sm hover:shadow-md hover:border-purple-800 transition-all space-y-3"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-900/40 bg-purple-955/30">
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          {item.author}
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 fill-purple-100" />
                        </h4>
                        <span className="text-[10px] font-semibold text-purple-400 px-2 py-0.5 rounded-md bg-purple-955/30 border border-purple-900/40 inline-block">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-medium text-slate-500">{item.timeAgo}</span>
                  </div>

                  {/* Title & Body */}
                  <div>
                    <h5 className="text-sm font-extrabold text-white leading-snug">{item.title}</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-slate-300 px-2 py-0.5 rounded-full bg-purple-955/40 border border-purple-900/30">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Actions & Budget */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Compensation</p>
                      <p className="text-sm font-black text-purple-400">{item.budget}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          onClose();
                          onOpenJoinModal(item.type === 'brand' ? 'creator' : 'business');
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-purple-500/20 flex items-center gap-1 transition-all cursor-pointer"
                      >
                        <span>{item.type === 'brand' ? 'Apply Now' : 'Send Pitch'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Create Action CTA */}
            <div className="p-4 bg-[#0A071E] border-t border-purple-900/40 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Want to drop your own deal or pitch?</span>
              <button
                onClick={() => {
                  onClose();
                  onOpenJoinModal('general');
                }}
                className="px-4 py-2 rounded-xl border border-purple-900/50 bg-[#131135] hover:bg-purple-955/40 text-purple-400 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-purple-600 fill-purple-600" />
                <span>Post a Drop</span>
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
