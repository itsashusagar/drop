'use client';

import React from 'react';
import { Search, MapPin, Calendar, Clock, Filter, RotateCcw } from 'lucide-react';
import { FilterState } from '@/types/travel';

interface SearchFilterProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  destinations: string[];
  totalResults: number;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  destinations,
  totalResults,
}) => {
  return (
    <div id="search" className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-2xl relative z-20 max-w-6xl mx-auto -mt-6 sm:-mt-8 text-slate-900">
      
      {/* Top Title & Search Input */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-200">
        <div className="flex items-center gap-2 text-slate-900">
          <Filter className="w-5 h-5 text-[#2956B1]" />
          <h3 className="font-extrabold text-lg tracking-tight">Find Your Next Adventure</h3>
          <span className="ml-2 text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2956B1] border border-blue-200">
            {totalResults} Packages Found
          </span>
        </div>

        {/* Text Search Box */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            placeholder="Search by trip, location (e.g. Spiti, Dawki, Bali)..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-[#2956B1] transition placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Grid of dropdown filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Destination Dropdown */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex flex-col justify-center">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#2956B1]" />
            Destination
          </label>
          <select
            value={filters.destination}
            onChange={(e) => onFilterChange({ destination: e.target.value })}
            className="bg-transparent text-slate-900 font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-white text-slate-900">All Destinations</option>
            {destinations.map((dest) => (
              <option key={dest} value={dest} className="bg-white text-slate-900">
                {dest}
              </option>
            ))}
          </select>
        </div>

        {/* Month Selector */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex flex-col justify-center">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#2956B1]" />
            Travel Month
          </label>
          <select
            value={filters.month}
            onChange={(e) => onFilterChange({ month: e.target.value })}
            className="bg-transparent text-slate-900 font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-white text-slate-900">Any Month</option>
            <option value="Aug 2026" className="bg-white text-slate-900">August 2026</option>
            <option value="Sep 2026" className="bg-white text-slate-900">September 2026</option>
            <option value="Oct 2026" className="bg-white text-slate-900">October 2026</option>
          </select>
        </div>

        {/* Duration Selector */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex flex-col justify-center">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#2956B1]" />
            Duration
          </label>
          <select
            value={filters.duration}
            onChange={(e) => onFilterChange({ duration: e.target.value })}
            className="bg-transparent text-slate-900 font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
          >
            <option value="" className="bg-white text-slate-900">Any Duration</option>
            <option value="3-5" className="bg-white text-slate-900">3 to 5 Days</option>
            <option value="6-8" className="bg-white text-slate-900">6 to 8 Days</option>
            <option value="9+" className="bg-white text-slate-900">9+ Days</option>
          </select>
        </div>

        {/* Budget Filter */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-1">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Max Budget
            </label>
            <span className="text-xs font-extrabold text-[#2956B1]">
              ₹{filters.maxBudget.toLocaleString('en-IN')}
            </span>
          </div>
          <input
            type="range"
            min="10000"
            max="40000"
            step="2000"
            value={filters.maxBudget}
            onChange={(e) => onFilterChange({ maxBudget: Number(e.target.value) })}
            className="w-full accent-[#2956B1] cursor-pointer h-1.5 bg-slate-200 rounded-lg"
          />
        </div>

      </div>

      {/* Bottom Reset Button */}
      {(filters.destination || filters.category || filters.month || filters.duration || filters.searchQuery || filters.maxBudget < 40000) && (
        <div className="mt-4 pt-3 flex justify-end border-t border-slate-100">
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#2956B1] transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset All Filters
          </button>
        </div>
      )}

    </div>
  );
};
