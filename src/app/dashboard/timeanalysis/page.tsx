'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, TrendingDown, Download, RefreshCw } from 'lucide-react';

export default function TimeAnalysisPage() {
  const timeSlots = [
    { time: '09:30-10:00', trades: 45, pnl: 1200, winRate: 73 },
    { time: '10:00-10:30', trades: 38, pnl: 890, winRate: 68 },
    { time: '10:30-11:00', trades: 32, pnl: 650, winRate: 62 },
    { time: '11:00-11:30', trades: 28, pnl: -120, winRate: 45 },
    { time: '11:30-12:00', trades: 25, pnl: 340, winRate: 56 },
    { time: '14:00-14:30', trades: 42, pnl: 980, winRate: 71 },
    { time: '14:30-15:00', trades: 35, pnl: 720, winRate: 66 },
    { time: '15:00-15:30', trades: 30, pnl: 450, winRate: 60 },
    { time: '15:30-16:00', trades: 27, pnl: 380, winRate: 58 }
  ];

  const dayOfWeek = [
    { day: 'Monday', trades: 52, pnl: 1340, winRate: 69 },
    { day: 'Tuesday', trades: 48, pnl: 1120, winRate: 67 },
    { day: 'Wednesday', trades: 44, pnl: 890, winRate: 64 },
    { day: 'Thursday', trades: 41, pnl: 760, winRate: 61 },
    { day: 'Friday', trades: 36, pnl: 620, winRate: 58 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Time-Based Trading Analysis</h1>
          <p className="text-gray-400 mt-1">Analyze your performance across different time periods and market sessions</p>
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
                <p className="text-sm text-gray-400">Best Time Slot</p>
                <p className="text-2xl font-bold text-white">09:30-10:00</p>
                <p className="text-xs text-green-400">73% win rate</p>
              </div>
              <Clock className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Best Day</p>
                <p className="text-2xl font-bold text-white">Monday</p>
                <p className="text-xs text-green-400">$1,340 avg P&L</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Peak Hours</p>
                <p className="text-2xl font-bold text-white">9:30-11:00</p>
                <p className="text-xs text-gray-400">Market open</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Worst Period</p>
                <p className="text-2xl font-bold text-white">11:00-11:30</p>
                <p className="text-xs text-red-400">-$120 avg</p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time-based Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Intraday Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-400">Intraday P&L Chart</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Day of Week Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-400">Weekly Performance Chart</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time Slot Performance Table */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Time Slot Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Time Slot</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Trades</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">P&L</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Win Rate</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Avg P&L</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-400">Performance</th>
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot, index) => (
                  <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/30">
                    <td className="p-3 text-sm text-white font-medium">{slot.time}</td>
                    <td className="p-3 text-sm text-white">{slot.trades}</td>
                    <td className="p-3">
                      <span className={`text-sm font-medium ${
                        slot.pnl >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        ${slot.pnl > 0 ? '+' : ''}{slot.pnl}
                      </span>
                    </td>
                    <td className="p-3 text-sm text-white">{slot.winRate}%</td>
                    <td className="p-3 text-sm text-white">${Math.round(slot.pnl / slot.trades)}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              slot.winRate >= 70 ? 'bg-green-500' :
                              slot.winRate >= 60 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{width: `${slot.winRate}%`}}
                          ></div>
                        </div>
                        <span className={`text-xs ${
                          slot.winRate >= 70 ? 'text-green-400' :
                          slot.winRate >= 60 ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {slot.winRate >= 70 ? 'Excellent' :
                           slot.winRate >= 60 ? 'Good' :
                           'Poor'}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Day of Week Analysis */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Day of Week Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {dayOfWeek.map((day, index) => (
              <div key={index} className="p-4 bg-slate-700 rounded-lg">
                <h4 className="font-medium text-white mb-2">{day.day}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Trades</span>
                    <span className="text-white">{day.trades}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">P&L</span>
                    <span className={day.pnl >= 0 ? 'text-green-400' : 'text-red-400'}>
                      ${day.pnl > 0 ? '+' : ''}{day.pnl}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Win Rate</span>
                    <span className="text-white">{day.winRate}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
                    <div 
                      className="bg-cyan-500 h-2 rounded-full" 
                      style={{width: `${day.winRate}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Time-based Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-900/20 border border-green-600 rounded">
              <p className="text-green-400 font-medium text-sm">Market Open Edge</p>
              <p className="text-gray-300 text-sm mt-1">
                You perform exceptionally well in the first 30 minutes of market open.
              </p>
            </div>
            <div className="p-3 bg-yellow-900/20 border border-yellow-600 rounded">
              <p className="text-yellow-400 font-medium text-sm">Lunch Hour Caution</p>
              <p className="text-gray-300 text-sm mt-1">
                Consider reducing position sizes during 11:00-11:30 due to poor performance.
              </p>
            </div>
            <div className="p-3 bg-blue-900/20 border border-blue-600 rounded">
              <p className="text-blue-400 font-medium text-sm">Monday Momentum</p>
              <p className="text-gray-300 text-sm mt-1">
                Mondays show the highest profitability. Consider increasing allocation.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Optimization Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-white font-medium">Focus Time Slots</h4>
              <p className="text-sm text-gray-400">
                Concentrate trading during 09:30-10:00 and 14:00-14:30 for optimal results.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">Avoid Trading</h4>
              <p className="text-sm text-gray-400">
                Consider avoiding or reducing trades during 11:00-11:30 lunch hour.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-white font-medium">Weekly Strategy</h4>
              <p className="text-sm text-gray-400">
                Increase position sizes on Mondays and Tuesdays when performance is strongest.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}