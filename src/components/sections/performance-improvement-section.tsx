"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { itemVariants, containerVariants } from "@/lib/framer-motion-variants"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Week 1", performance: 20 },
  { name: "Week 2", performance: 35 },
  { name: "Week 3", performance: 50 },
  { name: "Week 4", performance: 60 },
  { name: "Week 5", performance: 72 },
  { name: "Week 6", performance: 80 },
]

export function PerformanceImprovementSection() {
  return (
    <section className="py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side Text */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Performance Improvement
          </h2>
          {[
            "68% better performance after journaling",
            "Reduces emotional trading",
            "Builds accountability",
            "Turns data into clarity",
          ].map((text, i) => (
            <motion.div key={i} variants={itemVariants} className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-accent-purple" />
              <p className="text-lg text-gray-300">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side Chart */}
        <motion.div
          variants={itemVariants}
          className="bg-card rounded-xl border border-card-border-dark p-6 h-96 w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: "#111", borderColor: "#444" }} />
              <Line
                type="monotone"
                dataKey="performance"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>
    </section>
  )
}
