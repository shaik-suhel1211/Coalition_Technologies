import BloodPressureChart from '../BloodPressureChart/BloodPressureChart'
import './DiagnosisHistory.css'

const RANGE_LABEL = 'Last 6 months'

function TrendIcon({ status }) {
  if (status.startsWith('Higher')) {
    return (
      <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="diagnosis-history__trend-icon">
        <path d="M2 8.5 6 4l4 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (status.startsWith('Lower')) {
    return (
      <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="diagnosis-history__trend-icon">
        <path d="M2 3.5 6 8l4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return null
}

function DiagnosisHistory({ systolic, diastolic, chartData }) {
  return (
    <section
      className="diagnosis-history"
      aria-labelledby="diagnosis-history-title"
    >
      <h2 id="diagnosis-history-title" className="diagnosis-history__title">
        Diagnosis History
      </h2>

      <div className="diagnosis-history__bp-card">
        <header className="diagnosis-history__bp-header">
          <h3 className="diagnosis-history__bp-title">Blood Pressure</h3>

          <button
            type="button"
            className="diagnosis-history__range-select"
            disabled
            aria-label={`Date range filter, currently ${RANGE_LABEL} (not yet interactive)`}
          >
            {RANGE_LABEL}
            <span className="diagnosis-history__range-chevron" aria-hidden="true">
              ▾
            </span>
          </button>
        </header>

        <div className="diagnosis-history__bp-body">
          <div className="diagnosis-history__chart-container">
            <BloodPressureChart chartData={chartData} />
          </div>

          <div className="diagnosis-history__stats">
            <div className="diagnosis-history__stat">
              <p className="diagnosis-history__stat-label">
                <span
                  className="diagnosis-history__stat-dot diagnosis-history__stat-dot--systolic"
                  aria-hidden="true"
                ></span>
                Systolic
              </p>
              <p className="diagnosis-history__stat-value">{systolic.value}</p>
              <p className="diagnosis-history__stat-status">
                <TrendIcon status={systolic.status} />
                {systolic.status}
              </p>
            </div>

            <div className="diagnosis-history__stat">
              <p className="diagnosis-history__stat-label">
                <span
                  className="diagnosis-history__stat-dot diagnosis-history__stat-dot--diastolic"
                  aria-hidden="true"
                ></span>
                Diastolic
              </p>
              <p className="diagnosis-history__stat-value">{diastolic.value}</p>
              <p className="diagnosis-history__stat-status">
                <TrendIcon status={diastolic.status} />
                {diastolic.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiagnosisHistory
