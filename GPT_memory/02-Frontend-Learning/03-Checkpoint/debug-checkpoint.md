# Front-End Debug Checkpoint

**Purpose:** Preserve only high-value debugging evidence, reusable mental models, and recurring weaknesses.  
**Scope:** Front-End / development debugging only.  
**Last Updated:** 2026-08-31

---

## 1. Module Dependency Graph Mental Model

### Evidence
A syntax error in `TodoList.jsx` caused the Weather page / app to fail even though the current task was focused on Weather.

### Root Cause
`TodoList.jsx` was still imported into the active app dependency graph.

### Mental Model

```text
Current page/component
≠
only file Vite needs to parse

main.jsx
→ App.jsx
→ imported modules
→ their imported modules
→ ...
```

If any module in the active dependency graph has a parse / syntax error:

```text
module parse fails
→ Vite transform fails
→ current app / route can be affected
```

### Debugging Lesson
When an apparently unrelated file breaks the current page, first ask:

> Is that file still directly or indirectly imported into the active module dependency graph?

Do not assume an unused-looking component is irrelevant just because it is not the current UI focus.

---

## 2. Source Code vs Tooling State: Filename Casing

### Evidence
VS Code / TypeScript reported a casing conflict between:

```text
Weather.jsx
weather.jsx
```

But disk inspection showed only one actual file:

```text
Weather.jsx
```

The import path was also correct. Renaming temporarily to `TempWeather.jsx` worked, and restarting the TypeScript server removed the error.

### Root Cause
Stale TypeScript language-service / module-resolution state after filename casing changes.

### Layer

```text
Tooling / Environment
→ VS Code / TypeScript Language Service
→ module path casing state
```

### Debugging Procedure

```text
1. Inspect actual filename on disk
2. Inspect import path casing
3. Search for duplicate / old casing references
4. If source + disk are correct, Restart TS Server
```

### Debugging Lesson
Do not keep editing valid source code when the evidence points to stale tooling state.

A useful classification question is:

> Is this a code bug, filesystem/path bug, or editor/language-service state bug?

---

## 3. Promise Chain Return-Value Mental Model

### Evidence
This code:

```js
.then(response => {
  response.json()
})
.then(data => ...)
```

caused the next `.then()` to receive:

```text
undefined
```

A minimal test confirmed the behavior.

### Root Cause
The previous `.then()` callback did not `return` `response.json()`.

Without an explicit return:

```js
.then(response => {
  response.json()
})
```

the callback returns:

```js
undefined
```

### Mental Model

```text
.then(callback)
→ callback return value
→ determines the fulfilled value of the Promise returned by that .then()
→ next .then() receives that value
```

If the callback returns another Promise:

```js
return response.json()
```

the Promise chain adopts / waits for that Promise before continuing.

### Important Distinctions

```text
fetch()
→ returns a Promise immediately
→ not the eventual API data
```

and:

```text
Promise ≠ callback
```

The callback is the function passed into `.then()`, `.catch()`, etc.

### Repeated Knowledge Gap
Promise callback return values / returned Promise behavior should remain an active learning priority until stable in real project code.

---

## 4. Provider-Dependent Library Debugging Model

### Evidence
First use of TanStack Query:

```js
useQuery(...)
```

produced:

```text
No QueryClient set, use QueryClientProvider to set one
```

### Root Cause
`useQuery()` depends on a `QueryClient` supplied through React Context by `QueryClientProvider`.

### Mental Model

```text
QueryClient
→ QueryClientProvider
→ React Context
→ component tree
→ useQuery()
```

More generally:

```text
library hook
→ may depend on shared Context
→ requires Provider higher in component tree
```

### TanStack Query Setup Model

```js
const queryClient = new QueryClient()
```

```jsx
<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

### Debugging Lesson
When a library hook reports that a client / context / provider is missing, classify it as:

```text
Library setup / React Context / Provider prerequisite
```

before investigating API logic or component code.

### Project Sensei Handoff Lesson
When introducing a new library hook that requires global setup, teach the minimum prerequisite before first use:

```text
what the hook depends on
→ which Provider/client is required
→ why it is required
```

This should be concise, but should happen before the first runtime failure when practical.

---

## Current Debugging Progress

The main improvement is a shift from:

```text
see error
→ modify code immediately
```

toward:

```text
symptom
→ classify layer
→ form hypothesis
→ smallest test
→ collect evidence
→ confirm root cause
→ fix
→ verify
```

Recent useful classifications included:

```text
unrelated component breaks current page
→ module dependency graph / Vite transform

casing warning despite correct source
→ tooling / TypeScript language service state

undefined in Promise chain
→ callback return value / Promise chaining

No QueryClient set
→ Provider / Context prerequisite
```

---

## Do Not Add to Long-Term Checkpoint

The following recent issues were intentionally not preserved because they were one-off or low-value:

- missing bracket / parenthesis
- simple filename typo
- malformed optional chaining syntax
- JSX `if` placement typo
- one-off `MODULE_NOT_FOUND`
- simple `Date` string vs `Date` object mistake
- temporary variable-name mismatch during migration
- isolated parse errors without reusable mental-model value

The checkpoint should remain small and evidence-driven.
