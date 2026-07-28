'use client';

import React, { useState, useEffect } from 'react';
import { PACKAGES } from '@/data/packages';
import { TravelPackage } from '@/types/travel';
import { Sparkles, Star, Users, ShieldCheck, ArrowRight, MessageCircle, MapPin, Compass, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOpenInquiry: (tripTitle?: string) => void;
  onSelectPackage: (pkg: TravelPackage) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onOpenInquiry,
  onSelectPackage,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-scroll cards from right to left every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % PACKAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const currentTrip = PACKAGES[activeSlide] || PACKAGES[0];

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-200">
      
      {/* Background High-Res Travel Image with Dark Gradient Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop"
          alt="Himalayan Travel Background"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />
      </div>

      {/* Balanced Compact Height Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Medium Headlines & Actions */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs sm:text-sm font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>India’s #1 Rated Youth & Group Travel Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
              Explore The Unexplored <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                Create Lifelong Memories
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl drop-shadow">
              Curated group backpacking trips, Himalayan treks, and exotic staycations with certified captains and 100% verified co-travelers.
            </p>

            {/* Quick Trending Destination Pills */}
            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                <span>Popular Circuits:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {['🏔️ Spiti Valley', '🌧️ Meghalaya', '❄️ Kashmir', '🏍️ Ladakh', '🌴 Bali'].map((destName, i) => {
                  const matchedPkg = PACKAGES.find((p) => destName.toLowerCase().includes(p.destination.toLowerCase()));
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        if (matchedPkg) {
                          onSelectPackage(matchedPkg);
                        } else {
                          onExploreClick();
                        }
                      }}
                      className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition active:scale-95 cursor-pointer"
                    >
                      {destName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto bg-gradient-to-r from-[#2956B1] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-[#2956B1]/30 flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={() => onOpenInquiry('Custom Itinerary Request')}
                className="w-full sm:w-auto bg-white/95 hover:bg-white text-slate-900 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                <span>WhatsApp Quote</span>
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/15 text-slate-200">
              <div>
                <div className="flex items-center gap-1 font-black text-xl text-white">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>50,000+</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Happy Travelers</div>
              </div>

              <div>
                <div className="flex items-center gap-1 font-black text-xl text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Google Rating</div>
              </div>

              <div>
                <div className="flex items-center gap-1 font-black text-xl text-emerald-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Safe</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">Solo Female Trips</div>
              </div>
            </div>

          </div>

          {/* Right Column: Auto-Scrolling Featured Tour Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-4.5 rounded-3xl shadow-xl space-y-3.5">
              
              {/* Clickable Image Card */}
              <div
                onClick={() => onSelectPackage(currentTrip)}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/20 group cursor-pointer"
              >
                <img
                  key={currentTrip.coverImage}
                  src={currentTrip.coverImage}
                  alt={currentTrip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Badge */}
                {currentTrip.badge && (
                  <div className="absolute top-3 left-3 bg-[#2956B1] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md animate-fadeIn">
                    {currentTrip.badge}
                  </div>
                )}

                {/* Details Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white animate-fadeIn">
                  <div>
                    <div className="text-xs font-bold text-blue-300">{currentTrip.category}</div>
                    <div className="text-lg font-black leading-tight drop-shadow">{currentTrip.title}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[10px] text-slate-300 line-through">₹{currentTrip.originalPrice.toLocaleString('en-IN')}</div>
                    <div className="text-xl font-black text-amber-300">₹{currentTrip.discountedPrice.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              </div>

              {/* Quick Perks */}
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-200">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 flex items-center gap-2 truncate">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="truncate">{currentTrip.pickupLocation}</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 flex items-center gap-2 truncate">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{currentTrip.durationDays} Days / {currentTrip.durationNights} Nights</span>
                </div>
              </div>

              {/* Card Action & Controls */}
              <div className="flex items-center gap-2.5 pt-1">
                <button
                  onClick={() => onSelectPackage(currentTrip)}
                  className="flex-1 bg-gradient-to-r from-[#2956B1] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition cursor-pointer active:scale-95"
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveSlide((prev) => (prev === 0 ? PACKAGES.length - 1 : prev - 1))}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition cursor-pointer"
                    title="Previous Trip"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveSlide((prev) => (prev + 1) % PACKAGES.length)}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition cursor-pointer"
                    title="Next Trip"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-1">
                {PACKAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx ? 'w-6 bg-blue-400' : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
