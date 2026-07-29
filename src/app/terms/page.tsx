'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
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
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement & Operating Rules</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          Terms & Conditions of <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">Service</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Last updated: July 2026. Please read these terms carefully before booking any group departure batch or custom trip with Trip With Safarwala.
        </p>
      </section>

      {/* Main Legal Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-8 flex-1">
        
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#2956B1] flex items-center justify-center text-xs">1</span>
              <span>Booking Confirmation & Advance Payment</span>
            </h2>
            <p>
              To confirm a seat on any fixed departure batch or customized trip, an advance booking deposit (typically ₹2,000 to ₹5,000 per seat depending on circuit duration) must be paid. The remaining balance must be cleared at least 7 days prior to departure date.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#2956B1] flex items-center justify-center text-xs">2</span>
              <span>Standard Cancellation & Refund Policy</span>
            </h2>
            <ul className="space-y-2 list-disc list-inside bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <li><strong>30+ Days Before Departure</strong>: 90% refund of total trip cost.</li>
              <li><strong>15 - 29 Days Before Departure</strong>: 50% refund of total trip cost.</li>
              <li><strong>0 - 14 Days Before Departure</strong>: Non-refundable. However, seats can be transferred to a friend or family member with prior notice.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#2956B1] flex items-center justify-center text-xs">3</span>
              <span>Code of Conduct & Group Harmony</span>
            </h2>
            <p>
              Trip With Safarwala promotes safe, respectful group dynamics. Any behavior involving physical harassment, verbal abuse, or possession of illegal substances will lead to immediate termination from the trip without refund.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#2956B1] flex items-center justify-center text-xs">4</span>
              <span>Himalayan Weather & Force Majeure</span>
            </h2>
            <p>
              Mountain circuits (Spiti, Ladakh, Kedarnath, Leh) are subject to sudden weather changes, landslides, and road blockages. In the event of force majeure, route changes made by the Trip Captain for group safety will be final. Additional accommodation expenses due to unexpected blockages are borne by participants.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#2956B1] flex items-center justify-center text-xs">5</span>
              <span>Luggage & Personal Belongings</span>
            </h2>
            <p>
              Participants are responsible for their personal valuables, cameras, electronics, and passports. Safarwala is not liable for loss or damage of baggage during transit.
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
