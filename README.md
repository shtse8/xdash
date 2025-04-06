# xdash: The Lean, Mean, TypeScript Utility Machine 🚀
### Build Faster, Smarter, and Lighter with xdash.

![xdash: A Modular, Typed, and Extensible TypeScript Library](https://github.com/shtse8/xdash/blob/main/raw/banner.png?raw=true)

Tired of bloated utility libraries slowing you down? **xdash** is the antidote. We provide a meticulously crafted suite of **highly performant, modular, and strongly-typed** utilities specifically designed for the modern TypeScript developer. Stop fighting your tools and start building amazing things, faster.

<p align="center">
  <a href="https://bundlephobia.com/package/xdash">
    <img src="https://img.shields.io/bundlephobia/minzip/xdash?label=minzipped&color=brightgreen" alt="Bundle Size">
  </a>
  <a href="https://www.npmjs.com/package/xdash">
    <img src="https://img.shields.io/npm/dm/xdash.svg?color=blue" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/xdash">
    <img src="https://img.shields.io/npm/v/xdash.svg?color=blue" alt="Version">
  </a>
  <a href="https://github.com/shtse8/xdash/actions/workflows/ci.yml">
    <img src="https://github.com/shtse8/xdash/actions/workflows/ci.yml/badge.svg" alt="CI Status">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/xdash.svg?color=lightgrey" alt="License">
  </a>
</p>

## Why Choose xdash? 🔥

`xdash` isn't just another utility library. It's a philosophy focused on **developer efficiency and application performance**:

- **Laser-Focused Modularity**: 📦 Import *only* the functions you need. Keep your application lean and fast.
- **Aggressive Tree-Shaking**: 🌳 Seamless integration with modern build tools like Vite, esbuild, and Webpack ensures minimal bundle size. No dead code, guaranteed.
- **Blazing Performance**: ⚡ Every function is optimized for speed. We benchmark rigorously so you don't have to worry about bottlenecks.
- **Rock-Solid Typing**: 🔒 Leverage the full power of TypeScript. Our strong types and type guards catch errors at compile time, not runtime, saving you precious debugging hours.
- **Zero Runtime Dependencies**: 🚫 Absolutely no baggage. `xdash` adds only the code you use.
- **Modern Tooling**: ✨ Built with Bun, tested with Jest, documented with VitePress & TypeDoc. We embrace the best of the modern web ecosystem.

## Core Features 🛠️

- **Essential Utilities**: A curated collection covering arrays, objects, strings, async operations, type checking, and more.
- **Functional Programming Inspired**: Clean, predictable, and composable functions.
- **Chainable Interface**: An optional, expressive way to link operations (`x.chain(...)`).
- **Inline Switch**: A powerful alternative to traditional switch statements (`x.InlineSwitch(...)`).
- **Comprehensive Testing**: High test coverage ensures reliability and stability.
- **Crystal-Clear Documentation**: Easily searchable and navigable docs generated via VitePress.

## Installation 💾

Integrate `xdash` into your project in seconds:

```bash
npm install xdash
# or
yarn add xdash
# or
pnpm add xdash
# or
bun install xdash
```

## Quick Start Example ⚡

```typescript
import { isStr, capitalize } from 'xdash';
// Or import the whole library
// import * as x from 'xdash';

let greeting = "hello, world!";

if (isStr(greeting)) {
  // capitalize is type-safe thanks to isStr!
  console.log(capitalize(greeting)); // Outputs: "Hello, world!"
}

// Chain example
const result = x.chain([1, 2, 3])
  .map(n => n * 2)
  .filter(n => n > 3)
  .sum() // Assuming sum is added or available
  .value(); // result = 10 (4 + 6)

console.log(result);
```

➡️ **[Explore the Full Documentation](https://shtse8.github.io/xdash/)** to discover all available utilities. *(Note: Link points to GitHub Pages, deployment pending CI setup)*

## Contributing 🤝

Got an idea or found a bug? We welcome contributions! Help us make `xdash` even better. Please read our [contribution guidelines](CONTRIBUTING.md) (TODO: Create this file) to get started.

## Support the Project ❤️

If `xdash` helps you build faster or saves you time, consider supporting its development:

<a href="https://www.buymeacoffee.com/shtse8" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License 📄

`xdash` is open-source software licensed under the [MIT License](LICENSE).