<!-- Version: 0.2 | Last Updated: 2025-04-06 -->
# Tech Context: xdash

*   **Language**: TypeScript (Peer dependency: `^5.0.0`)
*   **Runtime/Build Tool**: Bun (Used for `bun test`, `bun build.ts`)
*   **Package Manager Compatibility**: npm, yarn, pnpm, bun
*   **Key Libraries/Frameworks (Dev)**: 
    *   Astro (`astro`): Likely for building the documentation website.
    *   TypeDoc (`typedoc`, `typedoc-plugin-markdown`): For generating API documentation from TSDoc comments.
    *   Release It (`release-it`): For automating the package release process.
    *   Consola (`consola`): Logging utility (likely used in build script).
    *   Bun DTS Plugin (`@anymud/bun-plugin-dts`): For generating `.d.ts` files during the Bun build.
*   **Testing**: Bun Test runner (`bun test`). Test files located in `tests/`.
*   **Build Process**: Custom script `build.ts` executed via `bun build.ts`. Outputs ESM modules and type definitions to the `dist/` directory.
*   **Dependencies**: No runtime dependencies. `typescript` is a peer dependency. All other dependencies are `devDependencies`.
*   **Licensing**: MIT License.
*   **Repository**: GitHub (github.com/shtse8/xdash).