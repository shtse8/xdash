---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "xdash"
  text: "The Lean & Mighty TypeScript Utility Library"
  tagline: Fast, Tiny, Creative & Functional. Built for modern development with effortless Tree Shaking.
  image:
    src: /banner.png # Assuming banner.png is moved to docs/public later
    alt: xdash banner
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started # Placeholder link
    - theme: alt
      text: View API Reference
      link: /api/ # Link to API index
features:
  - title: Blazing Fast ⚡
    details: Optimized for performance. xdash delivers speed without compromising on features. Get your results, faster.
  - title: Incredibly Tiny 🤏
    details: Modular and fully tree-shakable. Only include what you need, keeping your bundles lean and mean.
  - title: Functional & Creative ✨
    details: Embrace functional programming patterns with elegant and composable utilities. Write cleaner, more predictable code.
  - title: TypeScript First 🔒
    details: Built from the ground up with strong typing and type guards, enhancing code safety and developer experience.
---

## Simple Example

```typescript
import { capitalize, compact } from 'xdash';

// Capitalize a string
console.log(capitalize('hello xdash!')); // Output: Hello xdash!

// Remove falsy values from an array
const mixedArray = [0, 1, false, 2, '', 3, null, undefined, 4];
console.log(compact(mixedArray)); // Output: [ 1, 2, 3, 4 ]
```

## Ready to dive in?

Explore the [Getting Started guide](/getting-started) or jump straight into the [API Reference](/api/).
