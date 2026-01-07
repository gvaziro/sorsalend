"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, PieChart, Building2, Zap, Share2, Search, ArrowUpRight, BarChart3, Users, Network } from "lucide-react"

const audiences = [
  {
    title: "Traders",
    description: "Spot momentum before it hits the charts by tracking top KOL engagement.",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "bg-blue-500",
    visual: <TraderVisual />,
    link: "https://sorsa.io/trending"
  },
  {
    title: "Investors",
    description: "Deep dive into project social health and founder network strength.",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "bg-emerald-500",
    visual: <InvestorVisual />,
    link: "https://sorsa.io/early-projects"
  },
  {
    title: "VC Funds",
    description: "Monitor portfolio companies and discover early-stage investment opportunities.",
    color: "from-primary/20 to-primary/5",
    accent: "bg-primary",
    visual: <VCVisual />,
    link: "https://sorsa.io/vc-trends"
  },
  {
    title: "Degens",
    description: "Snipe new projects being followed by the smartest money in crypto.",
    color: "from-amber-500/20 to-amber-600/5",
    accent: "bg-amber-500",
    visual: <DegenVisual />,
    link: "https://sorsa.io/early-projects"
  },
  {
    title: "Projects",
    description: "Benchmark your project against competitors and identify key growth drivers.",
    color: "from-primary/20 to-primary/5",
    accent: "bg-primary",
    visual: <ProjectVisual />,
    link: "https://sorsa.io/most-searched"
  },
]

