import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, TrendingUp, List } from "lucide-react"

export function OverviewContent() {
  return (
    <div className="space-y-6 w-full h-full">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-gray-700 bg-gray-800 text-gray-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit/Loss</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">+$12,345.67</div>
            <p className="text-xs text-gray-400">+15.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-gray-700 bg-gray-800 text-gray-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.5%</div>
            <p className="text-xs text-gray-400">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-gray-700 bg-gray-800 text-gray-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
            <List className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">543</div>
            <p className="text-xs text-gray-400">Last 30 days</p>
          </CardContent>
        </Card>
        <Card className="border-gray-700 bg-gray-800 text-gray-50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Trade P/L</CardTitle>
            <DollarSign className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">+$22.73</div>
            <p className="text-xs text-gray-400">Excluding commissions</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="border-gray-700 bg-gray-800 text-gray-50">
          <CardHeader>
            <CardTitle>Equity Curve</CardTitle>
          </CardHeader>
          <CardContent className="h-80 flex items-center justify-center text-gray-400">
            {/* Placeholder for Equity Curve Chart */}
            <div className="text-center">Equity Curve Chart Placeholder</div>
          </CardContent>
        </Card>
        <Card className="border-gray-700 bg-gray-800 text-gray-50">
          <CardHeader>
            <CardTitle>Recent Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead>Symbol</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>P/L</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-gray-700">
                    <TableCell className="font-medium">AAPL</TableCell>
                    <TableCell>2024-07-30</TableCell>
                    <TableCell className="text-green-400">+$150.00</TableCell>
                    <TableCell>Long</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell className="font-medium">GOOG</TableCell>
                    <TableCell>2024-07-29</TableCell>
                    <TableCell className="text-red-400">-$75.50</TableCell>
                    <TableCell>Short</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell className="font-medium">MSFT</TableCell>
                    <TableCell>2024-07-28</TableCell>
                    <TableCell className="text-green-400">+$210.25</TableCell>
                    <TableCell>Long</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell className="font-medium">NVDA</TableCell>
                    <TableCell>2024-07-27</TableCell>
                    <TableCell className="text-green-400">+$300.00</TableCell>
                    <TableCell>Long</TableCell>
                  </TableRow>
                  <TableRow className="border-gray-700">
                    <TableCell className="font-medium">TSLA</TableCell>
                    <TableCell>2024-07-26</TableCell>
                    <TableCell className="text-red-400">-$120.00</TableCell>
                    <TableCell>Short</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
