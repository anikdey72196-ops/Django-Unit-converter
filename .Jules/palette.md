## 2024-05-18 - Grouped Input Labelling
**Learning:** When grouping inputs (e.g., a number input alongside a select dropdown) under a single visual label (like "From" or "To"), each interactive element still requires an individual `aria-label` (e.g., `aria-label="From unit"`) to ensure screen readers can independently announce them.
**Action:** Always provide explicit `aria-label`s to inner interactive elements that lack independent visible labels within a grouped container.
