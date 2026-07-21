'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (type: 'creator' | 'business' | 'general') => void;
}

export default function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Creators', href: '#creators' },
    { name: 'Businesses', href: '#businesses' },
    { name: 'Explore', href: '#explore' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources', hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('Home')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-purple-500 to-indigo-500 flex items-center justify-center p-[2px] shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-[#FAF8F5] rounded-full flex items-center justify-center">
                <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
                  C
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-none">
                Cofluensta
              </h1>
              <p className="text-[10px] text-purple-600/80 font-semibold tracking-wide">
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
                    isActive ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-gray-500" />}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-purple-600 rounded-full shadow-[0_0_8px_rgba(109,40,217,0.4)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Auth Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenJoinModal('general')}
              className="px-4 py-2 text-sm font-semibold text-purple-600 hover:text-purple-700 rounded-lg border border-purple-600/30 hover:border-purple-600/60 bg-purple-50/30 hover:bg-purple-50 transition-all duration-200"
            >
              Login
            </button>
            <button
              onClick={() => onOpenJoinModal('general')}
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-200"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 bg-white border border-gray-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5]/95 border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === link.name
                    ? 'bg-purple-50 text-purple-600 border border-purple-200'
                    : 'text-gray-600 hover:bg-gray-100/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal('general');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-purple-600 rounded-lg border border-purple-500/30 bg-purple-50/20"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal('general');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/20"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
