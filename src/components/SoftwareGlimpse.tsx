"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Agency Website",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "E-commerce Platform",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Portfolio Website",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Business Dashboard",
  },
];

export default function SoftwareGlimpse() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const n = portfolioItems.length;
  const SLIDE_W = 640;
  const SLIDE_H = 520;
  const GAP = 24;
  const VISIBLE_W = 1600;
  const trackWidth = n * SLIDE_W + (n - 1) * GAP;
  const centerOffset = VISIBLE_W / 2;
  const translateX = centerOffset - (current * (SLIDE_W + GAP) + SLIDE_W / 2);

  const prev = () => {
    setCurrent((s) => (s - 1 + n) % n);
    resetProgress();
  };

  const next = () => {
    setCurrent((s) => (s + 1) % n);
    resetProgress();
  };

  function resetProgress() {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoPlay();
  }

  function startAutoPlay() {
    const duration = 10 * 1000; // 10 seconds
    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        next();
      }
    }, 50);
  }

  // Handle resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Start autoplay
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const radius = 23.5;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <section className="py-16">
      <div className="max-w-[1400px] relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with arrows */}
        <Image
          src="/glimpsbg.svg"
          alt="Software Glimpse Background"
          width={1400}
          height={600}
          className="absolute z-0 -top-16 md:-top-24 left-0 md:left-[25%] w-[400px] h-[400px] md:w-[650px] md:h-[650px] object-cover opacity-30"
        />
        <div className="flex items-center justify-between mb-8">
          <button
            aria-label="Previous"
            onClick={prev}
            className="p-3 rounded-full   bg-white hover:bg-gray-100"
          >
            <Image
              src="/left.svg"
              alt="Next"
              width={24}
              height={24}
              className="relative z-10"
            />
          </button>

          <div className="text-center relative">
            <h2 className="text-4xl z-10 md:text-5xl font-bold pb-8 text-white">
                          <span
              className="
    relative italic z-10 text-white lg:p-2 lg:mt-2 lg:mb-2
    after:content-[''] after:absolute after:w-full after:h-1/2
    after:bg-[url('https://files.mastersunion.link/resources/svg/herosvg.svg')]
    after:bg-no-repeat after:bg-contain
    after:left-0 after:-bottom-[27%] after:z-10
  "
            >
              Glimpse {" "}
            </span> of our software
            </h2>
            <p className="text-[#8987A1] z-10 mt-2 max-w-md pb-8 mx-auto">
              Take a look at some of our recent projects to see how we've helped
              businesses like yours succeed online.
            </p>
          </div>

          {/* Right Arrow with Smooth Progress Ring */}
          <button
            aria-label="Next"
            onClick={next}
            className="relative p-3 rounded-full   bg-white hover:bg-gray-100 flex items-center justify-center"
            style={{ width: 50, height: 50 }}
          >
            {/* Background Circle */}
            <svg
              className="absolute hidden md:block top-0 left-0"
              width="50"
              height="50"
            >
              <circle
                cx="25"
                cy="25"
                r={radius}
                stroke="#d1d5db"
                strokeWidth="3"
                fill="none"
              />
              <motion.circle
                cx="25"
                cy="25"
                r={radius}
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                animate={{ strokeDashoffset: dashOffset }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </svg>
            <Image
              src="/right.svg"
              alt="Next"
              width={24}
              height={24}
              className="relative z-10"
            />
          </button>
        </div>

        {/* Carousel */}
        <div className="flex justify-center">
          {isMobile ? (
            <div className="w-full z-10 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-2xl z-10 overflow-hidden shadow-xl bg-white"
                >
                  <img
                    src={portfolioItems[current].image}
                    alt={portfolioItems[current].title}
                    className="w-full z-10 h-64 object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="relative" style={{ width: VISIBLE_W }}>
              <div className="overflow-hidden">
                <motion.div
                  className="flex items-center"
                  style={{ width: trackWidth, gap: GAP }}
                  animate={{ x: translateX }}
                  transition={{ type: "spring", stiffness: 160, damping: 20 }}
                >
                  {portfolioItems.map((item, index) => {
                    const isCurrent = index === current;
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        animate={{
                          scale: isCurrent ? 1 : 0.9,
                          opacity: isCurrent ? 1 : 0.65,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 22,
                        }}
                        style={{ width: SLIDE_W, height: SLIDE_H }}
                        className={`rounded-2xl overflow-hidden bg-white/30 border-white ${
                          isCurrent ? "z-20" : "z-10"
                        }`}
                      >
                        <div className="w-full h-full flex justify-center items-center rounded-xl relative bg-white/10 border-white">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-[90%] h-[90%] object-cover rounded-xl"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
