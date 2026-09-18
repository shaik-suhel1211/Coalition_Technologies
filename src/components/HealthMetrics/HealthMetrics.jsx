import HealthMetricCard from './HealthMetricCard'
import { RespiratoryRateIcon, TemperatureIcon, HeartRateIcon } from './icons'
import './HealthMetrics.css'

// Presentation metadata (icon, unit, label, color) isn't part of the API
// response — it stays here, while the actual reading (value/status) is
// passed in as a prop.
//
// accentColor is combined with an alpha suffix below (see HealthMetricCard),
// which var() references can't support — so these mirror the design tokens'
// literal hex values (--color-success / --color-warning / --color-purple)
// instead of consuming the CSS variables directly.
const METRICS_CONFIG = [
  {
    key: 'respiratoryRate',
    label: 'Respiratory Rate',
    unit: 'breaths/min',
    accentColor: '#0bd984',
    icon: <RespiratoryRateIcon />,
  },
  {
    key: 'temperature',
    label: 'Temperature',
    unit: '°F',
    accentColor: '#ff6200',
    icon: <TemperatureIcon />,
  },
  {
    key: 'heartRate',
    label: 'Heart Rate',
    unit: 'BPM',
    accentColor: '#705aaa',
    icon: <HeartRateIcon />,
  },
]

function HealthMetrics({ respiratoryRate, temperature, heartRate }) {
  const readingsByKey = { respiratoryRate, temperature, heartRate }

  return (
    <section
      className="health-metrics"
      aria-labelledby="health-metrics-title"
    >
      <h2 id="health-metrics-title" className="health-metrics__title">
        Health Metrics
      </h2>

      <div className="health-metrics__grid">
        {METRICS_CONFIG.map((config) => {
          const reading = readingsByKey[config.key]

          return (
            <HealthMetricCard
              key={config.key}
              icon={config.icon}
              label={config.label}
              value={reading.value ?? '—'}
              unit={config.unit}
              status={reading.status}
              accentColor={config.accentColor}
            />
          )
        })}
      </div>
    </section>
  )
}

export default HealthMetrics
