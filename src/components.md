App
Responsibility: Serves as the top-level container that composes the search and forecast sections.
Renders: Main app wrapper, page title ("Weather Report"), `SearchForm`, and `Forecast`.
Props: none
Interactions: none (current lab state does not wire search state to forecast updates yet).

SearchForm
Responsibility: Collects a city/location query from the user and submits it to the parent.
Renders: A form containing a text input and a submit button.
Props: `onSearch?: (query: string) => void` (optional in current implementation)
Interactions: User types in the input and clicks submit (or presses Enter). If `onSearch` is provided, the query is submitted to the parent.

### SearchForm - Decisions Log
- **What Claude generated:** A functional `SearchForm` component scaffold that returns a `<form>` containing a text input and a submit button, with default export setup.
- **What I changed:** Added `useState` for controlled input, implemented `onSubmit` with `preventDefault`, trimmed empty input, and called optional `onSearch` prop so both clicking Submit and pressing Enter follow the same handler.
- **What I learned:** Submitting at the `<form>` level is the simplest way to support both button clicks and Enter key behavior without extra key listeners.

Forecast
Responsibility: Displays a multi-day weather forecast for the currently selected location.
Renders: Forecast container with a list/grid of `Day` components derived from parsed weather data.
Props: `data: { list: Array<ForecastEntry> }`
Interactions: none (display-only in this design)

### Forecast - Decisions Log
- **What Claude generated:** A minimal `Forecast` functional component scaffold with an empty return structure and default export.
- **What I changed:** Replaced hardcoded `Day` cards with `parseForecastData(data)` and mapped `preparedData` into `Day` components, passing `date`, `temperature`, `weather`, and `icon`.
- **What I learned:** Keeping `Forecast` focused on transforming and mapping incoming data makes the component easier to scale than static card markup.

Day
Responsibility: Presents one day's forecast details in a card.
Renders: Card with date label, weather icon, weather text (e.g., Sunny/Rain), and temperature text.
Props: `date: string`, `weather: string`, `temperature: number`, `icon: string`
Interactions: none (display-only in this design)

### Day - Decisions Log
- **Claude Audit result:** The spec and implementation initially diverged (`dayLabel/iconUrl/condition` in spec vs requested `date/weather/temperature` in implementation), and no `iconUrl` was being passed/rendered.
- **What I changed:** Updated `Day` to accept `icon` and render the OpenWeather icon URL, while keeping temperature color logic based on the numeric `temperature` prop.
- **What I learned:** Prop interfaces work best when the rendering component consumes exactly the fields prepared upstream, with no hidden hardcoded values.

## Spec Reconciliation (Lab 2)

**Reviewed:** 2026-06-12

**Gaps found:**
- App: Spec said it manages weather state, renders a location heading, and receives location updates from `SearchForm`, but implementation currently only composes static sections.
  - Decision: updated spec (intentional lab-stage simplification; state wiring deferred).
- SearchForm: Spec defined `onSearch` as required, but implementation treats it as optional and `App` does not pass it yet.
  - Decision: updated spec to `onSearch?` and documented behavior when prop is absent.
- Forecast: Spec defined a `days` prop and 4-card plan, but implementation renders 5 hardcoded `Day` cards with no props passed to `Forecast`.
  - Decision: updated spec to reflect current implementation (hardcoded 5-day sample data for this lab stage).

**Outcome:**
- [x] Spec reflects current implementation
- [x] All decisions logged
