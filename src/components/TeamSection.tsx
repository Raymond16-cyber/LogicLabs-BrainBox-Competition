import type { LucideIcon } from 'lucide-react'
import { Users } from 'lucide-react'
import SectionHeading from './SectionHeading'

type TeamSectionProps = {
  teamRoles: Array<{
    title: string
    description: string
    icon: LucideIcon
  }>
}

function TeamSection({ teamRoles }: TeamSectionProps) {
  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Team"
        title="Built by The Logic Lab"
        description="A focused product team can own the embedded layer, the interface, and the access workflow without making the experience feel academic."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {teamRoles.map((role, index) => {
          const Icon = role.icon

          return (
            <article
              key={role.title}
              className="panel rounded-[2rem] p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent-2)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--text)]">{role.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{role.description}</p>
            </article>
          )
        })}
      </div>

      <div className="panel mt-6 rounded-[2rem] p-6" data-aos="fade-up" data-aos-delay="120">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
              Delivery mindset
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">Engineering smarter organizations</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--muted)]">
            <Users className="h-4 w-4 text-[var(--accent-2)]" />
            The Logic Lab collective
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection