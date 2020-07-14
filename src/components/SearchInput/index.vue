<template>
  <TextInput
    v-bind="TextInputProps"
    iconName="search"
    :onValueChange="handleValueChange"
    type="text"
    :value="safeValue"
  />
</template>

<script>
import debounce from 'lodash/debounce'
import pick from 'lodash/pick'

import TextInput from '../TextInput/index'

export default {
  components: { TextInput },
  props: {
    ...TextInput.props,
    delay: {
      default: 500,
      type: Number,
    },
    onSearch: {
      default: () => {},
      type: Function,
    },
  },
  data: () => ({
    valueState: undefined,
  }),
  computed: {
    classes() {
      return ['search-input', `search-input--color-${this.color}`]
    },

    safeValue() {
      return typeof this.valueState !== 'undefined'
        ? this.valueState
        : this.value
    },

    TextInputProps() {
      return {
        ...pick(this.$props, Object.keys(TextInput.props)),
        ...this.$attrs,
      }
    },
  },
  watch: {
    delay() {
      this.handleSearch = debounce(this.baseHandleSearch, this.delay)
    },
  },
  created() {
    this.handleSearch = debounce(this.baseHandleSearch, this.delay)
  },
  methods: {
    baseHandleSearch() {
      this.onSearch(this.safeValue)
    },

    handleValueChange(value) {
      if (!this.onValueChange) {
        this.valueState = value
      } else {
        this.onValueChange(value)
      }

      this.handleSearch()
    },
  },
}
</script>
