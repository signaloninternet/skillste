import { Trade, TradingMetrics, PerformanceData, HoldTimeAnalysis, CalendarDay, Symbol } from '@/types/trading';

export const mockTrades: Trade[] = [
  {
    id: '1',
    date: '2024-06-13 09:30',
    symbol: 'AAPL',
    side: 'LONG',
    setup: 'Breakout',
    entry: 184.50,
    exit: 187.20,
    quantity: 100,
    pnl: 270.00,
    status: 'CLOSED'
  },
  {
    id: '2',
    date: '2024-06-12 14:15',
    symbol: 'TSLA',
    side: 'SHORT',
    setup: 'Pullback',
    entry: 178.90,
    exit: 176.40,
    quantity: 50,
    pnl: 125.00,
    status: 'CLOSED'
  },
  {
    id: '3',
    date: '2024-06-11 11:22',
    symbol: 'NVDA',
    side: 'LONG',
    setup: 'Reversal',
    entry: 892.30,
    exit: 885.60,
    quantity: 10,
    pnl: -67.00,
    status: 'CLOSED'
  },
  {
    id: '4',
    date: '2024-06-10 15:45',
    symbol: 'SPY',
    side: 'LONG',
    setup: 'Breakout',
    entry: 425.80,
    exit: null,
    quantity: 200,
    pnl: 340.00,
    status: 'OPEN'
  },
  {
    id: '5',
    date: '2024-06-07 10:12',
    symbol: 'AMD',
    side: 'SHORT',
    setup: 'Pullback',
    entry: 156.70,
    exit: null,
    quantity: 75,
    pnl: -230.00,
    status: 'OPEN'
  }
];

export const mockMetrics: TradingMetrics = {
  totalTrades: 247,
  winRate: 67.3,
  profitFactor: 2.34,
  avgWin: 342,
  avgLoss: 146,
  expectancy: 112,
  maxDrawdown: -8.7,
  sharpeRatio: 1.84,
  calmarRatio: 2.12,
  recoveryFactor: 3.45,
  largestWin: 1247,
  largestLoss: -432
};

export const mockPerformanceData: PerformanceData[] = Array.from({ length: 90 }, (_, i) => ({
  date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  value: 10000 + Math.random() * 5000 - 2500 + i * 50,
  drawdown: Math.random() * -10
}));

export const mockHoldTimeData: HoldTimeAnalysis = {
  averageHoldTime: 4.2,
  optimalRange: '1-4 hours',
  worstRange: '>1 week',
  totalAnalyzed: 247,
  profitByHoldTime: [
    { range: '< 1 hour', profit: 2340, trades: 45, winRate: 71.1 },
    { range: '1-4 hours', profit: 4870, trades: 89, winRate: 73.0 },
    { range: '4-8 hours', profit: 1920, trades: 34, winRate: 67.6 },
    { range: '1-3 days', profit: -890, trades: 28, winRate: 42.9 },
    { range: '> 1 week', profit: -1560, trades: 18, winRate: 33.3 }
  ]
};

export const mockCalendarData: CalendarDay[] = [
  { date: '2024-06-01', trades: 4, pnl: 485, type: 'profit' },
  { date: '2024-06-02', trades: 2, pnl: -120, type: 'loss' },
  { date: '2024-06-03', trades: 6, pnl: 720, type: 'profit' },
  { date: '2024-06-04', trades: 3, pnl: 180, type: 'profit' },
  { date: '2024-06-05', trades: 5, pnl: 340, type: 'profit' },
  { date: '2024-06-06', trades: 2, pnl: -250, type: 'loss' },
  { date: '2024-06-09', trades: 7, pnl: 290, type: 'profit' },
  { date: '2024-06-10', trades: 4, pnl: 650, type: 'profit' },
  { date: '2024-06-11', trades: 3, pnl: -380, type: 'loss' },
  { date: '2024-06-12', trades: 5, pnl: 420, type: 'profit' },
  { date: '2024-06-13', trades: 6, pnl: 270, type: 'profit' }
];

export const mockTopSymbols: Symbol[] = [
  { symbol: 'AAPL', pnl: 2847, trades: 23, winRate: 73.9 },
  { symbol: 'TSLA', pnl: 1923, trades: 18, winRate: 66.7 },
  { symbol: 'NVDA', pnl: 1654, trades: 15, winRate: 80.0 },
  { symbol: 'MSFT', pnl: 987, trades: 12, winRate: 75.0 },
  { symbol: 'SPY', pnl: -432, trades: 8, winRate: 37.5 }
];