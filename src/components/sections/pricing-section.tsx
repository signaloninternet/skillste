"use client";

import { motion } from "framer-motion";
import { Rocket, Gem, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientLine } from "@/components/ui/gradient-line";
import { containerVariants } from "@/lib/framer-motion-variants";

export function PricingSection() {
  return (
    <section className="py-20 bg-black">
      {/* Gradient line */}
      <div className="h-1 w-[150px] md:w-[300px] mx-auto mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full md:my-24" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Free Plan */}
        <motion.div className="p-8 flex flex-col items-center text-center border border-card-border-dark bg-gradient-to-b from-zinc-900/80 to-black/80 rounded-2xl shadow-lg transition-all duration-300">
          <Rocket className="w-10 h-10 text-accent-purple mb-4" />
          <h3 className="text-3xl font-bold mb-2 text-white">Free Plan</h3>
          <p className="text-5xl font-bold text-white mb-4">
            $0<span className="text-lg text-gray-400">/forever</span>
          </p>
          <ul className="space-y-3 text-left w-full max-w-xs mx-auto mb-8">
            {[
              "Manual trade logging",
              "1 portfolio",
              "Basic analytics",
              "Community access",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-accent-purple" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-accent-purple hover:bg-accent-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Start Free
          </Button>
        </motion.div>

        {/* Lifetime Plan */}
        <motion.div className="p-8 flex flex-col items-center text-center border border-blue-500/40 bg-gradient-to-b from-blue-950/60 to-black/80 rounded-2xl shadow-xl relative overflow-hidden transition-all duration-300">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg shadow-md z-10"
          >
            🔥 LIMITED TIME OFFER
          </motion.div>
          <Gem className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-3xl font-bold mb-2 text-white">Lifetime Plan</h3>
          <p className="text-5xl font-bold text-white mb-4">
            $99<span className="text-lg text-gray-400">/one-time</span>
          </p>
          <ul className="space-y-3 text-left w-full max-w-xs mx-auto mb-8">
            {[
              "Everything in Free",
              "Unlimited portfolios",
              "Monte Carlo & evaluator",
              "Advanced filters",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-blue-500 hover:bg-blue-500/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Claim Lifetime Access
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
