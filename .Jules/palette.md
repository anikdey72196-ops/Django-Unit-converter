## 2026-06-15 - Icon-Only Interactive Elements Missing ARIA Labels
**Learning:** The app's design heavily relies on icon-only buttons (like swap and copy) and dropdowns without explicit `<label>`s to achieve a clean aesthetic, but completely overlooks screen reader accessibility.
**Action:** When working on minimalist UIs in this app, always ensure icon-only buttons have `aria-label` attributes and unlabelled `<select>` or `<input>` elements are properly labelled for screen readers.
