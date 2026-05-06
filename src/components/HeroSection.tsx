import type { LucideIcon } from 'lucide-react'
import { Activity, ArrowRight, BarChart3, Fingerprint, ScanLine, ShieldCheck, TimerReset } from 'lucide-react'

type HeroSectionProps = {
  liveScanTotal: string
  verifiedEntries: string
  accessZones: string
  heroFlowNodes: Array<{
    title: string
    description: string
    icon: LucideIcon
  }>
  onOpenLogin: () => void
  onOpenRegister: () => void
}

function HeroSection({
  liveScanTotal,
  verifiedEntries,
  accessZones,
  heroFlowNodes,
  onOpenLogin,
  onOpenRegister,
}: HeroSectionProps) {
  return (
    <section id="hero" className="relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-20">
        <div className="space-y-8">
          <span className="section-kicker">Smart campus access</span>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl xl:text-7xl">
              <span className="brand-gradient">Smart Campus Access Powered by NFC</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              The Logic Lab turns student ID cards into a contactless identity layer for attendance,
              entry and exit monitoring, and automated verification. A tap is enough to update the
              campus system in real time.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent-2),#7cf7a2)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              View Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-6 py-3.5 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[rgba(34,197,94,0.35)]"
            >
              Explore System
              <ScanLine className="h-4 w-4 text-[var(--accent-2)]" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-[var(--muted)]">Already using the demo?</span>
            <button
              type="button"
              onClick={onOpenLogin}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[rgba(34,197,94,0.35)]"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onOpenRegister}
              className="rounded-full bg-[linear-gradient(135deg,var(--accent-2),#7cf7a2)] px-4 py-2 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Register
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="stat-chip">
              <div className="flex items-center gap-2 text-[var(--accent-2)]">
                <BarChart3 className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
                  Live scans
                </span>
              </div>
              <p className="stat-value mt-3">{liveScanTotal}</p>
              <p className="stat-label">Attendance events recorded today</p>
            </div>
            <div className="stat-chip">
              <div className="flex items-center gap-2 text-[var(--accent)]">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
                  Protected zones
                </span>
              </div>
              <p className="stat-value mt-3">{accessZones}</p>
              <p className="stat-label">Entry points and campus doors online</p>
            </div>
            <div className="stat-chip">
              <div className="flex items-center gap-2 text-[var(--accent-3)]">
                <TimerReset className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
                  Scan time
                </span>
              </div>
              <p className="stat-value mt-3">&lt; 1s</p>
              <p className="stat-label">Tap to dashboard update</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="float-orb green -left-8 top-10 h-28 w-28" />
          <div className="float-orb purple right-4 top-28 h-36 w-36" />
          <div className="float-orb blue bottom-4 left-20 h-24 w-24" />

          <div className="panel hero-card scan-frame relative rounded-[2rem] p-6 sm:p-8">
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--muted)]">
                  Campus scan interface
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">NFC reader connected</h3>
              </div>
              <span className="status-chip green">
                <span className="h-2 w-2 rounded-full bg-current" />
                Live
              </span>
            </div>

            <div className="relative mt-8 grid gap-4">
              <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-strong)] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(34,197,94,0.14)] text-[var(--accent-2)]">
                      <Fingerprint className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                        ID card detected
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[var(--text)]">
                        Jennifer Onluwseyi | 2026/14372
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                    Tap confirmed
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {heroFlowNodes.map((node) => {
                    const Icon = node.icon

                    return (
                      <div
                        key={node.title}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                      >
                        <Icon className="h-5 w-5 text-[var(--accent-2)]" />
                        <p className="mt-3 text-sm font-semibold text-[var(--text)]">{node.title}</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{node.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Activity className="h-4 w-4 text-[var(--accent-2)]" />
                    <p className="text-sm font-medium text-[var(--text)]">System status</p>
                  </div>
                  <span className="status-chip purple">Audit trail ready</span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Attendance</p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--text)]">Real time</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">Every tap reaches the log instantly.</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Verification</p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--text)]">{verifiedEntries}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">Approved card scans tracked today.</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Latency</p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--text)]">0.8s</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">Reader to dashboard response time.</p>
                  </div>
                </div>

                <div className="scan-line mt-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection