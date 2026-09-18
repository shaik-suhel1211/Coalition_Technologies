import mockPatients from './mockPatients'
import getInitials from '../../utils/getInitials'
import { SearchIcon, MenuDotsIcon } from './icons'
import './PatientsSidebar.css'

const ACTIVE_PATIENT_NAME = 'Jessica Taylor'

function PatientsSidebar() {
  return (
    <aside className="patients-sidebar" aria-label="Patients">
      <div className="patients-sidebar__header">
        <h2 className="patients-sidebar__title">Patients</h2>
        <button type="button" className="patients-sidebar__search" disabled aria-label="Search patients">
          <SearchIcon />
        </button>
      </div>

      <ul className="patients-sidebar__list">
        {mockPatients.map((patient) => {
          const isActive = patient.name === ACTIVE_PATIENT_NAME

          return (
            <li key={patient.id}>
              <div
                className="patient-item"
                data-active={isActive || undefined}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="patient-item__avatar" aria-hidden="true">
                  {getInitials(patient.name)}
                </span>
                <span className="patient-item__info">
                  <span className="patient-item__name">{patient.name}</span>
                  <span className="patient-item__meta">
                    {patient.gender}, {patient.age}
                  </span>
                </span>
                <button
                  type="button"
                  className="patient-item__menu"
                  disabled
                  aria-label={`More options for ${patient.name}`}
                >
                  <MenuDotsIcon />
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default PatientsSidebar
