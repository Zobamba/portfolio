'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { HiOutlineCodeBracket } from 'react-icons/hi2'
import { navLinks } from '@/src/data/nav-links'
import NavLinkItem from '@/src/components/layout/navbar/nav-link-item'
import ThemeToggle from '@/src/components/theme/theme-toggle/theme-toggle'
import BookACallButton from '@/src/components/ui/book-a-call-button/book-a-call-button'
import Container from '@/src/components/ui/container/container'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/75 backdrop-blur-lg">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
          <HiOutlineCodeBracket className="text-primary" size={22} />
          OBC
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} link={link} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <BookACallButton size="sm" />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-foreground lg:hidden"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </Container>

      {menuOpen && (
        <nav className="flex flex-col items-start gap-4 border-t border-border px-5 py-6 sm:px-8 lg:hidden">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} link={link} onNavigate={() => setMenuOpen(false)} />
          ))}
          <div className="flex items-center gap-3 pt-2">
            <ThemeToggle />
            <BookACallButton size="sm" />
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
