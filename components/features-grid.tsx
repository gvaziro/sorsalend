"use client"

import { motion } from "framer-motion"
import { BarChart3, Bot, Building2, Sparkles, Search, Code2, ArrowUpRight, Cpu, Network, ShieldCheck, Zap } from "lucide-react"

const features = [
  {
    title: "Influence Scoring",
    description: "Proprietary algorithm measuring real influence based on engagement quality and network strength.",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400",
    visual: <InfluenceVisual />
  },
  {
    title: "Bot Detection",
    description: "Advanced AI identifies fake followers and bot activity to show you the authentic picture.",
    color: "from-red-500/20 to-red-600/5",
    accent: "text-red-400",
    visual: <BotVisual />
  },
  {
    title: "VC Tracking",
    description: "Track venture capital funds and see what projects they follow before anyone else.",
    color: "from-primary/20 to-primary/5",
    accent: "text-primary",
    visual: <VCTrackingVisual />
  },
  {
    title: "Early Projects",
    description: "Daily updated feed of emerging crypto projects before they hit mainstream awareness.",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "text-emerald-400",
    visual: <EarlyProjectVisual />
  },
  {
    title: "Deep Research",
    description: "Comprehensive analysis tools for any crypto account including connections and activity.",
    color: "from-primary/20 to-primary/5",
    accent: "text-primary",
    visual: <DeepResearchVisual />
  },
  {
    title: "Full API Access",
    description: "Complete programmatic access to build trading systems and custom analytics.",
    color: "from-amber-500/20 to-amber-600/5",
    accent: "text-amber-400",
    visual: <APIVisual />
  },
]

function InfluenceVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="relative w-24 h-24"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500/40"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 60}deg) translate(40px)`
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 rounded-full glass border-blue-500/30 flex items-center justify-center"
          >
            <Network className="w-6 h-6 text-blue-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function BotVisual() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4 relative overflow-hidden">
      <div className="flex gap-2">
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            animate={{ 
              opacity: i === 2 ? [1, 0.2, 1] : 1,
              scale: i === 2 ? [1, 0.9, 1] : 1
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
              i === 2 ? 'border-red-500/50 bg-red-500/10' : 'border-white/10 bg-white/5'
            }`}
          >
            <Bot className={`w-4 h-4 ${i === 2 ? 'text-red-400' : 'text-muted-foreground'}`} />
          </motion.div>
        ))}
      </div>
      <motion.div 
        animate={{ width: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="h-0.5 bg-red-500/50 relative shadow-[0_0_10px_rgba(239,68,68,0.5)]"
      />
      <span className="text-[8px] font-bold text-red-400 tracking-widest uppercase">Scanning for bots...</span>
    </div>
  )
}

function VCTrackingVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2 p-4 relative overflow-hidden">
      {[1, 2].map(i => (
        <motion.div
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          className="flex items-center gap-3 p-2 glass border-primary/10 rounded-xl"
        >
          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
            <Building2 className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="h-1 w-12 bg-primary/40 rounded" />
            <div className="h-1 w-8 bg-white/10 rounded" />
          </div>
          <ShieldCheck className="w-3 h-3 text-primary" />
        </motion.div>
      ))}
    </div>
  )
}

function EarlyProjectVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute w-20 h-20 rounded-full border border-emerald-500/30"
      />
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center"
        >
          <Sparkles className="w-6 h-6 text-emerald-400" />
        </motion.div>
      </div>
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-6 right-8 text-[8px] font-bold text-emerald-400"
      >
        NEW ALPHA FOUND
      </motion.div>
    </div>
  )
}

function DeepResearchVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2 p-4 relative overflow-hidden">
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map(i => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="h-10 glass border-primary/10 rounded-lg flex items-center justify-center p-2"
          >
            <BarChart3 className="w-4 h-4 text-primary opacity-50" />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Search className="w-8 h-8 text-primary opacity-20" />
      </div>
    </div>
  )
}

function APIVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-4 gap-2 relative overflow-hidden bg-black/20">
      <div className="font-mono text-[8px] space-y-1">
        <motion.p 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-amber-400"
        >
          GET /v1/alpha/early
        </motion.p>
        <p className="text-white/40">{"{"}</p>
        <p className="text-white/60 pl-2">"id": "new_gem",</p>
        <p className="text-white/60 pl-2">"score": 98.4</p>
        <p className="text-white/40">{"}"}</p>
      </div>
      <div className="absolute bottom-2 right-4">
        <Code2 className="w-10 h-10 text-amber-400 opacity-10" />
      </div>
    </div>
  )
}

export function FeaturesGrid() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Everything you need for <span className="text-glow">Crypto Intelligence</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A complete suite of tools to analyze, track, and discover opportunities in the crypto social layer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col glass rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500"
            >
              {/* Visual Preview */}
              <div className={`h-44 w-full bg-gradient-to-br ${feature.color} border-b border-white/5`}>
                {feature.visual}
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {feature.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
