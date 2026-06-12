import './Day.css'

function Day({ date, temperature, weather }) {
  const temperatureClassName = temperature < 60 ? 'cold' : 'hot'

  return (
    <article className="day-card" id={`day-${date.toLowerCase()}`}>
      <p className="day-date">{date}</p>
      <p className="day-weather">{weather}</p>
      <p className={`day-temp ${temperatureClassName}`}>{temperature}°F</p>
    </article>
  )
}

export default Day
