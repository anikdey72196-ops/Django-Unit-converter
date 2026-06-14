## 2026-06-14 - Deferred Image Loading and Decoding
**Learning:** For below-the-fold content that loads large graphical assets like in the categories grid, employing native `loading="lazy"` and `decoding="async"` is a simple but highly effective low-risk optimization to prioritize main thread parsing and reduce initial network payload without needing complex JS libraries.
**Action:** Next time working on single-page apps or grid-heavy views, systematically check image assets beneath the initial viewport for missing native lazy-loading attributes.
