import Link from "next/link"
import { SorsaLogo } from "./sorsa-logo"

const footerLinks = [
  {
    category: "Product",
    links: [
      { name: "App", href: "https://app.sorsa.io/" },
      { name: "API", href: "https://sorsa.io/api" },
      { name: "Docs", href: "https://api.sorsa.io/v2/"},
    ],
  },
  
  {
    category: "Legal",
    links: [
      { name: "Privacy", href: "https://sorsa.io/privacy-policy" },
      { name: "Terms", href: "https://sorsa.io/terms-of-service" },
    ],
  },
]

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
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-12 gap-y-10 sm:gap-16">
            {footerLinks.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-medium mb-4">{group.category}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
                href="https://discord.com/invite/uwAefKCj7X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground/50 text-center sm:text-left leading-relaxed max-w-2xl">
            X and the X logo are trademarks of X Corp. Sorsa is not affiliated with X Corp.
          </div>
        </div>
      </div>
    </footer>
  )
}
