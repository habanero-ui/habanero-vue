<template>
  <Columns alignY="center" space="small">
    <Column width="content">
      <Button :text="text" @click.native="handleFileSelect" />
      <input
        ref="fileUpload"
        :accept="accept"
        class="hidden mr-4"
        type="file"
        @change="handleChange"
      />
    </Column>
    <Column width="fluid">
      <Tag v-if="file" :onDelete="handleFileDelete" :text="fileName" />
    </Column>
  </Columns>
</template>

<script>
import Button from '../Button/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Tag from '../Tag/index'

export default {
  components: {
    Button,
    Column,
    Columns,
    Tag,
  },
  props: {
    accept: {
      default: undefined,
      type: String,
    },
    onChange: {
      default: undefined,
      type: Function,
    },
    text: {
      default: 'Select File',
      type: String,
    },
  },
  data: () => ({
    file: null,
  }),
  computed: {
    fileName() {
      return this.file.name
    },
  },
  methods: {
    handleChange(event) {
      const files = event.target.files || event.dataTransfer.files

      if (!files.length) {
        return
      }

      this.file = files[0]

      this.onChange(this.file)
    },

    handleFileDelete() {
      this.file = null
      this.$refs.fileUpload.value = null
    },

    handleFileSelect() {
      this.$refs.fileUpload.click()
    },
  },
}
</script>
