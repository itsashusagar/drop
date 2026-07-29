'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { InquiryModal } from '@/components/InquiryModal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PACKAGES } from '@/data/packages';
import { MapPin, Calendar, Clock, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTripTitle, setInquiryTripTitle] = useState('');

  const handleOpenInquiry = (title: string = '') => {
    setInquiryTripTitle(title);
    setInquiryModalOpen(true);
  };

  // Regions list
  const regions = ['All', 'Himachal Pradesh', 'Uttarakhand', 'Leh & Ladakh', 'North East India', 'International'];

  // Categorize packages by region
  const filteredPackages = useMemo(() => {
    if (selectedRegion === 'All') return PACKAGES;
    return PACKAGES.filter((p) => {
      if (selectedRegion === 'Himachal Pradesh') return p.destination.includes('Spiti') || p.destination.includes('Manali') || p.destination.includes('Kasol');
      if (selectedRegion === 'Uttarakhand') return p.destination.includes('Kedarnath') || p.destination.includes('Chopta') || p.destination.includes('Rishikesh');
      if (selectedRegion === 'Leh & Ladakh') return p.destination.includes('Leh') || p.destination.includes('Ladakh');
      if (selectedRegion === 'North East India') return p.destination.includes('Meghalaya') || p.destination.includes('Sikkim') || p.destination.includes('Assam');
      if (selectedRegion === 'International') return p.destination.includes('Bali') || p.destination.includes('Dubai') || p.destination.includes('Thailand');
      return true;
    });
  }, [selectedRegion]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar
        wishlistCount={0}
        onOpenInquiry={handleOpenInquiry}
        onOpenWishlist={() => {}}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-amber-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          <span>Handpicked Travel Destinations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          Explore Trending <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">Himalayan & Overseas Circuits</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          From high-altitude cold deserts of Spiti to holy treks of Kedarnath and pristine waterfalls of Meghalaya. Discover our top departure circuits.
        </p>
      </section>

      {/* Region Selector Pills */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8 flex-1">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all duration-200 ${
                selectedRegion === region
                  ? 'bg-[#2956B1] text-white shadow-md shadow-[#2956B1]/20 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Card Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={pkg.coverImage || pkg.galleryImages[0]}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#2956B1] shadow-sm uppercase tracking-wider">
                    {pkg.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 font-black text-[11px] px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-slate-950" />
                    <span>{pkg.rating}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300 mb-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{pkg.destination}</span>
                    </div>
                    <h3 className="font-extrabold text-lg line-clamp-1 text-white leading-tight">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-200/60 font-semibold text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2956B1]" />
                      <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{pkg.batchDates.length} Batches Open</span>
                    </div>
                  </div>

                  {/* Highlights preview */}
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Top Highlights:</div>
                    <ul className="text-xs text-slate-700 space-y-1">
                      {pkg.highlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2956B1] shrink-0" />
                          <span className="truncate">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Price & CTA */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold">Starting From</div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-black text-slate-900">₹{pkg.discountedPrice.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-400 line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <Link
                  href={`/package/${pkg.slug}`}
                  className="bg-[#2956B1] hover:bg-blue-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md transition active:scale-95 flex items-center gap-1"
                >
                  <span>View Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

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
