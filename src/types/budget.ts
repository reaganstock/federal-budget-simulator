export interface PolicyImpact {
  category: string;
  shortTerm: string;
  longTerm: string;
  severity: 'low' | 'medium' | 'high';
}

export interface BudgetCategory {
  id: string;
  name: string;
  amount: number;
  color: string;
  baselineAmount: number;
  impacts: PolicyImpact[];
  subcategories?: BudgetCategory[];
}

export interface BudgetState {
  revenue: BudgetCategory[];
  spending: BudgetCategory[];
  deficit: number;
  currentYear: number;
  totalDebt: number;
  impacts: PolicyImpact[];
  setCategory: (type: 'revenue' | 'spending', id: string, amount: number) => void;
  resetBudget: () => void;
  advanceYear: () => void;
  rewindYear: () => void;
}