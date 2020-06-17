<template>
  <details
    id="example_select"
    ref="details"
    v-click-outside="onClickOutside"
    class="select_container"
    @toggle="onToggle"
  >
    <summary>
      {{
        currentSelectedOption ? currentSelectedOption.label : 'Choose an option'
      }}
    </summary>
    <div ref="options" class="select">
      <label
        v-for="option in options"
        :key="option.value"
        class="select__option"
        :for="option.label"
      >
        <input
          :id="option.label"
          v-model="selected"
          type="radio"
          :name="name"
          :value="option.value"
        />
        {{ option.label }}
      </label>
    </div>
  </details>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Select',
  directives: { ClickOutside },
  props: {
    options: Array,
  },
  data: () => ({
    selected: '',
    name: Date.now().toString(),
    open: false,
  }),
  computed: {
    currentSelectedOption() {
      return this.options.find((item) => item.value === this.selected)
    },
  },

  watch: {
    open(value) {
      this.$refs.details.open = value
    },
  },

  methods: {
    onToggle(e) {
      this.open = e.target.open
    },
    onClickOutside() {
      console.log('outside')
      if (this.open) {
        this.open = false
      }
    },
  },
}
</script>
