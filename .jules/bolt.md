## 2024-08-20 - Batch DOM Insertions with DocumentFragment
**Learning:** Rendering lists item-by-item by appending directly to the DOM causes multiple layout reflows and repaints, especially if the list grows large. In this Vanilla JS app, appending history items one by one inside a loop hurts performance.
**Action:** Use `document.createDocumentFragment()` to hold elements in memory while looping, and then append the entire fragment to the DOM once at the end. This batches insertions and prevents multiple unnecessary reflows.
