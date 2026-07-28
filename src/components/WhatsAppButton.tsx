'use client';

import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '919560798341';
  const message = encodeURIComponent('Hello Trip With Safarwala! I want to inquire about upcoming group tour packages.');

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-50">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 group"
        title="Chat on WhatsApp"
      >
        {/* Pulsing Radar Ring Behind */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />
        
        {/* Outer Soft Glow Aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 blur-md group-hover:bg-emerald-400/60 transition-all duration-300" />

        {/* Official WhatsApp Icon with smooth tilt & scale on hover */}
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-md group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-300"
        />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
