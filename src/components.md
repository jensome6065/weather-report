App
Responsibility: Serves as the top-level container that manages weather data/state and composes the search and forecast sections.
Renders: Main app wrapper, page title ("Weather Report"), `SearchForm`, location heading text, and `Forecast`.
Props: none
Interactions: Receives location updates from `SearchForm` and triggers weather/forecast updates.

SearchForm
Responsibility: Collects a city/location query from the user and submits it to the parent.
Renders: A form containing a text input and a submit button.
Props: `onSearch: (query: string) => void`
Interactions: User types in the input and clicks submit (or presses Enter) to request weather for a location.

### SearchForm - Decisions Log
- **What Claude generated:** A functional `SearchForm` component scaffold that returns a `<form>` containing a text input and a submit button, with default export setup.
- **What I changed:** Added `useState` for controlled input, implemented `onSubmit` with `preventDefault`, trimmed empty input, and called optional `onSearch` prop so both clicking Submit and pressing Enter follow the same handler.
- **What I learned:** Submitting at the `<form>` level is the simplest way to support both button clicks and Enter key behavior without extra key listeners.

Forecast
Responsibility: Displays a multi-day weather forecast for the currently selected location.
Renders: Forecast container with a list/grid of `Day` components (4 cards in the screenshot design).
Props: `days: DayForecast[]` (array of forecast objects for each day)
Interactions: none (display-only in this design)

### Forecast - Decisions Log
- **What Claude generated:** A minimal `Forecast` functional component scaffold with an empty return structure and default export.
- **What I changed:** Added a placeholder `<div>` with "Weather forecast will go here.", then rendered `Forecast` from `App` inside a dedicated forecast section for clear parent-child structure.
- **What I learned:** Creating the parent section first makes it easier to swap placeholder content for real child components later without changing overall layout structure.

Day
Responsibility: Presents one day's forecast details in a card.
Renders: Card with date label, weather text (e.g., Sunny/Rain), and temperature text.
Props: `date: string`, `weather: string`, `temperature: string`
Interactions: none (display-only in this design)

### Day - Decisions Log
- **Claude Audit result:** The spec and implementation initially diverged (`dayLabel/iconUrl/condition` in spec vs requested `date/weather/temperature` in implementation), and no `iconUrl` was being passed/rendered.
- **What I changed:** Kept `Day` implementation aligned to this step (`date`, `weather`, `temperature`) and updated the Day spec to match what is actually rendered; added 5 `Day` instances in `Forecast` with unique props.
- **What I learned:** Prop names should match the agreed interface exactly, because even small naming drift between spec and usage quickly creates integration bugs between parent and child components.
