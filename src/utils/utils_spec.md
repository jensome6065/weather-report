# Data Transformation Spec

## Source
Raw OpenWeatherMap API response (static: `data.js`)

## Target
Array of clean objects, one per forecast entry, matching the Day component prop interface from `components.md`.

## Field Mapping

| Output key | Raw data path | Transformation | Output type |
|---|---|---|---|
| date | list[i].dt_txt | ISO string -> "Weekday, Month Day" via `formatDate()` | string |
| temperature | list[i].main.temp | Kelvin -> Fahrenheit via `kelvinToFahrenheit()`, 2 decimal string | string |
| weather | list[i].weather[0].main | None - pass through | string |
| description | list[i].weather[0].description | None - pass through | string |
| icon | list[i].weather[0].icon | None - used to build image URL in Day component | string |

## Helper Functions Required
- `kelvinToFahrenheit(kelvin)` -> string
- `formatDate(isoString)` -> string
- `parseForecastData(data)` -> array of clean objects

## Error / Edge Cases
- If the top-level `data` object is missing or has no `list` key, `parseForecastData` should return an empty array instead of throwing.
- If an entry in `list` is missing a required nested field (for example `main.temp` or `weather[0]`), skip that entry or fill with safe fallbacks (like `"N/A"`), but do not crash the full parse.
- If `dt_txt` is missing or invalid, `formatDate` should return a fallback label (for example `"Invalid date"`).
- If temperature is missing or not numeric, `kelvinToFahrenheit` should return a fallback string (for example `"N/A"`).
