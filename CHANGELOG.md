# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.13] - 2025-04-06

### Added
- `LICENSE` file (MIT).
- `CHANGELOG.md` file (this file).


## [0.5.12] - 2025-04-06

### Added
- GitHub Actions CI/CD workflow for automated testing, building, npm publishing, and GitHub Pages deployment (`.github/workflows/ci.yml`).
- VitePress documentation site setup (`docs/`).
- TypeDoc integration for generating API reference Markdown (`docs/api/`).
- `LICENSE` file (MIT).
- `CHANGELOG.md` file (this file).
- Buy Me a Coffee link to `README.md`.

### Changed
- Rewrote `README.md` with enhanced project description and features.
- Updated GitHub repository settings (description, topics, URL).
- Updated `.gitignore` to exclude VitePress cache/dist and generated API docs (`docs/api/`).
- Removed previously tracked generated API docs from Git history.
- Updated Memory Bank files (`activeContext.md`, `progress.md`, `.clinerules`, etc.) to reflect recent changes.

### Removed
- Old documentation setup (Astro, TypeDoc CLI config).
- Old release tooling (`release-it`).
- `semantic` module and related tests/exports (due to complexity/issues).

*[Older history not fully documented in this format]*