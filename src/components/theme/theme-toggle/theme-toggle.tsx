'use client'

import { useSyncExternalStore } from 'react'
import { useTheme } from 'next-themes'

const subscribe = () => () => {}

// A quiet text control for the footer; the theme follows the system until someone picks.
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)
  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      {mounted ? (isDark ? 'Light mode' : 'Dark mode') : 'Theme'}
    </button>
  )
}

export default ThemeToggle
