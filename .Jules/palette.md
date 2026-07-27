## 2024-07-27 - Aria labels for visual-only groupings
**Learning:** When inputs and dropdowns are grouped together under a single visual label (like "From" or "To"), they still need individual `aria-label` attributes for screen readers to understand what each specific input/dropdown controls.
**Action:** Always provide specific `aria-label`s on internal grouped inputs, even if a visual section label exists above them.
