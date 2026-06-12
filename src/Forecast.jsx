import Day from './Day'
import './Forecast.css'

function Forecast() {
  return (
    <div id="forecast-grid" className="forecast-grid">
      <Day date="Fri" temperature={76} weather="Sunny" />
      <Day date="Sat" temperature={58} weather="Cloudy" />
      <Day date="Sun" temperature={69} weather="Rain" />
      <Day date="Mon" temperature={74} weather="Partly Cloudy" />
      <Day date="Tue" temperature={78} weather="Clear" />
    </div>
  )
}

export default Forecast
