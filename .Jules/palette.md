## 2024-05-24 - Individual Labels for Grouped Inputs
**Learning:** Grouped interactive components (like an input field paired with a unit selection dropdown) under a single visual label often result in screen readers missing the context of the secondary element (e.g., the select dropdown) and missing labels on icon buttons.
**Action:** Always provide explicit individual `aria-label` attributes to inner interactive elements (such as select dropdowns and icon buttons) even if they visually share a parent label, ensuring they are independently accessible to screen readers.
