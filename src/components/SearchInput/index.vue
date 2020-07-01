<template>
  <TextInput
    v-bind="TextInputProps"
    iconName="search"
    :onValueChange="handleValueChange"
    type="text"
    :value="valueState || value"
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
    valueState: '',
  }),
  computed: {
    classes() {
      return ['search-input', `search-input--color-${this.color}`]
    },

    TextInputProps() {
      return pick(this.$props, Object.keys(TextInput.props))
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
      this.onSearch(this.valueState || this.value)
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
