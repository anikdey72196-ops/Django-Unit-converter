## 2024-07-01 - Missing ARIA Labels for visually grouped elements

**Learning:** When grouping interactive elements (like a value input and a unit select dropdown) under a single visual label to create a cohesive component pattern, the inner interactive elements often lose explicit accessibility context. A screen reader will not inherently associate the visual grouped label with the inner select dropdown.
**Action:** Always provide explicit individual `aria-label` attributes to the inner elements (e.g., the select dropdown) to ensure they are fully accessible to screen readers, even if they share a visual parent label.
