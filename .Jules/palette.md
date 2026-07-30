## 2024-07-30 - Added ARIA labels to unlabelled interactive elements
**Learning:** When grouping interactive elements like unit inputs and select dropdowns, individual `aria-label`s must be explicitly defined for inner components (e.g., `<select>`) to be fully accessible to screen readers. Similarly, icon-only buttons require explicit `aria-label` attributes.
**Action:** Always verify that every independent interactive element, especially those represented visually by icons or positioned without standalone text labels, has an explicit `aria-label` added for proper screen reader support.
