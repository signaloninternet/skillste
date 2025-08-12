"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GradientLine } from "@/components/ui/gradient-line";
import { containerVariants, itemVariants } from "@/lib/framer-motion-variants";

export function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      quote:
        "This journal transformed my trading. The mistake tracking feature helped me identify patterns I wasn't aware of. My win rate went from 42% to 67% in just two months.",
      name: "Raj Mehta",
      title: "Day Trader - India",
      avatar:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      stars: 5,
      quote:
        "The Monte Carlo simulator is a game-changer. I can now predict my account growth with much more accuracy and plan my strategies accordingly.",
      name: "Sarah Johnson",
      title: "Swing Trader - Dubai",
      avatar:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      stars: 5,
      quote:
        "As a crypto trader, I love how it handles all my leverage positions and calculates PnL correctly. The time-based analytics showed me I'm most profitable on Tuesdays!",
      name: "Alex Chen",
      title: "Crypto Trader - Singapore",
      avatar:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-20 bg-black">
      {/* Gradient line */}
      <div className="h-1 w-[150px] md:w-[300px] mx-auto mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-800/60 shadow-md hover:shadow-accent-purple/30 transition-shadow duration-300 backdrop-blur"
          >
            <div className="flex flex-col items-start">
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: testimonial.stars }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-base mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Avatar & Info */}
              <div className="flex items-center gap-3 mt-auto">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
