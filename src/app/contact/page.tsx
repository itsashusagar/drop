'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles, MessageSquare, Compass, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Spiti Valley',
    travelers: '2',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        destination: 'Spiti Valley',
        travelers: '2',
        message: '',
      });
    }, 4000);
  };

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
          <MessageSquare className="w-3.5 h-3.5" />
          <span>We'd Love to Hear From You</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
          Get in Touch with Our <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">Travel Experts</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Have questions about customized group itineraries, corporate bookings, or upcoming Himalayan batches? Drop us a line or visit our headquarters.
        </p>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-12 flex-1">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#2956B1]" />
                <span>Delhi Headquarters</span>
              </h2>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-[#2956B1] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Head Office Address</div>
                    <p className="text-slate-600 mt-0.5">Near Dilshad Garden Metro Station, Grand Trunk Road, Shahdara, New Delhi - 110095</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Direct Helpline & WhatsApp</div>
                    <p className="text-slate-900 font-extrabold text-sm mt-0.5">+91 95607 98341</p>
                    <p className="text-slate-500 text-[11px]">Available Monday to Sunday (9:00 AM - 9:00 PM IST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Official Email Inquiry</div>
                    <p className="text-slate-800 font-semibold text-xs mt-0.5">delhi@tripwithsafarwala.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <Clock className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Office Hours</div>
                    <p className="text-slate-600 mt-0.5">Mon - Sat: 10:00 AM to 7:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-bold">
                <span className="bg-blue-50 text-[#2956B1] px-3 py-1 rounded-full border border-blue-200">
                  ISO 9001:2015 Certified
                </span>
                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                  Govt. Recognized
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">Send Us a Direct Message</h2>
                <p className="text-xs text-slate-500 mt-1">Fill out the form below and our itinerary consultant will call you back within 30 minutes.</p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                  <h3 className="text-lg font-extrabold text-slate-900">Inquiry Sent Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out to Trip With Safarwala. Our travel captain will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#2956B1] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#2956B1] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#2956B1] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Preferred Destination</label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#2956B1] focus:bg-white font-semibold"
                      >
                        <option value="Spiti Valley">Spiti Valley Road Trip</option>
                        <option value="Kedarnath Dham">Kedarnath Dham Trek</option>
                        <option value="Leh Ladakh">Leh Ladakh Expedition</option>
                        <option value="Meghalaya">Meghalaya & Dawki</option>
                        <option value="Kashmir">Kashmir & Gulmarg</option>
                        <option value="Bali">Bali Overseas Getaway</option>
                        <option value="Custom Group">Custom Private Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Message / Travel Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your preferred travel dates, group size, or custom requests..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:outline-none focus:border-[#2956B1] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2956B1] hover:bg-blue-700 text-white font-extrabold text-sm py-4 rounded-2xl shadow-lg transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Travel Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#2956B1]" />
              <span>Locate Delhi HQ on Google Maps</span>
            </h3>
            <span className="text-xs text-slate-500 font-semibold">Near Dilshad Garden Metro Station</span>
          </div>

          <div className="h-96 w-full rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.715101031448!2d77.31876527633785!3d28.704225175628507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb638fb19bb7%3A0x60c61092acccf2fa!2sTrip%20with%20Safarwala!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}
