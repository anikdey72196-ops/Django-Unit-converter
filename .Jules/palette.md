## 2024-06-25 - Icon-only Buttons Missing ARIA Labels
**Learning:** Found multiple instances of icon-only buttons (mobile menu, swap units, copy result) in the main index.html template lacking `aria-label` attributes, making them inaccessible to screen readers.
**Action:** Always verify icon-only buttons have descriptive `aria-label` attributes when auditing or creating new components in this application.
