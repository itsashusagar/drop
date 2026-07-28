'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Heart, Menu, X, Sparkles, MapPin, Building2, Compass, ArrowRight } from 'lucide-react';

interface NavbarProps {
  wishlistCount: number;
  onOpenInquiry: (tripTitle?: string) => void;
  onOpenWishlist: () => void;
  onGoHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenInquiry,
  onOpenWishlist,
  onGoHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId?: string) => {
    if (onGoHome) {
      onGoHome();
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/65 backdrop-blur-2xl saturate-180 border-b border-white/50 text-slate-900 shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 relative">
      {/* Apple Subtle Top Highlight Bar */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      {/* Top Banner Notice - Translucent Dark Glass */}
      <div className="bg-slate-950/90 backdrop-blur-xl text-white text-[11px] sm:text-xs font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 border-b border-white/10">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300 shrink-0" />
        <span>Monsoon & Independence Day Travel Batches Now Open! Flat ₹2000 Off on Early Bookings</span>
        <button 
          onClick={() => onOpenInquiry('Early Bird Special Discount')} 
          className="underline hover:text-amber-300 font-extrabold ml-1 cursor-pointer transition-colors"
        >
          Claim Coupon
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with Home reset handler */}
          <Link
            href="/"
            onClick={(e) => {
              if (onGoHome) {
                onGoHome();
              }
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="Trip With Safarwala Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform shrink-0 drop-shadow-sm"
            />
            <div className="flex flex-col justify-center">
              <div className="font-extrabold text-[10px] sm:text-[11px] tracking-widest text-[#2956B1] leading-none uppercase">
                TRIP WITH
              </div>
              <div className="font-black text-sm sm:text-base tracking-tight text-slate-900 leading-snug uppercase">
                SAFARWALA
              </div>
              <div className="text-[7.5px] sm:text-[8.5px] tracking-[0.2em] font-semibold text-slate-500 uppercase">
                TRAVELS & TOURS
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links - Apple Pill Style */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-900/[0.03] p-1.5 rounded-full border border-slate-900/[0.05] backdrop-blur-md">
            <a
              href="#destinations"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('categories');
              }}
              className="hover:text-[#2956B1] hover:bg-white/80 px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-none hover:shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-[#2956B1]" />
              <span>Destinations</span>
            </a>
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('packages');
              }}
              className="hover:text-[#2956B1] hover:bg-white/80 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer hover:shadow-sm"
            >
              Group Tours
            </a>
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('packages');
              }}
              className="hover:text-[#2956B1] hover:bg-white/80 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer hover:shadow-sm"
            >
              Himalayan Treks
            </a>
            <a
              href="#why-us"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('why-us');
              }}
              className="hover:text-[#2956B1] hover:bg-white/80 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer hover:shadow-sm"
            >
              Why Us
            </a>
            <a
              href="#branches"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('branches');
              }}
              className="hover:text-[#2956B1] hover:bg-white/80 px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer hover:shadow-sm"
            >
              <Building2 className="w-3.5 h-3.5 text-[#2956B1]" />
              <span>Branches</span>
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('reviews');
              }}
              className="hover:text-[#2956B1] hover:bg-white/80 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer hover:shadow-sm"
            >
              Reviews
            </a>
          </nav>

          {/* Action Buttons - Apple Capsule Glass Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+919560798341" 
              className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#2956B1] px-4 py-2 rounded-full bg-slate-900/[0.04] hover:bg-white/90 border border-slate-900/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-xl transition-all duration-300 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#2956B1]" />
              <span>+91 95607 98341</span>
            </a>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-full bg-slate-900/[0.04] hover:bg-white/90 border border-slate-900/10 hover:border-[#2956B1]/40 text-slate-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-xl transition-all duration-300 active:scale-95 cursor-pointer"
              title="Saved Trips"
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-[#2956B1] text-[#2956B1]' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#2956B1] text-white font-extrabold text-[10px] flex items-center justify-center shadow-md">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Request Callback */}
            <button
              onClick={() => onOpenInquiry()}
              className="bg-gradient-to-r from-[#2956B1] via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs px-5 py-2 rounded-full shadow-lg shadow-[#2956B1]/25 hover:shadow-xl hover:shadow-[#2956B1]/40 transition-all duration-300 active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-blue-200" />
              <span>Plan My Trip</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3] ml-0.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenWishlist}
              className="relative p-2 rounded-full bg-slate-900/[0.04] border border-slate-900/10 text-slate-800 backdrop-blur-xl"
            >
              <Heart className={`w-4.5 h-4.5 ${wishlistCount > 0 ? 'fill-[#2956B1] text-[#2956B1]' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#2956B1] text-white font-bold text-[10px] flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-900/[0.04] border border-slate-900/10 text-slate-800 backdrop-blur-xl"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu - Ultra Frosted Glass */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/85 backdrop-blur-3xl saturate-180 border-b border-white/50 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn">
          <a
            href="#destinations"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              handleNavClick('categories');
            }}
            className="block py-2 text-xs font-bold text-slate-800 hover:text-[#2956B1]"
          >
            Explore Destinations
          </a>
          <a
            href="#packages"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              handleNavClick('packages');
            }}
            className="block py-2 text-xs font-bold text-slate-800 hover:text-[#2956B1]"
          >
            Group Packages
          </a>
          <a
            href="#why-us"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              handleNavClick('why-us');
            }}
            className="block py-2 text-xs font-bold text-slate-800 hover:text-[#2956B1]"
          >
            Why Trip With Safarwala
          </a>
          <a
            href="#branches"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              handleNavClick('branches');
            }}
            className="block py-2 text-xs font-bold text-slate-800 hover:text-[#2956B1]"
          >
            Our Delhi Branch
          </a>
          <a
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              handleNavClick('reviews');
            }}
            className="block py-2 text-xs font-bold text-slate-800 hover:text-[#2956B1]"
          >
            Customer Reviews
          </a>

          <div className="pt-3 border-t border-slate-900/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full bg-gradient-to-r from-[#2956B1] to-blue-600 text-white font-bold text-xs py-3 rounded-full shadow-md flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-blue-200" />
              <span>Request Custom Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
            <a
              href="tel:+919560798341"
              className="w-full text-center text-xs font-bold py-2.5 rounded-full bg-slate-900/[0.05] text-slate-800 border border-slate-900/10"
            >
              Call Us: +91 95607 98341
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
