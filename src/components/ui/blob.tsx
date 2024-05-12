import { cn } from '@/lib/cn'

interface Props {
  className?: string
}

export function Blob({ className }: Props) {
  return (
    <div
      className={cn(
        'flex h-56 w-56 animate-blob rounded-full bg-foreground opacity-25 blur-3xl filter md:h-96 md:w-96',
        className
      )}
    ></div>
  )
}
