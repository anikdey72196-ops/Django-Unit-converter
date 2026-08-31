## 2026-08-10 - Add aria-labels to icon-only buttons
**Learning:** Icon-only buttons (mobile menu, swap, and copy) in this application lack `aria-label` attributes, making them inaccessible to screen readers.
**Action:** Always ensure that any button primarily using an SVG or icon for its visual representation includes an explicit `aria-label` attribute describing its function.
## 2024-05-18 - Missing ARIA Labels on Composite Form Controls
**Learning:** In composite forms where a single visual label (like "From") sits above multiple controls (like a text input and a `<select>` dropdown), unlinked adjacent controls are inaccessible to screen readers without explicit ARIA labels.
**Action:** Always add explicit `aria-label` attributes to form elements that lack a directly associated `<label>` tag, such as the `from-unit` and `to-unit` `<select>` dropdowns in the unit converter.
