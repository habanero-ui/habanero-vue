<template>
  <button :class="classes" :disabled="disabled" :type="type">
    <Box
      :backgroundColor="contentBackgroundColor"
      class="button__content"
      :showInteractionOverlay="!disabled"
    >
      <Typography
        v-if="text"
        class="button__text"
        :class="{ invisible: isLoading }"
        :color="color"
        :colorIsBackground="variant === 'primary'"
        :variant="textVariant"
      >
        {{ text }}
      </Typography>
      <Icon
        v-if="iconName"
        class="button__icon"
        :class="{ invisible: isLoading }"
        :color="color"
        :colorIsBackground="variant === 'primary'"
        :name="iconName"
        :size="iconSize || size"
      />
      <Spinner
        v-if="isLoading"
        :color="color"
        :colorIsBackground="variant === 'primary'"
        style="position: absolute"
      />
    </Box>
  </button>
</template>

<script>
import buttonVariants from '../../constants/buttonVariants'
import colors from '../../constants/colors'
import iconSides from '../../constants/iconSides'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'
import Icon from '../Icon/index'
import Spinner from '../Spinner/index'
import Typography from '../Typography/index'

export default {
  components: {
    Box,
    Icon,
    Spinner,
    Typography,
  },
  mixins: [
    PropValidation({
      color: colors,
      iconSide: iconSides,
      size: ['small', 'medium'],
      variant: buttonVariants,
    }),
  ],
  props: {
    color: {
      default: 'black',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    iconName: {
      default: undefined,
      type: String,
    },
    iconSide: {
      default: 'right',
      type: String,
    },
    iconSize: {
      default: 'small',
      type: String,
    },
    isLoading: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'medium',
      type: String,
    },
    text: {
      default: undefined,
      type: String,
    },
    textVariant: {
      default: 'button',
      type: String,
    },
    type: {
      default: 'button',
      type: String,
    },
    variant: {
      default: 'primary',
      type: String,
    },
  },
  computed: {
    classes() {
      return [
        'button',
        {
          'button--has-icon': !!this.iconName,
          'button--has-text': !!this.text,
          'button--icon-left': this.iconSide === 'left',
          'button--is-loading': !!this.isLoading,
        },
        `button--color-${this.color}`,
        `button--icon-size-${this.iconSize}`,
        `button--size-${this.size}`,
        `button--variant-${this.variant}`,
      ]
    },

    contentBackgroundColor() {
      return this.variant === 'primary' ? this.color : undefined
    },
  },
}
</script>

