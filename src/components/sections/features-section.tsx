"use client"

import { motion } from "framer-motion"
import { ClipboardList, BarChart, AlertTriangle, Clock, ListChecks, FolderOpen } from 'lucide-react'
import { GradientLine } from "@/components/ui/gradient-line"
import { containerVariants } from "@/lib/framer-motion-variants"

export function FeaturesSection() {
  return (
    <section className="py-20">
      <GradientLine />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          { icon: ClipboardList, title: "Manual Trade Logging", description: "Easily input trades across Forex, Crypto, Stocks, and more." },
          { icon: BarChart, title: "Monte Carlo Simulator", description: "Predict long-term outcomes based on your edge." },
          { icon: AlertTriangle, title: "Mistake Tracking", description: "Tag errors, spot patterns, and stop repeating them." },
          { icon: Clock, title: "Time-Based Analytics", description: "Discover your best hours, weekdays, and holding periods." },
          { icon: ListChecks, title: "Setup Checklist System", description: "Log setups like SMC, Breakout, Pullback with custom checklists." },
          { icon: FolderOpen, title: "Multi-Portfolio Support", description: "Track separate strategies or accounts with ease." },
        ].map((item, i) => (
          <div key={i}>
            <div className="flex flex-col items-start">
              <div className="p-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
