<template>
  <div class="column"><slot /></div>
</template>

<script>
import columnWidths from '../../constants/columnWidths'
import PropValidation from '../../mixins/PropValidation'

export default {
  mixins: [
    PropValidation({
      width: columnWidths,
    }),
  ],
  props: {
    width: {
      default: 'fluid',
      type: String,
    },
  },
}
</script>
