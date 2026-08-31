# Front-End Learning Status

> Single Source of Truth for my current Front-End learning status.
>
> This file records my **current level, active weaknesses, project progress, and next steps**.
> It is not a daily learning diary.
>
> Detailed project handoff state lives in `current-project.md`.

**Last Updated:** 2026-08-31

---

## 1. Long-Term Goal

My goal is not only to learn React syntax.

I want to gradually become a Front-End Developer who can:

- build front-end projects independently
- understand mechanisms instead of memorizing syntax
- debug systematically
- classify problems across JavaScript, React, browser/runtime, HTTP/network, API, tooling, and environment
- make reasonable engineering decisions
- explain technical concepts clearly in English interviews
- pass React / Front-End technical interviews
- get a Front-End / React-related IT job

Current high-level direction:

```text
JavaScript fundamentals
→ async JavaScript
→ React mental model
→ API fetching
→ production API handling
→ server state
→ TanStack Query
→ component architecture
→ styling / responsive UI
→ forms / routing / CRUD
→ TypeScript
→ testing
→ larger projects
→ interview preparation
```

---

## 2. Current Learning Model

Primary method:

> **Project-Based Learning + Just-in-Time Learning**

```text
Build a real project
→ encounter a knowledge gap
→ isolate the concept
→ minimal experiment
→ correct mental model
→ return to project
→ apply it
```

Current role split:

- **Project Sensei** — main daily Front-End teacher, project progression, learning-mode detours, code review, next-step decisions
- **Debug Sensei** — concrete runtime/environment/network/npm/Vite/Git debugging

Rule:

> Do not pause the project for broad theory unless the theory is a real blocker.

---

## 3. Current Learning Stage

The previous stage **“Async JavaScript is the highest priority” is now outdated**.

Async JavaScript is no longer the main blocker.

Current stage:

> **React project engineering + server-state integration + UI/responsive development**

Current highest priority:

```text
finish the current Weather App milestone
→ Tailwind
→ responsive mobile UI
→ dynamic city + dynamic queryKey
→ complete / polish / deploy
```

Async concepts should now be reinforced Just-in-Time rather than studied as a long standalone sequence.

---

## 4. React Knowledge

### Comfortable / Basically Understood

Used successfully in projects:

- JSX
- JavaScript expressions inside JSX
- `useState`
- controlled inputs
- common event handlers
- `map`
- `filter`
- conditional rendering
- default / named exports
- component extraction
- basic props
- destructuring props
- basic `key`
- optional chaining

### Current Render Mental Model

```text
state / props / subscribed external state changes
→ React may schedule re-render
→ component function executes again
→ React calculates new JSX
→ React commits only necessary DOM changes
```

Understood distinctions:

```text
render
≠
DOM update

re-render
≠
refetch
```

### Lifecycle

Current function-component model:

```text
Mount / initial render
→ render
→ commit
→ effect

Update
→ re-render
→ commit necessary changes
→ relevant effects may run

Unmount
→ component leaves tree
→ cleanup where relevant
```

The old class-component lifecycle model (`constructor`, `componentDidMount`, etc.) is not the primary learning model.

Still needs later reinforcement:

- dependency arrays
- reactive values
- cleanup
- stale closures
- closure across renders
- request cancellation

---

## 5. Callback Knowledge

Current status:

> **Basic callback mental model is sufficiently understood for current project work. Not a current priority.**

Understood and demonstrated:

- callback = function passed for later execution
- function reference vs immediate invocation
- asynchronous callback timing
- outer function cannot synchronously return a value produced later by an async callback
- dependent callback nesting
- why callback hell hurts readability / maintainability
- callback itself is not inherently bad

Evidence includes independently writing dependent nested flow:

```text
getUser
→ getPosts(user.id)
→ getComments(posts[0])
```

and using callback-based `XMLHttpRequest`.

Do not continue repetitive callback drills unless a real gap appears.

---

## 6. XMLHttpRequest and Runtime Knowledge

A real callback-based HTTP request has been written using `XMLHttpRequest`.

Understood:

```text
JavaScript language
≠
runtime environment
```

`XMLHttpRequest` is a Browser Web API, not a JavaScript-language primitive.

Therefore:

```text
XMLHttpRequest is not defined
```

under Node is primarily a runtime / Web API mismatch.

