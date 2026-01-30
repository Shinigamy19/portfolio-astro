## 2025-01-24 - Astro Image Optimization Bottleneck
**Learning:** In Astro projects, images placed in the `public/` directory and referenced via standard `<img>` tags bypass the build-time optimization pipeline. This can lead to massive payloads (e.g., a 2.5MB image) being served to users. For dynamic components (like a list of projects), `import.meta.glob` is necessary to import assets from `src/assets/` so they can be processed by the `<Image />` component.

**Action:** Always move content-heavy images to `src/assets/` and use the Astro `<Image />` component. For dynamic image rendering, use `import.meta.glob` to retrieve the optimized metadata required by `<Image />`.

## 2025-01-30 - CLS and Astro Script Interaction
**Learning:** Using `define:vars` on an Astro `<script>` tag makes it `is:inline`, which means TypeScript syntax (like type assertions) will break at runtime as the script is served as raw JS. Also, failing to sync server-side HTML with client-side interactivity state (like "Show More" lists) causes massive CLS.

**Action:** When passing variables to Astro scripts via `define:vars`, ensure the script uses standard JS (or defensive checks like `instanceof`). Always apply initial visibility states (e.g., `hidden` class) to elements during server-side rendering to match the initial client-side state.
