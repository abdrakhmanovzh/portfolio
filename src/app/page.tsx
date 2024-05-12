import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactsSection } from '@/components/contacts-section'
import { AboutSection } from '@/components/about-section'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  return (
    <div className="relative flex flex-col gap-20 py-20">
      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ProjectsSection />

      <ContactsSection />
    </div>
  )
}