<style scoped>
.button {
  @apply flex-none flex rounded-lg border border-transparent outline-none w-full;
}
.button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.button[disabled] .button__text {
  pointer-events: none;
}
.button--is-loading {
  pointer-events: none;
}
.button__content {
  @apply relative flex flex-1 justify-center items-center;
  border-radius: 0.3rem;
}
.button__content::before {
  @apply absolute inset-0 pointer-events-none transition-colors duration-300 ease-in-out border border-transparent;
  border-radius: 0.5rem;
  content: '';
}
.button:not(.button--variant-text) > .button__content::before {
  border-radius: 0.625rem;
  margin: -3px;
}
.button > .button__content::after {
  border-radius: 0.5rem;
}
.button:hover:not([disabled]) .button__text {
  @apply underline;
}
.button--variant-primary.button--color-gold {
  @apply border-gold;
}
.button--variant-primary.button--color-gold:focus > .button__content::before {
  @apply border-gold;
}
.button--variant-primary.button--color-black {
  @apply border-black;
}
.button--variant-primary.button--color-black:focus > .button__content::before {
  @apply border-black;
}
.button--variant-primary.button--color-blue {
  @apply border-blue;
}
.button--variant-primary.button--color-blue:focus > .button__content::before {
  @apply border-blue;
}
.button--variant-primary.button--color-border {
  @apply border-border;
}
.button--variant-primary.button--color-border:focus > .button__content::before {
  @apply border-border;
}
.button--variant-primary.button--color-green {
  @apply border-green;
}
.button--variant-primary.button--color-green:focus > .button__content::before {
  @apply border-green;
}
.button--variant-primary.button--color-orange {
  @apply border-orange;
}
.button--variant-primary.button--color-orange:focus > .button__content::before {
  @apply border-orange;
}
.button--variant-primary.button--color-pink {
  @apply border-pink;
}
.button--variant-primary.button--color-pink:focus > .button__content::before {
  @apply border-pink;
}
.button--variant-primary.button--color-purple {
  @apply border-purple;
}
.button--variant-primary.button--color-purple:focus > .button__content::before {
  @apply border-purple;
}
.button--variant-primary.button--color-error {
  @apply border-error;
}
.button--variant-primary.button--color-error:focus > .button__content::before {
  @apply border-error;
}
.button--variant-primary.button--color-info {
  @apply border-info;
}
.button--variant-primary.button--color-info:focus > .button__content::before {
  @apply border-info;
}
.button--variant-primary.button--color-offwhite {
  @apply border-offwhite;
}
.button--variant-primary.button--color-offwhite:focus
  > .button__content::before {
  @apply border-offwhite;
}
.button--variant-primary.button--color-subtle {
  @apply border-subtle;
}
.button--variant-primary.button--color-subtle:focus > .button__content::before {
  @apply border-subtle;
}
.button--variant-primary.button--color-success {
  @apply border-success;
}
.button--variant-primary.button--color-success:focus
  > .button__content::before {
  @apply border-success;
}
.button--variant-primary.button--color-warning {
  @apply border-warning;
}
.button--variant-primary.button--color-warning:focus
  > .button__content::before {
  @apply border-warning;
}

/**
  Variant - Secondary ---------- 
 */
.button--variant-secondary.button--color-gold {
  @apply border-gold;
}
.button--variant-secondary.button--color-gold:focus > .button__content::before {
  @apply border-gold;
}
.button--variant-secondary.button--color-black {
  @apply border-black;
}
.button--variant-secondary.button--color-black:focus
  > .button__content::before {
  @apply border-black;
}
.button--variant-secondary.button--color-blue {
  @apply border-blue;
}
.button--variant-secondary.button--color-blue:focus > .button__content::before {
  @apply border-blue;
}
.button--variant-secondary.button--color-border {
  @apply border-border;
}
.button--variant-secondary.button--color-border:focus
  > .button__content::before {
  @apply border-border;
}
.button--variant-secondary.button--color-green {
  @apply border-green;
}
.button--variant-secondary.button--color-green:focus
  > .button__content::before {
  @apply border-green;
}
.button--variant-secondary.button--color-orange {
  @apply border-orange;
}
.button--variant-secondary.button--color-orange:focus
  > .button__content::before {
  @apply border-orange;
}
.button--variant-secondary.button--color-pink {
  @apply border-pink;
}
.button--variant-secondary.button--color-pink:focus > .button__content::before {
  @apply border-pink;
}
.button--variant-secondary.button--color-purple {
  @apply border-purple;
}
.button--variant-secondary.button--color-purple:focus
  > .button__content::before {
  @apply border-purple;
}
.button--variant-secondary.button--color-error {
  @apply border-error;
}
.button--variant-secondary.button--color-error:focus
  > .button__content::before {
  @apply border-error;
}
.button--variant-secondary.button--color-info {
  @apply border-info;
}
.button--variant-secondary.button--color-info:focus > .button__content::before {
  @apply border-info;
}
.button--variant-secondary.button--color-offwhite {
  @apply border-offwhite;
}
.button--variant-secondary.button--color-offwhite:focus
  > .button__content::before {
  @apply border-offwhite;
}
.button--variant-secondary.button--color-subtle {
  @apply border-subtle;
}
.button--variant-secondary.button--color-subtle:focus
  > .button__content::before {
  @apply border-subtle;
}
.button--variant-secondary.button--color-success {
  @apply border-success;
}
.button--variant-secondary.button--color-success:focus
  > .button__content::before {
  @apply border-success;
}
.button--variant-secondary.button--color-warning {
  @apply border-warning;
}
.button--variant-secondary.button--color-warning:focus
  > .button__content::before {
  @apply border-warning;
}

