import { useEffect, useState } from 'react'
import { BellRing } from 'lucide-react'
import AuthPage from './components/AuthPage'
import AboutSystemSection from './components/AboutSystemSection'
import DashboardPage from './components/DashboardPage'
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
type AppRoute = '/' | '/login' | '/register' | '/dashboard'
type ScanStatus = 'IN' | 'OUT'

type SessionUser = {
  name: string
  email: string
}

type StoredAccount = SessionUser & {
  password: string
}

const AUTH_ACCOUNT_KEY = 'logic-lab-auth-account'
const AUTH_SESSION_KEY = 'logic-lab-auth-session'
const AUTH_DRAFT_EMAIL_KEY = 'logic-lab-auth-draft-email'
const DEMO_ACCOUNT: StoredAccount = {
  name: 'Admin User',
  email: 'admin@logiclab.dev',
  password: 'LogicLab123!',
}

type ScanRecord = {
  name: string
  id: string
  status: ScanStatus
  time: string
  gate: string
}

const numberFormatter = new Intl.NumberFormat('en-US')

function getInitialRoute(): AppRoute {
  if (typeof window === 'undefined') {
    return '/'
  }

  if (window.location.pathname === '/login') {
    return '/login'
  }

  if (window.location.pathname === '/register') {
    return '/register'
  }

  if (window.location.pathname === '/dashboard') {
    return '/dashboard'
  }

  return '/'
}

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

function readStoredAccount(): StoredAccount | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const storedAccount = window.localStorage.getItem(AUTH_ACCOUNT_KEY)
    if (!storedAccount) {
      return null
    }

    const parsedAccount = JSON.parse(storedAccount) as Partial<StoredAccount>

    if (
      typeof parsedAccount.name === 'string' &&
      typeof parsedAccount.email === 'string' &&
      typeof parsedAccount.password === 'string'
    ) {
      return {
        name: parsedAccount.name,
        email: parsedAccount.email,
        password: parsedAccount.password,
      }
    }
  } catch {
    // ignored
  }

  return null
}

function readStoredSession(): SessionUser | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const storedSession = window.localStorage.getItem(AUTH_SESSION_KEY)
    if (!storedSession) {
      return null
    }

    const parsedSession = JSON.parse(storedSession) as Partial<SessionUser>

    if (typeof parsedSession.name === 'string' && typeof parsedSession.email === 'string') {
      return {
        name: parsedSession.name,
        email: parsedSession.email,
      }
    }
  } catch {
    // ignored
  }

  return null
}

function readStoredDraftEmail(): string {
  if (typeof window === 'undefined') {
    return ''
  }

  try {
    const storedEmail = window.localStorage.getItem(AUTH_DRAFT_EMAIL_KEY)
    return storedEmail ?? ''
  } catch {
    return ''
  }
}

