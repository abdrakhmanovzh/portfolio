import { HighlightedText } from '@/components/ui/highlighted-text'

interface Props {
  description: string[]
  position: string
  company: string
  date: string
}

export function ExperienceCard({ description, position, company, date }: Props) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3>
          <HighlightedText text={company} /> - {position}
        </h3>
        <span>{date}</span>
      </div>

      <ul className="flex list-inside flex-col gap-1">
        {description.map((desc) => (
          <li className="list-disc" key={desc}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  )
}
