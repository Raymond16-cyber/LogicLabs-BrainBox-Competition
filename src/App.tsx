import { useEffect, useState } from 'react'
import { BellRing } from 'lucide-react'
import AboutSystemSection from './components/AboutSystemSection'
import DemoSection from './components/DemoSection'
import FeaturesSection from './components/FeaturesSection'
import HardwareIntegrationSection from './components/HardwareIntegrationSection'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import TeamSection from './components/TeamSection'
import {
  comparisonCards,
  footerLinks,
  flowSteps,
  features,
  hardwareModules,
  heroFlowNodes,
  initialScans,
  navigation,
  scanRoster,
  teamRoles,
} from './content/siteContent'
import './App.css'

type Theme = 'dark' | 'light'
type ScanStatus = 'IN' | 'OUT'

type ScanRecord = {
  name: string
  id: string
  status: ScanStatus
  time: string
  gate: string
}

const numberFormatter = new Intl.NumberFormat('en-US')

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  try {
    const storedTheme = window.localStorage.getItem('logic-lab-theme')
    return storedTheme === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())
  const [scanCount, setScanCount] = useState(0)
  const [scanLog, setScanLog] = useState<ScanRecord[]>(initialScans)
  const [toast, setToast] = useState<{ title: string; description: string } | null>(null)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme

    try {
      window.localStorage.setItem('logic-lab-theme', theme)
    } catch {
      // ignored
    }
  }, [theme])

  useEffect(() => {
    if (!toast) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => setToast(null), 3200)
    return () => window.clearTimeout(timeoutId)
  }, [toast])

  const currentScan = scanLog[0]
  const liveScanTotal = numberFormatter.format(1284 + scanCount)
  const verifiedEntries = numberFormatter.format(463 + scanCount)
  const accessZones = numberFormatter.format(6)

  const simulateScan = () => {
    const nextStudent = scanRoster[scanCount % scanRoster.length]
    const status: ScanStatus = scanCount % 2 === 0 ? 'IN' : 'OUT'
    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

    const record: ScanRecord = {
      name: nextStudent.name,
      id: nextStudent.id,
      status,
      time,
      gate: status === 'IN' ? 'North Gate' : 'South Exit',
    }

    setScanLog((previous) => [record, ...previous].slice(0, 5))
    setScanCount((previous) => previous + 1)
    setToast({
      title: `${record.name} checked ${record.status === 'IN' ? 'in' : 'out'}`,
      description: `${record.id} logged at ${record.time} through ${record.gate}.`,
    })
  }

  const handleMockLogin = () => {
    setToast({
      title: 'Mock admin login',
      description: 'This is a mocked dashboard sign-in for the product demo.',
    })
  }

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app-shell min-h-screen overflow-hidden">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} navigation={navigation} />

      <main>
        <HeroSection
          liveScanTotal={liveScanTotal}
          verifiedEntries={verifiedEntries}
          accessZones={accessZones}
          heroFlowNodes={heroFlowNodes}
        />
        <AboutSystemSection comparisonCards={comparisonCards} />
        <HowItWorksSection flowSteps={flowSteps} />
        <FeaturesSection features={features} />
        <DemoSection
          currentScan={currentScan}
          scanLog={scanLog}
          liveScanTotal={liveScanTotal}
          verifiedEntries={verifiedEntries}
          onSimulateScan={simulateScan}
          onMockLogin={handleMockLogin}
        />
        <HardwareIntegrationSection hardwareModules={hardwareModules} />
        <TeamSection teamRoles={teamRoles} />
      </main>

      <SiteFooter footerLinks={footerLinks} />

      {toast ? (
        <div className="toast-pop fixed bottom-5 right-5 z-50 w-[min(92vw,24rem)] rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-4 shadow-[var(--shadow)] backdrop-blur-xl">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(34,197,94,0.14)] text-[var(--accent-2)]">
              <BellRing className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[var(--text)]">{toast.title}</p>
              <p className="text-sm leading-6 text-[var(--muted)]">{toast.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App