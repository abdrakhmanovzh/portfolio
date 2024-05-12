import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Props {
  label: string
  link: string
  name: string
}

export function ContactLink({ label, link, name }: Props) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-medium">{name}:</span>
      <Button asChild>
        <Link href={link}>{label}</Link>
      </Button>
    </div>
  )
}
