import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { useBudgetStore } from '../store/budgetStore';
import { formatTrillion } from '../utils/formatters';

const chartTheme = {
  fontSize: 12,
  textColor: '#374151',
  labels: {
    text: {
      fontSize: 11,
      fill: '#374151'
    }
  }
};

export const BudgetChart: React.FC<{ type: 'revenue' | 'spending' }> = ({ type }) => {
  const data = useBudgetStore((state) => state[type]);
  
  const chartData = data.map((item) => ({
    id: item.name,
    label: item.name,
    value: item.amount,
    color: item.color,
    formattedValue: formatTrillion(item.amount)
  }));

  return (
    <div className="h-[400px] bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">
        {type === 'revenue' ? 'Where Money Comes From' : 'Where Money Goes'}
      </h2>
      <div className="h-[340px]">
        <ResponsivePie
          data={chartData}
          margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
          innerRadius={0.6}
          padAngle={0.5}
          cornerRadius={4}
          activeOuterRadiusOffset={8}
          colors={{ datum: 'data.color' }}
          enableArcLinkLabels={true}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#4B5563"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          animate
          motionConfig="gentle"
          theme={chartTheme}
          arcLabel={d => d.data.formattedValue}
          tooltip={({ datum }) => (
            <div className="bg-white px-3 py-2 shadow-lg rounded-lg border border-gray-100">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: datum.color }}
                />
                <span className="font-medium">{datum.label}</span>
              </div>
              <div className="mt-1 font-bold text-gray-700">
                {datum.data.formattedValue}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};