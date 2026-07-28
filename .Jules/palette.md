## 2024-10-24 - Grouped Interactive Elements Accessibility
**Learning:** When grouping interactive elements (like a value input and a unit select dropdown) under a single visual label (e.g., "From" or "To"), the inner elements (like the select dropdown) require individual `aria-label` attributes to be fully accessible to screen readers, as the visual label doesn't automatically associate with all nested interactive elements.
**Action:** Always provide individual `aria-label` attributes for nested interactive elements that share a single visual group label.
