'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {mounted && (isDark ? <FiSun size={16} /> : <FiMoon size={16} />)}
    </button>
  )
}

export default ThemeToggle