function TraderVisual() {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-end relative">
      <div className="absolute inset-0 overflow-hidden">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <motion.path
            d="M 0 150 Q 50 140 80 160 T 150 120 T 220 140 T 300 60 T 400 80"
            fill="none"
            stroke="url(#blueGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(36, 121, 255, 0)" />
              <stop offset="50%" stopColor="rgba(36, 121, 255, 1)" />
              <stop offset="100%" stopColor="rgba(36, 121, 255, 0)" />
            </linearGradient>
          </defs>
          <motion.circle
            r="4"
            fill="#2479ff"
            style={{ 
              offsetPath: "path('M 0 150 Q 50 140 80 160 T 150 120 T 220 140 T 300 60 T 400 80')",
              offsetDistance: "var(--offset-distance, 0%)",
              "--offset-distance": "0%"
            } as any}
            animate={{ 
              "--offset-distance": "100%"
            } as any}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </motion.circle>
        </svg>
      </div>
      <div className="relative z-10 space-y-2">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="px-2 py-1 glass rounded-md text-[10px] font-mono text-primary border-primary/20">
            $SOL SOCIAL_VOL: 420%
          </div>
        </motion.div>
        <div className="h-16 flex items-end gap-1">
          {[40, 70, 45, 90, 65, 80, 55, 75, 60, 85].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ 
                delay: i * 0.05, 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "mirror",
                ease: "easeInOut"
              }}
              className="flex-1 bg-gradient-to-t from-primary/40 to-primary/10 rounded-t-[2px]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function InvestorVisual() {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center justify-center relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:15px_15px]" />
      
      {/* Radar Scan Effect */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(36,121,255,0.08)_10deg,transparent_20deg)] pointer-events-none"
      />

      <div className="relative z-10 w-full h-full flex flex-col gap-4">
        {/* Metric Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-[7px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Network Moat</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-white tracking-tight">PROTECTED</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[7px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Trust Score</span>
            <div className="text-[10px] font-black text-primary tracking-tight">8.8/10</div>
          </div>
        </div>

        {/* Network Graph Visualization */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Central Hub */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 15px rgba(36,121,255,0.1)", "0 0 25px rgba(36,121,255,0.3)", "0 0 15px rgba(36,121,255,0.1)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-10 h-10 rounded-xl glass border-primary/40 flex items-center justify-center z-20"
          >
            <Users className="w-5 h-5 text-primary" />
          </motion.div>

          {/* Connection Rings */}
          {[1, 2].map((i) => (
            <div key={i} className={`absolute rounded-full border border-primary/${i * 10} border-dashed w-${i * 20} h-${i * 20}`} 
                 style={{ width: `${i * 60}px`, height: `${i * 60}px` }} />
          ))}

          {/* Connecting Nodes */}
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * Math.PI * 2
            const distance = 45
            const x = Number((Math.cos(angle) * distance).toFixed(4))
            const y = Number((Math.sin(angle) * distance).toFixed(4))
            return (
              <div key={i} className="absolute">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary/60"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                />
                <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none">
                  <motion.line
                    x1="0" y1="0"
                    x2={x} y2={y}
                    stroke="rgba(36, 121, 255, 0.2)"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                  />
                </svg>
              </div>
            )
          })}
        </div>

        {/* Analysis Labels */}
        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <span className="text-[7px] font-bold text-muted-foreground uppercase">Social Health</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-2 h-0.5 rounded-full ${i < 4 ? 'bg-primary' : 'bg-white/10'}`} />
              ))}
            </div>
          </div>
          <div className="glass rounded-lg p-2 border border-white/5 flex items-center justify-between">
            <span className="text-[8px] font-bold text-white/80">Founder Connections</span>
            <span className="text-[8px] font-mono font-bold text-primary">+12 New</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function VCVisual() {
  const [items, setItems] = useState([
    { name: "LayerZero", change: "+42", logo: "L" },
    { name: "Monad", change: "+128", logo: "M" },
    { name: "Berachain", change: "+84", logo: "B" },
    { name: "EigenLayer", change: "+15", logo: "E" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev: any) => {
        const last = prev[prev.length - 1]
        const rest = prev.slice(0, prev.length - 1)
        return [last, ...rest]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full p-4 flex flex-col relative overflow-hidden bg-black/20">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="grid grid-cols-4 gap-2 p-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="aspect-square rounded bg-primary/20" />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col gap-2 h-full justify-center">
        <div className="flex items-center justify-between px-1 mb-1">
          <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">Portfolio Growth</span>
          <span className="text-[10px] font-bold text-primary animate-pulse">LIVE FEED</span>
        </div>
        
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {items.slice(0, 3).map((item: any, i: number) => (
              <motion.div 
                key={item.name}
                layout
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ 
                  opacity: 1 - i * 0.25, 
                  x: 0, 
                  scale: 1 - i * 0.05,
                  filter: `blur(${i * 0.5}px)` 
                }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 p-3 glass border-white/5 rounded-2xl bg-white/[0.02]"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                  {item.logo}
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold text-white/90">{item.name}</div>
                  <div className="text-[9px] text-muted-foreground/60 leading-none">Social Score Growth</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-black text-primary drop-shadow-[0_0_8px_rgba(36,121,255,0.4)]">
                    {item.change}
                  </div>
                  <div className="text-[8px] font-bold text-primary/40 uppercase tracking-tighter">pts</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

const degenProjects = [
  { name: "$SCAM", status: "RUG PULL", color: "text-red-500", glow: "shadow-[0_0_15px_rgba(239,68,68,0.4)]" },
  { name: "$PUMP", status: "EXIT SCAM", color: "text-orange-500", glow: "shadow-[0_0_15px_rgba(249,115,22,0.4)]" },
  { name: "$FUD", status: "HONEYPOT", color: "text-rose-500", glow: "shadow-[0_0_15px_rgba(244,63,94,0.4)]" },
  { name: "$GEM", status: "NEXT GEM", color: "text-amber-500", glow: "shadow-[0_0_25px_rgba(245,158,11,0.6)]" },
]

function DegenVisual() {
  const [index, setIndex] = useState(0)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [direction, setDirection] = useState(1) // 1 for swipe, 0 for stay

  useEffect(() => {
    if (isBookmarked) {
      const timer = setTimeout(() => {
        setIsBookmarked(false)
        setIndex(0)
        setDirection(1)
      }, 3000)
      return () => clearTimeout(timer)
    }

    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % degenProjects.length
        if (next === degenProjects.length - 1) {
          setDirection(0) // Stop swiping
          setTimeout(() => setIsBookmarked(true), 600)
          return next
        }
        setDirection(1)
        return next
      })
    }, 800)

    return () => clearInterval(timer)
  }, [isBookmarked])

  const current = degenProjects[index]

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden p-2">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:15px_15px]" />
      
      <div className="relative w-full max-w-[130px] aspect-[3/4.2]">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: 200, opacity: 0, rotate: 15 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            exit={direction === 1 ? { x: -200, opacity: 0, rotate: -15 } : { opacity: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            className="absolute inset-0 glass border-white/10 rounded-xl p-2.5 flex flex-col shadow-xl bg-black/60 backdrop-blur-xl"
          >
            {/* Project Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-bold">
                {current.name[1]}
              </div>
              <div className={`px-1.5 py-0.5 rounded-[4px] text-[7px] font-bold uppercase tracking-tighter ${current.color} bg-current/10`}>
                {current.status === "NEXT GEM" ? "Signal" : "Alert"}
              </div>
            </div>

            {/* Project Title */}
            <div className="flex-1 flex flex-col justify-center py-1">
              <div className={`text-lg font-black ${current.color} leading-tight tracking-tight`}>
                {current.name}
              </div>
              <div className="text-[7px] text-muted-foreground font-medium uppercase tracking-wider">
                Alpha Scan
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-1.5 py-2 border-y border-white/5 my-1">
              <div className="space-y-0.5">
                <div className="text-[6px] text-muted-foreground uppercase font-bold tracking-tighter">Growth</div>
                <div className={`text-[8px] font-mono font-bold ${current.status === "NEXT GEM" ? "text-primary" : "text-white/60"}`}>
                  {current.status === "NEXT GEM" ? "+420%" : "-15%"}
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="text-[6px] text-muted-foreground uppercase font-bold tracking-tighter">KOLs</div>
                <div className="text-[8px] font-mono font-bold text-white/60">
                  {current.status === "NEXT GEM" ? "12" : "0"}
                </div>
              </div>
            </div>

            {/* Bookmark Action */}
            <div className="mt-1 flex justify-end">
              <motion.div
                animate={isBookmarked && current.status === "NEXT GEM" ? { 
                  scale: [1, 1.2, 1],
                  backgroundColor: ["rgba(255,255,255,0.05)", "rgba(245,158,11,0.2)", "rgba(245,158,11,0.3)"]
                } : {}}
                className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                  isBookmarked && current.status === "NEXT GEM" 
                    ? "border-amber-500 text-amber-500 bg-amber-500/20" 
                    : "border-white/10 text-white/20 bg-white/5"
                }`}
              >
                <motion.div
                  animate={isBookmarked && current.status === "NEXT GEM" ? { rotate: [0, -20, 20, 0] } : {}}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Swipe Hint */}
        {direction === 1 && (
          <motion.div
            animate={{ x: [-10, 10, -10], opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[7px] text-muted-foreground font-bold uppercase tracking-widest whitespace-nowrap"
          >
            ← Swipe Noise
          </motion.div>
        )}
      </div>
    </div>
  )
}

