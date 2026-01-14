"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is Sorsa?",
    answer:
      "Sorsa (formerly Tweetscout) is a crypto analytics tool that helps you make better decisions using public data from X (formerly Twitter), still the main social network in crypto.",
  },
  {
    question: "What can I use Sorsa for?",
    answer:
      "Sorsa helps youevaluate an accounts real weight in crypto (Sorsa Score), do faster due diligence and spot red flags, detect bot-inflated audiences, discover early-stage projects and rising accounts",
  },
  {
    question: "What is the Sorsa Score?",
    answer:
      "Score reflects how many influential crypto people, projects, and VC-related accounts follow an account, and how influential those followers are. Quality matters more than quantity.",
  },
  {
    question: "What is Bot Followers and how does it work?",
    answer:
      "Bot Followers is a Plus feature that estimates what percentage of an account's followers look like bots. It checks followers one-by-one using multiple signals, so large accounts may take longer to process.",
  },
  {
    question: "Can I access your data via API?",
    answer: "Yes. Sorsa data is available via API. See sorsa.io/api for details.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] pointer-events-none opacity-60" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
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
