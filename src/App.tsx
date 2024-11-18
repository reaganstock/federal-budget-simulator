import React from 'react';
import { BudgetHeader } from './components/BudgetHeader';
import { BudgetChart } from './components/BudgetChart';
import { CategorySlider } from './components/CategorySlider';
import { ImpactAnalysis } from './components/ImpactAnalysis';
import { TrendAnalysis } from './components/TrendAnalysis';
import { TimeMachine } from './components/TimeMachine';
import { useBudgetStore } from './store/budgetStore';

const App: React.FC = () => {
  const { revenue, spending, resetBudget } = useBudgetStore();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <BudgetHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <BudgetChart type="revenue" />
          <BudgetChart type="spending" />
        </div>
        
        <TimeMachine />
        <TrendAnalysis />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Revenue</h2>
            {revenue.map((category) => (
              <CategorySlider
                key={category.id}
                category={category}
                type="revenue"
              />
            ))}
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Spending</h2>
            {spending.map((category) => (
              <CategorySlider
                key={category.id}
                category={category}
                type="spending"
              />
            ))}
          </div>
        </div>
        
        <ImpactAnalysis />
        
        <div className="mt-8 flex justify-center">
          <button
            onClick={resetBudget}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            Reset Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;