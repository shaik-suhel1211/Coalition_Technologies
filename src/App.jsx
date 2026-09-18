import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import PatientsSidebar from './components/PatientsSidebar/PatientsSidebar'
import PatientProfileCard from './components/PatientProfileCard/PatientProfileCard'
import DiagnosisHistory from './components/DiagnosisHistory/DiagnosisHistory'
import HealthMetrics from './components/HealthMetrics/HealthMetrics'
import DiagnosticList from './components/DiagnosticList/DiagnosticList'
import LabResults from './components/LabResults/LabResults'
import { fetchJessicaTaylor } from './services/api'
import { mapPatientData } from './utils/patientMapper'
import './App.css'

function App() {
  const [patientData, setPatientData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isCancelled = false

    async function loadPatient() {
      try {
        const patient = await fetchJessicaTaylor()
        const mapped = mapPatientData(patient)

        if (!isCancelled) {
          setPatientData(mapped)
        }
      } catch (fetchError) {
        console.error(fetchError)

        if (!isCancelled) {
          setError('Unable to load patient information. Please try again.')
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false)
        }
      }
    }

    loadPatient()

    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <div className="dashboard-layout">
        <div className="dashboard-layout__sidebar">
          <PatientsSidebar />
        </div>

        {isLoading && (
          <p className="app__status" role="status">
            Loading patient data…
          </p>
        )}

        {!isLoading && error && (
          <p className="app__status app__status--error" role="alert">
            {error}
          </p>
        )}

        {!isLoading && !error && !patientData && (
          <p className="app__status" role="status">
            No patient data available.
          </p>
        )}

        {!isLoading && !error && patientData && (
          <>
            <main className="dashboard-layout__main">
              <DiagnosisHistory
                systolic={patientData.latestDiagnosis.systolic}
                diastolic={patientData.latestDiagnosis.diastolic}
                chartData={patientData.chartData}
              />
              <HealthMetrics
                respiratoryRate={patientData.latestDiagnosis.respiratoryRate}
                temperature={patientData.latestDiagnosis.temperature}
                heartRate={patientData.latestDiagnosis.heartRate}
              />
              <DiagnosticList diagnosticList={patientData.diagnosticList} />
            </main>

            <aside className="dashboard-layout__right" aria-label="Patient summary">
              <PatientProfileCard profile={patientData.profile} />
              <LabResults labResults={patientData.labResults} />
            </aside>
          </>
        )}
      </div>
    </div>
  )
}

export default App
