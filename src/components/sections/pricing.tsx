"use client";

import { Button } from "@/components/ui/button";
import { Check, CheckCircle } from "lucide-react";

const features = [
  "Unlimited requests",
  "Unlimited requests",
  "Unlimited requests",
  "Unlimited requests",
  "Unlimited requests",
  "Unlimited requests",
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          {/* Left Side - Pricing Info */}
          <div className="w-full md:w-[40%]">
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
                Pricing
              </span>
            </h2>
            <p className="text-[#8987A1] max-w-[70%] mb-12 leading-relaxed">
              Take a look at some of our recent projects to see how we've helped
              businesses like yours succeed online.
            </p>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Schedule a Meeting
              </h3>
              <Button
                size="lg"
                className="w-full bg-cyan-700 hover:bg-cyan-200 hover:text-black text-white py-4 rounded-xl transition-all duration-300 transform  -105"
              >
                Schedule Meeting
              </Button>
            </div>
          </div>

          {/* Right Side - Unlimited Services */}
          <div className="w-full md:w-[60%] bg-white  rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Unlimited Services
            </h3>
            <p className="text-[#8987A1] mb-8">
              Take a look at some of our recent projects to see how we've helped
              businesses like yours succeed online.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-[#8987A1]" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-4xl font-bold text-gray-900">$3,250</span>
                <span className="text-gray-600 ml-2">/mo</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
