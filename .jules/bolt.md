## 2024-05-15 - DOM Manipulation Performance

**Learning:** In Vanilla JS applications like this unit converter, repeatedly calling `document.createElement()` and `appendChild()` in loops inside frequently triggered functions (like tab switching) causes layout thrashing and unnecessary recalculations.
**Action:** Instead of creating multiple individual nodes, construct an HTML string in a single pass and assign it to `innerHTML`, and cache the generated string if the list is static, reducing O(N) DOM operations to an O(1) string assignment on subsequent renders.
