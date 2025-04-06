<!-- Version: 0.3 | Last Updated: 2025-04-06 -->
# Tech Context: xdash

*   **Language**: TypeScript (`^5.0.0`)
*   **Runtime/Build Tool**: Bun
*   **Package Manager Compatibility**: npm, yarn, pnpm, bun
*   **Testing Framework**: Jest
*   **Documentation Generator**: VitePress
*   **CI/CD Platform**: GitHub Actions
*   **Benchmarking Tool**: TBD (e.g., `benny`, `benchmark.js`)
*   **Key Libraries/Frameworks (Dev)**: 
    *   Jest (`jest`, `@types/jest`, `ts-jest` or Bun preset)
    *   VitePress (`vitepress`, `vue`)
    *   Bun DTS Plugin (`@anymud/bun-plugin-dts`)
    *   Consola (`consola`)
*   **Build Process**: Custom script `build.ts` via `bun build.ts`. Outputs ESM modules and `.d.ts` files to `dist/`.
*   **Testing Process**: `bun test` (or equivalent Jest command via npm script) executed by CI/CD.
*   **Documentation Process**: VitePress build (`docs:build` script) executed by CI/CD.
*   **Deployment**: 
    *   Package: Published to npm via GitHub Actions.
    *   Docs: Deployed to GitHub Pages via GitHub Actions.
*   **Dependencies**: No runtime dependencies. `typescript` is a peer dependency.
*   **Licensing**: MIT License.
*   **Repository**: GitHub (github.com/shtse8/xdash).
*   **Deprecated Tech**: TypeDoc, Astro (for docs), release-it.