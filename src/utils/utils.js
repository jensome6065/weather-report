function kelvinToFahrenheit(kelvin) {
  if (typeof kelvin !== 'number' || Number.isNaN(kelvin)) {
    return 'N/A'
  }

  const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32
  return fahrenheit.toFixed(2)
}

function formatDate(isoString) {
  if (typeof isoString !== 'string' || isoString.trim() === '') {
    return 'Invalid date'
  }

  const normalizedIso = isoString.replace(' ', 'T')
  const parsedDate = new Date(normalizedIso)

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Invalid date'
  }

  return parsedDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

function parseForecastData(data) {
  if (!data || !Array.isArray(data.list)) {
    return []
  }

  return data.list
    .map((entry) => {
      const weatherEntry = entry?.weather?.[0]
      const fahrenheitString = kelvinToFahrenheit(entry?.main?.temp)
      const temperature = Number(fahrenheitString)

      if (
        !entry?.dt_txt ||
        !weatherEntry?.main ||
        !weatherEntry?.description ||
        !weatherEntry?.icon ||
        Number.isNaN(temperature)
      ) {
        return null
      }

      return {
        date: formatDate(entry.dt_txt),
        temperature,
        weather: weatherEntry.main,
        description: weatherEntry.description,
        icon: weatherEntry.icon,
      }
    })
    .filter(Boolean)
}

export { kelvinToFahrenheit, formatDate, parseForecastData }
