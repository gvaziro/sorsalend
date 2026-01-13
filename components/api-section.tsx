import Link from "next/link"
import { Code2, ArrowUpRight } from "lucide-react"

export function APISection() {
  return (
    <section id="api" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Code block */}
          <div className="order-2 lg:order-1">
            <div className="glass rounded-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">api-example.ts</span>
              </div>

              {/* Code */}
              <pre className="p-4 sm:p-6 text-[10px] sm:text-sm overflow-x-auto font-mono whitespace-pre-wrap sm:whitespace-pre break-all sm:break-normal">
                <code>
                  <span className="text-[#c792ea]">const</span> <span className="text-foreground">url</span>{" "}
                  <span className="text-[#c792ea]">=</span> <span className="text-[#c3e88d]">{`'https://api.sorsa.io/v2/score/{user_handle}'`}</span>;
                  {"\n"}
                  <span className="text-[#c792ea]">const</span> <span className="text-foreground">options</span>{" "}
                  <span className="text-[#c792ea]">=</span> {`{\n`}
                  {"  "}
                  <span className="text-foreground">method</span>: <span className="text-[#c3e88d]">{`'GET'`}</span>,
                  {"\n"}
                  {"  "}
                  <span className="text-foreground">headers</span>: {`{`}
                  <span className="text-foreground">Accept</span>: <span className="text-[#c3e88d]">{`'application/json'`}</span>,{" "}
                  <span className="text-foreground">ApiKey</span>: <span className="text-[#c3e88d]">{`'5cea4088-e8ae-49e6-beec-481f9bab6925'`}</span>
                  {`}\n`}
                  {`};\n\n`}
                  <span className="text-[#c792ea]">try</span> {`{\n`}
                  {"  "}
                  <span className="text-[#c792ea]">const</span> <span className="text-foreground">response</span>{" "}
                  <span className="text-[#c792ea]">=</span> <span className="text-[#c792ea]">await</span>{" "}
                  <span className="text-[#82aaff]">fetch</span>(url, options);
                  {"\n"}
                  {"  "}
                  <span className="text-[#c792ea]">const</span> <span className="text-foreground">data</span>{" "}
                  <span className="text-[#c792ea]">=</span> <span className="text-[#c792ea]">await</span>{" "}
                  <span className="text-foreground">response</span>.<span className="text-[#82aaff]">json</span>();
                  {"\n"}
                  {"  "}
                  <span className="text-[#82aaff]">console</span>.<span className="text-[#82aaff]">log</span>(data);
                  {"\n"}
                  {`} `}
                  <span className="text-[#c792ea]">catch</span> (error) {`{\n`}
                  {"  "}
                  <span className="text-[#82aaff]">console</span>.<span className="text-[#82aaff]">error</span>(error);
                  {"\n"}
                  {`}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-medium glass rounded-full">
              <Code2 className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">Developer API</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Build with <span className="text-glow">Sorsa API</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Full programmatic access to all Sorsa data. Perfect for trading bots, research platforms, and custom
              analytics dashboards.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "3x cheaper than official Twitter API",
                "Flexible pricing — pick only what you need",
                "Developer-friendly documentation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <Link 
              href="https://sorsa.io/docs.html"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all glow w-fit"
            >
              View API Details
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
