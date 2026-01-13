"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SorsaLogo } from "./sorsa-logo"
import { ArrowUpRight, Search } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (searchQuery.trim()) {
      const handle = searchQuery.trim().replace(/^@/, "")
      window.location.href = `https://sorsa.io/profile/${handle}`
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      setShowSearch(scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <SorsaLogo className="h-5 w-8 transition-transform group-hover:scale-105" />
            <span className="text-lg font-semibold tracking-tight">Sorsa</span>
          </Link>

          {/* Desktop Nav / Search Replacement */}
          <div className="hidden md:flex flex-1 items-center justify-center max-w-xl">
            <AnimatePresence mode="wait">
              {!showSearch ? (
                <motion.nav 
                  key="nav"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1"
                >
                  {["Features", "API", "Pricing"].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                    >
                      {item}
                    </Link>
                  ))}
                </motion.nav>
              ) : (
                <motion.div 
                  key="search"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <form onSubmit={handleSearch} className="relative group">
                    <div className="relative flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                      <Search className="w-4 h-4 text-primary/70" />
                      <input 
                        type="text" 
                        placeholder="Search @handle..."
                        className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none font-medium"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button 
                        type="submit"
                        className="hidden lg:flex items-center justify-center w-7 h-7 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors border border-primary/20"
                      >
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sign in
            </button>
            <button className="group flex items-center gap-1.5 px-5 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all glow">
              Get started
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile CTA */}
          <button className="md:hidden group flex items-center gap-1.5 px-5 py-2 text-sm font-bold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all glow shrink-0">
            Get started
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  )
}
