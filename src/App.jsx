import './App.css'
import SearchForm from './SearchForm'
import Forecast from './Forecast'
import forecastData from './data/data'

function App() {
  return (
    <main id="app-shell" className="app-shell">
      <header id="weather-card" className="weather-card">
        <h1 className="weather-title">Weather Report</h1>
        <SearchForm />
        <section id="forecast-section" className="forecast-section">
          <Forecast data={forecastData} />
        </section>
      </header>
    </main>
  )
}

export default App
