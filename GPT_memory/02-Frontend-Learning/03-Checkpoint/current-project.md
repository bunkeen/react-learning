# Current Project Checkpoint

## Project Name

Weather App

## Last Updated

2026-08-31

## Project Purpose

This is the current main Front-End learning project.

It is being used to practice and connect:

- React component design
- props and parent → child data flow
- real API fetching
- async JavaScript in project code
- API data transformation
- loading / error handling
- modern React render / lifecycle mental model
- server-state management with TanStack Query
- practical UI / responsive development

The project is no longer mainly being used to learn callback / Promise / async-await prerequisites. Those foundations are now sufficiently understood for current project work and should be reinforced only when a real gap appears.

---

## Current Goal

Current milestone:

```text
working Weather App data flow
→ responsive / presentable UI
→ dynamic city weather
→ complete first meaningful Weather App milestone
```

A major server-state refactor has just been completed:

```text
useState
+ useEffect
+ fetch
+ manual loading/error
```

has been replaced by:

```text
TanStack Query
→ data
→ isPending
→ error
→ query cache / lifecycle
```

The project is currently at a natural transition point.

The next learning session should resume in **Project Mode**, with the immediate focus on:

```text
Tailwind
→ Weather / WeatherCard styling
→ mobile responsive layout
```

Do not continue deep standalone TanStack Query theory before the project requires it.

---

## Completed

Currently important completed work:

- Open-Meteo weather API integrated successfully
- `fetch` + `async/await` used in real project code
- HTTP error handling implemented with `response.ok`
- network failure vs HTTP error distinction understood
- manual loading / error UI implemented before abstraction
- seven handwritten weather objects replaced with `map`
- parallel API arrays transformed with a shared `index`
- API date converted into weekday display
- React list `key` uses the original full date rather than weekday label
- `WeatherCard` extracted into a separate component
- parent → child props implemented
- props destructuring understood and used
- `key` understood as React metadata rather than a normal prop
- Weather server state migrated from `useState + useEffect` to TanStack Query
- `QueryClient` and `QueryClientProvider` configured at app root
- basic TanStack Query query lifecycle explored experimentally
- `render` vs `refetch` distinguished with separate console probes
- `refetchOnWindowFocus` tested
- `staleTime` tested
- `gcTime` / inactive-cache mental model understood
- React lifecycle mental model refreshed using modern function-component concepts:
  - render
  - commit
  - effect
  - re-render
  - unmount / cleanup

---

## Currently Working On

Current mode:

> **PROJECT MODE**

The async prerequisite detour is complete enough for now.

Highest-value current work:

```text
Tailwind minimal setup
→ replace current inline styling
→ make Weather / WeatherCard responsive
```

After that:

```text
dynamic city
→ queryKey: ['weather', city]
→ city-specific weather queries
```

This will provide a real project reason to deepen TanStack Query rather than studying additional options in isolation.

---

## Current Architecture / Data Flow

### Relevant Files

Approximate active structure:

```text
src/
├── Weather.jsx
├── WeatherCard.jsx
├── weatherCode.js
├── App.jsx
└── main.jsx
```

### main.jsx

TanStack Query is provided near the app root:

```jsx
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)
```

Mental model:

```text
QueryClient
→ manages query cache + query state

QueryClientProvider
→ provides that client through React Context

useQuery
→ accesses the client
→ subscribes to / manages a query
```

Normally one app-level `QueryClient` is sufficient.

### Weather.jsx

Current responsibility:

```text
declare weather query
→ receive server data/status
→ transform API data
→ render WeatherCard list
```

Current core query:

```js
const { data, isPending, error } = useQuery({
  queryKey: ['weather'],
  queryFn: async () => {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-37.840935&longitude=144.946457&daily=weather_code,temperature_2m_max,temperature_2m_min"
    )

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const data = await response.json()
    return data
  }
})
```

The old manual server-state system has been removed.

There is no longer a need for:

```js
const [weather, setWeather] = useState(...)
const [loading, setLoading] = useState(...)
const [error, setError] = useState(...)

useEffect(() => {
  // weather fetch
}, [])
```

For this query:

```text
old weather state → data
old loading state → isPending
old error state   → error
```

### Weather Data Transformation

Open-Meteo supplies parallel arrays:

```text
daily.time
daily.weather_code
daily.temperature_2m_max
daily.temperature_2m_min
```

Current transformation:

```js
const weatherData = data?.daily?.time?.map((item, index) => {
  return {
    weatherDate: item,
    weatherCode: data?.daily?.weather_code?.[index],
    max: data?.daily?.temperature_2m_max?.[index],
    min: data?.daily?.temperature_2m_min?.[index]
  }
})
```

Current data flow:

```text
Open-Meteo
↓
queryFn Promise
↓
TanStack Query
↓
data
↓
weatherData transformation
↓
weatherData.map(...)
↓
WeatherCard props
↓
UI
```

### WeatherCard.jsx

Current props:

```text
weatherDate
weatherCode
max
min
```

Current responsibility:

- convert raw date to weekday display
- look up weather description
- look up weather image
- display max / min temperature
- own card-level presentation

Date display flow:

```text
"2026-08-31"
↓
new Date(weatherDate)
↓
getDay()
↓
weekdayCodes[index]
↓
"周一"
```

The original full date remains available in the parent and is used as the React `key`.

---

## Important Technical Decisions

### TanStack Query is now the server-state source of truth

The previous manual implementation was intentionally built first so that:

