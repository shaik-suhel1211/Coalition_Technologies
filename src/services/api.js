const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev'

// Per assessment requirements. In a production app these would never ship in
// client-side code — Basic Auth here is only acceptable because this is a
// disposable test API, not a real credential boundary.
const USERNAME = 'coalition'
const PASSWORD = 'skills-test'

const TARGET_PATIENT_NAME = 'Jessica Taylor'

function getAuthHeader() {
  const credentials = btoa(`${USERNAME}:${PASSWORD}`)
  return `Basic ${credentials}`
}

export async function fetchPatients() {
  let response

  try {
    response = await fetch(API_URL, {
      headers: {
        Authorization: getAuthHeader(),
      },
    })
  } catch (networkError) {
    throw new Error(`Unable to reach the patients API: ${networkError.message}`)
  }

  if (!response.ok) {
    throw new Error(`Patients API responded with status ${response.status}`)
  }

  let data

  try {
    data = await response.json()
  } catch {
    throw new Error('Patients API returned a response that was not valid JSON')
  }

  if (!Array.isArray(data)) {
    throw new Error('Patients API returned an unexpected response shape (expected an array)')
  }

  return data
}

export async function fetchJessicaTaylor() {
  const patients = await fetchPatients()
  const patient = patients.find((entry) => entry.name === TARGET_PATIENT_NAME)

  if (!patient) {
    throw new Error(`${TARGET_PATIENT_NAME} was not found in the patients API response`)
  }

  return patient
}
