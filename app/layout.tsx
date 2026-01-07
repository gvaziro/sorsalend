import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Sorsa - Crypto Twitter Intelligence",
  description:
    "Track influencers, detect bots, analyze VC activity, and discover early crypto projects. The intelligence platform for smart money.",
  generator: "v0.app",
  keywords: ["crypto", "twitter", "analytics", "influence", "bot detection", "VC tracking", "API"],
  authors: [{ name: "Sorsa" }],
  openGraph: {
    title: "Sorsa - Crypto Twitter Intelligence",
    description: "Track influencers, detect bots, analyze VC activity, and discover early crypto projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorsa - Crypto Twitter Intelligence",
    description: "Track influencers, detect bots, analyze VC activity, and discover early crypto projects.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#020408",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
