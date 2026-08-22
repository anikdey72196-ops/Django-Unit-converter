## 2026-08-10 - Add aria-labels to icon-only buttons
**Learning:** Icon-only buttons (mobile menu, swap, and copy) in this application lack `aria-label` attributes, making them inaccessible to screen readers.
**Action:** Always ensure that any button primarily using an SVG or icon for its visual representation includes an explicit `aria-label` attribute describing its function.

## 2024-08-22 - Composite Form Accessibility
**Learning:** In composite form fields where a single visual label (e.g., "From") sits above multiple controls (an input and a dropdown), the unlinked adjacent controls (like the dropdown) require explicit `aria-label` attributes to ensure full screen reader accessibility.
**Action:** Always apply explicit `aria-label` attributes to unlinked adjacent form controls within composite groups to ensure screen readers can identify them properly.
