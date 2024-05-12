import { HighlightedText } from '@/components/ui/highlighted-text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Props {
  technologies: {
    name: string
    link: string
  }[]
  logo: React.ReactNode
  description: string
  githubLink: string
  liveLink: string
  name: string
}

export function ProjectCard({
  technologies,
  description,
  githubLink,
  liveLink,
  logo,
  name
}: Props) {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-5 flex items-center gap-2">
        <div className="relative h-6 w-6">{logo}</div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{name}</h3>
        </div>
      </div>

      <h4 className="font-medium underline underline-offset-2">description:</h4>
      <p className="col-span-4">{description}</p>

      <h4 className="font-medium underline underline-offset-2">technologies:</h4>
      <div className="col-span-4 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <Link href={technology.link} key={technology.name}>
            <HighlightedText text={technology.name} className="text-sm" />
          </Link>
        ))}
      </div>

      <h4 className="font-medium underline underline-offset-2">links:</h4>
      <Button className="w-full" variant="outline" asChild>
        <Link href={githubLink}>github</Link>
      </Button>
      <Button className="w-full" variant="outline" asChild>
        <Link href={liveLink}>live</Link>
      </Button>
    </div>
  )
}
