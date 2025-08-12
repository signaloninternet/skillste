"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DiscIcon as Discord } from "lucide-react"
import { Header } from "@/components/layout/header"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1645226880663-81561dcab0ae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Trading background"
        fill
        priority
        className="absolute inset-0 object-cover z-0 opacity-60"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />

      {/* Optional Header */}
      <Header/>

      {/* Content */}
      <div className="relative z-30 max-w-4xl px-4 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold leading-snug"
        >
          The most advanced open-source trading journal.
          <br />
          <span className="text-muted">Built by traders, for traders.</span>
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button className="bg-white text-black hover:bg-gray-200 text-base font-semibold px-6 py-4 rounded-lg">
            Start Free
          </Button>
          <Button className="border border-white text-white px-6 py-4 text-base font-semibold flex items-center gap-2 rounded-lg hover:bg-white hover:text-black transition">
            <Discord className="w-5 h-5" />
            Join Discord
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
