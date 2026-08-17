# Front-End Learning Status

> Single Source of Truth for my current Front-End learning status.
>
> This file records my **current level, active weaknesses, project progress, and next steps**.
> It is not a daily learning diary.
>
> Detailed AI collaboration rules live in `AI_WORKFLOW.md`.

**Last Updated:** 2026-08-17

---

## 1. Long-Term Goal

My goal is not only to learn React syntax.

I want to gradually become a Front-End Developer who can:

- build front-end projects independently
- understand the mechanisms behind the code instead of memorizing syntax
- debug systematically
- identify whether a problem belongs to JavaScript, React, browser/runtime, HTTP/network, API, tooling, or environment
- make reasonable engineering decisions
- explain technical concepts clearly in English interviews
- pass React / Front-End technical interviews
- get a Front-End / React-related IT job

Current high-level learning direction:

```text
JavaScript fundamentals
→ async JavaScript
→ React fundamentals and mental model
→ API fetching
→ production API handling
→ server state
→ TanStack Query
→ component architecture
→ TypeScript
→ testing
→ larger projects
→ interview preparation
```

---

## 2. Current Learning Model

My learning is primarily:

> **Project-Based Learning + Just-in-Time Learning**

Main pattern:

```text
Build a real project
→ encounter a knowledge gap
→ isolate the concept
→ reproduce it with a minimal experiment
→ build a correct mental model
→ return to the project
→ apply it
```

I do not need to finish every JavaScript / React topic before building projects.

The current Project Sensei handles both:

- **Project Mode** — build and progress real projects
- **Learning Mode** — temporarily isolate and reproduce concepts discovered during project work

Concrete debugging problems are handled separately by Debug Sensei.

See `AI_WORKFLOW.md` for detailed workflow rules.

---

## 3. Current Learning Stage

### Highest Priority: Async JavaScript

Currently learning / reinforcing:

- callback mental model
- callback execution timing
- callback hell
- Promise basics
- Promise chaining
- Promise return values
- returned Promise behavior
- rejection propagation
- `.catch()`
- `async / await`
- `try / catch`
- Event Loop basics
- microtask queue basics

These concepts are being learned because they directly support React API work and the Weather App.

---

## 4. React Knowledge

### Comfortable / Basically Understood

I have already used or basically understand:

- JSX
- JavaScript expressions inside JSX with `{}`
- `useState`
- controlled inputs
- `onClick`
- `onChange`
- `onKeyDown`
- Enter-to-add behavior
- `map`
- `filter`
- deleting list items
- conditional rendering with `&&`
- `onFocus`
- `onBlur`
- default export
- named export

### State Mental Model

```text
setState(...)
→ state changes
→ React re-renders the component
→ component function runs again
→ UI reflects the new state
```

I understand that changing a normal variable such as:

```js
let weather = ...
```

does not notify React that the UI needs to update.

---

## 5. useEffect Mental Model

Current basic model:

```text
render
→ DOM commit
→ effect runs
→ external work (for example fetch)
→ setState
→ re-render
```

I understand that:

- `useEffect(..., [])` commonly runs after initial mount
- `useEffect` should not simply be memorized as `componentDidMount`
- a useful mental model is:

> Effects synchronize a component with an external system.

Examples:

- APIs
- timers
- subscriptions
- DOM APIs

Still needs more practice:

- dependency arrays
- reactive values
- cleanup
- effect timing
- stale closures
- relationship between render and closure

---

## 6. JavaScript Scope and Closure

### Scope

I understand:

- global scope
- function scope
- block scope
- local variables
- inner scope can normally access outer variables
- outer scope cannot access variables that only exist inside an inner scope
- scope and variable lifetime are related but different concepts

### Closure

Current mental model:

> A function can retain access to variables from the lexical scope where it was created.

I understand that closures are relevant to:

- callbacks
- event handlers
- async operations
- React event handlers
- effects
- React renders

Still needs more practice:

- closure across React renders
- stale closure
- closure + dependency array interactions

