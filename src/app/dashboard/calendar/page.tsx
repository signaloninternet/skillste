'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, RefreshCw, TrendingUp, TrendingDown, Calendar as CalendarIcon } from 'lucide-react';
import { mockCalendarData } from '@/lib/mockData';
import { useState } from 'react';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 5)); // June 2024

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayData = mockCalendarData.find(d => d.date === dateStr);
      
      days.push({
        day,
        date: dateStr,
        trades: dayData?.trades || 0,
        pnl: dayData?.pnl || 0,
        type: dayData?.type || 'neutral'
      });
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return newMonth;
    });
  };

  const days = getDaysInMonth(currentMonth);

  const monthlyStats = {
    totalPnL: mockCalendarData.reduce((sum, day) => sum + day.pnl, 0),
    profitDays: mockCalendarData.filter(day => day.pnl > 0).length,
    lossDays: mockCalendarData.filter(day => day.pnl < 0).length,
    totalTrades: mockCalendarData.reduce((sum, day) => sum + day.trades, 0)
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Trading Calendar</h1>
          <p className="text-gray-400 mt-1">Track your daily trading performance and patterns</p>
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

      {/* Calendar Header */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigateMonth('prev')}
                className="text-gray-400 hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-xl font-bold text-white">
                {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigateMonth('next')}
                className="text-gray-400 hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
                <span className="text-gray-400">Profit Days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded"></div>
                <span className="text-gray-400">Loss Days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-600 rounded"></div>
                <span className="text-gray-400">No Trades</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {DAYS.map(day => (
              <div key={day} className="p-2 text-center text-sm font-medium text-gray-400 border-b border-slate-700">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => (
              <div
                key={index}
                className={`
                  aspect-square p-2 rounded-lg border border-slate-700 cursor-pointer transition-all
                  ${!day ? 'invisible' : ''}
                  ${day?.type === 'profit' ? 'bg-green-900/30 border-green-600' : ''}
                  ${day?.type === 'loss' ? 'bg-red-900/30 border-red-600' : ''}
                  ${day?.type === 'neutral' ? 'bg-slate-800 hover:bg-slate-700' : ''}
                  ${day?.date === '2024-06-13' ? 'ring-2 ring-cyan-500' : ''}
                `}
              >
                {day && (
                  <div className="h-full flex flex-col justify-between">
                    <div className="text-sm font-medium text-white">{day.day}</div>
                    {day.trades > 0 && (
                      <div className="text-xs space-y-1">
                        <div className="text-gray-400">{day.trades} trades</div>
                        <div className={`font-medium ${
                          day.pnl >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          ${day.pnl > 0 ? '+' : ''}{day.pnl}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Monthly P&L</p>
                <p className="text-2xl font-bold text-green-500">
                  +${Math.abs(monthlyStats.totalPnL).toLocaleString()}
                </p>
                <p className="text-xs text-gray-400">{monthlyStats.totalTrades} total trades</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Profit Days</p>
                <p className="text-2xl font-bold text-white">{monthlyStats.profitDays}</p>
                <p className="text-xs text-green-400">
                  {Math.round((monthlyStats.profitDays / (monthlyStats.profitDays + monthlyStats.lossDays)) * 100)}% win rate
                </p>
              </div>
              <CalendarIcon className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Loss Days</p>
                <p className="text-2xl font-bold text-white">{monthlyStats.lossDays}</p>
                <p className="text-xs text-red-400">
                  {Math.round((monthlyStats.lossDays / (monthlyStats.profitDays + monthlyStats.lossDays)) * 100)}% loss rate
                </p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Avg Daily P&L</p>
                <p className="text-2xl font-bold text-white">
                  ${Math.round(monthlyStats.totalPnL / (monthlyStats.profitDays + monthlyStats.lossDays))}
                </p>
                <p className="text-xs text-gray-400">Per trading day</p>
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">$</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}