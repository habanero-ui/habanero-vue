<template>
  <Columns alignY="center" space="small">
    <Column width="content">
      <Button
        :isLoading="isLoading"
        :text="text"
        :variant="buttonVariant"
        @click.native="handleFileSelect"
      />
      <input
        ref="input"
        :accept="accept"
        class="hidden mr-4"
        type="file"
        @change="handleChange"
      />
    </Column>
    <Column width="fluid">
      <Tag v-if="isTagVisible" :onDelete="handleFileDelete" :text="fileName" />
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
    buttonVariant: {
      default: undefined,
      type: String,
    },
    isLoading: {
      default: undefined,
      type: Boolean,
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
    file: undefined,
  }),
  computed: {
    fileName() {
      return this.file.name
    },

    isTagVisible() {
      return this.file && !this.isLoading
    },
  },
  methods: {
    handleChange(event) {
      const files = event.target.files || event.dataTransfer.files

      if (!files.length) return

      this.file = files[0]
      this.onChange(this.file)
    },

    handleFileDelete() {
      this.file = undefined
      this.onChange(undefined)
      this.$refs.input.value = ''
    },

    handleFileSelect() {
      this.$refs.input.click()
    },
  },
}
</script>
