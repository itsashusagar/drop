'use client';

import React from 'react';
import { TravelPackage } from '@/types/travel';
import { X, Heart, Trash2, ArrowRight, MessageCircle } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedPackages: TravelPackage[];
  onRemoveWishlist: (pkgId: string) => void;
  onSelectPackage: (pkg: TravelPackage) => void;
  onOpenInquiry: (tripTitle: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistedPackages,
  onRemoveWishlist,
  onSelectPackage,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 flex flex-col shadow-2xl text-slate-900">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-[#2956B1] text-[#2956B1]" />
              <h3 className="font-extrabold text-lg text-slate-900">Your Saved Trips</h3>
              <span className="text-xs bg-blue-50 border border-blue-200 text-[#2956B1] font-bold px-2.5 py-0.5 rounded-full">
                {wishlistedPackages.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {wishlistedPackages.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">No Saved Trips Yet</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Click the heart icon on any package card to save trips you are interested in exploring.
                </p>
              </div>
            ) : (
              wishlistedPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex gap-3 relative group"
                >
                  <img
                    src={pkg.coverImage}
                    alt={pkg.title}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-[#2956B1] bg-blue-100/80 px-2 py-0.5 rounded border border-blue-200">
                          {pkg.category}
                        </span>
                        <button
                          onClick={() => onRemoveWishlist(pkg.id)}
                          className="text-slate-400 hover:text-red-500 p-1"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4
                        onClick={() => {
                          onClose();
                          onSelectPackage(pkg);
                        }}
                        className="font-bold text-xs text-slate-900 line-clamp-1 hover:text-[#2956B1] cursor-pointer"
                      >
                        {pkg.title}
                      </h4>
                      <p className="text-[11px] text-slate-600">
                        {pkg.durationDays} Days • {pkg.pickupLocation}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-extrabold text-sm text-[#2956B1]">
                        ₹{pkg.discountedPrice.toLocaleString('en-IN')}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            onClose();
                            onOpenInquiry(pkg.title);
                          }}
                          className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200"
                          title="Enquire"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                        </button>

                        <button
                          onClick={() => {
                            onClose();
                            onSelectPackage(pkg);
                          }}
                          className="bg-[#2956B1] hover:bg-blue-700 text-white font-bold text-[11px] px-2.5 py-1.5 rounded-lg flex items-center gap-1"
                        >
                          <span>View</span>
                          <ArrowRight className="w-3 h-3 stroke-[3]" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
