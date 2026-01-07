"use client"

import { useState } from "react"
import { Search, TrendingUp, Users, Building2, Star, ChevronRight } from "lucide-react"

const trendingAccounts = [
  { name: "Solana", handle: "@solana", score: 3237, change: 12, avatar: "S" },
  { name: "CZ", handle: "@cz_binance", score: 4105, change: -3, avatar: "C" },
  { name: "Vitalik", handle: "@VitalikButerin", score: 4892, change: 8, avatar: "V" },
]

const vcActivity = [
  { fund: "a16z crypto", action: "followed", target: "LayerZero", time: "2m ago" },
  { fund: "Paradigm", action: "liked", target: "Celestia thread", time: "5m ago" },
  { fund: "Multicoin", action: "followed", target: "Monad Labs", time: "12m ago" },
]

export function LiveDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-3xl blur-3xl" />

      <div className="relative glass rounded-2xl overflow-hidden border border-border">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="max-w-md mx-auto flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-lg text-xs text-muted-foreground">
              <Search className="h-3 w-3" />
              <span>app.sorsa.io</span>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Search bar */}
          <div className="flex items-center gap-3 max-w-xl mb-8">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 glass rounded-xl">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search @handle or paste link..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <button className="px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>

          {/* Dashboard grid */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Trending accounts */}
            <div className="glass rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Trending</span>
                </div>
                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  View all <ChevronRight className="h-3 w-3" />
                </button>
              </div>
              <div className="space-y-3">
                {trendingAccounts.map((account, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xs font-bold">
                        {account.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{account.name}</div>
                        <div className="text-xs text-muted-foreground">{account.handle}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary">{account.score}</div>
                      <div className={`text-xs ${account.change > 0 ? "text-green-500" : "text-red-500"}`}>
                        {account.change > 0 ? "+" : ""}
                        {account.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score card */}
            <div className="glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Account Score</span>
              </div>
              <div className="text-center py-4">
                <div className="text-5xl font-bold text-glow mb-2">2352</div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  Tier 5. Supreme
                </div>
              </div>
              <div className="mt-4">
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[85%] score-bar rounded-full" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>0</span>
                  <span>2500</span>
                </div>
              </div>
            </div>

            {/* VC Activity */}
            <div className="glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">VC Activity</span>
              </div>
              <div className="space-y-3">
                {vcActivity.map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground">
                        <span className="font-medium">{activity.fund}</span>
                        <span className="text-muted-foreground"> {activity.action} </span>
                        <span className="text-primary">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
