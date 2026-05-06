import {
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  BellRing,
  Clock3,
  Fingerprint,
  LayoutDashboard,
  LogOut,
  MoonStar,
  ScanLine,
  ShieldCheck,
  SunMedium,
  Users,
} from 'lucide-react'

type Theme = 'dark' | 'light'

type SessionUser = {
  name: string
  email: string
}

type ScanStatus = 'IN' | 'OUT'

type ScanRecord = {
  name: string
  id: string
  status: ScanStatus
  time: string
  gate: string
}

type DashboardPageProps = {
  theme: Theme
  onToggleTheme: () => void
  onNavigateHome: () => void
  onOpenLogin: (prefillEmail?: string) => void
  onOpenRegister: (prefillEmail?: string) => void
  onSignOut: () => void
  sessionUser: SessionUser | null
  liveScanTotal: string
  verifiedEntries: string
  accessZones: string
  currentScan: ScanRecord
  scanLog: ScanRecord[]
}

const operationsPanels = [
  {
    title: 'Organization status',
    value: 'All systems green',
    description: 'Network, reader, and audit trail layers are online.',
  },
  {
    title: 'Active users',
    value: '42 active',
    description: 'Mock figure for this static dashboard preview.',
  },
  {
    title: 'Security posture',
    value: 'No incidents',
    description: 'No alerts, denied access spikes, or sensor faults.',
  },
  {
    title: 'Notification state',
    value: 'Quiet',
    description: 'The bell feed is idle and ready for new events.',
  },
]

function DashboardPage({
  theme,
  onToggleTheme,
  onNavigateHome,
  onOpenLogin,
  onOpenRegister,
  onSignOut,
  sessionUser,
  liveScanTotal,
  verifiedEntries,
  accessZones,
  currentScan,
  scanLog,
}: DashboardPageProps) {
  const signedInUser = sessionUser ?? {
    name: 'Demo Operator',
    email: 'demo@logiclab.dev',
  }
  const recentScans = scanLog.slice(0, 5)

  return (
    <div className="app-shell min-h-screen overflow-hidden">
      <div className="mx-auto min-h-screen max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <header className="panel rounded-[2rem] px-4 py-4 sm:px-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" onClick={onNavigateHome} className="flex items-center gap-3 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] text-slate-950 shadow-[0_16px_40px_rgba(34,197,94,0.22)]">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--muted)]">
                  The Logic Lab
                </p>
                <p className="text-sm font-medium text-[var(--text)]">Static dashboard preview</p>
              </div>
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <span className="status-chip green">
                <span className="h-2 w-2 rounded-full bg-current" />
                Dashboard online
              </span>
              <button
                type="button"
                onClick={() => onOpenLogin(signedInUser.email)}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[rgba(34,197,94,0.35)]"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => onOpenRegister(signedInUser.email)}
                className="rounded-full bg-[linear-gradient(135deg,var(--accent-2),#7cf7a2)] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Register
              </button>
              <button
                type="button"
                onClick={onSignOut}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[rgba(34,197,94,0.35)]"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[rgba(34,197,94,0.35)]"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </header>

        <main className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <section className="panel rounded-[2.25rem] p-5 sm:p-8">
              <span className="section-kicker">Dashboard / static preview</span>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div className="space-y-4">
                  <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl xl:text-6xl">
                    Welcome back, {signedInUser.name}
                  </h1>
                  <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
                    This dashboard is static, but it stays connected to your app login flow. The
                    cards below reflect the current scan activity, while the layout adapts from a
                    stacked mobile view to a two-column workspace on larger screens.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                    Signed-in user
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[var(--text)]">{signedInUser.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{signedInUser.email}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="status-chip purple">Preview mode</span>
                    <span className="status-chip green">Live data binding</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-2 text-[var(--accent-2)]">
                  <BarChart3 className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                    Live scans
                  </p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-[var(--text)]">{liveScanTotal}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Activity captured across the current session.
                </p>
              </div>

              <div className="panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-2 text-[var(--accent)]">
                  <BadgeCheck className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                    Verified entries
                  </p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-[var(--text)]">{verifiedEntries}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Approved scans and access decisions.
                </p>
              </div>

              <div className="panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-2 text-[var(--accent-3)]">
                  <ShieldCheck className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                    Access zones
                  </p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-[var(--text)]">{accessZones}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Active gates and monitored checkpoints.
                </p>
              </div>

              <div className="panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-2 text-[var(--accent-2)]">
                  <Clock3 className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                    Response time
                  </p>
                </div>
                <p className="mt-3 text-3xl font-semibold text-[var(--text)]">0.8s</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Reader to dashboard response in the mock flow.
                </p>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="panel rounded-[2rem] p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                      Recent activity
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">
                      Activity stream
                    </h2>
                  </div>
                  <span className="status-chip green">
                    <span className="h-2 w-2 rounded-full bg-current" />
                    Live preview
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {recentScans.map((entry) => (
                    <div
                      key={`${entry.id}-${entry.time}-${entry.status}`}
                      className="flex flex-col gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-semibold text-[var(--text)]">{entry.name}</p>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {entry.id} | {entry.gate}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 sm:justify-end">
                        <span className={entry.status === 'IN' ? 'status-chip green' : 'status-chip purple'}>
                          {entry.status}
                        </span>
                        <p className="text-sm text-[var(--muted)]">{entry.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                  <div className="flex items-center gap-3">
                    <ScanLine className="h-5 w-5 text-[var(--accent-2)]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                      Current scan
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Name</p>
                      <p className="mt-2 text-lg font-semibold text-[var(--text)]">{currentScan.name}</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Status</p>
                      <p className="mt-2 text-lg font-semibold text-[var(--text)]">
                        {currentScan.status === 'IN' ? 'Checked In' : 'Checked Out'}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Gate</p>
                      <p className="mt-2 text-lg font-semibold text-[var(--text)]">{currentScan.gate}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="panel rounded-[2rem] p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <BellRing className="h-5 w-5 text-[var(--accent-2)]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                        Operations
                      </p>
                      <h2 className="mt-1 text-2xl font-semibold text-[var(--text)]">
                        Static system snapshot
                      </h2>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {operationsPanels.map((panel) => (
                      <div key={panel.title} className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                          {panel.title}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-[var(--text)]">{panel.value}</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{panel.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel rounded-[2rem] p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-[var(--accent)]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                        Quick actions
                      </p>
                      <h2 className="mt-1 text-2xl font-semibold text-[var(--text)]">
                        Move around the app
                      </h2>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={onNavigateHome}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-5 py-3.5 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[rgba(34,197,94,0.35)]"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back home
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenLogin()}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent-2),#7cf7a2)] px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      <Fingerprint className="h-4 w-4" />
                      Login page
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardPage