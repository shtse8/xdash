<!-- Version: 0.3 | Last Updated: 2025-04-06 -->
# Active Context

*   **Current Focus**: Implementing major project refactoring based on user feedback.
*   **Recent Changes**: 
    1.  Completed initial project analysis and Memory Bank setup.
    2.  Received user feedback requesting significant changes: VitePress for docs, Jest for tests, function review (FP, performance, typing), benchmarking, CI/CD for npm & GitHub Pages, removal of old release tools.
    3.  Updating Memory Bank to reflect new requirements and plan.
*   **Next Steps (High-Level Plan)**:
    1.  Update Memory Bank (This step).
    2.  Remove `release-it` dependency and scripts.
    3.  Install and configure Jest.
    4.  Iteratively review functions and rewrite tests using Jest (starting with `array.ts`).
    5.  Install and configure VitePress, remove old docs/tools (`TypeDoc`, `astro/`).
    6.  Set up GitHub Actions for CI/CD (testing, npm publish, GitHub Pages deploy).
    7.  Integrate benchmarking.
*   **Active Decisions**: Proceeding with the refactoring plan, starting with Memory Bank update and then removing old release tools.