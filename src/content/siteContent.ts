import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  BarChart3,
  BellRing,
  Code2,
  Cpu,
  Fingerprint,
  Gauge,
  Laptop2,
  LayoutDashboard,
  LockKeyhole,
  RadioTower,
  ScanLine,
  Server,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react'

type ScanStatus = 'IN' | 'OUT'

type ScanRecord = {
  name: string
  id: string
  status: ScanStatus
  time: string
  gate: string
}

type IconCard = {
  title: string
  description: string
  icon: LucideIcon
}

type ComparisonCard = IconCard & {
  bullets: string[]
}

type NavigationItem = {
  label: string
  href: string
}

type FooterLink = {
  label: string
  href: string
  icon: LucideIcon
}

export const navigation: NavigationItem[] = [
  { label: 'About', href: '#about-system' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Hardware', href: '#hardware-integration' },
  { label: 'Team', href: '#team' },
]

export const heroFlowNodes: IconCard[] = [
  {
    title: 'Reader',
    description: 'MFRC522 detects the student ID chip.',
    icon: RadioTower,
  },
  {
    title: 'Arduino bridge',
    description: 'Validates the UID and forwards the event.',
    icon: Cpu,
  },
  {
    title: 'Dashboard',
    description: 'Attendance and access logs update instantly.',
    icon: LayoutDashboard,
  },
]

export const comparisonCards: ComparisonCard[] = [
  {
    title: 'NFC',
    description: 'Ideal for intentional taps with student ID cards and secure sign-ins.',
    icon: Smartphone,
    bullets: ['Very short range', 'Great for attendance check-ins', 'Faster user intent, fewer false reads'],
  },
  {
    title: 'RFID',
    description: 'Useful when a broader read zone is needed for doors, gates, and movement tracking.',
    icon: RadioTower,
    bullets: ['Longer read range', 'Strong for access checkpoints', 'Works well for asset and zone tracking'],
  },
]

export const flowSteps: IconCard[] = [
  {
    title: 'Student taps ID card',
    description: 'The card is presented at the reader for a deliberate contactless scan.',
    icon: Fingerprint,
  },
  {
    title: 'Scanner reads the chip',
    description: 'NFC or RFID data is captured in milliseconds by the hardware module.',
    icon: ScanLine,
  },
  {
    title: 'Data is sent to the system',
    description: 'Arduino forwards the UID and metadata to the campus web service.',
    icon: Server,
  },
  {
    title: 'Attendance or entry is recorded',
    description: 'The event is stored as an IN or OUT action with a timestamp.',
    icon: BadgeCheck,
  },
  {
    title: 'Admin dashboard updates',
    description: 'Operators see the updated scan feed and audit history live.',
    icon: LayoutDashboard,
  },
]

export const features: IconCard[] = [
  {
    title: 'Real-time attendance logging',
    description: 'Capture every card tap as it happens and keep the register current.',
    icon: BarChart3,
  },
  {
    title: 'Secure access control',
    description: 'Gate entry with identity checks that only move forward after validation.',
    icon: LockKeyhole,
  },
  {
    title: 'Fast and contactless scanning',
    description: 'Students tap once and keep moving, which reduces queue time and friction.',
    icon: Zap,
  },
  {
    title: 'Data tracking and analytics',
    description: 'Review attendance patterns, entry peaks, and door activity in one place.',
    icon: Gauge,
  },
]

export const hardwareModules: IconCard[] = [
  {
    title: 'Arduino Uno',
    description: 'Runs the hardware logic and acts as the bridge between reader and web app.',
    icon: Cpu,
  },
  {
    title: 'MFRC522 NFC module',
    description: 'Reads the card UID from the student ID tag when it comes into range.',
    icon: RadioTower,
  },
  {
    title: 'Relay or door strike',
    description: 'Opens the gate or logs a denial after the system decides access is valid.',
    icon: LockKeyhole,
  },
  {
    title: 'Campus web service',
    description: 'Receives the event payload and refreshes the dashboard in real time.',
    icon: Server,
  },
]

export const teamRoles: IconCard[] = [
  {
    title: 'Embedded systems',
    description: 'Designs the Arduino logic, the reader wiring, and the scan payload format.',
    icon: Cpu,
  },
  {
    title: 'Product interface',
    description: 'Builds the dashboard, simulation cards, and the campus-facing experience.',
    icon: Laptop2,
  },
  {
    title: 'Security and operations',
    description: 'Shapes the access policy, audit trail, and the campus workflow rules.',
    icon: ShieldCheck,
  },
]

export const scanRoster = [
  { name: 'Jennifer Oluwaseyi', id: '2026/14372' },
  { name: 'John Fadeyi', id: '2019/12345' },
  { name: 'Mitchelle Adeyemi', id: '2020/67890' },
  { name: 'Boy Smooth', id: '2021/11111' },
  { name: 'Jude Thompson', id: '2022/22222' },
]

export const initialScans: ScanRecord[] = [
  { name: 'Jennifer Oluwaseyi', id: '2026/14372', status: 'IN', time: '08:12 AM', gate: 'North Gate' },
  { name: 'John Fadeyi', id: '2019/12345', status: 'OUT', time: '08:18 AM', gate: 'Library Exit' },
  { name: 'Mitchelle Adeyemi', id: '2020/67890', status: 'IN', time: '08:21 AM', gate: 'Main Lobby' },
  { name: 'Boy Smooth', id: '2021/11111', status: 'IN', time: '08:24 AM', gate: 'Admin Wing' },
]

export const footerLinks: FooterLink[] = [
  { label: 'GitHub', href: 'https://github.com/thelogiclab', icon: Code2 },
  { label: 'Campus Demo', href: '#demo', icon: LayoutDashboard },
  { label: 'Email', href: 'mailto:hello@thelogiclab.dev', icon: BellRing },
]