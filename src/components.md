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

Forecast
Responsibility: Displays a multi-day weather forecast for the currently selected location.
Renders: Forecast container with a list/grid of `Day` components (4 cards in the screenshot design).
Props: `days: DayForecast[]` (array of forecast objects for each day)
Interactions: none (display-only in this design)

Day
Responsibility: Presents one day's forecast details in a card.
Renders: Card with day/date label, weather icon image, condition text (e.g., Clouds/Rain), and temperature text.
Props: `dayLabel: string`, `iconUrl: string`, `condition: string`, `temperature: number`
Interactions: none (display-only in this design)
