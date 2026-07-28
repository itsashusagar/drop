'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Wallet, Sparkles, HeartHandshake, Headphones, CheckCircle2, ArrowRight, MessageCircle, Heart } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2956B1]" />,
      title: 'Solo Female Friendly',
      description: 'Dedicated female captains, safe homestays, and verified co-traveler background checks.',
      tag: '100% Verified Safety',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#2956B1]" />,
      title: 'Certified Trip Captains',
      description: 'Passionate trip leaders trained in high-altitude first aid, local culture & photography.',
      tag: 'First-Aid Certified',
    },
    {
      icon: <Wallet className="w-6 h-6 text-[#2956B1]" />,
      title: 'Zero Hidden Costs',
      description: 'Transparent pricing with no surprise taxes or unexpected on-ground surcharges.',
      tag: 'Fixed Fair Pricing',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#2956B1]" />,
      title: '50,000+ Youth Community',
      description: 'Vibrant group dynamics designed for college grads, working professionals & solo backpackers.',
      tag: 'Vibrant Vibe',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#2956B1]" />,
      title: 'Customized & Flexible Batches',
      description: 'Need private dates for your group? We tailor dates, Volvo seats & boutique stays.',
      tag: 'Customizable Dates',
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#2956B1]" />,
      title: '24/7 On-Ground Assistance',
      description: 'Dedicated operational team monitoring weather updates, road permits & safety 24x7.',
      tag: '24x7 Live Ops',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2956B1] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Trip With Safarwala Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Why 50,000+ Backpackers Travel With Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            We don’t just book trips — we curate life-changing group travel experiences with absolute safety, comfort, and authentic local vibes.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 hover:border-[#2956B1]/50 p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 group shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    {pt.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#2956B1] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {pt.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-lg text-slate-900 mb-2 group-hover:text-[#2956B1] transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {pt.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Guaranteed Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
