export const initialRevenue = [
  {
    id: 'income-tax',
    name: 'Individual Income Tax',
    amount: 2100,
    baselineAmount: 2100,
    color: '#4C51BF',
    impacts: [
      {
        shortTerm: 'Immediate impact on household disposable income',
        longTerm: 'Potential changes in labor force participation and savings rates',
        severity: 'high'
      }
    ]
  },
  {
    id: 'payroll-tax',
    name: 'Payroll Taxes',
    amount: 1600,
    baselineAmount: 1600,
    color: '#F6AD55',
    impacts: [
      {
        shortTerm: 'Direct effect on worker take-home pay and employer costs',
        longTerm: 'Long-term sustainability of Social Security and Medicare funding',
        severity: 'high'
      }
    ]
  },
  {
    id: 'corporate-tax',
    name: 'Corporate Income Tax',
    amount: 568.7,
    baselineAmount: 568.7,
    color: '#68D391',
    impacts: [
      {
        shortTerm: 'Business investment and hiring decisions',
        longTerm: 'International competitiveness and corporate relocations',
        severity: 'medium'
      }
    ]
  },
  {
    id: 'other-revenue',
    name: 'Other Revenue',
    amount: 233.2,
    baselineAmount: 233.2,
    color: '#F687B3',
    impacts: [
      {
        shortTerm: 'Various economic sectors affected by specific fees and taxes',
        longTerm: 'Diversity of revenue streams and fiscal stability',
        severity: 'low'
      }
    ]
  }
];

export const initialSpending = [
  {
    id: 'health-care',
    name: 'Health Care',
    amount: 1800,
    baselineAmount: 1800,
    color: '#F56565',
    impacts: [
      {
        shortTerm: 'Access to healthcare services and prescription drugs',
        longTerm: 'Population health outcomes and healthcare system sustainability',
        severity: 'high'
      }
    ]
  },
  {
    id: 'social-security',
    name: 'Social Security',
    amount: 1500,
    baselineAmount: 1500,
    color: '#48BB78',
    impacts: [
      {
        shortTerm: 'Retirement benefits and disability payments',
        longTerm: 'Elder poverty rates and retirement planning',
        severity: 'high'
      }
    ]
  },
  {
    id: 'defense',
    name: 'Defense',
    amount: 907.7,
    baselineAmount: 907.7,
    color: '#4299E1',
    impacts: [
      {
        shortTerm: 'Military readiness and personnel',
        longTerm: 'National security capabilities and global military presence',
        severity: 'high'
      }
    ]
  },
  {
    id: 'interest',
    name: 'Interest',
    amount: 870.1,
    baselineAmount: 870.1,
    color: '#ECC94B',
    impacts: [
      {
        shortTerm: 'Federal borrowing costs',
        longTerm: 'Debt sustainability and credit rating',
        severity: 'medium'
      }
    ]
  },
  {
    id: 'economic-security',
    name: 'Economic Security',
    amount: 441.2,
    baselineAmount: 441.2,
    color: '#9F7AEA',
    impacts: [
      {
        shortTerm: 'Unemployment benefits and food assistance',
        longTerm: 'Poverty rates and economic mobility',
        severity: 'high'
      }
    ]
  },
  {
    id: 'veterans',
    name: 'Veterans\' Benefits',
    amount: 346.3,
    baselineAmount: 346.3,
    color: '#ED64A6',
    impacts: [
      {
        shortTerm: 'Healthcare and education benefits for veterans',
        longTerm: 'Long-term care and support for aging veteran population',
        severity: 'medium'
      }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    amount: 292.2,
    baselineAmount: 292.2,
    color: '#4FD1C5',
    impacts: [
      {
        shortTerm: 'School funding and student aid',
        longTerm: 'Workforce development and economic competitiveness',
        severity: 'high'
      }
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    amount: 353.8,
    baselineAmount: 353.8,
    color: '#F6AD55',
    impacts: [
      {
        shortTerm: 'Construction jobs and transportation',
        longTerm: 'Economic growth and public safety',
        severity: 'medium'
      }
    ]
  },
  {
    id: 'science',
    name: 'Science & Research',
    amount: 136.0,
    baselineAmount: 136.0,
    color: '#667EEA',
    impacts: [
      {
        shortTerm: 'Research funding and scientific jobs',
        longTerm: 'Innovation capacity and technological leadership',
        severity: 'medium'
      }
    ]
  },
  {
    id: 'international',
    name: 'International Affairs',
    amount: 69.8,
    baselineAmount: 69.8,
    color: '#FC8181',
    impacts: [
      {
        shortTerm: 'Diplomatic operations and foreign aid',
        longTerm: 'Global influence and international relationships',
        severity: 'medium'
      }
    ]
  }
];