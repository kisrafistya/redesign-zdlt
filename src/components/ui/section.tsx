import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ANIMATION_DURATIONS } from '@/lib/constants'

interface SectionProps {
  children: React.ReactNode
  className?: string
  animated?: boolean
  delay?: number
  id?: string
  background?: 'transparent' | 'card' | 'gradient'
}

export function Section({
  children,
  className,
  animated = true,
  delay = 0,
  id,
  background = 'transparent',
  ...props
}: SectionProps) {
  const backgroundStyles = {
    transparent: '',
    card: 'bg-card/50 border border-border/30',
    gradient: 'bg-gradient-to-br from-background via-background to-muted/10',
  }

  const content = (
    <section id={id} className={cn('py-16 px-6 relative', backgroundStyles[background], className)} {...props}>
      {children}
    </section>
  )

  if (!animated) {
    return content
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: ANIMATION_DURATIONS.slow,
        delay,
        ease: 'easeOut',
      }}
    >
      {content}
    </motion.div>
  )
}

// Container component for consistent max-width and centering
export function SectionContainer({
  children,
  className,
  size = 'default',
}: {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'default' | 'lg' | 'xl'
}) {
  const sizeStyles = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    xl: 'max-w-9xl',
  }

  return <div className={cn(sizeStyles[size], 'mx-auto', className)}>{children}</div>
}

// Header component for sections
export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  centered = true,
}: {
  title: string
  subtitle?: string
  description?: string
  className?: string
  centered?: boolean
}) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      {subtitle && (
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm tracking-wide font-semibold">
            {subtitle}
          </span>
        </div>
      )}

      <h2 className="text-4xl md:text-5xl font-extralight leading-tight mb-4">{title}</h2>

      {description && <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{description}</p>}

      {centered && (
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
      )}
    </div>
  )
}
