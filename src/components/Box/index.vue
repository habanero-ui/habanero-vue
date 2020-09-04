<template>
  <component :is="component" :class="classes" :style="styles">
    <slot />
  </component>
</template>

<script>
import includes from 'lodash/includes'
import isNaN from 'lodash/isNaN'
import isNil from 'lodash/isNil'
import isNumber from 'lodash/isNumber'
import map from 'lodash/map'
import omitBy from 'lodash/omitBy'
import without from 'lodash/without'

import borderRadii from '../../constants/borderRadii'
import colors from '../../constants/colors'
import spacingAliases from '../../constants/spacingAliases'
import PropValidation from '../../mixins/PropValidation'

export default {
  mixins: [
    PropValidation({
      backgroundColor: colors,
      borderRadius: borderRadii,
      margin: getIsSpacingPropValid('margin'),
      marginBottom: getIsSpacingPropValid('marginBottom'),
      marginLeft: getIsSpacingPropValid('marginLeft'),
      marginRight: getIsSpacingPropValid('marginRight'),
      marginTop: getIsSpacingPropValid('marginTop'),
      marginX: getIsSpacingPropValid('marginX'),
      marginY: getIsSpacingPropValid('marginY'),
      padding: getIsSpacingPropValid('padding'),
      paddingBottom: getIsSpacingPropValid('paddingBottom'),
      paddingLeft: getIsSpacingPropValid('paddingLeft'),
      paddingRight: getIsSpacingPropValid('paddingRight'),
      paddingTop: getIsSpacingPropValid('paddingTop'),
      paddingX: getIsSpacingPropValid('paddingX'),
      paddingY: getIsSpacingPropValid('paddingY'),
    }),
  ],
  props: {
    backgroundColor: {
      default: 'none',
      type: String,
    },
    borderRadius: {
      default: 'none',
      type: String,
    },
    component: {
      default: 'div',
      type: String,
    },
    margin: { default: '', type: [Number, String] },
    marginBottom: { default: '', type: [Number, String] },
    marginLeft: { default: '', type: [Number, String] },
    marginRight: { default: '', type: [Number, String] },
    marginTop: { default: '', type: [Number, String] },
    marginX: { default: '', type: [Number, String] },
    marginY: { default: '', type: [Number, String] },
    padding: { default: '', type: [Number, String] },
    paddingBottom: { default: '', type: [Number, String] },
    paddingLeft: { default: '', type: [Number, String] },
    paddingRight: { default: '', type: [Number, String] },
    paddingTop: { default: '', type: [Number, String] },
    paddingX: { default: '', type: [Number, String] },
    paddingY: { default: '', type: [Number, String] },
    showInteractionOverlay: {
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    isKeyDown: false,
  }),
  computed: {
    classes() {
      return [
        'box',
        `box--background-color-${this.backgroundColor}`,
        `box--border-radius-${this.borderRadius}`,
        {
          'box--show-interaction-overlay': this.showInteractionOverlay,
        },
      ]
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
        `Box: Bad value "${value}". The "${propName}" prop must be a number to be multiplied by 4, or one of the following aliases:`,
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
    '-gutter': `-${pxToRem(24)}rem`,
    '-large': `-${pxToRem(40)}rem`,
    '-medium': `-${pxToRem(16)}rem`,
    '-small': `-${pxToRem(12)}rem`,
    '-xlarge': `-${pxToRem(64)}rem`,
    '-xsmall': `-${pxToRem(8)}rem`,
    '-xxlarge': `-${pxToRem(128)}rem`,
    '-xxsmall': `-${pxToRem(4)}rem`,
    gutter: `${pxToRem(24)}rem`,
    large: `${pxToRem(40)}rem`,
    medium: `${pxToRem(16)}rem`,
    none: '0',
    small: `${pxToRem(12)}rem`,
    xlarge: `${pxToRem(64)}rem`,
    xsmall: `${pxToRem(8)}rem`,
    xxlarge: `${pxToRem(128)}rem`,
    xxsmall: `${pxToRem(4)}rem`,
  }[spacing]
}
</script>

<style scoped>
.box--background-color-black {
  @apply bg-black;
}
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
.box--border-radius-small {
  border-radius: 0.125rem; /* 2px */
}
.box--border-radius-medium {
  border-radius: 0.3125rem; /* 5px */
}
.box--border-radius-full {
  border-radius: 9999px;
}
.box--show-interaction-overlay {
  @apply cursor-pointer relative;
}
.box--show-interaction-overlay::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: black;
  content: '';
}
.box--background-color-black.box--show-interaction-overlay::after,
.box--background-color-error.box--show-interaction-overlay::after,
.box--background-color-gold.box--show-interaction-overlay::after,
.box--background-color-info.box--show-interaction-overlay::after,
.box--background-color-subtle.box--show-interaction-overlay::after,
.box--background-color-success.box--show-interaction-overlay::after {
  background-color: white;
}
.box--background-color-black.box--show-interaction-overlay:hover::after,
.box--background-color-error.box--show-interaction-overlay:hover::after,
.box--background-color-gold.box--show-interaction-overlay:hover::after,
.box--background-color-info.box--show-interaction-overlay:hover::after,
.box--background-color-subtle.box--show-interaction-overlay:hover::after,
.box--background-color-success.box--show-interaction-overlay:hover::after {
  opacity: 0.2;
}
.box--background-color-black.box--show-interaction-overlay:active::after,
.box--background-color-error.box--show-interaction-overlay:active::after,
.box--background-color-gold.box--show-interaction-overlay:active::after,
.box--background-color-info.box--show-interaction-overlay:active::after,
.box--background-color-subtle.box--show-interaction-overlay:active::after,
.box--background-color-success.box--show-interaction-overlay:active::after {
  opacity: 0.4;
}
.box--background-color-blue.box--show-interaction-overlay::after,
.box--background-color-border.box--show-interaction-overlay::after,
.box--background-color-green.box--show-interaction-overlay::after,
.box--background-color-none.box--show-interaction-overlay::after,
.box--background-color-offwhite.box--show-interaction-overlay::after,
.box--background-color-orange.box--show-interaction-overlay::after,
.box--background-color-pink.box--show-interaction-overlay::after,
.box--background-color-purple.box--show-interaction-overlay::after,
.box--background-color-warning.box--show-interaction-overlay::after {
  background-color: black;
}
.box--background-color-blue.box--show-interaction-overlay:hover::after,
.box--background-color-border.box--show-interaction-overlay:hover::after,
.box--background-color-green.box--show-interaction-overlay:hover::after,
.box--background-color-none.box--show-interaction-overlay:hover::after,
.box--background-color-offwhite.box--show-interaction-overlay:hover::after,
.box--background-color-orange.box--show-interaction-overlay:hover::after,
.box--background-color-pink.box--show-interaction-overlay:hover::after,
.box--background-color-purple.box--show-interaction-overlay:hover::after,
.box--background-color-warning.box--show-interaction-overlay:hover::after {
  opacity: 0.1;
}
.box--background-color-blue.box--show-interaction-overlay:active::after,
.box--background-color-border.box--show-interaction-overlay:active::after,
.box--background-color-green.box--show-interaction-overlay:active::after,
.box--background-color-none.box--show-interaction-overlay:active::after,
.box--background-color-offwhite.box--show-interaction-overlay:active::after,
.box--background-color-orange.box--show-interaction-overlay:active::after,
.box--background-color-pink.box--show-interaction-overlay:active::after,
.box--background-color-purple.box--show-interaction-overlay:active::after,
.box--background-color-warning.box--show-interaction-overlay:active::after {
  opacity: 0.25;
}
</style>
