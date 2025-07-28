import Link from 'next/link'
import { OptimizedImage } from './optimized-image'
import { APP_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
  variant?: 'default' | 'minimal'
}

export function Footer({ className, variant = 'default' }: FooterProps) {
  const handleCopyContract = async () => {
    try {
      await navigator.clipboard.writeText(APP_CONFIG.contractAddress)
      // Could add a toast notification here
    } catch (err) {
      console.error('Failed to copy contract address:', err)
    }
  }

  if (variant === 'minimal') {
    return (
      <footer className={cn('py-8 px-6 border-t border-border/30', className)}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2025 {APP_CONFIG.name}. {APP_CONFIG.tagline}.
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className={cn('py-16 px-6 border-t border-border/30', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative w-32 h-32">
                <OptimizedImage
                  src="/zirolight.svg"
                  alt={APP_CONFIG.name}
                  width={100}
                  height={200}
                  className="dark:hidden w-32 h-32"
                />
                <OptimizedImage
                  src="/zirodark.svg"
                  alt={APP_CONFIG.name}
                  width={100}
                  height={200}
                  className="hidden dark:block w-32 h-32"
                />
              </div>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300"
            >
              X
            </a>
            <span className="text-brand-teal dark:text-white">|</span>
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300"
            >
              Discord
            </a>
            <span className="text-brand-teal dark:text-white">|</span>
            <a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300"
            >
              Telegram
            </a>
          </div>

          {/* Contract Address */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-brand-emerald dark:text-white font-light">Contract Address:</span>
            <div className="flex items-center space-x-2 border border-border/50 dark:border-brand-teal rounded-lg px-3 py-1">
              <code className="text-xs text-brand-emerald dark:text-white font-mono">{APP_CONFIG.contractAddress}</code>
              <button
                onClick={handleCopyContract}
                className="text-brand-teal dark:text-white hover:text-primary transition-colors duration-300 text-xs"
                title="Copy contract address"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-brand-emerald dark:text-white">
          <p>
            &copy; 2025 {APP_CONFIG.name}. {APP_CONFIG.tagline}.
          </p>
        </div>
      </div>
    </footer>
  )
}
