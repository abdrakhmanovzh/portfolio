import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/core/theme-provider'
import { Navbar } from '@/components/navbar'
import { GeistSans } from 'geist/font/sans'
import { Blob } from '@/components/ui/blob'
import { cn } from '@/lib/cn'

import './globals.css'

export const metadata: Metadata = {
  description: "jesse abdrakhmanov's portfolio",
  title: 'jesse | portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="overflow-x-hidden" suppressHydrationWarning lang="en">
      <body className={cn(GeistSans.className, 'relative min-h-screen overflow-x-hidden')}>
        <ThemeProvider disableTransitionOnChange defaultTheme="dark" attribute="class">
          <Navbar />

          <Blob className="absolute left-0 top-64 opacity-20" />

          <Blob className="absolute right-0 top-[30%] opacity-20 md:top-[40%]" />

          <Blob className="absolute left-0 top-[50%] opacity-20 md:top-[70%]" />

          <Blob className="absolute right-0 top-[70%] opacity-20 md:hidden" />

          <Blob className="absolute left-0 top-[90%] opacity-20 md:hidden" />

          <main className="px-[10%] 2xl:px-[15%]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
