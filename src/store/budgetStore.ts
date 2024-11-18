import { create } from 'zustand';
import { BudgetState } from '../types/budget';
import { initialRevenue, initialSpending } from '../data/budgetData';

const calculateDeficit = (revenue: number, spending: number) => revenue - spending;

const INITIAL_DEBT = 34000; // $34 trillion as of 2024
const INTEREST_RATE = 0.037; // 3.7% average interest rate

export const useBudgetStore = create<BudgetState>((set) => ({
  revenue: initialRevenue,
  spending: initialSpending,
  currentYear: 2024,
  totalDebt: INITIAL_DEBT,
  deficit: calculateDeficit(
    initialRevenue.reduce((acc, cat) => acc + cat.amount, 0),
    initialSpending.reduce((acc, cat) => acc + cat.amount, 0)
  ),

  setCategory: (type, id, amount) =>
    set((state) => {
      const categories = state[type].map((cat) =>
        cat.id === id ? { ...cat, amount } : cat
      );
      
      const totalRevenue = type === 'revenue' 
        ? categories.reduce((acc, cat) => acc + cat.amount, 0)
        : state.revenue.reduce((acc, cat) => acc + cat.amount, 0);
        
      const totalSpending = type === 'spending'
        ? categories.reduce((acc, cat) => acc + cat.amount, 0)
        : state.spending.reduce((acc, cat) => acc + cat.amount, 0);

      return {
        ...state,
        [type]: categories,
        deficit: calculateDeficit(totalRevenue, totalSpending)
      };
    }),

  advanceYear: () =>
    set((state) => {
      const newDebt = state.totalDebt + Math.abs(state.deficit) + (state.totalDebt * INTEREST_RATE);
      
      // Adjust spending categories for inflation and interest payments
      const updatedSpending = state.spending.map(cat => {
        if (cat.id === 'interest') {
          return {
            ...cat,
            amount: state.totalDebt * INTEREST_RATE,
            baselineAmount: state.totalDebt * INTEREST_RATE
          };
        }
        return {
          ...cat,
          amount: cat.amount * 1.02, // 2% annual increase
          baselineAmount: cat.baselineAmount * 1.02
        };
      });

      // Adjust revenue categories for economic growth
      const updatedRevenue = state.revenue.map(cat => ({
        ...cat,
        amount: cat.amount * 1.02,
        baselineAmount: cat.baselineAmount * 1.02
      }));

      return {
        ...state,
        currentYear: state.currentYear + 1,
        totalDebt: newDebt,
        revenue: updatedRevenue,
        spending: updatedSpending
      };
    }),

  rewindYear: () =>
    set((state) => ({
      ...state,
      currentYear: Math.max(2024, state.currentYear - 1)
    })),

  resetBudget: () =>
    set({
      revenue: initialRevenue,
      spending: initialSpending,
      currentYear: 2024,
      totalDebt: INITIAL_DEBT,
      deficit: calculateDeficit(
        initialRevenue.reduce((acc, cat) => acc + cat.amount, 0),
        initialSpending.reduce((acc, cat) => acc + cat.amount, 0)
      )
    })
}));