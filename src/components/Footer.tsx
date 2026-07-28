'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, Share2, Camera, ShieldCheck, Heart, Send, CheckCircle2, Sparkles, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-700 pt-12 pb-24 sm:pb-12 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter / Secret Deals Banner */}
        <div className="bg-gradient-to-r from-[#2956B1] via-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Join 50,000+ Travel Enthusiasts</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get Secret Travel Deals & Flat ₹2,000 Off
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-lg">
              Subscribe to receive early-bird batch alerts, monsoon discount coupons, and secret weekend itineraries.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 shrink-0">
            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder:text-blue-200 text-xs px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-300 min-w-[260px]"
                />
                <button
                  type="submit"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs px-6 py-3 rounded-2xl shadow-lg transition active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </>
            )}
          </form>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & Registrations */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Trip With Safarwala Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain shrink-0 drop-shadow-sm"
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

            <p className="text-slate-600 leading-relaxed text-xs max-w-sm">
              Trip With Safarwala is India's premier youth travel company specializing in curated backpacking group trips, Himalayan treks, motorbiking expeditions, and customized staycations.
            </p>

            {/* Accreditations & Socials */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-700">
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-[#2956B1]" /> ISO 9001:2015 Certified
                </span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Govt. Recognized
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a href="#" className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:text-[#2956B1] hover:border-[#2956B1] transition shadow-sm" title="Instagram">
                  <Camera className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:text-[#2956B1] hover:border-[#2956B1] transition shadow-sm" title="Official Website">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:text-[#2956B1] hover:border-[#2956B1] transition shadow-sm" title="Share Community">
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Top Circuits */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">Top Himalayan Circuits</h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><a href="#packages" className="hover:text-[#2956B1] transition">Spiti Valley Road Trip</a></li>
              <li><a href="#packages" className="hover:text-[#2956B1] transition">Meghalaya & Dawki River</a></li>
              <li><a href="#packages" className="hover:text-[#2956B1] transition">Kashmir & Gulmarg Gondola</a></li>
              <li><a href="#packages" className="hover:text-[#2956B1] transition">Leh Ladakh Bike Tour</a></li>
              <li><a href="#packages" className="hover:text-[#2956B1] transition">Kedarnath Dham Trek</a></li>
              <li><a href="#packages" className="hover:text-[#2956B1] transition">Bali Island Getaway</a></li>
            </ul>
          </div>

          {/* Col 3: Travel Categories */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">Travel Experiences</h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><a href="#categories" className="hover:text-[#2956B1] transition">Youth Backpacking Batches</a></li>
              <li><a href="#categories" className="hover:text-[#2956B1] transition">Solo Female Safe Trips</a></li>
              <li><a href="#categories" className="hover:text-[#2956B1] transition">Weekend Trips from Delhi</a></li>
              <li><a href="#categories" className="hover:text-[#2956B1] transition">Honeymoon Staycations</a></li>
              <li><a href="#categories" className="hover:text-[#2956B1] transition">College & Corporate Groups</a></li>
              <li><a href="#categories" className="hover:text-[#2956B1] transition">Customized Private Cars</a></li>
            </ul>
          </div>

          {/* Col 4: Delhi Branch Office */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider">Delhi Headquarters</h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <MapPin className="w-4 h-4 text-[#2956B1] shrink-0 mt-0.5" />
                <span>Near Dilshad Garden Metro Station, Grand Trunk Road, Shahdara, New Delhi - 110095</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <Phone className="w-4 h-4 text-[#2956B1] shrink-0" />
                <span className="font-bold text-slate-800">+91 95607 98341</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm">
                <Mail className="w-4 h-4 text-[#2956B1] shrink-0" />
                <span className="truncate">delhi@tripwithsafarwala.com</span>
              </div>
              <a
                href="https://www.google.com/maps/place/Trip+with+Safarwala/@28.7042252,77.3164692,727m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390cfb638fb19bb7:0x60c61092acccf2fa!8m2!3d28.7042206!4d77.3213401!16s%2Fg%2F11zcxnnpgk?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-blue-50/70 hover:bg-blue-100/80 p-2.5 rounded-xl border border-blue-200 text-slate-900 font-extrabold text-xs transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 object-contain" />
                  <span>Google Reviews (4.9★)</span>
                </div>
                <span className="text-[#2956B1] text-[10px]">View Maps →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights, Payment Badges & Legal */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-1">
            <span>© 2026 Trip With Safarwala. Designed with</span>
            <Heart className="w-3.5 h-3.5 fill-[#2956B1] text-[#2956B1]" />
            <span>for Indian Backpackers.</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-slate-600 font-medium">
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> UPI / Cards / Razorpay Secured
            </span>
            <span>•</span>
            <a href="#" className="hover:text-[#2956B1]">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#2956B1]">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-[#2956B1]">Cancellation Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
