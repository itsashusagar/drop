'use client';

import React from 'react';
import { Users, Compass, Star, Award, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export const TourStats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-[#2956B1]" />,
      value: '50,000+',
      label: 'Happy Travelers',
      description: 'Backpackers, solo female travelers & college grads across India',
      bgImage: 'https://images.unsplash.com/photo-1539635273304-0e8723578d16?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#2956B1]" />,
      value: '250+',
      label: 'Successful Group Batches',
      description: 'Flawlessly executed road trips across Spiti, Meghalaya & Ladakh',
      bgImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#2956B1]" />,
      value: '40+',
      label: 'Exotic Destinations',
      description: 'Offbeat mountain valleys, desert circuits & tropical island staycations',
      bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Star className="w-6 h-6 fill-amber-400 text-amber-400" />,
      value: '4.9 ★',
      label: 'Average Google Rating',
      description: 'Over 2,500+ verified customer reviews across platforms',
      bgImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <Award className="w-6 h-6 text-[#2956B1]" />,
      value: '100+',
      label: 'Verified Trip Captains',
      description: 'High-altitude first aid certified, friendly local travel guides',
      bgImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2956B1]" />,
      value: '99.8%',
      label: 'On-Time Execution',
      description: 'Punctual luxury AC Volvo buses, tempo travelers & 4x4 mountain vehicles',
      bgImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Soft Light Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/70 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2956B1] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#2956B1]" />
            <span>Our Achievements In Numbers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Tours Statistics & Impact
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Over the years, Trip With Safarwala has built India’s most trusted youth travel community. Here is a glimpse of our journey.
          </p>
        </div>

        {/* 6 Light Glassmorphism Stat Cards with Photo Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden border border-slate-200 hover:border-[#2956B1]/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 group min-h-[220px] flex flex-col justify-between bg-white"
            >
              {/* Background Photo with Soft Light Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={stat.bgImage}
                  alt={stat.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/70" />
              </div>

              {/* Light Inner Content */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    {stat.icon}
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-[#2956B1] tracking-tight">
                    {stat.value}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 mb-1 group-hover:text-[#2956B1] transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
