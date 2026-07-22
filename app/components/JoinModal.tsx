'use client';

import React, { useState } from 'react';
import { X, User, Briefcase, Sparkles, Check } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  initialType: 'creator' | 'business' | 'general';
  onClose: () => void;
}

export default function JoinModal({ isOpen, initialType, onClose }: JoinModalProps) {
  const [role, setRole] = useState<'creator' | 'business'>(
    initialType === 'business' ? 'business' : 'creator'
  );
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    handleOrCompany: '',
    category: 'Lifestyle',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0A071E] border border-purple-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#131135] border border-purple-500/10 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Get Started Free</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-6">
              Join Cofluensta
            </h3>

            {/* Role Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#131135] rounded-xl border border-purple-500/10 mb-6">
              <button
                type="button"
                onClick={() => setRole('creator')}
                className={`py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  role === 'creator'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Creator</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('business')}
                className={`py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  role === 'business'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Business</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#131135] border border-purple-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-[#1a1749] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#131135] border border-purple-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-[#1a1749] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {role === 'creator' ? 'Instagram/YouTube Handle' : 'Company / Brand Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={role === 'creator' ? '@rahul_tech' : 'Acme Brands'}
                  value={formData.handleOrCompany}
                  onChange={(e) => setFormData({ ...formData, handleOrCompany: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#131135] border border-purple-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:bg-[#1a1749] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-500/20 cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-900/30 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-sm text-slate-350">
              Thank you {formData.name}. Our team will review your application and contact you shortly.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
