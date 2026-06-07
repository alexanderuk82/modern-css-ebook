# Chapter 19 examples · Customizable Select

> Support label: **CHROME ONLY 135+** (degrades to a native select everywhere)

## Style the real select, keep the native accessibility

Two demos in one page:

- **Styled plan select**: `appearance: base-select`, a `<button>` + `<selectedcontent>` trigger, `::picker(select)`, `::picker-icon` that rotates on open, and `option::checkmark`.
- **Country picker with flags**: each option carries a flag and text; `<selectedcontent>` reflects the choice in the button.

**Open it:** `index.html` in this folder, or live at
https://alexanderuk82.github.io/modern-css-ebook/en/c19/select/

Where `appearance: base-select` is unsupported, both fall back to a fully
functional native `<select>`. The accessibility is never lost, only the style.
