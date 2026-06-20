## 2026-06-20 - Adding Accessible Form Controls
**Learning:** Found multiple instances where the application relies entirely on visual proximity for form controls and icon shapes for buttons, lacking programmatic associations for screen readers. This is a common pattern in rapidly prototyped Tailwind interfaces.
**Action:** Always verify that interactive elements without visible text labels (like icon buttons or implicitly labeled inputs) have an aria-label and that child SVGs have aria-hidden="true" to prevent redundant reading.