/**
  Variant - Text ---------- 
 */
.button--variant-text.button--color-gold:focus > .button__content::before {
  @apply border-gold;
}
.button--variant-text.button--color-black:focus > .button__content::before {
  @apply border-black;
}
.button--variant-text.button--color-blue:focus > .button__content::before {
  @apply border-blue;
}
.button--variant-text.button--color-border:focus > .button__content::before {
  @apply border-border;
}
.button--variant-text.button--color-green:focus > .button__content::before {
  @apply border-green;
}
.button--variant-text.button--color-orange:focus > .button__content::before {
  @apply border-orange;
}
.button--variant-text.button--color-pink:focus > .button__content::before {
  @apply border-pink;
}
.button--variant-text.button--color-purple:focus > .button__content::before {
  @apply border-purple;
}
.button--variant-text.button--color-error:focus > .button__content::before {
  @apply border-error;
}
.button--variant-text.button--color-info:focus > .button__content::before {
  @apply border-info;
}
.button--variant-text.button--color-offwhite:focus > .button__content::before {
  @apply border-offwhite;
}
.button--variant-text.button--color-subtle:focus > .button__content::before {
  @apply border-subtle;
}
.button--variant-text.button--color-success:focus > .button__content::before {
  @apply border-success;
}
.button--variant-text.button--color-warning:focus > .button__content::before {
  @apply border-warning;
}

/**
  Size ---------------------- 
 */
:not(.button--variant-text).button--size-small > .button__content {
  padding-bottom: 0.4375rem;
  padding-top: 0.4375rem;
}
:not(.button--variant-text).button--size-medium > .button__content {
  padding-bottom: 0.8125rem;
  padding-top: 0.8125rem;
}
:not(.button--variant-text).button--has-icon.button--has-text.button--size-small.button--icon-size-small
  > .button__content {
  padding-bottom: 0.4375rem;
  padding-top: 0.4375rem;
}
:not(.button--variant-text).button--has-icon.button--has-text.button--size-small.button--icon-size-medium
  > .button__content {
  padding-bottom: 0.1875rem;
  padding-top: 0.1875rem;
}
:not(.button--variant-text).button--has-icon.button--has-text.button--size-small.button--icon-size-large
  > .button__content {
  padding-bottom: 0;
  padding-top: 0;
}
:not(.button--variant-text).button--has-icon.button--has-text.button--size-medium.button--icon-size-small
  > .button__content {
  padding-bottom: 0.8125rem;
  padding-top: 0.8125rem;
}
:not(.button--variant-text).button--has-icon.button--size-medium.button--icon-size-medium
  > .button__content {
  padding-bottom: 0.5625rem;
  padding-top: 0.5625rem;
}
:not(.button--variant-text).button--has-icon.button--has-text.button--size-medium.button--icon-size-large
  > .button__content {
  padding-bottom: 0.3125rem;
  padding-top: 0.3125rem;
}
:not(.button--variant-text).button--has-text > .button__content {
  @apply px-6;
  min-width: 8rem;
}
.button--variant-text > .button__content {
  @apply p-2 -m-2;
  min-width: 0;
}
.button--variant-text.button--has-icon.button--icon-size-medium
  > .button__content {
  @apply p-1 -m-1;
  min-width: 0;
}
.button--variant-text.button--has-icon.button--icon-size-large
  > .button__content {
  @apply p-0 m-0;
}

/**
  Icon ---------------------- 
 */
.button__text + .button__icon {
  @apply ml-4 -mr-2;
}
.button--variant-text > .button__content > .button__text + .button__icon {
  @apply ml-2 mr-0;
}
.button--icon-left > .button__content {
  @apply flex-row-reverse;
}
.button--icon-left > .button__content > .button__text + .button__icon {
  @apply mr-4 -ml-2;
}
.button--icon-left.button--variant-text
  > .button__content
  > .button__text
  + .button__icon {
  @apply mr-2 ml-0;
}
</style>
