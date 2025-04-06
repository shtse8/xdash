<!-- Version: 0.3 | Last Updated: 2025-04-06 -->
# Progress: xdash

*   **What Works/Understood**: 
    *   Project identity, core purpose, high-level structure.
    *   Initial Memory Bank setup completed.
*   **What's Left/Planned (Major Refactor)**: 
    1.  **Update Memory Bank**: Reflect new requirements (Jest, VitePress, CI/CD, etc.). (In Progress)
    2.  **Remove Old Release Tools**: Uninstall `release-it`, update `package.json` scripts.
    3.  **Implement Jest**: Install, configure, update test script.
    4.  **Refactor & Test**: Review all `src/` functions (FP, performance, typing) and rewrite corresponding tests in Jest (module by module).
    5.  **Implement Benchmarking**: Choose library, add benchmarks.
    6.  **Implement VitePress**: Install, configure, create basic doc structure, remove TypeDoc/Astro, update scripts.
    7.  **Implement CI/CD**: Create/update GitHub Actions for testing, npm publish, GitHub Pages deployment.
*   **Current Status**: Starting major refactoring based on user feedback. Updating Memory Bank with the new plan.
*   **Known Issues**: None currently, but significant changes ahead.
*   **Deprecated**: TypeDoc documentation generation, Astro documentation site, `release-it` based release process.