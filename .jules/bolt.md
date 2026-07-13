## 2025-03-02 - Use DocumentFragment for Dropdown Options
**Learning:** Appending option elements repeatedly to live `<select>` nodes in a loop causes unnecessary browser reflows and repaints, especially noticeable in vanilla JavaScript single-page apps like this one.
**Action:** When generating and inserting multiple DOM elements, use `document.createDocumentFragment()` to batch insertions. Append all child elements to the fragment first, then append the fragment to the live DOM node once to minimize reflows.
