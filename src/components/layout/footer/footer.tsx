import ThemeToggle from '@/src/components/theme/theme-toggle/theme-toggle'
import Container from '@/src/components/ui/container/container'
import LagosClock from '@/src/components/ui/lagos-clock/lagos-clock'

const Footer = () => {
  return (
    <footer>
      <Container className="flex max-w-[1040px] flex-col gap-4 border-t border-border py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Onah Bernard Chizoba · <LagosClock />
        </p>
        <ThemeToggle />
      </Container>
    </footer>
  )
}

export default Footer
