import type { LucideIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'

type HowItWorksSectionProps = {
  flowSteps: Array<{
    title: string
    description: string
    icon: LucideIcon
  }>
}

function HowItWorksSection({ flowSteps }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="How it works"
        title="A tap becomes a secure access event in five steps"
        description="The flow is intentionally simple: an employee taps the badge, the reader captures the chip, Arduino forwards the data, and the dashboard records the access or entry event without manual logging."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {flowSteps.map((step, index) => {
          const Icon = step.icon

          return (
            <article
              key={step.title}
              className="panel rounded-[2rem] p-5"
              data-aos="fade-up"
              data-aos-delay={index * 90}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] text-sm font-semibold text-[var(--text)]">
                  {index + 1}
                </div>
                <Icon className="h-5 w-5 text-[var(--accent-2)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorksSection