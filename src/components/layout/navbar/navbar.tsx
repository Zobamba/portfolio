import Link from 'next/link'
import { navLinks } from '@/src/data/nav-links'
import { socials } from '@/src/data/socials'
import BookACallButton from '@/src/components/ui/book-a-call-button/book-a-call-button'

const headerSocials = socials.filter((social) => social.label !== 'Email')

// A floating pill that stays put while the single page scrolls underneath it.
const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6">
      <div className="flex items-center gap-3 rounded-full border border-border bg-card/90 p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <Link
          href="/"
          className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-foreground sm:inline-block"
        >
          Onah Bernard
        </Link>
        <span aria-hidden="true" className="mx-1 hidden h-4 w-px bg-border sm:block" />

        <nav className="flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <span aria-hidden="true" className="mx-1 h-4 w-px bg-border" />

        <div className="flex items-center">
          {headerSocials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label === 'Twitter' ? 'X' : label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <BookACallButton size="sm" className="ml-1 hidden px-4 py-2 md:inline-flex" />
      </div>
    </header>
  )
}

export default Navbar
