## 2024-07-31 - Missing Accessible Names in Grouped Inputs
**Learning:** When grouping interactive elements (like a value input and a unit select dropdown) under a single visual label, the inner elements (like the select dropdown) often lack accessible names for screen readers because the parent label usually targets only one element via the `for` attribute.
**Action:** Always provide individual `aria-label` attributes to inner interactive elements when they share a single visual group label.
