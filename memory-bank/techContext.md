<!-- Version: 0.4 | Last Updated: 2025-04-06 -->
# Tech Context: xdash

*   **Language**: TypeScript (`^5.0.0`)
*   **Runtime/Build Tool**: Bun
*   **Package Manager Compatibility**: npm, yarn, pnpm, bun
*   **Testing Framework**: Jest (via `bun test`)
*   **Documentation Generator**: VitePress (site framework) + TypeDoc (API Markdown generation via `typedoc-plugin-markdown`)
*   **CI/CD Platform**: GitHub Actions
*   **Benchmarking Tool**: TBD
*   **Key Libraries/Frameworks (Dev)**: 
    *   Jest (`@types/jest` for types, runner provided by Bun)
    *   VitePress (`vitepress`, `vue`)
    *   TypeDoc (`typedoc`, `typedoc-plugin-markdown`)
    *   Bun DTS Plugin (`@anymud/bun-plugin-dts`)
    *   Consola (`consola`)
*   **Build Process**: Custom script `build.ts` via `bun build`. Outputs ESM modules and `.d.ts` files to `dist/`.
*   **Testing Process**: `bun test` executed by CI/CD.
*   **Documentation Process**: 
    1. `bun run docs:api` (runs TypeDoc) to generate/update Markdown in `docs/api`.
    2. `bun run docs:build` (runs VitePress build) executed by CI/CD.
*   **Deployment**: 
    *   Package: Published to npm via GitHub Actions.
    *   Docs: Deployed to GitHub Pages via GitHub Actions.
*   **Dependencies**: No runtime dependencies. `typescript` is a peer dependency.
*   **Licensing**: MIT License.
*   **Repository**: GitHub (github.com/shtse8/xdash).
*   **Deprecated Tech**: Astro (for docs), release-it, vitepress-jsdoc.