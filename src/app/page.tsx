'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { PACKAGES } from '@/data/packages';
import { TravelPackage, FilterState } from '@/types/travel';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SearchFilter } from '@/components/SearchFilter';
import { CategoryPills } from '@/components/CategoryPills';
import { PackageCard } from '@/components/PackageCard';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { TourStats } from '@/components/TourStats';
import { BranchOffices } from '@/components/BranchOffices';
import { ReviewsSection } from '@/components/ReviewsSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { PackageDetailPage } from '@/components/PackageDetailPage';
import { InquiryModal } from '@/components/InquiryModal';
import { WishlistDrawer } from '@/components/WishlistDrawer';
import { Sparkles, SearchX } from 'lucide-react';

export default function Home() {
  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    destination: '',
    category: '',
    month: '',
    duration: '',
    maxBudget: 40000,
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);

  // Selected package for detailed page view
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);

  // Inquiry modal state
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTripTitle, setInquiryTripTitle] = useState('');

  // Load wishlist from localStorage on client side
  useEffect(() => {
    try {
      const saved = localStorage.getItem('safarwala_wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Sync wishlist to localStorage
  const toggleWishlist = (pkgId: string) => {
    setWishlist((prev) => {
      const updated = prev.includes(pkgId)
        ? prev.filter((id) => id !== pkgId)
        : [...prev, pkgId];
      try {
        localStorage.setItem('safarwala_wishlist', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Filter handler
  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      destination: '',
      category: '',
      month: '',
      duration: '',
      maxBudget: 40000,
    });
  };

  // Open inquiry modal
  const handleOpenInquiry = (tripTitle: string = '') => {
    setInquiryTripTitle(tripTitle);
    setInquiryModalOpen(true);
  };

  // Unique destinations list for dropdown
  const destinationsList = useMemo(() => {
    const list = PACKAGES.map((p) => p.destination);
    return Array.from(new Set(list));
  }, []);

  // Filtered packages calculation
  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      // Text search
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchTitle = pkg.title.toLowerCase().includes(query);
        const matchDest = pkg.destination.toLowerCase().includes(query);
        const matchTagline = pkg.tagline.toLowerCase().includes(query);
        if (!matchTitle && !matchDest && !matchTagline) return false;
      }

      // Destination filter
      if (filters.destination && pkg.destination !== filters.destination) {
        return false;
      }

      // Category filter
      if (filters.category) {
        if (pkg.category.toLowerCase() !== filters.category.toLowerCase()) {
          return false;
        }
      }

      // Duration filter
      if (filters.duration) {
        if (filters.duration === '3-5' && (pkg.durationDays < 3 || pkg.durationDays > 5)) return false;
        if (filters.duration === '6-8' && (pkg.durationDays < 6 || pkg.durationDays > 8)) return false;
        if (filters.duration === '9+' && pkg.durationDays < 9) return false;
      }

      // Month filter (checks in batch dates)
      if (filters.month) {
        const hasMatchingBatch = pkg.batchDates.some((b) => b.startDate.includes(filters.month));
        if (!hasMatchingBatch) return false;
      }

      // Budget filter
      if (pkg.discountedPrice > filters.maxBudget) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Wishlisted packages array
  const wishlistedPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => wishlist.includes(pkg.id));
  }, [wishlist]);

  // IF A PACKAGE IS SELECTED (DETAILS CLICKED): SHOW THE COMPLETE 20-SECTION DETAILS VIEW!
  if (selectedPackage) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <Navbar
          wishlistCount={wishlist.length}
          onOpenInquiry={handleOpenInquiry}
          onOpenWishlist={() => setWishlistDrawerOpen(true)}
          onGoHome={() => setSelectedPackage(null)}
        />

        <PackageDetailPage
          pkg={selectedPackage}
          onBack={() => setSelectedPackage(null)}
          onOpenInquiry={handleOpenInquiry}
        />

        <InquiryModal
          isOpen={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
          defaultTripTitle={inquiryTripTitle}
        />

        <WishlistDrawer
          isOpen={wishlistDrawerOpen}
          onClose={() => setWishlistDrawerOpen(false)}
          wishlistedPackages={wishlistedPackages}
          onRemoveWishlist={toggleWishlist}
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onOpenInquiry={handleOpenInquiry}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenInquiry={handleOpenInquiry}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onGoHome={() => {
          setSelectedPackage(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('packages');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenInquiry={() => handleOpenInquiry('Custom Group Tour')}
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
      />

      {/* Search Filter Bar */}
      <div className="px-4">
        <SearchFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          destinations={destinationsList}
          totalResults={filteredPackages.length}
        />
      </div>

      {/* Category Pills Slider */}
      <CategoryPills
        selectedCategory={filters.category}
        onSelectCategory={(catName) => handleFilterChange({ category: catName })}
      />

      {/* Packages Section */}
      <main id="packages" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 bg-slate-50">
        
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#2956B1] text-xs font-extrabold uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Destinations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trending Group Packages
            </h2>
          </div>

          <div className="text-xs text-slate-500 font-semibold">
            Showing <span className="text-[#2956B1] font-extrabold">{filteredPackages.length}</span> verified itinerary packages
          </div>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                isWishlisted={wishlist.includes(pkg.id)}
                onToggleWishlist={toggleWishlist}
                onSelectPackage={(p) => setSelectedPackage(p)}
                onOpenInquiry={handleOpenInquiry}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto my-8 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 text-[#2956B1] flex items-center justify-center mx-auto">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-xl text-slate-900">No Matching Packages Found</h3>
            <p className="text-xs text-slate-600">
              We couldn't find any trips matching your current filter criteria. Try adjusting your budget or selecting all destinations.
            </p>
            <button
              onClick={handleResetFilters}
              className="bg-[#2956B1] hover:bg-blue-700 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-md transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Tour Statistics Section */}
      <TourStats />

      {/* Why Choose Trip With Safarwala Section */}
      <WhyChooseUs />

      {/* Branch Offices Section */}
      <BranchOffices />

      {/* Customer Reviews */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <WhatsAppButton />

      {/* Mobile Sticky Bottom Nav */}
      <MobileBottomNav
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenInquiry={() => handleOpenInquiry('Mobile Instant Booking')}
      />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultTripTitle={inquiryTripTitle}
      />

      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlistedPackages={wishlistedPackages}
        onRemoveWishlist={toggleWishlist}
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
        onOpenInquiry={handleOpenInquiry}
      />

    </div>
  );
}
