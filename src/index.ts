
export * from './typed'
export * from './types'
export * from './fn-ops'
export * from './str'
export * from './misc'
export * from './array'
export * from './text'

import * as typed from './typed'
import * as types from './types'
import * as fnOps from './fn-ops'
import * as str from './str'
import * as misc from './misc'
import * as array from './array'
import * as text from './text'
export default {
    ...typed,
    ...types,
    ...fnOps,
    ...str,
    ...misc,
    ...array,
    ...text
}