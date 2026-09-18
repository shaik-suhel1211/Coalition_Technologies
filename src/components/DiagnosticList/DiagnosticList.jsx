import './DiagnosticList.css'

function statusToModifier(status) {
  return status.toLowerCase().replace(/\s+/g, '-')
}

function DiagnosticList({ diagnosticList }) {
  const hasRecords = diagnosticList.length > 0

  return (
    <section className="diagnostic-list" aria-labelledby="diagnostic-list-title">
      <h2 id="diagnostic-list-title" className="diagnostic-list__title">
        Diagnosis List
      </h2>

      <div className="diagnostic-list__table-wrapper">
        <table className="diagnostic-list__table">
          <caption className="diagnostic-list__caption">Diagnostic list</caption>
          <thead>
            <tr>
              <th scope="col">Problem</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {hasRecords ? (
              diagnosticList.map((record, index) => (
                <tr key={`${index}-${record.name}`}>
                  <th scope="row">{record.name}</th>
                  <td>{record.description}</td>
                  <td>
                    <span
                      className={`diagnostic-list__status diagnostic-list__status--${statusToModifier(
                        record.status,
                      )}`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No diagnostic records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default DiagnosticList
