"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Will you add broker integrations?",
    answer:
      "We're actively working on broker integrations. The first wave will include major platforms like MT4/MT5, TradingView, and Binance. Join our Discord to vote for your broker!",
  },
  {
    question: "How is my data secured?",
    answer:
      "Your data is encrypted both in transit and at rest. We use industry-standard security practices, and you can export your data anytime. We never sell or share your information with third parties.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes, you can export your data anytime in CSV or Excel format. You own your data, and we make it easy to take it with you if needed.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes, our platform is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android coming soon.",
  },
];

export default function FAQSections() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title */}
          <div className="flex flex-col h-full justify-center items-center relative">
            <div className="absolute z-0 -top-[90px] md:-top-[96px] -left-[250px] ">
              <img
                src="/faq.svg"
                alt="FAQ Background"
                className="w-full h-full z-0 object-cover opacity-20"
              />
            </div>
            <h2 className="text-4xl md:text-5xl text-bold mb-12">
                Frequently Asked <br />
              <span
                className="
    relative italic z-10 text-white lg:p-2 lg:mt-2 lg:mb-2
    after:content-[''] after:absolute after:w-full after:h-1/2
    after:bg-[url('https://files.mastersunion.link/resources/svg/herosvg.svg')]
    after:bg-no-repeat after:bg-contain
    after:left-0 after:-bottom-[27%] after:z-10 md:text-5xl
  "
              >
                Questions
              </span>
              
            </h2>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4 z-20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white z-20 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full z-20 px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                        {index === 0 && (
                          <>
                            <br />
                            <strong className="text-gray-900">
                              hello@Designure.com
                            </strong>{" "}
                            We typically respond within 24 hours.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
