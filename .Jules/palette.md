## 2026-07-03 - Explicit ARIA Labels for Visually Grouped Elements
**Learning:** When grouping interactive elements (like a value input and a unit select dropdown) under a single visual label, individual elements still need explicit `aria-label` attributes to ensure they are fully accessible to screen readers, preventing them from being announced as unlabeled form controls.
**Action:** Always verify that every interactive child element within a visually grouped composite control has an individual, descriptive `aria-label`.
