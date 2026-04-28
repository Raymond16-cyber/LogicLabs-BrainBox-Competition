import type { LucideIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'

type FeaturesSectionProps = {
  features: Array<{
    title: string
    description: string
    icon: LucideIcon
  }>
}

function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Features"
        title="Built like a real product, not a classroom demo"
        description="The interface is designed to feel like a campus operations tool: fast scans, clear state, a confident security layer, and data that is easy to act on."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon

          return (
            <article key={feature.title} className="panel rounded-[2rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent-2)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--text)]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{feature.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FeaturesSection