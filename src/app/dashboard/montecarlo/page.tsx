'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Dice6, Play, RotateCcw, TrendingUp, TrendingDown, Target, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

type MonteCarloResults = {
  scenarios: {
    scenario: number;
    finalValue: number;
    maxDrawdown: number;
    sharpeRatio: number;
  }[];
  statistics: {
    meanFinalValue: number;
    medianFinalValue: number;
    percentileValues: {
      p5: number;
      p25: number;
      p75: number;
      p95: number;
    };
    probabilityOfProfit: number;
    probabilityOfLoss: number;
    worstCase: number;
    bestCase: number;
  };
};

export default function MonteCarloPage() {
  const [parameters, setParameters] = useState({
    initialCapital: 10000,
    simulations: 1000,
    tradingDays: 252,
    avgReturn: 1.2,
    volatility: 15,
    winRate: 65
  });

  const [results, setResults] = useState<MonteCarloResults | null>(null);

  const runSimulation = () => {
    // Mock Monte Carlo results
    const mockResults = {
      scenarios: Array.from({ length: 100 }, (_, i) => ({
        scenario: i + 1,
        finalValue: parameters.initialCapital + (Math.random() - 0.3) * parameters.initialCapital * 0.8,
        maxDrawdown: -(Math.random() * 20 + 5),
        sharpeRatio: Math.random() * 2 + 0.5
      })),
      statistics: {
        meanFinalValue: parameters.initialCapital * 1.25,
        medianFinalValue: parameters.initialCapital * 1.18,
        percentileValues: {
          p5: parameters.initialCapital * 0.72,
          p25: parameters.initialCapital * 1.05,
          p75: parameters.initialCapital * 1.42,
          p95: parameters.initialCapital * 1.85
        },
        probabilityOfProfit: 73.2,
        probabilityOfLoss: 26.8,
        worstCase: parameters.initialCapital * 0.45,
        bestCase: parameters.initialCapital * 2.15
      }
    };
    setResults(mockResults);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Monte Carlo Simulation</h1>
          <p className="text-gray-400 mt-1">Assess risk and potential outcomes using statistical modeling</p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={runSimulation}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            <Play className="w-4 h-4 mr-2" />
            Run Simulation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Parameters Panel */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Dice6 className="w-5 h-5" />
              Simulation Parameters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="initial-capital" className="text-gray-400">Initial Capital</Label>
              <Input
                id="initial-capital"
                type="number"
                value={parameters.initialCapital}
                onChange={(e) => setParameters(prev => ({
                  ...prev,
                  initialCapital: Number(e.target.value)
                }))}
                className="mt-1 bg-slate-700 border-slate-600"
              />
            </div>

            <div>
              <Label className="text-gray-400">Simulations: {parameters.simulations.toLocaleString()}</Label>
              <Slider
                value={[parameters.simulations]}
                onValueChange={(value) => setParameters(prev => ({
                  ...prev,
                  simulations: value[0]
                }))}
                min={100}
                max={10000}
                step={100}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="trading-days" className="text-gray-400">Trading Days</Label>
              <Input
                id="trading-days"
                type="number"
                value={parameters.tradingDays}
                onChange={(e) => setParameters(prev => ({
                  ...prev,
                  tradingDays: Number(e.target.value)
                }))}
                className="mt-1 bg-slate-700 border-slate-600"
              />
            </div>

            <div>
              <Label className="text-gray-400">Expected Return: {parameters.avgReturn}%</Label>
              <Slider
                value={[parameters.avgReturn]}
                onValueChange={(value) => setParameters(prev => ({
                  ...prev,
                  avgReturn: value[0]
                }))}
                min={0}
                max={5}
                step={0.1}
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-gray-400">Volatility: {parameters.volatility}%</Label>
              <Slider
                value={[parameters.volatility]}
                onValueChange={(value) => setParameters(prev => ({
                  ...prev,
                  volatility: value[0]
                }))}
                min={5}
                max={50}
                step={1}
                className="mt-2"
              />
            </div>

            <div>
              <Label className="text-gray-400">Win Rate: {parameters.winRate}%</Label>
              <Slider
                value={[parameters.winRate]}
                onValueChange={(value) => setParameters(prev => ({
                  ...prev,
                  winRate: value[0]
                }))}
                max={100}
                step={1}
                className="mt-2"
              />
            </div>

            <Button 
              variant="outline" 
              className="w-full border-slate-600"
              onClick={() => setParameters({
                initialCapital: 10000,
                simulations: 1000,
                tradingDays: 252,
                avgReturn: 1.2,
                volatility: 15,
                winRate: 65
              })}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <div className="lg:col-span-3 space-y-6">
          {results ? (
            <>
              {/* Key Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Mean Final Value</p>
                        <p className="text-xl font-bold text-green-500">
                          ${results.statistics.meanFinalValue.toLocaleString()}
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
                        <p className="text-sm text-gray-400">Profit Probability</p>
                        <p className="text-xl font-bold text-white">
                          {results.statistics.probabilityOfProfit}%
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
                        <p className="text-sm text-gray-400">Best Case</p>
                        <p className="text-xl font-bold text-green-500">
                          ${results.statistics.bestCase.toLocaleString()}
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
                        <p className="text-sm text-gray-400">Worst Case</p>
                        <p className="text-xl font-bold text-red-500">
                          ${results.statistics.worstCase.toLocaleString()}
                        </p>
                      </div>
                      <TrendingDown className="w-6 h-6 text-red-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Distribution Chart */}
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Outcome Distribution</CardTitle>
                  <p className="text-sm text-gray-400">{parameters.simulations.toLocaleString()} simulations</p>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-slate-900 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Distribution Histogram Placeholder</p>
                  </div>
                </CardContent>
              </Card>

              {/* Risk Analysis */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Percentile Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">95th Percentile</span>
                      <span className="text-green-400 font-bold">
                        ${results.statistics.percentileValues.p95.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">75th Percentile</span>
                      <span className="text-green-400 font-bold">
                        ${results.statistics.percentileValues.p75.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Median (50th)</span>
                      <span className="text-white font-bold">
                        ${results.statistics.medianFinalValue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">25th Percentile</span>
                      <span className="text-yellow-400 font-bold">
                        ${results.statistics.percentileValues.p25.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">5th Percentile</span>
                      <span className="text-red-400 font-bold">
                        ${results.statistics.percentileValues.p5.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-green-900/20 border border-green-600 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 font-medium">High Probability</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        {results.statistics.probabilityOfProfit}% chance of profitability based on your parameters.
                      </p>
                    </div>

                    <div className="p-3 bg-yellow-900/20 border border-yellow-600 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-medium">Downside Risk</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        5% chance of losing more than {Math.round(((parameters.initialCapital - results.statistics.percentileValues.p5) / parameters.initialCapital) * 100)}% of capital.
                      </p>
                    </div>

                    <div className="p-3 bg-blue-900/20 border border-blue-600 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-medium">Expected Return</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        Mean expected return of {Math.round(((results.statistics.meanFinalValue - parameters.initialCapital) / parameters.initialCapital) * 100)}% over {parameters.tradingDays} trading days.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dice6 className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Monte Carlo Simulation</h3>
                <p className="text-gray-400 mb-6">
                  Configure your parameters and run the simulation to analyze potential trading outcomes and risks.
                </p>
                <Button 
                  onClick={runSimulation}
                  className="bg-cyan-600 hover:bg-cyan-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run {parameters.simulations.toLocaleString()} Simulations
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}