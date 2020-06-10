import { text } from '@storybook/addon-knobs'
import Tab from '../index'

export default () => ({
  components: { Tab },
  props: {
    text: text('text', 'Text'),
  },
  template: `
    <div class="flex flex-start p-6">
      <Tab>{{ text }}</Tab>
    </div>
  `,
})
