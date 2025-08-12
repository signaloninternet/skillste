// Trading-related TypeScript interfaces and types

export interface Trade {
  id: string;
  date: string;
  symbol: string;
  side: 'LONG' | 'SHORT';
  setup: string;
  entry: number;
  exit: number | null;
  quantity: number;
  pnl: number;
  status: 'OPEN' | 'CLOSED';
}

export interface TradingMetrics {
  totalTrades: number;
  winRate: number;
  profitFactor: number;
  avgWin: number;
  avgLoss: number;
  expectancy: number;
  maxDrawdown: number;
  sharpeRatio: number;
  calmarRatio: number;
  recoveryFactor: number;
  largestWin: number;
  largestLoss: number;
}

export interface PerformanceData {
  date: string;
  value: number;
  drawdown?: number;
}

export interface HoldTimeAnalysis {
  averageHoldTime: number;
  optimalRange: string;
  worstRange: string;
  totalAnalyzed: number;
  profitByHoldTime: {
    range: string;
    profit: number;
    trades: number;
    winRate: number;
  }[];
}

export interface MonteCarloResult {
  scenario: number;
  finalValue: number;
  maxDrawdown: number;
  sharpeRatio: number;
}

export interface CalendarDay {
  date: string;
  trades: number;
  pnl: number;
  type: 'profit' | 'loss' | 'neutral';
}

export interface Symbol {
  symbol: string;
  pnl: number;
  trades: number;
  winRate: number;
}