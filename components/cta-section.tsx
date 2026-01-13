import { ArrowUpRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative glass rounded-3xl p-8 sm:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.12)_0%,transparent_60%)]" />

          <div className="relative">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to see the <span className="text-glow">real influence</span>?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10">
              Join 500+ crypto teams using Sorsa to make smarter decisions based on real data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
              <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all glow">
                Start for free
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground glass rounded-full glass-hover">
                Schedule demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
