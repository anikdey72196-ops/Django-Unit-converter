## 2024-07-25 - Adding aria-labels to grouped input controls and icon buttons
**Learning:** For accessibility, when grouping interactive elements (like a value input and a unit select dropdown) under a single visual label, always provide individual aria-label attributes to the inner elements (e.g., the select dropdown) to ensure they are fully accessible to screen readers. Icon-only buttons also critically need aria-labels.
**Action:** Always check form groups for inner interactive elements missing explicit labels, and verify all icon-only buttons have aria-labels.
