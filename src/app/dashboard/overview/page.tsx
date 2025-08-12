'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, DollarSign, Target, Download, RefreshCw } from 'lucide-react';
import { mockMetrics, mockPerformanceData, mockTopSymbols } from '@/lib/mockData';

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-gray-400 mt-1">Complete overview of your trading performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-slate-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-cyan-600 hover:bg-cyan-700">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total P&L</p>
                <p className="text-2xl font-bold text-green-500">$12,847</p>
                <p className="text-xs text-green-400">+$2,340 this month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Win Rate</p>
                <p className="text-2xl font-bold text-white">{mockMetrics.winRate}%</p>
                <p className="text-xs text-gray-400">166W / 81L</p>
              </div>
              <Target className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Trades</p>
                <p className="text-2xl font-bold text-white">{mockMetrics.totalTrades}</p>
                <p className="text-xs text-green-400">+12 this week</p>
              </div>
              <DollarSign className="w-8 h-8 text-cyan-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Max Drawdown</p>
                <p className="text-2xl font-bold text-red-500">{mockMetrics.maxDrawdown}%</p>
                <p className="text-xs text-gray-400">Recovery: 23 days</p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Account Performance</CardTitle>
            <div className="flex gap-2">
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">30D</Button>
              <Button size="sm" variant="ghost" className="text-gray-400">90D</Button>
              <Button size="sm" variant="ghost" className="text-gray-400">1Y</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Performance Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Risk Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Sharpe Ratio</span>
              <span className="text-green-400 font-bold">{mockMetrics.sharpeRatio}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Calmar Ratio</span>
              <span className="text-green-400 font-bold">{mockMetrics.calmarRatio}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Recovery Factor</span>
              <span className="text-green-400 font-bold">{mockMetrics.recoveryFactor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Largest Win</span>
              <span className="text-green-400 font-bold">${mockMetrics.largestWin}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Largest Loss</span>
              <span className="text-red-400 font-bold">${mockMetrics.largestLoss}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Top Performing Symbols</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockTopSymbols.map((symbol) => (
              <div key={symbol.symbol} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-white font-medium">{symbol.symbol}</span>
                </div>
                <span className={`font-bold ${symbol.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  ${symbol.pnl > 0 ? '+' : ''}{symbol.pnl}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Trade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Pie Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm">
              <p className="text-green-400">+$270 AAPL Breakout</p>
              <p className="text-gray-400">2 hours ago</p>
            </div>
            <div className="text-sm">
              <p className="text-green-400">+$125 TSLA Short</p>
              <p className="text-gray-400">4 hours ago</p>
            </div>
            <div className="text-sm">
              <p className="text-red-400">-$67 NVDA Reversal</p>
              <p className="text-gray-400">Yesterday</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}