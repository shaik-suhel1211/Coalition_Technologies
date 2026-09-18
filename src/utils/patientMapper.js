function mapReading(reading) {
  if (!reading) {
    return { value: null, status: 'No data' }
  }

  return { value: reading.value, status: reading.levels }
}

function mapChartData(diagnosisHistory) {
  const recentMonthsNewestFirst = diagnosisHistory.slice(0, 6)
  const recentMonthsOldestFirst = [...recentMonthsNewestFirst].reverse()

  return {
    labels: recentMonthsOldestFirst.map((entry) => entry.month.slice(0, 3)),
    systolic: recentMonthsOldestFirst.map((entry) => entry.blood_pressure.systolic.value),
    diastolic: recentMonthsOldestFirst.map((entry) => entry.blood_pressure.diastolic.value),
  }
}

export function mapPatientData(patient) {
  const diagnosisHistory = patient.diagnosis_history ?? []
  const latestMonth = diagnosisHistory[0]

  return {
    profile: {
      name: patient.name,
      gender: patient.gender,
      age: patient.age,
      profilePicture: patient.profile_picture,
      dateOfBirth: patient.date_of_birth,
      phoneNumber: patient.phone_number,
      emergencyContact: patient.emergency_contact,
      insuranceType: patient.insurance_type,
    },
    latestDiagnosis: {
      systolic: mapReading(latestMonth?.blood_pressure?.systolic),
      diastolic: mapReading(latestMonth?.blood_pressure?.diastolic),
      respiratoryRate: mapReading(latestMonth?.respiratory_rate),
      temperature: mapReading(latestMonth?.temperature),
      heartRate: mapReading(latestMonth?.heart_rate),
    },
    chartData: mapChartData(diagnosisHistory),
    diagnosticList: patient.diagnostic_list ?? [],
    labResults: patient.lab_results ?? [],
  }
}
