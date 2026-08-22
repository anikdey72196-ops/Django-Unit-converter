## 2026-03-02 - Batched DOM manipulations with DocumentFragment
**Learning:** In Vanilla JS applications, appending multiple elements sequentially to the DOM (like in a loop for history items) triggers a layout reflow for each item, which can degrade rendering performance.
**Action:** Use a `DocumentFragment` to batch the appends offline, and append the fragment to the DOM a single time, minimizing reflows.
