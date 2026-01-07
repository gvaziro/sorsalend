"use client"

import { TrendingUp, Users, Building2, Star, ChevronRight, Zap } from "lucide-react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { useState, useEffect } from "react"

const trendingAccounts = [
  { name: "Solana", handle: "@solana", score: 3237, change: 12, avatar: "S" },
  { name: "CZ", handle: "@cz_binance", score: 4105, change: -3, avatar: "C" },
  { name: "Vitalik", handle: "@VitalikButerin", score: 4892, change: 8, avatar: "V" },
]

const vcActivityPool = [
  { id: 1, fund: "a16z crypto", action: "followed", target: "LayerZero", time: "2m ago" },
  { id: 2, fund: "Paradigm", action: "liked", target: "Celestia thread", time: "5m ago" },
  { id: 3, fund: "Multicoin", action: "followed", target: "Monad Labs", time: "12m ago" },
  { id: 4, fund: "Dragonfly", action: "followed", target: "Berachain", time: "15m ago" },
  { id: 5, fund: "Coinbase Ventures", action: "invested", target: "Base Ecosystem", time: "22m ago" },
  { id: 6, fund: "Polychain", action: "followed", target: "EigenLayer", time: "30m ago" },
  { id: 7, fund: "Binance Labs", action: "liked", target: "PancakeSwap", time: "45m ago" },
]

const socialFeedPool = [
  { id: 1, user: "Crypto KOL", text: "This is next gem, 100x potential 🚀", type: "kol" },
  { id: 2, user: "VC Insider", text: "New round for @AI_Agent closed. Massive.", type: "vc" },
  { id: 3, user: "Whale Alert", text: "1,000,000 $SOL moved to cold wallet", type: "whale" },
  { id: 4, user: "Dev Alpha", text: "Mainnet upgrade is finally live! Check it out.", type: "dev" },
  { id: 5, user: "Alpha Hunter", text: "Found a new early stage project on Sorsa.", type: "kol" },
]

export function FloatingCard({ children, className = "", delay = 0 }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 })
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distanceX = event.clientX - centerX
    const distanceY = event.clientY - centerY

    // Repel from cursor
    // The larger the area, the more "ambient" it feels
    x.set(distanceX * -0.2)
    y.set(distanceY * -0.2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="relative group p-12 -m-12 pointer-events-auto" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay
            },
            rotate: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay
            }
          }}
          className={`glass rounded-xl p-5 border border-border/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl cursor-default ${className}`}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export function TrendingCard() {
  return (
    <div className="w-[280px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground/90">Trending</span>
        </div>
        <button className="text-[10px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          View all <ChevronRight className="h-2.5 w-2.5" />
        </button>
      </div>
      <div className="space-y-3">
        {trendingAccounts.map((account, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/80 to-primary/80 flex items-center justify-center text-[10px] font-bold text-white">
                {account.avatar}
              </div>
              <div>
                <div className="text-[13px] font-medium text-foreground">{account.name}</div>
                <div className="text-[10px] text-muted-foreground">{account.handle}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[13px] font-semibold text-primary">{account.score}</div>
              <div className={`text-[10px] ${account.change > 0 ? "text-green-500" : "text-red-500"}`}>
                {account.change > 0 ? "+" : ""}{account.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ScoreCard() {
  return (
    <div className="w-[320px]">
      <div className="text-sm font-bold text-foreground/80 mb-6 px-1">Score</div>
      
      <div className="flex items-center gap-4 mb-10 px-1">
        <div className="flex items-start gap-1">
          <span className="text-5xl font-bold text-white tracking-tighter">3835</span>
          <div className="flex items-center gap-0.5 mt-2 text-primary">
            <span className="text-[13px] font-bold">0</span>
            <Zap className="h-3.5 w-3.5 fill-current" />
          </div>
        </div>
        
        <div className="ml-auto px-4 py-1.5 bg-[#0a1a16] border border-[#00ff9d]/10 rounded-xl">
          <span className="text-[13px] font-bold text-[#00ff9d] tracking-tight">Tier 5. Supreme</span>
        </div>
      </div>

      <div className="relative mt-4 px-2">
        <div className="relative h-2 w-full bg-white/5 rounded-full overflow-visible">
          <div 
            className="absolute left-0 top-0 h-full rounded-full" 
            style={{ 
              width: '85%',
              background: 'linear-gradient(90deg, #e9885f 0%, #ff5500 20%, #2479ff 40%, #2babed 60%, #2ddeff 80%)'
            }} 
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-[#46ffb2] rounded-full border-[4px] border-[#020408] shadow-[0_0_20px_rgba(70,255,178,0.4)] z-10"
            style={{ left: '85%', marginLeft: '-14px' }}
          />
        </div>

        <div className="relative flex justify-between mt-4 px-1">
          {[100, 500, 1000, 1500, 2000].map((val) => (
            <div key={val} className="flex flex-col items-center">
              <div className="w-[1px] h-2 bg-white/20 mb-2" />
              <span className="text-[11px] font-bold text-white/20">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function VCActivityCard() {
  const [activities, setActivities] = useState(vcActivityPool.slice(0, 3))
  const [nextIndex, setNextIndex] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev) => {
        const nextActivity = vcActivityPool[nextIndex]
        return [nextActivity, ...prev.slice(0, 2)]
      })
      setNextIndex((prev) => (prev + 1) % vcActivityPool.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [nextIndex])

  return (
    <div className="w-[300px]">
      <div className="flex items-center gap-2 mb-4 px-1">
        <Building2 className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-foreground/90 font-bold uppercase tracking-wider text-[11px]">VC Activity</span>
      </div>
      <div className="relative h-[160px] overflow-hidden">
        <div className="space-y-3 px-1">
          <AnimatePresence mode="popLayout" initial={false}>
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                layout
                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20, filter: "blur(8px)", transition: { duration: 0.4 } }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  filter: { duration: 0.5 }
                }}
                className="flex items-start gap-3 text-[13px]"
              >
                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="h-3 w-3 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-foreground leading-tight">
                    <span className="font-semibold">{activity.fund}</span>
                    <span className="text-muted-foreground/60 text-[12px]"> {activity.action} </span>
                    <span className="text-primary font-medium">{activity.target}</span>
                  </p>
                  <p className="text-[10px] text-muted-foreground/40 mt-1 font-medium">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export function SocialFeedCard() {
  const [items, setItems] = useState(socialFeedPool.slice(0, 2))
  const [nextIndex, setNextIndex] = useState(2)

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const nextItem = socialFeedPool[nextIndex]
        return [nextItem, ...prev.slice(0, 1)]
      })
      setNextIndex((prev) => (prev + 1) % socialFeedPool.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [nextIndex])

  return (
    <div className="w-[260px] pointer-events-auto">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-tighter text-muted-foreground/80">Live Social Stream</span>
      </div>
      <div className="relative h-[100px]">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ 
                layout: { type: "spring", stiffness: 400, damping: 30 },
                opacity: { duration: 0.4 },
                y: { duration: 0.4 }
              }}
              className="mb-3 last:mb-0"
            >
              <div className="flex flex-col gap-0.5">
                <span className={`text-[10px] font-bold ${
                  item.type === 'vc' ? 'text-primary' : 
                  item.type === 'kol' ? 'text-blue-400' : 
                  'text-amber-400'
                }`}>
                  {item.user}
                </span>
                <p className="text-[11px] text-foreground/90 leading-tight line-clamp-2">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
