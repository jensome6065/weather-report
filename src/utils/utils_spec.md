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

### kelvinToFahrenheit — Decisions Log
- **What I used AI for:** Verified the Kelvin-to-Fahrenheit formula and confirmed `toFixed(2)` is the correct way to return a two-decimal string.
- **What I changed:** Added a guard clause that returns `"N/A"` for missing or non-numeric input to avoid runtime issues.
- **What I learned:** `toFixed(2)` both rounds and converts a number into a string representation with exactly two decimal places.

### formatDate — Decisions Log
- **What I used AI for:** Confirmed the Date API flow (`new Date(...)` plus `toLocaleDateString(...)`) and which formatting options produce `Weekday, Month Day`.
- **What I changed:** Normalized the input date string by replacing the space with `T`, and added an invalid-date fallback.
- **What I learned:** `toLocaleDateString` with `{ weekday: 'short', month: 'short', day: 'numeric' }` gives the exact readable forecast label format needed.

### parseForecastData — Decisions Log
- **What I used AI for:** Used AI to validate the spec scaffold and confirm `.map()` plus nested field access patterns for `list[i].weather[0]`.
- **What I changed:** Kept the core mapping logic, but added defensive checks and filtered out invalid entries so one malformed item does not break the full transformation.
- **What I learned:** Array transformation is cleaner when each item is mapped into the target shape first, then invalid results are removed with `.filter(...)`.
