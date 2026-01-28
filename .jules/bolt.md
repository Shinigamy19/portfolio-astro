## 2024-05-16 - Astro Image Optimization for Dynamic Imports
**Learning:** In Astro, images stored in `public/` bypass the optimization pipeline. Moving them to `src/assets/` and using the `<Image />` component with `import.meta.glob` for dynamic imports allows for significant performance gains (up to 98% reduction in asset size) without sacrificing developer experience for data-driven components.
**Action:** Always prefer `src/assets/` over `public/` for UI assets that don't need to be served from a fixed URL, and use `import.meta.glob` to resolve dynamic image paths from a data file.
