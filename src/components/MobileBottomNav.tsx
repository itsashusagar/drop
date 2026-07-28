'use client';

import React from 'react';
import { Compass, Search, Heart, MessageCircle, MapPin } from 'lucide-react';

interface MobileBottomNavProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenInquiry: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  wishlistCount,
  onOpenWishlist,
  onOpenInquiry,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 text-slate-600 py-2 px-3 flex items-center justify-around shadow-2xl">
      <a
        href="#"
        className="flex flex-col items-center gap-1 text-[11px] font-semibold text-[#2956B1]"
      >
        <Compass className="w-5 h-5 stroke-[2.2] text-[#2956B1]" />
        <span>Home</span>
      </a>

      <a
        href="#packages"
        className="flex flex-col items-center gap-1 text-[11px] font-medium hover:text-[#2956B1] transition"
      >
        <MapPin className="w-5 h-5 stroke-[2]" />
        <span>Trips</span>
      </a>

      <a
        href="#search"
        className="flex flex-col items-center gap-1 text-[11px] font-medium hover:text-[#2956B1] transition"
      >
        <Search className="w-5 h-5 stroke-[2]" />
        <span>Search</span>
      </a>

      <button
        onClick={onOpenWishlist}
        className="relative flex flex-col items-center gap-1 text-[11px] font-medium hover:text-[#2956B1] transition"
      >
        <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-[#2956B1] text-[#2956B1]' : ''}`} />
        <span>Wishlist</span>
        {wishlistCount > 0 && (
          <span className="absolute -top-1 right-2 w-4 h-4 bg-[#2956B1] text-white rounded-full text-[9px] font-extrabold flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </button>

      <button
        onClick={onOpenInquiry}
        className="flex flex-col items-center gap-1 text-[11px] font-bold text-emerald-600"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
        </div>
        <span>Book</span>
      </button>
    </div>
  );
};
