# Front-End Learning Status

> Single Source of Truth for my current front-end learning status.
>
> This file records my **current level, active weaknesses, project progress, and next steps**.
> It is not a daily learning diary.
>
> Recommended maintenance: update roughly once a week, or whenever a meaningful learning milestone is reached.

**Last Updated:** 2026-08-17

---

## 1. Long-Term Goal

My goal is not only to learn React syntax.

I want to gradually become a front-end developer who can:

- build front-end projects independently
- understand the mechanisms behind the code instead of memorizing syntax
- debug systematically
- identify whether a problem belongs to JavaScript, React, browser/runtime, HTTP/network, API, tooling, or environment
- explain technical concepts clearly in English interviews
- pass React / Front-End technical interviews
- get a Front-End / React-related IT job

Current main learning path:

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
→ complete projects
→ interview preparation
```

---

## 2. Current Learning Stage

### Currently Learning

My highest-priority area is currently:

- callbacks
- callback execution timing
- callback hell
- Promise basics
- Promise chaining
- async / await
- Promise return values
- error propagation
- try / catch
- Event Loop and microtask basics

I am also continuing to apply these concepts inside my React Weather App.

---

## 3. React Knowledge

### Comfortable / Basically Understood

I have already used or basically understand:

- JSX
- `{}` for entering JavaScript expressions inside JSX
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

Core React state mental model:

```text
setState(...)
→ state changes
→ React re-renders the component
```

I understand that changing a normal variable such as:

```js
let weather = ...
```

does not notify React to re-render.

### useEffect

I currently understand this basic lifecycle:

```text
component render
→ DOM commit
→ effect runs
→ fetch
→ setState
→ re-render
```

I understand that:

- `useEffect(..., [])` commonly runs after the initial mount
- `useEffect` should not simply be memorized as `componentDidMount`
- a better mental model is:

> Effects synchronize a component with an external system.

Examples:

- APIs
- timers
- subscriptions
- DOM APIs

Still needs more practice:

- cleanup
- dependency arrays
- reactive values
- stale closures
- effect timing

---

## 4. JavaScript Scope and Closure

### Scope

I understand:

- global scope
- function scope
- block scope
- local variables

I understand that inner scopes can normally access outer variables, but outer scopes cannot access variables that only exist inside an inner scope.

I have also started distinguishing:

- scope
- variable lifetime

### Closure

Current mental model:

> A function can remember variables from the lexical scope where it was created.

I understand that if an inner function still references an outer variable, that relevant data may remain reachable even after the outer function has returned.

I know closures are important in:

- event handlers
- effect callbacks
- async callbacks
- React renders

Still needs more practice:

- closure across React renders
- stale closure

---

## 5. Callback Knowledge

Current mental model:

> A callback is a function passed into another function so that it can be executed later by that function or system.

I understand the difference between:

```js
successCallback
```

and:

```js
successCallback()
```

The first passes the function itself.

The second invokes it immediately.

Interview-ready explanation:

> We pass the function itself as a callback instead of invoking it immediately, because we want it to run later when the asynchronous operation completes.

I have already built callback experiments under approximately this structure:

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

---

## 6. XMLHttpRequest and Runtime Knowledge

I have written a real callback-based HTTP request using `XMLHttpRequest`.

I successfully used a browser environment to request:

```text
https://jsonplaceholder.typicode.com/posts/1
```

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

when running the file through Node is a **runtime / Web API mismatch**, not a React problem.

This is an important debugging mental model:

> API availability depends on the runtime environment.

---

## 7. Promise Knowledge

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

I also understand:

> Fetch is a Promise-based API because calling `fetch()` returns a Promise.

### Promise Chaining

I have worked with chains similar to:

```js
const promise1 = fetch(url)

const promise2 = promise1.then(function (response) {
  return response.json()
})

