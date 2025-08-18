"use client";

import { useEffect, useRef, useState } from "react";

export default function VisionMissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Show/hide fixed bar based on section visibility
      if (rect.top <= 100 && rect.bottom >= windowHeight - 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }

      // Progress for sliding indicator
      const scrollStart = -rect.top;
      const scrollEnd = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto min-h-[200vh] max-w-7xl bg-black text-white"
    >
      {/* Fixed Bar */}
      <div
        className={`fixed top-8 md:top-20 left-[50%] md:left-[10%] -translate-x-1/2 bg-gray-800 px-1 rounded-xl z-50 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative flex">
          <button className="px-6 py-2 text-sm font-medium transition-colors relative z-10">
            VISION
          </button>
          <button className="px-6 py-2 text-sm font-medium transition-colors relative z-10">
            MISSION
          </button>

          {/* Sliding indicator */}
          <div
            className="absolute top-1 rounded-xl bottom-1 w-[calc(50%-4px)] bg-gradient-to-r from-cyan-400 to-yellow-400 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${scrollProgress * 100}%)`,
            }}
          />
        </div>
      </div>

      {/* Vision Section */}
      <div
        className="sticky top-0 min-h-screen flex items-center justify-center px-6 md:px-8 transition-opacity duration-300"
        style={{
          opacity: 1 - scrollProgress,
          transform: `translateY(${scrollProgress * -50}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-8 md:gap-12 w-full">
          {/* Left: Heading + Subtext */}
          <div className="w-full md:w-1/3 text-center md:text-left ">
            <h1 className="text-xl font-bold leading-tight">
              To create a{" "}
              <span className="text-white">world-class trading platform</span>{" "}
              that empowers investors with real-time insights & tools to
              maximize growth
            </h1>

            <p className="text-gray-400 pt-4 text-base md:text-lg">
              "What" our platform delivers
            </p>
          </div>

          {/* Center: Image */}
          <div className="relative w-full md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Stock trading dashboard"
              className="rounded-2xl w-full h-auto max-h-[400px] object-cover mx-auto"
            />
          </div>

          {/* Right: Points */}
          <div className="w-full md:w-1/3 mt-6 md:mt-32 ">
            <h3 className="text-cyan-400 text-lg md:text-xl font-semibold mb-4 md:mb-6">
              The "How"
            </h3>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">+</span>
                <p>
                  By providing real-time market data & advanced charting tools
                  to stay ahead of trends
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">+</span>
                <p>
                  By offering AI-powered trade recommendations designed to
                  maximize returns & minimize risk
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">+</span>
                <p>
                  By enabling seamless global access, ensuring traders can act
                  anytime, anywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div
        className="sticky top-0 h-[110vh] md:h-screen flex rounded-3xl items-center justify-center px-8 bg-gray-50 text-black transition-opacity duration-300"
        style={{
          opacity: scrollProgress,
          transform: `translateY(${(1 - scrollProgress) * 50}px)`,
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-8 md:gap-12 w-full">
          {/* Left: Heading + Subtext */}
          <div className="w-full md:w-1/3 text-center md:text-left ">
            <h1 className="text-xl font-bold leading-tight text-gray-900">
              Our <span className="text-blue-600">Mission</span> is to build a
              trading platform that empowers investors to achieve financial
              freedom with trust and innovation
            </h1>

            <p className="text-gray-600 pt-4 text-base md:text-lg">
              What drives us forward
            </p>
          </div>

          {/* Center: Image */}
          <div className="relative w-full md:w-2/5">
            <img
              src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Stock trading mission"
              className="rounded-2xl w-full h-auto max-h-[400px] object-cover mx-auto shadow-md"
            />
          </div>

          {/* Right: Points */}
          <div className="w-full md:w-1/3 mt-6 md:mt-32 ">
            <h3 className="text-blue-600 text-lg md:text-xl font-semibold mb-4 md:mb-6">
              How We Pursue Our Mission
            </h3>

            <div className="space-y-4 text-sm md:text-base text-gray-800">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">+</span>
                <p>
                  By building a transparent ecosystem where traders can trust
                  every move and decision
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">+</span>
                <p>
                  By equipping users with cutting-edge tools and insights for
                  smarter, data-driven trading
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">+</span>
                <p>
                  By fostering global access, enabling anyone to participate in
                  the financial markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
