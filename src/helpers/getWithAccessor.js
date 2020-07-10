import get from 'lodash/get'
import isFunction from 'lodash/isFunction'
import isNil from 'lodash/isNil'

export default function getWithAccessor(target, accessor, defaultValue) {
  const value = isFunction(accessor) ? accessor(target) : get(target, accessor)

  return !isNil(value) ? value : defaultValue
}
