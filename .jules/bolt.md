
## 2026-07-18 - Prevent Redundant DOM Updates in High-Frequency Handlers
**Learning:** In client-side logic handling `oninput` events, static relationships between dynamic parts (like unit conversion formulas) are unnecessarily re-applied to the DOM on every keystroke, causing layout thrashing even when the output strings remain identical.
**Action:** When updating text content on high-frequency triggers, always cache the last rendered string and conditionally update the DOM (`if (newStr !== lastStr)`) to bypass redundant repaints. Clear the cache when the higher-level context (like the selected category) changes.
