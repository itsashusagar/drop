'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { InquiryModal } from '@/components/InquiryModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Sparkles, Award, ShieldCheck, Users, Heart, Target, Compass, MapPin, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTripTitle, setInquiryTripTitle] = useState('');

  const handleOpenInquiry = (title: string = '') => {
    setInquiryTripTitle(title);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar
        wishlistCount={0}
        onOpenInquiry={handleOpenInquiry}
        onOpenWishlist={() => {}}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-[#2956B1]_1px,transparent_1px] [background-size:16px_16px]" />
        
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-amber-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>India's Premier Youth Travel Movement</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            We Don't Sell Packages, We Create <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">Life-Changing Safars</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Trip With Safarwala was born out of a simple passion: to make Himalayan road trips, high-altitude treks, and group backpacking trips safe, budget-friendly, and unforgettable for young Indian travelers.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-amber-300">50,000+</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Happy Backpackers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-amber-300">150+</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Fixed Departure Batches</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-amber-300">4.9 ★</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Google Reviews Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-amber-300">100%</div>
              <div className="text-xs text-slate-300 font-semibold mt-1">Safety Track Record</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story & Mission */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[#2956B1] font-extrabold text-xs tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              <span>Our Core Purpose</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Transforming Solo Travelers into a Lifelong Tribe of Explorers
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded with headquarters in New Delhi, Safarwala has grown into a trusted community for solo travelers, groups of friends, and first-time adventurers. Whether driving through the stark landscapes of Spiti Valley, trekking under stars at Kedarnath, or diving into the crystal-clear waters of Dawki, we handle every detail—from certified mountain captains to comfortable stays and hygienic food.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Solo Female Friendly & Safe Environment</h4>
                  <p className="text-xs text-slate-500">Over 40% of our group trip participants are solo female travelers. We ensure 24/7 dedicated trip captain supervision and female-friendly room allocations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Certified High-Altitude Mountain Leads</h4>
                  <p className="text-xs text-slate-500">Every batch is led by experienced Trip Captains certified in Wilderness First Aid (WAFA) and high-altitude emergency protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Hidden Charges Guarantee</h4>
                  <p className="text-xs text-slate-500">Transparent pricing with explicit inclusions for transport, meals, stays, driver allowances, and permits.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#2956B1] to-blue-500 rounded-3xl blur-lg opacity-25" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white p-6 space-y-6">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                alt="Himalayan Group Trip"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <Award className="w-6 h-6 text-[#2956B1] mb-2" />
                  <h4 className="font-extrabold text-sm text-slate-900">ISO 9001:2015</h4>
                  <p className="text-[11px] text-slate-500">Quality Service Certified</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 mb-2" />
                  <h4 className="font-extrabold text-sm text-slate-900">Govt. Registered</h4>
                  <p className="text-[11px] text-slate-500">Recognized Travel Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Grid */}
        <div className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900">The Safarwala Difference</h2>
            <p className="text-xs text-slate-500 mt-2">Why thousands of travelers choose us for their dream vacations every month</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2956B1] flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">Curated Group Dynamics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handpick participants for our group batches to ensure balanced age groups, positive vibes, bonfires, music, and lasting friendships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">Safety & First Aid Ready</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From portable oxygen cylinders on high altitude passes to 24/7 medical contact support, traveler safety is our non-negotiable priority.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">Local Eco Community</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We support local Himalayan homestays, village guides, and eco-friendly mountain practices, ensuring zero plastic waste on trails.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#2956B1] via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Start Your Safar?</h3>
            <p className="text-xs sm:text-sm text-blue-100">Talk to our travel experts or explore our upcoming Himalayan departure batches.</p>
          </div>
          <button
            onClick={() => handleOpenInquiry('About Us CTA - Custom Plan')}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs px-6 py-3.5 rounded-full shadow-lg transition active:scale-95 flex items-center gap-2 shrink-0"
          >
            <span>Plan My Trip</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      <Footer />

      <WhatsAppButton />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultTripTitle={inquiryTripTitle}
      />
    </div>
  );
}
