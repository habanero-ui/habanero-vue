import { action } from '@storybook/addon-actions'
// import { boolean } from '@storybook/addon-knobs'
import Select from '../index'

export default () => ({
  components: { Select },
  props: {
    options: {
      default: [
        { label: 'Select 1', value: 1 },
        { label: 'Select 2', value: 2 },
        { label: 'Select 3', value: 3 },
      ],
    },
  },
  template: `
    <div class="absolute inset-0 p-4">
      <div class="pb-4">
        <Select :options="options" @onSelectChange="onSelectChange"/>
      </div>

      <div>
        <Select :options="options" disabled/>
      </div>
    </div>
  `,
  methods: {
    onSelectChange: action('onSelectChange'),
  },
})
