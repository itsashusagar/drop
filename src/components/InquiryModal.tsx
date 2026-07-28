'use client';

import React, { useState } from 'react';
import { X, Send, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTripTitle?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTripTitle = '',
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(defaultTripTitle || 'Custom Itinerary Inquiry');
  const [travelers, setTravelers] = useState('2');
  const [month, setMonth] = useState('August 2026');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto launch WhatsApp after lead capture
      const text = `Hi Trip With Safarwala! My name is ${name}. I am planning a trip for ${destination} in ${month} for ${travelers} traveler(s). Please call me at ${phone}.`;
      window.open(`https://wa.me/919560798341?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-lg p-6 shadow-2xl text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Inquiry Received!</h3>
            <p className="text-xs text-slate-600">
              Connecting you directly with a Trip With Safarwala Captain on WhatsApp...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-[#2956B1] text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Trip With Safarwala Concierge</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">Plan Your Custom Trip</h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill in your details to get instant customized itinerary PDFs & pricing quotes.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 95607 98341"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email (Optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Target Trip / Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Spiti, Meghalaya, Kashmir, Bali..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Travelers Count</label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1] cursor-pointer"
                >
                  <option value="1">1 Person (Solo)</option>
                  <option value="2">2 Persons (Couple/Duo)</option>
                  <option value="3-5">3 to 5 Friends</option>
                  <option value="6+">6+ Group / Corporate</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Travel Month</label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#2956B1] cursor-pointer"
                >
                  <option value="August 2026">August 2026</option>
                  <option value="September 2026">September 2026</option>
                  <option value="October 2026">October 2026</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#2956B1] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-extrabold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#2956B1]/20 transition"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
              <span>Get Free PDF Itinerary & Quote</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
