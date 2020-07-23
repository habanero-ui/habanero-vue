import curry from 'lodash/fp/curry'
import includes from 'lodash/fp/includes'
import without from 'lodash/fp/without'

function toggleInArray(x, xs) {
  return includes(x, xs) ? without([x], xs) : [...xs, x]
}

export default curry(toggleInArray)
