"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { itemVariants, containerVariants } from "@/lib/framer-motion-variants";

export function DashboardPreviewSection() {
  return (
    <section className="py-20 bg-black text-center">
      {/* Gradient line */}
      <div className="h-1 w-[150px] md:w-[300px] mx-auto mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4"
      >
        {/* Tilt hover preview */}
        <motion.div variants={itemVariants}>
          <Tilt
            glareEnable={false}
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            transitionSpeed={1500}
            scale={1}
            className="w-full p-4 max-w-5xl mx-auto rounded-xl border border-card-border-dark shadow-lg shadow-accent-purple/20"
          >
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dashboard Preview"
              width={1000}
              height={500}
              className="rounded-xl max-h-[500ppx] object-cover"
            />
          </Tilt>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="/journal"
            className="inline-flex hover:underline items-center bg-accent-purple hover:bg-accent-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Try the Live Preview
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
