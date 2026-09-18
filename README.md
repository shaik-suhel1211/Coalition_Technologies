# Coalition Technologies - Healthcare Patient Dashboard

A responsive React application built as part of the Coalition Technologies Frontend Developer Skills Assessment.

The application recreates the provided Adobe XD healthcare dashboard and integrates with the Coalition Technologies Patient Data API to display live patient information for **Jessica Taylor**.

---

## Features

- Responsive healthcare dashboard
- Live API integration using Basic Authentication
- Displays Jessica Taylor's patient information
- Blood Pressure chart using Chart.js
- Diagnosis History
- Health Metrics
- Diagnostic List
- Lab Results
- Loading, Error, and Empty states
- Clean component-based architecture
- Data normalization layer separating API models from UI components

---

## Tech Stack

- React
- Vite
- Chart.js
- CSS
- JavaScript (ES6+)

---

## Project Structure

```text
src/
├── components/
├── services/
│   └── api.js
├── utils/
│   └── patientMapper.js
├── styles/
│   └── tokens.css
├── assets/
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## API

The application fetches patient information from the Coalition Technologies Patient Data API.

Authentication uses HTTP Basic Authentication with the assessment credentials provided by Coalition Technologies.

---

## Architecture

The application follows a layered architecture:

```
API
    │
    ▼
api.js
    │
    ▼
patientMapper.js
    │
    ▼
App.jsx
    │
    ▼
Reusable UI Components
```

The mapper layer normalizes the API response before passing data into presentation components, reducing coupling between backend data and the UI.

---

## Notes

- Dashboard data is populated using the live API.
- Only Jessica Taylor's information is displayed, following the assessment instructions.
- UI interactions not required by the assessment (search, settings, dropdown actions, etc.) are intentionally left non-functional to match the specification.

---

## Author

Shaik Suhel
