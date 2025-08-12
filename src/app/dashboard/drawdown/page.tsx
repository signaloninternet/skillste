'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingDown, AlertTriangle, Download, RefreshCw, Target, Calendar } from 'lucide-react';

export default function DrawdownPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Drawdown Analysis</h1>
          <p className="text-gray-400 mt-1">Monitor and analyze your account drawdowns and recovery patterns</p>
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
                <p className="text-sm text-gray-400">Max Drawdown</p>
                <p className="text-2xl font-bold text-red-500">-8.7%</p>
                <p className="text-xs text-gray-400">$-2,340</p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Current Drawdown</p>
                <p className="text-2xl font-bold text-white">0%</p>
                <p className="text-xs text-green-400">At peak</p>
              </div>
              <Target className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Recovery Time</p>
                <p className="text-2xl font-bold text-white">23 days</p>
                <p className="text-xs text-gray-400">Avg recovery</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Drawdown Events</p>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-xs text-gray-400">This year</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Drawdown History</CardTitle>
            <div className="flex gap-2">
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">30D</Button>
              <Button size="sm" variant="ghost" className="text-gray-400">90D</Button>
              <Button size="sm" variant="ghost" className="text-gray-400">1Y</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Drawdown Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recovery Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Recovery Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Drawdown Events Table */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Drawdown Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Start Date</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">End Date</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Duration</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Max DD</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Recovery Time</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="p-3 text-sm text-white">2024-05-15</td>
                  <td className="p-3 text-sm text-white">2024-05-28</td>
                  <td className="p-3 text-sm text-white">13 days</td>
                  <td className="p-3 text-sm text-red-400">-8.7%</td>
                  <td className="p-3 text-sm text-white">23 days</td>
                  <td className="p-3">
                    <span className="px-2 py-1 rounded text-xs bg-green-900/30 text-green-400">
                      Recovered
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 text-sm text-white">2024-04-02</td>
                  <td className="p-3 text-sm text-white">2024-04-08</td>
                  <td className="p-3 text-sm text-white">6 days</td>
                  <td className="p-3 text-sm text-red-400">-5.2%</td>
                  <td className="p-3 text-sm text-white">12 days</td>
                  <td className="p-3">
                    <span className="px-2 py-1 rounded text-xs bg-green-900/30 text-green-400">
                      Recovered
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="p-3 text-sm text-white">2024-03-20</td>
                  <td className="p-3 text-sm text-white">2024-03-22</td>
                  <td className="p-3 text-sm text-white">2 days</td>
                  <td className="p-3 text-sm text-red-400">-3.1%</td>
                  <td className="p-3 text-sm text-white">7 days</td>
                  <td className="p-3">
                    <span className="px-2 py-1 rounded text-xs bg-green-900/30 text-green-400">
                      Recovered
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Drawdown Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Average Drawdown</span>
              <span className="text-white">-4.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Median Recovery Time</span>
              <span className="text-white">15 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Longest Drawdown</span>
              <span className="text-white">28 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Win Rate After DD</span>
              <span className="text-green-400">72%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Risk Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-900/20 border border-green-600 rounded">
              <p className="text-green-400 font-medium text-sm">Strong Recovery</p>
              <p className="text-gray-300 text-sm mt-1">
                Your recovery pattern is consistent and relatively fast.
              </p>
            </div>
            <div className="p-3 bg-yellow-900/20 border border-yellow-600 rounded">
              <p className="text-yellow-400 font-medium text-sm">Position Sizing</p>
              <p className="text-gray-300 text-sm mt-1">
                Consider reducing position size when drawdown exceeds 5%.
              </p>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-600 rounded">
              <p className="text-blue-400 font-medium text-sm">Risk Management</p>
              <p className="text-gray-300 text-sm mt-1">
                Implement stricter stop losses during drawdown periods.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}