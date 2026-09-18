import './HealthMetricCard.css'

function HealthMetricCard({ icon, label, value, unit, status, accentColor }) {
  return (
    <article
      className="health-metric-card"
      aria-label={`${label}, ${value} ${unit}, ${status}`}
    >
      <div
        className="health-metric-card__icon"
        style={{ backgroundColor: `${accentColor}1a`, color: accentColor }}
      >
        {icon}
      </div>

      <p className="health-metric-card__label">{label}</p>

      <p className="health-metric-card__value">
        {value}
        <span className="health-metric-card__unit">{unit}</span>
      </p>

      <p className="health-metric-card__status" style={{ color: accentColor }}>
        {status}
      </p>
    </article>
  )
}

export default HealthMetricCard
