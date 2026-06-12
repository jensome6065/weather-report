import Day from './Day'
import PropTypes from 'prop-types'
import { parseForecastData } from './utils/utils'
import './Forecast.css'

function Forecast({ data }) {
  const preparedData = parseForecastData(data)

  return (
    <div id="forecast-grid" className="forecast-grid">
      {preparedData.map((day) => (
        <Day
          key={day.date}
          date={day.date}
          temperature={day.temperature}
          weather={day.weather}
          icon={day.icon}
        />
      ))}
    </div>
  )
}

Forecast.propTypes = {
  data: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        dt_txt: PropTypes.string,
        main: PropTypes.shape({
          temp: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            main: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
}

export default Forecast
