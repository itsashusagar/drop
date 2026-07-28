'use client';

import React from 'react';
import {
  MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, Building2,
  ShieldCheck, Navigation, Coffee, Car, Wifi, Sparkles, CheckCircle2,
  UserCheck
} from 'lucide-react';

export const BranchOffices: React.FC = () => {
  const delhiBranch = {
    name: 'Delhi Flagship Headquarters',
    city: 'Dilshad Garden, New Delhi',
    tag: 'Main Operational Hub & Travel Lounge',
    address: 'Near Dilshad Garden Metro Station, Grand Trunk Road, Shahdara, New Delhi - 110095',
    phone: '+91 95607 98341',
    altPhone: '+91 95607 98341',
    email: 'delhi@tripwithsafarwala.com',
    hours: 'Mon - Sat: 10:00 AM - 7:30 PM (Sun by Appointment)',
    status: 'Open Now • Closes at 7:30 PM',
    metro: '1 Min walk from Dilshad Garden Metro Station (Red Line)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0827293529367!2d77.31976867625807!3d28.6756616822292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb638fb19bb7%3A0x8cf6b485d9bf16c!2sDilshad%20Garden%20Metro%20Station!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directMapUrl: 'https://www.google.com/maps/place/Trip+with+Safarwala/@28.7042252,77.3164692,727m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390cfb638fb19bb7:0x60c61092acccf2fa!8m2!3d28.7042206!4d77.3213401!16s%2Fg%2F11zcxnnpgk?entry=ttu',
    officeImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  };

  return (
    <section id="branches" className="py-20 bg-slate-50 border-t border-slate-200 text-slate-900 relative overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-100/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2956B1] text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>Visit Our Main Office</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Contact Our Delhi Headquarters
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Walk into our flagship Delhi office near Dilshad Garden Metro Station for a hot cup of coffee and design your custom itinerary with senior trip captains.
          </p>
        </div>

        {/* Main Single Branch Card Grid */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Branch Details & Amenities */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 space-y-6">
            
            <div className="space-y-6">
              {/* Branch Header & Live Status */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-extrabold text-[#2956B1] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {delhiBranch.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    {delhiBranch.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-700">{delhiBranch.status}</span>
                </div>
              </div>

              {/* Office Photo Card Banner */}
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
                <img
                  src={delhiBranch.officeImage}
                  alt={delhiBranch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white text-xs font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Free Espresso Coffee & Custom Itinerary Planning Lounge</span>
                  </div>
                </div>
              </div>

              {/* Detailed Info Cards */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-800">
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#2956B1] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Physical Address</div>
                    <div className="font-extrabold text-slate-900 leading-snug">{delhiBranch.address}</div>
                    <div className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {delhiBranch.metro}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                    <Phone className="w-5 h-5 text-[#2956B1] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Direct Desk</div>
                      <a href={`tel:${delhiBranch.phone}`} className="font-extrabold text-[#2956B1] hover:underline block">
                        {delhiBranch.phone}
                      </a>
                      <span className="text-[11px] text-slate-500 font-medium">{delhiBranch.altPhone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                    <Mail className="w-5 h-5 text-[#2956B1] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Official Email</div>
                      <a href={`mailto:${delhiBranch.email}`} className="font-bold text-slate-900 hover:text-[#2956B1] truncate block">
                        {delhiBranch.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                  <Clock className="w-5 h-5 text-[#2956B1] shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Working Hours</div>
                    <div className="text-xs font-bold text-slate-900">{delhiBranch.hours}</div>
                  </div>
                </div>
              </div>

              {/* Office Lounge Amenities Badges */}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Branch Amenities</div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-bold text-slate-700 flex items-center gap-1.5 shadow-sm">
                    <Coffee className="w-3.5 h-3.5 text-amber-600" /> Free Coffee & Tea Lounge
                  </span>
                  <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-bold text-slate-700 flex items-center gap-1.5 shadow-sm">
                    <Wifi className="w-3.5 h-3.5 text-blue-600" /> High-Speed Wi-Fi
                  </span>
                  <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-bold text-slate-700 flex items-center gap-1.5 shadow-sm">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-600" /> Senior Captain Consult
                  </span>
                  <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl font-bold text-slate-700 flex items-center gap-1.5 shadow-sm">
                    <Car className="w-3.5 h-3.5 text-indigo-600" /> Visitor Parking
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${delhiBranch.phone}`}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span>Call Branch Desk</span>
              </a>

              <a
                href={`https://wa.me/919560798341?text=${encodeURIComponent(`Hello Trip With Safarwala! I want to visit your Delhi Dilshad Garden Office or schedule a meeting.`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-extrabold text-xs py-3.5 px-4 rounded-xl border border-emerald-200 flex items-center justify-center gap-2 transition"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                <span>Schedule Visit</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps & Directions */}
          <div className="lg:col-span-6 min-h-[420px] lg:min-h-[560px] relative bg-slate-100 flex flex-col">
            
            {/* Overlay Map Badge */}
            <div className="absolute top-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-md border border-slate-200 p-3 rounded-2xl flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Navigation className="w-4 h-4 text-[#2956B1] animate-bounce" />
                <span>Dilshad Garden Metro Station, New Delhi Map</span>
              </div>

              <a
                href={delhiBranch.directMapUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#2956B1] hover:bg-blue-700 text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-xl flex items-center gap-1 shadow-md transition"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map iframe */}
            <iframe
              title="Delhi Branch Location Map"
              src={delhiBranch.mapEmbedUrl}
              className="w-full h-full min-h-[460px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom Location Note */}
            <div className="bg-white border-t border-slate-200 p-4 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> ISO 9001:2015 Govt. Registered Branch
              </span>
              <span className="font-extrabold text-[#2956B1]">Verified Location</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
