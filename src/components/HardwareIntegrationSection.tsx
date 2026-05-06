import type { LucideIcon } from 'lucide-react'
import { Cpu, Fingerprint, LayoutDashboard, RadioTower, Server, Wifi } from 'lucide-react'
import SectionHeading from './SectionHeading'

type HardwareIntegrationSectionProps = {
  hardwareModules: Array<{
    title: string
    description: string
    icon: LucideIcon
  }>
}

function HardwareIntegrationSection({ hardwareModules }: HardwareIntegrationSectionProps) {
  return (
    <section id="hardware-integration" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Hardware integration"
        title="ESP32, NFC module, and the web system work as one stack"
        description="The reader and controller run close to the entry point while the web layer stores the event, updates the dashboard, and keeps the organization data visible for admins."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(34,197,94,0.14)] text-[var(--accent-2)]">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Hardware stack
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-[var(--text)]">Connection map</h3>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {hardwareModules.map((module) => {
              const Icon = module.icon

              return (
                <article
                  key={module.title}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                >
                  <Icon className="h-5 w-5 text-[var(--accent-2)]" />
                  <h4 className="mt-4 text-lg font-semibold text-[var(--text)]">{module.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{module.description}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
              Example wiring
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ['SDA', 'D10'],
                ['SCK', 'D13'],
                ['MOSI', 'D11'],
                ['MISO', 'D12'],
                ['RST', 'D9'],
                ['3.3V', 'Power'],
                ['GND', 'Ground'],
                ['Relay', 'Door strike'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-3"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-[var(--text)]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel rounded-[2rem] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(139,92,246,0.14)] text-[var(--accent)]">
              <Wifi className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Web integration
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-[var(--text)]">
                Hardware and software handshake
              </h3>
            </div>
          </div>

          <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <p>
              The controller reads the card UID, packages a scan event, and sends it to the web layer.
              The service validates the credential, updates access or activity logs, and refreshes the
              admin dashboard.
            </p>
            <p>
              Because the workflow is event-driven, the same hardware setup can power access kiosks,
              door entry points, and automated identity checks without changing the organization product model.
            </p>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
              Architecture flow
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {[
                { label: 'Tap', value: 'Access badge', icon: Fingerprint },
                { label: 'Read', value: 'NFC / RFID UID', icon: RadioTower },
                { label: 'Send', value: 'API event payload', icon: Server },
                { label: 'Update', value: 'Dashboard and logs', icon: LayoutDashboard },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4"
                  >
                    <Icon className="h-5 w-5 text-[var(--accent-2)]" />
                    <p className="mt-4 text-xs uppercase tracking-[0.28em] text-[var(--muted)]">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-[var(--text)]">{item.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HardwareIntegrationSection