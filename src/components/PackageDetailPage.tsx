'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { TravelPackage, BatchDate } from '@/types/travel';
import { PACKAGES, REVIEWS } from '@/data/packages';
import {
  MapPin, Clock, Star, Heart, ArrowRight, Check, X,
  Calendar, Sparkles, Building, Car, Utensils, Compass, UserCheck,
  CheckCircle2, ChevronDown, ChevronUp, Share2, ArrowLeft,
  ShieldCheck, CheckCircle, Video, Flame
} from 'lucide-react';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

interface PackageDetailPageProps {
  pkg: TravelPackage;
  onBack?: () => void;
  onOpenInquiry: (tripTitle: string) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({
  pkg,
  onBack,
  onOpenInquiry,
}) => {
  // Always scroll to top when package detail page opens or changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pkg.id]);

  // Gallery slider state
  const [selectedImage, setSelectedImage] = useState(pkg.coverImage);

  // Booking sidebar state
  const [selectedBatch, setSelectedBatch] = useState<BatchDate>(
    pkg.batchDates[0] || { id: 'b0', startDate: 'Upcoming', endDate: '', price: pkg.discountedPrice, availableSeats: 8, status: 'Available' }
  );
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState<'double' | 'triple'>('double');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState('SAFARWALA2000');
  const [couponApplied, setCouponApplied] = useState(true);
  const [couponDiscount, setCouponDiscount] = useState(2000);

  // Itinerary open day states
  const [openDays, setOpenDays] = useState<number[]>([1, 2]);

  // FAQ open states
  const [openFaqs, setOpenFaqs] = useState<number[]>([0, 1]);

  // Wishlist heart
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Toggle itinerary day
  const toggleDay = (d: number) => {
    setOpenDays((prev) => (prev.includes(d) ? prev.filter((item) => item !== d) : [...prev, d]));
  };

  // Apply Coupon
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'SAFARWALA2000' || couponCode.trim().toUpperCase() === 'EARLYBIRD') {
      setCouponApplied(true);
      setCouponDiscount(2000);
    } else if (couponCode.trim()) {
      alert('Invalid Coupon Code! Try using SAFARWALA2000 or EARLYBIRD');
    }
  };

  // Calculate Price Breakdown
  const baseAdultTotal = selectedBatch.price * adults;
  const baseChildTotal = selectedBatch.price * 0.75 * children;
  const roomUpgradeFee = roomType === 'double' ? 0 : -500 * adults; // Triple sharing discount

  const addonsTotal = useMemo(() => {
    if (!pkg.addOns) return 0;
    return pkg.addOns
      .filter((a) => selectedAddons.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0) * (adults + children);
  }, [selectedAddons, pkg.addOns, adults, children]);

  const subtotal = Math.max(0, baseAdultTotal + baseChildTotal + roomUpgradeFee + addonsTotal - (couponApplied ? couponDiscount : 0));
  const gstAmount = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + gstAmount;

  // WhatsApp Checkout text
  const handleWhatsAppCheckout = () => {
    const text = `Hello Trip With Safarwala! I want to book:\n\n🌴 *${pkg.title}*\n📅 *Batch Date*: ${selectedBatch.startDate} to ${selectedBatch.endDate}\n👥 *Travelers*: ${adults} Adult(s), ${children} Child(ren)\n🛏️ *Room Type*: ${roomType === 'double' ? 'Double Sharing' : 'Triple Sharing'}\n🎟️ *Coupon Applied*: ${couponApplied ? '₹' + couponDiscount : 'None'}\n💰 *Grand Total Payable*: ₹${grandTotal.toLocaleString('en-IN')}\n\nPlease share booking confirmation & payment link.`;
    window.open(`https://wa.me/919560798341?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans pb-28 sm:pb-0 animate-fadeIn max-w-full overflow-x-hidden">
      
      {/* Top Breadcrumb & Quick Sticky Nav Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-14 sm:top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs gap-2">
          
          <div className="flex items-center gap-1.5 text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-none max-w-[70%] sm:max-w-none">
            {onBack ? (
              <button onClick={onBack} className="flex items-center gap-1 text-[#2956B1] font-extrabold hover:underline mr-1 shrink-0">
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            ) : (
              <Link href="/" className="hover:text-slate-900 shrink-0">Home</Link>
            )}
            <span className="text-slate-300">/</span>
            <span className="shrink-0">{pkg.category}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-extrabold truncate max-w-[100px] sm:max-w-[220px]">{pkg.title}</span>
          </div>

          {/* Sticky Section Quick Jumper Pills (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-600">
            <button onClick={() => scrollToSection('sec-overview')} className="hover:text-[#2956B1] transition">Overview</button>
            <button onClick={() => scrollToSection('sec-includes')} className="hover:text-[#2956B1] transition">Includes</button>
            <button onClick={() => scrollToSection('sec-itinerary')} className="hover:text-[#2956B1] transition">Itinerary</button>
            <button onClick={() => scrollToSection('sec-pricing')} className="hover:text-[#2956B1] transition">Pricing</button>
            <button onClick={() => scrollToSection('sec-reviews')} className="hover:text-[#2956B1] transition">Reviews</button>
            <button onClick={() => scrollToSection('sec-faqs')} className="hover:text-[#2956B1] transition">FAQs</button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="flex items-center gap-1 text-slate-600 hover:text-[#2956B1] transition font-bold"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#2956B1] text-[#2956B1]' : ''}`} />
              <span className="hidden sm:inline">{isWishlisted ? 'Saved' : 'Save'}</span>
            </button>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: pkg.title, url: window.location.href }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="flex items-center gap-1 text-slate-600 hover:text-[#2956B1] transition font-bold"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>

        </div>
      </div>

      {/* SECTION 1: HERO HEADER & GALLERY SLIDER */}
      <section className="bg-white py-3 sm:py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
            
            {/* Left Column: Gallery & Tour Specs */}
            <div className="lg:col-span-8 space-y-3.5 sm:space-y-6">
              
              {/* Main Cover Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md sm:shadow-xl group">
                <img
                  src={selectedImage}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Badges Overlay */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 right-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {pkg.badge && (
                    <div className="bg-gradient-to-r from-[#2956B1] to-blue-600 text-white font-black text-[9px] sm:text-xs px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{pkg.badge}</span>
                    </div>
                  )}
                  <div className="bg-emerald-600 text-white text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Guaranteed Departure</span>
                  </div>
                </div>
              </div>

              {/* Thumbnails Row (Swipeable on Mobile) */}
              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1.5 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
                {[pkg.coverImage, ...pkg.galleryImages].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-16 h-12 sm:w-24 sm:h-16 rounded-lg sm:rounded-2xl overflow-hidden shrink-0 border-2 transition ${
                      selectedImage === img ? 'border-[#2956B1] scale-105 shadow-md' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Title & Quick Specifications */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#2956B1] bg-blue-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-blue-100">
                    {pkg.category}
                  </span>
                  <div className="flex items-center gap-1 font-extrabold text-slate-900 text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-slate-500 font-semibold text-[11px] sm:text-xs">({pkg.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h1 className="text-xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight break-words">
                  {pkg.title}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {pkg.tagline}
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 pt-1 text-xs font-bold">
                  <span className="flex items-center gap-2 text-slate-800 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
                    <Clock className="w-4 h-4 text-[#2956B1] shrink-0" />
                    <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                  </span>
                  <span className="flex items-center gap-2 text-slate-800 bg-slate-100 px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
                    <MapPin className="w-4 h-4 text-[#2956B1] shrink-0" />
                    <span className="truncate">{pkg.pickupLocation} to {pkg.dropLocation}</span>
                  </span>
                  <span className="flex items-center gap-2 text-emerald-800 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Solo Female Friendly</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: BOOKING CARD SIDEBAR (Sticky on Desktop, Normal Card on Mobile) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 z-20">
              <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg sm:shadow-2xl space-y-4 sm:space-y-5 text-slate-900">
                
                {/* Header Price & Coupon Callout */}
                <div className="border-b border-slate-100 pb-3 sm:pb-4 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-slate-400 line-through">
                      ₹{pkg.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Save ₹{(pkg.originalPrice - selectedBatch.price + (couponApplied ? couponDiscount : 0)).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-4xl font-black text-[#2956B1]">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-semibold">total ({adults + children} pax incl. GST)</span>
                  </div>
                </div>

                {/* 1. Departure Date Selector */}
                <div className="space-y-2">
                  <label className="block text-[11px] sm:text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    1. Select Departure Batch Date
                  </label>
                  <select
                    value={selectedBatch.id}
                    onChange={(e) => {
                      const found = pkg.batchDates.find((b) => b.id === e.target.value);
                      if (found) setSelectedBatch(found);
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#2956B1] cursor-pointer truncate"
                  >
                    {pkg.batchDates.map((b) => (
                      <option key={b.id} value={b.id} className="bg-white text-slate-900">
                        {b.startDate} - {b.endDate} ({b.availableSeats} seats left)
                      </option>
                    ))}
                  </select>

                  {/* Active Selected Batch & Seat Scarcity Info */}
                  <div className="bg-amber-50/90 border border-amber-200 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex items-center justify-between shadow-sm gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight truncate">
                          <span className="text-[#2956B1]">{selectedBatch.startDate}</span> to <span className="text-[#2956B1]">{selectedBatch.endDate}</span>
                        </div>
                        <div className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 shrink-0" />
                          <span>Guaranteed Departure</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-500 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg sm:rounded-xl text-[10px] font-black shadow-sm shrink-0">
                      <Flame className="w-3 h-3 fill-white text-white animate-pulse" />
                      <span>{selectedBatch.availableSeats} Left</span>
                    </div>
                  </div>
                </div>

                {/* 2. Travelers Count */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-1">Adults (12+ yrs)</label>
                    <div className="flex items-center gap-1 sm:gap-2 bg-slate-50 border border-slate-200 p-1 rounded-xl justify-between">
                      <button
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-100 active:scale-95 flex items-center justify-center text-sm"
                      >
                        -
                      </button>
                      <span className="font-extrabold text-xs sm:text-sm text-slate-900">{adults}</span>
                      <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-100 active:scale-95 flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-1">Children (5-11 yrs)</label>
                    <div className="flex items-center gap-1 sm:gap-2 bg-slate-50 border border-slate-200 p-1 rounded-xl justify-between">
                      <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-100 active:scale-95 flex items-center justify-center text-sm"
                      >
                        -
                      </button>
                      <span className="font-extrabold text-xs sm:text-sm text-slate-900">{children}</span>
                      <button
                        onClick={() => setChildren(children + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-800 font-bold hover:bg-slate-100 active:scale-95 flex items-center justify-center text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Room Occupancy */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 mb-1">Room Occupancy</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setRoomType('double')}
                      className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold border transition text-center ${
                        roomType === 'double'
                          ? 'bg-blue-50 border-[#2956B1] text-[#2956B1]'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      Double Sharing
                    </button>
                    <button
                      onClick={() => setRoomType('triple')}
                      className={`py-2 px-1 rounded-xl text-[10px] sm:text-xs font-bold border transition text-center ${
                        roomType === 'triple'
                          ? 'bg-blue-50 border-[#2956B1] text-[#2956B1]'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      Triple (-₹500)
                    </button>
                  </div>
                </div>

                {/* 4. Coupon Code */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter Code"
                    className="flex-1 bg-slate-50 border border-slate-200 text-xs px-3 py-2 rounded-xl text-slate-900 focus:outline-none focus:border-[#2956B1] uppercase font-bold min-w-0"
                  />
                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-2 rounded-xl shrink-0"
                  >
                    Apply
                  </button>
                </form>

                {couponApplied && (
                  <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                    <span>Coupon SAFARWALA2000</span>
                    <span>-₹2,000 Off</span>
                  </div>
                )}

                {/* Price Breakdown */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
                  <div className="flex justify-between">
                    <span>Base Fare ({adults} Adult, {children} Child)</span>
                    <span className="font-bold text-slate-900">₹{(baseAdultTotal + baseChildTotal).toLocaleString('en-IN')}</span>
                  </div>
                  {roomUpgradeFee !== 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Triple Sharing Discount</span>
                      <span>₹{roomUpgradeFee.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>5% GST Surcharge</span>
                    <span className="font-bold text-slate-900">+₹{gstAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-100">
                    <span>Grand Total</span>
                    <span className="text-[#2956B1] text-xl">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-gradient-to-r from-[#2956B1] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs sm:text-sm py-3 rounded-xl shadow-md shadow-[#2956B1]/20 flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
                  >
                    <span>Instant Booking</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>

                  <button
                    onClick={() => onOpenInquiry(pkg.title)}
                    className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold text-xs py-2.5 rounded-xl border border-emerald-200 flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Detailed Content Sections */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-8 sm:space-y-16">
        
        {/* SECTION 2: TOUR OVERVIEW */}
        <section id="sec-overview" className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-sm">
          <div className="flex items-center gap-2 text-[#2956B1] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#2956B1]" />
            <span>Detailed Experience</span>
          </div>
          <h2 className="text-lg sm:text-3xl font-extrabold text-slate-900">Tour Overview & Highlights</h2>
          
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {pkg.overview}
          </p>

          <div>
            <h3 className="font-extrabold text-slate-900 text-xs sm:text-base mb-2.5">Key Trip Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {pkg.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-2.5 sm:p-3.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#2956B1] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 font-bold">{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: PACKAGE INCLUDES CARDS */}
        <section id="sec-includes" className="space-y-3 sm:space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#2956B1] uppercase tracking-widest">Everything Included</span>
            <h2 className="text-lg sm:text-3xl font-extrabold text-slate-900 mt-0.5">What's Covered In Your Booking</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
            <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center space-y-1 shadow-sm hover:border-[#2956B1] transition">
              <Building className="w-5 h-5 sm:w-6 sm:h-6 text-[#2956B1] mx-auto" />
              <div className="font-bold text-xs text-slate-900">Stays & Hotels</div>
              <div className="text-[10px] text-slate-500">Boutique & Homestays</div>
            </div>

            <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center space-y-1 shadow-sm hover:border-[#2956B1] transition">
              <Car className="w-5 h-5 sm:w-6 sm:h-6 text-[#2956B1] mx-auto" />
              <div className="font-bold text-xs text-slate-900">Transfers</div>
              <div className="text-[10px] text-slate-500">AC Volvo / SUV</div>
            </div>

            <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center space-y-1 shadow-sm hover:border-[#2956B1] transition">
              <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#2956B1] mx-auto" />
              <div className="font-bold text-xs text-slate-900">Meals</div>
              <div className="text-[10px] text-slate-500">Breakfast & Dinner</div>
            </div>

            <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center space-y-1 shadow-sm hover:border-[#2956B1] transition">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-[#2956B1] mx-auto" />
              <div className="font-bold text-xs text-slate-900">Sightseeing</div>
              <div className="text-[10px] text-slate-500">All Top Spots</div>
            </div>

            <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center space-y-1 shadow-sm hover:border-[#2956B1] transition">
              <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#2956B1] mx-auto" />
              <div className="font-bold text-xs text-slate-900">Trip Captain</div>
              <div className="text-[10px] text-slate-500">First-Aid Certified</div>
            </div>

            <div className="bg-white border border-slate-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center space-y-1 shadow-sm hover:border-[#2956B1] transition">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mx-auto" />
              <div className="font-bold text-xs text-slate-900">Safety Kits</div>
              <div className="text-[10px] text-slate-500">Oxygen & First Aid</div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DAY WISE ITINERARY ACCORDION */}
        <section id="sec-itinerary" className="space-y-3 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
            <div>
              <span className="text-xs font-bold text-[#2956B1] uppercase tracking-widest">Day by Day Schedule</span>
              <h2 className="text-lg sm:text-3xl font-extrabold text-slate-900 mt-0.5">Detailed Itinerary Timeline</h2>
            </div>
            <div className="flex gap-2 text-xs font-bold text-[#2956B1]">
              <button onClick={() => setOpenDays(pkg.itinerary.map((d) => d.day))} className="hover:underline">Expand All</button>
              <span>|</span>
              <button onClick={() => setOpenDays([])} className="hover:underline">Collapse All</button>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {pkg.itinerary.map((day) => {
              const isOpen = openDays.includes(day.day);
              return (
                <div key={day.day} className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleDay(day.day)}
                    className="w-full p-3.5 sm:p-5 flex items-center justify-between text-left hover:bg-slate-50 transition gap-2 sm:gap-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#2956B1] to-blue-600 text-white font-black text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-md">
                        D{day.day}
                      </div>
                      <span className="font-extrabold text-xs sm:text-base text-slate-900 leading-snug truncate">{day.title}</span>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#2956B1] shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 pt-1 border-t border-slate-100 space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
                      <p className="leading-relaxed">{day.description}</p>

                      {day.image && (
                        <div className="aspect-[16/9] sm:aspect-[21/9] max-h-60 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                          <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
                        {day.meals && (
                          <span className="font-bold text-[#2956B1] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 text-[10px] sm:text-xs">
                            🍲 Meals: {day.meals.join(', ')}
                          </span>
                        )}
                        {day.stay && (
                          <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 text-[10px] sm:text-xs">
                            🏨 Stay: {day.stay}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: PRICING TABLE (Mobile Cards & Desktop Table) */}
        <section id="sec-pricing" className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-sm">
          <div>
            <span className="text-xs font-bold text-[#2956B1] uppercase tracking-wider">Transparent Tariff</span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-0.5">Package Pricing Details</h2>
          </div>

          {/* Mobile Pricing Cards (< sm) */}
          <div className="block sm:hidden space-y-3">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-xs text-slate-900">Double Sharing Room</span>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Available</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-200/60 pt-2">
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold">Adult Rate (Per Person)</div>
                  <div className="font-black text-base text-[#2956B1]">₹{selectedBatch.price.toLocaleString('en-IN')}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 font-semibold">Child Rate (5-11 yrs)</div>
                  <div className="font-bold text-xs text-slate-700">₹{Math.round(selectedBatch.price * 0.75).toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-xs text-slate-900">Triple Sharing Room</span>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Available</span>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-200/60 pt-2">
                <div>
                  <div className="text-[10px] text-slate-500 font-semibold">Adult Rate (Per Person)</div>
                  <div className="font-black text-base text-[#2956B1]">₹{(selectedBatch.price - 500).toLocaleString('en-IN')}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 font-semibold">Child Rate (5-11 yrs)</div>
                  <div className="font-bold text-xs text-slate-700">₹{Math.round((selectedBatch.price - 500) * 0.75).toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Pricing Table (>= sm) */}
          <div className="hidden sm:block overflow-x-auto scrollbar-none">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase bg-slate-50">
                  <th className="py-3 px-3 sm:px-4">Occupancy Category</th>
                  <th className="py-3 px-3 sm:px-4">Adult Rate (Per Person)</th>
                  <th className="py-3 px-3 sm:px-4">Child Rate (5-11 Yrs)</th>
                  <th className="py-3 px-3 sm:px-4">GST (5%)</th>
                  <th className="py-3 px-3 sm:px-4">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800 font-semibold">
                <tr>
                  <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Double Sharing Room</td>
                  <td className="py-3.5 px-3 sm:px-4 font-extrabold text-[#2956B1]">₹{selectedBatch.price.toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-3 sm:px-4 font-semibold text-slate-600">₹{Math.round(selectedBatch.price * 0.75).toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-3 sm:px-4 text-slate-500">5% at Checkout</td>
                  <td className="py-3.5 px-3 sm:px-4"><span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Available</span></td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900">Triple Sharing Room</td>
                  <td className="py-3.5 px-3 sm:px-4 font-extrabold text-[#2956B1]">₹{(selectedBatch.price - 500).toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-3 sm:px-4 font-semibold text-slate-600">₹{Math.round((selectedBatch.price - 500) * 0.75).toLocaleString('en-IN')}</td>
                  <td className="py-3.5 px-3 sm:px-4 text-slate-500">5% at Checkout</td>
                  <td className="py-3.5 px-3 sm:px-4"><span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Available</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: INCLUSIONS & EXCLUSIONS CHECKLIST */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl sm:rounded-3xl p-4 sm:p-8 space-y-3 sm:space-y-4">
            <h3 className="font-extrabold text-emerald-800 text-sm sm:text-lg flex items-center gap-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 stroke-[3]" />
              <span>Inclusions Checklist</span>
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
              {pkg.inclusions.map((inc, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/60 border border-red-200 rounded-xl sm:rounded-3xl p-4 sm:p-8 space-y-3 sm:space-y-4">
            <h3 className="font-extrabold text-red-600 text-sm sm:text-lg flex items-center gap-2">
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 stroke-[3]" />
              <span>Exclusions Checklist</span>
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              {pkg.exclusions.map((exc, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-2.5">
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 shrink-0 mt-0.5 stroke-[3]" />
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 7: DESTINATION VIDEO & MAP */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Destination Video */}
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-3.5 sm:p-6 space-y-3 sm:space-y-4 shadow-sm">
            <h3 className="font-extrabold text-slate-900 text-xs sm:text-base flex items-center gap-2">
              <Video className="w-4 h-4 text-[#2956B1]" />
              <span>Destination Video Preview</span>
            </h3>
            <div className="aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 relative shadow-inner">
              <iframe
                src={pkg.videoUrl || 'https://www.youtube.com/embed/l5A62FzGZ60'}
                title={`${pkg.title} Tour Video`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-3.5 sm:p-6 space-y-3 sm:space-y-4 shadow-sm">
            <h3 className="font-extrabold text-slate-900 text-xs sm:text-base flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#2956B1]" />
              <span>Interactive Route Map</span>
            </h3>
            <div className="aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <iframe
                title="Route map"
                src={pkg.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* SECTION 8: REVIEWS */}
        <section id="sec-reviews" className="space-y-3 sm:space-y-6">
          <div>
            <span className="text-xs font-bold text-[#2956B1] uppercase tracking-wider">Community Feedback</span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-0.5">Verified Traveler Reviews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-white border border-slate-200 p-4 rounded-xl sm:rounded-3xl space-y-2.5 shadow-sm hover:border-[#2956B1] transition">
                <div className="flex items-center gap-2.5">
                  <img src={rev.avatar} alt={rev.author} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-blue-200" />
                  <div>
                    <div className="font-bold text-xs text-slate-900">{rev.author}</div>
                    <div className="text-[10px] text-slate-500">{rev.date}</div>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic font-medium">"{rev.comment}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9: FAQs */}
        <section id="sec-faqs" className="bg-white border border-slate-200 rounded-xl sm:rounded-3xl p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-sm">
          <div>
            <span className="text-xs font-bold text-[#2956B1] uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-0.5">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {pkg.faqs?.map((faq, idx) => {
              const isOpen = openFaqs.includes(idx);
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenFaqs((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]))
                    }
                    className="w-full p-3 sm:p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-2.5 cursor-pointer"
                  >
                    <span className="leading-snug">{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#2956B1] shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-3 pb-3 sm:px-4 sm:pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-2 font-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* SECTION 10: FLOATING MOBILE BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/90 p-2.5 px-3 flex items-center justify-between gap-2 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <div>
          <div className="text-[9px] text-slate-500 font-semibold">Starting from</div>
          <div className="font-black text-base text-[#2956B1]">₹{grandTotal.toLocaleString('en-IN')}</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleWhatsAppCheckout}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 active:scale-95 transition-all shadow-md shadow-emerald-600/20"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
            <span>Book</span>
          </button>

          <button
            onClick={() => onOpenInquiry(pkg.title)}
            className="bg-gradient-to-r from-[#2956B1] to-blue-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl active:scale-95 transition-all shadow-md shadow-[#2956B1]/20"
          >
            Enquire
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
      <WhatsAppButton />

    </div>
  );
};
