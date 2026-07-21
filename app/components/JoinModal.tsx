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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-900/10 animate-subtle-pulse">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-50 border border-gray-200 text-gray-400 hover:text-gray-900"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-purple-600 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Get Started Free</span>
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
              Join Cofluensta
            </h3>

            {/* Role Switcher Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-xl border border-gray-200 mb-6">
              <button
                type="button"
                onClick={() => setRole('creator')}
                className={`py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  role === 'creator'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Creator</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('business')}
                className={`py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  role === 'business'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Business</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  {role === 'creator' ? 'Instagram/YouTube Handle' : 'Company / Brand Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={role === 'creator' ? '@rahul_tech' : 'Acme Brands'}
                  value={formData.handleOrCompany}
                  onChange={(e) => setFormData({ ...formData, handleOrCompany: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-500/20"
              >
                Submit Application
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Application Received!</h3>
            <p className="text-sm text-gray-600">
              Thank you {formData.name}. Our team will review your application and contact you shortly.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
