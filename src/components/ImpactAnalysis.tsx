import React from 'react';
import { AlertTriangle, TrendingUp, Scale } from 'lucide-react';
import { useBudgetStore } from '../store/budgetStore';
import { PolicyImpact } from '../types/budget';

const SeverityBadge = ({ severity }: { severity: PolicyImpact['severity'] }) => {
  const styles = {
    low: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    medium: 'bg-orange-100 text-orange-800 border-orange-200',
    high: 'bg-red-100 text-red-800 border-red-200'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${styles[severity]}`}>
      {severity.charAt(0).toUpperCase() + severity.slice(1)} Impact
    </span>
  );
};

export const ImpactAnalysis: React.FC = () => {
  const { revenue, spending } = useBudgetStore();
  
  const getSignificantImpacts = () => {
    const impacts: Array<PolicyImpact & { category: string; percentChange: number }> = [];
    
    [...revenue, ...spending].forEach(category => {
      const percentChange = ((category.amount - category.baselineAmount) / category.baselineAmount) * 100;
      
      if (Math.abs(percentChange) >= 5) {
        category.impacts.forEach(impact => {
          impacts.push({
            ...impact,
            category: category.name,
            percentChange
          });
        });
      }
    });
    
    return impacts.sort((a, b) => Math.abs(b.percentChange) - Math.abs(a.percentChange));
  };

  const impacts = getSignificantImpacts();

  if (impacts.length === 0) {
    return (
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center text-gray-500">
        <Scale className="w-12 h-12 mx-auto mb-3 text-gray-400" />
        <p className="text-lg">No significant policy impacts yet</p>
        <p className="text-sm">Adjust budget categories by ±5% or more to see potential impacts</p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" />
          Policy Impact Analysis
        </h2>
        <div className="text-sm text-gray-500">
          Showing impacts for changes ≥5%
        </div>
      </div>
      
      <div className="grid gap-6">
        {impacts.map((impact, index) => (
          <div 
            key={index} 
            className="border-l-4 rounded-r-lg bg-gray-50 p-4"
            style={{ borderLeftColor: impact.percentChange > 0 ? '#059669' : '#DC2626' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-gray-800">{impact.category}</h3>
                <SeverityBadge severity={impact.severity} />
              </div>
              <span className={`font-medium ${impact.percentChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {impact.percentChange > 0 ? '+' : ''}{impact.percentChange.toFixed(1)}%
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">Short-term Impact</h4>
                <p className="text-gray-800">{impact.shortTerm}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">Long-term Impact</h4>
                <p className="text-gray-800">{impact.longTerm}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};