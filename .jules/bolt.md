## 2026-06-25 - Native Image Optimization

**Learning:** Adding `loading="lazy"` and `decoding="async"` natively defers offscreen images and prevents decoding from blocking the main UI thread. It's safe and effective, bypassing the need for complex lazy-loading JS libraries.

**Action:** Standard practice for all images below the fold unless they are critical hero images.
