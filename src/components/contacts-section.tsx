import { ContactLink } from '@/components/contacts/contact-link'
import { Section } from '@/components/ui/section'

const contactsLinks = [
  {
    link: 'https://t.me/abdrakhmanovzh',
    label: '@abdrakhmanovzh',
    name: 'telegram'
  },
  {
    link: 'https://linkedin.com/in/zhassulan-abdrakhmanov-dev',
    label: 'zhassulan-abdrakhmanov-dev',
    name: 'linkedin'
  },
  {
    link: 'mailto:jesse.abdrakhmanov.dev@gmail.com',
    label: 'jesse.abdrakhmanov.dev@gmail.com',
    name: 'email'
  }
]

export function ContactsSection() {
  return (
    <Section title="contacts">
      <div className="flex flex-col gap-4">
        {contactsLinks.map((link) => (
          <ContactLink key={link.label} {...link} />
        ))}
      </div>
    </Section>
  )
}
