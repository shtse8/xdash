
export * from './typed'
export * from './types'
export * from './fn-ops'
export * from './str'
export * from './misc'
export * from './array'

import * as typed from './typed'
import * as types from './types'
import * as fnOps from './fn-ops'
import * as str from './str'
import * as misc from './misc'
import * as array from './array'
export default {
    ...typed,
    ...types,
    ...fnOps,
    ...str,
    ...misc,
    ...array
}