XHR is useful historical/prerequisite knowledge, not the current production API approach.

---

## 7. Promise Knowledge

Current status:

> **Promise fundamentals are sufficiently understood for React/API project work. Reinforce rather than restart.**

Understood:

- Promise represents eventual async result
- `pending / fulfilled / rejected`
- `fetch()` returns a Promise
- `response.json()` returns a Promise
- every `.then()` returns a new Promise
- plain return value becomes next fulfillment value
- no return → fulfillment with `undefined`
- returning another Promise causes adoption / flattening rather than nested `Promise<Promise>`
- throw / rejection propagates through a chain
- fulfillment handlers are skipped after rejection until an error handler
- `.catch()` handles rejection
- returning normally from `catch` recovers the chain
- throwing from `catch` keeps it rejected

Current gaps are secondary:

- independent reproduction after time away
- exact Event Loop / microtask timing in harder cases
- Promise combinators when a project needs them

The old status saying returned-Promise behavior, rejection propagation, and `.catch()` are major current weaknesses is outdated.

---

## 8. fetch / HTTP Knowledge

Current status:

> **Basic fetch + HTTP error handling is understood and has been implemented manually.**

Understood:

```text
network-level failure
→ fetch Promise rejects
→ catch can receive the error
```

versus:

```text
server returns HTTP 404 / 500
→ fetch can still fulfill with Response
→ response.ok is false
→ application should throw if this counts as failure
```

Working pattern:

```js
const response = await fetch(url)

if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`)
}

const data = await response.json()
```

Manual loading/error handling was implemented before moving to TanStack Query.

This is no longer a prerequisite blocker.

---

## 9. async / await Knowledge

Current status:

> **Basic async/await is sufficiently understood for current work.**

Understood:

- `async function` always returns a Promise
- `return value` from async function becomes fulfilled Promise value
- `await` consumes Promise-based values
- `await` suspends the current async function, not the whole runtime
- async/await does not replace Promise
- `try/catch` handles rejected awaits / thrown errors
- a `catch` with no rethrow treats the error as handled
- async query functions still return Promises even when code looks synchronous

TanStack Query connection understood:

```text
queryFn returns Promise<data>
→ TanStack Query waits for it
→ resolved value becomes useQuery().data
```

Current secondary gaps:

- sequential vs parallel async work
- deeper Event Loop / microtask reasoning

The old status saying async/await and try/catch are current major weaknesses is outdated.

---

## 10. Event Loop Knowledge

Current practical model is sufficient for now:

```text
current synchronous work
→ microtasks (Promise.then / await continuation)
→ tasks such as timers
```

Basic nested-microtask ordering has been predicted correctly.

Do not turn Event Loop into a long standalone study topic now.

Return to it when debugging timing or interview preparation requires more depth.

---

## 11. Data Transformation Skills

Current status has improved materially.

Successfully used in Weather App:

- `map`
- shared `index`
- parallel arrays → array of objects
- object construction
- props data shaping
- `Date`
- `.getDay()`
- weekday-code lookup

Weather App refactor completed:

```text
7 handwritten weather objects
→ one map transformation
```

Still worth reinforcing in future projects:

- destructuring
- normalization of more complex APIs
- deriving data cleanly without unnecessary state
- extracting transformation helpers when complexity justifies it

The old status saying this refactor is still pending is outdated.

---

## 12. Component Design Skills

Current status:

> **Basic component extraction + props are now understood through real project use, but broader architecture still needs practice.**

Weather App evidence:

```text
Weather
→ server/query + data transformation + list rendering

WeatherCard
→ one day's presentation
```

Understood:

- parent → child props
- props are a normal object parameter
- parameter destructuring
- component responsibility
- extracting repeated UI into a component
- React `key` is special metadata and is not passed as a normal prop
- stable identity is preferable to index when available
- full date is a better key than weekday label

Still needs future practice:

- state ownership
- more complex component boundaries
- reusable composition patterns
- folder organization at larger scale

---

## 13. Production API Handling

Manual implementation has covered:

- loading state
- error state
- `try/catch`
- `response.ok`
- network failure vs HTTP unsuccessful response
- success / loading / error conditional UI

These are no longer “not yet implemented”.

Still incomplete:

- request cancellation / AbortController
- retries as an explicit design decision
- richer loading/refetch UX
- race-condition awareness
- production error messaging

TanStack Query now manages the Weather server-state lifecycle.

---

## 14. TanStack Query

Current status:

> **Formally started and successfully integrated into Weather App. Core mental model is developing well.**

Observed installed version:

```text
@tanstack/react-query@5.101.4
```

### Provider Setup

Understood prerequisite:

```text
QueryClient
→ manages query cache + query state

