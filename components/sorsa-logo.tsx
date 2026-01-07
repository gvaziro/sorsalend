export function SorsaLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2479ff" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="url(#logoGradient)" strokeWidth="2" fill="none" />
      <circle cx="28" cy="12" r="9" stroke="url(#logoGradient)" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="3.5" fill="url(#logoGradient)" />
      <circle cx="28" cy="12" r="3.5" fill="url(#logoGradient)" />
    </svg>
  )
}
