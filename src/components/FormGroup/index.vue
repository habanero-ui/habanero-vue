<template>
  <Stack class="form-group" :component="component" :space="space">
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
    },
  },
}
</script>
