<template>
  <Stack class="form-label" :component="component" :space="space">
    <Stack v-if="label || helperText" space="1">
      <Typography
        v-if="label"
        :component="labelComponent"
        :for="labelFor"
        variant="label-large"
      >
        {{ label }}
      </Typography>
      <Typography v-if="helperText" color="subtle" variant="label-small">
        {{ helperText }}
      </Typography>
    </Stack>
    <slot />
    <Typography v-if="error" color="error" variant="body-small">
      {{ error }}
    </Typography>
  </Stack>
</template>

<script>
import Stack from '../Stack/index'
import Typography from '../Typography/index'
import includes from 'lodash/includes'
import spacingAliases from '../../constants/spacingAliases'

export default {
  components: { Stack, Typography },
  props: {
    component: {
      default: 'fieldset',
      type: String,
    },
    error: {
      default: '',
      type: String,
    },
    helperText: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    labelComponent: {
      default: 'legend',
      type: String,
    },
    labelFor: {
      default: undefined,
      type: String,
    },
    space: {
      default: 'medium',
      type: String,
      validator: getIsSpaceValid,
    },
  },
}

function getIsSpaceValid(value) {
  const isValid =
    includes(['', ...spacingAliases], value) || !isNaN(parseFloat(value))

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      `FormLabel: The "space" prop must be a number to be multiplied by 4, or one of the following aliases:`,
      String(spacingAliases),
    )
  }

  return isValid
}
</script>
