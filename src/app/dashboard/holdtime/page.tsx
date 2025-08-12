'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, AlertTriangle, Target, Download, RefreshCw, Info } from 'lucide-react';
import { mockHoldTimeData } from '@/lib/mockData';

export default function HoldTimePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Hold Time Analysis</h1>
          <p className="text-gray-400 mt-1">Analyze profit and loss patterns based on trade holding periods</p>
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
                <p className="text-sm text-gray-400">Average Hold Time</p>
                <p className="text-2xl font-bold text-white">{mockHoldTimeData.averageHoldTime} hours</p>
                <p className="text-xs text-blue-400">Optimal range: 2-6h</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Best Performing Range</p>
                <p className="text-2xl font-bold text-white">{mockHoldTimeData.optimalRange}</p>
                <p className="text-xs text-green-400">+$847 avg profit</p>
              </div>
              <TrendingUp className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Worst Performing Range</p>
                <p className="text-2xl font-bold text-white">{mockHoldTimeData.worstRange}</p>
                <p className="text-xs text-red-400">-$324 avg loss</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Analyzed</p>
                <p className="text-2xl font-bold text-white">{mockHoldTimeData.totalAnalyzed} trades</p>
                <p className="text-xs text-gray-400">Last 6 months</p>
              </div>
              <Target className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Profit/Loss by Hold Time</CardTitle>
            <div className="flex gap-2">
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">Total PnL</Button>
              <Button size="sm" variant="ghost" className="text-gray-400">Avg PnL</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Hold Time P&L Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Win Rate by Hold Time</CardTitle>
            <p className="text-sm text-gray-400">Success percentage</p>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Win Rate Chart</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Trade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-400 text-sm">Distribution Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Risk/Reward Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-400 text-sm">Risk/Reward Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Performance Heatmap</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {mockHoldTimeData.profitByHoldTime.map((range, index) => (
              <div key={index} className={`p-2 rounded text-sm ${
                range.profit >= 2000 ? 'bg-green-900/40 border border-green-600' :
                range.profit >= 1000 ? 'bg-green-900/30 border border-green-700' :
                range.profit >= 0 ? 'bg-green-900/20 border border-green-800' :
                'bg-red-900/30 border border-red-600'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{range.range}</span>
                  <span className={`font-bold ${range.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    ${range.profit > 0 ? '+' : ''}{range.profit.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Key Insights & Recommendations */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Key Insights & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-green-900/20 border border-green-600 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-green-400 font-medium">Optimal Hold Time</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Your best performance is in the 1-4 hour range. Consider focusing on intraday strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-red-900/20 border border-red-600 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-red-400 font-medium">Avoid Long Holds</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Trades held longer than 1 week show consistent losses. Set stricter exit rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-900/20 border border-blue-600 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Info className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium">Strategy Adjustment</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Consider implementing time-based stop losses at the 8-hour mark to prevent extended losses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-900/20 border border-purple-600 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-medium">Target Optimization</h4>
                    <p className="text-gray-300 text-sm mt-1">
                      Your 1-4 hour trades yield 73% win rate. Increase position size for this timeframe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}