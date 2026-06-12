import './Day.css'

function Day({ date, temperature, weather, icon }) {
  const temperatureClassName = temperature < 60 ? 'cold' : 'hot'
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <article className="day-card" id={`day-${date.toLowerCase()}`}>
      <p className="day-date">{date}</p>
      <img className="day-icon" src={iconUrl} alt={weather} />
      <p className="day-weather">{weather}</p>
      <p className={`day-temp ${temperatureClassName}`}>{temperature}°F</p>
    </article>
  )
}

export default Day
