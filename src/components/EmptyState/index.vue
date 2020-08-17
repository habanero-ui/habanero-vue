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
import PropValidation from '../../mixins/PropValidation'
import Icon from '../Icon/index'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: { Icon, Stack, Typography },
  mixins: [
    PropValidation({
      align: ['center', 'left', 'right', 'stretch'],
    }),
  ],
  props: {
    align: {
      default: 'center',
      type: String,
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
