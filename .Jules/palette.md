## 2024-05-18 - Select Dropdown Accessibility
**Learning:** When grouping interactive elements (like a value input and a unit select dropdown) under a single visual label, screen readers will not associate the label with the inner select element.
**Action:** Always provide individual `aria-label` attributes to inner elements like select dropdowns to ensure they are fully accessible to screen readers.
