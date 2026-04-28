import { CheckCircle2, LogIn, ScanLine, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

type ScanStatus = 'IN' | 'OUT'

type ScanRecord = {
  name: string
  id: string
  status: ScanStatus
  time: string
  gate: string
}

type DemoSectionProps = {
  currentScan: ScanRecord
  scanLog: ScanRecord[]
  liveScanTotal: string
  verifiedEntries: string
  onSimulateScan: () => void
  onMockLogin: () => void
}

function DemoSection({
  currentScan,
  scanLog,
  liveScanTotal,
  verifiedEntries,
  onSimulateScan,
  onMockLogin,
}: DemoSectionProps) {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Demo / simulation"
        title="A live dashboard preview with scan simulation"
        description="The mock interface below behaves like a campus operations console. Use the scan button to generate a fresh IN or OUT event, then watch the log and toast update instantly."
      />

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Live dashboard preview
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">Campus activity feed</h3>
            </div>
            <span className="status-chip green">
              <span className="h-2 w-2 rounded-full bg-current" />
              Simulated feed
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Today</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text)]">{liveScanTotal}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Attendance records</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Verified</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text)]">{verifiedEntries}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Identity checks</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Alert state</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text)]">Clear</p>
              <p className="mt-2 text-sm text-[var(--muted)]">No access anomalies detected</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Door latency</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text)]">0.8s</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Scan-to-entry response</p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">Current scan</p>
                <h4 className="mt-2 text-2xl font-semibold text-[var(--text)]">{currentScan.name}</h4>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {currentScan.id} | {currentScan.gate}
                </p>
              </div>
              <span
                className={currentScan.status === 'IN' ? 'status-chip green' : 'status-chip purple'}
              >
                {currentScan.status}
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Scan time</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">{currentScan.time}</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Status</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">
                  {currentScan.status === 'IN' ? 'Checked In' : 'Checked Out'}
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Route</p>
                <p className="mt-2 text-lg font-semibold text-[var(--text)]">{currentScan.gate}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {scanLog.map((entry) => (
              <div
                key={`${entry.id}-${entry.time}-${entry.status}`}
                className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4"
              >
                <div>
                  <p className="font-semibold text-[var(--text)]">{entry.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {entry.id} | {entry.gate}
                  </p>
                </div>
                <div className="text-right">
                  <span className={entry.status === 'IN' ? 'status-chip green' : 'status-chip purple'}>
                    {entry.status}
                  </span>
                  <p className="mt-2 text-sm text-[var(--muted)]">{entry.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(34,197,94,0.14)] text-[var(--accent-2)]">
                <ScanLine className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                  Scan simulation
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-[var(--text)]">Generate a campus event</h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onSimulateScan}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--accent-2),#7cf7a2)] px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              <ScanLine className="h-4 w-4" />
              Scan Simulation
            </button>

            <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                What changes on scan
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--text)]">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-2)]" />
                  New IN or OUT status is assigned.
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-2)]" />
                  The timestamp and route are written to the feed.
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-2)]" />
                  A toast appears to confirm the event.
                </div>
              </div>
            </div>
          </div>

          <div className="panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(56,189,248,0.14)] text-[var(--accent-3)]">
                <LogIn className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                  Admin login UI
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-[var(--text)]">Mock secure access</h3>
              </div>
            </div>

            <form
              className="mt-5 space-y-4"
              onSubmit={(event) => {
                event.preventDefault()
                onMockLogin()
              }}
            >
              <input
                className="field-shell"
                type="email"
                placeholder="admin@logiclab.dev"
                aria-label="Admin email"
              />
              <input
                className="field-shell"
                type="password"
                placeholder="Enter password"
                aria-label="Admin password"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-3.5 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[rgba(34,197,94,0.35)]"
              >
                <ShieldCheck className="h-4 w-4 text-[var(--accent-2)]" />
                Secure Sign In
              </button>
            </form>

            <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Product note
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                We made this for demo purposes only. In a real system, the login would be integrated with campus SSO and protected by multi-factor authentication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection