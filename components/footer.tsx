import Link from "next/link"
import { SorsaLogo } from "./sorsa-logo"

const footerLinks = {
  Product: ["Features", "Pricing", "API", "Docs"],
  Company: ["About", "Blog", "Careers"],
  Legal: ["Privacy", "Terms"],
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <SorsaLogo className="h-5 w-8" />
              <span className="text-lg font-semibold tracking-tight">Sorsa</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crypto Twitter intelligence platform for traders, researchers, and funds.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-medium mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sorsa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
