"use client"

import Link from "next/link"
import { useState } from "react"
import { Check, ArrowUpRight } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Basic access to explore the platform",
    features: ["Limited account searches", "Basic influence scores", "Public project data"],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 59, yearly: 49 },
    description: "Full access for serious researchers",
    features: [
      "Unlimited searches",
      "Full influence analytics",
      "Early Projects feed",
      "VC & Fund tracking",
      "Advanced filters",
      "API access",
      "Priority support",
    ],
    cta: "Start Pro trial",
    popular: true,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle,rgba(36,121,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary mb-4">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">Choose the plan that fits your needs</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 rounded-full bg-muted transition-colors"
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-primary rounded-full transition-all duration-200 ${
                  isYearly ? "left-7" : "left-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-green-500 ml-1">-17%</span>
            </span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass rounded-2xl p-8 ${plan.popular ? "ring-1 ring-primary/30" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most popular
                </div>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${isYearly ? plan.price.yearly : plan.price.monthly}</span>
                {plan.price.monthly > 0 && <span className="text-muted-foreground text-sm">/month</span>}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://app.sorsa.io"
                className={`mt-8 w-full py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90 glow"
                    : "glass glass-hover text-foreground"
                }`}
              >
                {plan.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
