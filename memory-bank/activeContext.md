<!-- Version: 0.5 | Last Updated: 2025-04-06 -->
# Active Context

*   **Current Focus**: Finalizing documentation setup and preparing for CI/CD.
*   **Recent Changes**:
    1.  Completed test refactoring for most modules (excluding `semanticSlice`).
    2.  Removed old release tool (`release-it`).
    3.  Installed VitePress and Vue dependencies.
    4.  Removed old documentation tools (TypeDoc CLI, Astro) and files (`docs/`, `astro/`, `typedoc.json`).
    5.  Manually initialized VitePress structure (`docs/`, `docs/.vitepress/`, `docs/index.md`, `docs/.vitepress/config.mts`).
    6.  Updated `package.json` with VitePress scripts.
    7.  Updated `.gitignore` for VitePress cache/dist.
    8.  Attempted to use `vitepress-jsdoc` CLI but encountered errors.
    9.  Decided to use TypeDoc (with `typedoc-plugin-markdown`) to generate API Markdown files into `docs/api`.
    10. Re-installed TypeDoc dependencies and configured `typedoc.json`.
    11. Updated `package.json` script `docs:api` to run TypeDoc.
    12. Generated API Markdown files using TypeDoc.
    13. Updated VitePress sidebar configuration (`docs/.vitepress/config.mts`) to link to generated API files.
    14. Updated Hero Page content in `docs/index.md`.
    15. Copied banner image to `docs/public/`.
    16. Rewrote `README.md` for better promotion and added Buy Me a Coffee link.
*   **Next Steps (High-Level Plan)**:
    1.  Commit current changes (VitePress/TypeDoc setup + README update).
    2.  Push changes to remote repository.
    3.  Set up GitHub Actions for CI/CD (testing, npm publish, GitHub Pages deploy).
    4.  Address remaining issues (e.g., JSDoc warnings). (Semantic module removed)
    5.  Integrate benchmarking.
    6.  Manually enhance generated API docs with more examples/tutorials.
    7.  Create `CONTRIBUTING.md`.
*   **Active Decisions**: Using TypeDoc to generate Markdown for API reference, displayed via VitePress. Removed semantic module due to complexity/issues.