"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DiscIcon as Discord } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DiscordCtaSection() {
  return (
    <section className="relative h-[500px] w-full text-center flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Discord background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 max-w-3xl px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join our Discord community of real traders and improve faster.
        </h2>

        <Link
          href="https://discord.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          <Discord size={18} />
          Try Now
        </Link>
      </motion.div>
    </section>
  );
}
