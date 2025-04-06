<!-- Version: 1.0 | Last Updated: 2025-04-06 -->
# Progress: xdash

*   **What Works/Understood**:
    *   Project identity, core purpose, high-level structure.
    *   Technology stack: TypeScript, Bun, VitePress, TypeDoc (for API MD generation), Jest (via `bun test`).
    *   Build, test scripts updated.
    *   Basic VitePress site structure created with Hero Page and sidebar linking to generated API files.
    *   Most tests refactored and passing.
    *   `README.md` updated with stronger selling points and support link.
    *   `.gitignore` updated to exclude generated API docs (`docs/api/`).
    *   GitHub repository settings (description, topics, URL) updated.
    *   Consolidated GitHub Actions CI/CD workflow in `ci.yml`.
    *   Git tag `v0.5.12` created and pushed (publish failed).
    *   Standard `LICENSE` (MIT) and `CHANGELOG.md` files added.
    *   Version bumped to `0.5.14` in `package.json` and `CHANGELOG.md` (skipping 0.5.13).
    *   Redundant workflow files (`publish-deploy.yml`, `release.yml`, `test.yml`) deleted.
*   **What's Left/Planned**:
    1.  **Push & Tag**: Push latest commits (workflow cleanup) to GitHub `main`. (Re-)Create and push tag `v0.5.14` if not already done successfully.
    2.  **Monitor & Verify**: Monitor CI/CD workflow run for v0.5.14. Verify npm publish and GitHub Pages deployment.
    3.  **Fix `semanticSlice`**: Debug and fix the function and its tests. (Semantic module removed)
    4.  **Benchmarking**: Add performance benchmarks.
    5.  **Enhance Docs**: Manually add detailed examples and tutorials to generated API Markdown files.
    6.  **Review JSDoc**: Address TypeDoc warnings about unused `@param` tags.
    7.  **Create `CONTRIBUTING.md`**.
*   **Current Status**: Redundant workflows removed. Version bumped to `0.5.14`. Ready to push latest commits and (re-)tag for release attempt.
*   **Known Issues**: TypeDoc shows warnings about unused `@param` tags. v0.5.12 npm publish failed (auth issue, hopefully resolved).