import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Color Palette - Main Colors
        brand: {
          // Emerald Green (PANTONE 7719 CP)
          emerald: '#006663',
          // Teal Blue (PANTONE 3282 CP)
          teal: '#009b88',
          // Pastel Turquoise (PANTONE 7472C)
          turquoise: '#72b7b1',
          // Forest Green (PANTONE 5324C) - appears to be a pink in image
          forest: '#f9cfe8',
          // Navy Blue (PANTONE 2756C)
          navy: '#262262',
        },

        // Monochrome Palette
        mono: {
          black: '#000000',
          titanium: '#414042',
          gray: '#6d6e71',
          silver: '#c1c1c1',
          white: '#ffffff',
        },

        // Extended brand color variations
        primary: {
          50: '#f0fffe',
          100: '#ccfffe',
          200: '#99fffc',
          300: '#5efffb',
          400: '#1de9e4',
          500: '#006663', // Main emerald green
          600: '#005854',
          700: '#004a47',
          800: '#003c3a',
          900: '#002e2d',
          950: '#001f1e',
        },

        // Teal variations
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eedd8',
          400: '#2dd4bf',
          500: '#009b88', // Main teal blue
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#14403a',
          950: '#042f2e',
        },

        // Background and text using existing CSS variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },

      // Enhanced spacing scale for consistent design system
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // Typography scale extensions
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },

      // Custom box shadows for depth
      boxShadow: {
        brand: '0 4px 14px 0 rgba(0, 102, 99, 0.1)',
        'brand-lg': '0 10px 25px 0 rgba(0, 102, 99, 0.15)',
        soft: '0 2px 8px 0 rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },

      // Custom gradients
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #006663 0%, #009b88 100%)',
        'brand-gradient-radial': 'radial-gradient(circle, #006663 0%, #009b88 100%)',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        accent: ['var(--font-accent)', 'sans-serif'],
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
} satisfies Config

export default config
