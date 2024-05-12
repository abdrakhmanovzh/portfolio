import { ProjectCard } from '@/components/projects/project-card'
import { LemniscateLogo } from '@/assets/lemniscate-logo'
import { Section } from '@/components/ui/section'

const projects = [
  {
    technologies: [
      {
        link: 'https://nextjs.org/',
        name: 'Next.js'
      },
      {
        link: 'https://developer.spotify.com/documentation/web-api/',
        name: 'Spotify Web API'
      },
      {
        link: 'https://tailwindcss.com/',
        name: 'Tailwind CSS'
      },
      {
        link: 'https://ui.shadcn.com/',
        name: 'Shadcn UI'
      }
    ],
    description:
      'an app to get information about your favorite artists, and tracks from Spotify by specific periods of time. It uses the Spotify Web API to fetch data.',
    githubLink: 'https://github.com/abdrakhmanovzh/lemniscate-music/',
    liveLink: 'https://lemniscate-music.vercel.app/',
    name: 'lemniscate | music',
    logo: <LemniscateLogo />
  },
  {
    technologies: [
      {
        link: 'https://react.dev/',
        name: 'React'
      },
      {
        link: 'https://appwrite.io/',
        name: 'Appwrite'
      },
      {
        link: 'https://zustand-demo.pmnd.rs/',
        name: 'Zustand'
      },
      {
        link: 'https://ui.shadcn.com/',
        name: 'Shadcn UI'
      },
      {
        link: 'https://tanstack.com/query/',
        name: 'Tanstack Query'
      }
    ],
    description:
      'a simple e-commerce app with a shopping cart. It uses Appwrite as a backend, and Zustand to manage the state.',
    githubLink: 'https://github.com/abdrakhmanovzh/lemniscate-shop/',
    liveLink: 'https://lemniscate-shop.vercel.app/',
    name: 'lemniscate | shop',
    logo: <LemniscateLogo />
  }
]

export function ProjectsSection() {
  return (
    <Section title="projects">
      <div className="flex w-full flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Section>
  )
}
