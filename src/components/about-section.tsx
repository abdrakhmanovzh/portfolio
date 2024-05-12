import { HighlightedText } from '@/components/ui/highlighted-text'
import { Section } from '@/components/ui/section'

export function AboutSection() {
  return (
    <Section title="about">
      <div className="flex flex-col gap-4">
        <p className="text-justify">
          I am passionate about web development and I love to create beautiful and functional
          websites. i am interested in a <HighlightedText text="javascript" /> world , and{' '}
          <HighlightedText text="web design" /> .
        </p>
        <p>
          my other interests are <HighlightedText text="fiction books" /> ,{' '}
          <HighlightedText text="music" /> , <HighlightedText text="poetry" /> .
        </p>
      </div>
    </Section>
  )
}
