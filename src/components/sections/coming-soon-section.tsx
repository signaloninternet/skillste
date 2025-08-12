"use client"

import { motion } from "framer-motion"
import { BarChart, Bitcoin, Zap, DiscIcon as Discord } from 'lucide-react'
import { GradientLine } from "@/components/ui/gradient-line"
import { containerVariants } from "@/lib/framer-motion-variants"

export function ComingSoonSection() {
  return (
    <section className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Ready to track your edge? Start now, it's free.</h2>
        <GradientLine />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {[
            { icon: BarChart, title: "MetaTrader" },
            { icon: BarChart, title: "TradingView" }, // Using BarChart as placeholder, actual icons might differ
            { icon: Bitcoin, title: "Binance" },
            { icon: Zap, title: "Telegram Alerts" }, // Using Zap as placeholder
            { icon: Discord, title: "Discord Bot" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center p-4">
              <p className="text-sm text-gray-500 mb-2">Coming Soon</p>
              <div className="p-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
