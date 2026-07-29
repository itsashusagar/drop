'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar
        wishlistCount={0}
        onOpenInquiry={() => {}}
        onOpenWishlist={() => {}}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-amber-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Data Protection & Privacy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          Privacy Policy & <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">Data Security</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          At Trip With Safarwala, we treat your privacy and personal contact information with utmost confidentiality and security.
        </p>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-8 flex-1">
        
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Lock className="w-5 h-5 text-[#2956B1]" />
              <span>1. Information We Collect</span>
            </h2>
            <p>
              When you submit a trip inquiry or book a batch, we collect your name, phone number, email address, emergency contact details, and ID proof (for inner-line permits in Spiti, Ladakh, and Meghalaya).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Database className="w-5 h-5 text-[#2956B1]" />
              <span>2. How We Use Your Data</span>
            </h2>
            <ul className="space-y-2 list-disc list-inside bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <li>To issue hotel vouchers, cab transport permits, and train/flight tickets.</li>
              <li>To share WhatsApp group details for your trip batch prior to departure.</li>
              <li>To send secret travel discounts and batch alerts (if subscribed).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <Eye className="w-5 h-5 text-[#2956B1]" />
              <span>3. Zero Spam & Third-Party Sharing Guarantee</span>
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third-party advertisers. Your contact details are strictly accessed by authorized Safarwala trip managers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <ShieldCheck className="w-5 h-5 text-[#2956B1]" />
              <span>4. Payment Encryption</span>
            </h2>
            <p>
              All online payments are processed through PCI-DSS compliant payment gateways (Razorpay/UPI). Safarwala does not store your credit card numbers or banking passwords.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
