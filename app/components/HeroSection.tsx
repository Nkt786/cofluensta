'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Users, Building2, Briefcase, Sparkles, Handshake, TrendingUp, MessageSquare, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
}

export default function HeroSection({ onOpenJoinModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20 bg-hero-glow">
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-400/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left z-10">
            
            {/* Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/90 border border-purple-200/90 text-purple-700 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>{"India's"} #1 Collaboration Platform</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]"
            >
              Where Brands <br />
              Meet <span className="text-gradient-purple drop-shadow-[0_0_25px_rgba(109,40,217,0.2)]">Creators</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Cofluensta connects creators, influencers and businesses for powerful collaborations.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-purple-600 font-bold text-base sm:text-lg tracking-wide flex items-center gap-2"
            >
              <span>Connect. Collaborate. Grow.</span>
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => onOpenJoinModal('creator')}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>Join as Creator</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenJoinModal('business')}
                className="px-7 py-4 rounded-xl border-2 border-purple-500/30 bg-white/90 hover:bg-purple-50/60 text-purple-700 font-bold text-sm sm:text-base shadow-sm flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>Join as Business</span>
                <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column Graphic - Desktop Photo Showcase (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-6 relative h-[500px]">
            
            {/* Background Neon Glow Circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl -z-10 animate-subtle-pulse" />

            {/* Floating Top Stat Pill: 100K+ Creators */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-2 left-4 z-30 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-purple-200/60 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/30">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-gray-900 leading-tight">100K+</p>
                <p className="text-[10px] font-medium text-gray-500">Active Creators</p>
              </div>
            </motion.div>

            {/* Floating Top Stat Pill: 10K+ Brands */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-4 right-4 z-30 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-indigo-200/60 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-gray-900 leading-tight">10K+</p>
                <p className="text-[10px] font-medium text-gray-500">Verified Brands</p>
              </div>
            </motion.div>

            {/* Floating Mid Stat Pill: 50K+ Collaborations */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-24 -left-4 z-30 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-purple-200/60 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-gray-900 leading-tight">50K+</p>
                <p className="text-[10px] font-medium text-gray-500">Successful Deals</p>
              </div>
            </motion.div>

            {/* Floating Bottom Rating Pill */}
            <motion.div 
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-4 right-6 z-30 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-purple-200/60 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                <Star className="w-4 h-4 fill-white text-white" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-gray-900">4.9 / 5.0</p>
                <p className="text-[10px] font-medium text-gray-500">Platform Rating</p>
              </div>
            </motion.div>

            {/* Main Creator Photo Card Center */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 left-24 w-60 h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-purple-500/20 z-20 group hover:scale-[1.03] transition-transform duration-300"
            >
              <Image
                src="/creator_male_camera.png"
                alt="Creator with Camera"
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs font-bold">Rohan Verma</p>
                <p className="text-[10px] text-purple-200">Tech & Camera Creator</p>
              </div>
            </motion.div>

            {/* Top Right Creator Photo Card */}
            <motion.div 
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.7 }}
              className="absolute top-2 right-12 w-44 h-56 rounded-2xl overflow-hidden border-2 border-white shadow-xl z-10 group hover:scale-[1.04] transition-transform duration-300"
            >
              <Image
                src="/creator_female_camera.png"
                alt="Female Creator"
                fill
                sizes="(max-width: 768px) 100vw, 176px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 text-white">
                <p className="text-xs font-bold">Ananya Sharma</p>
                <p className="text-[10px] text-purple-200">Lifestyle Influencer</p>
              </div>
            </motion.div>

            {/* Bottom Right Creator Photo Card */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-8 right-20 w-44 h-56 rounded-2xl overflow-hidden border-2 border-white shadow-xl z-15 group hover:scale-[1.04] transition-transform duration-300"
            >
              <Image
                src="/creator_male_glasses.png"
                alt="Creator with Glasses"
                fill
                sizes="(max-width: 768px) 100vw, 176px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 text-white">
                <p className="text-xs font-bold">Vikram Patel</p>
                <p className="text-[10px] text-purple-200">Brand Strategist</p>
              </div>
            </motion.div>

          </div>

          {/* Mobile Graphic - Animated Full-Cover Interactive Constellation Showcase */}
          <div className="block lg:hidden w-full relative py-2">
            
            {/* Soft Ambient Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-purple-500/20 via-indigo-500/15 to-purple-300/10 blur-3xl animate-pulse" />
            </div>

            {/* Main Interactive Constellation Graphic Container */}
            <div className="relative w-full max-w-md mx-auto h-[380px] sm:h-[420px] rounded-3xl bg-gradient-to-b from-purple-50/70 via-white/90 to-purple-50/50 border border-purple-200/80 shadow-xl shadow-purple-500/10 p-4 overflow-hidden flex items-center justify-center">
              
              {/* Dynamic SVG Animated Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 360 380" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="purpleGradLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="pinkGradLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Animated Connecting Lines */}
                {/* Center Node (180, 190) to Top-Left Node (85, 75) */}
                <motion.line 
                  x1="180" y1="190" x2="85" y2="75" 
                  stroke="url(#purpleGradLine)" strokeWidth="2" strokeDasharray="5 5" 
                  animate={{ strokeDashoffset: [20, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                
                {/* Center Node (180, 190) to Top-Right Node (275, 75) */}
                <motion.line 
                  x1="180" y1="190" x2="275" y2="75" 
                  stroke="url(#pinkGradLine)" strokeWidth="2" strokeDasharray="5 5" 
                  animate={{ strokeDashoffset: [0, 20] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />

                {/* Top-Left Node (85, 75) to Top-Right Node (275, 75) */}
                <line 
                  x1="85" y1="75" x2="275" y2="75" 
                  stroke="#C084FC" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"
                />

                {/* Center Node (180, 190) to Bottom Badge (180, 310) */}
                <motion.line 
                  x1="180" y1="190" x2="180" y2="310" 
                  stroke="url(#purpleGradLine)" strokeWidth="1.5" strokeDasharray="4 4" 
                  animate={{ strokeDashoffset: [20, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                />

                {/* Pulsing Signal Particles on Lines */}
                <motion.circle 
                  r="4" fill="#A855F7"
                  animate={{ 
                    cx: [180, 85], 
                    cy: [190, 75] 
                  }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                />
                <motion.circle 
                  r="4" fill="#EC4899"
                  animate={{ 
                    cx: [180, 275], 
                    cy: [190, 75] 
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>

              {/* CENTER MAIN AVATAR NODE */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[135px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 shadow-xl shadow-purple-500/30">
                  {/* Glowing Animated Outer Ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-sm opacity-70 animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white bg-gray-900">
                    <Image
                      src="/creator_male_camera.png"
                      alt="Main Creator"
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-purple-600 text-white shadow-md border-2 border-white">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="mt-1.5 px-3 py-1 rounded-full bg-white/90 border border-purple-200 shadow-md backdrop-blur-md">
                  <p className="text-[11px] font-extrabold text-purple-900">Lead Creator</p>
                </div>
              </motion.div>

              {/* TOP LEFT AVATAR NODE */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-6 left-4 sm:left-8 z-20 flex flex-col items-center"
              >
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-gray-900 relative">
                    <Image
                      src="/creator_male_glasses.png"
                      alt="Creator Glasses"
                      fill
                      sizes="88px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white/90 border border-blue-200 shadow-sm">
                  <p className="text-[10px] font-bold text-gray-800">Brand Strategist</p>
                </div>
              </motion.div>

              {/* TOP RIGHT AVATAR NODE */}
              <motion.div 
                animate={{ y: [0, -9, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-6 right-4 sm:right-8 z-20 flex flex-col items-center"
              >
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-pink-500 to-purple-500 shadow-lg shadow-pink-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-gray-900 relative">
                    <Image
                      src="/creator_female_camera.png"
                      alt="Female Creator"
                      fill
                      sizes="88px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white/90 border border-pink-200 shadow-sm">
                  <p className="text-[10px] font-bold text-gray-800">Influencer</p>
                </div>
              </motion.div>

              {/* FLOATING STAT BADGES AROUND GRAPHIC */}
              {/* Left Stat Badge: 100K+ */}
              <motion.div 
                animate={{ x: [0, -4, 0], y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-[165px] left-2 sm:left-4 z-30 glass-panel px-2.5 py-1.5 rounded-xl shadow-md border border-purple-200 flex items-center gap-1.5"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-sm">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-gray-900 leading-none">100K+</p>
                  <p className="text-[9px] text-gray-500 font-semibold">Creators</p>
                </div>
              </motion.div>

              {/* Right Stat Badge: 10K+ */}
              <motion.div 
                animate={{ x: [0, 4, 0], y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-[165px] right-2 sm:right-4 z-30 glass-panel px-2.5 py-1.5 rounded-xl shadow-md border border-indigo-200 flex items-center gap-1.5"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-gray-900 leading-none">10K+</p>
                  <p className="text-[9px] text-gray-500 font-semibold">Brands</p>
                </div>
              </motion.div>

              {/* Bottom Center Rating & Collab Pill */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 glass-card-purple px-4 py-2 rounded-2xl shadow-lg border border-purple-300/80 flex items-center gap-3 whitespace-nowrap"
              >
                <div className="flex items-center gap-1.5 border-r border-purple-200 pr-3">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-black text-gray-900">4.9 / 5.0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-purple-600 fill-purple-600 animate-bounce" />
                  <span className="text-xs font-extrabold text-purple-900">50K+ Collabs</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