QueryClientProvider
→ exposes QueryClient through React Context

useQuery
→ reads that client and subscribes to a query
```

The Weather App now has one app-level QueryClient provided near the root.

Future library-setup rule:

> Before first use of a third-party Hook that depends on Provider / Context setup, explain the minimum required provider/client setup and why.

### Server-State Migration

The Weather App has migrated from:

```text
useState(weather/loading/error)
+ useEffect
+ fetch
+ setWeather/setLoading/setError
```

to:

```text
useQuery
→ data
→ isPending
→ error
```

For this query, TanStack Query is now the single source of server state.

### Core Query Mental Model

Understood:

```text
queryKey
→ query identity

queryFn
→ how data is obtained
```

Multiple independent queries are not automatically sequential.

Dependent queries require explicit dependency control when needed.

### Render vs Query Execution

Experimentally distinguished:

```text
Weather render
≠
queryFn execution
```

A component may re-render without refetching.

### Refetch Behavior

Window-focus experiment verified:

```text
stale query
+ window focus
→ may refetch
```

and:

```js
refetchOnWindowFocus: false
```

disabled that trigger.

### staleTime

Understood:

```text
fresh
→ cache considered current

stale
→ cache can still be displayed
→ but an appropriate trigger may cause background refetch
```

### gcTime / Inactive Cache

Understood conceptually:

```text
component unmount
→ query may become inactive
→ QueryClient cache may remain
→ gcTime controls later garbage collection
```

Important architectural understanding:

> Server-state lifetime can outlive one component instance.

This is a major difference from local component `useState`.

### Still to Learn Just-in-Time

Do not expand all of TanStack Query now.

Later project-driven topics:

- `isFetching`
- `refetchOnMount`
- retries
- manual `refetch`
- dynamic query keys
- invalidation
- mutations
- dependent queries in real use
- prefetching
- query cancellation

Highest-value next reinforcement will come from dynamic city weather:

```js
queryKey: ['weather', city]
```

---

## 15. Current Project — Weather App

The Weather App remains the active main project.

Detailed state is in:

```text
current-project.md
```

Current completed milestone:

```text
basic API fetch
→ manual loading/error handling
→ 7-day data transformation
→ Date / weekday
→ key
→ WeatherCard + props
→ TanStack Query migration
→ core query lifecycle experiments
```

The project is not blocked.

It is paused at a natural transition point because the next highest-value work is UI / responsive engineering.

Next project sequence:

```text
Tailwind minimal setup
→ Weather / WeatherCard styling
→ mobile-responsive layout
→ dynamic city
→ queryKey ['weather', city]
→ project polish
→ deploy / README
```

Do not continue deep TanStack Query theory before the project requires it.

---

## 16. CSS / Tailwind / Responsive UI

This is now a **current high-priority gap**.

The Weather App still relies on basic inline styles and has not yet been developed into a polished responsive UI.

Next learning should cover only practical project needs:

- Tailwind setup
- flex / grid
- spacing
- width / max-width
- typography
- borders / radius
- responsive breakpoints
- mobile-first layout

Goal:

> Make the Weather App work and look reasonable on desktop and mobile before moving too far into advanced query features.

---

## 17. Git and Environment

Basic Git workflow has been used:

```bash
git init
git status
git add .
git commit
git push
```

Basic workflow is usable; Git internals are not a current priority.

Current Node setup previously recorded:

```text
Node v22.23.1
default -> 22
```

Environment/runtime debugging remains delegated to Debug Sensei when it becomes concrete.

---

## 18. Debugging Mental Model

Preferred process:

```text
symptom
→ inspect / reproduce
→ classify layer
→ form hypothesis
→ smallest test
→ confirm
→ fix
→ verify
→ explain root cause
```

Recent useful classifications:

```text
XMLHttpRequest is not defined
→ Browser Web API / runtime mismatch
```

```text
No QueryClient set
→ TanStack Query provider/setup prerequisite
```

```text
404 / 500 with fetch
→ HTTP response problem, not necessarily fetch rejection
```

```text
queryFn logs repeatedly
→ inspect query lifecycle / refetch triggers
```

A useful experiment used separate logs for:

```text
component render
vs
queryFn execution
```

to avoid confusing re-render with refetch.

---

## 19. Current Weaknesses — Priority Order

### A. UI / Responsive Front-End Work — Highest Priority

- Tailwind
- practical CSS layout
- responsive mobile design
- visual polish
- translating a working React UI into a presentable project

### B. React Project Architecture

- state ownership in more complex cases
- component boundaries beyond a simple card
- props design
- reusable component patterns
- forms
- routing in real project behavior

### C. TanStack Query — Practical Next Level

Core concepts are started; next gaps should be project-driven:

- dynamic query keys
- `isFetching`
- cache reuse across city changes
- refetch controls
- invalidation / mutations later

### D. useEffect / Closure — Secondary

Still needs practice:

- dependency arrays
- cleanup
- stale closures
- request cancellation

These are no longer the main project path because Weather fetching has moved to TanStack Query.

### E. Async JavaScript — Maintenance, Not Main Priority

Keep reinforcing:

- Event Loop / microtasks
- sequential vs parallel work
- Promise combinators when needed

Do not restart callback/Promise basics unless evidence shows regression.

---

## 20. Recommended Next Learning Sequence

Current sequence:

```text
1. Tailwind minimal setup
2. refactor Weather / WeatherCard styling
3. mobile-responsive Weather App
4. dynamic city input / selection
5. queryKey ['weather', city]
6. observe cache / stale / refetch behavior across cities
7. finish Weather App UI and error/loading polish
8. deploy + README
9. start a second more realistic React project
10. introduce forms / routing / CRUD as that project requires
11. TypeScript
12. testing
13. interview preparation alongside projects
```

Possible later TanStack Query topics should be introduced only when the project gives them a reason.

---

## 21. Current Readiness Snapshot

Current rough learning-stage estimate:

```text
JavaScript / async foundation      ~75–80%
React fundamentals                ~65–70%
API / server-state fundamentals   ~65–70%
Component / props basics          ~55–60%
CSS / responsive / Tailwind       ~25–30%
Real-project completeness         ~40–45%
Overall path to initial applying  ~43–48%
```

These are directional estimates, not exam scores.

The major current transition is:

> Learning has moved from mainly async prerequisites toward integrating real React project architecture, server-state tooling, and UI engineering.

---

## 22. Preferred Teaching Style

Act primarily as:

> **Senior Front-End Developer + Project Mentor + Technical Interview Coach**

Preferences:

- explain mainly in Chinese
- keep important technical terms in English
- for genuinely new chapters, first give a concise map: what / why / key parts / relationships
- then use minimal experiments
- do not immediately rewrite the whole solution
- prefer observation → question → hint → learner modification → review
- move faster once the mental model is sufficient
- do not over-drill concepts already demonstrated
- connect concepts to real project needs
- teach why a technology exists, not only syntax
- distinguish partially correct from fully correct reasoning
- train debugging classification continuously

For library/framework hooks that depend on global Provider / Context setup:

```text
before first hook use
→ explain required provider/client
→ where it goes
→ why it is required
```

Keep prerequisite setup concise.

---

## 23. Learning Memory Maintenance Rules

This file is the **Single Source of Truth** for overall Front-End learning status.

Rules:

1. Describe the present, not the full history.
2. Do not use this as a daily learning diary.
3. Update roughly weekly or after a meaningful milestone.
4. Actual coding, explanation, reproduction, and debugging performance outweigh labels such as “understood”.
5. Remove weaknesses that are no longer current blockers.
6. Reintroduce a weakness if later evidence shows regression.
7. Keep detailed project handoff state in `current-project.md`.
8. Keep workflow rules separately from learning-state facts.
9. Keep the structure reasonably stable.
10. Prefer current priorities over preserving outdated learning sequences.

---

## 24. Current Immediate Next Step

```text
next learning day
→ Tailwind minimal setup
→ convert WeatherCard / Weather layout
→ responsive mobile pass
→ then dynamic city + dynamic queryKey
```

Do not restart callback / Promise / async-await from the beginning.

The Weather App remains the main project driver.
