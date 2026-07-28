'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Heart, Menu, X, Sparkles, MapPin, Building2 } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#2956B1] via-blue-700 to-indigo-800 text-white text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
        <span>Monsoon & Independence Day Travel Batches Now Open! Flat ₹2000 Off on Early Bookings</span>
        <button 
          onClick={() => onOpenInquiry('Early Bird Special Discount')} 
          className="underline hover:text-amber-200 font-bold ml-1"
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

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a
              href="#destinations"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('categories');
              }}
              className="hover:text-[#2956B1] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#2956B1]" />
              Destinations
            </a>
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('packages');
              }}
              className="hover:text-[#2956B1] transition-colors cursor-pointer"
            >
              Group Tours
            </a>
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('packages');
              }}
              className="hover:text-[#2956B1] transition-colors cursor-pointer"
            >
              Himalayan Treks
            </a>
            <a
              href="#why-us"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('why-us');
              }}
              className="hover:text-[#2956B1] transition-colors cursor-pointer"
            >
              Why Us
            </a>
            <a
              href="#branches"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('branches');
              }}
              className="hover:text-[#2956B1] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#2956B1]" />
              Branches
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('reviews');
              }}
              className="hover:text-[#2956B1] transition-colors cursor-pointer"
            >
              Reviews
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="tel:+919560798341" 
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#2956B1] px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#2956B1]" />
              +91 95607 98341
            </a>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-xl bg-slate-100 border border-slate-200 hover:border-[#2956B1]/50 hover:text-[#2956B1] transition text-slate-700"
              title="Saved Trips"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-[#2956B1] text-[#2956B1]' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#2956B1] text-white font-extrabold text-[11px] flex items-center justify-center shadow-md">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Request Callback */}
            <button
              onClick={() => onOpenInquiry()}
              className="bg-gradient-to-r from-[#2956B1] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-[#2956B1]/20 transition active:scale-95"
            >
              Plan My Trip
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenWishlist}
              className="relative p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-[#2956B1] text-[#2956B1]' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#2956B1] text-white font-bold text-[10px] flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#destinations"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              handleNavClick('categories');
            }}
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#2956B1]"
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
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#2956B1]"
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
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#2956B1]"
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
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#2956B1]"
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
            className="block py-2 text-sm font-semibold text-slate-700 hover:text-[#2956B1]"
          >
            Customer Reviews
          </a>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full bg-gradient-to-r from-[#2956B1] to-blue-600 text-white font-bold text-sm py-3 rounded-xl shadow-md"
            >
              Request Custom Itinerary
            </button>
            <a
              href="tel:+919560798341"
              className="w-full text-center text-xs font-semibold py-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200"
            >
              Call Us: +91 95607 98341
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
