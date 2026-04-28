import type { LucideIcon } from 'lucide-react'

type SiteFooterProps = {
  footerLinks: Array<{
    label: string
    href: string
    icon: LucideIcon
  }>
}

function SiteFooter({ footerLinks }: SiteFooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(6,16,31,0.4)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[var(--muted)]">
              The Logic Lab
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">
              Engineering smarter campuses.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Contact: hello@thelogiclab.dev | Built for a contactless campus future powered by NFC and
              RFID identity checks.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {footerLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="footer-link"
                >
                  <Icon className="h-4 w-4 text-[var(--accent-2)]" />
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
          <p>Smart campus access powered by NFC and RFID student ID cards.</p>
          <p>Built by The Logic Lab.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter