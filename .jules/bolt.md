## 2024-06-24 - DOM Manipulation Optimization
**Learning:** Re-building dropdown elements on every category switch using `document.createElement` and `appendChild` creates unnecessary layout thrashing and overhead in vanilla JavaScript apps.
**Action:** Consolidate DOM manipulations by building HTML strings and using `.innerHTML`, and cache static HTML strings in an object (e.g., `dropdownCache`) when options remain consistent, significantly reducing redundant DOM operations.
