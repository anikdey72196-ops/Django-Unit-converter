## 2024-05-18 - ARIA Labels on Selects within Grouped Controls
**Learning:** When visual elements like inputs and selects are visually grouped under a single label without being directly tied to it (e.g., via `for` or `aria-labelledby`), individual `aria-label` attributes must be provided to the inner elements (like selects) for screen readers.
**Action:** Always verify that complex inline forms or grouped controls provide explicit labelling for every single interactive child, rather than relying on visual proximity to a header label.
