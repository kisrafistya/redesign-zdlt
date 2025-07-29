import Link from 'next/link'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { OptimizedImage } from './optimized-image'
import { APP_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
  variant?: 'default' | 'minimal'
}

export function Footer({ className, variant = 'default' }: FooterProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyContract = async () => {
    try {
      await navigator.clipboard.writeText(APP_CONFIG.contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy contract address:', err)
    }
  }

  if (variant === 'minimal') {
    return (
      <footer className={cn('py-6 sm:py-8 px-4 sm:px-6 border-t border-border/30', className)}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 {APP_CONFIG.name}. {APP_CONFIG.tagline}.
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className={cn('py-12 sm:py-16 px-4 sm:px-6 border-t border-border/30', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between">
          {/* Logo Section */}
          <div className="hidden md:flex flex-col items-center lg:items-start space-y-4 ">
            <Link href="/">
              <div className="relative">
                <OptimizedImage
                  src="/zirolight.svg"
                  alt={APP_CONFIG.name}
                  width={120}
                  height={120}
                  className="dark:hidden w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                />
                <OptimizedImage
                  src="/zirodark.svg"
                  alt={APP_CONFIG.name}
                  width={120}
                  height={120}
                  className="hidden dark:block w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                />
              </div>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center justify-center lg:items-start space-y-4">
            <h3 className="block md:hidden text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-teal dark:text-white hover:text-brand-emerald dark:hover:text-brand-emerald transition-colors duration-300"
              >
                X (Twitter)
              </a>
              <span className="hidden sm:inline text-brand-teal dark:text-white">|</span>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-teal dark:text-white hover:text-brand-emerald dark:hover:text-brand-emerald transition-colors duration-300"
              >
                Discord
              </a>
              <span className="hidden sm:inline text-brand-teal dark:text-white">|</span>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-teal dark:text-white hover:text-brand-emerald dark:hover:text-brand-emerald transition-colors duration-300"
              >
                Telegram
              </a>
            </div>
          </div>

          {/* Contract Address */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto max-w-full">
            <span className="text-xs font-medium text-brand-emerald dark:text-white">Contract Address</span>
            <div className="flex items-center border border-border/50 dark:border-brand-teal rounded-lg px-3 py-2 bg-muted/50 dark:bg-transparent w-full sm:w-auto overflow-hidden">
              <code className="text-xs text-brand-emerald dark:text-white font-mono truncate flex-1 sm:flex-none">
                {APP_CONFIG.contractAddress}
              </code>
            </div>
            <button
              onClick={handleCopyContract}
              className={cn(
                'flex items-center space-x-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap',
                copied
                  ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                  : 'text-brand-teal dark:text-white hover:text-brand-emerald dark:hover:text-brand-emerald bg-muted hover:bg-muted/80 dark:bg-transparent dark:hover:bg-white/5',
              )}
              title={copied ? 'Copied!' : 'Copy contract address'}
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-brand-emerald dark:text-white">
            &copy; 2025 {APP_CONFIG.name}. {APP_CONFIG.tagline}.
          </p>
        </div>
      </div>
    </footer>
  )
}
