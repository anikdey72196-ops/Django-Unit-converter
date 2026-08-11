## 2026-08-10 - Add aria-labels to icon-only buttons
**Learning:** Icon-only buttons (mobile menu, swap, and copy) in this application lack `aria-label` attributes, making them inaccessible to screen readers.
**Action:** Always ensure that any button primarily using an SVG or icon for its visual representation includes an explicit `aria-label` attribute describing its function.
## 2026-08-11 - Add aria-labels to composite form fields
**Learning:** In composite form fields where a single visual label (e.g., "From") sits above both a text input and a `<select>` dropdown, linking the `<label for="from-value">` only to the text input leaves the dropdown completely unlabelled for screen reader users, breaking accessibility.
**Action:** When working with composite inputs sharing a visual label, always explicitly apply an `aria-label` to any unlinked adjacent form controls (like dropdowns) to ensure they are accessible.
