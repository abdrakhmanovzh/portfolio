import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Props {
  label: string
  link: string
  name: string
}

export function ContactLink({ label, link, name }: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <span className="font-medium">{name}:</span>
      <Button asChild>
        <Link href={link}>{label}</Link>
      </Button>
    </div>
  )
}
