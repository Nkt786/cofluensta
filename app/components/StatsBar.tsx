'use client';

import React from 'react';
import { Users, Building2, Gift, MapPin, Star } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      id: 1,
      value: '100K+',
      label: 'Active Creators',
      mobileLabel: 'Creators',
      icon: Users,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      id: 2,
      value: '10K+',
      label: 'Businesses',
      mobileLabel: 'Businesses',
      icon: Building2,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      id: 3,
      value: '50K+',
      label: 'Successful Collabs',
      mobileLabel: 'Collaborations',
      icon: Gift,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      id: 4,
      value: '500+',
      label: 'Cities',
      mobileLabel: 'Cities',
      icon: MapPin,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
      desktopOnly: true,
    },
    {
      id: 5,
      value: '4.8/5',
      label: 'User Rating',
      mobileLabel: 'User Rating',
      icon: Star,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
      isStar: true,
    },
  ];

  return (
    <section className="relative z-20 py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Desktop Horizontal Glass Container */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-4 glass-panel p-6 rounded-2xl border border-gray-200/80 bg-white/70 shadow-sm">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="flex items-center gap-3.5 px-2 py-1">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${stat.iconBg} shadow-sm`}>
                <Icon className={`w-5 h-5 ${stat.isStar ? 'fill-purple-500 text-purple-500' : ''}`} />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 leading-tight">
                  {stat.value}
                </h3>
                <p className="text-xs text-gray-500 font-semibold">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile 4-Item (2x2) Responsive Grid Container (Matching Image 2) */}
      <div className="grid lg:hidden grid-cols-2 gap-3 sm:gap-4">
        {stats.filter(s => !s.desktopOnly).map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="glass-panel p-4 rounded-xl border border-gray-200/80 bg-white/95 flex flex-col items-center text-center space-y-2 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${stat.iconBg}`}>
                <Icon className={`w-5 h-5 ${stat.isStar ? 'fill-purple-500 text-purple-500' : ''}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {stat.value}
                </h3>
                <p className="text-xs text-gray-500 font-semibold mt-0.5">
                  {stat.mobileLabel}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
