<template>
  <div>
    <label v-if="id && text" :for="id">
      {{ text }}
      <input
        :id="id"
        :ref="id"
        :accept="accept"
        class="hidden mr-4"
        type="file"
        @change="handleChange"
      />
    </label>
    <Tag v-if="file" :onDelete="handleFileDelete" :text="fileName" />
  </div>
</template>

<script>
import Tag from '../Tag/index'

export default {
  components: {
    Tag,
  },
  props: {
    accept: {
      default: undefined,
      type: String,
    },
    id: {
      default: '',
      type: String,
    },
    onChange: {
      default: undefined,
      type: Function,
    },
    text: {
      default: undefined,
      type: String,
    },
  },
  data: () => ({
    file: null,
    fileName: '',
  }),
  methods: {
    handleChange(event) {
      const files = event.target.files || event.dataTransfer.files
      const path = event.target.value

      if (!files.length) {
        return
      }

      this.file = files[0]
      this.fileName = path.match(/[^\\/]*$/)[0]

      this.$emit('onChange', this.file)
    },

    handleFileDelete() {
      this.file = null
      this.fileName = ''
    },
  },
}
</script>

<style scoped></style>
