import './App.css'
import SearchForm from './SearchForm'

function App() {
  return (
    <main className="app-shell">
      <header className="weather-card">
        <h1 className="weather-title">Weather Report</h1>
        <SearchForm />
      </header>
    </main>
  )
}

export default App
