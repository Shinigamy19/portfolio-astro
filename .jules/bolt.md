## 2025-01-24 - Astro Image Optimization Bottleneck
**Learning:** In Astro projects, images placed in the `public/` directory and referenced via standard `<img>` tags bypass the build-time optimization pipeline. This can lead to massive payloads (e.g., a 2.5MB image) being served to users. For dynamic components (like a list of projects), `import.meta.glob` is necessary to import assets from `src/assets/` so they can be processed by the `<Image />` component.

**Action:** Always move content-heavy images to `src/assets/` and use the Astro `<Image />` component. For dynamic image rendering, use `import.meta.glob` to retrieve the optimized metadata required by `<Image />`.
