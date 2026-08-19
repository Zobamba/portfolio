import Link from 'next/link'
import { HiOutlineCodeBracket } from 'react-icons/hi2'
import Container from '@/src/components/ui/container/container'
import SocialLinks from '@/src/components/ui/social-links/social-links'

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
            <HiOutlineCodeBracket className="text-primary" size={22} />
            OBC
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Onah Bernard Chizoba. All rights reserved.
          </p>
        </div>

        <SocialLinks />
      </Container>
    </footer>
  )
}

export default Footer
