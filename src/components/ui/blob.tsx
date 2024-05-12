import { cn } from '@/lib/cn'

interface Props {
  className?: string
}

export function Blob({ className }: Props) {
  return (
    <div
      className={cn(
        'flex h-96 w-96 animate-blob rounded-full bg-foreground opacity-25 blur-3xl filter',
        className
      )}
    ></div>
  )
}
