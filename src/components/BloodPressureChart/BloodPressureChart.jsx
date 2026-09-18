import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import './BloodPressureChart.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

// Chart.js draws to canvas, which can't resolve CSS custom properties, so
// these mirror the design tokens' literal hex values (--color-text-primary,
// --color-border, --color-text-muted, --color-purple, --color-systolic).
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    tooltip: {
      backgroundColor: '#072635',
      padding: 10,
      cornerRadius: 6,
    },
  },
  scales: {
    y: {
      min: 60,
      max: 180,
      ticks: { stepSize: 20, color: '#878787' },
      grid: { color: '#ededed' },
    },
    x: {
      ticks: { color: '#878787' },
      grid: { display: false },
    },
  },
}

function BloodPressureChart({ chartData }) {
  const { labels, systolic, diastolic } = chartData

  const chartJsData = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolic,
        borderColor: '#d6336c',
        backgroundColor: '#d6336c',
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: diastolic,
        borderColor: '#705aaa',
        backgroundColor: '#705aaa',
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
      },
    ],
  }

  const hasReadings = systolic.length > 0

  return (
    <div
      className="bp-chart"
      role="img"
      aria-label={
        hasReadings
          ? `Blood pressure trend over the last ${labels.length} months. Latest reading: systolic ${systolic[systolic.length - 1]}, diastolic ${diastolic[diastolic.length - 1]}.`
          : 'No blood pressure readings available.'
      }
    >
      <Line data={chartJsData} options={chartOptions} />
    </div>
  )
}

export default BloodPressureChart