---

## 7. Callback Knowledge

Current mental model:

> A callback is a function passed into another function or system so that it can be executed at an appropriate time.

I understand the difference between:

```js
successCallback
```

and:

```js
successCallback()
```

The first passes the function itself.

The second invokes the function immediately.

Interview-ready explanation:

> We pass the function itself as a callback instead of invoking it immediately, because we want it to run later when the asynchronous operation completes.

I have already created callback experiments under approximately:

```text
src/
└── learning/
    └── api-fetching/
        ├── 01-callback-basic.js
        ├── 01.1-xhr-test.html
        ├── 01.1-XMLHttpRequest.js
        ├── 02-callback-hell.js
        └── 03-promise-basic.js
```

Current goal:

- reproduce callback flow myself
- experience callback nesting
- understand why Promise improves async composition and readability

---

## 8. XMLHttpRequest and Runtime Knowledge

I have written a real callback-based HTTP request using `XMLHttpRequest` and successfully requested:

```text
https://jsonplaceholder.typicode.com/posts/1
```

in a browser environment.

Important debugging lesson:

```text
JavaScript language
≠
runtime environment
```

`XMLHttpRequest` is a Browser Web API.

It is not part of the JavaScript language itself and is not automatically available in Node.js.

Therefore:

```text
XMLHttpRequest is not defined
```

when executed through Node is primarily a:

> **Runtime / Web API mismatch**

not a React problem.

Important mental model:

> API availability depends on the runtime environment.

---

## 9. Promise Knowledge

Current mental model:

> A Promise is an object that represents the eventual result of an asynchronous operation.

Promise states:

```text
pending
fulfilled
rejected
```

I understand that:

```js
fetch(url)
```

returns a Promise rather than the final response data.

### Promise Chaining

I understand:

- `fetch()` returns a Promise
- that Promise can fulfill with a `Response`
- `response.json()` returns another Promise
- `.then()` always returns a new Promise
- the next `.then()` receives the value produced by the previous step
- if a callback returns a plain value, the new Promise fulfills with that value
- if a callback returns nothing, the new Promise fulfills with `undefined`

Interview-ready explanation:

> Each `.then()` returns a new Promise, and the next `.then()` receives the value produced by the previous callback.

Still needs reinforcement:

- returning another Promise from `.then()`
- Promise flattening / adoption behavior
- rejection propagation
- `.catch()`
- exact execution timing
- microtasks

---

## 10. async / await Knowledge

I understand:

- `await` is used with Promise-based values
- `await` normally appears inside an `async function`
- an `async function` always returns a Promise
- async/await does not replace Promises
- async/await is another way to consume and compose Promise-based work

Current mental model:

```text
Promise
├── .then() / .catch()
└── async / await / try-catch
```

Interview-ready explanation:

> Async/await makes Promise-based asynchronous code easier to read and reason about.

I understand that:

```js
const response = await fetch(url)
```

does not block the entire JavaScript runtime.

More accurately:

> Execution of the current async function is suspended until the awaited Promise settles, while the runtime can continue processing other work.

Still needs more practice:

- error propagation
- `try/catch`
- sequential vs parallel async work
- Event Loop / microtask relationship

---

## 11. Current Project — Weather App

Current main project:

```text
Weather App
```

Current technologies / concepts:

- React
- `useState`
- `useEffect`
- `fetch`
- async / await
- Open-Meteo API
- optional chaining
- weather-code mapping
- `map`
- API data rendering

Current API data includes approximately:

```text
daily.weather_code
daily.temperature_2m_max
daily.temperature_2m_min
daily.time
```

I understand access patterns such as:

```js
weather.daily.weather_code
weather.daily.temperature_2m_max
weather.daily.temperature_2m_min
```

and:

```js
weatherCodes[code]?.day?.description
weatherCodes[code]?.day?.image
```

### Current Technical Debt / Next Tasks

The 7-day transformed data is still partly handwritten.

