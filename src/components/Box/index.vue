<template>
  <div class="box" :style="styles">
    <slot />
  </div>
</template>

<script>
import includes from 'lodash/includes'
import isNil from 'lodash/isNil'
import isNaN from 'lodash/isNaN'
import { getRemFromSpacing, spacingAliases } from '../../constants/spacing'

export default {
  props: {
    padding: getSpacingPropType('padding'),
    paddingBottom: getSpacingPropType('paddingBottom'),
    paddingLeft: getSpacingPropType('paddingLeft'),
    paddingRight: getSpacingPropType('paddingRight'),
    paddingTop: getSpacingPropType('paddingTop'),
    paddingX: getSpacingPropType('paddingX'),
    paddingY: getSpacingPropType('paddingY'),
  },
  data: () => ({
    isKeyDown: false,
  }),
  computed: {
    styles() {
      return {
        padding: getRemFromSpacing(this.padding),
        paddingBottom: getRemFromSpacing(
          !isNil(this.paddingBottom) ? this.paddingBottom : this.paddingY,
        ),
        paddingLeft: getRemFromSpacing(
          !isNil(this.paddingLeft) ? this.paddingLeft : this.paddingX,
        ),
        paddingRight: getRemFromSpacing(
          !isNil(this.paddingRight) ? this.paddingRight : this.paddingX,
        ),
        paddingTop: getRemFromSpacing(
          !isNil(this.paddingTop) ? this.paddingTop : this.paddingY,
        ),
      }
    },
  },
}

function getIsSpacingPropValid(propName) {
  return (value) => {
    const isValid =
      includes(['', ...spacingAliases], value) || !isNaN(parseFloat(value))

    if (!isValid) {
      // eslint-disable-next-line no-console
      console.error(
        `Box: The "${propName}" prop must be a number to be multiplied by 4, or one of the following spacingAliases:`,
        String(spacingAliases),
      )
    }

    return isValid
  }
}

function getSpacingPropType(name) {
  return {
    default: '',
    type: [Number, String],
    validator: getIsSpacingPropValid(name),
  }
}
</script>
