// import { action } from '@storybook/addon-actions'
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
    <div class="absolute inset-0">
      <Select :options="options"/>
    </div>
  `,
  methods: {
    // onIsOpenChange: action('onIsOpenChange'),
  },
})
