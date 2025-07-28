import { Variants } from 'framer-motion'
import { ANIMATION_DURATIONS } from './constants'

// Common animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: 'easeOut',
    },
  },
}

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: 'easeOut',
    },
  },
}

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: 'easeOut',
    },
  },
}

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATIONS.slow,
      ease: 'easeOut',
    },
  },
}

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: 'easeOut',
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: 'easeOut',
    },
  },
}

// Page transition variants
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: 'easeIn',
    },
  },
}

// Hero section animation
export const heroAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.entrance,
      ease: 'easeOut',
    },
  },
}

// Card hover animation
export const cardHover: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: 'easeOut',
    },
  },
}

// Button animation
export const buttonTap: Variants = {
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
}

// Utility function to create custom stagger animations
export const createStaggerAnimation = (staggerDelay: number = 0.1, childrenDelay: number = 0.2): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childrenDelay,
    },
  },
})

// Utility function for delayed animations
export const createDelayedAnimation = (delay: number, direction: 'up' | 'down' | 'left' | 'right' = 'up'): Variants => {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: ANIMATION_DURATIONS.slow,
        delay,
        ease: 'easeOut',
      },
    },
  }
}

// Loading animation
export const loadingSpinner: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// Notification animations
export const slideInFromTop: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.normal,
      ease: 'easeOut',
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATIONS.fast,
      ease: 'easeIn',
    },
  },
}
