import React from 'react';
import { Clock, Rewind, FastForward } from 'lucide-react';
import { useBudgetStore } from '../store/budgetStore';
import { formatTrillion } from '../utils/formatters';

export const TimeMachine: React.FC = () => {
  const { currentYear, totalDebt, advanceYear, rewindYear } = useBudgetStore();

  return (
    <div className="mt-8 bg-gradient-to-r from-purple-900 to-indigo-800 rounded-lg shadow-lg p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Clock className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Time Machine</h2>
            <p className="text-purple-200">Simulate future budget scenarios</p>
          </div>
        </div>
        <div className="text-3xl font-bold">{currentYear}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-purple-200 mb-1">National Debt</div>
          <div className="text-2xl font-bold">{formatTrillion(totalDebt)}</div>
          <div className="text-sm text-purple-200">
            {(totalDebt / 350).toFixed(1)}% of GDP
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-purple-200 mb-1">Debt per Capita</div>
          <div className="text-2xl font-bold">
            ${((totalDebt * 1000) / 350).toLocaleString()}
          </div>
          <div className="text-sm text-purple-200">Based on ~350M population</div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={rewindYear}
          disabled={currentYear <= 2024}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Rewind className="w-5 h-5" />
          Previous Year
        </button>
        <button
          onClick={advanceYear}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2"
        >
          <FastForward className="w-5 h-5" />
          Advance Year
        </button>
      </div>
    </div>
  );
};