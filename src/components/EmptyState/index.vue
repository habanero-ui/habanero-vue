<template>
  <div :class="classes">
    <Stack :align="align" space="medium">
      <Icon v-if="iconName" :name="iconName" :size="iconSize" />
      <Typography v-if="title" variant="h5">
        {{ title }}
      </Typography>
      <Typography v-if="message" color="subtle">
        {{ message }}
      </Typography>
      <slot />
    </Stack>
  </div>
</template>

<script>
import includes from 'lodash/includes'
import Icon from '../Icon/index'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: { Icon, Stack, Typography },
  props: {
    align: {
      default: 'center',
      type: String,
      validator: getIsAlignValid,
    },
    iconName: {
      default: '',
      type: String,
    },
    iconSize: {
      default: 'large',
      type: String,
    },
    message: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
  },
  computed: {
    classes() {
      return ['empty-state', `empty-state--align-${this.align}`]
    },
  },
}

function getIsAlignValid(value) {
  const isValid = includes(['center', 'left', 'right', 'stretch'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Stack: The "align" prop must be one of the following when defined:',
      String(['center', 'left', 'right', 'stretch']),
    )
  }

  return isValid
}
</script>

<style scoped>
.empty-state {
  @apply flex flex-col;
}
.empty-state--align-left {
  @apply items-start;
}
.empty-state--align-center {
  @apply items-center;
}
.empty-state--align-right {
  @apply items-end;
}
.empty-state--align-stretch {
  @apply items-stretch;
}
</style>
