## 2026-07-16 - Grouped Input Accessibility
**Learning:** When interactive elements (like a value input and a unit select dropdown) are grouped under a single visual label in this app, screen readers may not automatically associate the visual label with the inner elements correctly.
**Action:** Always provide individual `aria-label` attributes to the inner elements (e.g., the select dropdown) to ensure they are fully accessible to screen readers, especially when they lack their own explicit \<label\> element.
