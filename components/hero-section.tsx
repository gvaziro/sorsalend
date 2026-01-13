"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { FloatingCard, TrendingCard, ScoreCard, VCActivityCard, SocialFeedCard } from "./dashboard-cards"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (searchQuery.trim()) {
      const handle = searchQuery.trim().replace(/^@/, "")
      window.location.href = `https://sorsa.io/profile/${handle}`
    }
  }

  return (
    <section className="relative min-h-[900px] flex items-center justify-center pt-20 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      
      {/* Top Left intense glow */}
      <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      {/* Center beam glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(ellipse_at_top,rgba(36,121,255,0.15)_0%,rgba(29,78,216,0.05)_45%,transparent_70%)] blur-[60px] pointer-events-none" />
      
      {/* Right side blue hint */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Floating Blocks - Desktop only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          {/* Trending Card - Left */}
          <div className="absolute top-4 -left-8 xl:-left-20 transform -rotate-6 scale-90 xl:scale-100">
            <FloatingCard delay={0.2}>
              <TrendingCard />
            </FloatingCard>
          </div>

          {/* Score Card - Now on the Right */}
          <div className="absolute bottom-4 right-0 xl:-right-16 transform rotate-3 scale-90 xl:scale-100">
            <FloatingCard delay={0.4}>
              <ScoreCard />
            </FloatingCard>
          </div>

          {/* VC Activity - Top Right */}
          <div className="absolute top-12 -right-8 xl:-right-20 transform rotate-6 scale-90 xl:scale-100">
            <FloatingCard delay={0.6}>
              <VCActivityCard />
            </FloatingCard>
          </div>
          
          {/* Social Feed - Now on the Left */}
          <div className="absolute bottom-24 left-0 xl:-left-12 transform -rotate-3 hidden xl:block">
            <FloatingCard delay={0.8}>
              <SocialFeedCard />
            </FloatingCard>
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Central Content */}
          <div className="text-center max-w-2xl mx-auto relative z-10 py-12">
            {/* Badge */}
            <motion.div 
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0 : 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium glass rounded-full border border-primary/20">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-muted-foreground font-semibold uppercase tracking-wider">Trusted by 50k+ crypto folks since 2022</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              <span className="text-balance">Crypto Twitter intelligence for </span>
              <span className="text-glow">smart money</span>
            </motion.h1>

            <motion.p 
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed mb-10"
            >
              Track influencers, detect bots, analyze VC activity, and discover early projects before they trend.
            </motion.p>

            {/* Search and CTAs */}
            <motion.div 
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.3 }}
              className="flex flex-col items-center gap-6 max-w-xl mx-auto w-full"
            >
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative group w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative flex items-center gap-3 px-6 py-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl transition-all duration-300 group-hover:border-white/10 group-hover:bg-black/50">
                  <div className="w-5 h-5 flex items-center justify-center text-primary/70">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter @handle or paste link..."
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/40 focus:outline-none text-base font-medium"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="hidden sm:flex items-center justify-center w-8 h-8 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors border border-primary/20"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                  </button>
                </div>
              </form>

              {/* Primary CTA */}
              <Link 
                href="https://app.sorsa.io"
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold bg-primary text-primary-foreground rounded-full hover:opacity-95 transition-all glow active:scale-95"
              >
                Start analyzing
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

