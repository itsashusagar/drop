'use client';

import React from 'react';
import {
  ShieldCheck, Star, Award, MapPin, Compass, HeartHandshake,
  CheckCircle2, Sparkles, MessageCircle, ArrowRight
} from 'lucide-react';

export interface TripCaptain {
  id: string;
  name: string;
  role: string;
  photo: string;
  expeditionsCount: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  certifications: string[];
  languages: string[];
  quote: string;
  badge: string;
}

export const CAPTAINS: TripCaptain[] = [
  {
    id: 'c1',
    name: 'Captain Aman Sharma',
    role: 'Senior High-Altitude Captain',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    expeditionsCount: '58+ Expeditions',
    specialty: 'Spiti Valley & Leh Ladakh Circuits',
    rating: 4.98,
    reviewsCount: 215,
    certifications: ['NIM Mountaineering Certified', 'Wilderness First Responder'],
    languages: ['Hindi', 'English', 'Himachali'],
    quote: "Traveling isn't just about reaching Kaza; it's about sharing hot chai at 14,000 ft with 15 strangers who become family.",
    badge: 'Spiti Specialist',
  },
  {
    id: 'c2',
    name: 'Captain Riya Sen',
    role: 'Lead Female Trip Captain & Safety Lead',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    expeditionsCount: '45+ Batches Led',
    specialty: 'Meghalaya, Kashmir & Solo Female Batches',
    rating: 5.0,
    reviewsCount: 184,
    certifications: ['Solo Female Safety Lead', 'First Aid Certified Lead'],
    languages: ['English', 'Hindi', 'Bengali'],
    quote: "My goal on every batch is ensuring every solo girl feels 100% safe, respected, and leaves with lifelong best friends.",
    badge: 'Solo Female Safety Lead',
  },
  {
    id: 'c3',
    name: 'Captain Vikram Negi',
    role: 'Himalayan Trek & Expedition Lead',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    expeditionsCount: '72+ Treks Led',
    specialty: 'Kedarnath Dham, Valley of Flowers & Manali',
    rating: 4.96,
    reviewsCount: 248,
    certifications: ['High Altitude Rescue Certified', 'Local Himalayan Native'],
    languages: ['Hindi', 'English', 'Garhwali'],
    quote: "When weather turns unpredictable in the mountains, having a local lead who knows every stone makes all the difference.",
    badge: 'Trek Commander',
  },
  {
    id: 'c4',
    name: 'Captain Kabir Arora',
    role: 'International & Cultural Expedition Lead',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    expeditionsCount: '38+ International Tours',
    specialty: 'Bali Island, Thailand & Rajasthan Backpacking',
    rating: 4.95,
    reviewsCount: 162,
    certifications: ['Scuba Certified Guide', 'Cultural Heritage Lead'],
    languages: ['English', 'Hindi', 'Punjabi'],
    quote: "From Bali beaches to Jaisalmer dunes, we craft vibe-filled memories that stay in your heart forever.",
    badge: 'International Lead',
  },
];

export const TripCaptains: React.FC = () => {
  const handleCaptainInquiry = (captainName: string) => {
    const text = `Hello Trip With Safarwala! I want to know upcoming batch dates for *${captainName}*. Please share details!`;
    window.open(`https://wa.me/919560798341?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="captains" className="py-16 sm:py-24 bg-white border-t border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#2956B1] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>The Heart & Soul Of Every Trip</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Meet Our Certified Trip Captains
          </h2>

          <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed">
            Every Safarwala group trip is led by certified mountaineers, first-aid leads, and local experience experts. They manage your logistics, safety, and create unforgettable memories!
          </p>
        </div>

        {/* Captain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPTAINS.map((cap) => (
            <div
              key={cap.id}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-5 flex flex-col justify-between group hover:border-[#2956B1] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div>
                {/* Photo & Badge Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-slate-200 shadow-md">
                  <img
                    src={cap.photo}
                    alt={cap.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Top Specialty Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1 shadow-lg">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>{cap.badge}</span>
                  </div>

                  {/* Rating Tag Bottom */}
                  <div className="absolute bottom-3 right-3 bg-white text-slate-900 font-extrabold text-xs px-2.5 py-1 rounded-xl shadow-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{cap.rating}</span>
                    <span className="text-slate-400 text-[10px] font-semibold">({cap.reviewsCount})</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#2956B1] transition">
                    {cap.name}
                  </h3>
                  <div className="text-xs font-bold text-[#2956B1] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100 w-fit">
                    {cap.expeditionsCount}
                  </div>
                </div>

                {/* Specialty & Certifications */}
                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                    <Compass className="w-3.5 h-3.5 text-[#2956B1] shrink-0" />
                    <span className="truncate">{cap.specialty}</span>
                  </div>

                  {/* Certifications Chips */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cap.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        <span>{cert}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 italic font-medium leading-relaxed mb-4 bg-white p-3 rounded-xl border border-slate-200/80">
                  "{cap.quote}"
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleCaptainInquiry(cap.name)}
                className="w-full bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs py-2.5 rounded-xl border border-slate-300 flex items-center justify-center gap-2 transition active:scale-95 shadow-sm cursor-pointer"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>Ask Batch Dates</span>
              </button>

            </div>
          ))}
        </div>

        {/* Safety Banner Footnote */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-white">
                100% Certified Safety & First-Aid Protocol
              </h4>
              <p className="text-xs text-slate-300 mt-0.5 max-w-2xl">
                All Safarwala trip captains carry O2 cylinders, medical kits, satellite GPS communicators (for high altitude treks), and adhere to strict solo female traveler safety guidelines.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919560798341?text=Hi%20Safarwala!%20I%20want%20to%20know%20more%20about%20your%20trip%20captains%20and%20safety%20protocol."
            target="_blank"
            rel="noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-5 py-3 rounded-xl flex items-center gap-2 shrink-0 transition active:scale-95 shadow-md"
          >
            <span>Learn About Safety</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
