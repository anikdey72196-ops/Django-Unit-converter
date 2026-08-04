## 2026-03-01 - Offscreen Image Deferred Loading
**Learning:** Found offscreen images lacking lazy loading parameters, leading to unnecessary bandwidth usage and increased initial render times.
**Action:** Always verify if images rendered below the fold have `loading="lazy"` and `decoding="async"` attributes set to defer loading.
