import { ExperienceCard } from '@/components/experience/experience-card'
import { Section } from '@/components/ui/section'

export function ExperienceSection() {
  return (
    <Section title="experience">
      <div className="flex flex-col gap-10">
        <ExperienceCard
          description={[
            'developed the UI/UX design and frontend architecture for several projects',
            'worked together with a team lead to deploy app to the Amazon EC2 instances using Docker',
            'worked closely with clients to get feedback and make changes'
          ]}
          date="october 2023 - march 2024"
          position="front-end developer"
          company="Relive"
        />

        <ExperienceCard
          description={[
            'collaborated closely with designers and backend developers to ensure seamless integration of front-end and back-end functionalities',
            'worked with senior developers on creating an app architecture',
            'fixed a lot of bugs for the service app'
          ]}
          position="flutter developer (part time)"
          date="october 2023 - december 2023"
          company="Pendeli"
        />

        <ExperienceCard
          description={[
            'developed and maintained the landing page for the startup company with Next.js and deployed to the Vercel',
            'worked with Vercel Analytics to understand users, and made changes to the UI of the website',
            'developed the service app with Next.js and deployed to the Vercel, used by more than 50 potential farmers for testing purposes.'
          ]}
          date="march 2023 - september 2023"
          position="front-end developer"
          company="Agrogen"
        />
      </div>
    </Section>
  )
}
