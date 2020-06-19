<script>
import includes from 'lodash/includes'
import columnWidths from '../../constants/columnWidths'

export default {
  props: {
    width: {
      default: 'fluid',
      type: String,
      validator: getIsWidthValid,
    },
  },
  render(h) {
    return this.$slots.default
  },
}

function getIsWidthValid(value) {
  const isValid = includes(columnWidths, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Column: The "width" prop must be one of the following:',
      String(columnWidths),
    )
  }

  return isValid
}
</script>
