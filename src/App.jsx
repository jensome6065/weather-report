import './App.css'
import SearchForm from './SearchForm'
import Forecast from './Forecast'

function App() {
  return (
    <main className="app-shell">
      <header className="weather-card">
        <h1 className="weather-title">Weather Report</h1>
        <SearchForm />
        <section className="forecast-section">
          <Forecast />
        </section>
      </header>
    </main>
  )
}

export default App
