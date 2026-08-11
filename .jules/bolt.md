## 2025-05-24 - DocumentFragment for DOM insertions
**Learning:** Appending DOM elements inside a loop causes multiple reflows/repaints, impacting performance.
**Action:** Use a `DocumentFragment` to batch DOM insertions outside the loop, resulting in a single reflow.
