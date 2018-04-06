import composeK from 'crocks/helpers/composeK'
import isString from 'crocks/predicates/isString'
import prop from 'crocks/Maybe/prop'
import safe from 'crocks/Maybe/safe'

// getValue :: a -> Maybe b
const getValue = key => 
  prop(key)

// getHead :: a -> Maybe b
const getHead =
  prop(0)

// getStringFirst :: a -> Maybe String
const getStringFirst = key =>
  composeK(
    safe(isString),
    getValue(key),
    getHead
  )

// getString :: a -> Maybe String
const getString = key =>
  composeK(
    safe(isString),
    getValue(key)
  )

export default {
  getValue,
  getHead,
  getString,
  getStringFirst
}