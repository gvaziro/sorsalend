import Link from "next/link"
import { Building2, ArrowUpRight } from "lucide-react"

const vcData = [
  { name: "Art of The CMS", handle: "@cmsholdings", score: 2352, tier: "Supreme", followers: "171K", vcs: 495 },
  { name: "Inversion", handle: "@inversion_cap", score: 1017, tier: "Significant", followers: "14K", vcs: 123 },
  { name: "Asgard Finance", handle: "@asgardfi", score: 363, tier: "Noted", followers: "3K", vcs: 22 },
  { name: "Markets, Inc.", handle: "@marketsincorp", score: 327, tier: "Noted", followers: "361", vcs: 12 },
]

function getTierStyle(tier: string) {
  switch (tier) {
    case "Supreme":
      return "bg-primary/15 text-primary"
    case "Significant":
      return "bg-green-500/15 text-green-500"
    default:
      return "bg-amber-500/15 text-amber-500"
  }
}

function getScoreWidth(score: number) {
  return Math.min((score / 2500) * 100, 100)
}

export function VCTrackingSection() {
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium glass rounded-full">
              <Building2 className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">VC & Fund Tracking</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Follow the <span className="text-glow">smart money</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Track venture capital funds and their teams on crypto Twitter. Identify what projects they follow and spot
              trends before they happen.
            </p>

            <ul className="space-y-4 mb-10">
              {["Real-time fund activity monitoring", "Team member engagement tracking", "Early project discovery"].map(
                (item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ),
              )}
            </ul>

            <Link 
              href="https://sorsa.io/vc-trends"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
            >
              Explore VC Feed
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Table */}
          <div className="glass rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h3 className="font-semibold">VC Feed</h3>
              <div className="flex gap-1 p-1 glass rounded-lg">
                {["1d", "7d", "14d", "30d"].map((period, i) => (
                  <button
                    key={period}
                    className={`px-3 py-1 text-xs rounded-md transition-colors ${
                      i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border">
              {vcData.map((vc, index) => (
                <div key={index} className="p-5 hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary/60 flex items-center justify-center text-sm font-bold">
                        {vc.name[0]}
                      </div>
                      <div>
                        <div className="font-medium">{vc.name}</div>
                        <div className="text-xs text-muted-foreground">{vc.handle}</div>
                      </div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full ${getTierStyle(vc.tier)}`}>{vc.tier}</span>
                  </div>

                  <div className="flex items-center gap-6 text-xs text-muted-foreground mb-3">
                    <span>
                      Score <span className="text-foreground font-medium ml-1">{vc.score}</span>
                    </span>
                    <span>
                      Followers <span className="text-foreground font-medium ml-1">{vc.followers}</span>
                    </span>
                    <span>
                      VCs <span className="text-foreground font-medium ml-1">{vc.vcs}</span>
                    </span>
                  </div>

                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full score-bar rounded-full transition-all duration-700"
                      style={{ width: `${getScoreWidth(vc.score)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
