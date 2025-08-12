"use client"

import { motion } from "framer-motion"
import {
  Activity,
  FileText,
  ShieldCheck,
  BrainCog,
  BarChart,
  Settings2,
  Users,
  RotateCcw,
  AlertCircle,
  Zap,
  Repeat,
  Bitcoin,
  DollarSign,
  LineChart,
  User,
  LayoutDashboard,
} from "lucide-react"
import { containerVariants, itemVariants } from "@/lib/framer-motion-variants"

const stats = [
  { icon: Users, title: "Traders Joined" },
  { icon: LineChart, title: "Trades Logged" },
  { icon: LayoutDashboard, title: "Discord Members" },
  { icon: Activity, title: "Average Win Rate Increased" },
]

const features = [
  { icon: FileText, title: "Manual Trade Logging", description: "Easily log trades in stocks, crypto, forex, or options." },
  { icon: BrainCog, title: "Monte Carlo Simulation", description: "Run simulations based on your strategy to model future outcomes." },
  { icon: AlertCircle, title: "Mistake Tracking", description: "Tag and analyze trade mistakes to improve over time." },
  { icon: BarChart, title: "Time-Based Analytics", description: "View hourly, daily, weekly breakdowns of trading periods." },
  { icon: Settings2, title: "Setup Checklist System", description: "Define, track, and log your trading setups with repeatability." },
  { icon: Users, title: "Multi-Profile Support", description: "Segment different trading accounts or strategies easily." },
]

const traderTypes = [
  { icon: Zap, title: "Day Traders", description: "Fast logging & hourly analysis" },
  { icon: Repeat, title: "Swing Traders", description: "Setup-focused results tracking" },
  { icon: Bitcoin, title: "Crypto Traders", description: "Handles leverage + PnL in % or coin value" },
  { icon: DollarSign, title: "Forex Traders", description: "Track in pips, with auto commissions" },
]

export function TraderFeaturesSection() {
  return (
    <section className="py-20">
      {/* STATS SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="bg-card border border-card-border-dark rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300"
          >
            <item.icon className="h-8 w-8 text-cyan-300 mb-3" />
            <p className="text-sm text-muted-foreground font-medium">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CUSTOM SHORT GRADIENT LINE */}
      <div className="w-[150px] md:w-[300px] h-1.5 bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 mx-auto rounded-full mb-16 md:my-24" />

      {/* FEATURES SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="relative bg-card rounded-xl border border-card-border-dark p-6 overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(138,43,226,0.2),_0_0_40px_rgba(0,191,255,0.1)]"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue inline-flex items-center justify-center mb-4">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CUSTOM SHORT GRADIENT LINE */}
     <div className="w-[150px] md:w-[300px] h-1.5 bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 mx-auto rounded-full mb-16 md:my-24" />

      {/* TRADER TYPES SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {traderTypes.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="relative bg-card rounded-xl border border-card-border-dark p-6 overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(138,43,226,0.2),_0_0_40px_rgba(0,191,255,0.1)]"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue inline-flex items-center justify-center mb-4">
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
