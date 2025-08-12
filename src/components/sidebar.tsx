"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  CalendarDays,
  Clock,
  DollarSign,
  Gauge,
  Hourglass,
  LayoutDashboard,
  PiggyBank,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Overview", href: "/dashboard/overview", icon: LayoutDashboard },
    { name: "Calendar", href: "/dashboard/calendar", icon: CalendarDays },
    { name: "Snapshot", href: "/dashboard/snapshot", icon: Sparkles },
    { name: "Evaluator", href: "/dashboard/evaluator", icon: Gauge },
    { name: "Simulator", href: "/dashboard/simulator", icon: BarChart },
    { name: "Drawdown", href: "/dashboard/drawdown", icon: DollarSign },
    { name: "Time Analysis", href: "/dashboard/time-analysis", icon: Clock },
    { name: "Hold Time", href: "/dashboard/hold-time", icon: Hourglass },
    { name: "Monte Carlo", href: "/dashboard/monte-carlo", icon: PiggyBank },
  ]

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-800 bg-gray-900 text-gray-50 hidden md:flex">
      <div className="flex h-16 items-center justify-center border-b border-gray-800 px-6">
        <Link className="text-xl font-bold" href="/dashboard/overview">
          TradingJournal
        </Link>
      </div>
      <nav className="flex-1 space-y-2 px-4 py-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-gray-800 hover:text-gray-50",
              pathname === item.href ? "bg-gray-800 text-gray-50" : "text-gray-400",
            )}
            href={item.href}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
