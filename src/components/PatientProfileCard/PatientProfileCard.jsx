import { useState } from 'react'
import getInitials from '../../utils/getInitials'
import { CalendarIcon, GenderIcon, PhoneIcon, EmergencyIcon, InsuranceIcon } from './icons'
import './PatientProfileCard.css'

function PatientProfileCard({ profile }) {
  const [imageFailed, setImageFailed] = useState(false)

  const details = [
    { icon: <CalendarIcon />, label: 'Date Of Birth', value: profile.dateOfBirth },
    { icon: <GenderIcon />, label: 'Gender', value: profile.gender },
    { icon: <PhoneIcon />, label: 'Contact Info.', value: profile.phoneNumber },
    { icon: <EmergencyIcon />, label: 'Emergency Contacts', value: profile.emergencyContact },
    { icon: <InsuranceIcon />, label: 'Insurance Provider', value: profile.insuranceType },
  ]

  return (
    <section className="profile-card" aria-labelledby="profile-card-name">
      {profile.profilePicture && !imageFailed ? (
        <img
          className="profile-card__avatar profile-card__avatar--photo"
          src={profile.profilePicture}
          alt=""
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="profile-card__avatar" aria-hidden="true">
          {getInitials(profile.name)}
        </div>
      )}

      <h2 id="profile-card-name" className="profile-card__name">
        {profile.name}
      </h2>

      <dl className="profile-card__details">
        {details.map((detail) => (
          <div className="profile-card__row" key={detail.label}>
            <span className="profile-card__row-icon" aria-hidden="true">
              {detail.icon}
            </span>
            <div className="profile-card__row-text">
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <button type="button" className="profile-card__cta" disabled>
        Show All Information
      </button>
    </section>
  )
}

export default PatientProfileCard
