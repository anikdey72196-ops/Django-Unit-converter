## 2024-08-02 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Icon-only buttons (like mobile menus, swap buttons, and copy actions) lacked `aria-label` attributes, which broke accessibility for screen readers.
**Action:** Always verify that buttons containing only SVG icons have an explicit `aria-label` attribute describing their function.
