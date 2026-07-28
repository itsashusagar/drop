'use client';

import React from 'react';
import { TravelPackage } from '@/types/travel';
import { Clock, MapPin, Star, Heart, ArrowRight, MessageCircle, Check, Building, Car, Utensils, Compass, Flame } from 'lucide-react';

interface PackageCardProps {
  pkg: TravelPackage;
  isWishlisted: boolean;
  onToggleWishlist: (pkgId: string) => void;
  onSelectPackage: (pkg: TravelPackage) => void;
  onOpenInquiry: (tripTitle: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  isWishlisted,
  onToggleWishlist,
  onSelectPackage,
  onOpenInquiry,
}) => {
  const discountPercent = Math.round(
    ((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100
  );

  return (
    <div className="bg-white border border-slate-200 hover:border-[#2956B1]/60 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col group text-slate-900 shadow-md">
      
      {/* Cover Image & Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={pkg.coverImage}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

        {/* Top Left Badge */}
        {pkg.badge ? (
          <div className="absolute top-3.5 left-3.5 bg-gradient-to-r from-[#2956B1] to-blue-600 text-white font-extrabold text-[11px] px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            <span>{pkg.badge}</span>
          </div>
        ) : (
          <div className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md text-white font-bold text-[10px] px-2.5 py-1 rounded-full border border-white/20">
            Certified Group Tour
          </div>
        )}

        {/* Top Right Discount Tag */}
        <div className="absolute top-3.5 right-12 bg-white/95 backdrop-blur-md text-emerald-700 border border-emerald-300 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
          {discountPercent}% OFF
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(pkg.id);
          }}
          className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 hover:border-[#2956B1] text-slate-700 transition shadow-sm hover:scale-110 active:scale-95"
          title="Save to Wishlist"
        >
          <Heart
            className={`w-4 h-4 transition ${
              isWishlisted ? 'fill-[#2956B1] text-[#2956B1] scale-110' : 'hover:text-[#2956B1]'
            }`}
          />
        </button>

        {/* Bottom Overlay Info (Duration & Pickup) */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
          <span className="flex items-center gap-1 font-extrabold bg-slate-950/80 px-2.5 py-1 rounded-xl backdrop-blur-md text-white border border-white/10 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-blue-300" />
            {pkg.durationDays} Days / {pkg.durationNights} Nights
          </span>
          <span className="flex items-center gap-1 font-semibold bg-slate-950/80 px-2.5 py-1 rounded-xl backdrop-blur-md text-[11px] text-slate-200 border border-white/10">
            <MapPin className="w-3 h-3 text-blue-300" />
            {pkg.pickupLocation}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Rating & Category */}
          <div className="flex items-center justify-between gap-2 mb-2 text-xs">
            <span className="text-[11px] font-extrabold text-[#2956B1] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100 uppercase tracking-wider">
              {pkg.category}
            </span>
            <div className="flex items-center gap-1 font-bold text-slate-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-amber-700">{pkg.rating}</span>
              <span className="text-slate-500 font-normal">({pkg.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectPackage(pkg)}
            className="font-extrabold text-lg sm:text-xl text-slate-900 group-hover:text-[#2956B1] transition-colors line-clamp-2 cursor-pointer mb-2 leading-snug"
          >
            {pkg.title}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-slate-600 line-clamp-2 mb-4 font-medium leading-relaxed">
            {pkg.tagline}
          </p>

          {/* Key Inclusion Icons Row */}
          <div className="flex items-center gap-2 mb-4 pt-3 border-t border-slate-100 text-[10px] text-slate-600 font-bold">
            <span className="bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg flex items-center gap-1">
              <Building className="w-3 h-3 text-[#2956B1]" /> Stays Included
            </span>
            <span className="bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg flex items-center gap-1">
              <Car className="w-3 h-3 text-[#2956B1]" /> Transport
            </span>
            <span className="bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg flex items-center gap-1">
              <Utensils className="w-3 h-3 text-[#2956B1]" /> Meals
            </span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] text-slate-400 font-semibold line-through">
              ₹{pkg.originalPrice.toLocaleString('en-IN')}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-black text-[#2956B1]">
                ₹{pkg.discountedPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold">/person</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenInquiry(pkg.title)}
              className="w-10 h-10 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm shrink-0"
              title="Instant WhatsApp Enquiry"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain drop-shadow-sm" />
            </button>

            <button
              onClick={() => onSelectPackage(pkg)}
              className="bg-gradient-to-r from-[#2956B1] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-[#2956B1]/20 transition active:scale-95"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
