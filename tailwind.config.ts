import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
// import tailwindcssForms from '@tailwindcss/forms'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        deepest: 'hsl(var(--background-deepest) / <alpha-value>)',
        surface: 'hsl(var(--background-surface) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
          elevated: 'hsl(var(--card-elevated) / <alpha-value>)',
        },
        panel: 'hsl(var(--panel) / <alpha-value>)',
        editor: 'hsl(var(--editor-bg) / <alpha-value>)',
        pill: {
          DEFAULT: 'hsl(var(--pill-bg) / <alpha-value>)',
          hover: 'hsl(var(--pill-bg-hover) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
          to: 'hsl(var(--primary-to) / <alpha-value>)',
          hover: 'hsl(var(--primary-hover) / <alpha-value>)',
          active: 'hsl(var(--primary-active) / <alpha-value>)',
        },
        cta: {
          to: 'hsl(var(--cta-to) / <alpha-value>)',
          'to-hover': 'hsl(var(--cta-to-hover) / <alpha-value>)',
          'to-active': 'hsl(var(--cta-to-active) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        link: 'hsl(var(--link) / <alpha-value>)',
        purple: 'hsl(var(--purple) / <alpha-value>)',
        'accent-light': 'hsl(var(--accent-light) / <alpha-value>)',
        soft: 'hsl(var(--soft) / <alpha-value>)',
        ware: 'hsl(var(--ware) / <alpha-value>)',
        'name-end': 'hsl(var(--name-end) / <alpha-value>)',
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        subtle: 'hsl(var(--subtle) / <alpha-value>)',
        faint: 'hsl(var(--faint) / <alpha-value>)',
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        'outline-border': 'hsl(var(--outline-border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'icon-flash': {
          '0%, 100%': { filter: 'drop-shadow(0 0 0px currentColor)' },
          '40%': { filter: 'drop-shadow(0 0 6px currentColor)' },
        },
        'dot-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'flow-down': {
          '0%': { transform: 'translateY(-4px)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateY(calc(100% + 4px))', opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        breathe: 'breathe 8s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        reveal: 'reveal 600ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'icon-flash': 'icon-flash 900ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'dot-pulse': 'dot-pulse 3.5s ease-in-out infinite',
        'flow-down': 'flow-down 1.6s linear infinite',
      },
      transitionTimingFunction: {
        signature: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, hsl(var(--primary-hover)) 0%, hsl(var(--primary-to)) 100%)',
        'cta-gradient':
          'linear-gradient(135deg, hsl(var(--primary-hover)) 0%, hsl(var(--cta-to-hover)) 100%)',
        'cta-gradient-hover':
          'linear-gradient(135deg, hsl(var(--primary-active)) 0%, hsl(var(--cta-to-active)) 100%)',
        'stat-gradient': 'linear-gradient(90deg, hsl(var(--foreground)) 0%, hsl(var(--accent-light)) 100%)',
        'name-gradient': 'linear-gradient(90deg, hsl(var(--primary-to)) 0%, hsl(var(--name-end)) 100%)',
        'software-gradient': 'linear-gradient(90deg, hsl(var(--soft)) 0%, hsl(var(--ware)) 100%)',
        'engineer-gradient': 'linear-gradient(90deg, hsl(var(--link)) 0%, hsl(var(--primary-to)) 100%)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
export default config
