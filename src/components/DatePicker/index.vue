<template>
  <DateTimePicker :isTimeEnabled="false" v-bind="DateTimePickerProps" />
</template>

<script>
import pick from 'lodash/pick'

import DateTimePicker from '../DateTimePicker/index'

export default {
  components: {
    DateTimePicker,
  },
  props: {
    ...DateTimePicker.props,
    format: {
      default: 'm/d/Y',
      type: String,
    },
  },
  computed: {
    DateTimePickerProps() {
      return {
        ...pick(this.$props, Object.keys(DateTimePicker.props)),
        ...this.$attrs,
      }
    },
  },
}
</script>
