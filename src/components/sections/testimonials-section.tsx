"use client";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GradientLine } from "@/components/ui/gradient-line";
import { containerVariants, itemVariants } from "@/lib/framer-motion-variants";
import Link from "next/link";
import { Button } from "../ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "This journal transformed my trading. The mistake tracking feature helped me identify patterns I wasn't aware of. My win rate went from 42% to 67% in just two months.",
      author: "Raj Mehta",
      role: "Day Trader - India",
    },
    {
      text: "The Monte Carlo simulator is a game-changer. I can now predict my account growth with much more accuracy and plan my strategies accordingly.",
      author: "Sarah Johnson",
      role: "Swing Trader - Dubai",
    },
    {
      text: "As a crypto trader, I love how it handles all my leverage positions and calculates PnL correctly. The time-based analytics showed me I'm most profitable on Tuesdays!",
      author: "Alex Chen",
      role: "Cypto Trader - Singapore",
    },
    {
      text: "This journal transformed my trading. The mistake tracking feature helped me identify patterns I wasn't aware of. My win rate went from 42% to 67% in just two months.",
      author: "Raj Mehta",
      role: "Day Trader - India",
    },
    {
      text: "The Monte Carlo simulator is a game-changer. I can now predict my account growth with much more accuracy and plan my strategies accordingly.",
      author: "Sarah Johnson",
      role: "Swing Trader - Dubai",
    },
    {
      text: "As a crypto trader, I love how it handles all my leverage positions and calculates PnL correctly. The time-based analytics showed me I'm most profitable on Tuesdays!",
      author: "Alex Chen",
      role: "Cypto Trader - Singapore",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className=" max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-full flex flex-col justify-between"
          >
            <h2 className="text-4xl text-bold md:text-5xl mb-12">
              <span
                className="
    relative italic z-10 text-white lg:p-2 lg:mt-2 lg:mb-2
    after:content-[''] after:absolute after:w-full after:h-1/2
    after:bg-[url('https://files.mastersunion.link/resources/svg/herosvg.svg')]
    after:bg-no-repeat after:bg-contain
    after:left-0 after:-bottom-[27%] after:z-10
  "
              >
                Testimonials
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white text-white font-semibold rounded-full hover:bg-black  transition-colors duration-600"
              >
                Contact Us
                <MdOutlineArrowOutward className="text-lg" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -60, rotateX: 15 }}
                transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="text-white"
              >
                <p className="text-xl leading-relaxed mb-12 text-gray-300">
                  {testimonials[currentTestimonial].text}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-lg font-bold text-white">
                        {testimonials[currentTestimonial].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-lg text-white">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(75, 85, 99, 1)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(75, 85, 99, 1)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
