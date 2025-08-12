'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Trophy, ArrowUp, ArrowDown, Download, RefreshCw, HelpCircle } from 'lucide-react';
import { mockMetrics, mockTopSymbols } from '@/lib/mockData';

export default function SnapshotPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Trading Performance Snapshot</h1>
          <p className="text-gray-400 mt-1">Instant overview of your trading metrics and key statistics</p>
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

      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Total Trades</p>
              <TrendingUp className="w-4 h-4 text-cyan-500" />
            </div>
            <p className="text-2xl font-bold text-white">{mockMetrics.totalTrades}</p>
            <p className="text-xs text-green-400">+12 this week</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Win Rate</p>
              <Trophy className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-2xl font-bold text-white">{mockMetrics.winRate}%</p>
            <p className="text-xs text-gray-400">166W / 81L</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Profit Factor</p>
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
            </div>
            <p className="text-2xl font-bold text-white">{mockMetrics.profitFactor}</p>
            <p className="text-xs text-green-400">Excellent</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Avg Win</p>
              <ArrowUp className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-white">${mockMetrics.avgWin}</p>
            <p className="text-xs text-gray-400">Per winning trade</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Avg Loss</p>
              <ArrowDown className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-white">${mockMetrics.avgLoss}</p>
            <p className="text-xs text-gray-400">Per losing trade</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Expectancy</p>
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-2xl font-bold text-white">${mockMetrics.expectancy}</p>
            <p className="text-xs text-gray-400">Per trade</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Account Performance Chart */}
        <Card className="lg:col-span-2 bg-slate-800 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Account Performance</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">30D</Button>
                <Button size="sm" variant="ghost" className="text-gray-400">90D</Button>
                <Button size="sm" variant="ghost" className="text-gray-400">1Y</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Account Performance Chart</p>
            </div>
          </CardContent>
        </Card>

        {/* Risk Metrics */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Risk Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Max Drawdown</span>
              <span className="text-red-400 font-bold">-8.7%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Sharpe Ratio</span>
              <span className="text-green-400 font-bold">1.84</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Calmar Ratio</span>
              <span className="text-green-400 font-bold">2.12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Recovery Factor</span>
              <span className="text-green-400 font-bold">3.45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Largest Win</span>
              <span className="text-green-400 font-bold">$1,247</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Largest Loss</span>
              <span className="text-red-400 font-bold">-$432</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Setup Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Setup Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Monthly PnL</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Monthly Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Trade Duration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Scalping (&lt;5m)</span>
              <span className="text-white">34%</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{width: '34%'}}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Intraday (5m-1h)</span>
              <span className="text-white">42%</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{width: '42%'}}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Swing (1h-1d)</span>
              <span className="text-white">19%</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{width: '19%'}}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Position (&gt;1d)</span>
              <span className="text-white">5%</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{width: '5%'}}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Top Performing Symbols</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockTopSymbols.slice(0, 5).map((symbol, index) => (
              <div key={symbol.symbol} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    symbol.pnl >= 0 ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-white">{symbol.symbol}</span>
                </div>
                <span className={`font-medium ${
                  symbol.pnl >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  ${symbol.pnl > 0 ? '+' : ''}{symbol.pnl}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}