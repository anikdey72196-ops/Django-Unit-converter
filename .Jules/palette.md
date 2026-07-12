## 2026-07-12 - Add ARIA Labels to grouped interactive elements
**Learning:** When grouping interactive elements (like an input and a select dropdown) under a single visual label, it is important to provide individual `aria-label` attributes to the inner elements (e.g., the select dropdown) to ensure they are fully accessible to screen readers, instead of relying solely on the visual grouping label.
**Action:** Always verify that interactive elements, especially icon-only buttons or grouped form inputs, possess their own explicit `aria-label`s for clarity to assistive technologies.
