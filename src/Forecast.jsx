import Day from './Day'

function Forecast() {
  return (
    <div className="forecast-grid">
      <Day date="Fri" temperature="76°F" weather="Sunny" />
      <Day date="Sat" temperature="72°F" weather="Cloudy" />
      <Day date="Sun" temperature="69°F" weather="Rain" />
      <Day date="Mon" temperature="74°F" weather="Partly Cloudy" />
      <Day date="Tue" temperature="78°F" weather="Clear" />
    </div>
  )
}

export default Forecast
