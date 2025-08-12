"use client"

import { motion } from "framer-motion"
import { Lock, Download, Brain } from 'lucide-react'
import { GradientLine } from "@/components/ui/gradient-line"
import { itemVariants, containerVariants } from "@/lib/framer-motion-variants"

export function DataSecuritySection() {
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
          { icon: Lock, title: "Encrypted Storage", description: "Your data is encrypted both in transit and at rest using industry standards." },
          { icon: Download, title: "Export Anytime", description: "Download your data in CSV or Excel format whenever you want." },
          { icon: Brain, title: "No AI Training", description: "We don't use your data to train AI models or share with third parties." },
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
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-400 mt-8 text-lg"
      >
        We don't sell or share your data. Period.
      </motion.p>
    </section>
  )
}
