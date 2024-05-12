'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button className="text-foreground" onClick={handleToggle} variant={'ghost'} size={'icon'}>
      {mounted &&
        (resolvedTheme === 'dark' ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        ))}
    </Button>
  )
}
