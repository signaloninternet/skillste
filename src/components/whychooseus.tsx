"use client";

import { Star, Settings, MessageSquare, Award, Square } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 className="text-4xl text-bold md:text-5xl mb-4">
            <span
              className="
    relative italic z-10 text-white lg:p-2 lg:mt-2 lg:mb-2
    after:content-[''] after:absolute after:w-full after:h-1/2
    after:bg-[url('https://files.mastersunion.link/resources/svg/herosvg.svg')]
    after:bg-no-repeat after:bg-contain
    after:left-0 after:-bottom-[27%] after:z-10
  "
            >
              Why Choose Us?
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          className="
          font-creato
          grid grid-cols-1 gap-6
          lg:grid-cols-8 lg:grid-rows-2
          auto-rows-[minmax(150px,auto)]
        "
        >
          {/* Card 1 */}
          <div
            className="rounded-4xl bg-white/20 backdrop-blur-md  p-8 rounded-2xl shadow-sm flex flex-col transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/one.svg" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Manual Trade Logging
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Easily log trades in stocks, crypto, forex, or options.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-4xl bg-white/20 backdrop-blur-md  p-8 rounded-2xl shadow-sm flex flex-col transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/five.png" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold  text-white mb-4">
              Monte Carlo Simulation
            </h3>
            <p className=" text-white text-sm leading-relaxed">
              Run simulations based on your strategy to model future outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className=" rounded-4xl bg-white/20 backdrop-blur-md  p-8 rounded-2xl shadow-sm flex flex-col transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/four.png" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold  text-white mb-4">
              Mistake Tracking
            </h3>
            <p className=" text-white text-sm leading-relaxed">
              Tag and analyze trade mistakes to improve over time.
            </p>
          </div>

          {/* Card 4 - Tall with image */}
          <div
            className="rounded-4xl bg-white/20 backdrop-blur-md   p-8 rounded-2xl shadow-sm flex flex-col transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 2" }}
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/three.png" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold  text-white mb-4">
              Time-Based Analytics
            </h3>
            <p className=" text-white text-sm leading-relaxed mb-4">
              View hourly, daily, weekly breakdowns of trading periods.
            </p>
            <div className="w-full h-1/2 mt-auto rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="rounded-4xl bg-white/20 backdrop-blur-md   p-8 rounded-2xl shadow-sm flex flex-col transition-all duration-300"
            style={{ gridColumn: "span 3", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold  text-white mb-4">
              Setup Checklist System
            </h3>
            <p className=" text-white text-sm leading-relaxed">
              Define, track, and log your trading setups with repeatability.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className=" rounded-4xl bg-white/20 backdrop-blur-md  p-8 rounded-2xl shadow-sm flex flex-col transition-all duration-300"
            style={{ gridColumn: "span 3", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/two.png" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold  text-white mb-4">
              Multi-Profile Support
            </h3>
            <p className=" text-white text-sm leading-relaxed">
              Segment different trading accounts or strategies easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
