import getInitials from '../../utils/getInitials'
import {
  LogoMark,
  OverviewIcon,
  PatientsIcon,
  ScheduleIcon,
  MessageIcon,
  TransactionsIcon,
  SettingsIcon,
  MenuDotsIcon,
} from './icons'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Overview', href: '#', icon: <OverviewIcon /> },
  { label: 'Patients', href: '#', icon: <PatientsIcon /> },
  { label: 'Schedule', href: '#', icon: <ScheduleIcon /> },
  { label: 'Message', href: '#', icon: <MessageIcon /> },
  { label: 'Transactions', href: '#', icon: <TransactionsIcon /> },
]

const ACTIVE_LABEL = 'Patients'

const DOCTOR = {
  name: 'Dr. Jose Simmons',
  title: 'General Practitioner',
}

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main">
      <div className="navbar__brand">
        <span className="navbar__logo" aria-hidden="true">
          <LogoMark />
        </span>
        Tech.Care
      </div>

      <ul className="navbar__links">
        {NAV_LINKS.map((link) => {
          const isActive = link.label === ACTIVE_LABEL

          return (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar__link"
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="navbar__link-icon" aria-hidden="true">
                  {link.icon}
                </span>
                <span className="navbar__link-label">{link.label}</span>
              </a>
            </li>
          )
        })}
      </ul>

      <div className="navbar__profile">
        <span className="navbar__avatar" aria-hidden="true">
          {getInitials(DOCTOR.name)}
        </span>

        <span className="navbar__profile-text">
          <span className="navbar__profile-name">{DOCTOR.name}</span>
          <span className="navbar__profile-title">{DOCTOR.title}</span>
        </span>

        <button type="button" className="navbar__icon-button" disabled aria-label="Settings">
          <SettingsIcon />
        </button>

        <button type="button" className="navbar__icon-button" disabled aria-label="More options">
          <MenuDotsIcon />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