The next important refactor is moving toward:

```js
weather.daily.time.map((date, index) => {
  return {
    // transformed weather data
  }
})
```

Upcoming project tasks:

- transform parallel API arrays with `map`
- parallel arrays → array of objects
- Date / weekday conversion
- React `key`
- extract `WeatherCard`
- props
- loading state
- error state
- `try/catch`
- `response.ok`
- dynamic city
- `useEffect` dependencies
- cleanup / request cancellation basics
- later refactor with TanStack Query

---

## 12. Optional Chaining

I understand the Optional Chaining Operator:

```js
?.
```

Example:

```js
weather?.daily?.temperature_2m_max?.[0]
```

If one of the accessed values is `null` or `undefined`, optional chaining stops and evaluates to `undefined`.

Important limitation:

Optional chaining does not protect an identifier that has never been declared.

An undeclared variable can still cause:

```text
ReferenceError
```

---

## 13. Data Transformation Skills

This is currently an important bridge between JavaScript fundamentals and real React API work.

Needs continued reinforcement:

- `map`
- `filter`
- indexes
- object transformation
- multiple parallel arrays → array of objects
- destructuring
- Date
- API data normalization
- extracting reusable transformation logic

---

## 14. Component Design Skills

Still needs to be learned or strengthened:

- props
- component extraction
- reusable components
- separation of concerns
- React `key`
- state ownership
- component responsibility
- basic folder organization

Current rule:

> Do not over-engineer these concepts before the fundamentals are stable.

---

## 15. Production API Handling

Not yet fully mastered:

- loading state
- error state
- `try/catch`
- `response.ok`
- rejected Promise vs unsuccessful HTTP response
- HTTP errors vs JavaScript errors
- request cleanup / abort
- retry concepts
- caching
- stale data
- refetching

These should first be implemented manually before relying heavily on higher-level abstractions.

---

## 16. TanStack Query

TanStack Query is already installed:

```bash
npm i @tanstack/react-query
```

Current high-level understanding:

> TanStack Query is primarily used to manage server state.

It helps with:

- fetching
- loading
- errors
- caching
- stale data
- refetching
- request deduplication

I have not formally started using `useQuery`.

Current rule:

> Do not jump into TanStack Query until I have manually implemented and understood fetch + React state + loading + error handling.

---

## 17. Git and Environment

### Git

I have already used:

```bash
git init
git status
git add .
git commit
git push
```

GitHub:

```text
username: bunkeen
repository: react-learning
```

I understand the basic workflow, but Git internals are not yet strong.

### Node

I previously experienced Node 18 environment issues.

Current setup:

```text
Node v22.23.1
default -> 22
```

Known nvm versions have included:

```text
v18.20.8
v22.0.0
v22.23.1
v24.16.0
```

---

## 18. Debugging Mental Model

A major learning goal is to classify the problem before fixing it.

Examples:

```text
data is not defined
→ JavaScript / scope / identifier
```

```text
normal variable changes but UI does not update
→ React state / render
```

```text
XMLHttpRequest is not defined
→ runtime / Browser Web API
```

```text
API returns 404 / 500
→ HTTP / server / endpoint
```

```text
npm / Vite fails before the app runs
→ tooling / dependency / environment
```

Preferred debugging process:

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

Concrete debugging work may be moved to Debug Sensei to avoid overloading the main Project chat.

---

## 19. Current Weaknesses — Priority Order

### A. Async JavaScript

Highest priority:

- callback execution timing
- callback hell
- Promise chaining
- Promise return / resolved values
- returned Promise behavior
- Promise rejection propagation
- `.catch()`
- async / await
- try / catch
- Event Loop
- microtask queue

### B. React Mental Model

Need to strengthen:

```text
render
→ commit
→ effect
→ state update
→ re-render
→ cleanup
```

Also:

- component function runs again on render
- closure and renders
- stale closure
- dependency arrays
- effect cleanup

### C. Data Transformation

Need practice with:

