import type { LucideIcon } from 'lucide-react'
import { CheckCircle2, Clock3, Cpu, Fingerprint, Server, Wifi } from 'lucide-react'
import SectionHeading from './SectionHeading'

type AboutSystemSectionProps = {
  comparisonCards: Array<{
    title: string
    description: string
    icon: LucideIcon
    bullets: string[]
  }>
}

function AboutSystemSection({ comparisonCards }: AboutSystemSectionProps) {
  return (
    <section id="about-system" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="About the system"
        title="Simple contactless identity for modern campuses"
        description="NFC and RFID both identify a card by radio, but they fit different moments in the campus flow. The Logic Lab pairs the hardware with a campus web app so students tap once and the system takes care of the rest."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {comparisonCards.map((card) => {
              const Icon = card.icon

              return (
                <article key={card.title} className="panel rounded-[2rem] p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface-soft)] text-[var(--accent-2)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                        {card.title}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-[var(--text)]">{card.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
                  <ul className="mt-5 space-y-3">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-[var(--text)]">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-2)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          <div className="panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(34,197,94,0.14)] text-[var(--accent-2)]">
                <Wifi className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                  In real life
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-[var(--text)]">
                  Arduino hardware closes the loop
                </h3>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4 text-sm leading-7 text-[var(--muted)]">
                <p>
                  The reader sits at the desk or gate. Arduino reads the UID, the campus web service
                  receives the event, and the dashboard refreshes with the student name, time, and
                  access state.
                </p>
                <p>
                  That same event can drive attendance, entry or exit monitoring, and an automated
                  identity check for any connected campus workflow.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                  Live stack
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-3">
                    <Fingerprint className="h-4 w-4 text-[var(--accent-2)]" />
                    <span className="text-sm text-[var(--text)]">Student ID card</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-3">
                    <Cpu className="h-4 w-4 text-[var(--accent)]" />
                    <span className="text-sm text-[var(--text)]">Arduino controller</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-3">
                    <Server className="h-4 w-4 text-[var(--accent-3)]" />
                    <span className="text-sm text-[var(--text)]">Campus web service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(56,189,248,0.14)] text-[var(--accent-3)]">
              <Clock3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                The use case
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-[var(--text)]">Attendance, doors, identity</h3>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Tap range</p>
              <p className="mt-3 text-3xl font-semibold text-[var(--text)]">4 cm</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Intentional student check-ins.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Reader mode</p>
              <p className="mt-3 text-3xl font-semibold text-[var(--text)]">UID</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Card identity read from the chip.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">System</p>
              <p className="mt-3 text-3xl font-semibold text-[var(--text)]">Live</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Dashboard updates immediately.</p>
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
              Why it works
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                'Students move faster through entry points.',
                'Admins get a reliable digital audit trail.',
                'The hardware can scale from attendance to access control.',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 text-sm leading-6 text-[var(--text)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSystemSection