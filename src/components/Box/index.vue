<template>
  <div class="box" :style="styles">
    <slot />
  </div>
</template>

<script>
import includes from 'lodash/includes'
import isNil from 'lodash/isNil'
import isNaN from 'lodash/isNaN'
import isNumber from 'lodash/isNumber'
import omitBy from 'lodash/omitBy'
import spacingAliases from '../../constants/spacingAliases'

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
      return omitBy(
        {
          padding: getRemFromSpacing(this.padding),
          paddingBottom: getRemFromSpacing(this.paddingBottom || this.paddingY),
          paddingLeft: getRemFromSpacing(this.paddingLeft || this.paddingX),
          paddingRight: getRemFromSpacing(this.paddingRight || this.paddingX),
          paddingTop: getRemFromSpacing(this.paddingTop || this.paddingY),
        },
        isNil,
      )
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
        `Box: The "${propName}" prop must be a number to be multiplied by 4, or one of the following aliases:`,
        String(spacingAliases),
      )
    }

    return isValid
  }
}

function getRemFromSpacing(spacing) {
  if (isNumber(spacing) || !isNaN(parseFloat(spacing))) {
    return `${(spacing * 4) / 16}rem`
  }

  const pxToRem = (px) => px / 16

  return {
    none: '0',
    gutter: `${pxToRem(24)}rem`,
    xxsmall: `${pxToRem(4)}rem`,
    xsmall: `${pxToRem(8)}rem`,
    small: `${pxToRem(12)}rem`,
    medium: `${pxToRem(16)}rem`,
    large: `${pxToRem(32)}rem`,
    xlarge: `${pxToRem(64)}rem`,
    xxlarge: `${pxToRem(128)}rem`,
  }[spacing]
}

function getSpacingPropType(name) {
  return {
    default: '',
    type: [Number, String],
    validator: getIsSpacingPropValid(name),
  }
}
</script>
