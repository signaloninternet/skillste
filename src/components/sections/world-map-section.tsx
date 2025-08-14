"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GradientLine } from "@/components/ui/gradient-line";
import { itemVariants } from "@/lib/framer-motion-variants";

export function WorldMapSection() {
  return (
    <section className="py-20 text-center bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="relative rounded-2xl overflow-hidden border border-accent-purple/30 bg-zinc-900/30 backdrop-blur-lg shadow-[0_0_50px_#9333ea33] p-2">
          <Image
            src="https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual map image
            alt="World Map"
            width={1200}
            height={600}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
