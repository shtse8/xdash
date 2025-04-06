export * from './typed'
export * from './types'
export * from './function'
export * from './string'
export * from './misc'
export * from './array'
// Removed: export * from './semantic'
export * from './chain'
export * from './object'
export * from './switch'
export * from './cache'

import * as typed from './typed'
import * as types from './types'
import * as fnOps from './function'
import * as str from './string'
import * as misc from './misc'
import * as array from './array'
// Removed: import * as text from './semantic'
import * as chain from './chain'
import * as object from './object'
import * as switchOps from './switch'
import * as cache from './cache'
export default {
    ...typed,
    ...types,
    ...fnOps,
    ...str,
    ...misc,
    ...array,
    // Removed: ...text,
    ...chain,
    ...object,
    ...switchOps,
    ...cache
}