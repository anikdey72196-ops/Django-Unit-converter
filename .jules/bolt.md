## 2026-06-17 - Optimize static list dropdown populations
**Learning:** Frequent layout thrashing from redundant DOM manipulation on static lists (like creating option tags iteratively inside a for-loop and executing multiple `appendChild` calls) is inefficient.
**Action:** When options to populate an element are static and category-bound, cache the generated string representation of the HTML. Assigning via `innerHTML` once from the cached string avoids repeatedly hitting the layout engine.
