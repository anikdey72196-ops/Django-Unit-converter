## 2024-05-18 - Add individual ARIA labels for accessible grouping
**Learning:** When interactive elements (like a value input and a select dropdown) share a single visual label, screen readers may not associate the visual label with all inner elements.
**Action:** Always provide individual `aria-label` attributes to the inner elements (e.g., the select dropdown) to ensure they are fully accessible to screen readers, even when visually grouped under an overarching label.