function App() {
  const [route, setRoute] = useState<AppRoute>(() => getInitialRoute())
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())
  const [sessionUser, setSessionUser] = useState<SessionUser | null>(() => readStoredSession())
  const [authDraftEmail, setAuthDraftEmail] = useState<string>(() => readStoredDraftEmail())
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

  useEffect(() => {
    if (route === '/dashboard' && !sessionUser) {
      setToast({
        title: 'Sign in required',
        description: 'Please sign in to access the protected dashboard.',
      })

      if (window.location.pathname !== '/login') {
        window.history.pushState({}, '', '/login')
      }

      setRoute('/login')
      return
    }

    if ((route === '/login' || route === '/register') && sessionUser) {
      if (window.location.pathname !== '/dashboard') {
        window.history.pushState({}, '', '/dashboard')
      }

      setRoute('/dashboard')
    }
  }, [route, sessionUser])

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getInitialRoute())
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  const currentScan = scanLog[0]
  const liveScanTotal = numberFormatter.format(1284 + scanCount)
  const verifiedEntries = numberFormatter.format(463 + scanCount)
  const accessZones = numberFormatter.format(6)

  const navigateTo = (nextRoute: AppRoute) => {
    if (typeof window === 'undefined') {
      return
    }

    if (window.location.pathname !== nextRoute) {
      window.history.pushState({}, '', nextRoute)
    }

    setRoute(nextRoute)
  }

  const openLogin = (prefillEmail = authDraftEmail) => {
    setAuthDraftEmail(prefillEmail)
    navigateTo('/login')
  }

  const openRegister = (prefillEmail = authDraftEmail) => {
    setAuthDraftEmail(prefillEmail)
    navigateTo('/register')
  }

  const openDashboard = () => {
    navigateTo('/dashboard')
  }

  const saveSession = (user: SessionUser) => {
    setSessionUser(user)

    try {
      window.localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(user))
    } catch {
      // ignored
    }
  }

  const saveDraftEmail = (email: string) => {
    setAuthDraftEmail(email)

    try {
      window.localStorage.setItem(AUTH_DRAFT_EMAIL_KEY, email)
    } catch {
      // ignored
    }
  }

  const simulateScan = () => {
    const nextPerson = scanRoster[scanCount % scanRoster.length]
    const status: ScanStatus = scanCount % 2 === 0 ? 'IN' : 'OUT'
    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

    const record: ScanRecord = {
      name: nextPerson.name,
      id: nextPerson.id,
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

  const handleLogin = ({ email, password }: { email: string; password: string }) => {
    const normalizedEmail = email.trim().toLowerCase()
    const storedAccount = readStoredAccount()

    const storedAccountMatches =
      storedAccount !== null &&
      storedAccount.email.toLowerCase() === normalizedEmail &&
      storedAccount.password === password

    const demoAccountMatches =
      DEMO_ACCOUNT.email.toLowerCase() === normalizedEmail && DEMO_ACCOUNT.password === password

    if (!storedAccountMatches && !demoAccountMatches) {
      return {
        success: false,
        message: 'Use the demo credentials or the account you created on the register page.',
      }
    }

    const signedInUser = storedAccountMatches && storedAccount
      ? { name: storedAccount.name, email: storedAccount.email }
      : { name: DEMO_ACCOUNT.name, email: DEMO_ACCOUNT.email }

    saveSession(signedInUser)
    saveDraftEmail(signedInUser.email)

    setToast({
      title: 'Signed in successfully',
      description: `${signedInUser.name} is now connected to the dashboard.`,
    })

    return {
      success: true,
      message: 'Signed in successfully.',
    }
  }

  const handleRegister = ({ name, email, password }: { name: string; email: string; password: string }) => {
    const newAccount: StoredAccount = {
      name,
      email,
      password,
    }

    try {
      window.localStorage.setItem(AUTH_ACCOUNT_KEY, JSON.stringify(newAccount))
    } catch {
      // ignored
    }

    saveDraftEmail(newAccount.email)

    setToast({
      title: 'Account created',
      description: `${newAccount.name} is ready. Continue to the login page to sign in.`,
    })

    return {
      success: true,
      message: 'Account created.',
    }
  }

  const handleSignOut = () => {
    setSessionUser(null)

    try {
      window.localStorage.removeItem(AUTH_SESSION_KEY)
    } catch {
      // ignored
    }

    navigateTo('/')

    setToast({
      title: 'Signed out',
      description: 'Your session was cleared from this browser.',
    })
  }

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  if (route !== '/') {
    if (route === '/dashboard') {
      return (
        <DashboardPage
          theme={theme}
          onToggleTheme={toggleTheme}
          onNavigateHome={() => navigateTo('/')}
          onOpenLogin={openLogin}
          onOpenRegister={openRegister}
          onSignOut={handleSignOut}
          sessionUser={sessionUser}
          liveScanTotal={liveScanTotal}
          verifiedEntries={verifiedEntries}
          accessZones={accessZones}
          currentScan={currentScan}
          scanLog={scanLog}
        />
      )
    }

    return (
      <AuthPage
        mode={route === '/login' ? 'login' : 'register'}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigateHome={() => navigateTo('/')}
        onNavigateDashboard={openDashboard}
        onOpenLogin={openLogin}
        onOpenRegister={openRegister}
        defaultEmail={authDraftEmail}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    )
  }

  return (
    <div className="app-shell min-h-screen overflow-hidden">
      <SiteHeader
        theme={theme}
        onToggleTheme={toggleTheme}
        navigation={navigation}
        onOpenLogin={openLogin}
        onOpenRegister={openRegister}
        sessionUser={sessionUser}
        onSignOut={handleSignOut}
      />

      <main>
        <HeroSection
          liveScanTotal={liveScanTotal}
          verifiedEntries={verifiedEntries}
          accessZones={accessZones}
          heroFlowNodes={heroFlowNodes}
          onOpenLogin={openLogin}
          onOpenRegister={openRegister}
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