```text
fetch
loading
error
try/catch
response.ok
state update
re-render
```

were understood before introducing abstraction.

That prerequisite is now satisfied.

Keeping both manual `useEffect` fetching and `useQuery` would create two competing server-state systems and unnecessary duplicate requests.

### `useQuery` is not inside `useEffect`

`useQuery` is a Hook and is called at component top level.

TanStack Query has its own query lifecycle and decides when `queryFn` should run.

Mental model:

```text
React
→ controls component render lifecycle

TanStack Query
→ controls query / fetch lifecycle
```

A React re-render does not automatically mean `queryFn` runs again.

### Server-state lifetime is decoupled from Weather component lifetime

With local `useState`:

```text
Weather unmount
→ local weather state disappears
```

With TanStack Query:

```text
Weather unmount
→ query may become inactive
→ QueryClient can retain cached weather data
```

This is why `staleTime` and `gcTime` matter.

### Do not deepen TanStack Query without a project reason

Core concepts are sufficient for the current milestone.

Dynamic city weather will provide the next natural reason to learn:

```js
queryKey: ['weather', city]
```

and observe cache reuse across different query identities.

### UI work now has higher value than more async theory

The app functionality has progressed faster than the presentation layer.

The current UI still relies heavily on simple inline styles, so Tailwind + responsive layout is now a higher-priority gap than more Promise/TanStack theory.

---

## Known Problems / Technical Debt

- UI is still basic and not portfolio-ready
- inline styles should be replaced / reorganized
- mobile layout has not been properly designed
- city is still effectively fixed by hard-coded latitude / longitude
- no real city search / selection flow yet
- loading/error UI is functional but basic
- temporary console debugging probes should be removed after query experimentation
- temporary query options used for experiments should not automatically become production decisions
- request cancellation / abort behavior has not been explored
- broader component architecture has only been practiced at a basic `Weather → WeatherCard` level
- deployment / README have not yet been completed

---

## Knowledge Gaps Discovered

### Current / Next Knowledge Gap

#### Tailwind + Responsive UI

Current highest-priority gap:

- Tailwind mental model and minimum setup
- layout utilities
- spacing
- sizing
- typography
- borders / radius
- responsive breakpoints
- mobile-first design

This should be learned directly while improving the Weather App.

### Stable Enough — Do Not Restart

#### Callback

Current level:

- understands callback as a function passed for later execution
- understands function reference vs invocation
- understands async callback timing
- reproduced dependent callback nesting
- understands why callback hell becomes difficult to maintain
- understands callback itself is not inherently bad
- used callback-based XHR

Status:

> Sufficient for current project work. Not a current learning priority.

#### Promise

Current level:

- understands pending / fulfilled / rejected
- understands `.then()` returns a new Promise
- understands returned plain values
- understands missing return → `undefined`
- understands returned Promise adoption / flattening
- understands rejection propagation
- understands `.catch()` recovery vs rethrow
- understands Promise chaining

Status:

> Sufficient foundation. Reinforce later; do not restart.

#### fetch

Current level:

- understands fetch returns a Promise
- understands `Response`
- understands `response.json()` returns a Promise
- distinguishes network rejection from HTTP 404/500 responses
- uses `response.ok`
- uses explicit `throw` for unsuccessful HTTP responses

Status:

> Sufficient for current API work.

#### async / await

Current level:

- understands `async function` always returns a Promise
- understands `await` exposes the fulfilled value for local use
- understands current async function pauses rather than the whole runtime
- understands async/await does not replace Promise
- understands `try/catch`
- understands TanStack Query `queryFn` still returns a Promise

Status:

> Sufficient for current project work.

### Deferred Knowledge Gaps

React:

- `useEffect` cleanup
- dependency arrays in more complex real cases
- stale closures
- request cancellation
- more complex state ownership
- more complex component composition

Async JavaScript:

- deeper Event Loop / microtask cases
- sequential vs parallel requests
- Promise combinators when needed

TanStack Query:

- `isFetching`
- `refetchOnMount`
- retries
- manual refetch
- dynamic query keys in real use
- dependent queries in real use
- invalidation
- mutations
- prefetching
- cancellation

These should be introduced Just-in-Time.

---

## Next Recommended Step

1. **Introduce the minimum Tailwind setup and mental model, then convert the existing Weather / WeatherCard styling.**
2. **Make the Weather App responsive on mobile and desktop.**
3. **Then add dynamic city weather using `queryKey: ['weather', city]`.**

Do not restart callback / Promise / fetch / async-await teaching before these steps.

---

## Deliberately Deferred / Not Yet

Do not currently prioritize:

- deeper DOM study
- old class-component lifecycle methods
- advanced Event Loop theory
- additional callback drills
- additional basic Promise drills
- advanced TanStack Query APIs
- mutations
- query invalidation
- prefetching
- custom hooks purely for abstraction
- TypeScript
- testing
- large architecture refactors
- premature component splitting
- advanced React optimization
- `useMemo` / `useCallback` optimization work
- manual cache implementation

These can be introduced when the project or next project creates a real need.

---

## Resume Instruction

Resume in **Project Mode**, starting with Tailwind and responsive Weather / WeatherCard styling. Do not re-teach callback, basic Promise, fetch, async/await, manual loading/error handling, props, `key`, or basic TanStack Query from the beginning; those are sufficiently understood for current work. After the responsive UI milestone, add dynamic city weather and use `queryKey: ['weather', city]` to deepen TanStack Query through real project behavior.
