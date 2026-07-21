'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Star, Users, Building2, Briefcase, Sparkles, Handshake, TrendingUp, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
}

export default function HeroSection({ onOpenJoinModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 bg-hero-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-bold tracking-wide backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>{"India's"} #1 Collaboration Platform</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Where Brands <br />
              Meet <span className="text-gradient-purple drop-shadow-[0_0_20px_rgba(109,40,217,0.15)]">Creators</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Cofluensta connects creators, influencers and businesses for powerful collaborations.
            </p>
            <p className="text-purple-600 font-bold text-base tracking-wide">
              Connect. Collaborate. Grow.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenJoinModal('creator')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2 transition-all duration-200 group"
              >
                <span>Join as Creator</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenJoinModal('business')}
                className="px-6 py-3.5 rounded-xl border border-purple-500/30 bg-white hover:bg-purple-50/40 text-purple-600 font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all duration-200 group"
              >
                <span>Join as Business</span>
                <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column Graphic - Desktop Photo Showcase (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-6 relative h-[480px]">
            
            {/* Background Neon Glow Circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10 animate-subtle-pulse" />

            {/* Floating Top Stat Pill: 100K+ Creators */}
            <div className="absolute top-2 left-6 z-20 glass-panel px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2 animate-float">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-tight">100K+</p>
                <p className="text-[10px] text-gray-500">Creators</p>
              </div>
            </div>

            {/* Floating Top Stat Pill: 10K+ Brands */}
            <div className="absolute top-4 right-4 z-20 glass-panel px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-tight">10K+</p>
                <p className="text-[10px] text-gray-500">Brands</p>
              </div>
            </div>

            {/* Floating Mid Stat Pill: 50K+ Collaborations */}
            <div className="absolute bottom-28 left-0 z-20 glass-panel px-3 py-2 rounded-xl shadow-md flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-tight">50K+</p>
                <p className="text-[10px] text-gray-500">Collaborations</p>
              </div>
            </div>

            {/* Floating Bottom Rating Pill */}
            <div className="absolute bottom-6 right-8 z-20 glass-panel px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
                <Star className="w-4 h-4 fill-purple-500 text-purple-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">4.8</p>
                <p className="text-[10px] text-gray-500">User Rating</p>
              </div>
            </div>

            {/* Main Creator Photo Card Center (Male with Camera in purple hoodie) */}
            <div className="absolute top-12 left-24 w-60 h-80 rounded-2xl overflow-hidden border-2 border-white shadow-2xl shadow-purple-500/10 transition-transform duration-300 hover:scale-105 z-10">
              <Image
                src="/creator_male_camera.png"
                alt="Creator with Camera"
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
            </div>

            {/* Top Right Creator Photo Card (Female with Camera) */}
            <div className="absolute top-4 right-14 w-44 h-56 rounded-2xl overflow-hidden border border-white shadow-xl z-15 transition-transform duration-300 hover:scale-105">
              <Image
                src="/creator_female_camera.png"
                alt="Female Creator"
                fill
                sizes="(max-width: 768px) 100vw, 176px"
                className="object-cover"
              />
            </div>

            {/* Bottom Right Creator Photo Card (Male with Glasses) */}
            <div className="absolute bottom-10 right-24 w-40 h-52 rounded-2xl overflow-hidden border border-white shadow-xl z-15 transition-transform duration-300 hover:scale-105">
              <Image
                src="/creator_male_glasses.png"
                alt="Creator with Glasses"
                fill
                sizes="(max-width: 768px) 100vw, 160px"
                className="object-cover"
              />
            </div>

          </div>

          {/* Mobile/Tablet Graphic - Constellation Graph */}
          <div className="block lg:hidden relative py-6 flex justify-center">
            
            {/* Background Glowing Orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-purple-500/5 blur-2xl" />
            </div>

            {/* SVG Constellation Connected Nodes Grid */}
            <div className="relative w-full max-w-sm h-72">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 280">
                {/* Node Connection Lines */}
                <line x1="150" y1="80" x2="220" y2="40" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                <line x1="150" y1="80" x2="240" y2="180" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                <line x1="220" y1="40" x2="240" y2="180" stroke="#A78BFA" strokeWidth="1" opacity="0.4" />
                <line x1="150" y1="80" x2="80" y2="140" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.5" />
                <circle cx="280" cy="110" r="16" fill="#8B5CF6" opacity="0.15" />
                <circle cx="40" cy="90" r="14" fill="#A78BFA" opacity="0.15" />
              </svg>

              {/* Center Male Avatar Circle */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full p-1 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white">
                  <Image
                    src="/creator_male_camera.png"
                    alt="Male Creator"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Top Right Female Avatar Circle */}
              <div className="absolute top-0 right-4 w-24 h-24 rounded-full p-1 bg-gradient-to-r from-purple-400 to-indigo-400 shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white">
                  <Image
                    src="/creator_female_camera.png"
                    alt="Female Creator"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Bottom Right Male Avatar Circle */}
              <div className="absolute bottom-4 right-8 w-24 h-24 rounded-full p-1 bg-gradient-to-r from-amber-400 to-purple-500 shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white">
                  <Image
                    src="/creator_male_glasses.png"
                    alt="Male Creator Glasses"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Node Badges */}
              <div className="absolute top-10 left-2 p-2 rounded-full bg-purple-100/80 border border-purple-200 text-purple-600">
                <Handshake className="w-4 h-4" />
              </div>
              <div className="absolute top-28 right-0 p-2 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-600">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="absolute bottom-12 left-12 p-2 rounded-full bg-purple-50/90 border border-purple-200 text-purple-600">
                <MessageSquare className="w-4 h-4" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
