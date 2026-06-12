import { useState } from 'react'

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedQuery = query.trim()

    if (!trimmedQuery) {
      return
    }

    if (onSearch) {
      onSearch(trimmedQuery)
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter city name"
        aria-label="Search for a city"
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchForm
