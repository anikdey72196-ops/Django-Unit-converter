## 2025-02-20 - Batching DOM Insertions
**Learning:** Adding multiple elements to the DOM within a loop (like `history.forEach`) triggers repeated reflows and repaints, which can degrade performance, especially on less powerful devices or with long lists.
**Action:** Use a `DocumentFragment` to batch DOM insertions. Append new elements to the fragment first, and then append the entire fragment to the target DOM node at once to minimize reflows.