function ProjectVisual() {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-center gap-6 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(36,121,255,0.2)_0%,transparent_70%)]" />
      </div>
      
      <div className="space-y-4 relative z-10">
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Your Project</span>
            <motion.span 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs font-mono text-white font-bold"
            >
              TOP 1%
            </motion.span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full relative shadow-[0_0_15px_rgba(36,121,255,0.5)]"
            >
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        <div className="space-y-4 pt-2 border-t border-white/5">
          {[
            { label: "Competitor A", width: "45%", color: "bg-white/20" },
            { label: "Competitor B", width: "32%", color: "bg-white/10" }
          ].map((comp, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex justify-between items-center opacity-50">
                <span className="text-[8px] font-bold uppercase tracking-wider">{comp.label}</span>
                <span className="text-[10px] font-mono">{comp.width}</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: comp.width }}
                  transition={{ duration: 2, delay: 0.5 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full ${comp.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AudienceSection() {
  return (
    <section className="relative py-32 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            User Categories
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Turn Social Noise into <span className="text-glow">Actionable Alpha</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Sorsa turns social noise into actionable intelligence for every player in the crypto economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {audiences.map((audience, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className={`group relative flex flex-col h-full glass rounded-3xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 ${
                i < 2 ? 'md:col-span-3' : 'md:col-span-2'
              }`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10" />

              {/* Visual Container */}
              <div className={`h-48 w-full bg-gradient-to-br ${audience.color} border-b border-white/5 relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                <motion.div 
                  className="relative z-10 w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {audience.visual}
                </motion.div>
                
                {/* Decorative scanning line on hover */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-px bg-primary/20 z-20"
                  initial={{ top: "-10%" }}
                  whileHover={{ top: "110%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <a 
                    href={audience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-transparent border border-white/10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_4px_12px_rgba(36,121,255,0.3)] hover:scale-105 transition-all duration-300 whitespace-nowrap"
                  >
                    It's me
                    <motion.span
                      className="ml-1.5"
                      initial={{ x: 0 }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
