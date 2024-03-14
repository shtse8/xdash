**xdash** • Readme \| [API](globals.md)

***

# xdash: A Modular, Typed, and Extensible TypeScript Library 🚀
### Simple. Straightforward. Designed for Ease.

![xdash: A Modular, Typed, and Extensible TypeScript Library](https://github.com/shtse8/xdash/blob/main/raw/banner.png?raw=true)

Welcome to **xdash** – a lean and efficient TypeScript utility library designed to enhance your development workflow. With a focus on simplicity, performance, and strong typing, xdash equips you with a carefully selected set of tools that make TypeScript development smoother and more enjoyable.

<p align="center">
  <a href="https://bundlephobia.com/package/xdash">
    <img src="https://img.shields.io/bundlephobia/minzip/xdash?label=minzipped">
  </a>
  <a href="https://www.npmjs.com/package/xdash">
    <img src="https://img.shields.io/npm/dm/xdash.svg">
  </a>
  <a href="https://www.npmjs.com/package/xdash">
    <img src="https://img.shields.io/npm/v/xdash.svg">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/xdash.svg">
  </a>
</p>

## Why xdash? 🤔

**xdash** embodies the principle of doing more with less. It's built for developers who appreciate:

- **Modularity**: 📦 Import only what you need, ensuring a lightweight bundle.
- **Tree-Shakability**: 🌳 Fully supports modern build tools for an optimized final bundle.
- **Simplicity & Performance**: ⚡ Delivers straightforward solutions without sacrificing execution speed.
- **Strong Typing & Type Guards**: 🔒 Enhances code safety and reliability, making your development process more intuitive and error-free.

## Key Features 🔑

- **Tailored Utilities**: 🛠 Functions and helpers designed specifically for TypeScript projects.
- **High Performance**: 🚀 Prioritizes efficient execution to keep your applications running smoothly.
- **TypeScript First**: 📘 Leverages TypeScript’s capabilities to improve code quality and developer experience.
- **Easily Extensible**: 📐 Flexible architecture allows for easy expansion and customization of the toolkit.

## Installation 💾

Get started with xdash by adding it to your project:

```bash
npm install xdash
# or
yarn add xdash
# or
pnpm add xdash
# or 
bun install xdash
```

## Example Usage 📝

Dive into xdash with a simple usage example:

```typescript
import * as x from 'xdash';
// import * as x_ from 'xdash'; // If you prefer to use a different name

let myVar = "Hello, xdash!";

if (x.isStr(myVar)) {
  console.log(myVar); // Outputs: "Hello, xdash!"
}
```

You can also import individual utilities to ensure tree-shakability:

```typescript
import { isStr } from 'xdash';

let myVar = "Hello, xdash!";

if (isStr(myVar)) {
  console.log(myVar); // Outputs: "Hello, xdash!"
}
```

[View the full documentation](https://shtse8.github.io/xdash/) to explore all the available utilities and their usage.

## Contributing 🤝

Your contributions can help make xdash even better. Whether you're improving documentation, adding new utilities, or fixing bugs, we welcome your involvement. Check our [contribution guidelines](#) for details on how to contribute.

## License 📄

xdash is available under the MIT License. For more information, see the [LICENSE](#) file.

## Connect with Us 🌐

Stay updated on the latest xdash developments by following the project on GitHub. Your feedback and contributions are invaluable to us!
