'use client';

import React, { useState } from 'react';
import { TravelPackage, BatchDate } from '@/types/travel';
import { X, Calendar, MapPin, Clock, Users, Check, Heart, Shield, MessageCircle, Star, Sparkles, Building, Car, Utensils, Compass, UserCheck } from 'lucide-react';

interface PackageDetailModalProps {
  pkg: TravelPackage | null;
  isOpen: boolean;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (pkgId: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  isOpen,
  onClose,
  isWishlisted,
  onToggleWishlist,
}) => {
  if (!isOpen || !pkg) return null;

  const [selectedBatch, setSelectedBatch] = useState<BatchDate>(
    pkg.batchDates[0] || { id: 'b0', startDate: 'Upcoming', endDate: '', price: pkg.discountedPrice, availableSeats: 8, status: 'Available' }
  );

  const [travelersCount, setTravelersCount] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'reviews'>('overview');

  const totalPrice = selectedBatch.price * travelersCount;

  const handleWhatsAppBooking = () => {
    const message = `Hello Trip With Safarwala! I want to book/enquire about:\n\n🌴 Trip: ${pkg.title}\n📅 Batch Date: ${selectedBatch.startDate} to ${selectedBatch.endDate}\n👥 Travelers: ${travelersCount} Person(s)\n💰 Total Estimated Price: ₹${totalPrice.toLocaleString('en-IN')}\n\nPlease share the detailed PDF itinerary and booking details.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl text-slate-900">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-extrabold text-[#2956B1] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 uppercase">
              {pkg.category}
            </span>
            <span className="text-xs font-bold text-[#2956B1] flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{pkg.rating} Rating</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(pkg.id)}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:border-[#2956B1] text-slate-700 transition"
              title="Save to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#2956B1] text-[#2956B1]' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src={pkg.coverImage} alt={pkg.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-900 leading-tight mb-2">{pkg.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{pkg.tagline}</p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 font-bold text-slate-800">
                    <Clock className="w-4 h-4 text-[#2956B1]" />
                    <span>{pkg.durationDays}D / {pkg.durationNights}N</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 font-bold text-slate-800">
                    <MapPin className="w-4 h-4 text-[#2956B1]" />
                    <span>{pkg.pickupLocation}</span>
                  </div>
                </div>
              </div>

              {/* Price Callout */}
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-500 line-through">₹{pkg.originalPrice.toLocaleString('en-IN')}</div>
                  <div className="text-2xl font-black text-[#2956B1]">₹{selectedBatch.price.toLocaleString('en-IN')}</div>
                </div>
                <button
                  onClick={handleWhatsAppBooking}
                  className="bg-[#2956B1] hover:bg-blue-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
