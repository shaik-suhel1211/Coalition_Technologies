import './LabResults.css'

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LabResults({ labResults }) {
  const hasReports = labResults.length > 0

  return (
    <section className="lab-results" aria-labelledby="lab-results-title">
      <h2 id="lab-results-title" className="lab-results__title">
        Lab Results
      </h2>

      <ul className="lab-results__list">
        {hasReports ? (
          labResults.map((reportName, index) => (
            <li key={`${index}-${reportName}`} className="lab-results__row">
              <span className="lab-results__name">{reportName}</span>

              <button
                type="button"
                className="lab-results__download"
                disabled
                aria-label={`Download ${reportName} report`}
              >
                <DownloadIcon />
                <span>Download</span>
              </button>
            </li>
          ))
        ) : (
          <li className="lab-results__row">
            <span className="lab-results__name">No lab results available.</span>
          </li>
        )}
      </ul>
    </section>
  )
}

export default LabResults
