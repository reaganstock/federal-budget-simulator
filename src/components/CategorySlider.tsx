import React from 'react';
import { Info } from 'lucide-react';
import { useBudgetStore } from '../store/budgetStore';
import { BudgetCategory } from '../types/budget';
import { formatTrillion } from '../utils/formatters';

interface CategorySliderProps {
  category: BudgetCategory;
  type: 'revenue' | 'spending';
}

export const CategorySlider: React.FC<CategorySliderProps> = ({ category, type }) => {
  const setCategory = useBudgetStore((state) => state.setCategory);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setCategory(type, category.id, value);
  };

  const percentChange = ((category.amount - category.baselineAmount) / category.baselineAmount) * 100;
  const changeColor = percentChange > 0 ? 'text-green-600' : percentChange < 0 ? 'text-red-600' : 'text-gray-600';
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: category.color }}
          />
          <h3 className="font-semibold text-gray-800">{category.name}</h3>
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">{formatTrillion(category.amount)}</span>
          <span className={`text-sm ${changeColor}`}>
            {percentChange > 0 ? '+' : ''}{percentChange.toFixed(1)}%
          </span>
        </div>
      </div>
      
      <input
        type="range"
        min={category.baselineAmount * 0.5}
        max={category.baselineAmount * 1.5}
        step={category.baselineAmount * 0.01}
        value={category.amount}
        onChange={handleChange}
        className="w-full"
      />
      
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>-50%</span>
        <span>Baseline</span>
        <span>+50%</span>
      </div>
    </div>
  );
};