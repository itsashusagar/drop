'use client';

import React from 'react';
import { CATEGORIES } from '@/data/categories';
import { Users, Compass, Mountain, Globe, Clock, Heart, Sparkles } from 'lucide-react';

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
    <section id="categories" className="py-12 bg-slate-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[#2956B1] text-xs font-extrabold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Choose Your Travel Style</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Trips By Category
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          Filter from high-altitude Himalayan road trips to relaxing island staycations.
        </p>
      </div>

      {/* Pill Buttons */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none">
        <button
          onClick={() => onSelectCategory('')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap border shadow-sm ${
            selectedCategory === ''
              ? 'bg-gradient-to-r from-[#2956B1] to-blue-600 text-white border-blue-600 shadow-md shadow-[#2956B1]/20'
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
          }`}
        >
          <span>✨ All Destinations</span>
        </button>

        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory.toLowerCase() === cat.name.toLowerCase() || selectedCategory.toLowerCase() === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap border shadow-sm ${
                isSelected
                  ? 'bg-gradient-to-r from-[#2956B1] to-blue-600 text-white border-blue-600 shadow-md shadow-[#2956B1]/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {(cat.iconName && iconMap[cat.iconName]) || <Compass className="w-4 h-4" />}
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white font-extrabold' : 'bg-slate-100 text-[#2956B1]'}`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
