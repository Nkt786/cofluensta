'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Users, Building2, Briefcase, Sparkles, Zap, ArrowUpRight, DollarSign, CheckCircle2, MessageSquare } from 'lucide-react';

export interface UserState {
  isLoggedIn: boolean;
  role: 'visitor' | 'creator' | 'business';
  name: string;
  avatar: string;
  badge: string;
}

interface HeroSectionProps {
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
  currentUser: UserState;
  onOpenFeedModal?: () => void;
}

export default function HeroSection({ onOpenJoinModal, currentUser, onOpenFeedModal }: HeroSectionProps) {
  // CREATOR DASHBOARD VIEW (Sejal)
  if (currentUser.isLoggedIn && currentUser.role === 'creator') {
    return (
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20 bg-hero-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left z-10">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/40 border border-purple-900/40 text-purple-300 text-xs sm:text-sm font-extrabold shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>📸 Creator Portal • Welcome Back!</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
              >
                Welcome back, <br />
                <span className="text-gradient-purple">{currentUser.name}</span> 👋
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-350 text-base sm:text-lg max-w-xl leading-relaxed font-medium"
              >
                You have <span className="font-extrabold text-purple-400">3 new brand deal invites</span> from Boat & Myntra matching your Lifestyle & Beauty niche!
              </motion.p>

              {/* Creator Live Stats Bar */}
              <div className="grid grid-cols-3 gap-3 max-w-lg pt-1">
                <div className="p-3.5 rounded-2xl bg-[#0B0826]/40 border border-purple-900/40 shadow-md">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Total Earnings</p>
                  <p className="text-lg sm:text-xl font-black text-emerald-400">$3,200</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0B0826]/40 border border-purple-900/40 shadow-md">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Active Deals</p>
                  <p className="text-lg sm:text-xl font-black text-purple-400">2 Deals</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0B0826]/40 border border-purple-900/40 shadow-md">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Approval Rate</p>
                  <p className="text-lg sm:text-xl font-black text-indigo-400">94%</p>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {onOpenFeedModal && (
                  <button
                    onClick={onOpenFeedModal}
                    className="px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                  >
                    <Zap className="w-5 h-5 fill-white" />
                    <span>View 120+ Live Brand Deals</span>
                  </button>
                )}
                <button
                  onClick={() => onOpenJoinModal('creator')}
                  className="px-6 py-4 rounded-xl border-2 border-purple-900/60 bg-transparent hover:bg-purple-950/40 text-purple-400 font-bold text-sm sm:text-base shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span>Open Messages (3)</span>
                </button>
              </div>
            </div>

            {/* Right Column Sejal Profile Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm p-6 rounded-3xl bg-[#0B0826]/40 border-2 border-purple-900/40 shadow-2xl space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
                    <Image src="/creator_female_camera.png" alt="Sejal" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center gap-1.5">
                      Sejal Sharma <CheckCircle2 className="w-4 h-4 text-purple-400 fill-purple-950" />
                    </h3>
                    <p className="text-xs font-semibold text-purple-400">@sejal_lifestyle • 95K Followers</p>
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-bold mt-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9 Rating (38 Collabs)
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-900/40 space-y-2">
                  <p className="text-xs font-extrabold text-purple-300 uppercase">🔥 Incoming Brand Offer</p>
                  <p className="text-xs text-slate-350 font-medium">
                    <strong className="text-white">BoAt Lifestyle</strong> sent a $1,200 invitation for wireless earbuds campaign.
                  </p>
                  <button 
                    onClick={onOpenFeedModal}
                    className="w-full py-2 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                  >
                    <span>Accept Offer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // BUSINESS DASHBOARD VIEW (Nikhil)
  if (currentUser.isLoggedIn && currentUser.role === 'business') {
    return (
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-20 bg-hero-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left z-10">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-955/40 border border-indigo-900/40 text-indigo-300 text-xs sm:text-sm font-extrabold shadow-sm"
              >
                <Building2 className="w-4 h-4 text-indigo-400" />
                <span>🏢 Business Manager • Technikh Media</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
              >
                Welcome back, <br />
                <span className="text-gradient-purple">{currentUser.name}</span> 💼
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-350 text-base sm:text-lg max-w-xl leading-relaxed font-medium"
              >
                Your active campaign <span className="font-extrabold text-indigo-400">&apos;Tech Unboxing 2026&apos;</span> has received <span className="font-extrabold text-purple-400">18 creator applications</span> today!
              </motion.p>

              {/* Business Live Stats Bar */}
              <div className="grid grid-cols-3 gap-3 max-w-lg pt-1">
                <div className="p-3.5 rounded-2xl bg-[#0B0826]/40 border border-indigo-900/40 shadow-md">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Campaign Budget</p>
                  <p className="text-lg sm:text-xl font-black text-indigo-400">$15,000</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0B0826]/40 border border-indigo-900/40 shadow-md">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Active Campaigns</p>
                  <p className="text-lg sm:text-xl font-black text-purple-400">3 Live</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0B0826]/40 border border-indigo-900/40 shadow-md">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Total Audience Reach</p>
                  <p className="text-lg sm:text-xl font-black text-emerald-400">1.4M Reach</p>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {onOpenFeedModal && (
                  <button
                    onClick={onOpenFeedModal}
                    className="px-7 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                  >
                    <Users className="w-5 h-5 text-white" />
                    <span>Review 18 Creator Applicants</span>
                  </button>
                )}
                <button
                  onClick={() => onOpenJoinModal('business')}
                  className="px-6 py-4 rounded-xl border-2 border-indigo-900/60 bg-transparent hover:bg-indigo-950/40 text-indigo-400 font-bold text-sm sm:text-base shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-indigo-400" />
                  <span>+ Create New Campaign</span>
                </button>
              </div>
            </div>

            {/* Right Column Nikhil Business Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm p-6 rounded-3xl bg-[#0B0826]/40 border-2 border-indigo-200/20 shadow-2xl space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md">
                    <Image src="/business_male_suit.png" alt="Nikhil" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center gap-1.5">
                      Nikhil <CheckCircle2 className="w-4 h-4 text-indigo-400 fill-indigo-955" />
                    </h3>
                    <p className="text-xs font-semibold text-indigo-400">Technikh Media • Verified Manager</p>
                    <p className="text-xs text-slate-400 font-medium mt-1">Verified Corporate Account</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-900/40 space-y-2">
                  <p className="text-xs font-extrabold text-indigo-300 uppercase">⚡ Top Creator Applicant</p>
                  <p className="text-xs text-slate-350 font-medium">
                    <strong className="text-white">Rohan Verma (120K Tech)</strong> applied to your Tech Unboxing campaign.
                  </p>
                  <button 
                    onClick={onOpenFeedModal}
                    className="w-full py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm cursor-pointer"
                  >
                    <span>Hire Creator ($800)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // DEFAULT VISITOR HERO (Logged Out)
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-955/40 border border-purple-900/40 text-purple-300 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{"India's"} #1 Collaboration Platform</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]"
            >
              Where Brands <br />
              Meet <span className="text-gradient-purple drop-shadow-[0_0_25px_rgba(109,40,217,0.2)]">Creators</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-350 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Cofluensta connects creators, influencers and businesses for powerful collaborations.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-purple-450 font-bold text-base sm:text-lg tracking-wide flex items-center gap-2"
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
                className="px-7 py-4 rounded-xl border-2 border-slate-700 bg-transparent hover:bg-white/5 text-white font-bold text-sm sm:text-base shadow-sm flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>Join as Business</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column Graphic - Desktop Photo Showcase */}
          <div className="hidden lg:block lg:col-span-6 relative h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl -z-10" />
 
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-2 left-4 z-30 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-purple-900/40 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-500/30">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-white leading-tight">100K+</p>
                <p className="text-[10px] font-medium text-slate-400">Active Creators</p>
              </div>
            </motion.div>
 
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-4 right-4 z-30 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-indigo-900/40 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/30">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-white leading-tight">10K+</p>
                <p className="text-[10px] font-medium text-slate-400">Verified Brands</p>
              </div>
            </motion.div>
 
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-24 -left-4 z-30 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-purple-900/40 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-white leading-tight">50K+</p>
                <p className="text-[10px] font-medium text-slate-400">Successful Deals</p>
              </div>
            </motion.div>
 
            <motion.div 
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-4 right-6 z-30 glass-panel px-4 py-2.5 rounded-2xl shadow-lg border border-purple-900/40 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                <Star className="w-4 h-4 fill-white text-white" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-white">4.9 / 5.0</p>
                <p className="text-[10px] font-medium text-slate-400">Platform Rating</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 left-24 w-60 h-80 rounded-2xl overflow-hidden border-4 border-purple-950/40 shadow-2xl shadow-purple-900/20 z-20 group hover:scale-[1.03] transition-transform duration-300"
            >
              <Image
                src="/creator_male_camera.png"
                alt="Creator with Camera"
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs font-bold">Rohan Verma</p>
                <p className="text-[10px] text-purple-300">Tech & Camera Creator</p>
              </div>
            </motion.div>
 
            <motion.div 
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.7 }}
              className="absolute top-2 right-12 w-44 h-56 rounded-2xl overflow-hidden border-2 border-purple-950/40 shadow-xl z-10 group hover:scale-[1.04] transition-transform duration-300"
            >
              <Image
                src="/creator_female_camera.png"
                alt="Female Creator"
                fill
                sizes="(max-width: 768px) 100vw, 176px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 text-white">
                <p className="text-xs font-bold">Ananya Sharma</p>
                <p className="text-[10px] text-purple-300">Lifestyle Influencer</p>
              </div>
            </motion.div>
 
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-8 right-20 w-44 h-56 rounded-2xl overflow-hidden border-2 border-purple-950/40 shadow-xl z-15 group hover:scale-[1.04] transition-transform duration-300"
            >
              <Image
                src="/creator_male_glasses.png"
                alt="Creator with Glasses"
                fill
                sizes="(max-width: 768px) 100vw, 176px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 text-white">
                <p className="text-xs font-bold">Vikram Patel</p>
                <p className="text-[10px] text-purple-300">Brand Strategist</p>
              </div>
            </motion.div>
          </div>

          {/* Mobile Graphic */}
          <div className="block lg:hidden w-full relative py-2">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-purple-500/20 via-indigo-500/15 to-purple-300/10 blur-3xl animate-pulse" />
            </div>

            <div className="relative w-full max-w-md mx-auto h-[380px] sm:h-[420px] rounded-3xl bg-gradient-to-b from-[#120930]/60 via-[#0B0826]/85 to-[#030014]/60 border border-purple-900/40 shadow-xl shadow-purple-950/50 p-4 overflow-hidden flex items-center justify-center">
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

                <motion.line 
                  x1="180" y1="190" x2="85" y2="75" 
                  stroke="url(#purpleGradLine)" strokeWidth="2" strokeDasharray="5 5" 
                  animate={{ strokeDashoffset: [20, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                
                <motion.line 
                  x1="180" y1="190" x2="275" y2="75" 
                  stroke="url(#pinkGradLine)" strokeWidth="2" strokeDasharray="5 5" 
                  animate={{ strokeDashoffset: [0, 20] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />

                <line 
                  x1="85" y1="75" x2="275" y2="75" 
                  stroke="#C084FC" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6"
                />

                <motion.line 
                  x1="180" y1="190" x2="180" y2="310" 
                  stroke="url(#purpleGradLine)" strokeWidth="1.5" strokeDasharray="4 4" 
                  animate={{ strokeDashoffset: [20, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                />

                <motion.circle 
                  r="4" fill="#A855F7"
                  animate={{ cx: [180, 85], cy: [190, 75] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                />
                <motion.circle 
                  r="4" fill="#EC4899"
                  animate={{ cx: [180, 275], cy: [190, 75] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[135px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 shadow-xl shadow-purple-500/30">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-sm opacity-70 animate-pulse" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500 bg-gray-900">
                    <Image
                      src="/creator_male_camera.png"
                      alt="Main Creator"
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-purple-600 text-white shadow-md border-2 border-purple-500">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="mt-1.5 px-3 py-1 rounded-full bg-[#0B0826]/90 border border-purple-900/40 shadow-md backdrop-blur-md">
                  <p className="text-[11px] font-extrabold text-purple-300">Lead Creator</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-6 left-4 sm:left-8 z-20 flex flex-col items-center"
              >
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500 bg-gray-900 relative">
                    <Image
                      src="/creator_male_glasses.png"
                      alt="Creator Glasses"
                      fill
                      sizes="88px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-1 px-2.5 py-0.5 rounded-full bg-[#0B0826]/90 border border-blue-900/40 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-300">Brand Strategist</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -9, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-6 right-4 sm:right-8 z-20 flex flex-col items-center"
              >
                <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-tr from-pink-500 to-purple-500 shadow-lg shadow-pink-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-500 bg-gray-900 relative">
                    <Image
                      src="/creator_female_camera.png"
                      alt="Female Creator"
                      fill
                      sizes="88px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-1 px-2.5 py-0.5 rounded-full bg-[#0B0826]/90 border border-pink-900/40 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-300">Influencer</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, -4, 0], y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-[165px] left-2 sm:left-4 z-30 glass-panel px-2.5 py-1.5 rounded-xl shadow-md border border-purple-900/40 flex items-center gap-1.5"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-sm">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-white leading-none">100K+</p>
                  <p className="text-[9px] text-slate-400 font-semibold">Creators</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 4, 0], y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.4 }}
                className="absolute top-[165px] right-2 sm:right-4 z-30 glass-panel px-2.5 py-1.5 rounded-xl shadow-md border border-indigo-900/40 flex items-center gap-1.5"
              >
                <div className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-white leading-none">10K+</p>
                  <p className="text-[9px] text-slate-400 font-semibold">Brands</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 glass-card-purple px-4 py-2 rounded-2xl shadow-lg border border-purple-900/40 flex items-center gap-3 whitespace-nowrap"
              >
                <div className="flex items-center gap-1.5 border-r border-purple-800 pr-3">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-black text-white">4.9 / 5.0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-purple-400 fill-purple-400 animate-bounce" />
                  <span className="text-xs font-extrabold text-purple-300">50K+ Collabs</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
