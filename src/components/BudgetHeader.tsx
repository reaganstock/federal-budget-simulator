import React from 'react';
import { Info, Download } from 'lucide-react';
import { useBudgetStore } from '../store/budgetStore';
import { formatTrillion } from '../utils/formatters';

export const BudgetHeader: React.FC = () => {
  const { deficit, revenue, spending } = useBudgetStore();
  
  const totalRevenue = revenue.reduce((acc, cat) => acc + cat.amount, 0);
  const totalSpending = spending.reduce((acc, cat) => acc + cat.amount, 0);
  
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Federal Budget Simulator</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Save Scenario
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Revenue
              <Info className="w-4 h-4 text-gray-400" />
            </h2>
            <span className="text-xl font-bold text-green-600">
              {formatTrillion(totalRevenue)}
            </span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Spending
              <Info className="w-4 h-4 text-gray-400" />
            </h2>
            <span className="text-xl font-bold text-red-600">
              {formatTrillion(totalSpending)}
            </span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Deficit
              <Info className="w-4 h-4 text-gray-400" />
            </h2>
            <span className="text-xl font-bold text-red-600">
              {formatTrillion(Math.abs(deficit))}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${deficit < 0 ? 'bg-red-500' : 'bg-green-500'}`}
              style={{ width: `${Math.min(Math.abs(deficit) / 20, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};