## 2026-07-04 - DocumentFragment Optimization
**Learning:** Repetitive DOM insertions inside loops (like populating dropdowns or rendering history lists) cause unnecessary layout reflows and repaints in vanilla JavaScript single-page applications.
**Action:** Use `DocumentFragment` to batch append operations in memory, then append the fragment to the DOM once to optimize frontend rendering performance.
