'use client';

import React from 'react';
import Image from 'next/image';
import { User, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';

interface DualCardsSectionProps {
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
}

export default function DualCardsSection({ onOpenJoinModal }: DualCardsSectionProps) {
  const creatorFeatures = [
    'Create your profile',
    'Get discovered',
    'Collaborate & earn',
    'Grow your personal brand',
  ];

  const businessFeatures = [
    'Post your campaign',
    'Choose the best fit',
    'Collaborate easily',
    'Achieve your goals',
  ];

  return (
    <section className="py-8 lg:py-12 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Creator Card - Purple Theme */}
        <div className="glass-card-purple p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-white flex flex-col justify-between group">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* Left Content */}
            <div className="sm:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 text-sm font-bold border border-purple-100">
                <User className="w-4 h-4 text-purple-600" />
                <span>For Creators</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Showcase your talent, connect with brands and get paid for what you love.
              </p>

              <ul className="space-y-2.5 pt-1">
                {creatorFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Desktop Button */}
              <div className="hidden sm:block pt-3">
                <button
                  onClick={() => onOpenJoinModal('creator')}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-500/20 flex items-center gap-1.5 transition-all"
                >
                  <span>Join as Creator</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="sm:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-purple-100 shadow-sm">
              <Image
                src="/creator_female_phone.png"
                alt="Creator showcasing talent"
                fill
                sizes="(max-width: 640px) 100vw, 220px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
            </div>

          </div>

          {/* Mobile Button (Explore Now >) */}
          <div className="sm:hidden pt-4">
            <button
              onClick={() => onOpenJoinModal('creator')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-1"
            >
              <span>Explore Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Business Card - Purple Theme */}
        <div className="glass-card-purple p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-br from-white via-purple-50/20 to-white flex flex-col justify-between group">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* Left Content */}
            <div className="sm:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 text-sm font-bold border border-purple-100">
                <Briefcase className="w-4 h-4 text-purple-600" />
                <span>For Businesses</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Find the perfect creators, promote your brand and achieve results.
              </p>

              <ul className="space-y-2.5 pt-1">
                {businessFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Desktop Button */}
              <div className="hidden sm:block pt-3">
                <button
                  onClick={() => onOpenJoinModal('business')}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-500/20 flex items-center gap-1.5 transition-all"
                >
                  <span>Join as Business</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Photo */}
            <div className="sm:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-purple-100 shadow-sm">
              <Image
                src="/business_male_suit.png"
                alt="Business Brand Executive"
                fill
                sizes="(max-width: 640px) 100vw, 220px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
            </div>

          </div>

          {/* Mobile Button (Explore Now >) */}
          <div className="sm:hidden pt-4">
            <button
              onClick={() => onOpenJoinModal('business')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-1"
            >
              <span>Explore Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
