function Day({ date, temperature, weather }) {
  return (
    <article className="day-card">
      <p className="day-date">{date}</p>
      <p className="day-weather">{weather}</p>
      <p className="day-temp">{temperature}</p>
    </article>
  )
}

export default Day