- map
- indexes
- object transformation
- destructuring
- Date
- API data normalization

### D. Component Design

Need practice with:

- props
- reusable components
- component extraction
- state ownership
- separation of concerns
- `key`

### E. Production API Handling

Need later:

- loading
- error
- try/catch
- response.ok
- abort / cleanup
- TanStack Query

---

## 20. Recommended Next Learning Sequence

Do not skip prerequisites, but keep the sequence connected to the current project.

```text
1. confirm callback mental model
2. reproduce callback hell
3. Promise basic
4. Promise chaining
5. returned Promise behavior
6. async / await
7. try / catch
8. Event Loop / microtask basics
9. return to Weather App
10. map 7-day weather data
11. Date / weekday
12. React key
13. WeatherCard + props
14. loading / error
15. response.ok
16. useEffect dependencies / cleanup
17. TanStack Query
18. Weather App refactor / completion
```

Later:

```text
custom hooks
→ React Router
→ forms
→ TypeScript
→ testing
→ larger projects
→ interview preparation
```

The Project Sensei may change the order when actual project evidence shows a more useful prerequisite or next step.

---

## 21. Preferred Teaching Style

Act primarily as:

> Senior Front-End Developer + Project Mentor + Technical Interview Coach

Preferences:

- explain mainly in Chinese
- keep important technical terms in English
- provide natural interview-ready English explanations
- do not immediately give full solutions unless I am clearly stuck
- prefer questions, hints, experiments, and reproduction
- distinguish partially correct answers from fully correct answers
- connect concepts through prerequisites and real engineering needs
- explain why a technology exists, not only its syntax
- reconcile tutorials with current practice when relevant
- occasionally comment on naming, structure, formatting, and maintainability
- train debugging classification continuously

For conceptual gaps, preferred loop:

```text
concept
→ minimal experiment
→ prediction
→ run
→ observe
→ explain
→ revise mental model
→ variation
→ apply back to project
```

I prefer this over large amounts of random coding exercises.

---

## 22. AI Workflow Summary

Detailed workflow is stored separately in:

```text
GPT_memory/frontend-learning/AI_WORKFLOW.md
```

Current system:

### Project Sensei

Main daily teacher.

Responsibilities:

- Project development
- concept learning
- minimal reproduction experiments
- code review
- next-step decisions
- project progression
- periodic learning-status updates

### Debug Sensei

Specialist for concrete debugging work:

- errors
- screenshots
- runtime problems
- browser vs Node
- HTTP / Network
- API failures
- npm / Vite
- Git
- environment

A permanent Mentor chat is not required.

When strategic review is needed, a fresh temporary chat can review the latest `learning-status.md` and optionally `current-project.md`.

---

## 23. Learning Memory Maintenance Rules

This file is the **Single Source of Truth** for my overall Front-End learning status.

Rules:

1. Do not maintain competing learning-status files.
2. This file describes the **present**, not the full history.
3. It is not a daily learning diary.
4. Update roughly once a week or after a meaningful milestone.
5. Git history preserves older versions.
6. Remove outdated weaknesses after they are genuinely mastered.
7. Downgrade a skill if real evidence shows it is less stable than previously believed.
8. Update Current Project and Next Steps when the project materially changes.
9. Keep detailed workflow rules in `AI_WORKFLOW.md`.
10. Keep detailed project handoff state in `current-project.md`.
11. Keep the structure reasonably stable instead of endlessly adding sections.
12. Actual coding, explanation, reproduction, and debugging performance are stronger evidence than labels such as “understood”.

---

## 24. Current Immediate Next Step

Current recommended continuation point:

```text
confirm callback mental model
→ reproduce callback hell
→ understand why nested callbacks become difficult to maintain
→ refactor the same problem with Promise
→ strengthen Promise chaining
→ strengthen returned Promise behavior
→ strengthen async / await
→ add try/catch
→ learn Event Loop / microtask basics at a practical level
→ return to Weather App
```

The current project remains the main driver of learning.
