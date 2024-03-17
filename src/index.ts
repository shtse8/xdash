
export * from './typed'
export * from './types'
export * from './func'
export * from './str'
export * from './misc'
export * from './array'
export * from './text'
export * from './chain'
export * from './object'

import * as typed from './typed'
import * as types from './types'
import * as fnOps from './func'
import * as str from './str'
import * as misc from './misc'
import * as array from './array'
import * as text from './text'
import * as chain from './chain'
import * as object from './object'
export default {
    ...typed,
    ...types,
    ...fnOps,
    ...str,
    ...misc,
    ...array,
    ...text,
    ...chain,
    ...object
}