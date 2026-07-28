'use client';

import React from 'react';
import { CATEGORIES } from '@/data/categories';
import { Users, Compass, Mountain, Globe, Clock, Heart, Sparkles, Check } from 'lucide-react';

interface CategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-4 h-4" />,
  Compass: <Compass className="w-4 h-4" />,
  Mountain: <Mountain className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Clock: <Clock className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />,
};

export const CategoryPills: React.FC<CategoryPillsProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-10 sm:py-16 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      {/* Decorative Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[#2956B1] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest mb-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#2956B1]" />
              <span>Choose Your Travel Style</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Explore Trips By Category
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium leading-relaxed">
            From high-altitude Himalayan road trips to relaxing island staycations — pick your dream vibe.
          </p>
        </div>

        {/* Quick Horizontal Scrollable Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          <button
            onClick={() => onSelectCategory('')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap border cursor-pointer shrink-0 ${
              selectedCategory === ''
                ? 'bg-[#2956B1] text-white border-[#2956B1] shadow-md shadow-[#2956B1]/30 ring-2 ring-[#2956B1]/20'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All Trips</span>
          </button>

          {CATEGORIES.map((cat) => {
            const isSelected =
              selectedCategory.toLowerCase() === cat.name.toLowerCase() ||
              selectedCategory.toLowerCase() === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(isSelected ? '' : cat.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap border cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[#2956B1] text-white border-[#2956B1] shadow-md shadow-[#2956B1]/30 ring-2 ring-[#2956B1]/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                }`}
              >
                {(cat.iconName && iconMap[cat.iconName]) || <Compass className="w-3.5 h-3.5" />}
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#2956B1]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Visual Category Cards Grid (Responsive 2 cols on mobile, 3 on tablet, 6 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const isSelected =
              selectedCategory.toLowerCase() === cat.name.toLowerCase() ||
              selectedCategory.toLowerCase() === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(isSelected ? '' : cat.name)}
                className={`group relative h-44 sm:h-56 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-xl border ${
                  isSelected
                    ? 'border-[#2956B1] ring-4 ring-[#2956B1]/20 shadow-lg scale-[1.02]'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-t from-slate-950 via-slate-900/70 to-[#2956B1]/40 opacity-95'
                      : 'bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-85 group-hover:opacity-90'
                  }`}
                />

                {/* Top Badge: Trip Count */}
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 sm:py-1 rounded-full backdrop-blur-md transition ${
                      isSelected
                        ? 'bg-[#2956B1] text-white shadow-sm'
                        : 'bg-black/50 text-white border border-white/20'
                    }`}
                  >
                    {cat.count} Trips
                  </span>
                </div>

                {/* Active Checkmark Badge */}
                {isSelected && (
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="bg-emerald-500 text-white p-1 rounded-full flex items-center justify-center shadow-md animate-bounce">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  </div>
                )}

                {/* Card Content (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 flex flex-col justify-end">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110 ${
                      isSelected ? 'bg-white text-[#2956B1]' : 'bg-white/20 backdrop-blur-md text-white'
                    }`}
                  >
                    {(cat.iconName && iconMap[cat.iconName]) || <Compass className="w-3.5 h-3.5" />}
                  </div>

                  <h3 className="font-extrabold text-white text-xs sm:text-sm leading-tight mb-0.5 group-hover:text-blue-200 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-[10px] text-slate-300 line-clamp-2 leading-snug font-medium hidden sm:block">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
