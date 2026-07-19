## 2024-05-24 - Grouped Interactive Elements Need Individual ARIA Labels
**Learning:** When grouping interactive elements (like a value input and a unit select dropdown) under a single visual label, screen readers may not automatically associate the visual label with all inner elements.
**Action:** Always provide individual `aria-label` attributes to the inner elements (e.g., the select dropdown) to ensure they are fully accessible to screen readers.
