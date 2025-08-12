'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, RefreshCw, Search, Plus, Filter } from 'lucide-react';
import { mockTrades } from '@/lib/mockData';

export default function EvaluatorPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Trade Journal</h1>
          <p className="text-gray-400 mt-1">Manage and analyze your trading history</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="main-portfolio">
            <SelectTrigger className="w-40 bg-slate-800 border-slate-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="main-portfolio">Main Portfolio</SelectItem>
              <SelectItem value="demo">Demo Account</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-cyan-600 hover:bg-cyan-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Trade
          </Button>
          <Button variant="outline" className="border-slate-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="flex items-center justify-between bg-slate-800 p-4 rounded-lg">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-sm text-gray-400">Showing 1-20 of 247 trades</p>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <span className="text-green-400 font-bold">+$12,847</span>
              <span className="text-sm text-gray-400 ml-2">Total P&L</span>
            </div>
            <div>
              <span className="text-white font-bold">68.2%</span>
              <span className="text-sm text-gray-400 ml-2">Win Rate</span>
            </div>
            <div>
              <span className="text-white font-bold">247</span>
              <span className="text-sm text-gray-400 ml-2">Total Trades</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search trades..." 
              className="pl-10 w-64 bg-slate-700 border-slate-600"
            />
          </div>
        </div>
      </div>

      <Tabs defaultValue="all-trades" className="w-full">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="all-trades">All Trades</TabsTrigger>
          <TabsTrigger value="open-positions">Open Positions</TabsTrigger>
          <TabsTrigger value="closed-trades">Closed Trades</TabsTrigger>
        </TabsList>

        <TabsContent value="all-trades" className="space-y-4">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Date</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Symbol</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Side</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Setup</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Entry</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Exit</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Qty</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">P&L</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTrades.map((trade) => (
                      <tr key={trade.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                        <td className="p-4 text-sm text-white">{trade.date}</td>
                        <td className="p-4 text-sm text-white font-medium">{trade.symbol}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            trade.side === 'LONG' 
                              ? 'bg-green-900/30 text-green-400 border border-green-600' 
                              : 'bg-red-900/30 text-red-400 border border-red-600'
                          }`}>
                            {trade.side}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs ${
                            trade.setup === 'Breakout' ? 'bg-blue-900/30 text-blue-400' :
                            trade.setup === 'Pullback' ? 'bg-orange-900/30 text-orange-400' :
                            'bg-purple-900/30 text-purple-400'
                          }`}>
                            {trade.setup}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-white">${trade.entry}</td>
                        <td className="p-4 text-sm text-white">{trade.exit ? `$${trade.exit}` : '-'}</td>
                        <td className="p-4 text-sm text-white">{trade.quantity}</td>
                        <td className="p-4">
                          <span className={`text-sm font-medium ${
                            trade.pnl >= 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            ${trade.pnl > 0 ? '+' : ''}{trade.pnl.toFixed(2)}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            trade.status === 'CLOSED' 
                              ? 'bg-slate-600 text-slate-300' 
                              : 'bg-green-900/30 text-green-400'
                          }`}>
                            {trade.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                              Edit
                            </Button>
                            <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="open-positions">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 text-center">
              <p className="text-gray-400">Open positions will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="closed-trades">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 text-center">
              <p className="text-gray-400">Closed trades will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}