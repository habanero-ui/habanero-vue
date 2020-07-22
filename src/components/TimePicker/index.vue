<template>
  <DateTimePicker
    :isCalendarEnabled="false"
    v-bind="DateTimePickerProps"
    mode="single"
  />
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
      default: 'h:i K',
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
