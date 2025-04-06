import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "xdash",
  description: "A lean TypeScript utility library designed for simplicity and performance.",
  base: '/xdash/', // Base URL for GitHub Pages deployment

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api' } // Placeholder for API docs
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is xdash?', link: '/introduction' }, // Placeholder
          { text: 'Getting Started', link: '/getting-started' } // Placeholder
        ]
      },
      {
        text: 'API Reference',
        collapsed: false, // Keep expanded for now
        items: [
          { text: 'API Index', link: '/api/' }, // Link to the generated index
          {
            text: 'Array',
            collapsed: true,
            items: [
              { text: 'chunk', link: '/api/Function.chunk' },
              { text: 'compact', link: '/api/Function.compact' },
              { text: 'concat', link: '/api/Function.concat' },
              { text: 'difference', link: '/api/Function.difference' },
              { text: 'filter', link: '/api/Function.filter' }, // Assuming filter from array.ts
              { text: 'first', link: '/api/Function.first' },
              { text: 'firstOrDefault', link: '/api/Function.firstOrDefault' },
              { text: 'flatMap', link: '/api/Function.flatMap' },
              { text: 'groupBy', link: '/api/Function.groupBy' },
              { text: 'hasOne', link: '/api/Function.hasOne' },
              { text: 'intersection', link: '/api/Function.intersection' },
              { text: 'last', link: '/api/Function.last' },
              { text: 'lastOrDefault', link: '/api/Function.lastOrDefault' },
              { text: 'map', link: '/api/Function.map' }, // Assuming map from array.ts
              { text: 'reduce', link: '/api/Function.reduce' }, // Assuming reduce from array.ts
              { text: 'take', link: '/api/Function.take' },
              { text: 'takeRight', link: '/api/Function.takeRight' },
              { text: 'union', link: '/api/Function.union' },
              { text: 'uniq', link: '/api/Function.uniq' },
              { text: 'uniqBy', link: '/api/Function.uniqBy' },
            ]
          },
          {
            text: 'Async',
            collapsed: true,
            items: [
              { text: 'filter', link: '/api/Function.filter-1' }, // Adjust if filename differs for async filter
              { text: 'fromEvent', link: '/api/Function.fromEvent' },
              { text: 'fromEventHandler', link: '/api/Function.fromEventHandler' },
              { text: 'map', link: '/api/Function.map-1' }, // Adjust if filename differs for async map
              { text: 'merge', link: '/api/Function.merge' },
              { text: 'merge2', link: '/api/Function.merge2' },
              { text: 'until', link: '/api/Function.until' },
            ]
          },
           {
            text: 'Cache', // Added Cache section
            collapsed: true,
            items: [
                { text: 'Cache (Class)', link: '/api/Class.Cache' },
                { text: 'cacheFunc', link: '/api/Function.cacheFunc' },
                { text: 'Invalidator (Class)', link: '/api/Class.Invalidator' },
                { text: 'CacheOptions (Interface)', link: '/api/Interface.CacheOptions' },
            ]
          },
          {
            text: 'Chain',
            collapsed: true,
            items: [
              { text: '$op', link: '/api/Function.$op' },
              { text: 'Chain (Class)', link: '/api/Class.Chain' },
              { text: 'chain', link: '/api/Function.chain' },
            ]
          },
          {
            text: 'Function',
            collapsed: true,
            items: [
              { text: 'and', link: '/api/Function.and' },
              { text: 'bind', link: '/api/Function.bind' },
              { text: 'bindSelf', link: '/api/Function.bindSelf' },
              { text: 'debounce', link: '/api/Function.debounce' },
              { text: 'ensure', link: '/api/Function.ensure' },
              { text: 'memoize', link: '/api/Function.memoize' },
              { text: 'not', link: '/api/Function.not' },
              { text: 'once', link: '/api/Function.once' },
              { text: 'or', link: '/api/Function.or' },
              { text: 'throttle', link: '/api/Function.throttle' },
              { text: 'xor', link: '/api/Function.xor' },
            ]
          },
          {
            text: 'Misc',
            collapsed: true,
            items: [
              { text: 'noop', link: '/api/Function.noop' },
            ]
          },
          {
            text: 'Object',
            collapsed: true,
            items: [
              { text: 'entries', link: '/api/Function.entries' }, // Assuming entries from object.ts
              { text: 'filterKeys', link: '/api/Function.filterKeys' },
              { text: 'filterValues', link: '/api/Function.filterValues' },
              { text: 'hasKey', link: '/api/Function.hasKey' },
              { text: 'hasValue', link: '/api/Function.hasValue' },
              { text: 'invert', link: '/api/Function.invert' },
              { text: 'keys', link: '/api/Function.keys' }, // Assuming keys from object.ts
              { text: 'mapKeys', link: '/api/Function.mapKeys' },
              { text: 'mapValues', link: '/api/Function.mapValues' },
              { text: 'merge', link: '/api/Function.merge-1' }, // Adjust if filename differs for object merge
              { text: 'omit', link: '/api/Function.omit' },
              { text: 'pick', link: '/api/Function.pick' },
              { text: 'values', link: '/api/Function.values' }, // Assuming values from object.ts
            ]
          },
          // Removed Semantic section
          {
            text: 'String',
            collapsed: true,
            items: [
              { text: 'camelCase', link: '/api/Function.camelCase' },
              { text: 'capitalize', link: '/api/Function.capitalize' },
              { text: 'detectCase', link: '/api/Function.detectCase' },
              { text: 'kebabCase', link: '/api/Function.kebabCase' },
              { text: 'lowerCase', link: '/api/Function.lowerCase' },
              { text: 'pascalCase', link: '/api/Function.pascalCase' },
              { text: 'separateWords', link: '/api/Function.separateWords' },
              { text: 'snakeCase', link: '/api/Function.snakeCase' },
              { text: 'split', link: '/api/Function.split' },
              { text: 'upperCase', link: '/api/Function.upperCase' },
            ]
          },
          {
            text: 'Switch',
            collapsed: true,
            items: [
              { text: 'InlineSwitch (Class)', link: '/api/Class.InlineSwitch' },
              { text: 'inlineSwitch', link: '/api/Function.inlineSwitch' },
            ]
          },
          {
            text: 'Typed',
            collapsed: true,
            items: [
              { text: 'asError', link: '/api/Function.asError' },
              { text: 'entries', link: '/api/Function.entries-1' }, // Adjust if filename differs
              { text: 'fillKeys', link: '/api/Function.fillKeys' },
              { text: 'hasOwn', link: '/api/Function.hasOwn' },
              { text: 'isArray', link: '/api/Function.isArray' },
              { text: 'isEmpty', link: '/api/Function.isEmpty' },
              { text: 'isFunction', link: '/api/Function.isFunction' },
              { text: 'isKeyOf', link: '/api/Function.isKeyOf' },
              { text: 'isNullish', link: '/api/Function.isNullish' },
              { text: 'isNumber', link: '/api/Function.isNumber' },
              { text: 'isObject', link: '/api/Function.isObject' },
              { text: 'isPromise', link: '/api/Function.isPromise' },
              { text: 'isString', link: '/api/Function.isString' },
              { text: 'isTruthy', link: '/api/Function.isTruthy' },
              { text: 'keys', link: '/api/Function.keys-1' }, // Adjust if filename differs
              { text: 'throwError', link: '/api/Function.throwError' },
              { text: 'toEnum', link: '/api/Function.toEnum' },
              { text: 'toObj', link: '/api/Function.toObj' },
              { text: 'values', link: '/api/Function.values-1' }, // Adjust if filename differs
            ]
          },
          {
            text: 'Types', // Exported types from types.ts
            collapsed: true,
            items: [
              { text: 'ActionType', link: '/api/TypeAlias.ActionType' },
              { text: 'Capitalize', link: '/api/TypeAlias.Capitalize' },
              { text: 'Constructor', link: '/api/TypeAlias.Constructor' },
              { text: 'DeepPartial', link: '/api/TypeAlias.DeepPartial' },
              { text: 'ElementType', link: '/api/TypeAlias.ElementType' },
              { text: 'ElementTypeOfArray', link: '/api/TypeAlias.ElementTypeOfArray' },
              { text: 'EnforceRequiredField', link: '/api/TypeAlias.EnforceRequiredField' },
              { text: 'EnumFromList', link: '/api/TypeAlias.EnumFromList' },
              { text: 'ExcludeProperties', link: '/api/TypeAlias.ExcludeProperties' },
              { text: 'ExclusiveOr', link: '/api/TypeAlias.ExclusiveOr' },
              { text: 'FunctionType', link: '/api/TypeAlias.FunctionType' },
              { text: 'HexDigit', link: '/api/TypeAlias.HexDigit' },
              { text: 'IsInteger', link: '/api/TypeAlias.IsInteger' },
              { text: 'IsPositive', link: '/api/TypeAlias.IsPositive' },
              { text: 'IsValidNumber', link: '/api/TypeAlias.IsValidNumber' },
              { text: 'KeyOfValueType', link: '/api/TypeAlias.KeyOfValueType' },
              { text: 'MaybeArray', link: '/api/TypeAlias.MaybeArray' },
              { text: 'MaybePromise', link: '/api/TypeAlias.MaybePromise' },
              { text: 'Merge', link: '/api/TypeAlias.Merge' },
              { text: 'Merge3', link: '/api/TypeAlias.Merge3' },
              { text: 'Merge4', link: '/api/TypeAlias.Merge4' },
              { text: 'Merge5', link: '/api/TypeAlias.Merge5' },
              { text: 'Merge6', link: '/api/TypeAlias.Merge6' },
              { text: 'Merge7', link: '/api/TypeAlias.Merge7' },
              { text: 'Nullable', link: '/api/TypeAlias.Nullable' },
              { text: 'ObjectKey', link: '/api/TypeAlias.ObjectKey' },
              { text: 'ObjectValue', link: '/api/TypeAlias.ObjectValue' },
              { text: 'OneOf', link: '/api/TypeAlias.OneOf' },
              { text: 'PickByValueType', link: '/api/TypeAlias.PickByValueType' },
              { text: 'PositiveNumber', link: '/api/TypeAlias.PositiveNumber' },
              { text: 'PromiseResultType', link: '/api/TypeAlias.PromiseResultType' },
              { text: 'Range', link: '/api/TypeAlias.Range' },
              { text: 'RequireFields', link: '/api/TypeAlias.RequireFields' },
              { text: 'Tuple', link: '/api/TypeAlias.Tuple' },
              { text: 'UnionToIntersection', link: '/api/TypeAlias.UnionToIntersection' },
              { text: 'UnwrapArray', link: '/api/TypeAlias.UnwrapArray' },
              { text: 'UnwrapPromise', link: '/api/TypeAlias.UnwrapPromise' },
              { text: 'ValueTypeOfKey', link: '/api/TypeAlias.ValueTypeOfKey' },
            ]
          }
          // Add links to individual modules here later
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shtse8/xdash' }
    ],

    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present Kyle Tse'
    }
  }
})
