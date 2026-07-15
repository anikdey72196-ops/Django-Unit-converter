## 2025-02-27 - Grouped Interactive Elements Need Individual ARIA Labels
**Learning:** When interactive elements like a value input and a unit select dropdown are grouped under a single visual label (like "From" or "To"), screen readers may not associate the visual label with all inner elements.
**Action:** Always provide individual `aria-label` attributes to the inner elements (e.g., the select dropdown) to ensure they are fully accessible and properly announced to screen reader users, even when visually grouped.
