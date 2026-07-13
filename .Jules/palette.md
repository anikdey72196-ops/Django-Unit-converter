## 2024-05-24 - Missing ARIA Labels on grouped controls
**Learning:** When grouping interactive elements (like a value input and a unit select dropdown) under a single visual label, the inner elements (e.g., the select dropdown) are not fully accessible to screen readers without individual aria-labels. Icon-only buttons (swap, copy, menu) also critically need aria-labels.
**Action:** Always provide individual `aria-label` attributes to the inner elements (e.g., the select dropdown) and icon-only buttons to ensure they are fully accessible to screen readers.
