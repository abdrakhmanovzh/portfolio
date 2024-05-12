import { ThemeToggleButton } from '@/components/core/theme-toggle-button'
import { Logo } from '@/components/core/logo'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur">
      <div className="mx-auto flex w-4/5 items-center justify-between border-b border-foreground/40 py-4 2xl:w-[70%]">
        <div className="flex items-center gap-1">
          <Logo />
          <span className="text-lg font-medium text-foreground">| portfolio</span>
        </div>

        <ThemeToggleButton />
      </div>
    </nav>
  )
}
