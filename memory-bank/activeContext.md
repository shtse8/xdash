<!-- Version: 1.1 | Last Updated: 2025-04-06 -->
# Active Context

*   **Current Focus**: Preparing for v0.5.14 release, cleaning up project structure.
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
    17. Updated `.gitignore` to exclude `docs/api/` and removed tracked files from Git.
    18. Updated GitHub repository settings (description, topics, URL) via `gh` CLI.
    19. Created GitHub Actions CI/CD workflow file (`.github/workflows/ci.yml`) for testing, building, npm publish, and docs deployment.
    20. Pushed all changes to `main` branch.
    21. Created and pushed Git tag `v0.5.12` (publish failed due to auth issue).
    22. Added `LICENSE` file (MIT).
    23. Added `CHANGELOG.md` file.
    24. Bumped version in `package.json` and `CHANGELOG.md` to `0.5.13` (intermediate step).
    25. Bumped version in `package.json` and `CHANGELOG.md` to `0.5.14` to prepare for clean release attempt.
    26. Deleted redundant GitHub Actions workflow files (`publish-deploy.yml`, `release.yml`, `test.yml`).
*   **Next Steps (High-Level Plan)**:
    1.  **Push Changes**: Push the latest commits (workflow cleanup) to the remote repository (`main` branch).
    2.  **(If not done) Create & Push Tag**: Create and push tag `v0.5.14`.
    3.  **Monitor CI/CD**: Check GitHub Actions for successful completion of tests, build, and npm publish for tag `v0.5.14`. Check GitHub Pages deployment status after `main` branch workflow run.
    4.  **Verify npm/Docs (v0.5.14)**: Check npmjs.com and GitHub Pages URL.
    5.  **Address remaining issues**: (e.g., JSDoc warnings). (Semantic module removed)
    6.  **Integrate benchmarking**.
    7.  **Manually enhance generated API docs** with more examples/tutorials.
    8.  **Create `CONTRIBUTING.md`**.
*   **Active Decisions**: Using TypeDoc to generate Markdown for API reference, displayed via VitePress. Removed semantic module due to complexity/issues. Consolidated CI/CD logic into `ci.yml`. Skipped v0.5.13 release due to v0.5.12 publish failure. Bumped version to `0.5.14` for next release attempt. Added standard LICENSE and CHANGELOG files. Removed redundant workflow files.