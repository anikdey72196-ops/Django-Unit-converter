## 2025-02-18 - Batching DOM Updates for Dropdowns
**Learning:** Appending options to dropdowns sequentially using `createElement` and `appendChild` in loops causes noticeable layout thrashing when building DOM heavy elements.
**Action:** Instead, memoize the raw HTML string once and update `innerHTML` in a single assignment. This speeds up category switching considerably since the DOM string is cached.
