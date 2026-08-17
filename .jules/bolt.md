
## 2026-03-02 - Optimize DOM Manipulations via DocumentFragment and DOM caching
**Learning:** In a vanilla JS interactive UI like this unit converter, repeatedly modifying the DOM within loops (e.g., iteratively calling `historyListEl.appendChild`) and continually querying the document tree (`document.getElementById`) inside heavily used functions (like category switching) are common performance anti-patterns that induce unnecessary reflows and repaints.
**Action:** When working with vanilla JS codebases, always review repetitive DOM updates. Batch DOM additions using `document.createDocumentFragment()` to minimize reflows, and globally cache commonly queried elements (especially inside iteration or event-triggered blocks) to improve tree traversal times.
