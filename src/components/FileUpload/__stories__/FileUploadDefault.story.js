import { action } from '@storybook/addon-actions'
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
    text: {
      default: text('text', 'Select File'),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <FileUpload
        :accept="accept"
        :onChange="onChange"
        :text="text"
      />
    </div>
  `,
  methods: {
    onChange: action('onChange'),
  },
})
