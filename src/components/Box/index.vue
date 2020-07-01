<template>
  <component :is="component" :class="classes" :style="styles">
    <slot />
  </component>
</template>

<script>
import includes from 'lodash/includes'
import isNil from 'lodash/isNil'
import isNaN from 'lodash/isNaN'
import isNumber from 'lodash/isNumber'
import map from 'lodash/map'
import omitBy from 'lodash/omitBy'
import without from 'lodash/without'
import colors from '../../constants/colors'
import spacingAliases from '../../constants/spacingAliases'

export default {
  props: {
    backgroundColor: {
      default: 'none',
      type: String,
      validator: getIsBackgroundColorValid,
    },
    component: {
      default: 'div',
      type: String,
    },
    margin: getSpacingPropType('margin'),
    marginBottom: getSpacingPropType('marginBottom'),
    marginLeft: getSpacingPropType('marginLeft'),
    marginRight: getSpacingPropType('marginRight'),
    marginTop: getSpacingPropType('marginTop'),
    marginX: getSpacingPropType('marginX'),
    marginY: getSpacingPropType('marginY'),
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
    classes() {
      return ['box', `box--background-color-${this.backgroundColor}`]
    },
    styles() {
      return omitBy(
        {
          margin: getRemFromSpacing(this.margin),
          marginBottom: getRemFromSpacing(this.marginBottom || this.marginY),
          marginLeft: getRemFromSpacing(this.marginLeft || this.marginX),
          marginRight: getRemFromSpacing(this.marginRight || this.marginX),
          marginTop: getRemFromSpacing(this.marginTop || this.marginY),
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

function getIsBackgroundColorValid(value) {
  const isValid = includes(colors, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Box: The "backgroundColor" prop must be one of the following:',
      String(colors),
    )
  }

  return isValid
}

function getIsSpacingPropValid(propName) {
  return (value) => {
    const negativeSpacingAliases = map(
      without(spacingAliases, 'none'),
      (alias) => `-${alias}`,
    )
    const isValid =
      includes(['', ...spacingAliases, ...negativeSpacingAliases], value) ||
      !isNaN(parseFloat(value))

    if (!isValid) {
      // eslint-disable-next-line no-console
      console.error(
        `Box: The "${propName}" prop must be a number to be multiplied by 4, or one of the following aliases:`,
        String([...spacingAliases, ...negativeSpacingAliases]),
      )
    }

    return isValid
  }
}

export function getRemFromSpacing(spacing) {
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
    large: `${pxToRem(40)}rem`,
    xlarge: `${pxToRem(64)}rem`,
    xxlarge: `${pxToRem(128)}rem`,
    '-gutter': `-${pxToRem(24)}rem`,
    '-xxsmall': `-${pxToRem(4)}rem`,
    '-xsmall': `-${pxToRem(8)}rem`,
    '-small': `-${pxToRem(12)}rem`,
    '-medium': `-${pxToRem(16)}rem`,
    '-large': `-${pxToRem(40)}rem`,
    '-xlarge': `-${pxToRem(64)}rem`,
    '-xxlarge': `-${pxToRem(128)}rem`,
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

<style scoped>
.box--background-color-blue {
  @apply bg-blue;
}
.box--background-color-border {
  @apply bg-border;
}
.box--background-color-error {
  @apply bg-error;
}
.box--background-color-gold {
  @apply bg-gold;
}
.box--background-color-green {
  @apply bg-green;
}
.box--background-color-info {
  @apply bg-info;
}
.box--background-color-offwhite {
  @apply bg-offwhite;
}
.box--background-color-orange {
  @apply bg-orange;
}
.box--background-color-pink {
  @apply bg-pink;
}
.box--background-color-purple {
  @apply bg-purple;
}
.box--background-color-subtle {
  @apply bg-subtle;
}
.box--background-color-success {
  @apply bg-success;
}
.box--background-color-warning {
  @apply bg-warning;
}
</style>
