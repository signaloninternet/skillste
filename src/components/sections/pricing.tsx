"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const freeFeatures = [
  "Manual trade logging",
  "1 portfolio",
  "Basic analytics",
  "Community access",
];

const lifetimeFeatures = [
  "Everything in Free",
  "Unlimited portfolios",
  "Monte Carlo & evaluator",
  "Advanced filters",
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          {/* Left Side - Free Plan */}
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

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Free Plan
              </h3>
              <p className="text-2xl font-bold text-gray-900">$0</p>
              <span className="text-gray-500 text-sm">forever</span>

              {/* Features in 2 columns */}
              <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
                {freeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full mt-8 bg-cyan-600 hover:opacity-90 text-white py-4 rounded-xl transition-all duration-300"
                asChild
              >
                <a href="/auth">Start Free</a>
              </Button>
            </div>
          </div>

          {/* Right Side - Lifetime Plan */}
          <div className="w-full md:w-[60%] bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Lifetime Plan
            </h3>
            <p className="text-4xl font-bold text-gray-900">$99</p>
            <span className="text-gray-500 text-sm">one-time</span>

            <div className="mt-6 space-y-4 text-gray-700">
              {lifetimeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full mt-8 bg-cyan-600 hover:opacity-90 text-white py-4 rounded-xl transition-all duration-300"
              asChild
            >
              <a href="/auth">Claim Lifetime Access</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
