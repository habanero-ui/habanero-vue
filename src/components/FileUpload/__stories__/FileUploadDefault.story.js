import { text } from '@storybook/addon-knobs'

import FileUpload from '../index'

export default () => ({
  components: { FileUpload },
  props: {
    accept: {
      default: text(
        'accept',
        'image/x-png,application/pdf,image/jpeg,image/jpg',
      ),
    },
    id: {
      default: text('id', 'file'),
    },
    text: {
      default: text('text', 'Select File'),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <FileUpload
        :accept="accept"
        :id="id"
        :text="text"
      />
    </div>
  `,
  methods: {},
})
