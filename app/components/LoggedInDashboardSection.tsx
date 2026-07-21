'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserState } from './HeroSection';
import { 
  Flame, CheckCircle2, ArrowUpRight, DollarSign, Clock, MessageSquare, 
  Sparkles, Building2, Users, FileText, CheckSquare, Zap, Star, ShieldCheck, Filter
} from 'lucide-react';

interface LoggedInDashboardSectionProps {
  currentUser: UserState;
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
  onOpenFeedModal: () => void;
}

export default function LoggedInDashboardSection({ currentUser, onOpenJoinModal, onOpenFeedModal }: LoggedInDashboardSectionProps) {
  const [creatorTab, setCreatorTab] = useState<'briefs' | 'active' | 'payouts'>('briefs');
  const [businessTab, setBusinessTab] = useState<'applicants' | 'campaigns' | 'ai'>('applicants');

  // CREATOR LOGGED IN VIEW (Sejal)
  if (currentUser.role === 'creator') {
    return (
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        {/* Header Ticker */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-black flex items-center gap-2">
                <span>Sejal&apos;s Live Opportunity Feed</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </h2>
              <p className="text-xs text-purple-200 font-medium">3 brand briefs matching your Lifestyle & Beauty niche</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCreatorTab('briefs')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                creatorTab === 'briefs' ? 'bg-white text-purple-950 shadow-md' : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              🔥 Brand Deals (3)
            </button>
            <button
              onClick={() => setCreatorTab('active')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                creatorTab === 'active' ? 'bg-white text-purple-950 shadow-md' : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              💼 Active Projects (2)
            </button>
            <button
              onClick={() => setCreatorTab('payouts')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                creatorTab === 'payouts' ? 'bg-white text-purple-950 shadow-md' : 'bg-white/10 text-purple-200 hover:bg-white/20'
              }`}
            >
              💰 Payouts ($3.2K)
            </button>
          </div>
        </div>

        {/* Tab 1: Live Brand Briefs */}
        {creatorTab === 'briefs' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500 fill-amber-400" />
                <span>Recommended Brand Opportunities for Sejal</span>
              </h3>
              <button 
                onClick={onOpenFeedModal}
                className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Explore 120+ All Deals</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1: BoAt */}
              <div className="p-5 rounded-3xl bg-white border-2 border-purple-200 shadow-md hover:shadow-xl transition-all space-y-4 relative">
                <span className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  98% Profile Match
                </span>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white font-black flex items-center justify-center text-sm shadow-md">
                    BoAt
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      BoAt Lifestyle <CheckCircle2 className="w-4 h-4 text-purple-600 fill-purple-100" />
                    </h4>
                    <span className="text-[10px] text-gray-500 font-semibold">Verified Corporate Brand</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-base font-extrabold text-gray-900 leading-snug">Wireless Earbuds Launch Reel</h5>
                  <p className="text-xs text-gray-600 mt-1">Create 1 aesthetic lifestyle unboxing reel featuring noise cancellation.</p>
                </div>

                <div className="p-3 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-gray-500 font-bold uppercase">Budget Offer</p>
                    <p className="text-base font-black text-purple-700">$1,200</p>
                  </div>
                  <span className="text-[11px] font-bold text-purple-600 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 3 Days Left
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button 
                    onClick={() => onOpenJoinModal('creator')}
                    className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md cursor-pointer"
                  >
                    <span>Accept & Pitch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onOpenJoinModal('general')}
                    className="px-3 py-2.5 rounded-xl border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 text-xs font-bold cursor-pointer"
                  >
                    Chat
                  </button>
                </div>
              </div>

              {/* Card 2: Myntra */}
              <div className="p-5 rounded-3xl bg-white border border-purple-100 shadow-md hover:shadow-xl transition-all space-y-4 relative">
                <span className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full bg-pink-100 text-pink-800 border border-pink-200">
                  Fashion Haul
                </span>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white font-black flex items-center justify-center text-sm shadow-md">
                    MYN
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      Myntra Fashion <CheckCircle2 className="w-4 h-4 text-purple-600 fill-purple-100" />
                    </h4>
                    <span className="text-[10px] text-gray-500 font-semibold">Top E-Commerce Partner</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-base font-extrabold text-gray-900 leading-snug">Festive Streetwear Lookbook</h5>
                  <p className="text-xs text-gray-600 mt-1">Style 3 outfits from our new autumn collection on IG Reels & YouTube Shorts.</p>
                </div>

                <div className="p-3 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-gray-500 font-bold uppercase">Budget Offer</p>
                    <p className="text-base font-black text-pink-700">$3,500</p>
                  </div>
                  <span className="text-[11px] font-bold text-pink-600 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 5 Days Left
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button 
                    onClick={() => onOpenJoinModal('creator')}
                    className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md cursor-pointer"
                  >
                    <span>Send Pitch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onOpenJoinModal('general')}
                    className="px-3 py-2.5 rounded-xl border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 text-xs font-bold cursor-pointer"
                  >
                    Chat
                  </button>
                </div>
              </div>

              {/* Card 3: L'Oréal */}
              <div className="p-5 rounded-3xl bg-white border border-purple-100 shadow-md hover:shadow-xl transition-all space-y-4 relative">
                <span className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Beauty & Glow
                </span>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white font-black flex items-center justify-center text-sm shadow-md">
                    LOR
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      L&apos;Oréal Paris <CheckCircle2 className="w-4 h-4 text-purple-600 fill-purple-100" />
                    </h4>
                    <span className="text-[10px] text-gray-500 font-semibold">Global Beauty Partner</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-base font-extrabold text-gray-900 leading-snug">Hyaluronic Serum Review</h5>
                  <p className="text-xs text-gray-600 mt-1">7-day skincare transformation video with before/after glow results.</p>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-gray-500 font-bold uppercase">Budget Offer</p>
                    <p className="text-base font-black text-emerald-700">$2,000</p>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 2 Days Left
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button 
                    onClick={() => onOpenJoinModal('creator')}
                    className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md cursor-pointer"
                  >
                    <span>Send Pitch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onOpenJoinModal('general')}
                    className="px-3 py-2.5 rounded-xl border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 text-xs font-bold cursor-pointer"
                  >
                    Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Active Projects Tracker */}
        {creatorTab === 'active' && (
          <div className="p-6 rounded-3xl bg-white border-2 border-purple-200 shadow-md space-y-4">
            <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-purple-600" />
              <span>Sejal&apos;s Active Deliverables Checklist</span>
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">BoAt Earbuds Reel — Video Draft</h4>
                  <p className="text-xs text-gray-600">Due Date: Aug 18, 2026 • Payment: $1,200 Held in Escrow</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    80% Complete
                  </span>
                  <button 
                    onClick={() => onOpenJoinModal('creator')}
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-sm cursor-pointer"
                  >
                    Upload Final Cut
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Payouts */}
        {creatorTab === 'payouts' && (
          <div className="p-6 rounded-3xl bg-white border-2 border-purple-200 shadow-md space-y-4">
            <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600" />
              <span>Sejal&apos;s Earnings Summary</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <p className="text-xs text-emerald-800 font-bold">Available Payout</p>
                <p className="text-2xl font-black text-emerald-700 mt-1">$2,400.00</p>
                <button 
                  onClick={() => onOpenJoinModal('general')}
                  className="mt-3 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer shadow-sm"
                >
                  Withdraw to Bank
                </button>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200">
                <p className="text-xs text-purple-800 font-bold">Pending Escrow</p>
                <p className="text-2xl font-black text-purple-700 mt-1">$800.00</p>
                <p className="text-[11px] text-gray-500 mt-1">Releases upon BoAt video approval</p>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  // BUSINESS LOGGED IN VIEW (Nikhil)
  if (currentUser.role === 'business') {
    return (
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        {/* Header Ticker */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center text-white">
              <Building2 className="w-6 h-6 text-indigo-300 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-black flex items-center gap-2">
                <span>Nikhil&apos;s Campaign Management Hub</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </h2>
              <p className="text-xs text-indigo-200 font-medium">18 verified creator applications for Tech Unboxing 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBusinessTab('applicants')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                businessTab === 'applicants' ? 'bg-white text-indigo-950 shadow-md' : 'bg-white/10 text-indigo-200 hover:bg-white/20'
              }`}
            >
              👥 Applicants (18)
            </button>
            <button
              onClick={() => setBusinessTab('campaigns')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                businessTab === 'campaigns' ? 'bg-white text-indigo-950 shadow-md' : 'bg-white/10 text-indigo-200 hover:bg-white/20'
              }`}
            >
              📊 Active Campaigns (3)
            </button>
          </div>
        </div>

        {/* Tab 1: Creator Applications Feed */}
        {businessTab === 'applicants' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span>Creator Applications for Nikhil&apos;s Campaign</span>
              </h3>
              <button 
                onClick={onOpenFeedModal}
                className="text-xs font-bold text-indigo-700 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <span>View All 18 Applicants</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Applicant 1: Rohan */}
              <div className="p-5 rounded-3xl bg-white border-2 border-indigo-200 shadow-md hover:shadow-xl transition-all space-y-4 relative">
                <span className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  98% AI Match
                </span>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md">
                    <Image src="/creator_male_camera.png" alt="Rohan" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      Rohan Verma <CheckCircle2 className="w-4 h-4 text-indigo-600 fill-indigo-100" />
                    </h4>
                    <span className="text-[10px] text-indigo-600 font-semibold">120K Followers • Tech</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs text-gray-500 uppercase font-bold">Pitch Quote</h5>
                  <p className="text-lg font-black text-indigo-700">$800 / Video</p>
                  <p className="text-xs text-gray-600 mt-1">&quot;Can deliver 4K gadget review within 48 hours. 8.4% engagement rate.&quot;</p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button 
                    onClick={() => onOpenJoinModal('business')}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md cursor-pointer"
                  >
                    <span>Hire Creator</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onOpenJoinModal('general')}
                    className="px-3 py-2.5 rounded-xl border border-indigo-200 bg-white hover:bg-indigo-50 text-indigo-700 text-xs font-bold cursor-pointer"
                  >
                    Media Kit
                  </button>
                </div>
              </div>

              {/* Applicant 2: Ananya */}
              <div className="p-5 rounded-3xl bg-white border border-indigo-100 shadow-md hover:shadow-xl transition-all space-y-4 relative">
                <span className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                  94% AI Match
                </span>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500 shadow-md">
                    <Image src="/creator_female_camera.png" alt="Ananya" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      Ananya Sharma <CheckCircle2 className="w-4 h-4 text-purple-600 fill-purple-100" />
                    </h4>
                    <span className="text-[10px] text-purple-600 font-semibold">85K Followers • Lifestyle</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs text-gray-500 uppercase font-bold">Pitch Quote</h5>
                  <p className="text-lg font-black text-indigo-700">$600 / Reel</p>
                  <p className="text-xs text-gray-600 mt-1">&quot;Aesthetic gadget integration reel targeting female tech buyers.&quot;</p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button 
                    onClick={() => onOpenJoinModal('business')}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md cursor-pointer"
                  >
                    <span>Hire Creator</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onOpenJoinModal('general')}
                    className="px-3 py-2.5 rounded-xl border border-indigo-200 bg-white hover:bg-indigo-50 text-indigo-700 text-xs font-bold cursor-pointer"
                  >
                    Media Kit
                  </button>
                </div>
              </div>

              {/* Applicant 3: Vikram */}
              <div className="p-5 rounded-3xl bg-white border border-indigo-100 shadow-md hover:shadow-xl transition-all space-y-4 relative">
                <span className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  91% AI Match
                </span>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md">
                    <Image src="/creator_male_glasses.png" alt="Vikram" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                      Vikram Patel <CheckCircle2 className="w-4 h-4 text-indigo-600 fill-indigo-100" />
                    </h4>
                    <span className="text-[10px] text-indigo-600 font-semibold">95K Followers • Strategy</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-xs text-gray-500 uppercase font-bold">Pitch Quote</h5>
                  <p className="text-lg font-black text-indigo-700">$1,000 / Review</p>
                  <p className="text-xs text-gray-600 mt-1">&quot;Comprehensive software breakdown and productivity app sponsorship.&quot;</p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button 
                    onClick={() => onOpenJoinModal('business')}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md cursor-pointer"
                  >
                    <span>Hire Creator</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onOpenJoinModal('general')}
                    className="px-3 py-2.5 rounded-xl border border-indigo-200 bg-white hover:bg-indigo-50 text-indigo-700 text-xs font-bold cursor-pointer"
                  >
                    Media Kit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  // DEFAULT VISITOR LOGGED OUT VIEW (Renders standard marketing cards)
  return null;
}
