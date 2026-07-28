'use client';

import React from 'react';
import { BatchDate } from '@/types/travel';
import { Calendar, Users, CheckCircle2 } from 'lucide-react';

interface BatchSelectorProps {
  batches: BatchDate[];
  selectedBatchId: string;
  onSelectBatch: (batch: BatchDate) => void;
}

export const BatchSelector: React.FC<BatchSelectorProps> = ({
  batches,
  selectedBatchId,
  onSelectBatch,
}) => {
  return (
    <div className="space-y-3">
      <h4 className="font-extrabold text-white text-base sm:text-lg flex items-center gap-2">
        <Calendar className="w-4 h-4 text-[#2956B1]" />
        <span>Select Fixed Batch Date</span>
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {batches.map((batch) => {
          const isSelected = selectedBatchId === batch.id;
          return (
            <div
              key={batch.id}
              onClick={() => onSelectBatch(batch)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                isSelected
                  ? 'bg-[#2956B1]/20 border-[#2956B1] shadow-md shadow-[#2956B1]/20'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-[#2956B1] bg-[#2956B1] text-white' : 'border-slate-600'
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-100">
                    {batch.startDate} – {batch.endDate}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                        batch.status === 'Filling Fast'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {batch.status}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-400" />
                      {batch.availableSeats} seats left
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-extrabold text-sm sm:text-base text-blue-400">
                  ₹{batch.price.toLocaleString('en-IN')}
                </div>
                <span className="text-[10px] text-slate-500 font-semibold">per person</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
