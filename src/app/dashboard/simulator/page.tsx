'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Play, RotateCcw, Settings, TrendingUp, TrendingDown, Target } from 'lucide-react';
import { useState } from 'react';

type SimulationResults = {
  finalBalance: number;
  totalTrades: number;
  winningTrades: number;
  totalProfit: number;
  maxDrawdown: number;
  sharpeRatio: number;
  profitFactor: number;
};

export default function SimulatorPage() {
  const [simulationParams, setSimulationParams] = useState({
    startingCapital: 10000,
    winRate: 65,
    avgWin: 200,
    avgLoss: 100,
    tradesPerDay: 5,
    tradingDays: 252
  });

  const [simulationResults, setSimulationResults] = useState<SimulationResults | null>(null);

  const runSimulation = () => {
    // Mock simulation results
    const results = {
      finalBalance: simulationParams.startingCapital * 1.25,
      totalTrades: simulationParams.tradesPerDay * simulationParams.tradingDays,
      winningTrades: Math.floor(simulationParams.tradesPerDay * simulationParams.tradingDays * simulationParams.winRate / 100),
      totalProfit: simulationParams.startingCapital * 0.45,
      maxDrawdown: -8.5,
      sharpeRatio: 1.67,
      profitFactor: 2.1
    };
    setSimulationResults(results);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Trading Strategy Simulator</h1>
          <p className="text-gray-400 mt-1">Test and analyze your trading strategies with historical data</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-slate-700">
            <Settings className="w-4 h-4 mr-2" />
            Advanced Settings
          </Button>
          <Button 
            onClick={runSimulation}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            <Play className="w-4 h-4 mr-2" />
            Run Simulation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Simulation Parameters */}
        <Card className="lg:col-span-1 bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Simulation Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="starting-capital" className="text-gray-400">Starting Capital</Label>
              <Input
                id="starting-capital"
                type="number"
                value={simulationParams.startingCapital}
                onChange={(e) => setSimulationParams(prev => ({
                  ...prev,
                  startingCapital: Number(e.target.value)
                }))}
                className="mt-1 bg-slate-700 border-slate-600"
              />
            </div>

            <div>
              <Label className="text-gray-400">Win Rate: {simulationParams.winRate}%</Label>
              <Slider
                value={[simulationParams.winRate]}
                onValueChange={(value) => setSimulationParams(prev => ({
                  ...prev,
                  winRate: value[0]
                }))}
                max={100}
                step={1}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="avg-win" className="text-gray-400">Average Win ($)</Label>
              <Input
                id="avg-win"
                type="number"
                value={simulationParams.avgWin}
                onChange={(e) => setSimulationParams(prev => ({
                  ...prev,
                  avgWin: Number(e.target.value)
                }))}
                className="mt-1 bg-slate-700 border-slate-600"
              />
            </div>

            <div>
              <Label htmlFor="avg-loss" className="text-gray-400">Average Loss ($)</Label>
              <Input
                id="avg-loss"
                type="number"
                value={simulationParams.avgLoss}
                onChange={(e) => setSimulationParams(prev => ({
                  ...prev,
                  avgLoss: Number(e.target.value)
                }))}
                className="mt-1 bg-slate-700 border-slate-600"
              />
            </div>

            <div>
              <Label htmlFor="trades-per-day" className="text-gray-400">Trades Per Day</Label>
              <Input
                id="trades-per-day"
                type="number"
                value={simulationParams.tradesPerDay}
                onChange={(e) => setSimulationParams(prev => ({
                  ...prev,
                  tradesPerDay: Number(e.target.value)
                }))}
                className="mt-1 bg-slate-700 border-slate-600"
              />
            </div>

            <div>
              <Label htmlFor="trading-days" className="text-gray-400">Trading Days</Label>
              <Input
                id="trading-days"
                type="number"
                value={simulationParams.tradingDays}
                onChange={(e) => setSimulationParams(prev => ({
                  ...prev,
                  tradingDays: Number(e.target.value)
                }))}
                className="mt-1 bg-slate-700 border-slate-600"
              />
            </div>

            <Button 
              variant="outline" 
              className="w-full border-slate-600"
              onClick={() => setSimulationParams({
                startingCapital: 10000,
                winRate: 65,
                avgWin: 200,
                avgLoss: 100,
                tradesPerDay: 5,
                tradingDays: 252
              })}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset to Defaults
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="lg:col-span-2 space-y-6">
          {simulationResults ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Final Balance</p>
                        <p className="text-xl font-bold text-green-500">
                          ${simulationResults.finalBalance.toLocaleString()}
                        </p>
                      </div>
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Total Trades</p>
                        <p className="text-xl font-bold text-white">
                          {simulationResults.totalTrades.toLocaleString()}
                        </p>
                      </div>
                      <Target className="w-6 h-6 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Total Profit</p>
                        <p className="text-xl font-bold text-green-500">
                          +${simulationResults.totalProfit.toLocaleString()}
                        </p>
                      </div>
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Max Drawdown</p>
                        <p className="text-xl font-bold text-red-500">
                          {simulationResults.maxDrawdown}%
                        </p>
                      </div>
                      <TrendingDown className="w-6 h-6 text-red-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Simulation Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                    <p className="text-gray-400">Equity Curve Chart Placeholder</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Winning Trades</p>
                      <p className="text-lg font-semibold text-green-400">
                        {simulationResults.winningTrades}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Losing Trades</p>
                      <p className="text-lg font-semibold text-red-400">
                        {simulationResults.totalTrades - simulationResults.winningTrades}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Sharpe Ratio</p>
                      <p className="text-lg font-semibold text-white">
                        {simulationResults.sharpeRatio}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">Profit Factor</p>
                      <p className="text-lg font-semibold text-white">
                        {simulationResults.profitFactor}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-400">ROI</p>
                      <p className="text-lg font-semibold text-green-400">
                        {((simulationResults.finalBalance / simulationParams.startingCapital - 1) * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ready to Simulate</h3>
                <p className="text-gray-400 mb-6">
                  Configure your parameters and click "Run Simulation" to see how your strategy would perform.
                </p>
                <Button 
                  onClick={runSimulation}
                  className="bg-cyan-600 hover:bg-cyan-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run Simulation
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}