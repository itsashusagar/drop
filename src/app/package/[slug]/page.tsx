'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PACKAGES } from '@/data/packages';
import { PackageDetailPage } from '@/components/PackageDetailPage';
import { Navbar } from '@/components/Navbar';
import { InquiryModal } from '@/components/InquiryModal';

export default function PackageSlugPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryTripTitle, setInquiryTripTitle] = useState('');

  const pkg = PACKAGES.find((p) => p.slug === slug || p.id === slug) || PACKAGES[0];

  const handleOpenInquiry = (title: string) => {
    setInquiryTripTitle(title);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar
        wishlistCount={0}
        onOpenInquiry={() => handleOpenInquiry(pkg.title)}
        onOpenWishlist={() => {}}
      />

      <PackageDetailPage
        pkg={pkg}
        onBack={() => router.push('/')}
        onOpenInquiry={handleOpenInquiry}
      />

      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultTripTitle={inquiryTripTitle}
      />
    </div>
  );
}
