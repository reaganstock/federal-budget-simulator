import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useBudgetStore } from '../store/budgetStore';
import { historicalData } from '../data/historicalData';

export const TrendAnalysis: React.FC = () => {
  const { revenue, spending } = useBudgetStore();
  
  const totalRevenue = revenue.reduce((acc, cat) => acc + cat.amount, 0);
  const totalSpending = spending.reduce((acc, cat) => acc + cat.amount, 0);
  
  const currentYear = new Date().getFullYear();
  const projectionYears = 10;
  
  const data = [
    {
      id: 'Historical Deficit',
      data: historicalData.map(d => ({
        x: d.year,
        y: d.deficit
      }))
    },
    {
      id: 'Current Policy',
      data: Array.from({ length: projectionYears }, (_, i) => ({
        x: currentYear + i,
        y: totalRevenue - totalSpending
      }))
    }
  ];

  return (
    <div className="mt-8 bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Historical & Projected Trends</h2>
      <div className="h-[400px]">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ 
            type: 'linear',
            min: 2010,
            max: currentYear + projectionYears
          }}
          yScale={{
            type: 'linear',
            min: -3500,
            max: 0,
            stacked: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
            format: (value) => Math.floor(value).toString()
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Deficit/Surplus (Billions $)',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          enablePoints={true}
          pointSize={8}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          enableGridX={true}
          enableGridY={true}
          colors={['#94a3b8', '#ef4444']}
          lineWidth={3}
          enableArea={true}
          areaOpacity={0.1}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 140,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          tooltip={({ point }) => (
            <div className="bg-white px-3 py-2 shadow-lg rounded-lg border border-gray-100">
              <div className="font-medium text-gray-800">
                {point.serieId}
              </div>
              <div className="text-sm text-gray-600">
                Year: {point.data.x}
              </div>
              <div className="font-bold text-gray-900">
                ${Math.abs(point.data.y.toFixed(1))}B {point.data.y < 0 ? 'Deficit' : 'Surplus'}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};