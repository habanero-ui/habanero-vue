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
      />
    </label>
    <Tag :onDelete="handleFileDelete" :text="fileName" />
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
    text: {
      default: undefined,
      type: String,
    },
  },
  data: () => ({
    fileName: '',
  }),
  methods: {
    handleFileDelete() {
      /* eslint-disable no-console */
      console.log('delete me')
    },
  },
}
</script>

<style scoped></style>
