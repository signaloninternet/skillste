"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const images = [
  "https://images.unsplash.com/photo-1648275913341-7973ae7bc9b3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1545939004-fd99bb1d56cf?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1648098893250-1d03dce92467?q=80&w=1006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  // Add more image paths as needed
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 16000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-[110px] md:pt-[230px] min-h-screen overflow-hidden">
      {/* Background Image Loop with Fade */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            alt="Background"
            className="w-full h-full object-cover absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl container mx-auto px-4 pb-8 h-full flex flex-col justify-end">
        <div className="max-w-2xl p-6 rounded-4xl bg-white/20 backdrop-blur-md">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Built By Traders
            <br />
            <span
              className="
    relative italic z-10 text-white lg:p-2 lg:mt-2 lg:mb-2
    after:content-[''] after:absolute after:w-full after:h-1/2
    after:bg-[url('https://files.mastersunion.link/resources/svg/herosvg.svg')]
    after:bg-no-repeat after:bg-contain
    after:left-0 after:-bottom-[27%] after:z-10
  "
            >
              For Traders
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-white mb-10 max-w-xl lg:mt-8 lg:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            The most advanced open-source trading journal, designed to give you
            complete control over your trading insights. So every feature is
            made to help you analyze, improve, and grow your edge in the
            markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-white text-white font-semibold rounded-full hover:bg-black  transition-colors duration-600"
            >
              See How We Do Train
              <MdOutlineArrowOutward className="text-lg" />
            </Link>
          </motion.div>
          <div className=" flex space-x-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.2 }}
            >
              <div className="font-semibold text-white mt-8 hover:underline text-md">
                <a href="https://instagram.com">
                  Instagram <MdOutlineArrowOutward className="inline" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.2 }}
            >
              {" "}
              <div className="font-semibold text-white mt-8 hover:underline text-md">
                <a href="https://instagram.com">
                  Facebook <MdOutlineArrowOutward className="inline" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
