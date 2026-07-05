## 2026-07-05 - ARIA labels for grouped interactive elements
**Learning:** Grouping interactive elements (like a value input and a unit select dropdown) under a single visual label requires individual `aria-label` attributes for inner elements to ensure screen reader users understand the purpose of each distinct interactive component.
**Action:** When creating compound input groups (e.g., value + unit), always assign specific, descriptive `aria-label` attributes to the internal inputs and select dropdowns, even if there is a general group label.
