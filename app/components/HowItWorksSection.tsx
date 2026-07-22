'use client';

import React from 'react';
import { Search, Send, Handshake, TrendingUp } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Discover',
      description: 'Find the right creators or businesses.',
      icon: Search,
      iconColor: 'bg-purple-950/30 border-purple-500/20 text-purple-400 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]',
    },
    {
      number: '2',
      title: 'Connect',
      description: 'Send proposals and discuss opportunities.',
      icon: Send,
      iconColor: 'bg-indigo-950/30 border-indigo-500/20 text-indigo-400 group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]',
    },
    {
      number: '3',
      title: 'Collaborate',
      description: 'Work together and create amazing content.',
      icon: Handshake,
      iconColor: 'bg-violet-950/30 border-violet-500/20 text-violet-400 group-hover:border-violet-400 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.25)]',
    },
    {
      number: '4',
      title: 'Grow',
      description: 'Build your brand, reach more people and grow together.',
      icon: TrendingUp,
      iconColor: 'bg-blue-955/30 border-blue-500/20 text-blue-400 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]',
    },
  ];

  return (
    <section className="py-12 lg:py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Container Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/5 bg-[#0B0826]/40 backdrop-blur-xl shadow-sm">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-10 tracking-tight">
          How Cofluensta Works?
        </h2>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Desktop Interconnecting Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-[34px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-purple-900/30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  
                  {/* Icon Circle with Number Badge */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${step.iconColor}`}>
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-bold flex items-center justify-center border border-[#0B0826] shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-white mb-1.5 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 max-w-[200px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
