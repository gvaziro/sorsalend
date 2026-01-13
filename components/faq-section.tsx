"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How is Sorsa different from other crypto tools?",
    answer:
      "Sorsa focuses on real influence metrics, not vanity numbers. We detect bots, analyze engagement quality, and track institutional interest from VCs and funds.",
  },
  {
    question: "How do you detect bot followers?",
    answer:
      "Our ML algorithms analyze multiple signals including account age, activity patterns, engagement behavior, and network connections to identify fake accounts with high accuracy.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Core metrics are updated daily. The Early Projects feed refreshes every 24 hours. Real-time tracking for watched accounts is available on Pro plans.",
  },
  {
    question: "Is there an API available?",
    answer:
      "Yes, Pro subscribers get full API access to all Sorsa data. Build trading systems, research platforms, or integrate with your existing tools.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, cancel anytime with no questions asked. Your access continues until the end of your billing period.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass rounded-xl overflow-hidden transition-all ${
                openIndex === index ? "ring-1 ring-primary/20" : ""
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="font-medium pr-8">{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === index ? "bg-primary/10" : "bg-secondary"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-primary" />
                  ) : (
                    <Plus className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
