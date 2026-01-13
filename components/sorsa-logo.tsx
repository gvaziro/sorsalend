export function SorsaLogo({ className = "" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Sorsa Logo" 
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
