"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { GradientLine } from "@/components/ui/gradient-line";
import { itemVariants, containerVariants } from "@/lib/framer-motion-variants";

export function FAQSection() {
  return (
    <section className="py-20">
      {/* Gradient line */}
      <div className="h-1 w-[150px] md:w-[300px] mx-auto mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-3xl mx-auto px-4"
      >
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "Will you add broker sync?",
              answer:
                "We're actively working on broker integrations. The first wave will include major platforms like MT4/MT5, TradingView, and Binance. Join our Discord to vote for your broker!",
            },
            {
              question: "How is my data protected?",
              answer:
                "Your data is encrypted both in transit and at rest. We use industry-standard security practices, and you can export your data anytime. We never sell or share your information with third parties.",
            },
            {
              question: "Can I export my trades?",
              answer:
                "Yes, you can export your data anytime in CSV or Excel format. You own your data, and we make it easy to take it with you if needed.",
            },
            {
              question: "Does it work on mobile?",
              answer:
                "Yes, our platform is fully responsive and works on all devices. We also have dedicated mobile apps for iOS and Android coming soon.",
            },
          ].map((faq, i) => (
            <motion.div key={i} variants={itemVariants} className="mb-4">
              <AccordionItem
                value={`item-${i}`}
                className="border border-card-border-dark rounded-xl bg-card px-6 py-4"
              >
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2 pb-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
