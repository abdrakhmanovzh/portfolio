import { cn } from '@/lib/cn'

interface Props {
  text: string
  className?: string
}

export function HighlightedText({ text, className }: Props) {
  return (
    <span
      className={cn(
        'w-fit rounded-md bg-foreground/10 px-1 py-1 leading-none dark:bg-foreground/20',
        className
      )}
    >
      {text}
    </span>
  )
}