const promise3 = promise2.then(function (data) {
  console.log(data)
})
```

Current understanding:

- `promise1` eventually fulfills with a `Response`
- `response.json()` returns another Promise
- `.then()` always returns a new Promise
- the next `.then()` receives the value returned by the previous callback
- if a `.then()` callback returns nothing, the next Promise fulfills with `undefined`

Interview-ready explanation:

> Each `.then()` returns a new Promise, and the next `.then()` receives the value returned by the previous callback.

Still needs reinforcement:

- Promise flattening / returned Promise behavior
- rejection propagation
- `.catch()`
- exact execution timing

---

## 8. async / await Knowledge

I understand:

- `await` consumes / waits for a Promise result inside an async flow
- `await` normally appears inside an `async function`
- an `async function` always returns a Promise
- async/await does not replace Promises

Current mental model:

```text
Promise
├── .then() / .catch()
└── async / await
```

Interview-ready explanation:

> Async/await makes Promise-based asynchronous code easier to read and reason about.

I also understand that:

```js
const response = await fetch(url)
```

does **not** block the entire JavaScript runtime.

More accurately:

> Execution of the current async function is suspended until the Promise settles, while the runtime can continue processing other work.

Still needs more practice.

---

## 9. Weather App Project

Current project:

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

### Current Technical Debt / Next Project Tasks

The 7-day transformed data is still partly handwritten.

The next important refactor is moving toward:

```js
weather.daily.time.map((date, index) => {
  return {
    // transformed weather data
  }
})
```

Upcoming tasks:

- transform 7-day API arrays with `map`
- understand parallel arrays → object array transformation
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

## 10. Optional Chaining

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

## 11. Data Transformation Skills

Needs continued reinforcement:

- `map`
- `filter`
- array indexes
- object transformation
- multiple parallel arrays → array of objects
- destructuring
- Date
- extracting reusable transformation logic

This is currently an important bridge between JavaScript fundamentals and real React API work.

---

## 12. Component Design Skills

Still needs to be learned or strengthened:

- props
- component extraction
- reusable components
- separation of concerns
- `key`
- state ownership
- component responsibility
- basic folder organization

Do not over-engineer these concepts before the current fundamentals are stable.

---

## 13. Production API Handling

Not yet fully mastered:

- loading state
- error state
- `try/catch`
- `response.ok`
- rejected requests
- HTTP errors vs JavaScript errors
- request cleanup / abort
- retry concepts
- caching
- stale data
- refetching

These should be learned manually before relying on higher-level abstractions.

---

## 14. TanStack Query

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

I have not yet formally started using `useQuery`.

Current rule:

> Do not jump into TanStack Query until I have manually implemented and understood native fetch + React state + loading + error handling.

---

## 15. Git and Environment

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

I previously had Node 18 environment issues.

Current Node setup:

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

## 16. Debugging Mental Model

A major learning goal is to classify the problem before fixing it.

Examples:

```text
data is not defined
→ JavaScript / scope / identifier problem
```

```text
normal variable changes but UI does not update
→ React state / render problem
```

```text
XMLHttpRequest is not defined
→ runtime / Browser Web API problem
```

```text
API request returns 404 / 500
→ HTTP / server / endpoint problem
```

```text
npm / Vite fails before the app runs
→ tooling / dependency / environment problem
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
→ explain root cause
```

---

## 17. Current Weaknesses — Priority Order

### A. Async JavaScript

Highest priority:

- callback execution timing
- callback hell
- Promise chaining
- Promise returned values
- Promise rejection propagation
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

- component functions execute again on each render
- closure and renders
- stale closure
- dependency arrays

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
- key

### E. Production API Handling

Later:

- loading
- error
- try/catch
- response.ok
- abort / cleanup
- TanStack Query

---

## 18. Recommended Next Learning Sequence

Do not skip prerequisites.

```text
1. callback mental model
2. callback hell
3. Promise basic
4. Promise chaining
5. async / await
6. try / catch
7. Event Loop / microtask basics
8. return to Weather App
9. map 7-day weather data
10. Date / weekday
11. React key
12. WeatherCard + props
13. loading / error
14. response.ok
15. useEffect dependency / cleanup
16. TanStack Query
17. Weather App refactor
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

---

## 19. Preferred Teaching Style

Act as:

> Senior Front-End Developer + Mentor + Technical Interviewer

Teaching preferences:

- explain primarily in Chinese
- include important technical terms in English
- provide natural interview-ready English explanations
- do not immediately give full solutions unless I am clearly stuck
- use questions and hints before giving answers
- distinguish between partially correct and fully correct answers
- actively test understanding
- connect concepts through prerequisites and real engineering needs
- explain why a technology exists, not only its syntax
- briefly reconcile differences between tutorials and current best practice
- occasionally comment on naming, structure, formatting, and maintainability
- continuously train debugging classification

Preferred learning loop:

```text
problem
→ my answer
→ check
→ hint
→ revise
→ slightly harder problem
```

---

## 20. Chat Roles

I currently separate my coding work across multiple chats.

### Main Mentor

Purpose:

```text
What should I learn next?
Where am I now?
Have I actually mastered this?
```

Responsibilities:

- roadmap
- assessment
- prerequisites
- weekly review
- learning strategy
- interview progression

### Coding Gym

Purpose:

```text
Can I actually solve or explain it?
```

Responsibilities:

- exercises
- prediction questions
- Promise practice
- JavaScript / React drills
- English interview explanations

### Project Lab

Purpose:

```text
Can I build it in a real project?
```

Responsibilities:

- Weather App
- project structure
- components
- data flow
- refactoring
- production conventions

### Debug Lab

Purpose:

```text
Why is it broken?
```

Responsibilities:

- errors
- screenshots
- console output
- runtime problems
- npm / Vite
- Git
- network / API failures

---

## 21. Markdown Maintenance Rules

This file is the **Single Source of Truth** for my current learning status.

Rules:

1. Do not create separate competing learning-status files for different chats.
2. All coding chats should use the same latest version when they need shared context.
3. This file should not become a daily diary.
4. Update it approximately once a week or after a meaningful milestone.
5. Remove outdated weaknesses when they are genuinely mastered.
6. Move concepts between:
   - Currently Learning
   - Comfortable / Understood
   - Still Weak
7. Keep project progress current.
8. Keep the "Next Learning Sequence" aligned with actual progress.
9. Important learning changes from Coding Gym, Project Lab, or Debug Lab can be summarized as short checkpoints.
10. The Main Mentor can periodically merge those checkpoints into this file.
11. Prefer editing the existing structure instead of endlessly adding new sections.
12. Git history can preserve old versions, so this file should describe the **present**, not the entire past.

---

## 22. Current Immediate Next Step

Current recommended continuation point:

```text
confirm callback mental model
→ write / inspect callback hell
→ understand why nested callbacks become difficult to maintain
→ refactor the same problem with Promise
→ strengthen Promise chaining
→ strengthen async / await
→ add error handling
→ return to Weather App
```
