'use client';

import React, { useState } from 'react';
import { ItineraryDay } from '@/types/travel';
import { ChevronDown, ChevronUp, Utensils, Home, MapPin } from 'lucide-react';

interface ItineraryAccordionProps {
  itinerary: ItineraryDay[];
}

export const ItineraryAccordion: React.FC<ItineraryAccordionProps> = ({ itinerary }) => {
  const [openDays, setOpenDays] = useState<number[]>([1]); // First day open by default

  const toggleDay = (dayNum: number) => {
    setOpenDays((prev) =>
      prev.includes(dayNum) ? prev.filter((d) => d !== dayNum) : [...prev, dayNum]
    );
  };

  const expandAll = () => setOpenDays(itinerary.map((item) => item.day));
  const collapseAll = () => setOpenDays([]);

  return (
    <div className="space-y-4">
      {/* Controls header */}
      <div className="flex justify-between items-center pb-2">
        <h4 className="font-extrabold text-white text-base sm:text-lg flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#2956B1]" />
          <span>Day-wise Itinerary ({itinerary.length} Days)</span>
        </h4>
        <div className="flex gap-3 text-xs font-semibold text-blue-400">
          <button onClick={expandAll} className="hover:underline">Expand All</button>
          <span className="text-slate-700">|</span>
          <button onClick={collapseAll} className="hover:underline">Collapse All</button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {itinerary.map((day) => {
          const isOpen = openDays.includes(day.day);
          return (
            <div
              key={day.day}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-all"
            >
              {/* Day Header */}
              <button
                onClick={() => toggleDay(day.day)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/40 transition gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2956B1] to-blue-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md">
                    D{day.day}
                  </div>
                  <span className="font-bold text-sm sm:text-base text-slate-100 leading-snug">
                    {day.title}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-[#2956B1] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {/* Day Body Content */}
              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 space-y-3 border-t border-slate-800/60 ml-11">
                  <p className="leading-relaxed text-slate-300">{day.description}</p>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
                    {/* Meals Tag */}
                    {day.meals && day.meals.length > 0 && (
                      <div className="flex items-center gap-1.5 font-semibold text-blue-300 bg-[#2956B1]/20 px-2.5 py-1 rounded-lg border border-[#2956B1]/30">
                        <Utensils className="w-3.5 h-3.5" />
                        <span>Meals: {day.meals.join(', ')}</span>
                      </div>
                    )}

                    {/* Stay Tag */}
                    {day.stay && (
                      <div className="flex items-center gap-1.5 font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        <Home className="w-3.5 h-3.5" />
                        <span>Stay: {day.stay}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
