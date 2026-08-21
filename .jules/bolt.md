## 2024-05-24 - DOM Operations Optimization
**Learning:** In a single-page Vanilla JS application like this Unit Converter, direct DOM manipulation inside loops (like appending elements directly to `historyListEl` in `renderHistory`) can cause unnecessary and expensive browser reflows and repaints.
**Action:** Use `DocumentFragment` to batch DOM insertions in loops, adding elements to the fragment first, then appending the fragment to the DOM once to improve performance.
