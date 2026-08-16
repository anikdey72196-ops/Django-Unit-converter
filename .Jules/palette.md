## 2026-08-10 - Add aria-labels to icon-only buttons
**Learning:** Icon-only buttons (mobile menu, swap, and copy) in this application lack `aria-label` attributes, making them inaccessible to screen readers.
**Action:** Always ensure that any button primarily using an SVG or icon for its visual representation includes an explicit `aria-label` attribute describing its function.

## 2024-08-16 - Add aria-label to unlinked dropdowns in composite form fields
**Learning:** In composite form fields where a single visual label sits above multiple controls (like a text input and a `<select>` dropdown), screen readers may only announce the explicitly associated input. The adjacent dropdown controls are left unlinked.
**Action:** Always apply an explicit `aria-label` to unlinked adjacent form controls within composite fields to ensure full screen reader accessibility.
